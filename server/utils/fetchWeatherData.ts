// Forecast for a single day
export interface ForecastDay {
  day: string
  temperature: number
  description: string
  icon: string
}

// Weather comparison between cities
export interface WeatherComparisonEntry {
  city: string
  temperature: string
  tempDiff: string
  humidity: string
  humidityDiff: string
  wind: string
  windDiff: string
}

// Main weather data for a city
export interface WeatherData {
  city: string
  temperature: number | null
  humidity: number | null
  windSpeed: number | null
  weatherIcon: string | null
  weatherDescription: string | null
  pressure: number | null
  cloudiness: number | null
  sunrise: string | null
  sunset: string | null
  forecast: ForecastDay[]
  comparison: WeatherComparisonEntry[]
  error?: string // error message if city not found
}

// Format Unix timestamp to HH:mm
function formatUnixTimeToHourMinutes(unix: number): string {
  const date = new Date(unix * 1000)
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

// Get weekday name from date string
function getWeekdayFromDate(dateStr: string): string {
  const daysPl = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']
  const date = new Date(dateStr)
  return daysPl[date.getDay()]
}

// Format temperature/wind/humidity difference
function formatDiff(diff: number, unit: string, [neg, pos]: [string, string]): string {
  if (diff === 0) return 'bez zmian'
  const label = diff > 0 ? pos : neg
  return `${label} o ${Math.abs(diff)}${unit.trim()}`
}

// Normalize text (remove accents, lowercase)
function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

// Fetch current and forecast weather data from API
export async function fetchWeatherData(city: string, apiKey: string): Promise<WeatherData> {
  const currentEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&units=metric&appid=${apiKey}&lang=pl`

  const forecastEndpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
    city
  )}&units=metric&appid=${apiKey}&lang=pl`

  try {
    const [currentRes, forecastRes] = await Promise.all([fetch(currentEndpoint), fetch(forecastEndpoint)])

    if (!currentRes.ok) throw new Error(`City not found: ${city}`)
    const currentData = await currentRes.json()

    let forecast: ForecastDay[] = []

    if (forecastRes.ok) {
      const forecastData = await forecastRes.json()
      const noonForecasts = forecastData.list.filter((item: any) => item.dt_txt.includes('12:00:00'))

      forecast = noonForecasts.slice(0, 5).map((item: any) => ({
        day: getWeekdayFromDate(item.dt_txt),
        temperature: Math.round(item.main.temp),
        description: item.weather[0].description,
        icon: item.weather[0].icon
      }))
    }

    return {
      city: currentData.name,
      temperature: Math.round(currentData.main.temp),
      humidity: currentData.main.humidity,
      windSpeed: Math.round(currentData.wind.speed * 3.6), // convert m/s to km/h
      weatherIcon: currentData.weather?.[0]?.icon || null,
      weatherDescription: currentData.weather?.[0]?.description || null,
      pressure: currentData.main.pressure,
      cloudiness: currentData.clouds.all,
      sunrise: formatUnixTimeToHourMinutes(currentData.sys.sunrise),
      sunset: formatUnixTimeToHourMinutes(currentData.sys.sunset),
      forecast,
      comparison: []
    }
  } catch (err) {
    console.error(`Error fetching weather for "${city}":`, err)
    return {
      city,
      temperature: null,
      humidity: null,
      windSpeed: null,
      weatherIcon: null,
      weatherDescription: null,
      pressure: null,
      cloudiness: null,
      sunrise: null,
      sunset: null,
      forecast: [],
      comparison: [],
      error: `Nie znaleziono miasta: "${city}"`
    }
  }
}

// Fetch weather data for other cities and compare
export async function fetchWeatherComparisonData(
  currentCity: string,
  apiKey: string
): Promise<WeatherComparisonEntry[]> {
  const currentData = await fetchWeatherData(currentCity, apiKey)
  const currentNormalized = normalize(currentData.city)

  const referenceCities = ['Kraków', 'Wrocław', 'Gdańsk', 'Warszawa'].filter(
    (city) => normalize(city) !== currentNormalized
  )

  const baseTemp = currentData.temperature ?? 0
  const baseHumidity = currentData.humidity ?? 0
  const baseWind = currentData.windSpeed ?? 0

  const results = await Promise.all(
    referenceCities.map(async (city) => {
      const data = await fetchWeatherData(city, apiKey)

      const temperature = data.temperature ?? 0
      const humidity = data.humidity ?? 0
      const windSpeed = data.windSpeed ?? 0

      const tempDiff = temperature - baseTemp
      const humidityDiff = humidity - baseHumidity
      const windDiff = windSpeed - baseWind

      return {
        city,
        temperature: `${temperature}°C`,
        tempDiff: formatDiff(tempDiff, '°C', ['zimniej', 'cieplej']),
        humidity: `${humidity}%`,
        humidityDiff: formatDiff(humidityDiff, '%', ['suchszy', 'wilgotniej']),
        wind: `${windSpeed} km/h`,
        windDiff: formatDiff(windDiff, ' km/h', ['słabszy', 'silniejszy'])
      }
    })
  )

  return results
}

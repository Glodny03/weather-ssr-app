// Map OpenWeather icon codes to internal image names
export const weatherPhotoMap: Record<string, string> = {
  '01d': 'sunny', // clear sky (day)
  '01n': 'sunny', // clear sky (night)
  '02d': 'partly-cloudy', // few clouds (day)
  '02n': 'partly-cloudy', // few clouds (night)
  '03d': 'cloudy', // scattered clouds
  '03n': 'cloudy',
  '04d': 'overcast', // broken/overcast clouds
  '04n': 'overcast',
  '09d': 'rain', // shower rain
  '09n': 'rain',
  '10d': 'rain', // rain
  '10n': 'rain',
  '11d': 'thunderstorm',
  '11n': 'thunderstorm',
  '13d': 'snow',
  '13n': 'snow',
  '50d': 'fog', // mist/fog
  '50n': 'fog'
}

// Return image path based on weather icon code
export function getWeatherImagePath(iconCode: string): string {
  const name = weatherPhotoMap[iconCode] || 'default' // fallback to 'default' if unknown
  return `/assets/weather-photos/${name}.webp`
}

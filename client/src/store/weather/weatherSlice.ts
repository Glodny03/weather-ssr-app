import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// One day forecast data
export interface ForecastEntry {
  day: string
  temperature: number
  description: string
  icon: string
}

// Weather data for comparison cities
export interface ComparisonCityWeather {
  city: string
  temperature: string
  tempDiff: string
  humidity: string
  humidityDiff: string
  wind: string
  windDiff: string
}

// Main weather state used in Redux
interface WeatherState {
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
  forecast: ForecastEntry[] // 5-day forecast
  comparison: ComparisonCityWeather[] // other cities weather comparison
  error: string | null // error message (e.g. city not found)
}

// Initial empty state
const initialState: WeatherState = {
  city: '',
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
  error: null
}

// Create Redux slice
export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    // Save weather data and reset error
    setWeather(state, action: PayloadAction<WeatherState>) {
      return {
        ...action.payload,
        error: null
      }
    },
    // Save error message (e.g. API failure, not found)
    setWeatherError(state, action: PayloadAction<string>) {
      state.error = action.payload
    }
  }
})

// Export actions and reducer
export const { setWeather, setWeatherError } = weatherSlice.actions
export default weatherSlice.reducer

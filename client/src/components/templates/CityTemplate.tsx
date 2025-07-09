import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/weather/store/store'
import { Box, Container } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// Main city weather view
import { CityWeatherSection } from '../organisms/CityWeatherSection'
// Comparison table with other cities
import { WeatherComparisonTable } from '../molecules/WeatherComparisonTable'
// Error message section if city not found
import { WeatherErrorSection } from '../organisms/WeatherErrorSection'

export const CityTemplate = () => {
  const theme = useTheme()

  // Get weather state from Redux
  const weather = useSelector((state: RootState) => state.weather)

  // Prepare forecast data for rendering
  const forecast = weather.forecast.map((entry) => ({
    day: entry.day,
    description: entry.description,
    temperature: `${entry.temperature}°`,
    icon: `https://openweathermap.org/img/wn/${entry.icon}.png` // Weather icon from API
  }))

  // If error exists (e.g. wrong city), show error component
  if (weather.error) {
    return <WeatherErrorSection message={weather.error} />
  }

  // Main weather UI with city and forecast data
  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        bgcolor: theme.palette.background.default,
        py: { xs: 4, sm: 6, md: 8 }
      }}
    >
      <Container maxWidth="lg">
        <CityWeatherSection
          city={weather.city}
          temperature={weather.temperature ? `${weather.temperature}°` : '--'}
          wind={weather.windSpeed ? `${weather.windSpeed}km/h` : '--'}
          humidity={weather.humidity ? `${weather.humidity}%` : '--'}
          iconCode={weather.weatherIcon || '01d'}
          forecast={forecast}
        />
      </Container>

      {/* Weather comparison table for other cities */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        {weather.comparison && <WeatherComparisonTable data={weather.comparison} />}
      </Container>
    </Box>
  )
}

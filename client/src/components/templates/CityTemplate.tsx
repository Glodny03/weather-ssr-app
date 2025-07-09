import React from 'react'
import { Box, Container } from '@mui/material'
import { CityWeatherSection } from '../organisms/CityWeatherSection'
import { getAssetUrl } from '../../utils/getAssetUrl'
import { useTheme } from '@mui/material/styles'
import { WeatherComparisonTable } from '../molecules/WeatherComparisonTable'

export const CityTemplate = () => {
  const theme = useTheme()

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
          city="Warszawa"
          temperature="08°"
          wind="2.4km/h"
          humidity="70%"
          imageUrl={getAssetUrl('weather/cloud.webp')}
          forecast={[
            { day: 'Piątek', description: 'Pochmurnie', temperature: '08°' },
            { day: 'Sobota', description: 'Pochmurnie', temperature: '12°' },
            { day: 'Niedziela', description: 'Pochmurnie', temperature: '23°' },
            { day: 'Poniedziałek', description: 'Pochmurnie', temperature: '08°' },
            { day: 'Wtorek', description: 'Pochmurnie', temperature: '08°' },
            { day: 'Środa', description: 'Pochmurnie', temperature: '08°' }
          ]}
        />
      </Container>

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <WeatherComparisonTable
          data={[
            {
              city: 'Kraków',
              temperature: '20°C',
              tempDiff: 'zimniej o 2°C',
              humidity: '60%',
              humidityDiff: 'wilgotniej o 5%',
              wind: '15 km/h',
              windDiff: 'silniejszy o 3 km/h'
            },
            {
              city: 'Wrocław',
              temperature: '23°C',
              tempDiff: 'cieplej o 1°C',
              humidity: '52%',
              humidityDiff: 'suchszy o 3%',
              wind: '10 km/h',
              windDiff: 'słabszy o 2 km/h'
            },
            {
              city: 'Gdańsk',
              temperature: '19°C',
              tempDiff: 'zimniej o 3°C',
              humidity: '68%',
              humidityDiff: 'wilgotniej o 13%',
              wind: '17 km/h',
              windDiff: 'silniejszy o 5 km/h'
            }
          ]}
        />
      </Container>
    </Box>
  )
}

import React from 'react'
import { Container, Grid, useMediaQuery, useTheme, SxProps, Theme } from '@mui/material'
import { AppImage } from '../atoms/AppImage'
import { DailyForecastList, ForecastEntry } from '../molecules/DailyForecastList'
import { CityOverview } from '../molecules/CityOverview'
import { getWeatherImagePath } from '../../utils/weatherImageMapper'

// Props for main weather display section
interface CityWeatherSectionProps {
  city: string
  temperature: string
  wind: string
  humidity: string
  forecast: ForecastEntry[]
  iconCode?: string
  imageAlt?: string
  sx?: SxProps<Theme>
}

export const CityWeatherSection = ({
  city,
  temperature,
  wind,
  humidity,
  forecast,
  iconCode,
  imageAlt = 'Forecast visual',
  sx
}: CityWeatherSectionProps) => {
  const theme = useTheme()
  const isMdDown = useMediaQuery(theme.breakpoints.down('md')) // Check if mobile/tablet

  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: theme.palette.background.paper,
        py: { xs: 4, sm: 6, md: 8 },
        borderRadius: '6px',
        border: `1px solid ${theme.palette.grey[100]}`,
        ...sx
      }}
    >
      <Grid container spacing={4}>
        {/* Left column: city name, temp, wind, humidity */}
        <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CityOverview city={city} temperature={temperature} wind={wind} humidity={humidity} />
        </Grid>

        {/* Middle column: 5-day forecast */}
        <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
          <DailyForecastList data={forecast} />
        </Grid>

        {/* Right column: image only on desktop and above */}
        {!isMdDown && iconCode && (
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <AppImage
              src={getWeatherImagePath(iconCode)} // Dynamic weather photo
              alt={imageAlt}
              sx={{
                borderRadius: 2,
                width: '100%',
                maxWidth: 420
              }}
            />
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

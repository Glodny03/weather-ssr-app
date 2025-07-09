import React from 'react'
import { Box, Stack } from '@mui/material'
import { AppTypography } from '../atoms/AppTypography'

interface CityOverviewProps {
  city: string
  temperature: string
  wind: string
  humidity: string
}

export const CityOverview = ({ city, temperature, wind, humidity }: CityOverviewProps) => {
  return (
    <Stack spacing={2} alignItems="center">
      <AppTypography
        sx={{
          fontSize: { xs: '4rem', sm: '6rem', md: '8rem' },
          fontWeight: 700,
          color: 'primary.main',
          lineHeight: 1
        }}
      >
        {temperature}
      </AppTypography>

      <AppTypography
        sx={{
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          fontWeight: 500,
          textAlign: 'center'
        }}
      >
        {city}
      </AppTypography>

      <Stack direction="row" spacing={6}>
        <Box textAlign="center">
          <AppTypography
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' },
              fontWeight: 400,
              mb: 0
            }}
          >
            Wiatr
          </AppTypography>
          <AppTypography
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem' },
              fontWeight: 600
            }}
          >
            {wind}
          </AppTypography>
        </Box>

        <Box textAlign="center">
          <AppTypography
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' },
              fontWeight: 400,
              mb: 0
            }}
          >
            Wilgotność
          </AppTypography>
          <AppTypography
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem' },
              fontWeight: 600
            }}
          >
            {humidity}
          </AppTypography>
        </Box>
      </Stack>
    </Stack>
  )
}

import React from 'react'
import { Box, Stack, useTheme } from '@mui/material'
import { AppTypography } from '../atoms/AppTypography'
import { WeatherIcon } from '../atoms/WeatherIcon'

interface DailyForecastItemProps {
  day: string
  description: string
  temperature: string
  isActive?: boolean
}

export const DailyForecastItem = ({ day, description, temperature, isActive }: DailyForecastItemProps) => {
  const theme = useTheme()

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        borderLeft: `4px solid ${isActive ? theme.palette.primary.main : 'transparent'}`,
        pl: 2,
        pr: 1,
        gap: 4
      }}
    >
      <WeatherIcon />

      <Box sx={{ flexGrow: 1 }}>
        <AppTypography variant="body1" sx={{ fontWeight: 600, m: 0 }}>
          {day}
        </AppTypography>
        <AppTypography variant="body2" color="text.secondary" sx={{ m: 0 }}>
          {description}
        </AppTypography>
      </Box>

      <AppTypography variant="body1" color="primary.main" sx={{ fontWeight: 600, whiteSpace: 'nowrap' }}>
        {temperature}
      </AppTypography>
    </Stack>
  )
}

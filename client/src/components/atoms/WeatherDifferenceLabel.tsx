import React from 'react'
import { Chip } from '@mui/material'

interface WeatherDifferenceLabelProps {
  label: string
  color: 'temp' | 'humidity' | 'wind'
}

const colorMap = {
  temp: '#D0E9F7',
  humidity: '#D5F5E3',
  wind: '#E8DAEF'
}

export const WeatherDifferenceLabel = ({ label, color }: WeatherDifferenceLabelProps) => (
  <Chip
    label={label}
    size="small"
    sx={{
      bgcolor: colorMap[color],
      fontWeight: 500,
      fontSize: '0.75rem',
      color: '#333',
      borderRadius: '6px',
      px: 1.5,
      py: 0.5,
      height: 'auto'
    }}
  />
)

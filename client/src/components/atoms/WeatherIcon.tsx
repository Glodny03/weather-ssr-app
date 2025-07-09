import React from 'react'
import { Box } from '@mui/material'

interface WeatherIconProps {
  iconCode: string
  alt?: string
  size?: number
}

export const WeatherIcon = ({ iconCode, alt = 'Pogoda', size = 52 }: WeatherIconProps) => {
  return <Box component="img" src={iconCode} alt={alt} sx={{ width: size, height: size }} />
}

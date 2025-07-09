import React from 'react'
import { Box } from '@mui/material'
import { getAssetUrl } from '../../utils/getAssetUrl'

export const WeatherIcon = () => {
  return <Box component="img" src={getAssetUrl('icons/rain.svg')} alt="Deszcz" sx={{ width: 32, height: 32 }} />
}

import React from 'react'
import Grid from '@mui/material/Grid'
import { SxProps, Theme } from '@mui/material'
import { CityCard, CityCardProps } from './CityCard'

export interface LocationListProps {
  locations: CityCardProps[]
  sx?: SxProps<Theme>
}

export const LocationList = ({ locations, sx }: LocationListProps) => {
  return (
    <Grid container spacing={2} sx={sx}>
      {locations.map((location) => (
        <Grid key={location.name} size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: 'flex' }}>
          <CityCard {...location} sx={{ flex: 1 }} />
        </Grid>
      ))}
    </Grid>
  )
}

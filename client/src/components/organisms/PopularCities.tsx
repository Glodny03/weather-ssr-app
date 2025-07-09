import React from 'react'
import { Box, Container } from '@mui/material'
import { AppTypography } from '../atoms/AppTypography'
import { LocationList } from '../molecules/LocationList'
import { getAssetUrl } from '../../utils/getAssetUrl'
import palette from '../../theme/palette'

export const PopularCities = () => {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        bgcolor: palette.background.paper,
        py: { xs: 6, md: 10 }
      }}
    >
      <Container maxWidth="lg">
        <AppTypography variant="h5" sx={{ fontWeight: 600 }}>
          Popularne lokalizacje:
        </AppTypography>

        <LocationList
          locations={[
            { name: 'Wrocław', imageUrl: getAssetUrl('cities/wroclaw.webp'), href: '/wroclaw' },
            { name: 'Warszawa', imageUrl: getAssetUrl('cities/warszawa.webp'), href: '/warszawa' },
            { name: 'Gdańsk', imageUrl: getAssetUrl('cities/gdansk.webp'), href: '/gdansk' },
            { name: 'Kraków', imageUrl: getAssetUrl('cities/krakow.webp'), href: '/krakow' }
          ]}
        />
      </Container>
    </Box>
  )
}

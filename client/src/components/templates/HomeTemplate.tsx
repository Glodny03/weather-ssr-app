import React from 'react'
import { Box } from '@mui/material'
import { SearchHero } from '../organisms/SearchHero'
import { PopularCities } from '../organisms/PopularCities'

export const HomeTemplate = () => {
  return (
    <Box component="main">
      <SearchHero />
      <PopularCities />
    </Box>
  )
}

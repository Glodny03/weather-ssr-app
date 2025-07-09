import React from 'react'
import { Box } from '@mui/material'
import { AppTypography } from '../atoms/AppTypography'

export interface CityCardProps {
  name: string // City name
  imageUrl: string // Image shown on the card
  href: string // URL to redirect when clicked
  sx?: any // Optional custom styles
}

export const CityCard = ({ name, imageUrl, href, sx }: CityCardProps) => {
  return (
    <Box
      component="a" // Make entire card a clickable link
      href={href}
      sx={{
        display: 'block',
        textDecoration: 'none',
        borderRadius: '6px',
        overflow: 'hidden',
        border: '1px solid #E0E0E0',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)' // Slight lift on hover
        },
        backgroundColor: 'background.paper',
        ...sx
      }}
    >
      {/* Image at the top */}
      <Box
        component="img"
        src={imageUrl}
        alt={name}
        sx={{
          width: '100%',
          height: 160,
          objectFit: 'cover' // Ensure image fills the space nicely
        }}
      />

      {/* City name below the image */}
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <AppTypography variant="subtitle1" fontWeight={600} gutterBottom={false}>
          {name}
        </AppTypography>
      </Box>
    </Box>
  )
}

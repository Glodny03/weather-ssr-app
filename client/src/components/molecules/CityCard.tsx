import React from 'react'
import { ChevronRight } from '@mui/icons-material'
import { Box, Stack, SxProps, Theme, useMediaQuery, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { AppImage } from '../atoms/AppImage'
import { AppTypography } from '../atoms/AppTypography'

export interface CityCardProps {
  name: string
  imageUrl: string
  href: string
  sx?: SxProps<Theme>
}

export const CityCard = ({ name, imageUrl, href, sx }: CityCardProps) => {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      component={Link}
      to={href}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        border: '1px solid',
        borderColor: theme.palette.grey[200],
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor: 'background.paper',
        height: '100%',
        transition: 'transform 0.2s ease-in-out',
        ...sx
      }}
    >
      <Box
        sx={{
          overflow: 'hidden'
        }}
      >
        <AppImage
          src={imageUrl}
          alt={name}
          width="100%"
          height={isXs ? 160 : 190}
          objectFit="cover"
          sx={{
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
      </Box>

      <Stack direction="row" alignItems="center" justifyContent="space-between" px={2} py={2}>
        <AppTypography variant="subtitle1" fontWeight={600} gutterBottom={false}>
          {name}
        </AppTypography>

        <ChevronRight sx={{ color: 'text.secondary' }} />
      </Stack>
    </Box>
  )
}

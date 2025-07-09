import React from 'react'
import { Box, Container, useTheme } from '@mui/material'
import { AppTypography } from '../atoms/AppTypography'

export const Footer: React.FC = () => {
  const theme = useTheme()
  const year = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.grey[100]}`,
        py: { xs: 2, sm: 3 }
      }}
    >
      <Container maxWidth="lg">
        <AppTypography fontWeight={500} variant="body2" color="text.secondary" textAlign="center" gutterBottom={false}>
          © {year}{' '}
          <Box component="span" fontWeight={600}>
            TheSunny
          </Box>{' '}
          – Jakub Mrzygłód. All rights reserved.
        </AppTypography>
      </Container>
    </Box>
  )
}

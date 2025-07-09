import React from 'react'
import { Box, Container, Typography, Paper } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

interface WeatherErrorSectionProps {
  message?: string
}

export const WeatherErrorSection = ({ message }: WeatherErrorSectionProps) => {
  const theme = useTheme()

  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        minHeight: '60vh',
        bgcolor: theme.palette.background.default,
        py: { xs: 8, sm: 10, md: 12 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            px: { xs: 4, sm: 6 },
            py: { xs: 5, sm: 6 },
            borderRadius: '6px',
            textAlign: 'center',
            border: `1px solid ${theme.palette.grey[100]}`
          }}
        >
          <ErrorOutlineIcon
            sx={{
              fontSize: '3rem',
              color: theme.palette.error.main,
              mb: 2
            }}
          />
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: theme.palette.error.main }}>
            Ups! Nie znaleziono miasta
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
            Spróbuj wpisać inną lokalizację.
            {message && (
              <>
                <br />
                <Box component="span" fontWeight={500} color="text.primary">
                  {message}
                </Box>
              </>
            )}
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}

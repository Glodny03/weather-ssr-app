import React from 'react'
import { Box, Container, useTheme, useMediaQuery, Stack } from '@mui/material'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { SearchForm } from '../molecules/SearchForm'
import { Logo } from '../atoms/Logo'

export const Header = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <Box
      component="header"
      sx={{
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: `0 4px 12px ${theme.palette.grey[100]}`,
        py: 2
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', sm: 'center' }}
          spacing={2}
        >
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-start' },
              width: '100%'
            }}
          >
            <Logo width={isMobile ? 120 : 160} />
          </Box>

          {!isHome && (
            <Box sx={{ width: '100%', maxWidth: { sm: 400 } }}>
              <SearchForm layout="compact" />
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  )
}

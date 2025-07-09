import React from 'react'
import { Box, Stack, Container, useTheme, useMediaQuery } from '@mui/material'
import { AppTypography } from '../atoms/AppTypography'
import { AppImage } from '../atoms/AppImage'
import { SearchForm } from '../molecules/SearchForm'
import { getAssetUrl } from '../../utils/getAssetUrl'

export const SearchHero = () => {
  const theme = useTheme()
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box component="section" sx={{ bgcolor: theme.palette.background.default, py: { xs: 4, sm: 6, md: 9 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 6, md: 8 }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box sx={{ flex: 1, maxWidth: 600 }}>
            <AppTypography variant="h4" sx={{ fontWeight: 500 }}>
              Twój{' '}
              <Box component="span" color="primary.main">
                spokój
              </Box>{' '}
              gwarantowany
            </AppTypography>

            <AppTypography variant="h1" sx={{ fontWeight: 700 }}>
              <Box component="span" color="primary.main">
                Prognoza
              </Box>{' '}
              zawsze pod ręką
            </AppTypography>

            <AppTypography variant="h3" sx={{ fontWeight: 500 }}>
              Sprawdź zanim ruszysz{' '}
              <Box component="span" color="primary.main">
                w drogę
              </Box>
            </AppTypography>

            <AppTypography variant="body2" color="text.secondary" sx={{ mt: 2, fontWeight: 500 }}>
              Sprawdź dokładną prognozę pogody dla swojej lokalizacji i zaplanuj dzień bez niespodzianek.
            </AppTypography>

            <Box mt={4} maxWidth={{ xs: '100%', sm: 500, md: 600 }}>
              <SearchForm layout="full" />
            </Box>
          </Box>

          {!isMdDown && (
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: 440,
                mx: 'auto'
              }}
            >
              <AppImage
                src={getAssetUrl('sunset-blob.webp')}
                alt="Zachód słońca"
                width="100%"
                height="auto"
                sx={{
                  maxWidth: { md: 420, lg: 460 },
                  transition: 'all 0.3s ease-in-out'
                }}
              />
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  )
}

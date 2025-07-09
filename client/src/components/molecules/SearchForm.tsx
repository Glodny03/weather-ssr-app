import React, { useEffect, useState } from 'react'
import { Box, InputAdornment, Stack, Paper, List, ListItemButton, ListItemText, ClickAwayListener } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { AppIcon } from '../atoms/AppIcon'
import { AppButton } from '../atoms/AppButton'
import { AppInput } from '../atoms/AppInput'
import { getAssetUrl } from '../../utils/getAssetUrl'

type SearchFormLayout = 'full' | 'compact'

export interface SearchFormProps {
  layout?: SearchFormLayout
}

interface PolishCity {
  Id: string
  Name: string
  Province: string
  District: string
  Commune: string
}

export const SearchForm = ({ layout = 'full' }: SearchFormProps) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [suggestions, setSuggestions] = useState<PolishCity[]>([])
  const [allCities, setAllCities] = useState<PolishCity[]>([])
  const [showDropdown, setShowDropdown] = useState(false)

  const isCompact = layout === 'compact'
  const direction: 'row' | { xs: 'column'; sm: 'row' } = isCompact ? 'row' : { xs: 'column', sm: 'row' as const }

  // Load Polish cities on mount
  useEffect(() => {
    fetch(getAssetUrl('../data/cities-pl.json'))
      .then((res) => res.json())
      .then((data) => setAllCities(data))
      .catch((err) => console.error('Failed to load cities:', err))
  }, [])

  // Update suggestions while typing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    setValue(input)
    setError(false)

    if (input.length >= 3) {
      const filtered = allCities.filter((city) => city.Name.toLowerCase().startsWith(input.toLowerCase())).slice(0, 10)
      setSuggestions(filtered)
      setShowDropdown(true)
    } else {
      setSuggestions([])
      setShowDropdown(false)
    }
  }

  // Submit search
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) {
      setError(true)
      return
    }

    window.location.href = `/${encodeURIComponent(trimmed)}`
  }

  // Click suggestion from dropdown
  const handleSuggestionClick = (city: PolishCity) => {
    setValue(city.Name)
    setSuggestions([])
    setShowDropdown(false)
    window.location.href = `/${encodeURIComponent(city.Name)}`
  }

  // Hide dropdown on click outside
  const handleClickAway = () => {
    setShowDropdown(false)
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ position: 'relative', width: '100%' }}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Stack direction={direction} spacing={2} alignItems="stretch" flexWrap="nowrap" sx={{ width: '100%' }}>
          <Box sx={{ flex: 1, position: 'relative' }}>
            <AppInput
              placeholder="Wpisz lokalizację..."
              value={value}
              onChange={handleChange}
              size={isCompact ? 'small' : 'medium'}
              error={error}
              helperText={error ? 'Wpisz poprawną nazwę miasta' : ''}
              sx={{ width: '100%' }}
              InputProps={
                !isCompact
                  ? {
                      startAdornment: (
                        <InputAdornment position="start">
                          <AppIcon icon={SearchIcon} color="action" sx={{ mr: 1.5 }} fontSize="small" />
                        </InputAdornment>
                      )
                    }
                  : undefined
              }
              inputProps={{ autoComplete: 'off' }} // Disable browser autocomplete
            />

            {/* Show suggestions dropdown */}
            {showDropdown && suggestions.length > 0 && (
              <Paper
                elevation={2}
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  mt: 1,
                  maxHeight: 240,
                  overflowY: 'auto',
                  zIndex: 10
                }}
              >
                <List dense disablePadding>
                  {suggestions.map((city) => (
                    <ListItemButton key={city.Id} onClick={() => handleSuggestionClick(city)}>
                      <ListItemText
                        primary={city.Name}
                        secondary={`${city.Commune}, ${city.District}, ${city.Province}`}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Paper>
            )}
          </Box>

          {/* Search button */}
          {isCompact ? (
            <AppButton
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                width: 40,
                height: 40,
                minWidth: 40,
                padding: 0
              }}
            >
              <AppIcon icon={SearchIcon} sx={{ color: '#fff' }} fontSize="small" />
            </AppButton>
          ) : (
            <AppButton
              label="Szukaj"
              type="submit"
              color="primary"
              variant="contained"
              size="large"
              sx={{
                px: { xs: 4, sm: 6, md: 8 },
                minWidth: { xs: 100, sm: 120 }
              }}
            />
          )}
        </Stack>
      </ClickAwayListener>
    </Box>
  )
}

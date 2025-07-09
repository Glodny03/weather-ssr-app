import React from 'react'
import { Box, InputAdornment, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { AppIcon } from '../atoms/AppIcon'
import { AppButton } from '../atoms/AppButton'
import { AppInput } from '../atoms/AppInput'

type SearchFormLayout = 'full' | 'compact'

export interface SearchFormProps {
  layout?: SearchFormLayout
}

export const SearchForm = ({ layout = 'full' }: SearchFormProps) => {
  const [value, setValue] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search:', value)
  }

  const isCompact = layout === 'compact'
  const direction: 'row' | { xs: 'column'; sm: 'row' } = isCompact ? 'row' : { xs: 'column', sm: 'row' as const }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack direction={direction} spacing={2} alignItems="stretch" flexWrap="nowrap" sx={{ width: '100%' }}>
        <AppInput
          placeholder="Wpisz lokalizację..."
          value={value}
          onChange={handleChange}
          size={isCompact ? 'small' : 'medium'}
          sx={{ flex: 1 }}
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
        />

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
    </Box>
  )
}

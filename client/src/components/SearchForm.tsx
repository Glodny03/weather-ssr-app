import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Box } from '@mui/material'

export const SearchForm = () => {
  const [location, setLocation] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (location.trim()) {
      navigate(`/${location.trim()}`)
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" gap={2} my={4}>
      <TextField
        label="Lokalizacja"
        variant="outlined"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        fullWidth
      />
      <Button variant="contained" type="submit">
        Szukaj
      </Button>
    </Box>
  )
}

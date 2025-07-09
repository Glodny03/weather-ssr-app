import React from 'react'
import { Chip } from '@mui/material'

interface WeatherDifferenceLabelProps {
  label: string
  color: 'temp' | 'humidity' | 'wind'
}

const getChipColor = (label: string, type: 'temp' | 'humidity' | 'wind') => {
  const l = label.toLowerCase()

  if (l.includes('bez zmian')) {
    return { bg: '#ECECEC', text: '#555' }
  }

  if (type === 'temp') {
    if (l.includes('cieplej')) return { bg: '#FFE5B4', text: '#A04000' }
    if (l.includes('zimniej')) return { bg: '#D6EAF8', text: '#154360' }
  }

  if (type === 'humidity') {
    if (l.includes('wilgotniej')) return { bg: '#D4EFDF', text: '#1E8449' }
    if (l.includes('suchszy')) return { bg: '#FDEBD0', text: '#7E5109' }
  }

  if (type === 'wind') {
    if (l.includes('silniejszy')) return { bg: '#EBF5FB', text: '#21618C' }
    if (l.includes('słabszy')) return { bg: '#FDF2E9', text: '#7D6608' }
  }

  return { bg: '#f0f0f0', text: '#333' }
}

export const WeatherDifferenceLabel = ({ label, color }: WeatherDifferenceLabelProps) => {
  const { bg, text } = getChipColor(label, color)

  return (
    <Chip
      label={label}
      size="small"
      sx={{
        bgcolor: bg,
        color: text,
        fontWeight: 500,
        fontSize: '0.75rem',
        borderRadius: '6px',
        px: 1.5,
        py: 0.5,
        height: 'auto'
      }}
    />
  )
}

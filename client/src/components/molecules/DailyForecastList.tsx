import React from 'react'
import { Stack } from '@mui/material'
import { DailyForecastItem } from './DailyForecastItem'

// Single forecast item data
export interface ForecastEntry {
  day: string
  description: string
  temperature: string
  icon: string
}

interface DailyForecastListProps {
  data: ForecastEntry[] // List of forecast entries
  activeIndex?: number // Optional: index of the "active" day (e.g. today)
}

export const DailyForecastList = ({ data, activeIndex = 0 }: DailyForecastListProps) => {
  return (
    <Stack spacing={2}>
      {/* Render each forecast item */}
      {data.map((item, index) => (
        <DailyForecastItem
          key={item.day + index} // Unique key
          day={item.day}
          description={item.description}
          temperature={item.temperature}
          icon={item.icon}
          isActive={index === activeIndex} // Highlight the active item
        />
      ))}
    </Stack>
  )
}

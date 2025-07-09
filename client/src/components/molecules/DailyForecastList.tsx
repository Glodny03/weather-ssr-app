import React from 'react'
import { Stack } from '@mui/material'
import { DailyForecastItem } from './DailyForecastItem'

export interface ForecastEntry {
  day: string
  description: string
  temperature: string
}

interface DailyForecastListProps {
  data: ForecastEntry[]
  activeIndex?: number
}

export const DailyForecastList = ({ data, activeIndex = 0 }: DailyForecastListProps) => {
  return (
    <Stack spacing={2}>
      {data.map((item, index) => (
        <DailyForecastItem
          key={item.day + index}
          day={item.day}
          description={item.description}
          temperature={item.temperature}
          isActive={index === activeIndex}
        />
      ))}
    </Stack>
  )
}

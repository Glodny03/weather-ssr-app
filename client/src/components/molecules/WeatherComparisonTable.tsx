import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { WeatherDifferenceLabel } from '../atoms/WeatherDifferenceLabel'

interface CityWeatherData {
  city: string
  temperature: string
  tempDiff: string
  humidity: string
  humidityDiff: string
  wind: string
  windDiff: string
}

interface Props {
  data: CityWeatherData[]
}

export const WeatherComparisonTable = ({ data }: Props) => (
  <TableContainer
    component={(props) => <Paper elevation={0} {...props} />}
    sx={{
      bgcolor: (theme) => theme.palette.background.paper,
      borderRadius: '12px',
      border: (theme) => `1px solid ${theme.palette.grey[100]}`,
      boxShadow: 'none',
      overflowX: 'auto',
      px: { xs: 3, sm: 4, md: 5 },
      py: { xs: 3, sm: 4, md: 5 },
      transition: 'all 0.3s ease-in-out'
    }}
  >
    <Table size="medium" sx={{ minWidth: 700 }}>
      <TableHead>
        <TableRow
          sx={{
            '& th': {
              fontWeight: 600,
              fontSize: '0.875rem',
              color: 'text.primary',
              whiteSpace: 'nowrap',
              borderBottom: (theme) => `1px solid ${theme.palette.grey[200]}`
            }
          }}
        >
          <TableCell>Miasto</TableCell>
          <TableCell>Temperatura</TableCell>
          <TableCell>Różnica</TableCell>
          <TableCell>Wilgotność</TableCell>
          <TableCell>Różnica</TableCell>
          <TableCell>Wiatr</TableCell>
          <TableCell>Różnica</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow
            key={row.city}
            hover
            sx={{
              '&:last-child td, &:last-child th': { borderBottom: 0 },
              '& td': {
                fontSize: '0.875rem',
                borderBottom: (theme) => `1px solid ${theme.palette.grey[100]}`,
                whiteSpace: 'nowrap',
                py: 2
              }
            }}
          >
            <TableCell>
              <Typography fontWeight={600}>{row.city}</Typography>
            </TableCell>
            <TableCell>{row.temperature}</TableCell>
            <TableCell>
              <WeatherDifferenceLabel label={row.tempDiff} color="temp" />
            </TableCell>
            <TableCell>{row.humidity}</TableCell>
            <TableCell>
              <WeatherDifferenceLabel label={row.humidityDiff} color="humidity" />
            </TableCell>
            <TableCell>{row.wind}</TableCell>
            <TableCell>
              <WeatherDifferenceLabel label={row.windDiff} color="wind" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

import React from 'react'
import { Typography, TypographyProps } from '@mui/material'

export interface AppTypographyProps extends TypographyProps {
  gutterBottom?: boolean
}

export const AppTypography = ({ gutterBottom = true, sx, ...props }: AppTypographyProps) => {
  return (
    <Typography
      sx={{
        mb: gutterBottom ? '1rem' : 0,
        ...sx
      }}
      color={props.color || 'text.primary'}
      {...props}
    />
  )
}

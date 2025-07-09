import React from 'react'
import { Box, SxProps, Theme } from '@mui/material'

export interface AppImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt?: string
  width?: number | string
  height?: number | string
  sx?: SxProps<Theme>
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  borderRadius?: number | string
}

export const AppImage = ({
  src,
  alt = '',
  width = '100%',
  height = 'auto',
  sx,
  objectFit = 'cover',
  borderRadius = 0,
  loading = 'lazy',
  ...props
}: AppImageProps) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading={loading}
      width={width}
      height={height}
      sx={{
        display: 'block',
        width,
        height,
        objectFit,
        borderRadius,
        ...sx
      }}
      {...props}
    />
  )
}

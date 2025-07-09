import React from 'react'

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number
  height?: number
}

export const Logo = ({ width = 160, height = 48, alt = 'TheSunny logo', ...props }: LogoProps) => {
  return <img src="/assets/logo.svg" alt={alt} width={width} height={height} {...props} />
}

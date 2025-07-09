import React from 'react'
import { SvgIconProps } from '@mui/material'

export interface AppIconProps extends SvgIconProps {
  icon: React.ElementType
}

export const AppIcon = ({ icon: Icon, fontSize = 'medium', ...props }: AppIconProps) => {
  return <Icon fontSize={fontSize} {...props} />
}

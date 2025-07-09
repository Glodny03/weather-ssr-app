import React from 'react'
import { Button, ButtonProps } from '@mui/material'

export interface AppButtonProps extends ButtonProps {
  label?: string
  children?: React.ReactNode
}

export const AppButton = ({ label, children, ...props }: AppButtonProps) => {
  return <Button {...props}>{children ?? label}</Button>
}

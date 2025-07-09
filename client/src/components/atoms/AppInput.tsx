import React from 'react'
import { TextField, TextFieldProps } from '@mui/material'

export type AppInputProps = TextFieldProps

export const AppInput = (props: AppInputProps) => {
  return <TextField fullWidth variant="outlined" {...props} />
}

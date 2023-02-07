import React from 'react'
import { MenuItem, TextField } from '@mui/material'
import { MuiSelectProps } from '@/configurations/interfaces'

function MuiSelect({ options, ...rest }: MuiSelectProps) {
  return (
    <TextField select fullWidth {...rest}>
      {options.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default MuiSelect

import React from 'react'

import { MenuItem, TextField } from '@mui/material'

interface Option {
  value: any
  label: string
}

interface Props {
  options: Array<Option>
  [x: string]: any
}

function MuiSelect({ options, ...rest }: Props) {
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

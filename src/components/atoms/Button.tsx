import { ButtonProps } from '@/configurations/interfaces'
import React from 'react'

function Button({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>
}

export default Button

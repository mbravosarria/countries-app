import React from 'react'
import { TextProps } from '@/configurations/interfaces'

function P({ children, ...rest }: TextProps) {
  return <p {...rest}>{children}</p>
}

export default P

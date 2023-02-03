import React from 'react'

interface Props {
  type: string
  [x: string]: any
}

function Input({ type, ...rest }: Props) {
  return <input type={type} {...rest} />
}

export default Input

import React from 'react'

interface Props {
  children: React.ReactNode
  [x: string]: any
}

function P({ children, ...rest }: Props) {
  return <p {...rest}>{children}</p>
}

export default P

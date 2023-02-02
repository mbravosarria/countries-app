import React from 'react'

interface Props {
  children: React.ReactNode
  [x: string]: any
}

function H1({ children, ...rest }: Props) {
  return <h1 {...rest}>{children}</h1>
}

export default H1

import React from 'react'

interface Props {
  children: React.ReactNode
  [x: string]: any
}

function H2({ children, ...rest }: Props) {
  return <h2 {...rest}>{children}</h2>
}

export default H2

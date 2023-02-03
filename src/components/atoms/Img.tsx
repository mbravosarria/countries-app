import React from 'react'
import Image from 'next/image'

interface Props {
  src: string
  alt: string
  [x: string]: any
}

function Img({ src, alt, ...rest }: Props) {
  return (
    <div {...rest}>
      <Image src={src} alt={alt} fill />
    </div>
  )
}

export default Img

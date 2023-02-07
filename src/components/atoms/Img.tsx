import React from 'react'
import Image from 'next/image'
import { ImgProps } from '@/configurations/interfaces'

function Img({ src, alt, ...rest }: ImgProps) {
  return (
    <div {...rest}>
      <Image src={src} alt={alt} fill />
    </div>
  )
}

export default Img

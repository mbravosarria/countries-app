import React from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'
import { InfoBlockProps } from '@/configurations/interfaces'

const InfoLine = dynamic(() => import('@/components/molecules/InfoLine'))

function InfoBlock({ data }: InfoBlockProps) {
  return (
    <div className={styles.infoBlock}>
      {data.map((item) => (
        <InfoLine key={item.value} {...item} />
      ))}
    </div>
  )
}

export default InfoBlock

import React from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'

const InfoLine = dynamic(() => import('@/components/molecules/InfoLine'))

interface Info {
  label: string
  value: string
}

interface Props {
  data: Array<Info>
}

function InfoBlock({ data }: Props) {
  return (
    <div className={styles.infoBlock}>
      {data.map((item) => (
        <InfoLine key={item.value} {...item} />
      ))}
    </div>
  )
}

export default InfoBlock

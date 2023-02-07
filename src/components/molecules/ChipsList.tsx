import React from 'react'
import styles from '@/styles/country-details.module.scss'
import dynamic from 'next/dynamic'
import { ChipListProps } from '@/configurations/interfaces'

const Chip = dynamic(() => import('@/components/atoms/Chip'))
const P = dynamic(() => import('@/components/atoms/P'))

function ChipsList({ data }: ChipListProps) {
  return (
    <div className={styles.chipList}>
      <P className={styles.chipListLabel}>Border Countries:</P>
      <div className={styles.chipListItems}>
        {data?.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
    </div>
  )
}

export default ChipsList

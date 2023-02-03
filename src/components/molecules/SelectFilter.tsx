import React from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'

const MuiSelect = dynamic(() => import('@/components/atoms/MuiSelect'))

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
]

function SelectFilter() {
  return (
    <div className={styles.selectFilter}>
      <MuiSelect options={options} label="Filter by Region" />
    </div>
  )
}

export default SelectFilter

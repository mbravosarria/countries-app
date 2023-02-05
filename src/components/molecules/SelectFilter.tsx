import React from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'

const MuiSelect = dynamic(() => import('@/components/atoms/MuiSelect'))

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
]

interface Props {
  setCountriesByRegion: Function
}

function SelectFilter({ setCountriesByRegion }: Props) {
  return (
    <div className={styles.selectFilter}>
      <MuiSelect
        options={options}
        label="Filter by Region"
        onChange={setCountriesByRegion}
      />
    </div>
  )
}

export default SelectFilter

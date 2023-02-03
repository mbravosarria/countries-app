import React from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'

const SearchInput = dynamic(() => import('@/components/molecules/SearchInput'))
const SelectFilter = dynamic(
  () => import('@/components/molecules/SelectFilter')
)

function CountriesFilter() {
  return (
    <div className={styles.filterBarContainer}>
      <SearchInput />
      <SelectFilter />
    </div>
  )
}

export default CountriesFilter

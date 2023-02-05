import React from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'

const SearchInput = dynamic(() => import('@/components/molecules/SearchInput'))
const SelectFilter = dynamic(
  () => import('@/components/molecules/SelectFilter')
)

interface Props {
  setCountriesByName: Function
  setCountriesByRegion: Function
}

function CountriesFilter({ setCountriesByName, setCountriesByRegion }: Props) {
  return (
    <div className={styles.filterBarContainer}>
      <SearchInput setCountriesByName={setCountriesByName} />
      <SelectFilter setCountriesByRegion={setCountriesByRegion} />
    </div>
  )
}

export default CountriesFilter

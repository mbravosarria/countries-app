import React from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'
import { CountriesFilterProps } from '@/configurations/interfaces'

const SearchInput = dynamic(() => import('@/components/molecules/SearchInput'))
const SelectFilter = dynamic(
  () => import('@/components/molecules/SelectFilter')
)

function CountriesFilter({
  setCountriesByName,
  setCountriesByRegion,
}: CountriesFilterProps) {
  return (
    <div className={styles.filterBarContainer}>
      <SearchInput setCountriesByName={setCountriesByName} />
      <SelectFilter setCountriesByRegion={setCountriesByRegion} />
    </div>
  )
}

export default CountriesFilter

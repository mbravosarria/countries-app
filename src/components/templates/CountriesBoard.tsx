import React from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'
import { CountriesBoardProps } from '@/configurations/interfaces'

const CountriesFilter = dynamic(
  () => import('@/components/organisms/CountriesFilter')
)
const CountriesList = dynamic(
  () => import('@/components/organisms/CountriesList')
)

function CountriesBoard({
  data,
  setCountriesByName,
  setCountriesByRegion,
}: CountriesBoardProps) {
  return (
    <div className={styles.boardContainer}>
      <CountriesFilter {...{ setCountriesByName, setCountriesByRegion }} />
      <CountriesList data={data} />
    </div>
  )
}

export default CountriesBoard

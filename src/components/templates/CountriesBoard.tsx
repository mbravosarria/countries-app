import React from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'

const CountriesFilter = dynamic(
  () => import('@/components/organisms/CountriesFilter')
)
const CountriesList = dynamic(
  () => import('@/components/organisms/CountriesList')
)

interface Props {
  data: Array<any>
  setCountriesByName: Function
  setCountriesByRegion: Function
}

function CountriesBoard({
  data,
  setCountriesByName,
  setCountriesByRegion,
}: Props) {
  return (
    <div className={styles.boardContainer}>
      <CountriesFilter {...{ setCountriesByName, setCountriesByRegion }} />
      <CountriesList data={data} />
    </div>
  )
}

export default CountriesBoard

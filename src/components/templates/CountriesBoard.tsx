import React from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'

const CountriesFilter = dynamic(
  () => import('@/components/organisms/CountriesFilter')
)
const CountriesList = dynamic(
  () => import('@/components/organisms/CountriesList')
)

function CountriesBoard() {
  return (
    <div className={styles.boardContainer}>
      <CountriesFilter />
      <CountriesList />
    </div>
  )
}

export default CountriesBoard

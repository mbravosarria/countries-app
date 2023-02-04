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
}

function CountriesBoard({ data }: Props) {
  return (
    <div className={styles.boardContainer}>
      <CountriesFilter />
      <CountriesList data={data} />
    </div>
  )
}

export default CountriesBoard

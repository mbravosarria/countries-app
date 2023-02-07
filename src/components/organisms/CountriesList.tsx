import React from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'
import { CountriesListProps } from '@/configurations/interfaces'

const CountryCard = dynamic(() => import('@/components/organisms/CountryCard'))

function CountriesList({ data }: CountriesListProps) {
  return (
    <div className={styles.countriesList}>
      {data?.map((item) => (
        <CountryCard key={item?.alpha2Code} data={item} />
      ))}
    </div>
  )
}

export default CountriesList

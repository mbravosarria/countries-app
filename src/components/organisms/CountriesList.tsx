import React from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'

const CountryCard = dynamic(() => import('@/components/organisms/CountryCard'))

interface Props {
  data: Array<any>
}

function CountriesList({ data }: Props) {
  return (
    <div className={styles.countriesList}>
      {data?.map((item) => (
        <CountryCard key={item?.alpha2Code} data={item} />
      ))}
    </div>
  )
}

export default CountriesList

import React from 'react'
import styles from '@/styles/country-details.module.scss'
import dynamic from 'next/dynamic'
import { CountryDetailsProps } from '@/configurations/interfaces'

const BackButton = dynamic(() => import('@/components/molecules/BackButton'))
const CountryDetailsBox = dynamic(
  () => import('@/components/organisms/CountryDetailsBox')
)

function CountryDetails({ data }: CountryDetailsProps) {
  return (
    <div className={styles.countryDetails}>
      <BackButton />
      <CountryDetailsBox data={data} />
    </div>
  )
}

export default CountryDetails

import React from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'

const Img = dynamic(() => import('@/components/atoms/Img'))
const H2 = dynamic(() => import('@/components/atoms/H2'))
const InfoBlock = dynamic(() => import('@/components/molecules/InfoBlock'))

interface Props {
  data: any
}

function CountryCard({ data }: Props) {
  const infoList = [
    { label: 'Population', value: data?.population },
    { label: 'Region', value: data?.region },
    { label: 'Capital', value: data?.capital },
  ]

  return (
    <div className={styles.countryCard}>
      <Img
        className={styles.countryCardImg}
        src={data?.flag}
        alt={data?.alpha3Code}
      />
      <div className={styles.countryCardInfo}>
        <H2 className={styles.countryCardTitle}>{data?.name}</H2>
        <InfoBlock data={infoList} />
      </div>
    </div>
  )
}

export default CountryCard

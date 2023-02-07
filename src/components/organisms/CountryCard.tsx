import React from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'
import { CountryCardProps } from '@/configurations/interfaces'
import Link from 'next/link'

const Img = dynamic(() => import('@/components/atoms/Img'))
const H2 = dynamic(() => import('@/components/atoms/H2'))
const InfoBlock = dynamic(() => import('@/components/molecules/InfoBlock'))

function CountryCard({ data }: CountryCardProps) {
  const infoList = [
    { label: 'Population', value: data?.population.toString() },
    { label: 'Region', value: data?.region },
    { label: 'Capital', value: data?.capital },
  ]

  return (
    <div className={styles.countryCard}>
      <Link href={`/${data?.name}`}>
        <Img
          className={styles.countryCardImg}
          src={data?.flag}
          alt={data?.alpha3Code}
        />
        <div className={styles.countryCardInfo}>
          <H2 className={styles.countryCardTitle}>{data?.name}</H2>
          <InfoBlock data={infoList} />
        </div>
      </Link>
    </div>
  )
}

export default CountryCard

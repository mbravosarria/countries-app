import React from 'react'
import styles from '@/styles/country-details.module.scss'
import dynamic from 'next/dynamic'
import { CountryDetailsBoxProps } from '@/configurations/interfaces'

const Img = dynamic(() => import('@/components/atoms/Img'))
const P = dynamic(() => import('@/components/atoms/P'))
const InfoBlock = dynamic(() => import('@/components/molecules/InfoBlock'))
const ChipsList = dynamic(() => import('@/components/molecules/ChipsList'))

function CountryDetailsBox({ data }: CountryDetailsBoxProps) {
  const arrayInfoToString = () => {
    let topLevelDomain = ''
    let currencies = ''
    let languages = ''

    data.topLevelDomain.map((item) => (topLevelDomain += item))
    data.currencies.map((item) => (currencies += item.name))
    data.languages.map((item) => (languages += item.name))

    return {
      topLevelDomain,
      currencies,
      languages,
    }
  }

  const firstInfoBlock = [
    { label: 'Native Name', value: data?.nativeName },
    { label: 'Population', value: data?.population.toString() },
    { label: 'Region', value: data?.region },
    { label: 'Sub Region', value: data?.subregion },
    { label: 'Capital', value: data?.capital },
  ]

  const secondInfoBlock = [
    { label: 'Top Level Domain', value: arrayInfoToString()?.topLevelDomain },
    { label: 'Currencies', value: arrayInfoToString()?.currencies },
    { label: 'Languages', value: arrayInfoToString()?.languages },
  ]

  return (
    <div className={styles.countryDetailsBox}>
      <Img
        className={styles.countryDetailsImg}
        src={data?.flag}
        alt={`${data?.name}'s flag image`}
      />
      <div className={styles.countryDetailsInfo}>
        <P className={styles.countryDetailsName}>{data?.name}</P>
        <div className={styles.countryDetailsBoxesContainer}>
          <div className={styles.firstInfoBlock}>
            <InfoBlock data={firstInfoBlock} />
          </div>
          <InfoBlock data={secondInfoBlock} />
        </div>
        {data?.borders && <ChipsList data={data?.borders} />}
      </div>
    </div>
  )
}

export default CountryDetailsBox

import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '@/styles/country-details.module.scss'
import countries from '@/data.json'

import { AxiosInstance } from '@/configurations/axios'

const CountryDetails = dynamic(
  () => import('@/components/templates/CountryDetails')
)

export default function CountryDetailsPage({ country }: any) {
  return (
    <>
      <Head>
        <title>Country Details</title>
        <meta
          name="description"
          content="Detailed view of the country information"
        />
      </Head>
      <main className={styles.main}>
        <CountryDetails data={country} />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const paths = countries.map((item: any) => ({
    params: { name: item.name.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const country = countries.filter(
    (item) =>
      params.name &&
      item.name.toLowerCase().indexOf(params.name?.toString().toLowerCase()) !==
        -1
  )

  return {
    props: {
      country,
    },
  }
}

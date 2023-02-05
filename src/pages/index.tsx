import Head from 'next/head'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'
import { AxiosInstance } from '@/configurations/axios'
import { useEffect, useState } from 'react'

const CountriesBoard = dynamic(
  () => import('@/components/templates/CountriesBoard')
)

interface Props {
  data: Array<any>
}

export default function Home({ data }: Props) {
  const [mounted, setMounted] = useState(false)
  const [countriesDisplay, setCountriesDisplay] = useState(data)

  const setCountriesByName = async (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target.value !== '')
      setCountriesDisplay(
        await (
          await AxiosInstance.get(`/api/countries/name/${target.value}`)
        ).data.data
      )
    else setCountriesDisplay(data)
  }

  const setCountriesByRegion = async (event: Event) => {
    const target = event.target as HTMLSelectElement
    setCountriesDisplay(
      await (
        await AxiosInstance.get(`/api/countries/region/${target.value}`)
      ).data.data
    )
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Head>
        <title>REST Countries API</title>
        <meta
          name="description"
          content="REST Countries API with color theme switcher"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CountriesBoard
          data={countriesDisplay}
          {...{ setCountriesByName, setCountriesByRegion }}
        />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const res = await AxiosInstance.get('/api/countries')
  const data = res.data.data

  // Pass data to the page via props
  return { props: { data } }
}

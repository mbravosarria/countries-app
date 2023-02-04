import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'
import { AxiosInstance } from '@/configurations/axios'

const inter = Inter({ subsets: ['latin'] })

const CountriesBoard = dynamic(
  () => import('@/components/templates/CountriesBoard')
)

interface Props {
  data: Array<any>
}

export default function Home({ data }: Props) {
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
        <CountriesBoard data={data} />
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

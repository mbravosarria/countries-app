import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
      <main className={styles.main}></main>
    </>
  )
}

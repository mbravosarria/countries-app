import '@/styles/globals.scss'
import '@/styles/custom-mui.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import Layout from '@/layouts/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

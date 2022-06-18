import '../styles/globals.css'
import Layout from '../components/layout'
import type { AppProps } from 'next/app'

function OSAIWebApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default OSAIWebApp

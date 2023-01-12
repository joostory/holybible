import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { APP_NAME } from 'domain/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

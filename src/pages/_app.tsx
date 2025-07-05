import 'styles/globals.css'
import 'styles/index.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { Provider } from 'jotai'
import { APP_NAME } from 'domain/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Head>
        <title>{APP_NAME}</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/images/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/images/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:title" content="Holybible" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://holybible.joostory.net" />
        <meta property="og:image" content="/images/holybible.png" />
        <meta property="og:description" content="간단히 볼 수 있는 성경 웹버전" />
        <meta property="fb:app_id" content="133777953366478" />
      </Head>
      <Script src='/ga.js' />
      <Component {...pageProps} />
    </Provider>
  )
}

import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot, useSetRecoilState } from 'recoil'
import { bibleState } from 'state/bible'
import { ReactNode, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from 'components/Loading'
import { APP_NAME } from 'domain/app'
import Head from 'next/head'

type ComponentProps = {
  children: ReactNode
}

function AppComponent({children}: ComponentProps) {
  const setVersions = useSetRecoilState(bibleState)
  const [loading, setLoading] = useState<Boolean>(true)

  useEffect(() => {
    axios.get("/bible.json")
      .then(r => setVersions(r.data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      {children}
    </>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AppComponent>
        <Head>
          <title>{APP_NAME}</title>
        </Head>
        <Component {...pageProps} />
      </AppComponent>
    </RecoilRoot>
  )
}

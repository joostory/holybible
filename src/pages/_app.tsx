import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil'
import { bibleState } from 'state/bible'
import { ReactNode, useEffect, useState } from 'react'
import axios from 'axios'

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
    return (
      <div className='flex items-center justify-center h-screen'>
        <progress className="progress w-56"></progress>
      </div>
    )
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
        <Component {...pageProps} />
      </AppComponent>
    </RecoilRoot>
  )
}

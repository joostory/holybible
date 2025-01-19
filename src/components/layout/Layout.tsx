import { ReactNode } from "react"
import Header from "components/layout/Header"
import { useAtomValue } from 'jotai'
import { themeState } from "state/theme"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const theme = useAtomValue(themeState)

  return (
    <div className='h-screen flex flex-col' data-theme={theme}>
      <Header />
      <div className='fixed top-16 bottom-0 left-0 right-0'>
        { children }
      </div>
    </div>
  )
}

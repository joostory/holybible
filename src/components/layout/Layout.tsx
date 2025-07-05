import { ReactNode, useEffect, useState } from "react"
import Header from "components/layout/Header"
import { useAtomValue } from 'jotai'
import { themeState } from "state/theme"
import { Search } from "../bible/Search"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const theme = useAtomValue(themeState)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className='h-screen flex flex-col' data-theme={theme}>
      <Header onSearchClick={() => setOpen(true)} />
      <div className='fixed top-16 bottom-0 left-0 right-0'>
        { children }
      </div>
      <Search open={open} onOpenChange={setOpen} />
    </div>
  )
}

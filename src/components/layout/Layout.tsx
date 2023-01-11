import { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='fixed top-16 bottom-0 left-0 right-0'>
      { children }
    </div>
  )
}

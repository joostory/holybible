import { ReactNode } from 'react'

type ContentProps = {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <div className="absolute left-60 right-0 top-0 bottom-0" style={{fontFamily: "serif"}}>
      {children}
    </div>
  )
}

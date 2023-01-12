import { ReactNode } from 'react'

type ContentProps = {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <div className="absolute inset-0 md:left-60 overflow-y-auto font-serif">
      {children}
    </div>
  )
}

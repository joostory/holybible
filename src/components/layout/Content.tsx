import { ReactNode } from 'react'

type ContentProps = {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <div className="drawer-content">
      {children}
    </div>
  )
}

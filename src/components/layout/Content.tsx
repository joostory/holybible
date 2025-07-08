import { ReactNode } from 'react'

type ContentProps = {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <div
      className={
        `absolute inset-0 overflow-y-auto font-serif
        md:left-60
        lg:max-w-2xl lg:rounded-xl lg:shadow-lg lg:top-5 lg:bottom-5 lg:left-1/2 lg:-translate-x-1/2 lg:ml-30
        lg:bg-base-300 lg:p-5`
      }
    >
      {children}
    </div>
  )
}

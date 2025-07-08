import { ReactNode } from 'react'

type ContentProps = {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <div className="absolute inset-0 font-serif md:left-60 flex justify-center lg:py-5 lg:dark:bg-base-200">
      <div className="overflow-y-auto lg:w-2xl lg:rounded-xl lg:shadow-lg bg-base-100 lg:p-5">
        {children}
      </div>
    </div>
  )
}

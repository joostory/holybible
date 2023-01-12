import { ReactNode } from "react"

type SidebarProps = {
  children: ReactNode
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <div className="absolute inset-0 md:right-auto md:w-60 overflow-y-auto bg-base-200 bg-content">
      { children }
    </div>
  )
}

import { ReactNode } from "react"

type SidebarProps = {
  children: ReactNode
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <div className="absolute w-60 left-0 top-0 bottom-0 overflow-y-auto">
      { children }
    </div>
  )
}

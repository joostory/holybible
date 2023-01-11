import { ReactNode } from "react"

type SidebarProps = {
  children: ReactNode
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label> 
      <div className="w-60">
        { children }
      </div>
    </div>
  )
}

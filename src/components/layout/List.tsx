import { ReactNode } from "react"
import { Do_Hyeon } from 'next/font/google'

const listFont = Do_Hyeon({
  weight: '400',
  subsets: ['latin']
})

interface ListItemProps {
  children: ReactNode
}

export function ListItem({children}: ListItemProps) {
  return (
    <li className={listFont.className}>
      {children}
    </li>
  )
}

interface ListProps {
  children: ReactNode
}

export default function List({children}: ListProps) {
  return (
    <ul className="menu p-4 text-base gap-y-2">
      {children}
    </ul>
  )
}

import { Bible } from "domain/bible"
import Link from "next/link"

type BibleListProps = {
  bibles: Bible[]
}

export default function BibleList({ bibles }: BibleListProps) {
  return (
    <ul className="menu p-4">
      <li><Link href="/">&lt;</Link></li>
      {bibles.map(b =>
        <li key={b.bcode}>
          <Link href={`/${b.vcode}/${b.bcode}`}>{b.name}</Link>
        </li>
      )}
    </ul>
  )
}

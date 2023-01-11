import Link from "next/link"
import { useRecoilValue } from "recoil"
import { bibleState } from "state/bible"

type BibleListProps = {
  vcode: string | any
}

export default function BibleList({ vcode }: BibleListProps) {
  const versions = useRecoilValue(bibleState)
  const bibles = versions.find(v => v.vcode == vcode)?.bibles

  if (!bibles) {
    return null
  }

  return (
    <ul className="menu p-4">
      {bibles.map(b =>
        <li key={b.bcode}>
          <Link href={`/${vcode}/${b.bcode}`}>{b.name}</Link>
        </li>
      )}
    </ul>
  )
}

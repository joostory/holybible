import axios from "axios"
import { Version } from "domain/version"
import Link from "next/link"
import { useRecoilValue } from "recoil"
import { bibleState } from "state/bible"

export default function VersionList() {
  const versions: Version[] = useRecoilValue(bibleState)

  return (
    <ul className="menu p-4">
      {versions.map(v =>
        <li key={v.name}>
          <Link href={`/${v.vcode}`}>{v.name}</Link>
        </li>
      )}
    </ul>
  )
}

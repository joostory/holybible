import { Version } from "domain/bible"
import Link from "next/link"

type VersionListProps = {
  versions: Array<Version>
}

export default function VersionList({versions}: VersionListProps) {
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

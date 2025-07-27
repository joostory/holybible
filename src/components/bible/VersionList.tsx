import List, { ListItem } from "components/layout/List"
import { Version } from "domain/bible"
import Link from "next/link"

type VersionListProps = {
  versions: Array<Version>
}

export default function VersionList({versions}: VersionListProps) {
  return (
    <List>
      {versions.map(v =>
        <ListItem key={v.name}>
          <Link href={`/${v.vcode}`}>{v.name}</Link>
        </ListItem>
      )}
      <ListItem>
        <Link href={`/page/ov`}>오늘의 묵상</Link>
      </ListItem>
    </List>
  )
}

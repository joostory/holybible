import List, { ListItem } from "components/layout/List"
import { Bible, Version } from "domain/bible"
import Link from "next/link"
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

type ChapterListProps = {
  version: Version,
  bible: Bible,
  chapter?: number
}

export default function ChapterList({ version, bible, chapter }: ChapterListProps) {
  return (
    <List>
      <ListItem>
        <Link href={`/${version.vcode}`}>
          <ChevronLeftIcon className="h-5 w-5" />
        </Link>
      </ListItem>
      {Array.from(Array(bible.chapterCount).keys()).map(i =>
        <ListItem key={i}>
          <Link href={`/${version.vcode}/${bible.bcode}/${i + 1}`} className={i+1 == chapter? "active": ""}>
            {bible.name} {i+1}
          </Link>
        </ListItem>
      )}
    </List>
  )
}

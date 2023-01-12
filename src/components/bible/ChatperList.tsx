import { Bible, Version } from "domain/bible"
import Link from "next/link"

type ChapterListProps = {
  version: Version,
  bible: Bible,
  chapter?: number
}

export default function ChapterList({ version, bible, chapter }: ChapterListProps) {
  return (
    <ul className="menu p-4">
      <li>
        <Link href={`/${version.vcode}`}>&lt;</Link>
      </li>
      {Array.from(Array(bible.chapterCount).keys()).map(i =>
        <li key={i}>
          <Link href={`/${version.vcode}/${bible.bcode}/${i + 1}`} className={i+1 == chapter? "active": ""}>
            {bible.name} {i+1}
          </Link>
        </li>
      )}
    </ul>
  )
}

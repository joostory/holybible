import { Bible, Version, Verse } from "domain/bible"
import Link from "next/link"

type VerseListProps = {
  version: Version,
  bible: Bible,
  chapter: number,
  verses?: Verse[]
}

function BackButton({version, bible, chapter}: VerseListProps) {
  return (
    <Link href={`/${version.vcode}/${bible.bcode}`} className="m-4 mb-0 p-4 block md:hidden">
      &lt; {version.name} {bible.name} {chapter}
    </Link>
  )
}

export default function VerseList({version, bible, chapter, verses}: VerseListProps) {
  return (
    <>
      <BackButton
        version={version}
        bible={bible}
        chapter={chapter}
      />
      <ol className="p-4 pl-12 list-decimal">
        {verses?.map(v =>
          <li key={v.vnum}>{v.content}</li>
        )}
      </ol>
    </>
  )
}

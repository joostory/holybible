import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import { Bible, Version, Verse } from "domain/bible"
import Link from "next/link"
import { Do_Hyeon, Stylish } from 'next/font/google'

const buttonFont = Do_Hyeon({
  weight: '400',
  subsets: ['latin']
})
const contentFont = Stylish({
  weight: "400",
  subsets: ['latin']
})


type VerseListProps = {
  version: Version,
  bible: Bible,
  chapter: number,
  verses?: Verse[]
}

function BackButton({version, bible, chapter}: VerseListProps) {
  return (
    <Link href={`/${version.vcode}/${bible.bcode}`} className="m-4 mb-0 p-4 pb-2 block md:hidden">
      <ChevronLeftIcon
        className="h-5 w-5 inline-block"
      />
      <span className={`ml-1 align-middle ${buttonFont.className}`}>
        {version.name} {bible.name} {chapter}
      </span>
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
      <ol className="p-6 pl-12 list-decimal">
        {verses?.map(v =>
          <li key={v.vnum} className={`pl-2 mb-1 leading-relaxed tracking-tighter`}>
            {v.content}
          </li>
        )}
      </ol>
    </>
  )
}

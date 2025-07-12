import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import { Bible, Version, Verse } from "domain/bible"
import Link from "next/link"
import { Do_Hyeon } from "next/font/google"
import { useAtomValue } from "jotai"
import { fontFamilyState } from "state/theme"
import { fontVariables } from "domain/theme"

const buttonFont = Do_Hyeon({
  weight: "400",
  subsets: ["latin"],
})

interface VerseListProps {
  version: Version
  bible: Bible
  chapter: number
  verses?: Verse[]
}

function BackButton({ version, bible, chapter }: VerseListProps) {
  return (
    <Link
      href={`/${version.vcode}/${bible.bcode}`}
      className="m-4 mb-0 p-4 pb-2 block md:hidden"
    >
      <ChevronLeftIcon className="h-5 w-5 inline-block" />
      <span className={`ml-1 align-middle ${buttonFont.className}`}>
        {version.name} {bible.name} {chapter}
      </span>
    </Link>
  );
}

export default function VerseList({ version, bible, chapter, verses }: VerseListProps) {
  const fontFamily = useAtomValue(fontFamilyState);

  return (
    <>
      <BackButton version={version} bible={bible} chapter={chapter} />
      <ol className="p-6 pl-12 list-decimal">
        {verses?.map((v) => (
          <li
            key={v.vnum}
            className={`pl-3 mb-2 leading-relaxed tracking-tighter ${fontVariables[fontFamily]}`}>
            {v.content}
          </li>
        ))}
      </ol>
    </>
  )
}


import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import { Bible, Version, Verse } from "domain/bible"
import Link from "next/link"
import { useAtomValue } from "jotai"
import { fontFamilyState } from "state/theme"
import {
  Do_Hyeon,
  Noto_Serif_KR,
  Gowun_Batang,
  Orbit,
  Gowun_Dodum,
} from "next/font/google";
import { useMemo } from "react"
import { FONT_FAMILIES } from "domain/theme"

const notoSerifKr = Noto_Serif_KR({
  weight: "400",
  subsets: ["latin"],
})
const gowunBatang = Gowun_Batang({
  weight: "400",
  subsets: ["latin"],
})
const orbit = Orbit({
  weight: "400",
  subsets: ["latin"],
})
const gowunDodum = Gowun_Dodum({
  weight: "400",
  subsets: ["latin"],
})

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
  const fontFamily = useAtomValue(fontFamilyState)

  const fontClassName = useMemo(() => {
    switch (fontFamily) {
      case "Noto_Serif_KR":
        return notoSerifKr.className;
      case "Gowun_Batang":
        return gowunBatang.className;
      case "Orbit":
        return orbit.className;
      case "Gowun_Dodum":
        return gowunDodum.className;
      default:
        return "";
    }
  }, [fontFamily])

  return (
    <>
      <BackButton version={version} bible={bible} chapter={chapter} />
      <ol className="p-6 pl-12 list-decimal">
        {verses?.map((v) => (
          <li
            key={v.vnum}
            className={`pl-3 mb-2 leading-relaxed tracking-tighter ${fontClassName}`}
          >
            {v.content}
          </li>
        ))}
      </ol>
    </>
  )
}


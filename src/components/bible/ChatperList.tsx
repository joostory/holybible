import Link from "next/link"
import { useRecoilValue } from "recoil"
import { bibleState } from "state/bible"

type ChapterListProps = {
  vcode: string,
  bcode: number,
  cnum?: number
}

export default function ChapterList({ vcode, bcode, cnum }: ChapterListProps) {
  const versions = useRecoilValue(bibleState)
  const bibles = versions.find(v => v.vcode == vcode)?.bibles
  const bible = bibles?.find(b => b.bcode == bcode)

  if (!bible) {
    return null
  }
  
  return (
    <ul className="menu p-4">
      <li>
        <Link href={`/${vcode}`}>&lt;</Link>
      </li>
      {Array.from(Array(bible.chapterCount).keys()).map(i =>
        <li key={i}>
          <Link href={`/${vcode}/${bcode}/${i + 1}`} className={i+1 == cnum? "active": ""}>
            {bible.name} {i+1}
          </Link>
        </li>
      )}
    </ul>
  )
}

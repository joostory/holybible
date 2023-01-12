import axios from "axios"
import { Verse } from "domain/verse"
import { Version } from "domain/version"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { bibleState } from "state/bible"

type VerseListProps = {
  vcode: string | any,
  bcode: string | any,
  cnum: number | any
}

function BackButton({vcode, bcode, cnum}: VerseListProps) {
  const versions: Version[] = useRecoilValue(bibleState)
  const version = versions.find(v => v.vcode == vcode)
  const bible = version?.bibles.find(b => b.bcode == bcode)
  
  return (
    <Link href={`/${vcode}/${bcode}`} className="m-4 mb-0 p-4 block">
      &lt; {version?.name} {bible?.name} {cnum}
    </Link>
  )
}

export default function VerseList({vcode, bcode, cnum}: VerseListProps) {
  const [verses, setVerses] = useState<Array<Verse>>([])

  useEffect(() => {
    axios.get(`/bible/${vcode}/${bcode}/${cnum}.json`)
      .then(r => setVerses(r.data))
  }, [vcode, bcode, cnum])

  return (
    <>
      <BackButton
        vcode={vcode}
        bcode={bcode}
        cnum={cnum}
      />
      <ol className="p-4 pl-12 list-decimal">
        {verses.map(v =>
          <li key={v.vnum}>{v.content}</li>
        )}
      </ol>
    </>
  )
}

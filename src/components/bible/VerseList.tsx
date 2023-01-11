import axios from "axios"
import { Verse } from "domain/verse"
import { useEffect, useState } from "react"

type VerseListProps = {
  vcode: string | any,
  bcode: string | any,
  cnum: number | any
}

export default function VerseList({vcode, bcode, cnum}: VerseListProps) {
  const [verses, setVerses] = useState<Array<Verse>>([])

  useEffect(() => {
    axios.get(`/bible/${vcode}/${bcode}/${cnum}.json`)
      .then(r => setVerses(r.data))
  }, [vcode, bcode, cnum])

  return (
    <ol className="p-4 pl-12 list-decimal">
      {verses.map(v =>
        <li key={v.vnum}>{v.content}</li>
      )}
    </ol>
  )
}

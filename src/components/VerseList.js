import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function VerseList() {
  const { vcode, bcode, chapter } = useParams()
  const [verses, setVerses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get(`/bible/${vcode}/${bcode}/${chapter}.json`)
			.then(r => setVerses(r.data))
			.catch(e => console.log(e))
      .finally(() => {
        setLoading(false)
      })
  }, [vcode, bcode, chapter])

  if (loading) {
    return <div className="loading">로딩 중...</div>
  }

  return (
    <div className="verses">
      <Link to={`/${vcode}/${bcode}`} className="btn_close btn_verse">&lt; 뒤로</Link>
      <ol>
        {verses.map((verse, index) =>
          <li key={index}>{verse.content}</li>
        )}
      </ol>
    </div>
  )
}

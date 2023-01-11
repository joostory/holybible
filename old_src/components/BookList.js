import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'


export default function BookList({}) {
  const versions = useSelector(state => state.holybible.versions)
  const { vcode } = useParams()

  let version = versions.find(item => item.vcode === vcode)

  return (
    <div>
      <Link to={`/`} className="btn_close">&lt; 뒤로</Link>
      <ul>
        { version.bibles.map(item =>
          <li key={item.bcode}><Link to={`/${vcode}/${item.bcode}`}>{item.name}</Link></li>
        )}
      </ul>
    </div>
  )
}

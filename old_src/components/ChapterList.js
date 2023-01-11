import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, useParams } from 'react-router-dom'

const times = (n, func) => {
	let result = []
	for (let i = 0 ; i < n ; i++) {
		result[i] = func(i)
	}

	return result
}

export default function ChapterList() {
  const versions = useSelector(state => state.holybible.versions)
  const { vcode, bcode } = useParams()

  let version = versions.find(item => item.vcode === vcode)
  let book = version.bibles.find(item => item.bcode == bcode)

  return (
    <div>
      <Link to={`/${vcode}`} className="btn_close">&lt; 뒤로</Link>
      <ul>
        {times(book.chapterCount, (i) =>
          <li key={i}>
            <NavLink
              to={`/${vcode}/${bcode}/${i+1}`}
              className={({isActive}) => isActive? "selected":""}
            >
              {book.name} {i + 1}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  )
}

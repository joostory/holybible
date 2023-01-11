import React from 'react'
import classnames from 'classnames'
import { useSelector } from 'react-redux'

import { HashRouter, Routes, Route, Link } from 'react-router-dom'

import VersionList from '../components/VersionList'
import BookList from '../components/BookList'
import ChapterList from '../components/ChapterList'
import VerseList from '../components/VerseList'
import Today from '../components/Today'

export default function App() {
  const versions = useSelector(state => state.holybible.versions)

  if (versions.length == 0) {
    return (
      <div>로딩 중</div>
    )
  }

  return (
    <HashRouter>
      <div className={classnames('main', {'dark': false})}>
        <header>
          <h1 className="title"><Link to="/">Holybible</Link></h1>
          <ul className="menu">
            <li><a href="https://play.google.com/store/apps/details?id=net.joostory.holybible">Download</a></li>
            <li><a href="https://oh-my-bible.tistory.com">About</a></li>
          </ul>
        </header>
        <section>
          <Routes>
            <Route path="/" exact={true} element={<VersionList />} />
            <Route path="/:vcode" exact={true} element={<BookList />} />
            <Route path="/:vcode/:bcode/*" element={<ChapterList />} />
          </Routes>
        </section>
        <article>
          <Routes>
            <Route path="/:vcode/:bcode/:chapter" element={<VerseList />} />
            <Route path="*" element={<Today />} />
          </Routes>
        </article>
      </div>
    </HashRouter>
  )
}

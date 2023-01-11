import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function VersionList() {
  const versions = useSelector(state => state.holybible.versions)
  return (
    <ul>
      { versions.map(item =>
        <li key={item.vcode}><Link to={`/${item.vcode}`}>{item.name}</Link></li>
      )}
    </ul>
  )
}

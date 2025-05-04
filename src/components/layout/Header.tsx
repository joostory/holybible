import { THEME_DARK, THEME_LIGHT } from "domain/theme"
import { ChangeEvent } from "react"
import { useAtom } from 'jotai'
import { themeState } from "state/theme"
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import Link from "next/link"
import { Gugi } from 'next/font/google'

const appNameFont = Gugi({
  weight: '400',
  subsets: ['latin']
})

const appListFont = Gugi({
  weight: '400',
  subsets: ['latin']
})

function ThemeButton() {
  const [theme, setTheme] = useAtom(themeState)

  function handleChangeTheme(e: ChangeEvent<HTMLInputElement>) {
    setTheme(e.target.checked? THEME_LIGHT : THEME_DARK)
  }

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        checked={theme !== THEME_DARK}
        onChange={handleChangeTheme}
      />

      <MoonIcon className="swap-off w-5 h-5" />
      <SunIcon className="swap-on w-5 h-5" />
    </label>
  )
}

export default function Header() {
  return (
    <div className="navbar bg-base-300 text-base-content">
      <div className="flex-1 flex ml-4">
        <img src="/images/ico_holybible.png" className="h-6 mr-3 flex-none" alt="HolyBible" />
        <Link href={'/'} className={`normal-case text-xl flex-1 font-bold ${appNameFont.className}`}>
          HolyBible
        </Link>
      </div>
      <div className="flex-none">
        <ul className={`menu menu-compact menu-horizontal px-1 py-0 ${appListFont.className}`}>
          <li>
            <ThemeButton />
          </li>
          <li>
            <a href='https://github.com/joostory/oh-my-bible-epub/releases/latest' target="_blank" className="text-xs">
              Download
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

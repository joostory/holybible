import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { THEME_DARK, THEME_LIGHT } from "domain/theme"
import { useAtom } from "jotai"
import { ChangeEvent } from "react"
import { themeState } from "state/theme"

export default function ThemeSelector() {
  const [theme, setTheme] = useAtom(themeState)

  function handleChangeTheme(e: ChangeEvent<HTMLInputElement>) {
    setTheme(e.target.checked? THEME_LIGHT : THEME_DARK)
  }

  return (
    <div className="flex flex-row gap-2">
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          checked={theme !== THEME_DARK}
          onChange={handleChangeTheme}
        />

        <MoonIcon className="swap-off w-5 h-5" />
        <SunIcon className="swap-on w-5 h-5" />
      </label>
      <span className="text-sm">
        {theme === THEME_LIGHT ? "Light" : "Dark"}
      </span>
    </div>
  )
}

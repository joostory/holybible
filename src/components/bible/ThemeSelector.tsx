import { THEME_DARK, THEME_LIGHT } from "domain/theme"
import { useAtom } from "jotai"
import { themeState } from "state/theme"

export default function ThemeSelector() {
  const [theme, setTheme] = useAtom(themeState)

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Theme</span>
      </label>
      <div className="btn-group">
        <button
          className={`btn btn-sm ${theme === THEME_LIGHT ? "btn-active" : ""}`}
          onClick={() => setTheme(THEME_LIGHT)}
        >
          Light
        </button>
        <button
          className={`btn btn-sm ${theme === THEME_DARK ? "btn-active" : ""}`}
          onClick={() => setTheme(THEME_DARK)}
        >
          Dark
        </button>
      </div>
    </div>
  );
}

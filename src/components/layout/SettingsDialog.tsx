import { useAtom } from "jotai";
import { themeState } from "state/theme";
import { THEME_DARK, THEME_LIGHT } from "domain/theme";
import FontSelector from "../bible/FontSelector";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function ThemeSelector() {
  const [theme, setTheme] = useAtom(themeState);

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

export default function SettingsDialog({ open, onOpenChange }: Props) {
  return (
    <div className={`modal ${open ? "modal-open" : ""}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Settings</h3>
        <div className="space-y-4">
          <ThemeSelector />
          <FontSelector />
        </div>
        <div className="modal-action">
          <button className="btn" onClick={() => onOpenChange(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

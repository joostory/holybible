import { useAtom } from 'jotai'
import { setFontFamilyState } from 'state/theme'
import { FONT_FAMILIES, FontFamily } from 'domain/theme'

export default function FontSelector() {
  const [fontFamily, setFontFamily] = useAtom(setFontFamilyState);

  return (
    <select
      className="select select-bordered"
      value={fontFamily}
      onChange={(e) => setFontFamily(e.target.value as FontFamily)}
    >
      {Object.keys(FONT_FAMILIES).map((font) => (
        <option key={font} value={font}>
          {FONT_FAMILIES[font as FontFamily]}
        </option>
      ))}
    </select>
  )
}

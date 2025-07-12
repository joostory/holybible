import { THEME_DARK, FONT_FAMILY_KEY, FontFamily, FONT_FAMILIES } from "domain/theme";
import { atom } from 'jotai'

export const themeState = atom<string>(THEME_DARK)

const getInitialFontFamily = (): FontFamily => {
  if (typeof window === 'undefined') {
    return Object.keys(FONT_FAMILIES)[0] as FontFamily
  }
  return (localStorage.getItem(FONT_FAMILY_KEY) as FontFamily) || (Object.keys(FONT_FAMILIES)[0] as FontFamily)
}

export const fontFamilyState = atom<FontFamily>(getInitialFontFamily())

export const setFontFamilyState = atom(
  (get) => get(fontFamilyState),
  (get, set, newFontFamily: FontFamily) => {
    set(fontFamilyState, newFontFamily)
    if (typeof window !== 'undefined') {
      localStorage.setItem(FONT_FAMILY_KEY, newFontFamily)
    }
  }
)

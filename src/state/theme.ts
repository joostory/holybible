import { THEME_DARK } from "domain/theme";
import { atom } from 'jotai'

export const themeState = atom<string>(THEME_DARK)

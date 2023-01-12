import { THEME_DARK } from "domain/theme";
import { atom } from "recoil";

export const themeState = atom<string>({
  key: 'themeState',
  default: THEME_DARK
})

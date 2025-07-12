export const THEME_LIGHT = "bumblebee"
export const THEME_DARK = "halloween"

export const FONT_FAMILY_KEY = "holybible.font-family"
export const FONT_FAMILIES = {
  Noto_Serif_KR: "Noto Serif KR",
  Gowun_Batang: "Gowun Batang",
  Orbit: "Orbit",
  Gowun_Dodum: "Gowun Dodum",
}
export type FontFamily = keyof typeof FONT_FAMILIES

export const fontVariables: Record<FontFamily, string> = {
  Noto_Serif_KR: "font-noto-serif-kr",
  Gowun_Batang: "font-gowun-batang",
  Orbit: "font-orbit",
  Gowun_Dodum: "font-gowun-dodum",
}

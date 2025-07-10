
const HANGUL_START = 44032; // '가'
const HANGUL_END = 55203; // '힣'
const CONSONANTS = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];
const VOWELS = [
  'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
];
const FINAL_CONSONANTS = [
  '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

export function disassembleHangul(str: string): string {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= HANGUL_START && charCode <= HANGUL_END) {
      const hangulIndex = charCode - HANGUL_START;
      const consonantIndex = Math.floor(hangulIndex / 588);
      const vowelIndex = Math.floor((hangulIndex % 588) / 28);
      const finalConsonantIndex = hangulIndex % 28;
      result += CONSONANTS[consonantIndex] + VOWELS[vowelIndex];
      if (finalConsonantIndex > 0) {
        result += FINAL_CONSONANTS[finalConsonantIndex];
      }
    } else {
      result += str[i];
    }
  }
  return result;
}

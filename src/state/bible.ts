import { Version } from "domain/version";
import { atom } from "recoil";

export const bibleState = atom<Array<Version>>({
  key: 'bibleState',
  default: []
})

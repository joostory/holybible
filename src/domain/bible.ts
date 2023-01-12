import fs from 'fs'

interface VersionData {
  name: string,
  vcode: string,
  bibles: Array<Bible>
}

export interface Version {
  name: string,
  vcode: string
}

export interface Bible {
  bcode: number,
  chapterCount: number,
  name: string,
  type: string,
  vcode: string
}

export interface Verse {
  vcode: string,
  bcode: number,
  cnum: number,
  vnum: number,
  content: string
}

function getVersionDataList(): VersionData[] {
  const result = fs.readFileSync('data/bible.json', 'utf-8')
  return JSON.parse(result)
}

export function getVersions(): Version[] {
  return getVersionDataList().map(v => ({
    name: v.name,
    vcode: v.vcode
  }))
}

export function getVersion(vcode: string): Version {
  return getVersions().find(v => v.vcode == vcode)!
}

export function getBibles(vcode: string): Bible[] {
  return getVersionDataList().find(v => v.vcode == vcode)!.bibles
}

export function getBible(vcode: string, bcode: number): Bible {
  return getBibles(vcode).find(b => b.bcode == bcode)!
}

export function getVerses(vcode: string, bcode: number, cnum: number): Verse[] {
  const result = fs.readFileSync(`data/bible/${vcode}/${bcode}/${cnum}.json`, 'utf-8')
  return JSON.parse(result)
}

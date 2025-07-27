import path from "path"
import fs from "fs"
import Papa from "papaparse"

export interface OV {
  date: string
  content: string
}

interface CsvRow {
  '날짜': string;
  '묵상구절': string;
}

export function getOVList(): OV[] {
  const csvFilePath = path.resolve(process.cwd(), 'data', 'ov.csv');
  const csvFileContent = fs.readFileSync(csvFilePath, 'utf-8');
  const parsedData = Papa.parse<CsvRow>(csvFileContent, {
    header: true,
    skipEmptyLines: true,
  })

  return parsedData.data.map(it => ({
    date: it['날짜'],
    content: it['묵상구절'],
  }))
}

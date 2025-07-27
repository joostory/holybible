import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { Bible, getBibles, getVersions, Version } from 'domain/bible'
import Head from 'next/head'
import Layout from 'components/layout/Layout'
import Content from 'components/layout/Content'
import Sidebar from 'components/layout/Sidebar'
import VersionList from 'components/bible/VersionList'
import { getOVList } from 'domain/ov'
import { useEffect, useRef } from 'react';
import { DateTime } from 'luxon';

import {
  Do_Hyeon,
  Noto_Serif_KR,
  Gowun_Batang,
  Orbit,
  Gowun_Dodum,
} from "next/font/google";
import { useMemo } from "react"
import { useAtomValue } from 'jotai'
import { fontFamilyState } from 'state/theme'

const notoSerifKr = Noto_Serif_KR({
  weight: "400",
  subsets: ["latin"],
})
const gowunBatang = Gowun_Batang({
  weight: "400",
  subsets: ["latin"],
})
const orbit = Orbit({
  weight: "400",
  subsets: ["latin"],
})
const gowunDodum = Gowun_Dodum({
  weight: "400",
  subsets: ["latin"],
})

interface OvData {
  date: string;
  displayDate: string;
  verse: string;
  url?: string;
}

interface OvPageProps {
  data: OvData[]
  versions: Version[]
}

const OvPage: NextPage<OvPageProps> = ({ data, versions }) => {
  const todayRef = useRef<HTMLLIElement>(null);
  const fontFamily = useAtomValue(fontFamilyState)
  
  const fontClassName = useMemo(() => {
    switch (fontFamily) {
      case "Noto_Serif_KR":
        return notoSerifKr.className;
      case "Gowun_Batang":
        return gowunBatang.className;
      case "Orbit":
        return orbit.className;
      case "Gowun_Dodum":
        return gowunDodum.className;
      default:
        return "";
    }
  }, [fontFamily])

  useEffect(() => {
    setTimeout(() => {
      todayRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300)
  }, [])

  const today = DateTime.now();
  const year = today.year;
  const baseYear = 2023 + (year - 2023) % 3;
  const todayString = DateTime.fromObject({ year: baseYear, month: today.month, day: today.day }).toFormat('yyyy/MM/dd');

  return (
    <>
      <Head>
        <title>한구절 묵상</title>
      </Head>
      <Layout>
        <Content>
          <div className={`py-4 max-[768px]:w-screen max-[768px]:px-2 ${fontClassName}`}>
            <h1 className="text-2xl font-bold mb-4 mx-3">오늘의 묵상</h1>
            <ul className="flex flex-col gap-2">
              {data.map((item, index) => {
                const isToday = item.date === todayString;
                return (
                  <li key={index} ref={isToday ? todayRef : null}>
                    <Link href={item.url || ""} className={`rounded-lg p-2 hover:bg-base-content/5 flex flex-row gap-2 justify-start items-center ${isToday ? 'bg-base-content/10' : ''}`}>
                      <div className={`badge ${isToday? 'badge-accent': 'badge-ghost'} text-xs`}>{item.displayDate}</div>
                      <span>{item.verse}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </Content>
        <div className="max-[768px]:hidden">
          <Sidebar>
            <VersionList versions={versions} />
          </Sidebar>
        </div>
      </Layout>
    </>
    
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const bibles = getBibles('GAE')
  const bibleNameToBCodeMap: { [key: string]: number } = {}
  bibles.forEach((bible: Bible) => {
    bibleNameToBCodeMap[bible.name] = bible.bcode;
  })

  function makeBibleUrl(content: string) {
    const match = content.match(/(.+?)\s+(\d+)/);
    if (match) {
      const bibleName = match[1].trim();
      const chapterNumber = match[2];
      const bcode = bibleNameToBCodeMap[bibleName];
      if (bcode) {
        return `/GAE/${bcode}/${chapterNumber}`;
      }
    }

    return null
  }


  const data = getOVList().map((row) => {
    const date = DateTime.fromFormat(row.date, 'yyyy/MM/dd');
    const year = date.year;
    const displayYear = year - 2022;
    const displayDate = `${displayYear}년차 ${date.toFormat('MM/dd')}`;
    
    return {
      date: row.date,
      displayDate,
      verse: row.content,
      url: makeBibleUrl(row.content)
    }
  })

  return {
    props: {
      data,
      versions: getVersions()
    },
  }
}

export default OvPage

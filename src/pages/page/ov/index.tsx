
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { Bible, getBibles, getVersions, Version } from 'domain/bible'
import Head from 'next/head'
import Layout from 'components/layout/Layout'
import Content from 'components/layout/Content'
import Sidebar from 'components/layout/Sidebar'
import VersionList from 'components/bible/VersionList'
import { getOVList } from 'domain/ov'

interface OvData {
  date: string;
  verse: string;
  url?: string;
}

interface OvPageProps {
  data: OvData[]
  versions: Version[]
}

const OvPage: NextPage<OvPageProps> = ({ data, versions }) => {
  return (
    <>
      <Head>
        <title>한구절 묵상</title>
      </Head>
      <Layout>
        <Content>
          <div className="py-4 max-[768px]:w-screen">
            <h1 className="text-2xl font-bold mb-4 mx-2">오늘의 묵상</h1>
            <ul className="flex flex-wrap gap-2">
              {data.map((item, index) => (
                <li key={index}>
                  <Link href={item.url || ""} className="rounded-lg p-2 hover:bg-base-content/5 flex flex-row gap-2 justify-center">
                    <div className="badge badge-ghost text-xs">{item.date}</div>
                    <span>{item.verse}</span>
                  </Link>
                </li>
              ))}
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
    
    return {
      date: row.date,
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

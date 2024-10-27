import ChapterList from "components/bible/ChatperList";
import VerseList from "components/bible/VerseList";
import Content from "components/layout/Content";
import Layout from "components/layout/Layout";
import Sidebar from "components/layout/Sidebar";
import { Bible, getBible, getBibles, getVerses, getVersion, getVersions, Verse, Version } from "domain/bible";
import Head from "next/head";

type VersePageProps = {
  version: Version,
  bible: Bible,
  chapter: number,
  verses: Verse[]
}

export default function VersePage({ version, bible, chapter, verses }: VersePageProps) {
  return (
    <>
      <Head>
        <title>{version?.name} {bible?.name} {chapter}</title>
      </Head>
      <Layout>
        <Content>
          <VerseList
            version={version}
            bible={bible}
            chapter={chapter}
            verses={verses}
          />
        </Content>
        <div className="max-[768px]:hidden">
          <Sidebar>
            <ChapterList
              version={version}
              bible={bible}
              chapter={chapter}
            />
          </Sidebar>
        </div>
      </Layout>
    </>
  )
}


export async function getStaticPaths() {
  return {
    paths: getVersions().flatMap(v =>
      getBibles(v.vcode).flatMap(b =>
        Array.from(Array(b.chapterCount).keys()).map(c => ({
          params: {
            version: v.vcode,
            bible: b.bcode.toString(),
            chapter: (c + 1).toString()
          }
        }))
      )
    ),
    fallback: false
  }
}

type VersePageParams = {
  version: string,
  bible: number,
  chapter: number,
}

export async function getStaticProps({params}: {params: VersePageParams}) {
  return {
    props: {
      version: getVersion(params.version),
      bible: getBible(params.version, params.bible),
      chapter: params.chapter,
      verses: getVerses(params.version, params.bible, params.chapter)
    }
  }
}

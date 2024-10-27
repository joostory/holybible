import ChapterList from "components/bible/ChatperList";
import Content from "components/layout/Content";
import Layout from "components/layout/Layout";
import Sidebar from "components/layout/Sidebar";
import Today from "components/Today";
import { Version, getVersion, getBibles, getVersions, Bible, getBible } from "domain/bible";
import Head from "next/head";

type BiblePageProps = {
  version: Version,
  bible: Bible
}

export default function BiblePage({ version, bible }: BiblePageProps) {
  return (
    <>
      <Head>
        <title>{version?.name} {bible?.name}</title>
      </Head>
      <Layout>
        <div className="max-[768px]:hidden">
          <Content>
            <Today />
          </Content>
        </div>
        <Sidebar>
          <ChapterList
            version={version}
            bible={bible}
          />
        </Sidebar>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: getVersions().flatMap(v =>
      getBibles(v.vcode).map(b => ({
        params: {
          version: v.vcode,
          bible: b.bcode.toString()
        }
      }))
    ),
    fallback: false
  }
}

type BiblePageParams = {
  version: string,
  bible: number,
}

export async function getStaticProps({params}: {params: BiblePageParams}) {
  return {
    props: {
      version: getVersion(params.version),
      bible: getBible(params.version, params.bible)
    }
  }
}

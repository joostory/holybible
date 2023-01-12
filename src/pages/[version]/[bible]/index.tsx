import BibleList from "components/bible/BibleList";
import ChapterList from "components/bible/ChatperList";
import Content from "components/layout/Content";
import Layout from "components/layout/Layout";
import Sidebar from "components/layout/Sidebar";
import Today from "components/Today";
import { Version } from "domain/version";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { bibleState } from "state/bible";

export default function BiblePage() {
  const router = useRouter()
  const vcode: string = router.query.version? router.query.version.toString() : ""
  const bcode: number = Number(router.query.bible)

  const versions: Version[] = useRecoilValue(bibleState)
  const version = versions.find(v => v.vcode == vcode)
  const bible = version?.bibles.find(b => b.bcode == bcode)

  return (
    <>
      <Head>
        <title>{version?.name} {bible?.name}</title>
      </Head>
      <Layout>
        <Content>
          <Today />
        </Content>
        <Sidebar>
          <ChapterList
            vcode={vcode}
            bcode={bcode}
          />
        </Sidebar>
      </Layout>
    </>
  )
}

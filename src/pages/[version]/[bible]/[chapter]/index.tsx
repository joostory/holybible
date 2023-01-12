import ChapterList from "components/bible/ChatperList";
import VerseList from "components/bible/VerseList";
import Content from "components/layout/Content";
import Layout from "components/layout/Layout";
import Sidebar from "components/layout/Sidebar";
import { Version } from "domain/version";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { bibleState } from "state/bible";

export default function VersePage() {
  const router = useRouter()
  const vcode: string = router.query.version? router.query.version.toString() : ""
  const bcode: number = Number(router.query.bible)
  const cnum: number = Number(router.query.chapter)

  const versions: Version[] = useRecoilValue(bibleState)
  const version = versions.find(v => v.vcode == vcode)
  const bible = version?.bibles.find(b => b.bcode == bcode)

  return (
    <>
      <Head>
        <title>{version?.name} {bible?.name} {cnum}</title>
      </Head>
      <Layout>
        <Content>
          <VerseList
            vcode={vcode}
            bcode={bcode}
            cnum={cnum}
          />
        </Content>
        <div className="max-[768px]:hidden">
          <Sidebar>
            <ChapterList
              vcode={vcode}
              bcode={bcode}
              cnum={cnum}
            />
          </Sidebar>
        </div>
      </Layout>
    </>
  )
}

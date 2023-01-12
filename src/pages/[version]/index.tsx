import BibleList from "components/bible/BibleList";
import Content from "components/layout/Content";
import Layout from "components/layout/Layout";
import Sidebar from "components/layout/Sidebar";
import Today from "components/Today";
import { Version } from "domain/version";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { bibleState } from "state/bible";

export default function VersionPage() {
  const router = useRouter()
  const vcode: string = router.query.version? router.query.version.toString() : ""
  const versions: Version[] = useRecoilValue(bibleState)
  const version = versions.find(v => v.vcode == vcode)

  return (
    <>
      <Head>
        <title>{version?.name}</title>
      </Head>
      <Layout>
        <div className="max-[768px]:hidden">
          <Content>
            <Today />
          </Content>
        </div>
        <Sidebar>
          <BibleList
            vcode={vcode}
          />
        </Sidebar>
      </Layout>
    </>
  )
}

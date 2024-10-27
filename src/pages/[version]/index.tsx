import BibleList from "components/bible/BibleList";
import Content from "components/layout/Content";
import Layout from "components/layout/Layout";
import Sidebar from "components/layout/Sidebar";
import Today from "components/Today";
import { Bible, getBibles, getVersion, getVersions, Version } from "domain/bible";
import Head from "next/head";

type VersionPageProps = {
  version: Version,
  bibles: Bible[]
}

export default function VersionPage({ version, bibles }: VersionPageProps) {
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
            bibles={bibles}
          />
        </Sidebar>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: getVersions().map(v => ({
      params: {
        version: v.vcode
      }
    })),
    fallback: false
  }
}

type VersionPageParams = {
  version: string
}
export async function getStaticProps({params}: {params: VersionPageParams}) {
  const version = getVersion(params.version)

  return {
    props: {
      version: version,
      bibles: getBibles(version.vcode)
    }
  }
}

import Sidebar from "components/layout/Sidebar";
import Content from 'components/layout/Content'
import Layout from "components/layout/Layout";
import VersionList from "components/bible/VersionList";
import Head from "next/head";
import Today from "components/Today";
import { APP_NAME } from "domain/app";
import { Version, getVersions } from "domain/bible";

type HomePageProps = {
  versions: Array<Version>
}

export default function HomePage({versions}: HomePageProps) {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      <Layout>
        <div className="max-[768px]:hidden">
          <Content>
            <Today />
          </Content>
        </div>
        <Sidebar>
          <VersionList versions={versions} />
        </Sidebar>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      versions: getVersions()
    }
  }
}

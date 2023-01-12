import Sidebar from "components/layout/Sidebar";
import Content from 'components/layout/Content'
import Layout from "components/layout/Layout";
import VersionList from "components/bible/VersionList";
import Head from "next/head";
import Today from "components/Today";
import { APP_NAME } from "domain/app";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      <Layout>
        <Content>
          <Today />
        </Content>
        <Sidebar>
          <VersionList />
        </Sidebar>
      </Layout>
    </>
  )
}

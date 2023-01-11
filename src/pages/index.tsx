import Sidebar from "components/layout/Sidebar";
import Content from 'components/layout/Content'
import Layout from "components/layout/Layout";
import VersionList from "components/bible/VersionList";
import Head from "next/head";
import Today from "components/Today";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Oh My Bible</title>
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

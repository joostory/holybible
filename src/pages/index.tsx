import Sidebar from "components/layout/Sidebar";
import Content from 'components/layout/Content'
import Layout from "components/layout/Layout";
import VersionList from "components/bible/VersionList";

export default function HomePage() {
  return (
    <Layout>
      <Content>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-3xl font-bold underline">
            Welcome to Holybible
          </div>
        </div>
      </Content>
      <Sidebar>
        <VersionList />
      </Sidebar>
    </Layout>
  )
}

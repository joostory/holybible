import BibleList from "components/bible/BibleList";
import Content from "components/layout/Content";
import Layout from "components/layout/Layout";
import Sidebar from "components/layout/Sidebar";
import { useRouter } from "next/router";

export default function VersionPage() {
  const router = useRouter()

  return (
    <Layout>
      <Content>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-3xl font-bold underline">
            version
          </div>
        </div>
      </Content>
      <Sidebar>
        <BibleList
          vcode={router.query.version}
        />
      </Sidebar>
    </Layout>
  )
}

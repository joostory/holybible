import BibleList from "components/bible/BibleList";
import Content from "components/layout/Content";
import Layout from "components/layout/Layout";
import Sidebar from "components/layout/Sidebar";
import Today from "components/Today";
import { useRouter } from "next/router";

export default function VersionPage() {
  const router = useRouter()

  return (
    <Layout>
      <Content>
        <Today />
      </Content>
      <Sidebar>
        <BibleList
          vcode={router.query.version}
        />
      </Sidebar>
    </Layout>
  )
}

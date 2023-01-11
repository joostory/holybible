import BibleList from "components/bible/BibleList";
import ChapterList from "components/bible/ChatperList";
import Content from "components/layout/Content";
import Layout from "components/layout/Layout";
import Sidebar from "components/layout/Sidebar";
import Today from "components/Today";
import { useRouter } from "next/router";

export default function BiblePage() {
  const router = useRouter()

  return (
    <Layout>
      <Content>
        <Today />
      </Content>
      <Sidebar>
        <ChapterList
          vcode={router.query.version}
          bcode={router.query.bible}
        />
      </Sidebar>
    </Layout>
  )
}

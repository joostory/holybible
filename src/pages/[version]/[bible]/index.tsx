import BibleList from "components/bible/BibleList";
import ChapterList from "components/bible/ChatperList";
import Content from "components/layout/Content";
import Layout from "components/layout/Layout";
import Sidebar from "components/layout/Sidebar";
import { useRouter } from "next/router";

export default function BiblePage() {
  const router = useRouter()

  return (
    <Layout>
      <Content>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-3xl font-bold underline">
            bible
          </div>
        </div>
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

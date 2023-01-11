import ChapterList from "components/bible/ChatperList";
import VerseList from "components/bible/VerseList";
import Content from "components/layout/Content";
import Layout from "components/layout/Layout";
import Sidebar from "components/layout/Sidebar";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function VersePage() {
  const router = useRouter()

  return (
    <Layout>
      <Content>
        <VerseList
          vcode={router.query.version}
          bcode={router.query.bible}
          cnum={router.query.chapter}
        />
      </Content>
      <Sidebar>
        <ChapterList
          vcode={router.query.version}
          bcode={router.query.bible}
          cnum={router.query.chapter}
        />
      </Sidebar>
    </Layout>
  )
}

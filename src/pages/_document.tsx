import Header from 'components/layout/Header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>

      </Head>
      <body>
        <div className='h-screen flex flex-col'>
          <Header />
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}

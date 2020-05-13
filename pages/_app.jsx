import Head from 'next/head'
import React from 'react'
import { ZEITUIProvider, CSSBaseline } from '@zeit-ui/react'

const Application = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>ZEIT UI</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="dns-prefetch" href="//zeit-ui.co" />
        <meta name="google" value="notranslate" />
        <meta name="referrer" content="strict-origin" />
        <meta name="description" content="Implementations of Vercel Design." />
        <meta property="og:site_name" content="zeit-ui" />
        <meta property="og:description" content="Implementations of Vercel Design." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="zeit-ui" />
        <meta property="og:title" content="zeit-ui" />
        <meta property="og:url" content="//zeit-ui.co" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/11304944/81868532-10aae880-95a5-11ea-9f5d-cc4ad24169a7.png"
        />
        <meta
          property="twitter:image"
          content="https://user-images.githubusercontent.com/11304944/81868532-10aae880-95a5-11ea-9f5d-cc4ad24169a7.png"
        />
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover"
        />
      </Head>
      <ZEITUIProvider>
        <CSSBaseline />
        <Component {...pageProps} />
      </ZEITUIProvider>
    </>
  )
}

export default Application

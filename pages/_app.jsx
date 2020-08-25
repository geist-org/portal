import Head from 'next/head'
import React from 'react'
import { GeistProvider, CssBaseline } from '@geist-ui/react'

const Application = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Geist UI</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="dns-prefetch" href="//geist-ui.dev" />
        <meta name="google" value="notranslate" />
        <meta name="referrer" content="strict-origin" />
        <meta name="description" content="Implementations of Vercel Design." />
        <meta property="og:site_name" content="geist-ui" />
        <meta property="og:description" content="Implementations of Vercel Design." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="geist-ui" />
        <meta property="og:title" content="geist-ui" />
        <meta property="og:url" content="//geist-ui.dev" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/11304944/91128466-dfc96c00-e6da-11ea-8b03-a96e6b98667d.png"
        />
        <meta
          property="twitter:image"
          content="https://user-images.githubusercontent.com/11304944/91128466-dfc96c00-e6da-11ea-8b03-a96e6b98667d.png"
        />
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover"
        />
      </Head>
      <GeistProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </GeistProvider>
    </>
  )
}

export default Application

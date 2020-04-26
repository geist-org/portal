import Head from 'next/head';
import React from 'react';
import { ZEITUIProvider, useTheme, CSSBaseline } from '@zeit-ui/react';

const myTheme = {
  type: 'dark'
};

const Application = ({ Component, pageProps }) => {
  const theme = useTheme();

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
        <meta name="twitter:creator" content="@echo_witt" />
        <meta property="og:title" content="zeit-ui" />
        <meta property="og:url" content="//zeit-ui.co" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png"
        />
        <meta
          property="twitter:image"
          content="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png"
        />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover" />
      </Head>
      <ZEITUIProvider theme={myTheme}>
        <CSSBaseline>
          <main>
            <Component {...pageProps} />
          </main>
        </CSSBaseline>
        <style global jsx>{`
          main {
            max-width: 600pt;
            margin: 0 auto;
            padding: ${theme.layout.pageMargin};
          }

          html,
          body {
            overflow-x: hidden;
          }

          @media only screen and (max-width: ${theme.layout.breakpointMobile}) {
            html {
              font-size: 15px;
            }
          }
        `}</style>
      </ZEITUIProvider>
    </>
  );
};

export default Application;

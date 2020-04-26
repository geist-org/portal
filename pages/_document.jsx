import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=UA-110371817-13`} />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-110371817-13');
            `
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument

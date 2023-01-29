import metadata from 'config'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang={metadata.language}>
        <Head>
          <link rel="icon" href="/favicons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/favicons/logo_76x76.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/logo_32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/logo_16x16.png"
          />
          <title>{metadata.title}</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

import metadata from "config";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang={metadata.language}>
      <Head>
        <link rel="canonical" href="https://coyo-hm.github.io/" />
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
        <meta
          name="google-site-verification"
          content="HzJb0HTR2Qal7mndqRpQ6uBSJbCRXpZPnh7_Cn1oOgA"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

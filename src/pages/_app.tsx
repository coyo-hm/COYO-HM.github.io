import "@fonts/jetBrainsMono/jetBrainsMono.css";

import "@styles/tailwind.css";
import "@styles/globals.css";
import "@styles/prism-dracula.css";
import "@styles/markdown.css";
// import "@styles/prism-one-dark.css";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";
import * as gtag from "lib/gtag";

import Container from "@components/Container";
import ThemeProvider from "@providers/ThemeProvider";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    if (process.env.NODE_ENV === "development") return;
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {process.env.NODE_ENV !== "development" && (
        <>
          <Head>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
              }}
            />
          </Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
        </>
      )}
      <ThemeProvider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;

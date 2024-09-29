import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import "@fonts/jetBrainsMono/jetBrainsMono.css";
import "@fonts/Inter/inter.css";

import "@styles/tailwind.css";
import "@styles/globals.css";
import "@styles/prism-dracula.css";
import "@styles/markdown.css";
// import "@styles/prism-one-dark.css";
import type { AppProps } from "next/app";
import * as gtag from "@src/libs/gtag";
import ThemeProvider from "@providers/ThemeProvider";
import { isDev } from "@src/libs/core";
import RootLayout from "@components/layout/RootLayout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {!isDev && (
        <>
          <GoogleTagManager gtmId={gtag.GA_TRACKING_ID} />
          <GoogleAnalytics gaId={gtag.GA_TRACKING_ID} />
        </>
      )}
      <ThemeProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeProvider>
    </>
  );
};

export default App;

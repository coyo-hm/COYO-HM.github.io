import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import "@fonts/jetBrainsMono/jetBrainsMono.css";
import "@fonts/Inter/inter.css";

import "@styles/globals.css";
// import "@styles/prism-dracula.css";
// import "@styles/prism-one-dark.css";
import "@styles/markdown.css";
import type { AppProps } from "next/app";
import { isDev } from "@src/libs/core";
import Providers from "@src/providers";
import RootLayout from "@components/layout/RootLayout";
import ToastMessageList from "@components/common/ToastMessage/ToastMessageList";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {!isDev && (
        <>
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID as string} />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
        </>
      )}
      <Providers>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
        <ToastMessageList />
      </Providers>
    </>
  );
};

export default App;

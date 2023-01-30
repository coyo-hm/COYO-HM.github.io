import "@fonts/jetBrainsMono/jetBrainsMono.css";
import "@styles/globals.css";
import "@styles/tailwind.css";
import "@styles/prism-plus.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

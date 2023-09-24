import "@fonts/jetBrainsMono/jetBrainsMono.css";
import "@fonts/pretendard/pretendard.css";
import "@fonts/NanumSquareRound/NanumSquareRound.css";
import "@styles/tailwind.css";
import "@styles/globals.css";
import "@styles/prism-dracula.css";
import "@styles/code.css";
import type { AppProps } from "next/app";
import Container from "@components/common/Container";
import ThemeProvider from "@contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

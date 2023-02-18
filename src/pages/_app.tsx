import "@fonts/jetBrainsMono/jetBrainsMono.css";
import "@fonts/pretendard/pretendard.css";
import "@styles/globals.css";
import "@styles/tailwind.css";
import "@styles/prism-dracula.css";
import "@styles/code.css";
import type { AppProps } from "next/app";
import SidebarProvider from "@contexts/SidebarContext";
import Container from "@components/common/Container";
import ThemeProvider from "@contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </SidebarProvider>
    </ThemeProvider>
  );
}

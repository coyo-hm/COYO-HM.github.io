import "@fonts/jetBrainsMono/jetBrainsMono.css";
import "@styles/globals.css";
import "@styles/tailwind.css";
import "@styles/prism-plus.css";
import type { AppProps } from "next/app";
import SidebarProvider from "@contexts/SidebarContext";
import Container from "@components/common/Container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </SidebarProvider>
  );
}

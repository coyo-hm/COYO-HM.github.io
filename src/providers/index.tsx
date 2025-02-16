import { PropsWithChildren } from "react";
import ThemeProvider from "@providers/ThemeProvider";
import ToastMessageProvider from "@providers/ToastMessageProvider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <ToastMessageProvider>{children}</ToastMessageProvider>
    </ThemeProvider>
  );
}

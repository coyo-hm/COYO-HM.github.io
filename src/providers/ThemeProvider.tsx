"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element> | ReactNode;
}

export default function ThemeProvider({ children }: ThemePropsInterface) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <NextThemeProvider
      storageKey={"theme"}
      attribute="class"
      enableSystem={true}
    >
      {children}
    </NextThemeProvider>
  );
}

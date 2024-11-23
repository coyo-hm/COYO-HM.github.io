"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const NEXT_PUBLIC_REPO_ID = process.env.NEXT_PUBLIC_REPO_ID as string;
const NEXT_PUBLIC_CATEGORY_ID = process.env.NEXT_PUBLIC_CATEGORY_ID as string;

const Giscus = () => {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { resolvedTheme, theme } = useTheme();

  // https://github.com/utterance/utterances/issues/161
  useEffect(() => {
    if (!ref.current) return;

    const scriptElem = document.createElement("script");
    scriptElem.src = "https://giscus.app/client.js";
    scriptElem.async = true;
    scriptElem.crossOrigin = "anonymous";

    scriptElem.setAttribute("data-repo", "COYO-HM/COYO-HM.github.io");
    scriptElem.setAttribute("data-repo-id", NEXT_PUBLIC_REPO_ID);
    scriptElem.setAttribute("data-category", "Comments");
    scriptElem.setAttribute("data-category-id", NEXT_PUBLIC_CATEGORY_ID);
    scriptElem.setAttribute("data-mapping", "pathname");
    scriptElem.setAttribute("data-strict", "0");
    scriptElem.setAttribute("data-reactions-enabled", "1");
    scriptElem.setAttribute("data-emit-metadata", "0");
    scriptElem.setAttribute("data-input-position", "bottom");
    scriptElem.setAttribute("data-theme", resolvedTheme || "light");
    scriptElem.setAttribute("data-lang", "ko");

    ref.current.appendChild(scriptElem);
  }, [resolvedTheme, pathname]);

  // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame"
    );
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: resolvedTheme } } },
      "https://giscus.app"
    );
  }, [resolvedTheme]);

  return (
    <div className={"py-5"}>
      <section ref={ref} />
    </div>
  );
};

export default Giscus;

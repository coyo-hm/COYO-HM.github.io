import useTheme from "@hooks/useTheme";
import Script from "next/script";
import { createRef, useEffect, useLayoutEffect, useState } from "react";

const src = "https://utteranc.es/client.js";
const repo = "COYO-HM/COYO-HM.github.io"; // 자신 계정의 레포지토리로 설정

interface UtterancesAttributesType {
  src: string;
  repo: string;
  "issue-term": string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
}

const CommentWidget = () => {
  const element = createRef<HTMLDivElement>();
  const { isDarkTheme } = useTheme();

  console.log(isDarkTheme);
  const attributes: UtterancesAttributesType = {
    src,
    repo,
    "issue-term": "pathname",
    label: "Comment",
    theme: isDarkTheme ? `photon-dark` : `github-light`,
    crossorigin: "anonymous",
    async: "true",
  };

  // useEffect(() => {
  //   if (element.current === null) {
  //     return;
  //   } else {
  //     const utterances: HTMLScriptElement = document.createElement("script");

  //     const attributes: UtterancesAttributesType = {
  //       src,
  //       repo,
  //       "issue-term": "pathname",
  //       label: "Comment",
  //       theme: isDarkTheme ? `photon-dark` : `github-light`,
  //       crossorigin: "anonymous",
  //       async: "true",
  //     };

  //     Object.entries(attributes).forEach(([key, value]) => {
  //       utterances.setAttribute(key, value);
  //     });

  //     console.log(utterances);

  //     element.current.appendChild(utterances);
  //   }
  // }, [element, isDarkTheme]);

  return (
    <div
      ref={element}
      id={isDarkTheme ? "utterances-dark" : "utterances-light"}
    >
      <Script {...attributes} />
    </div>
  );
};

export default CommentWidget;

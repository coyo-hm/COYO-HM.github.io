import { createRef, useEffect } from "react";

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
  const elementLight = createRef<HTMLDivElement>();
  const elementDark = createRef<HTMLDivElement>();

  useEffect(() => {
    if (elementLight.current === null || elementDark.current === null) {
      return;
    } else {
      const utterances: HTMLScriptElement = document.createElement("script");
      const utterancesDark: HTMLScriptElement =
        document.createElement("script");

      const attributes: UtterancesAttributesType = {
        src,
        repo,
        "issue-term": "pathname",
        label: "Comment",
        theme: `github-light`,
        crossorigin: "anonymous",
        async: "true",
      };

      const darkAttributes: UtterancesAttributesType = {
        src,
        repo,
        "issue-term": "pathname",
        label: "Comment",
        theme: `photon-dark`,
        crossorigin: "anonymous",
        async: "true",
      };

      Object.entries(attributes).forEach(([key, value]) => {
        utterances.setAttribute(key, value);
      });

      Object.entries(darkAttributes).forEach(([key, value]) => {
        utterancesDark.setAttribute(key, value);
      });

      elementLight.current.appendChild(utterances);
      elementDark.current.appendChild(utterancesDark);
    }
  }, [elementDark, elementLight]);

  return (
    <>
      <div ref={elementLight} id={"utterances-light"} />
      <div ref={elementDark} id={"utterances-dark"} />
    </>
  );
};

export default CommentWidget;

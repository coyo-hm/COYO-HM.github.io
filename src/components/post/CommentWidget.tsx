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
  const [theme, setTheme] = useState("");

  useLayoutEffect(() => {
    setTheme(localStorage.theme === "dark" ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (element.current === null || theme === "") {
      return;
    } else {
      const utterances: HTMLScriptElement = document.createElement("script");

      const attributes: UtterancesAttributesType = {
        src,
        repo,
        "issue-term": "pathname",
        label: "Comment",
        theme: theme ? `photon-dark` : `github-light`,
        crossorigin: "anonymous",
        async: "true",
      };

      Object.entries(attributes).forEach(([key, value]) => {
        utterances.setAttribute(key, value);
      });

      console.log(theme, utterances);

      element.current.appendChild(utterances);
    }
  }, [element, theme]);

  return <div ref={element} id={`utterances`} />;
};

export default CommentWidget;

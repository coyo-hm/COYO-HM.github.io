import { ComponentProps, useRef } from "react";
import CopyIcon from "@icons/copy.svg";

const CodeBlock = ({ children, ...props }: ComponentProps<"pre">) => {
  const codeRef = useRef<HTMLPreElement>(null);

  const onCopy = async () => {
    const code = codeRef.current?.querySelector("code")?.innerText;
    if (!code) {
      return;
    }
    try {
      await navigator.clipboard.writeText(code);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <button
        className={`absolute right-2 top-2 w-6 h-6 hover:text-blue-700 text-neutral-300`}
        onClick={onCopy}
      >
        <CopyIcon />
      </button>
      <div className={`rounded overflow-hidden`}>
        <pre {...props} ref={codeRef}>
          {children}
        </pre>
      </div>
    </>
  );
};
export default CodeBlock;

import { DetailedHTMLProps, HTMLAttributes } from "react";

const getHeaderId = ({
  children,
}: DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => {
  const elements = children as any[];
  let headerId = "";
  elements.map((element) => {
    console.log(element);
    if (typeof element === "string") {
      headerId += element.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi, "");
    } else if (typeof element?.props?.children === "string") {
      headerId += element?.props?.children?.replace(
        /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,
        ""
      );
    }

  });

  return headerId;
};

export default getHeaderId;

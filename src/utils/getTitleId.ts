import { DetailedHTMLProps, HTMLAttributes, ReactHTMLElement } from "react";
import parseHeadingToId from "@utils/parseHeadingToId";

const getText = (element: any): string => {
  if (typeof element === "string") {
    return element;
  }
  if (element?.props?.children) {
    return getText(element.props?.children);
  }
  return "";
};

const getTitleId = ({
  children,
}: DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => {
  let title = "";
  if (typeof children === "string") {
    title = children;
  // } else if (typeof children === "object") {
  //   title = getText(children);
  } else {
    const elements = children as unknown as any[];
    title = elements.reduce((t: string, ele) => t + getText(ele), "");
  }

  return parseHeadingToId(title);
};

export default getTitleId;

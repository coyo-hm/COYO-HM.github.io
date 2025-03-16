import { DetailedHTMLProps, HTMLAttributes, ReactHTMLElement } from "react";
import parseHeadingToId from "@utils/parseHeadingToId";
import headingAnchor from "@components/common/MDXContent/HeadingAnchor";

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
  } else if (typeof children === "object") {
    const element = children as ReactHTMLElement<any>;
    title = getTitleId(element.props);
  } else {
    const elements = children as any[];
    title = elements.reduce((t: string, ele) => t + getText(ele), "");
  }

  return parseHeadingToId(title);
};

export default getTitleId;

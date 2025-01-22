import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  id: string;
}

const HeadingAnchor = ({ id, children }: Props) => {
  return (
    <a href={`#${id}`} className={"heading-anchor"}>
      {children}
    </a>
  );
};

export default HeadingAnchor;

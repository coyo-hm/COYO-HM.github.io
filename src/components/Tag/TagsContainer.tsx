import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const TagsContainer = ({ children }: Props) => {
  return <div className={``}>{children}</div>;
};
export default TagsContainer;

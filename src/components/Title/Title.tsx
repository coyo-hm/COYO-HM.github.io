import React from "react";

export interface TitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Title = ({ children, ...rest }: TitleProps) => (
  <div {...rest} className={`italic ${rest?.className}`}>
    {children}
  </div>
);

export default Title;

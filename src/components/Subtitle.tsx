import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

const Subtitle = ({ children, ...rest }: Props) => (
  <h2
    {...rest}
    className={`italic text-center text-4xl font-bold mb-4 ${rest?.className}`}
  >
    {children}
  </h2>
);

export default Subtitle;

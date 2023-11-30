import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  title: string;
}

const Title = ({ title, ...rest }: Props) => (
  <h1
    {...rest}
    className={`italic text-center text-6xl font-extrabold mt-20 ${rest?.className}`}
  >
    {title}
  </h1>
);

export default Title;

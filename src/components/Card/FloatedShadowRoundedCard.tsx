import React, { ReactNode } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
}

const FloatedRoundCard = ({ children, ...rest }: Props) => (
  <div
    {...rest}
    className={`rounded-xl hover:bg-white hover:shadow-xl hover:-translate-y-2 hover:duration-300 hover:ease-in-out hover:dark:bg-neutral-800 ${rest?.className}`}
  >
    {children}
  </div>
);
export default FloatedRoundCard;

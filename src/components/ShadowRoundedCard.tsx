import React, { ReactNode } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  isFloated?: boolean;
}

const ShadowRoundedCard = ({ isFloated = false, children, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className={`shadow-xl rounded-xl bg-white dark:shadow-black/50 ${
        isFloated && `hover:-translate-y-2 hover:duration-300 hover:ease-in-out`
      } dark:bg-neutral-800 ${rest?.className}`}
    >
      {children}
    </div>
  );
};
export default ShadowRoundedCard;

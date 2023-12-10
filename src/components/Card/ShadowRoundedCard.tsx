import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

// const cardVariants = {
//   initial: { y: 0 },
//   hover: {
//     y: -2,
//     transition: {
//       ease: "ease-in-out",
//       duration: 0.3,
//     },
//   },
// };

interface Props extends HTMLMotionProps<"div"> {}

const ShadowRoundedCard = ({ children, ...rest }: Props) => {
  return (
    <motion.div
      {...rest}
      className={`rounded-xl shadow-xl dark:shadow-black/50 bg-white dark:bg-neutral-800 ${rest?.className}`}
    >
      {children}
    </motion.div>
  );
};
export default ShadowRoundedCard;

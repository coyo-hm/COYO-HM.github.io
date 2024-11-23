import { motion, Variants } from "framer-motion";
interface Props {
  variants?: Variants;
}
const PauseIcon = ({ variants }: Props) => (
  <svg
    width={"100%"}
    height={"100%"}
    viewBox={"0 0 90 90"}
    fill={"none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)"
      fill={"currentColor"}
      stroke="none"
    >
      <motion.path
        variants={variants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        d="M200 760 c-19 -19 -20 -33 -20 -310 0 -277 1 -291 20 -310 15 -15 33
-20 70 -20 37 0 55 5 70 20 19 19 20 33 20 310 0 277 -1 291 -20 310 -15 15
-33 20 -70 20 -37 0 -55 -5 -70 -20z"
      />
      <motion.path
        variants={variants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        d="M560 760 c-19 -19 -20 -33 -20 -310 0 -277 1 -291 20 -310 15 -15 33
-20 70 -20 37 0 55 5 70 20 19 19 20 33 20 310 0 277 -1 291 -20 310 -15 15
-33 20 -70 20 -37 0 -55 -5 -70 -20z"
      />
    </g>
  </svg>
);

export default PauseIcon;

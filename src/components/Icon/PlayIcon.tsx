import { motion, Variants } from "framer-motion";
interface Props {
  variants?: Variants;
}
const PlayIcon = ({ variants }: Props) => (
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
        d="M155 797 c-3 -6 -4 -167 -3 -357 3 -303 5 -345 19 -348 8 -1 156 74
327 169 232 127 312 175 312 189 0 14 -80 62 -311 189 -171 94 -318 171 -326
171 -7 0 -16 -6 -18 -13z"
      />
    </g>
  </svg>
);

export default PlayIcon;

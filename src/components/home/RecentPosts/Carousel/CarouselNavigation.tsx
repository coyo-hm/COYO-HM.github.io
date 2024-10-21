import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DirectionType from "@models/direction";

import ClockWiseIcon from "@icons/clockwise.svg";
import LeftForwardIcon from "@icons/left-forward.svg";
import RightForwardIcon from "@icons/right-forward.svg";
import PlayIcon from "./PlayIcon";
import PauseIcon from "./PauseIcon";

const progressBarVariants = {
  initial: {
    width: 0,
    opacity: 1,
  },
  animate: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 4,
    },
  },
  pause: {
    animationPlayState: "pause",
  },
  exit: {
    width: "100%",
    opacity: 0,
  },
};

const svgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      dumpling: 20,
    },
  },
  exit: {
    opacity: 0,
  },
};

interface Props {
  postLength: number;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  direction: DirectionType;
  setDirection: Dispatch<SetStateAction<DirectionType>>;
  isPaused: boolean;
  onTogglePause: () => void;
}

const CarouselNavigation = ({
  postLength,
  currentIndex,
  setCurrentIndex,
  direction,
  setDirection,
  isPaused,
  onTogglePause,
}: Props) => {
  return (
    <div
      id={"home-carousel-navigation-buttons"}
      className={`flex gap-1.5 items-center`}
    >
      {/*<button className={`w-5 hover:scale-110 hover:text-blue-700`}>*/}
      {/*  <RandomIcon />*/}
      {/*</button>*/}
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev === 0 ? postLength - 1 : prev - 1))
        }
        className={`w-6 hover:scale-110 hover:text-blue-700`}
      >
        <LeftForwardIcon />
      </button>
      <button
        onClick={onTogglePause}
        className={`w-6 hover:scale-110 hover:text-blue-700`}
      >
        <AnimatePresence custom={direction}>
          {isPaused ? (
            <PlayIcon variants={svgVariants} />
          ) : (
            <PauseIcon variants={svgVariants} />
          )}
        </AnimatePresence>
      </button>
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev + 1 === postLength ? 0 : prev + 1))
        }
        className={`w-6 hover:scale-110 hover:text-blue-700`}
      >
        <RightForwardIcon />
      </button>
      <button
        onClick={() =>
          setDirection((prev) => (prev === "left" ? "right" : "left"))
        }
        className={`w-5 hover:text-blue-700 hover:animate-spin`}
      >
        {direction === "left" ? (
          <ClockWiseIcon />
        ) : (
          <ClockWiseIcon className={`scale-x-[-1]`} />
        )}
      </button>
      <div
        className={
          "flex-grow h-2 overflow-hidden rounded-lg relative bg-neutral-300 dark:bg-neutral-700"
        }
      >
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            variants={progressBarVariants}
            initial={"initial"}
            animate={isPaused ? "" : "animate"}
            exit={"exit"}
            className={`h-full w-full bg-blue-700 absolute top-0 `}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CarouselNavigation;

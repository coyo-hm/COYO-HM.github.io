import Link from "next/link";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ShadowRoundedCard from "@components/Card/ShadowRoundedCard";
import RecentPostCard from "@components/Main/Carousel/RecentPostCard";
import { PostType } from "@models/post";
import DirectionType from "@models/direction";
import { SeriesAttributeTableType } from "@models/series";
import LeftForwardIcon from "@components/Icon/LeftForwardIcon";
import RightForwardIcon from "@components/Icon/RightForwardIcon";
import PauseIcon from "@components/Icon/PauseIcon";
import PlayIcon from "@components/Icon/PlayIcon";
import ActivePostCard from "@components/Main/Carousel/ActivePostCard";
import ClockWiseIcon from "@images/clockwise.svg";

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

const dotsVariants = {
  initial: {
    backgroundColor: "rgb(163, 163, 163)",
  },
  animate: {
    backgroundColor: "rgb(29, 78, 216)",
    scale: 1.2,
    transition: { duration: 0.2 },
  },
  hover: {
    scale: 1.2,
    transition: { duration: 0.2 },
  },
};

interface Props {
  posts: PostType[];
  allSeriesInfo: SeriesAttributeTableType;
}

const INTERVAL_TIME = 4000;

const Carousel = ({ posts, allSeriesInfo }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<DirectionType>("right");
  const intervalRef = useRef<NodeJS.Timer>();

  const onMouseOver = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
  };

  const onMouseOut = () => {
    setIsPaused(false);
  };

  const intervalCallback = useCallback(
    () =>
      setCurrentIndex((prev) => {
        if (direction === "right") {
          return prev + 1 === posts.length ? 0 : prev + 1;
        }
        return prev === 0 ? posts.length - 1 : prev - 1;
      }),
    [posts, direction]
  );

  useEffect(() => {
    if (isPaused) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(intervalCallback, INTERVAL_TIME);
    }
    return () => clearInterval(intervalRef.current);
  }, [intervalCallback, isPaused]);

  return (
    <>
      <div className={`pb-3 gap-5 flex justify-between items-end`}>
        <div className={`flex gap-1.5 items-center`}>
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
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? posts.length - 1 : prev - 1
              )
            }
            className={`w-6 hover:scale-110 hover:text-blue-700`}
          >
            <LeftForwardIcon />
          </button>
          <button
            onClick={() => setIsPaused((prev) => !prev)}
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
              setCurrentIndex((prev) =>
                prev + 1 === posts.length ? 0 : prev + 1
              )
            }
            className={`w-6 hover:scale-110 hover:text-blue-700`}
          >
            <RightForwardIcon />
          </button>
        </div>
        <div className={`flex gap-1 justify-end`}>
          {posts?.map((_, idx) => (
            <motion.button
              key={`circle_${idx}`}
              className={`rounded-full h-2 w-2 bg-neutral-400`}
              onClick={() => setCurrentIndex(idx)}
              variants={dotsVariants}
              initial={"initial"}
              animate={currentIndex === idx ? "animate" : ""}
              whileHover={"hover"}
            />
          ))}
        </div>
      </div>
      <div className={`grid grid-cols-[3fr_1fr] max-md:grid-cols-1 gap-5`}>
        <div className={`relative max-md:h-[400px]`}>
          <AnimatePresence custom={direction}>
            <ActivePostCard
              {...posts[currentIndex]}
              currentIndex={currentIndex}
              direction={direction}
              allSeriesInfo={allSeriesInfo}
            />
          </AnimatePresence>
        </div>
        <div>
          <ShadowRoundedCard
            id={"recent_post"}
            className={`pb-3 flex flex-col gap-1.5`}
          >
            {posts?.map(({ frontMatter, fields: { slug } }, idx) => (
              <Fragment key={slug}>
                <Link
                  href={`/post/${slug}`}
                  key={`recent_post_${slug}`}
                  aria-label={`link-${slug}`}
                >
                  <RecentPostCard
                    {...frontMatter}
                    isActive={idx === currentIndex}
                    onMouseOver={() => onMouseOver(idx)}
                    onMouseOut={onMouseOut}
                  />
                </Link>
                {posts.length !== idx + 1 && <hr className={``} />}
              </Fragment>
            ))}
          </ShadowRoundedCard>
        </div>
      </div>
    </>
  );
};
export default Carousel;

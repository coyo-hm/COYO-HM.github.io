import Link from "next/link";
import Image from "next/image";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ShadowRoundedCard from "@components/Card/ShadowRoundedCard";
import RecentPostCard from "@components/PostCard/RecentPostCard";
import { PostType } from "@models/post";
import DirectionType from "@models/direction";
import { SeriesInfoTable } from "@models/series";
import getDate from "@utils/getDate";
import imgLoader from "@utils/imgLoader";

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

const postVariants = {
  initial: (direction: DirectionType) => ({
    x: direction === "right" ? -20 : 20,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      dumpling: 20,
    },
  },
  hover: {
    scale: 1.02,
  },
  exit: (direction: DirectionType) => ({
    opacity: 0,
  }),
};

const dotsVariants = {
  initial: {},
  active: {
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
  allSeriesInfo: SeriesInfoTable;
}

const INTERVAL_TIME = 5000;

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

  const getSeriesTitle = (seriesKey?: string) => {
    if (seriesKey && allSeriesInfo && allSeriesInfo[seriesKey]) {
      return allSeriesInfo[seriesKey].title;
    }
    return "";
  };

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
      <div className={`flex justify-between pb-1.5`}>
        <div className={`gap-1.5`}>
          <button
            onClick={() => setDirection("left")}
            className={`w-6 hover:scale-110 hover:text-blue-700`}
          >
            <LeftIcon />
          </button>
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className={`w-6 hover:scale-110 hover:text-blue-700`}
          >
            <AnimatePresence custom={direction}>
              {isPaused ? <PlayIcon /> : <PauseIcon />}
            </AnimatePresence>
          </button>
          <button
            onClick={() => setDirection("right")}
            className={`w-6 hover:scale-110 hover:text-blue-700`}
          >
            <RightIcon />
          </button>
        </div>
        <div className={`flex gap-1`}>
          {posts?.map((_, idx) => (
            <motion.button
              key={`circle_${idx}`}
              className={`rounded-full h-2 w-2 bg-neutral-400 ${
                idx === currentIndex && "bg-blue-700"
              }`}
              onClick={() => setCurrentIndex(idx)}
              initial={"initial"}
              animate={currentIndex === idx ? "hover" : ""}
              whileHover={"hover"}
              variants={dotsVariants}
            />
          ))}
        </div>
      </div>
      <div className={`grid grid-cols-[3fr_1fr] gap-5 max-md:grid-cols-1`}>
        <div className={`relative h-full max-md:h-[400px]`}>
          <AnimatePresence custom={direction}>
            {posts[currentIndex] && (
              <Link
                href={`/${posts[currentIndex].fields.slug}`}
                aria-label={`link-${posts[currentIndex].fields.slug}`}
              >
                <motion.div
                  key={currentIndex}
                  variants={postVariants}
                  initial={"initial"}
                  animate={"animate"}
                  exit={"exit"}
                  custom={direction}
                  whileHover={"hover"}
                  className={`flex flex-col absolute top-0 left-0 h-full w-full gap-4 hover:text-blue-700`}
                >
                  <ShadowRoundedCard
                    className={`relative h-[80%] rounded-xl bg-white dark:bg-white `}
                  >
                    {posts[currentIndex].frontMatter.thumbnail && (
                      <Image
                        loader={(props) => imgLoader(props)}
                        src={
                          posts[currentIndex].frontMatter.thumbnail as string
                        }
                        alt={posts[currentIndex].frontMatter.title}
                        className={`object-contain`}
                        priority
                        fill
                        sizes={"(min-width:640px) 50vw, 100vw"}
                      />
                    )}
                  </ShadowRoundedCard>
                  <div className={`flex justify-end items-center`}>
                    {getSeriesTitle(
                      posts[currentIndex].frontMatter?.series
                    ) && (
                      <div
                        className={
                          "px-4 py-1 border-blue-700 border-2 rounded-3xl bg-white text-blue-700 dark:bg-blue-700 dark:text-white"
                        }
                      >
                        {getSeriesTitle(
                          posts[currentIndex].frontMatter?.series
                        )}
                      </div>
                    )}
                    <div className={`flex-grow text-right text-neutral-500`}>
                      {getDate(posts[currentIndex].frontMatter.date)?.dateStr}
                    </div>
                  </div>
                  <h1 className={`text-2xl font-semibold `}>
                    {posts[currentIndex].frontMatter.title}
                  </h1>
                </motion.div>
              </Link>
            )}
          </AnimatePresence>
        </div>
        <div>
          <ShadowRoundedCard
            id={"recent_post"}
            className={`py-3 flex flex-col gap-1.5`}
          >
            {posts?.map(({ frontMatter, fields: { slug } }, idx) => (
              <Fragment key={slug}>
                <Link
                  href={`/${slug}`}
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

const PauseIcon = () => (
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
        variants={svgVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        d="M200 760 c-19 -19 -20 -33 -20 -310 0 -277 1 -291 20 -310 15 -15 33
-20 70 -20 37 0 55 5 70 20 19 19 20 33 20 310 0 277 -1 291 -20 310 -15 15
-33 20 -70 20 -37 0 -55 -5 -70 -20z"
      />
      <motion.path
        variants={svgVariants}
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

const PlayIcon = () => (
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
        variants={svgVariants}
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

const RightIcon = () => (
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
        d="M185 707 c-3 -7 -4 -127 -3 -267 3 -229 5 -255 20 -258 22 -4 368
248 368 268 0 18 -341 270 -365 270 -9 0 -18 -6 -20 -13z"
      />
      <path
        d="M642 708 c-17 -17 -17 -499 0 -516 17 -17 44 -15 62 4 14 13 16 51
16 258 0 254 -2 266 -45 266 -12 0 -26 -5 -33 -12z"
      />
    </g>
  </svg>
);
const LeftIcon = () => (
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
        d="M192 708 c-17 -17 -17 -499 0 -516 17 -17 44 -15 62 4 14 13 16 51
16 258 0 254 -2 266 -45 266 -12 0 -26 -5 -33 -12z"
      />
      <motion.path
        d="M505 594 c-117 -86 -170 -131 -170 -144 0 -24 338 -273 363 -268 15
3 17 28 17 268 0 258 -1 265 -20 267 -12 1 -88 -48 -190 -123z"
      />
    </g>
  </svg>
);

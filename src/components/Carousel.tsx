import Link from "next/link";
import Image from "next/image";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ShadowRoundedCard from "@components/ShadowRoundedCard";
import RecentPostCard from "@components/RecentPostCard";
import { PostType } from "@models/post";
import DirectionType from "@models/direction";
import { SeriesInfoTable } from "@models/series";
import getDate from "@utils/getDate";
import imgLoader from "@utils/imgLoader";
import LeftForwardIcon from "@components/LeftForwardIcon";
import RightForwardIcon from "@components/RightForwardIcon";
import TagIcon from "@components/TagIcon";
import TAG_INFO from "@constants/tag_info";

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
      <div className={`pb-1.5 gap-5 flex justify-between`}>
        <div className={`flex gap-1.5 items-center`}>
          <button
            onClick={() => setDirection("left")}
            className={`w-6 hover:scale-110 hover:text-blue-700`}
          >
            <LeftForwardIcon />
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
            <RightForwardIcon />
          </button>
        </div>
        <div className={`flex gap-1 justify-end`}>
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
                    <motion.div
                      className={`flex flex-col absolute top-0 left-0 h-full w-full rounded-xl gap-4 opacity-0 hover:opacity-100 bg-neutral-900/80 overflow-hidden`}
                    >
                      <motion.div className={`text-white p-10 flex-grow`}>
                        <h1
                          className={`text-left text-3xl italic font-bold flex gap-1.5 `}
                        >
                          <div className={"w-8"}>
                            <TagIcon />
                          </div>
                          Tag
                        </h1>
                        <div
                          className={`text-lg leading-8 font-light pt-3 break-keep whitespace-pre-wrap flex flex-wrap gap-2`}
                        >
                          {posts[currentIndex].frontMatter?.tags.map((tag) => {
                            const tagInfo = TAG_INFO[tag];
                            return (
                              <div
                                key={tag}
                                className={`${tagInfo?.border} ${tagInfo?.text} border-2 py-1 px-4 rounded-3xl text-sm font-semibold`}
                              >
                                {tagInfo?.label || tag}
                              </div>
                            );
                          })}
                        </div>
                        <h1
                          className={`text-left text-3xl italic font-bold mt-7`}
                        >
                          Description
                        </h1>
                        <p
                          className={`text-lg leading-8 font-light pt-3 break-keep whitespace-pre-wrap`}
                        >
                          {posts[currentIndex].frontMatter?.description}
                        </p>
                      </motion.div>
                      {/*<motion.div*/}
                      {/*  className={"w-full h-3 bg-neutral-900 rounded-2xl"}*/}
                      {/*  id={"playBar"}*/}
                      {/*></motion.div>*/}
                    </motion.div>
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
                    <div
                      className={`flex-grow text-right text-lg text-neutral-500`}
                    >
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

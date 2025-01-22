import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import DirectionType from "@models/direction";
import { SeriesInfoTable } from "@models/series";

import CarouselNavigation from "./CarouselNavigation";
import ActivePost from "./ActivePost";
import RecentPostList from "./RecentPostList";
import { PostType } from "@models/post";

const INTERVAL_TIME = 4000;

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
  seriesInfoTable: SeriesInfoTable;
}

const Carousel = ({ posts, seriesInfoTable }: Props) => {
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

  const onTogglePause = () => setIsPaused((prev) => !prev);

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
    <div
      id={"home-carousel"}
      className={"grid grid-cols-[3fr_1fr] max-md:grid-cols-1 gap-x-5 gap-y-3"}
    >
      <CarouselNavigation
        postLength={posts.length}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        direction={direction}
        setDirection={setDirection}
        isPaused={isPaused}
        onTogglePause={onTogglePause}
      />
      <div className={`flex gap-1 justify-end items-center`}>
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
      <ActivePost
        {...posts[currentIndex]}
        activeIndex={currentIndex}
        direction={direction}
        seriesInfoTable={seriesInfoTable}
      />
      <RecentPostList
        posts={posts}
        activeIndex={currentIndex}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      />
    </div>
  );
};
export default Carousel;

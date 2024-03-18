import { PostType } from "@models/post";
import Link from "next/link";
import { motion } from "framer-motion";
import ShadowRoundedCard from "@components/Card/ShadowRoundedCard";
import Image from "next/image";
import imgLoader from "@utils/imgLoader";
import TagIcon from "@components/Icon/TagIcon";
import TAG_INFO from "@constants/tag_info";
import getDate from "@utils/getDate";
import DirectionType from "@models/direction";
import { SeriesAttributeTableType } from "@models/series";

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

interface Props extends PostType {
  currentIndex: number;
  direction: DirectionType;
  allSeriesInfo: SeriesAttributeTableType;
}

const ActivePostCard = ({
  currentIndex,
  direction,
  allSeriesInfo,
  fields: { slug },
  frontMatter: {
    title,
    tags,
    date,
    thumbnail,
    description,
    series,
    blurThumbnail,
  },
}: Props) => {
  const getSeriesTitle = (seriesKey?: string) => {
    if (seriesKey && allSeriesInfo && allSeriesInfo[seriesKey]) {
      return allSeriesInfo[seriesKey].title;
    }
    return "";
  };
  return (
    <Link href={`/post/${slug}`} aria-label={`link-${slug}`}>
      <motion.div
        key={currentIndex}
        custom={direction}
        variants={postVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        whileHover={"hover"}
        className={`flex flex-col absolute top-0 left-0 h-full w-full gap-4 hover:text-blue-700`}
      >
        <ShadowRoundedCard
          className={`relative h-[80%] rounded-xl bg-white dark:bg-white overflow-hidden`}
        >
          <Image
            loader={(props) => imgLoader(props)}
            src={thumbnail}
            alt={title}
            className={`object-contain`}
            fill
            placeholder={"blur"}
            blurDataURL={blurThumbnail}
          />
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
                {tags.map((tag) => {
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
              <h1 className={`text-left text-3xl italic font-bold mt-7`}>
                Description
              </h1>
              <p
                className={`text-lg leading-8 font-light pt-3 break-keep whitespace-pre-wrap`}
              >
                {description}
              </p>
            </motion.div>
            {/*<motion.div*/}
            {/*  className={"w-full h-3 bg-neutral-900 rounded-2xl"}*/}
            {/*  id={"playBar"}*/}
            {/*></motion.div>*/}
          </motion.div>
        </ShadowRoundedCard>
        <div className={`flex justify-end items-center`}>
          {!!series && (
            <div className={`flex gap-2`}>
              {series.map((seriesKey) => (
                <div
                  className={
                    "px-4 py-1 border-blue-700 border-2 rounded-3xl bg-white text-blue-700 dark:bg-blue-700 dark:text-white"
                  }
                  key={seriesKey}
                >
                  {getSeriesTitle(seriesKey)}
                </div>
              ))}
            </div>
          )}
          <div className={`flex-grow text-right text-lg text-neutral-500`}>
            {getDate(date)?.dateStr}
          </div>
        </div>
        <h1 className={`text-2xl font-semibold`}>{title}</h1>
      </motion.div>
    </Link>
  );
};

export default ActivePostCard;

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import DirectionType from "@src/types/direction";
import { SeriesInfoTable } from "@src/types/series";
import TagInfo from "@constants/tagInfo";
import getDate from "@utils/getDate";
import BlurImage from "@components/common/BlurImage";
import TagIcon from "@icons/tag.svg";
import { PostType } from "@src/types/post";

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
  exit: () => ({
    opacity: 0,
  }),
};

const Tag = ({ tag }: { tag: string }) => {
  const tagInfo = TagInfo[tag];
  return (
    <div
      key={tag}
      className={`${tagInfo?.border} ${tagInfo?.text} border-2 py-1 px-4 rounded-3xl text-sm font-semibold`}
    >
      {tagInfo?.label || tag}
    </div>
  );
};

interface Props extends PostType {
  activeIndex: number;
  direction: DirectionType;
  seriesInfoTable: SeriesInfoTable;
}

const ActivePost = ({
  activeIndex,
  direction,
  seriesInfoTable,
  title,
  slug,
  tags,
  date,
  thumbnail,
  description,
  series,
  blurThumbnail,
}: Props) => {
  const getSeriesTitle = (seriesKey?: string) =>
    seriesKey && seriesInfoTable && seriesInfoTable[seriesKey]
      ? seriesInfoTable[seriesKey].title
      : "";

  return (
    <div className={`relative max-md:h-[400px]`}>
      <AnimatePresence custom={direction}>
        <Link href={slug} aria-label={`link-${slug}`}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={postVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            whileHover={"hover"}
            className={`flex flex-col absolute top-0 left-0 h-full w-full gap-4 hover:text-blue-700`}
          >
            <div
              className={`rounded-xl shadow-xl dark:shadow-black/50 bg-white relative h-4/5 overflow-hidden flex items-center`}
            >
              <BlurImage
                src={thumbnail}
                alt={title}
                className={`w-full h-auto object-contain`}
                width={100}
                height={100}
                blurDataURL={blurThumbnail}
              />
              <div
                className={`flex flex-col absolute top-0 left-0 h-full w-full rounded-xl gap-4 opacity-0 hover:opacity-100 bg-neutral-900/80 overflow-hidden text-white p-10`}
              >
                <h2
                  className={`text-left text-3xl italic font-bold flex gap-1.5`}
                >
                  <TagIcon width={"2rem"} /> Tag
                </h2>
                <div
                  className={`pt-2 pl-2 text-lg leading-8 font-light break-keep whitespace-pre-wrap flex flex-wrap gap-2`}
                >
                  {tags.map((tag) => (
                    <Tag tag={tag} key={tag} />
                  ))}
                </div>
                <h2 className={`text-left text-3xl italic font-bold mt-7`}>
                  Description
                </h2>
                <p
                  className={`pt-2 pl-2 text-lg leading-8 font-light break-keep whitespace-pre-wrap`}
                >
                  {description}
                </p>
              </div>
            </div>
            <div className={`flex justify-end items-center flex-wrap`}>
              {!!series && (
                <div className={`flex gap-2 flex-shrink-0`}>
                  {series.map((seriesKey) => (
                    <div
                      className={
                        "px-4 py-1 border-blue-700 border-2 rounded-3xl bg-white text-blue-700 dark:bg-blue-700 dark:text-white "
                      }
                      key={seriesKey}
                    >
                      {getSeriesTitle(seriesKey)}
                    </div>
                  ))}
                </div>
              )}
              <div
                className={`flex-grow text-right text-lg text-neutral-500 flex-shrink-0`}
              >
                {getDate(date)?.dateStr}
              </div>
            </div>
            <h1 className={`text-2xl font-semibold`}>{title}</h1>
          </motion.div>
        </Link>
      </AnimatePresence>
    </div>
  );
};
export default ActivePost;

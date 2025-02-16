import { motion } from "framer-motion";
import { PostInfoType } from "@src/types/post";
import getDate from "@utils/getDate";
import BlurImage from "@components/common/BlurImage";
import TagBox from "@components/common/TagBox";

//bg-white/60 dark:bg-neutral-700

const postVariants = {
  initial: { y: 0, backgroundColor: "transparent" },
  hover: {
    y: -3,
    backgroundColor: "rgba(147, 197, 253, 0.2)",
    transition: { type: "tween", duration: 0.3 },
  },
};

interface Props extends PostInfoType {
  index: number;
}

const SeriesPostItem = ({
  index,
  title,
  date,
  description,
  tags,
  thumbnail,
  blurThumbnail,
}: Props) => {
  return (
    <motion.div
      variants={postVariants}
      initial={"initial"}
      whileHover={"hover"}
      className={`flex gap-3 rounded shadow-xl dark:shadow-black/50 overflow-hidden p-5`}
    >
      <div className={`relative w-1/5 min-w-[100px] bg-white flex-shrink-0`}>
        <BlurImage
          src={thumbnail}
          alt={title}
          className={`object-cover h-auto`}
          fill
          blurDataURL={blurThumbnail}
        />
      </div>
      <div className={`flex flex-col`}>
        <h3
          className={`text-neutral-800 dark:text-neutral-100 text-lg font-semibold`}
        >
          {index + 1}.&nbsp;{title}
        </h3>
        <p className={`text-sm w-full two-line-ellipsis mt-1.5 mb-2`}>
          {description}
        </p>
        <div className={`flex flex-wrap`}>
          <span className={`text-neutral-600 dark:text-neutral-300 text-xs`}>
            {getDate(date).dateStr}
          </span>
          <ul
            className={`flex flex-shrink flex-wrap items-center gap-1 border-l-2 border-neutral-200 dark:border-neutral-500 pl-2 ml-2`}
          >
            {tags.map((tag) => (
              <TagBox tag={tag} key={tag} />
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
export default SeriesPostItem;

import { motion } from "framer-motion";
import BlurImage from "@components/common/BlurImage";
import getDate from "@utils/getDate";
import TagBox from "@components/common/TagBox";
import { Post } from "contentlayer/generated";

const hoverVariants = {
  initial: { y: 0 },
  hover: {
    y: -3,
    transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
  },
};

const BlogItem = ({ title, date, tags, thumbnail, blurThumbnail }: Post) => {
  return (
    <motion.li
      className={`rounded-xl shadow-xl dark:shadow-black/50 bg-white dark:bg-neutral-800 h-full overflow-hidden flex flex-col`}
      variants={hoverVariants}
      initial={"initial"}
      whileHover={"hover"}
    >
      <div className={`relative h-[300px] rounded-t-xl overflow-hidden`}>
        <BlurImage
          src={thumbnail}
          alt={title}
          className={`object-cover h-auto`}
          fill
          blurDataURL={blurThumbnail}
        />
      </div>
      <section className={`p-5 grow`}>
        <h2
          className={`text-neutral-800 dark:text-neutral-100 font-semibold text-xl pb-2`}
        >
          {title}
        </h2>
        <div className={"w-full flex"}>
          <span
            className={`text-sm font-light text-neutral-400 pr-2 mr-2 border-r-2 border-neutral-200 dark:border-neutral-500`}
          >
            {getDate(date)?.dateStr}
          </span>
          <div className={`overflow-hidden relative grow`}>
            <div className={`flex flex-wrap items-center gap-1 absolute`}>
              {tags.map((tag) => (
                <TagBox tag={tag} key={tag} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.li>
  );
};
export default BlogItem;

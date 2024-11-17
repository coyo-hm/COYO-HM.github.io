import Link from "next/link";
import { motion } from "framer-motion";
import { categoryType } from "@constants/category";
import TAG_INFO from "@constants/tag_info";
import { TagWithCountType } from "@models/tag";

interface Props extends TagWithCountType {
  selectedTag: string;
  category: categoryType;
}

const floatedVariants = {
  initial: { y: 0 },
  hover: { y: -1, transition: { ease: "easeInOut" } },
};

const TagCapsule = ({ selectedTag, category, tag, count }: Props) => {
  const tagInfo = TAG_INFO[tag];
  return (
    <Link href={`/${category}/page/0/${tag}`} key={tag}>
      <motion.div
        className={`px-3 py-1 flex justify-between items-center gap-3 rounded-2xl shadow-xl dark:shadow-black/50 ${
          selectedTag === tag ? "bg-blue-700" : "bg-transparent"
        }`}
        variants={floatedVariants}
        initial={"initial"}
        whileHover={"hover"}
      >
        <span
          className={`${
            selectedTag === tag ? "text-white" : tagInfo?.text || "text-inherit"
          } `}
        >
          {tag === "all" ? "전체보기" : tagInfo?.label || tag}
        </span>
        <span className={`text-neutral-400 text-sm`}>{count}</span>
      </motion.div>
    </Link>
  );
};
export default TagCapsule;

import { CiCalendar } from "react-icons/ci";

import getDate from "@utils/getDate";
import { PostAttributeType } from "@models/post";
import CATEGORY from "@constants/category";

type PostHeaderPropsType = Pick<PostAttributeType, "title" | "date">;

const PostHeader = ({ title, date }: PostHeaderPropsType) => {
  const { dateStr } = getDate(date);
  return (
    <header className={`pt-28 pb-4`}>
      <h2
        className={`text-lg w-fit font-normal italic bg-transparent border-b-2 border-black dark:border-white mb-2 mx-auto text-center`}
      >
        {CATEGORY.post.label}
      </h2>
      <h1 className={`post-series-title mx-10`}>{title}</h1>
      <p
        className={`text-sm text-neutral-500 mt-10 font-light flex items-center gap-1`}
      >
        <CiCalendar size={20} />
        {dateStr}
      </p>
    </header>
  );
};

export default PostHeader;

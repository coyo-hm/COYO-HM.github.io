import { CiCalendar } from "react-icons/ci";

import getDate from "@utils/getDate";
import { PostAttributeType } from "@models/post";
import PostTitle from "@components/Title/PostTitle";
import { CATEGORY_INFO } from "@constants/category";

type PostHeaderPropsType = Pick<PostAttributeType, "title" | "date">;

const PostHeader = ({ title, date }: PostHeaderPropsType) => {
  const { dateStr } = getDate(date);
  return (
    <header className={`pt-28 pb-4`}>
      <h1
        className={`text-lg w-fit font-normal italic bg-transparent border-b-2 border-black dark:border-white mb-2 mx-auto text-center`}
      >
        {CATEGORY_INFO.post.label}
      </h1>
      <PostTitle
        className={`break-keep max-md:text-xl leading-snug text-center mx-10 text-5xl font-semibold`}
      >
        {title}
      </PostTitle>
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

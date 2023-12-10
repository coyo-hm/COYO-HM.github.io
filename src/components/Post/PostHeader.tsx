import getDate from "@utils/getDate";
import { PostAttributeType } from "@models/post";
import PostTitle from "@components/Title/PostTitle";

type PostHeaderPropsType = Pick<PostAttributeType, "title" | "date">;

const PostHeader = ({ title, date }: PostHeaderPropsType) => {
  const { dateStr } = getDate(date);
  return (
    <header className={`pt-28 pb-14 text-5xl font-semibold text-center`}>
      <PostTitle className={`break-keep max-md:text-xl leading-snug`}>
        {title}
      </PostTitle>
      <p className={`text-sm text-neutral-500 mt-10`}>{dateStr}</p>
    </header>
  );
};

export default PostHeader;

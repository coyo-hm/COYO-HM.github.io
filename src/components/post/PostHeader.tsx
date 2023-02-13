import { FrontMatterType } from "@src/type";
import getDate from "@utils/getDate";

type PostHeaderPropsType = Pick<FrontMatterType, "title" | "date">;

const PostHeader = ({ title, date }: PostHeaderPropsType) => {
  const { dateStr } = getDate(date);
  return (
    <header className={`pt-28 pb-14 text-5xl font-semibold text-center`}>
      <h1 className={`break-keep max-md:text-xl`}>{title}</h1>
      <p className={`text-sm text-neutral-500 mt-10`}>{dateStr}</p>
    </header>
  );
};

export default PostHeader;

import { FrontMatterType } from "@src/type";
import Link from "next/link";

const PostBox = ({
  title,
  date,
  tags,
  description,
  slug,
}: FrontMatterType & { slug: string }) => {
  const postDate = new Date(date);
  return (
    <Link
      className={`flex flex-col rounded p-4 shadow-xl hover:bg-neutral-100 hover:-translate-y-0.5 hover:duration-300 hover:ease-in-out`}
      href={`/${slug}`}
    >
      <div className={`font-bold`}>{title}</div>
      <div className={`text-xs text-neutral-400 text-right`}>
        {postDate.getFullYear()}.{postDate.getMonth() + 1}.{postDate.getDate()}
      </div>
      <div className={`flex overflow-hidden my-2`}>
        {tags.map((tag) => (
          <div
            key={tag}
            className={`shrink-0 text-xs rounded bg-neutral-400 p-1 mr-2 text-neutral-100`}
          >
            #{tag}
          </div>
        ))}
      </div>
      <div
        className={`text-xs text-neutral-600 w-full max-h-8 break-normal overflow-hidden text-ellipsis`}
      >
        {description}
      </div>
    </Link>
  );
};

export default PostBox;

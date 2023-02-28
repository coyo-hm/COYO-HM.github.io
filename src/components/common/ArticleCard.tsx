import Link from "next/link";
import { FrontMatterType } from "@type/index";
import TagBox from "./TagBox";

const ArticleCard = ({
  title,
  date,
  tags,
  description,
  slug,
}: FrontMatterType & { slug: string }) => {
  const postDate = new Date(date);

  return (
    <Link
      className={`flex flex-col bg-[rgb(255,255,255,0.6)] dark:bg-[rgba(255,250,250,0.1)] p-4 rounded shadow-xl bg-translate overflow-hidden hover:-translate-y-0.5 hover:duration-300 hover:ease-in-out`}
      href={`/${slug}`}
    >
      <div
        className={`text-neutral-800 dark:text-neutral-100 font-semibold pb-2`}
      >
        {title}
      </div>
      <div
        className={`dark:text-neutral-300 text-xs leading-5 mb-2 w-full max-h-10 break-normal overflow-hidden text-ellipsis`}
      >
        <span className={`text-neutral-400`}>
          {postDate.getFullYear()}.{postDate.getMonth() + 1}.
          {postDate.getDate()}
        </span>
        {!!description && (
          <span
            className={`text-neutral-600 dark:text-neutral-300 break-normal text-ellipsis pl-2 ml-2 border-l-2 border-neutral-200`}
          >
            {description}
          </span>
        )}
      </div>

      <div className={`flex items-center`}>
        <div className={`flex overflow-hidden`}>
          {tags.map((tag) => (
            <TagBox tag={tag} key={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;

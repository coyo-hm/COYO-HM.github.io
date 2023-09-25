import Link from "next/link";
import Image from "next/image";
import { FrontMatterType } from "@src/models/index";
import TagBox from "./TagBox";
import imgLoader from "@utils/imgLoader";

const ArticleCard = ({
  title,
  date,
  tags,
  description,
  slug,
  thumbnail,
}: FrontMatterType & { slug: string }) => {
  const postDate = new Date(date);
  return (
    <Link
      className={`grid grid-cols-[1fr_3fr] bg-[rgb(255,255,255,0.6)] dark:bg-[rgba(255,250,250,0.1)] rounded shadow-xl bg-translate overflow-hidden hover:-translate-y-0.5 hover:duration-300 hover:ease-in-out`}
      href={`/${slug}`}
    >
      <div className={`relative`}>
        {!!thumbnail ? (
          <Image
            loader={(props) => imgLoader(props)}
            src={thumbnail}
            alt={title}
            className={`object-cover`}
            fill
          />
        ) : (
          <div
            className={`h-full w-full bg-[rgb(255,255,255,0.8)] dark:bg-[rgb(255,255,255,0.1)]`}
          />
        )}
      </div>
      <section className={`flex flex-col p-4 min-h-[130px]`}>
        <div
          className={`text-neutral-800 dark:text-neutral-100 font-semibold pb-2`}
        >
          {title}
        </div>
        <div
          className={`dark:text-neutral-300 mb-2 w-full max-h-10 break-normal overflow-hidden text-ellipsis flex items-center`}
        >
          <span className={`text-neutral-400 text-xs flex-shrink-0`}>
            {postDate.getFullYear()}.{postDate.getMonth() + 1}.
            {postDate.getDate()}
          </span>
          <div
            className={`flex items-center gap-1 flex-shrink flex-grow border-l-2 border-neutral-200 overflow-hidden pl-2 ml-2`}
          >
            {tags.map((tag) => (
              <TagBox tag={tag} key={tag} />
            ))}
          </div>
        </div>
        {!!description && (
          <div
            className={`text-neutral-600 dark:text-neutral-300 break-normal text-ellipsis text-xs`}
          >
            {description}
          </div>
        )}
      </section>
    </Link>
  );
};

export default ArticleCard;

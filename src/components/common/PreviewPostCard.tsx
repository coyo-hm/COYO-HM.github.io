import Link from "next/link";
import Image from "next/image";
import { FrontMatterType } from "@type/index";
import getDate from "@utils/getDate";
import imgLoader from "@utils/imgLoader";

const PreviewPostCard = ({
  title,
  date,
  tags,
  thumbnail,
  slug,
}: FrontMatterType & { slug: string }) => {
  const { dateStr } = getDate(date);
  return (
    <Link
      className={`overflow-hidden shadow-xl rounded-xl bg-neutral-100 grid grid-rows-[2fr_1fr] dark:bg-neutral-900`}
      href={`/${slug}`}
    >
      <div className={`relative`}>
        {!!thumbnail && (
          <Image
            loader={(props) => imgLoader(props)}
            src={thumbnail}
            alt={title}
            className={`object-cover`}
            fill
          />
        )}
      </div>
      <div className={`w-full p-3`}>
        <h1
          className={`text-lg font-bold text-neutral-900 dark:text-neutral-100`}
        >
          {title}
        </h1>
        <p className={`text-neutral-400`}>{dateStr}</p>
      </div>
    </Link>
  );
};
export default PreviewPostCard;

import Link from "next/link";
import Image from "next/image";
import { FrontMatterType } from "@src/models/index";
import getDate from "@utils/getDate";
import imgLoader from "@utils/imgLoader";

const ThumbnailCard = ({
  title,
  date,
  tags,
  thumbnail,
  slug,
}: FrontMatterType & { slug: string }) => {
  const { dateStr } = getDate(date);
  return (
    <Link
      className={`hover:-translate-y-2 hover:duration-300 hover:ease-in-out overflow-hidden shadow-xl rounded-xl bg-neutral-100 grid grid-rows-[2fr_1fr] dark:bg-neutral-900`}
      href={`/${slug}`}
    >
      <div className={`relative`}>
        {!!thumbnail && (
          <Image
            loader={(props) => imgLoader(props)}
            src={thumbnail}
            alt={title}
            className={`object-cover`}
            priority
            fill
            sizes={"(min-width:640px) 50vw, 100vw"}
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
export default ThumbnailCard;

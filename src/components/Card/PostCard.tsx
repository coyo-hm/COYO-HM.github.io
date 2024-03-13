import Link from "next/link";
import Image from "next/image";

import ShadowRoundedCard from "@components/Card/ShadowRoundedCard";
import TagColorBox from "@components/Tag/TagColorBox";
import { PostAttributeType } from "@models/post";
import imgLoader from "@utils/imgLoader";
import getDate from "@utils/getDate";

interface Props extends PostAttributeType {
  slug: string;
}

const PostCard = ({ thumbnail, title, date, slug, tags }: Props) => {
  const _date = getDate(date);
  return (
    <Link href={`/post/${slug}`}>
      <ShadowRoundedCard
        className={`h-full flex flex-col overflow-hidden hover:-translate-y-0.5 hover:duration-300 hover:ease-in-out`}
      >
        {!!thumbnail && (
          <div className={`relative h-[300px] rounded-t-xl overflow-hidden`}>
            <Image
              loader={(props) => imgLoader(props)}
              src={thumbnail}
              alt={title}
              className={`object-cover h-auto`}
              fill
              loading={"lazy"}
            />
          </div>
        )}
        <div className={`p-5 flex flex-col grow`}>
          <h3
            className={`text-neutral-800 dark:text-neutral-100 font-semibold text-xl pb-2 grow`}
          >
            {title}
          </h3>
          <div className={`flex gap-2`}>
            <div
              className={`text-sm font-light text-neutral-400 flex-shrink-0`}
            >
              {_date?.dateStr}
            </div>
            <div
              className={`w-0.5 h-5 border-none bg-neutral-200 dark:bg-neutral-500`}
            />
            <div className={`grow overflow-hidden relative`}>
              <div className={`flex flex-wrap items-center gap-1 absolute`}>
                {tags.map((tag) => (
                  <TagColorBox tag={tag} key={tag} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ShadowRoundedCard>
    </Link>
  );
};
export default PostCard;

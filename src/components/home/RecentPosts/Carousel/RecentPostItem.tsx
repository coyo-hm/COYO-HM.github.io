import Link from "next/link";
import { PostAttributeType } from "@models/post";
import getDate from "@utils/getDate";
import TagColorBox from "@components/common/TagColorBox";

interface Props extends Omit<PostAttributeType, "key"> {
  onMouseOver: () => void;
  onMouseOut: () => void;
  isActive?: boolean;
  slug: string;
}

const RecentPostItem = ({
  slug,
  title,
  date,
  tags,
  onMouseOver,
  onMouseOut,
  isActive = false,
}: Props) => {
  const { dateStr } = getDate(date);
  return (
    <Link
      href={`/post/${slug}`}
      key={`recent_post_${slug}`}
      aria-label={`link-${slug}`}
      className={`recent-post-item`}
    >
      <li
        className={`flex flex-col gap-1 px-4 py-2 hover:duration-300 hover:ease-in-out hover:-translate-y-1 hover:text-blue-700 ${
          isActive && "text-blue-700"
        }`}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <h1 className={`text-sm w-full overflow-hidden text-ellipsis`}>
          {title}
        </h1>
        <span className={`text-xs text-neutral-400`}>{dateStr}</span>
        <div className={`flex gap-2 flex-wrap`}>
          {tags.map((tag) => (
            <TagColorBox tag={tag} key={tag} />
          ))}
        </div>
      </li>
    </Link>
  );
};

export default RecentPostItem;

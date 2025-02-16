import Link from "next/link";
import getDate from "@utils/getDate";
import { PostType } from "@src/types/post";
import TagBox from "@components/common/TagBox";

interface Props extends Omit<PostType, "_raw"> {
  onMouseOver: () => void;
  onMouseOut: () => void;
  isActive?: boolean;
}

const RecentPostItem = ({
  id,
  title,
  slug,
  date,
  tags,
  onMouseOver,
  onMouseOut,
  isActive = false,
}: Props) => {
  const { dateStr } = getDate(date);
  return (
    <Link
      href={slug}
      key={`recent_post_${id}`}
      aria-label={`link-${id}`}
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
            <TagBox tag={tag} key={tag} />
          ))}
        </div>
      </li>
    </Link>
  );
};

export default RecentPostItem;

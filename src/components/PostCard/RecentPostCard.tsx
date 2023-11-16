import { Dispatch, SetStateAction } from "react";
import TagBox from "@components/Tag/TagBox";
import { FrontMatterType } from "@models/post";
import getDate from "@utils/getDate";

interface Props extends FrontMatterType {
  onMouseOver: () => void;
  onMouseOut: () => void;
  isActive?: boolean;
}

const RecentPostCard = ({
  title,
  date,
  tags,
  onMouseOver,
  onMouseOut,
  isActive = false,
}: Props) => {
  const { dateStr } = getDate(date);
  return (
    <div
      id={title}
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
    </div>
  );
};
export default RecentPostCard;

import { PostType } from "@src/types/post";
import RecentPostItem from "@components/home/RecentPosts/Carousel/RecentPostItem";

interface Props {
  posts: PostType[];
  onMouseOver: (idx: number) => void;
  onMouseOut: () => void;
  activeIndex: number;
}

const RecentPostList = ({
  posts,
  onMouseOut,
  onMouseOver,
  activeIndex,
}: Props) => {
  return (
    <ul
      id={"home-recent-post-list"}
      className={`overflow-hidden flex flex-col gap-1.5 rounded-xl shadow-xl dark:shadow-black/50 bg-white dark:bg-neutral-800`}
    >
      {posts.map(({ slug, ...rest }, idx) => (
        <RecentPostItem
          {...rest}
          key={slug}
          slug={slug}
          isActive={idx === activeIndex}
          onMouseOver={() => onMouseOver(idx)}
          onMouseOut={onMouseOut}
        />
      ))}
    </ul>
  );
};
export default RecentPostList;

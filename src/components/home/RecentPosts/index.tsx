import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import CATEGORY from "@constants/category";
import { SeriesInfoTable } from "@src/types/series";
import { PostType } from "@src/types/post";
import Carousel from "@components/home/RecentPosts/Carousel";

interface Props {
  posts: PostType[];
  seriesInfoTable: SeriesInfoTable;
}

const RecentPosts = ({ posts, seriesInfoTable }: Props) => {
  return (
    <section>
      <Link
        href={CATEGORY.post.link}
        aria-label={"link-blog"}
        className={`page-subtitle flex justify-between mt-5 mb-4 hover:text-blue-700`}
      >
        Recent Posts
        <BsArrowRight />
      </Link>
      <Carousel posts={posts} seriesInfoTable={seriesInfoTable} />
    </section>
  );
};
export default RecentPosts;

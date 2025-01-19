import Link from "next/link";
import CATEGORY from "@constants/category";
import { BsArrowRight } from "react-icons/bs";
import { SeriesInfoTable } from "@models/series";
import Carousel from "@components/home/RecentPosts/Carousel";
import { Post } from "contentlayer/generated";

interface Props {
  posts: Post[];
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

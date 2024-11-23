import Link from "next/link";
import CATEGORY from "@constants/category";
import { BsArrowRight } from "react-icons/bs";
import { PostType } from "@models/post";
import { SeriesAttributeTableType } from "@models/series";
import Carousel from "@components/home/RecentPosts/Carousel";

interface Props {
  posts: PostType[];
  allSeriesInfo: SeriesAttributeTableType;
}

const RecentPosts = ({ posts, allSeriesInfo }: Props) => {
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
      <Carousel posts={posts} allSeriesInfo={allSeriesInfo} />
    </section>
  );
};
export default RecentPosts;

import CATEGORY from "@constants/category";
import Link from "next/link";
import Introduction from "@components/series/SeriesPost/Introduction";
import SeriesPostList from "@components/series/SeriesPost/SeriesPostList";
import { PostInfoType } from "@models/post";
import { Series } from "contentlayer/generated";

interface Props extends Series {
  posts: PostInfoType[];
}

const SeriesPost = ({ title, posts, ...rest }: Props) => {
  return (
    <main>
      <header className={`flex flex-col pt-28 pb-16`}>
        <Link href={CATEGORY.series.link} className={"category-title"}>
          {CATEGORY.series.label}
        </Link>
        <h1 className={`post-series-title`}>{title}</h1>
      </header>
      <Introduction
        {...rest}
        title={title}
        startDate={posts[0].date}
        endDate={posts[posts.length - 1].date}
      />
      <SeriesPostList posts={posts} />
    </main>
  );
};

export default SeriesPost;

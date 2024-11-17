import CATEGORY from "@constants/category";
import Link from "next/link";
import Introduction from "@components/series/Intro/Introduction";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import SeriesPostList from "@components/series/Intro/SeriesPostList";
import { PostAttributeType } from "@models/post";

interface Props {
  title: string;
  startDate: string;
  endDate: string;
  thumbnail: string;
  mdx: MDXRemoteSerializeResult;
  posts: PostAttributeType[];
}

const Intro = ({ title, posts, ...rest }: Props) => {
  return (
    <main className={`mx-auto lg:w-[800px]`}>
      <header className={`flex flex-col pt-28 pb-16`}>
        <Link href={CATEGORY.series.link} className={"category-title"}>
          {CATEGORY.series.label}
        </Link>
        <h1 className={`post-series-title`}>{title}</h1>
      </header>
      <Introduction {...rest} title={title} />
      <SeriesPostList posts={posts} />
    </main>
  );
};

export default Intro;

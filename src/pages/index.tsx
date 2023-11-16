import { GetStaticProps } from "next";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import PageSeo from "@components/SEO/PageSEO";
import TagList from "@components/Tag/TagList";
import PageTitle from "@components/Title/PageTitle";
import PageSubtitle from "@components/Title/PageSubtitle";
import metadata from "config";
import { CATEGORY_INFO, CATEGORY_KEYS } from "@constants/category";
import useHorizontalScroll from "@hooks/useHorizontalScroll";
import { PostType } from "@models/post";
import { TagWithCountType } from "@models/tag";
import { getPosts } from "@utils/getPosts";
import getAllTags from "@utils/getAllTags";
import Carousel from "@components/Carousel/Carousel";
import getAllSeriesInfo from "@utils/getAllSeriesInfo";
import { SeriesInfoTable } from "@models/series";

export default function Home({
  recentPosts,
  tags,
  allSeriesInfo,
}: {
  recentPosts: PostType[];
  tags: TagWithCountType[];
  allSeriesInfo: SeriesInfoTable;
}) {
  const postListRef = useHorizontalScroll();

  return (
    <>
      <PageSeo
        title="Home"
        description={metadata.description}
        url={metadata.siteUrl}
      />
      <PageTitle title={metadata.title} />
      <nav className={`flex gap-3 justify-center my-10`}>
        {CATEGORY_KEYS.map((key) => (
          <Link
            href={CATEGORY_INFO[key].link}
            key={CATEGORY_INFO[key].id}
            className={`hover:text-blue-700`}
          >
            {CATEGORY_INFO[key].label}
          </Link>
        ))}
      </nav>
      <TagList tagList={tags} />
      <Link href={"/post/page/0/all"} aria-label={"link-blog"}>
        <PageSubtitle className={`flex justify-between hover:text-blue-700`}>
          <span>Recent Post</span>
          <BsArrowRight />
        </PageSubtitle>
      </Link>
      <Carousel posts={recentPosts} allSeriesInfo={allSeriesInfo} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const recentPosts = await getPosts(0, 5);
  const allTags = await getAllTags();
  const allSeriesInfo = await getAllSeriesInfo();
  return {
    props: {
      recentPosts,
      tags: allTags,
      allSeriesInfo: allSeriesInfo,
    },
  };
};

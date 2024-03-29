import { GetStaticProps } from "next";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import metadata from "config";
import Carousel from "@components/Main/Carousel/Carousel";
import SpinningTags from "@components/Main/SpinningTags";
import PageSeo from "@components/SEO/PageSEO";
import { CATEGORY_INFO, CATEGORY_KEYS } from "@constants/category";
import { PostType } from "@models/post";
import { SeriesAttributeTableType } from "@models/series";
import { TagWithCountType } from "@models/tag";
import { getPosts } from "@utils/getPosts";
import getAllTags from "@utils/getAllTags";
import getAllSeriesInfo from "@utils/getAllSeriesInfo";
import getBlurImg from "@utils/getBlurImg";
import PageTitle from "@components/Title/PageTitle";
import PageSubTitle from "@components/Title/PageSubTitle";
import SeriesCards from "@components/Main/SeriesCards";

export default function Home({
  recentPosts,
  tags,
  allSeriesInfo,
}: {
  recentPosts: PostType[];
  tags: TagWithCountType[];
  allSeriesInfo: SeriesAttributeTableType;
}) {
  return (
    <>
      <PageSeo
        title="Home"
        description={metadata.description}
        url={metadata.siteUrl}
      />
      <div className={`flex flex-col pb-10 bg-transparent`}>
        <PageTitle className={`mt-20`}>{metadata.title}</PageTitle>
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
        <SpinningTags tagList={tags} />
        <Link href={CATEGORY_INFO.post.link} aria-label={"link-blog"}>
          <PageSubTitle
            className={`flex justify-between mt-5 mb-4 hover:text-blue-700`}
          >
            Recent Post
            <BsArrowRight />
          </PageSubTitle>
        </Link>
        <Carousel posts={recentPosts} allSeriesInfo={allSeriesInfo} />
        <Link href={CATEGORY_INFO.series.link} aria-label={"link-blog"}>
          <PageSubTitle
            className={`flex justify-between hover:text-blue-700 mt-10 mb-4`}
          >
            Series
          </PageSubTitle>
        </Link>
        <SeriesCards allSeriesInfo={allSeriesInfo} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const recentPosts = await getPosts(0, 5);
  const allTags = await getAllTags();
  const allSeriesInfo = await getAllSeriesInfo();

  const posts = await Promise.all(
    recentPosts.map(async (post: PostType) => {
      const blurThumbnail = await getBlurImg(post.frontMatter.thumbnail);
      return { ...post, frontMatter: { ...post.frontMatter, blurThumbnail } };
    })
  );

  for (const allSeriesInfoKey in allSeriesInfo) {
    const series = allSeriesInfo[allSeriesInfoKey];
    const blurThumbnail = await getBlurImg(series.thumbnail);
    if (blurThumbnail) {
      allSeriesInfo[allSeriesInfoKey].blurThumbnail = blurThumbnail;
    }
  }

  return {
    props: {
      recentPosts: posts,
      tags: allTags,
      allSeriesInfo: allSeriesInfo,
    },
  };
};

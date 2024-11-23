import { GetStaticProps } from "next";
import Link from "next/link";

import metadata from "config";
import SpinningTags from "@components/home/SpinningTags";
import PageSeo from "@components/common/PageSEO";
import CATEGORY, { CATEGORY_KEYS } from "@constants/category";
import { PostType } from "@models/post";
import { SeriesAttributeTableType } from "@models/series";
import { TagWithCountType } from "@models/tag";
import { getPosts } from "@utils/getPosts";
import getAllTags from "@utils/getAllTags";
import getAllSeriesInfo from "@utils/getAllSeriesInfo";
import getBlurImg from "@utils/getBlurImg";

import RecentPosts from "@components/home/RecentPosts";
import Series from "@components/home/Series";

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
      <main className={`pb-10 bg-transparent`}>
        <h1 className={`mt-20 page-title`}>{metadata.title}</h1>
        <nav className={`flex gap-3 justify-center my-10`}>
          {CATEGORY_KEYS.map((key) => (
            <Link
              href={CATEGORY[key].link}
              key={CATEGORY[key].id}
              className={`hover:text-blue-700`}
            >
              {CATEGORY[key].label}
            </Link>
          ))}
        </nav>
        <SpinningTags tagList={tags} />
        <RecentPosts posts={recentPosts} allSeriesInfo={allSeriesInfo} />
        <Series allSeriesInfo={allSeriesInfo} />
      </main>
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

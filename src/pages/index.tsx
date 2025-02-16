import { GetStaticProps } from "next";
import Link from "next/link";
import metadata from "config";
import CATEGORY, { CATEGORY_KEYS } from "@constants/category";
import {
  allBlogPosts,
  allSeriesInfo,
  allTagsWithCount,
  seriesInfoTable,
} from "@constants/contents";
import getBlurImg from "@utils/getBlurImg";
import { SeriesInfoType } from "@src/types/series";
import { TagWithCountType } from "@src/types/tag";
import { PostType } from "@src/types/post";
import PageSeo from "@components/common/PageSEO";
import SpinningTags from "@components/home/SpinningTags";
import RecentPosts from "@components/home/RecentPosts";
import Series from "@components/home/Series";

export default function Home({
  recentPosts,
  tags,
  allSeriesInfo,
}: {
  recentPosts: PostType[];
  tags: TagWithCountType[];
  allSeriesInfo: SeriesInfoType[];
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
        <RecentPosts posts={recentPosts} seriesInfoTable={seriesInfoTable} />
        <Series allSeriesInfo={allSeriesInfo} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await Promise.all(
    allBlogPosts.slice(0, 5).map(async (post: PostType) => {
      const blurThumbnail = await getBlurImg(post.thumbnail);
      return { ...post, blurThumbnail };
    })
  );
  const seriesInfo = await Promise.all(
    allSeriesInfo.map(async (s: SeriesInfoType) => {
      const blurThumbnail = await getBlurImg(s.thumbnail);
      return { ...s, blurThumbnail };
    })
  );

  return {
    props: {
      recentPosts: posts,
      tags: allTagsWithCount,
      allSeriesInfo: seriesInfo,
    },
  };
};

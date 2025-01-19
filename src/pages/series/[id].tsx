import { GetStaticPaths, GetStaticProps } from "next";
import metadata from "@config/index";
import PageSeo from "@components/common/PageSEO";
import SeriesPost from "@components/series/SeriesPost";
import { allSeries, Series } from "contentlayer/generated";
import { getSortedPostsInSeries, seriesInfoTable } from "@utils/series";
import getBlurImg from "@utils/getBlurImg";
import sortPostByDate from "@utils/sortPostByDate";
import { PostInfoType } from "@models/post";

const SeriesPostPage = ({
  series,
  posts,
}: {
  series: Series;
  posts: PostInfoType[];
}) => {
  const { id, title, description } = series;
  return (
    <>
      <PageSeo
        title={`${title}`}
        description={description}
        url={`${metadata.siteUrl}/series/${id}`}
      />
      <SeriesPost {...series} posts={posts} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(seriesInfoTable).map((key) => ({
      params: { id: key },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const series = allSeries.find((s) => s.id === id);

  if (!series) {
    return {
      notFound: true,
    };
  }

  const blurThumbnail = await getBlurImg(series.thumbnail);
  const posts = await getSortedPostsInSeries(id);
  const postsWithBlur = await Promise.all(
    posts.map(async (post) => {
      const blurThumbnail = await getBlurImg(post.thumbnail);
      return {
        ...post,
        blurThumbnail,
      };
    })
  );

  return {
    props: {
      series: {
        ...series,
        blurThumbnail,
      },
      posts: sortPostByDate<PostInfoType>(postsWithBlur, true),
    },
  };
};
export default SeriesPostPage;

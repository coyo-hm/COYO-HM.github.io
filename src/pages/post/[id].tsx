import { GetStaticPaths, GetStaticProps } from "next";
import metadata from "@config/index";
import {
  allBlogPostIds,
  allBlogPosts,
  getSeriesInfoWithRecentPosts,
} from "@constants/contents";
import PostSEO from "@components/common/PostSEO";
import BlogPost, { BlogPostProps } from "@components/blog/BlogPost";

const PostPage = (props: BlogPostProps) => {
  const { title, tags, date, description, thumbnail, slug } = props;

  return (
    <>
      <PostSEO
        title={`${title}`}
        description={description}
        date={date}
        url={metadata.siteUrl + slug}
        tags={tags}
        images={thumbnail ? [thumbnail] : []}
      />
      <BlogPost {...props} />
    </>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogPostIds.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

type ParamsType = { id: string };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as ParamsType;
  const post = allBlogPosts.find((p) => p.id === id);

  if (post) {
    const { series, ...rest } = post;
    const seriesInfos = getSeriesInfoWithRecentPosts(id, series);

    return {
      props: { ...rest, series: seriesInfos },
    };
  }

  return {
    notFound: true,
  };
};

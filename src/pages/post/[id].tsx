import { GetStaticPaths, GetStaticProps } from "next";
import metadata from "@config/index";
import { getSeriesInfoWithRecentPosts } from "@utils/series";
import { allBlogPostIds, allBlogPosts } from "@utils/posts";
import PostSEO from "@components/common/PostSEO";
import BlogPost, { BlogPostProps } from "@components/blog/BlogPost";

const PostPage = (post: BlogPostProps) => {
  const { title, tags, date, description, thumbnail, slug } = post;
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
      <BlogPost {...post} />
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const post = allBlogPosts.find((p) => p.id === id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const series = await getSeriesInfoWithRecentPosts(id, post.series);

  return {
    props: { ...post, series },
  };
};

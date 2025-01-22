import { GetStaticPaths, GetStaticProps } from "next";
import metadata from "@config/index";
import { seriesInfoTable } from "@utils/series";
import { allBlogPostIds, allBlogPosts } from "@utils/posts";
import PostSEO from "@components/common/PostSEO";
import BlogPost from "@components/blog/BlogPost";
import sortPostByDate from "@utils/sortPostByDate";
import { PostInfoType, PostType } from "@models/post";
import PostsTable from "@constants/PostsTable";

const NUMBER_OF_POST = 5;

const PostPage = (post: PostType) => {
  const { id, title, tags, date, description, thumbnail, slug } = post;
  const series = (post.series || []).map((seriesId) => {
    const selectedSeries = seriesInfoTable[seriesId];
    const posts = sortPostByDate<PostInfoType>(
      selectedSeries.postIds.map((id: string) => PostsTable[id]),
      true
    );
    const postIdx = posts.findIndex((post) => post.id === id);
    let startIdx = Math.max(0, postIdx - 3);
    const endIdx = Math.min(posts.length, startIdx + NUMBER_OF_POST);
    startIdx = Math.max(endIdx - NUMBER_OF_POST, 0);

    const selectedPosts = posts.slice(startIdx, endIdx).map((post, idx) => ({
      id: post.id,
      slug: `/post/${post.id}`,
      title: post.title,
      no: startIdx + idx + 1,
    }));

    return {
      ...selectedSeries,
      posts: selectedPosts,
    };
  });

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
      <BlogPost {...post} series={series} />
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

  if (!post) {
    return {
      notFound: true,
    };
  }

  // const series = await getSeriesInfoWithRecentPosts(id, post.series);

  return {
    props: post,
  };
};

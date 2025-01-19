import { GetStaticPaths, GetStaticProps } from "next";
import PageSeo from "@components/common/PageSEO";
import BlogList from "@components/blog/BlogList";
import metadata from "@config/index";
import CATEGORY from "@constants/category";
import { DEFAULT_NUMBER_OF_POST } from "@constants/post";
import { Post } from "contentlayer/generated";
import { getPostList } from "@utils/posts";
import { allTagsWithCount } from "@utils/tags";

import getLastPage from "@utils/getLastPage";
import getBlurImg from "@utils/getBlurImg";

const Blog = (props: { posts: Post[]; selectedTag: string; page: number }) => {
  return (
    <>
      <PageSeo
        title={CATEGORY.post.label}
        description={metadata.description}
        url={metadata.siteUrl + `blog`}
      />
      <BlogList {...props} allTags={allTagsWithCount} />
    </>
  );
};

export default Blog;

export const getStaticPaths: GetStaticPaths = async () => {
  const size = DEFAULT_NUMBER_OF_POST["list"];
  const paths = allTagsWithCount.reduce(
    (arr: { params: { page: string; tag: string } }[], { tag, count }) => [
      ...arr,
      ...new Array(getLastPage(count, size)).fill(0).map((_, p) => ({
        params: { page: "" + p, tag },
      })),
    ],
    []
  );
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page, tag } = params as { page: string; tag: string };
  const postsInfo = await getPostList(tag, +page);

  const posts = await Promise.all(
    postsInfo.map(async (post: Post) => {
      const blurThumbnail = await getBlurImg(post.thumbnail);
      return { ...post, blurThumbnail };
    })
  );

  return {
    props: {
      posts,
      selectedTag: tag,
      page: +page,
    },
  };
};

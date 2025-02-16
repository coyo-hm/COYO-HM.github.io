import { GetStaticPaths, GetStaticProps } from "next";
import metadata from "@config/index";
import CATEGORY from "@constants/category";
import CONSTANTS from "@constants/index";
import { allTagsWithCount, getPostList } from "@constants/contents";
import { PostType } from "@src/types/post";
import getLastPage from "@utils/getLastPage";
import getBlurImg from "@utils/getBlurImg";
import PageSeo from "@components/common/PageSEO";
import BlogList from "@components/blog/BlogList";

const Blog = (props: {
  posts: PostType[];
  selectedTag: string;
  page: number;
}) => {
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
  const size = CONSTANTS.DEFAULT_NUMBER_OF_POST.SERIES;
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

type ParamsType = { page: string; tag: string };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page, tag } = params as ParamsType;
  const postsInfo = getPostList(tag, +page);

  const posts = await Promise.all(
    postsInfo.map(async (post: PostType) => {
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

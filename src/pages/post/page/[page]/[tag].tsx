import { GetStaticPaths, GetStaticProps } from "next";
import PageSeo from "@components/common/PageSEO";
import BlogList from "@components/blog/BlogList";
import metadata from "@config/index";
import CATEGORY from "@constants/category";
import { DEFAULT_NUMBER_OF_POST } from "@constants/post";
import { PostType } from "@models/post";
import { TagWithCountType } from "@models/tag";
import { getPosts } from "@utils/getPosts";
import getLastPage from "@utils/getLastPage";
import getAllTags from "@utils/getAllTags";
import getBlurImg from "@utils/getBlurImg";

const Blog = (props: {
  posts: PostType[];
  allTags: TagWithCountType[];
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
      <BlogList {...props} />
    </>
  );
};

export default Blog;

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = await getAllTags();
  const size = DEFAULT_NUMBER_OF_POST["list"];
  const paths = allTags.reduce(
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
  const allTags = await getAllTags();
  const postsInfo = await getPosts(+page, DEFAULT_NUMBER_OF_POST.list, tag);

  const posts = await Promise.all(
    postsInfo.map(async (post: PostType) => {
      const blurThumbnail = await getBlurImg(post.frontMatter.thumbnail);
      return { ...post, frontMatter: { ...post.frontMatter, blurThumbnail } };
    })
  );

  return {
    props: {
      posts,
      allTags,
      selectedTag: tag,
      page: +page,
    },
  };
};

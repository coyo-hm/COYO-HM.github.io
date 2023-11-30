import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostType } from "@models/post";
import parseMarkdownToMdx from "@utils/parseMarkdown";
import PostLayout from "@components/layout/PostLayout";
import { TagWithCountType } from "@models/tag";
import getAllTags from "@utils/getAllTags";
import { getAllPosts } from "@utils/getPosts";
import getSeriesInfo from "@utils/getSeriesInfo";
import getAllSeriesInfo from "@utils/getAllSeriesInfo";

const SeriesPost = ({
  post,
  mdx,
  tags,
}: {
  post: PostType;
  mdx: MDXRemoteSerializeResult;
  tags: TagWithCountType[];
}) => {
  return <PostLayout post={post} mdx={mdx} />;
};

export default SeriesPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const allSeriesInfo = await getAllSeriesInfo();
  const paths = Object.keys(allSeriesInfo).reduce(
    (arr: any[], key) => [
      ...arr,
      ...allSeriesInfo[key].posts.map((postKey) => ({
        params: {
          slugs: allSeriesInfo[key].posts.map((postKey) => postKey.split("/")),
        },
      })),
    ],
    []
  );

  return {
    paths,
    fallback: "blocking",
  };
};

interface SlugsType {
  [key: string]: string[];
  slugs: string[];
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as SlugsType;

  const allPosts = await getAllPosts();
  const allTags = await getAllTags();
  const post = allPosts.find(
    (p) => p?.fields?.slug === ["series", ...slugs].join("/")
  );
  console.log(slugs);

  if (post) {
    const source = await parseMarkdownToMdx(post.body);
    return {
      props: {
        post,
        mdx: source,
        tags: allTags,
      },
    };
  }
  return {
    notFound: true,
  };
};

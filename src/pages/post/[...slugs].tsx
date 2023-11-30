import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostType } from "@models/post";
import parseMarkdownToMdx from "@utils/parseMarkdown";
import PostLayout from "@components/layout/PostLayout";
import { TagWithCountType } from "@models/tag";
import getAllTags from "@utils/getAllTags";
import { getAllPosts } from "@utils/getPosts";

const BlogPost = ({
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

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = allPosts.map(({ fields: { slug } }) => ({
    params: {
      slugs: slug.split("/"),
    },
  }));

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
    (p) => p?.fields?.slug === ["post", ...slugs].join("/")
  );

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

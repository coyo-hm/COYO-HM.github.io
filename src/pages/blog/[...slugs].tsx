import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

import { PostType } from "@src/type/index";
import { getAllPosts } from "@utils/api";
import parseMarkdownToMdx from "@utils/parseMarkdown";
import PostLayout from "@components/layout/PostLayout";

const BlogPost = ({
  post,
  mdx,
}: {
  post: PostType;
  mdx: MDXRemoteSerializeResult;
}) => {
  // console.log(post, mdx);
  return (
    <>
      <PostLayout post={post} mdx={mdx} />
    </>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = allPosts.map(({ fields: { slug } }) => {
    return { params: { slugs: slug.replace("blog/", "").split("/") } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

interface SlugInterface {
  [key: string]: string[];
  slugs: string[];
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as SlugInterface;
  const allPosts = await getAllPosts();
  const post = allPosts.find(
    (p) => p?.fields?.slug === ["blog", ...slugs].join("/")
  );

  if (post) {
    const source = await parseMarkdownToMdx(post.body);

    return {
      props: {
        post,
        mdx: source,
      },
    };
  }
  return {
    notFound: true,
  };
};

import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { useEffect } from "react";

import { PostType, TagWithCountType } from "@src/type/index";
import { getAllPosts, getAllTagsFromPosts } from "@utils/api";
import parseMarkdownToMdx from "@utils/parseMarkdown";
import PostLayout from "@components/layout/PostLayout";
import useSidebar from "@hooks/useSidebar";

const BlogPost = ({
  post,
  mdx,
  tags,
}: {
  post: PostType;
  mdx: MDXRemoteSerializeResult;
  tags: TagWithCountType[];
}) => {
  const { setTags } = useSidebar();

  useEffect(() => {
    setTags(tags);
  }, [setTags, tags]);

  return <PostLayout post={post} mdx={mdx} />;
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

interface SlugsType {
  [key: string]: string[];
  slugs: string[];
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as SlugsType;
  const allPosts = await getAllPosts();
  const allTags = await getAllTagsFromPosts();
  const post = allPosts.find(
    (p) => p?.fields?.slug === ["blog", ...slugs].join("/")
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

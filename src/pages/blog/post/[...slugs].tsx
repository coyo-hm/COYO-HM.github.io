import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostType, TagWithCountType } from "@src/models";
import { getAllPosts, getAllTagsFromBlog } from "@utils/api";
import parseMarkdownToMdx from "@utils/parseMarkdown";
import PostLayout from "@components/layout/PostLayout";

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
  const allPosts = await getAllPosts("blog");
  const paths = allPosts.map(({ fields: { slug } }) => {
    return {
      params: {
        slugs: slug.replace("blog/", "").replace("post/", "").split("/"),
      },
    };
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
  const allPosts = await getAllPosts("blog");
  const allTags = await getAllTagsFromBlog();
  const post = allPosts.find(
    (p) => p?.fields?.slug === ["blog", "post", ...slugs].join("/")
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

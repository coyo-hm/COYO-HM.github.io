import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostType, TagWithCountType } from "@src/models/index";
import { getAllPosts, getAllTagsFromBlog } from "@utils/api";
import parseMarkdownToMdx from "@utils/parseMarkdown";
import PostLayout from "@components/layout/PostLayout";

const ProjectPost = ({
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

export default ProjectPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = allPosts.map(({ fields: { slug } }) => {
    return { params: { slugs: slug.replace("project/", "").split("/") } };
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
  const allPosts = await getAllPosts("project");
  const allTags = await getAllTagsFromBlog();
  const post = allPosts.find(
    (p) => p?.fields?.slug === ["project", ...slugs].join("/")
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

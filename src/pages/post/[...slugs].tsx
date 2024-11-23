import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

import PostsTable from "public/static/table/postsTable.json";

import PostSEO from "@components/common/PostSEO";
import BlogPost from "@components/blog/BlogPost";
import metadata from "@config/index";
import { SeriesAttributeWithPostType } from "@models/series";
import { PostAttributeType, PostTableNode, PostType } from "@models/post";
import getPostSeriesInfo from "@utils/getPostSeriesInfo";
import parseMarkdownToMdx from "@utils/parseMarkdown";
import { getAllPosts } from "@utils/getPosts";

const Post = ({
  post: {
    fields: { slug },
    frontMatter,
    body,
  },
  ...rest
}: {
  post: PostType;
  allSeriesInfo: SeriesAttributeWithPostType[];
  mdx: MDXRemoteSerializeResult;
}) => {
  const { title, tags, date, description, thumbnail } = frontMatter;

  return (
    <>
      <PostSEO
        title={`${title}`}
        description={description}
        date={date}
        url={metadata.siteUrl + "Post/" + slug}
        tags={tags}
        images={thumbnail ? [thumbnail] : []}
      />
      <BlogPost {...frontMatter} body={body} slug={slug} {...rest} />
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const postsAttributesObj: {
    [key: string]: PostTableNode;
  } = PostsTable;

  const allPosts = Object.keys(PostsTable).reduce(
    (arr: PostAttributeType[], key) =>
      postsAttributesObj[key].published ||
      process.env.NODE_ENV === "development"
        ? [...arr, { ...postsAttributesObj[key], key }]
        : arr,
    []
  );

  const paths = allPosts.map(({ key }) => ({
    params: {
      slugs: key.split("/"),
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

  if (!allPosts) {
    return {
      notFound: true,
    };
  }

  const post = allPosts.find((p) => p?.fields?.slug === slugs.join("/"));

  if (post) {
    const source = await parseMarkdownToMdx(post.body);
    const seriesInfo = await getPostSeriesInfo(
      slugs.join("/"),
      post.frontMatter.series || []
    );
    return {
      props: {
        post,
        allSeriesInfo: seriesInfo,
        mdx: source,
      },
    };
  }
  return {
    notFound: true,
  };
};

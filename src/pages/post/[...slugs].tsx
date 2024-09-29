import PostsTable from "public/static/table/postsTable.json";

import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostAttributeType, PostTableNode, PostType } from "@models/post";
import parseMarkdownToMdx from "@utils/parseMarkdown";
import { getAllPosts } from "@utils/getPosts";
import PostSEO from "@components/common/PostSEO";
import metadata from "@config/index";
import PostHeader from "@components/Post/PostHeader";
import CustomMDX from "@components/Post/CustomMDX";
import TagsList from "@components/Post/TagsList";
import TableOfContents from "@components/Post/TableOfContents";
import getPostSeriesInfo from "@utils/getPostSeriesInfo";
import { SeriesAttributeWithPostType } from "@models/series";
import SeriesPostsList from "@components/Post/SeriesPostsList";
import Giscus from "@components/Post/Giscus";

const Post = ({
  post: {
    fields: { slug },
    frontMatter,
    body,
    path,
  },
  allSeriesInfo,
  mdx,
}: {
  post: PostType;
  allSeriesInfo: SeriesAttributeWithPostType[];
  mdx: MDXRemoteSerializeResult;
}) => {
  const { key, series, title, tags, date, description, thumbnail } =
    frontMatter;

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
      <article className={`flex flex-col`} id={"post"}>
        <PostHeader {...frontMatter} />
        <div
          className={`relative border-y border-y-blue-700 flex flex-row flex-nowrap max-md:flex-col-reverse`}
        >
          <div className={`grow shrink pr-10 pt-2 min-w-0 max-md:p-0 `}>
            <CustomMDX {...mdx} />
            <TagsList tags={tags} slug={slug} />
          </div>
          <TableOfContents content={body} />
        </div>
        <div className={`flex flex-col gap-3 my-5`}>
          {allSeriesInfo.map((series) => (
            <SeriesPostsList
              key={series.key}
              selectedPostKey={slug}
              seriesInfo={series}
            />
          ))}
        </div>
        <Giscus />
      </article>
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

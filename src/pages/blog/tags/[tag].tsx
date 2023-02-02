import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PostType, TagWithCount } from "@src/type";
import { getAllPosts, getAllTagsFromPosts } from "@utils/api";
import useSidebar from "@hooks/useSidebar";
import PostListLayout from "@components/layout/PostListLayout";
import { PageSeo } from "@components/common/SEO";
import metadata from "../../../../config";

const BlogTagPage = ({
  posts,
  tags,
  tag,
}: {
  posts: PostType[];
  tags: TagWithCount[];
  tag: string;
}) => {
  const {
    route,
    query: { page },
  } = useRouter();
  const currPage = page ? parseInt(page as string) : 0;
  const { setTags } = useSidebar();

  useEffect(() => {
    setTags(tags);
  }, [tags]);

  console.log("TagPage", tag, currPage);

  return (
    <>
      <PageSeo
        title={`Blog/${tag}`}
        description={metadata.description}
        url={metadata.siteUrl + `blog/tags/${tag}`}
      />
      <PostListLayout
        title={`BLOG > ${tag}`}
        posts={posts}
        currPage={currPage}
        path={route}
      />
    </>
  );
};

export default BlogTagPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = await getAllTagsFromPosts();
  const paths = allTags.map(({ tag }) => {
    return { params: { tag: tag } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

interface ITags {
  [key: string]: string;
  tag: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { tag } = params as ITags;
  const allPosts = await getAllPosts();
  const allTags = await getAllTagsFromPosts();
  const posts = allPosts.filter(({ frontMatter: { tags } }) =>
    tags.includes(tag)
  );

  return {
    props: {
      posts: posts,
      tags: allTags,
      tag: tag,
    },
  };
};

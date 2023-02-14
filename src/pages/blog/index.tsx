import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PostType, TagWithCountType } from "@type/index";
import { getAllPosts, getAllTagsFromPosts } from "@utils/api";
import useSidebar from "@hooks/useSidebar";
import PostListLayout from "@components/layout/PostListLayout";
import { PageSeo } from "@components/common/SEO";
import metadata from "../../../config";

const Blog = ({
  posts,
  tags,
}: {
  posts: PostType[];
  tags: TagWithCountType[];
}) => {
  const {
    route,
    query: { page },
  } = useRouter();
  const currPage = page ? parseInt(page as string) : 0;
  const { setTags } = useSidebar();

  useEffect(() => {
    setTags(tags);
  }, [setTags, tags]);

  return (
    <>
      <PageSeo
        title={"Blog"}
        description={metadata.description}
        url={metadata.siteUrl + `blog`}
      />
      <PostListLayout posts={posts} currPage={currPage} path={route} />
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  const allTags = await getAllTagsFromPosts();

  return {
    props: {
      posts: posts.filter(({ fields: { slug } }) => slug.startsWith("blog")),
      tags: allTags,
    },
  };
};

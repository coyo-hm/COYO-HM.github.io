import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PostType, TagWithCount } from "@type/index";
import { getAllPosts, getAllTagsFromPosts } from "@utils/api";
import useSidebar from "@hooks/useSidebar";
import PostListLayout from "@components/layout/PostListLayout";
import { PageSeo } from "@components/common/SEO";
import metadata from "../../../config";

const Blog = ({ posts, tags }: { posts: PostType[]; tags: TagWithCount[] }) => {
  const {
    route,
    query: { page },
  } = useRouter();
  const currPage = page ? parseInt(page as string) : 0;
  const { setTags } = useSidebar();

  useEffect(() => {
    setTags(tags);
  }, [tags]);

  return (
    <>
      <PageSeo
        title={metadata.title + ": Blog"}
        description={metadata.description}
        url={metadata.siteUrl + `blog`}
      />
      <PostListLayout
        title={"BLOG"}
        posts={posts}
        currPage={currPage}
        path={route}
      />
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  const allTags = await getAllTagsFromPosts();

  return {
    props: {
      posts: posts,
      tags: allTags,
    },
  };
};

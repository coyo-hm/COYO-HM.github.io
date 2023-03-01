import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { PostType, TagWithCountType } from "@type/index";
import { getAllPosts, getAllTagsFromBlog } from "@utils/api";
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
  useSidebar(tags);

  return (
    <>
      <PageSeo
        title={"Blog"}
        description={metadata.description}
        url={metadata.siteUrl + `blog`}
      />
      <PostListLayout
        categoryId={"blog"}
        posts={posts}
        currPage={currPage}
        path={route}
      />
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts("blog");
  const allTags = await getAllTagsFromBlog();

  return {
    props: {
      posts: posts,
      tags: allTags,
    },
  };
};

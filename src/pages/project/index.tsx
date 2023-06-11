import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { PostType, TagWithCountType } from "src/models";
import { getAllPosts, getAllTagsFromBlog } from "@utils/api";
import { PageSeo } from "@components/common/SEO";
import metadata from "@config/index";
import PostListLayout from "@components/layout/PostListLayout";

export default function ProjectListPage({
  posts,
}: {
  posts: PostType[];
  tags: TagWithCountType[];
}) {
  const {
    route,
    query: { page },
  } = useRouter();

  return (
    <>
      <PageSeo
        title={"Project"}
        description={metadata.description}
        url={metadata.siteUrl + "project"}
      />
      <PostListLayout
        posts={posts}
        currPage={page ? parseInt(page as string) : 0}
        path={route}
        showType={"card"}
      >
        <h1 className={`font-bold text-3xl flex-grow px-1`}>PROJECT</h1>
      </PostListLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts("project");
  const allTags = await getAllTagsFromBlog();

  return {
    props: {
      posts: posts,
      tags: allTags,
    },
  };
};

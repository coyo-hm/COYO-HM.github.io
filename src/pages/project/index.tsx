import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { PostType, TagWithCountType } from "@src/type";
import { getAllPosts, getAllTagsFromBlog } from "@utils/api";
import { PageSeo } from "@components/common/SEO";
import CardListLayout from "@components/layout/CardListLayout";
import metadata from "@config/index";

export default function ProjectListPage({
  posts,
  tags,
}: {
  posts: PostType[];
  tags: TagWithCountType[];
}) {
  const {
    route,
    query: { page },
  } = useRouter();
  const currPage = page ? parseInt(page as string) : 0;

  return (
    <>
      <PageSeo
        title={"Project"}
        description={metadata.description}
        url={metadata.siteUrl + "project"}
      />
      <CardListLayout
        categoryId={"project"}
        posts={posts}
        currPage={currPage}
        path={route}
      />
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

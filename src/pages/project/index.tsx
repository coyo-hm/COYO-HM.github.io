import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PostType, TagWithCountType } from "@src/type";
import { getAllPosts, getAllTagsFromPosts } from "@utils/api";
import useSidebar from "@hooks/useSidebar";
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
  const { setTags } = useSidebar();

  useEffect(() => {
    setTags(tags);
  }, [setTags, tags]);

  return (
    <>
      <PageSeo
        title={"Project"}
        description={metadata.description}
        url={metadata.siteUrl + "project"}
      />
      <CardListLayout posts={posts} currPage={currPage} path={route} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  const allTags = await getAllTagsFromPosts();

  return {
    props: {
      posts: posts.filter(({ fields: { slug } }) => slug.startsWith("project")),
      tags: allTags,
    },
  };
};

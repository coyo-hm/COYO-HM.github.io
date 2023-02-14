import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import metadata from "@config/index";
import { PostType, TagWithCountType } from "@src/type";
import { getAllPosts, getAllTagsFromPosts } from "@utils/api";
import useSidebar from "@hooks/useSidebar";
import { PageSeo } from "@components/common/SEO";
import CardListLayout from "@components/layout/CardListLayout";

const ProjectTagPage = ({
  posts,
  tags,
  tag,
}: {
  posts: PostType[];
  tags: TagWithCountType[];
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
  }, [setTags, tags]);

  return (
    <>
      <PageSeo
        title={`Project | ${tag}`}
        description={metadata.description}
        url={metadata.siteUrl + `project/tags/${tag}`}
      />
      <CardListLayout
        tag={tag}
        posts={posts}
        currPage={currPage}
        path={route}
      />
    </>
  );
};

export default ProjectTagPage;

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

interface TagsType {
  [key: string]: string;
  tag: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { tag } = params as TagsType;
  const allPosts = await getAllPosts();
  const allTags = await getAllTagsFromPosts();
  const posts = allPosts.filter(
    ({ frontMatter: { tags }, fields: { slug } }) =>
      tags.includes(tag) && slug.startsWith("project")
  );

  return {
    props: {
      posts: posts,
      tags: allTags,
      tag: tag,
    },
  };
};

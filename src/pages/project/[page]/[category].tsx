import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { PostType, TagWithCountType } from "src/models";
import { getAllPosts, getAllTags, getPosts } from "@utils/api";
import { PageSeo } from "@components/common/SEO";
import metadata from "@config/index";
import PostListLayout from "@components/layout/PostListLayout";
import { DEFAULT_NUMBER_OF_POST } from "@src/constants";
import { getLastPage } from "@utils/page";

export default function ProjectListPage({
  posts,
  allTags,
  category,
  page,
}: {
  posts: PostType[];
  allTags: TagWithCountType[];
  category: string;
  page: number;
}) {
  const total = allTags.find(({ tag }) => tag === category)?.count || 0;
  return (
    <>
      <PageSeo
        title={"Project"}
        description={metadata.description}
        url={metadata.siteUrl + "project"}
      />
      <PostListLayout
        showType={"card"}
        posts={posts}
        currPage={page}
        total={total}
        category={category}
        menu={"project"}
      >
        <h1 className={`font-bold text-3xl flex-grow px-1`}>PROJECT</h1>
      </PostListLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = await getAllTags("project");
  const size = DEFAULT_NUMBER_OF_POST["card"];
  const paths = allTags.reduce(
    (arr: { params: { page: string; category: string } }[], { tag, count }) => [
      ...arr,
      ...new Array(getLastPage(count, size)).fill(0).map((_, p) => ({
        params: { page: "" + p, category: tag },
      })),
    ],
    []
  );
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page, category } = params as { page: string; category: string };
  const allTags = await getAllTags("project");
  const posts = await getPosts(
    "project",
    +page,
    category === "all" ? undefined : category
  );

  return {
    props: {
      posts,
      allTags,
      category,
      page: +page,
    },
  };
};

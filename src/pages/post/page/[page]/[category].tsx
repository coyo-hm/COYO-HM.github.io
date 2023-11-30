import { GetStaticPaths, GetStaticProps } from "next";
import metadata from "@config/index";
import { getPosts } from "@utils/getPosts";
import getLastPage from "@utils/getLastPage";
import { DEFAULT_NUMBER_OF_POST } from "@constants/post";
import { PostType } from "@models/post";
import { TagWithCountType } from "@models/tag";
import getAllTags from "@utils/getAllTags";
import PageSeo from "@components/SEO/PageSEO";
import usePage from "@hooks/usePage";
import ArticleCard from "@components/common/ArticleCard";
import Pagination from "@components/Pagination";

const Blog = ({
  posts,
  allTags,
  category,
  page,
}: {
  posts: PostType[];
  allTags: TagWithCountType[];
  category: string;
  page: number;
}) => {
  const total = allTags.find(({ tag }) => tag === category)?.count || 0;
  const { startPage, endPage } = usePage(total, page, "list");
  return (
    <>
      <PageSeo
        title={"Blog"}
        description={metadata.description}
        url={metadata.siteUrl + `blog`}
      />
      <main className={`flex flex-col gap-5`}>
        <header className={`flex justify-end items-center gap-1 px-1`}>
          <h1 className={`font-bold text-3xl flex-grow`}>Blog</h1>
          <span className={`text-neutral-500 text-sm`}>포스트 수: {total}</span>
        </header>
        <article className={`flex flex-col flex-nowrap gap-3`}>
          {posts.map(({ frontMatter, fields: { slug } }) => (
            <ArticleCard {...frontMatter} slug={slug} key={slug} />
          ))}
        </article>
        <Pagination
          currPage={page}
          tag={category}
          startPage={startPage}
          endPage={endPage}
          category={"post"}
        />
      </main>
    </>
  );
};

export default Blog;

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = await getAllTags();
  const size = DEFAULT_NUMBER_OF_POST["list"];
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
  const allTags = await getAllTags();
  const posts = await getPosts(+page);

  return {
    props: {
      posts,
      allTags,
      category,
      page: +page,
    },
  };
};

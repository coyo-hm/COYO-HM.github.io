import { GetStaticPaths, GetStaticProps } from "next";

import PageSeo from "@components/common/PageSEO";
import Pagination from "@components/common/Pagination";
import metadata from "@config/index";
import CATEGORY from "@constants/category";
import { DEFAULT_NUMBER_OF_POST } from "@constants/post";
import usePage from "@hooks/usePage";
import { PostType } from "@models/post";
import { TagWithCountType } from "@models/tag";
import { getPosts } from "@utils/getPosts";
import getLastPage from "@utils/getLastPage";
import getAllTags from "@utils/getAllTags";
import PostCard from "@components/Card/PostCard";
import TagCapsule from "@components/Tag/TagCapsule";
import getBlurImg from "@utils/getBlurImg";

const Blog = ({
  posts,
  allTags,
  selectedTag,
  page,
}: {
  posts: PostType[];
  allTags: TagWithCountType[];
  selectedTag: string;
  page: number;
}) => {
  const isAllTag = selectedTag === "all";
  const total = allTags.find(({ tag }) => selectedTag === tag)?.count || 0;
  const { startPage, endPage } = usePage(
    total,
    page,
    DEFAULT_NUMBER_OF_POST.list
  );

  return (
    <>
      <PageSeo
        title={CATEGORY.post.label}
        description={metadata.description}
        url={metadata.siteUrl + `blog`}
      />
      <main className={`flex flex-col items-center pt-14 `}>
        {!isAllTag && (
          <div
            className={`italic bg-transparent border-b-2 border-black dark:border-white mb-2 font-bold`}
          >
            {CATEGORY.post.label}
          </div>
        )}
        <h1 className={`pb-2 page-title`}>
          {isAllTag ? CATEGORY.post.label : selectedTag}
        </h1>
        <div className={`my-12 flex flex-wrap gap-2 `}>
          {allTags.map((tag) => (
            <TagCapsule
              key={tag.tag}
              selectedTag={selectedTag}
              category={CATEGORY.post.id}
              {...tag}
            />
          ))}
        </div>
        <div className={`text-neutral-500 text-sm text-right w-full`}>
          포스트 수: {total}
        </div>
        <article
          className={`w-full grid gap-5 grid-cols-1 md:grid-cols-2 items-stretch my-5`}
        >
          {posts.map(({ frontMatter, fields: { slug } }, idx) => (
            // <ArticleCard {...frontMatter} slug={slug} key={slug} />
            <PostCard {...frontMatter} key={slug} slug={slug} />
          ))}
        </article>
        <Pagination
          currPage={page}
          tag={selectedTag}
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
    (arr: { params: { page: string; tag: string } }[], { tag, count }) => [
      ...arr,
      ...new Array(getLastPage(count, size)).fill(0).map((_, p) => ({
        params: { page: "" + p, tag },
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
  const { page, tag } = params as { page: string; tag: string };
  const allTags = await getAllTags();
  const postsInfo = await getPosts(+page, DEFAULT_NUMBER_OF_POST.list, tag);

  const posts = await Promise.all(
    postsInfo.map(async (post: PostType) => {
      const blurThumbnail = await getBlurImg(post.frontMatter.thumbnail);
      return { ...post, frontMatter: { ...post.frontMatter, blurThumbnail } };
    })
  );

  return {
    props: {
      posts,
      allTags,
      selectedTag: tag,
      page: +page,
    },
  };
};

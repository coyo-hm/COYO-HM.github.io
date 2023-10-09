import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaFilter } from "react-icons/fa";

import metadata from "@config/index";
import { PageSeo } from "@components/common/SEO";
import PostListLayout from "@components/layout/PostListLayout";
import TagsDropdown from "@components/common/TagsDropdown";
import { getAllTags, getPosts } from "@utils/api";
import { getLastPage } from "@utils/page";
import { DEFAULT_NUMBER_OF_POST } from "@src/constants";
import { PostType, TagWithCountType } from "@src/models";

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
  return (
    <>
      <PageSeo
        title={"Blog"}
        description={metadata.description}
        url={metadata.siteUrl + `blog`}
      />
      <PostListLayout
        showType={"list"}
        posts={posts}
        currPage={page}
        total={total}
        category={category}
        menu={"blog"}
      >
        <header className={`flex justify-end items-center gap-1 px-1`}>
          <h1 className={`font-bold text-3xl flex-grow`}>Blog</h1>
          <span className={`text-neutral-500 text-sm`}>포스트 수: {total}</span>
          {/*<button*/}
          {/*  onClick={() => setShowFilter((prevState) => !prevState)}*/}
          {/*  className={`px-2 py-3 rounded-2xl hover:bg-neutral-200 dark:hover:bg-neutral-700 active:bg-neutral-200 dark:active:bg-neutral-700 ${*/}
          {/*    selectedTags.length > 0 ? "text-blue-700" : ""*/}
          {/*  }`}*/}
          {/*>*/}
          {/*  {showFilter ? <RxCross1 size={16} /> : <FaFilter size={16} />}*/}
          {/*</button>*/}
        </header>
        {/*{showFilter && (*/}
        {/*  <TagsDropdown*/}
        {/*    allTags={allTags}*/}
        {/*    prevSelectedTags={selectedTags}*/}
        {/*    path={route}*/}
        {/*  />*/}
        {/*)}*/}
      </PostListLayout>
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
  const posts = await getPosts(
    "blog",
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

import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { RxCross1, RxReset } from "react-icons/rx";
import metadata from "@config/index";
import { DEFAULT_NUMBER_OF_POST } from "@src/constants";
import { PostType, TagWithCountType } from "@src/type";
import usePage from "@hooks/usePage";
import { getAllPosts, getAllTagsFromBlog } from "@utils/api";
import { PageSeo } from "@components/common/SEO";
import ArticleCard from "@components/common/ArticleCard";
import TagsDropdown from "@components/common/TagsDropdown";
import Pagination from "@components/common/Pagination";
import TagButton from "@components/common/TagButton";
import Link from "next/link";

const Blog = ({
  allPosts,
  allTags,
}: {
  allPosts: PostType[];
  allTags: TagWithCountType[];
}) => {
  const {
    route,
    query: { page, tags = [] },
  } = useRouter();
  const selectedTags = typeof tags === "string" ? [tags] : tags;

  const posts = useMemo(() => {
    let newPosts = allPosts;
    if (tags.length > 0) {
      newPosts = allPosts.filter(({ frontMatter: { tags } }) => {
        for (const tag of tags) {
          const res = selectedTags.includes(tag);
          if (res) {
            return true;
          }
        }
        return false;
      });
    }
    return newPosts;
  }, [allPosts, selectedTags]);

  const currPage = page ? parseInt(page as string) : 0;
  const { startPage, endPage } = usePage(posts.length, currPage);

  const showPosts = useMemo(() => {
    return posts.slice(
      currPage * DEFAULT_NUMBER_OF_POST,
      (currPage + 1) * DEFAULT_NUMBER_OF_POST
    );
  }, [currPage, posts]);

  const [showFilter, setShowFilter] = useState(false);

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
          <span className={`text-neutral-500 text-sm`}>
            포스트 수: {posts.length}
          </span>
          <button
            onClick={() => setShowFilter((prevState) => !prevState)}
            className={`px-2 py-3 rounded-2xl hover:bg-neutral-200 dark:hover:bg-neutral-700 active:bg-neutral-200 dark:active:bg-neutral-700 ${
              selectedTags.length > 0 ? "text-blue-700" : ""
            }`}
          >
            {showFilter ? <RxCross1 size={16} /> : <FaFilter size={16} />}
          </button>
        </header>
        {showFilter && (
          <TagsDropdown
            allTags={allTags}
            prevSelectedTags={selectedTags}
            path={route}
          />
        )}
        <article className={`flex flex-col flex-nowrap gap-3`}>
          {showPosts.map(({ frontMatter, fields: { slug } }) => (
            <ArticleCard {...frontMatter} slug={slug} key={slug} />
          ))}
        </article>
        <Pagination
          currPage={currPage}
          path={route}
          selectedTags={selectedTags}
          startPage={startPage}
          endPage={endPage}
        />
      </main>
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts("blog");
  const allTags = await getAllTagsFromBlog();

  return {
    props: {
      allPosts: posts,
      allTags: allTags,
    },
  };
};

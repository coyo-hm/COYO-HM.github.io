import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import metadata from "@config/index";
import { PostType, TagWithCountType } from "@models/index";
import { getAllPosts, getAllTagsFromBlog } from "@utils/api";
import { PageSeo } from "@components/common/SEO";
import TagsDropdown from "@components/common/TagsDropdown";
import PostListLayout from "@components/layout/PostListLayout";

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

  const [showFilter, setShowFilter] = useState(false);

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
        currPage={page ? parseInt(page as string) : 0}
        path={route}
        query={{ tags: selectedTags }}
      >
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
      </PostListLayout>
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

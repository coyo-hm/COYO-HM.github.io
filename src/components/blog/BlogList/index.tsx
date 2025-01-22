import Link from "next/link";
import CONSTANTS from "@constants/index";
import CATEGORY from "@constants/category";
import { TAG_ALL } from "@constants/tagInfo";
import usePage from "@hooks/usePage";
import { TagWithCountType } from "@models/tag";
import { PostType } from "@models/post";
import Pagination from "@components/common/Pagination";
import TagCapsule from "./TagCapsule";
import BlogItem from "./BlogItem";

interface Props {
  posts: PostType[];
  allTags: TagWithCountType[];
  selectedTag: string;
  page: number;
}

const BlogList = ({ posts, allTags, selectedTag, page }: Props) => {
  const isAllTag = selectedTag === TAG_ALL;
  const total = allTags.find(({ tag }) => selectedTag === tag)?.count || 0;
  const { startPage, endPage } = usePage(
    total,
    page,
    CONSTANTS.DEFAULT_NUMBER_OF_POST.LIST
  );
  return (
    <main>
      <header className={`mt-14 mb-2 w-full text-center`}>
        {!isAllTag && (
          <Link href={CATEGORY.post.link} className={`category-title`}>
            {CATEGORY.post.label}
          </Link>
        )}
        <h1 className={`page-title`}>
          {isAllTag ? CATEGORY.post.label : selectedTag}
        </h1>
      </header>
      <div className={`my-12 flex flex-wrap gap-2`}>
        {allTags.map((tag) => (
          <TagCapsule
            key={tag.tag}
            selectedTag={selectedTag}
            category={CATEGORY.post.id}
            {...tag}
          />
        ))}
      </div>
      <div className={`text-neutral-500 text-sm text-right`}>
        포스트 수: {total}
      </div>
      <ul
        className={`w-full grid gap-5 grid-cols-1 md:grid-cols-2 items-stretch my-5`}
      >
        {posts.map(({ slug, ...post }) => (
          <Link href={slug} key={slug}>
            <BlogItem {...post} slug={slug} />
          </Link>
        ))}
      </ul>
      <Pagination
        currPage={page}
        tag={selectedTag}
        startPage={startPage}
        endPage={endPage}
        category={"post"}
      />
    </main>
  );
};

export default BlogList;

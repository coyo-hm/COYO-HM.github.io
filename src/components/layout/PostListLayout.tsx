import { ReactNode } from "react";
import { DEFAULT_NUMBER_OF_POST } from "@src/constants";
import { PostType, showType } from "src/models";
import usePage from "@hooks/usePage";
import Pagination from "@components/common/Pagination";
import ArticleCard from "@components/common/ArticleCard";
import ThumbnailCard from "@components/common/ThumbnailCard";

const PostListLayout = ({
  showType,
  posts,
  currPage,
  path,
  query,
  children,
}: {
  showType: showType;
  posts: PostType[];
  currPage: number;
  path: string;
  query?: object;
  children: ReactNode;
}) => {
  const { startPage, endPage } = usePage(posts.length, currPage, showType);
  const showPosts = posts.slice(
    currPage * DEFAULT_NUMBER_OF_POST[showType],
    (currPage + 1) * DEFAULT_NUMBER_OF_POST[showType]
  );

  return (
    <main className={`flex flex-col gap-5`}>
      {children}
      {showType === "list" && (
        <article className={`flex flex-col flex-nowrap gap-3`}>
          {showPosts.map(({ frontMatter, fields: { slug } }) => (
            <ArticleCard {...frontMatter} slug={slug} key={slug} />
          ))}
        </article>
      )}
      {showType === "card" && (
        <article className={`grid grid-cols-3 gap-4`}>
          {showPosts.map(({ frontMatter, fields: { slug } }) => (
            <ThumbnailCard {...frontMatter} slug={slug} key={slug} />
          ))}
        </article>
      )}
      <Pagination
        currPage={currPage}
        path={path}
        query={query}
        startPage={startPage}
        endPage={endPage}
      />
    </main>
  );
};

export default PostListLayout;

import { ReactNode } from "react";
import { DEFAULT_NUMBER_OF_POST } from "@src/constants";
import { menuType, PostType, showType } from "src/models";
import usePage from "@hooks/usePage";
import Pagination from "@components/common/Pagination";
import ArticleCard from "@components/common/ArticleCard";
import ThumbnailCard from "@components/common/ThumbnailCard";

const PostListLayout = ({
  showType,
  posts,
  currPage,
  total,
  category,
  children,
  menu,
}: {
  showType: showType;
  posts: PostType[];
  currPage: number;
  total: number;
  category: string;
  children: ReactNode;
  menu: menuType;
}) => {
  const { startPage, endPage } = usePage(total, currPage, showType);

  return (
    <main className={`flex flex-col gap-5`}>
      {children}
      {showType === "list" && (
        <article className={`flex flex-col flex-nowrap gap-3`}>
          {posts.map(({ frontMatter, fields: { slug } }) => (
            <ArticleCard {...frontMatter} slug={slug} key={slug} />
          ))}
        </article>
      )}
      {showType === "card" && (
        <article className={`grid grid-cols-3 gap-4`}>
          {posts.map(({ frontMatter, fields: { slug } }) => (
            <ThumbnailCard {...frontMatter} slug={slug} key={slug} />
          ))}
        </article>
      )}
      <Pagination
        currPage={currPage}
        category={category}
        startPage={startPage}
        endPage={endPage}
        menu={menu}
      />
    </main>
  );
};

export default PostListLayout;

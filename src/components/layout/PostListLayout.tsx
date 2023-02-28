import { DEFAULT_NUMBER_OF_POST } from "@src/constants";
import { categoryType, PostType } from "@src/type";
import Pagination from "@components/common/Pagination";
import usePage from "@hooks/usePage";
import ArticleCard from "@components/common/ArticleCard";
import ListTitle from "@components/common/ListTitle";

const PostListLayout = ({
  tag,
  posts,
  currPage,
  path,
  categoryId,
}: {
  categoryId: categoryType;
  tag?: string;
  posts: PostType[];
  currPage: number;
  path: string;
}) => {
  const { startPage, endPage } = usePage(posts.length, currPage);
  const showPosts = posts.slice(
    currPage * DEFAULT_NUMBER_OF_POST,
    (currPage + 1) * DEFAULT_NUMBER_OF_POST
  );

  return (
    <>
      <ListTitle title={!!tag ? tag : categoryId.toUpperCase()} />
      <article className={`flex flex-col flex-nowrap gap-3`}>
        {showPosts.map(({ frontMatter, fields: { slug } }) => (
          <ArticleCard {...frontMatter} slug={slug} key={slug} />
        ))}
      </article>
      <Pagination
        currPage={currPage}
        path={path}
        startPage={startPage}
        endPage={endPage}
      />
    </>
  );
};

export default PostListLayout;

import { categoryType, PostType } from "@src/type";
import { DEFAULT_NUMBER_OF_CARD_POST } from "@src/constants";
import usePage from "@hooks/usePage";
import ListTitle from "@components/common/ListTitle";
import ThumbnailCard from "@components/common/ThumbnailCard";
import Pagination from "@components/common/Pagination";

const CardListLayout = ({
  categoryId,
  tag,
  posts,
  currPage,
  path,
}: {
  categoryId: categoryType;
  tag?: string;
  posts: PostType[];
  currPage: number;
  path: string;
}) => {
  const { startPage, endPage } = usePage(posts.length, currPage);
  const showPosts = posts.slice(
    currPage * DEFAULT_NUMBER_OF_CARD_POST,
    (currPage + 1) * DEFAULT_NUMBER_OF_CARD_POST
  );

  return (
    <>
      <ListTitle title={!!tag ? tag : categoryId.toUpperCase()} />
      <article className={`grid grid-cols-3 gap-4`}>
        {showPosts.map(({ frontMatter, fields: { slug } }) => (
          <ThumbnailCard {...frontMatter} slug={slug} key={slug} />
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
export default CardListLayout;

import { PostType } from "@src/type";
import usePage from "@hooks/usePage";
import { DEFAULT_NUMBER_OF_CARD_POST } from "@src/constants";
import PreviewPostCard from "@components/common/PreviewPostCard";
import PostListHeader from "@components/common/PostListHeader";
import Pagination from "@components/common/Pagination";
const CardListLayout = ({
  tag,
  posts,
  currPage,
  path,
}: {
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
      <PostListHeader categoryId={"Project"} tag={tag} />
      <article className={`grid grid-cols-3 gap-4`}>
        {showPosts.map(({ frontMatter, fields: { slug } }) => (
          <PreviewPostCard {...frontMatter} slug={slug} key={slug} />
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

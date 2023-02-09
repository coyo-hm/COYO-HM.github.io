import { PostType } from "@src/type";
import usePage from "@hooks/usePage";
import { DEFAULT_NUMBER_OF_POST } from "@src/constants";

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
    currPage * DEFAULT_NUMBER_OF_POST,
    (currPage + 1) * DEFAULT_NUMBER_OF_POST
  );
  return <div></div>;
};
export default CardListLayout;

import Link from "next/link";
import { DEFAULT_NUMBER_OF_POST } from "@src/constants";
import { PostType } from "@src/type";
import PostBox from "@components/common/PostBox";
import Pagination from "@components/common/Pagination";
import usePage from "@hooks/usePage";
import PostListHeader from "@components/common/PostListHeader";

const PostListLayout = ({
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

  return (
    <>
      <PostListHeader categoryId={"Blog"} />
      <article className={`flex flex-col flex-nowrap gap-3`}>
        {showPosts.map(({ frontMatter, fields: { slug } }) => (
          <PostBox {...frontMatter} slug={slug} key={slug} />
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

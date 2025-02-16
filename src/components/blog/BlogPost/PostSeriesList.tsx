import Link from "next/link";
import { SeriesInfoWithPost } from "@src/types/series";

interface Props extends SeriesInfoWithPost {
  selectedPostId: string;
}

const PostSeriesList = ({ selectedPostId, id, title, posts }: Props) => {
  return (
    <section
      className={`bg-blue-500/20 p-5 rounded-lg
    `}
    >
      <header
        className={`italic text-lg font-bold flex justify-between flex-wrap align-bottom`}
      >
        {title}
        <Link
          className={"italic font-light text-sm hover:text-yellow-600"}
          href={`/series/${id}`}
        >
          같은 시리즈 다른 글 보기&nbsp;&gt;
        </Link>
      </header>
      <ul className={`flex flex-col gap-1.5 italic pt-3`}>
        {posts.map((post) =>
          post.id === selectedPostId ? (
            <h3 key={post.id} className={`text-blue-500 cursor-default`}>
              {post.no}. {post.title}
            </h3>
          ) : (
            <Link
              href={post.slug}
              key={post.id}
              className={`hover:text-blue-700`}
            >
              {post.no}. {post.title}
            </Link>
          )
        )}
      </ul>
    </section>
  );
};
export default PostSeriesList;

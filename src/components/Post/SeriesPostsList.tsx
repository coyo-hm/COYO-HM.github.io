import Link from "next/link";
import { SeriesAttributeWithPostType } from "@models/series";

interface Props {
  selectedPostKey: string;
  seriesInfo: SeriesAttributeWithPostType;
}

const SeriesPostsList = ({ selectedPostKey, seriesInfo }: Props) => {
  return (
    <section
      className={`bg-blue-500/20 p-5 rounded-lg
    `}
    >
      <header
        className={`italic text-lg font-bold flex justify-between flex-wrap align-bottom`}
      >
        {seriesInfo?.title}
        <Link
          className={"italic font-light text-sm hover:text-yellow-600"}
          href={`/series/${seriesInfo.key}`}
        >
          같은 시리즈 다른 글 보기&nbsp;&gt;
        </Link>
      </header>
      <ul className={`flex flex-col gap-1.5 italic pt-3`}>
        {seriesInfo.posts.map((post) =>
          post.key === selectedPostKey ? (
            <h3 key={post.key} className={`text-blue-500 cursor-default`}>
              {post.title}
            </h3>
          ) : (
            <Link
              href={`/post/${post.key}`}
              key={post.key}
              className={`hover:text-blue-700`}
            >
              {post.title}
            </Link>
          )
        )}
      </ul>
    </section>
  );
};
export default SeriesPostsList;

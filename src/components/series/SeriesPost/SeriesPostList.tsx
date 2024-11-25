import { PostAttributeType } from "@models/post";
import SeriesPostItem from "@components/series/SeriesPost/SeriesPostItem";
import Link from "next/link";

interface Props {
  posts: PostAttributeType[];
}

const SeriesPostList = ({ posts = [] }: Props) => {
  return (
    <div className={`mt-24 mb-10`}>
      <h2 className={`series-subtitle`}>SERIES POSTS</h2>
      <div className={`flex flex-col gap-3`}>
        {posts.map((post, idx) => (
          <Link href={`/post/${post.key}`} key={post.key}>
            <SeriesPostItem {...post} index={idx} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SeriesPostList;

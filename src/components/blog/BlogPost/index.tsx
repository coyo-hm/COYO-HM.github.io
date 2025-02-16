import { SeriesInfoWithPost } from "@src/types/series";
import { PostType } from "@src/types/post";
import CustomMDX from "@components/common/CustomMDX";
import PostHeader from "./PostHeader";
import TagsList from "./TagsList";
import TableOfContents from "./TableOfContents";
import PostSeriesList from "./PostSeriesList";
import Giscus from "./Giscus";

export interface BlogPostProps extends Omit<PostType, "series"> {
  series: SeriesInfoWithPost[];
}

const BlogPost = ({
  id,
  title,
  date,
  body,
  tags,
  slug,
  series,
}: BlogPostProps) => {
  return (
    <main id={"post"}>
      <PostHeader title={title} date={date} />
      <div
        className={`relative border-y border-y-blue-700 flex flex-row flex-nowrap max-md:flex-col-reverse`}
      >
        <div className={`grow shrink pr-10 pt-2 min-w-0 max-md:p-0 `}>
          <CustomMDX body={body} />
          <TagsList tags={tags} slug={slug} />
        </div>
        <TableOfContents content={body.raw} />
      </div>
      <div className={`flex flex-col gap-3 my-5`}>
        {series.map((series) => (
          <PostSeriesList key={series.id} selectedPostId={id} {...series} />
        ))}
      </div>
      <Giscus />
    </main>
  );
};

export default BlogPost;

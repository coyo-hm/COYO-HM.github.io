import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostAttributeType } from "@models/post";
import { SeriesAttributeWithPostType } from "@models/series";
import PostHeader from "./PostHeader";
import CustomMDX from "./CustomMDX";
import TagsList from "./TagsList";
import TableOfContents from "./TableOfContents";
import PostSeriesList from "./PostSeriesList";
import Giscus from "./Giscus";

interface Props extends PostAttributeType {
  body: string;
  mdx: MDXRemoteSerializeResult;
  allSeriesInfo: SeriesAttributeWithPostType[];
  slug: string;
}

const BlogPost = ({
  title,
  date,
  body,
  mdx,
  tags,
  slug,
  allSeriesInfo,
}: Props) => {
  return (
    <main id={"post"}>
      <PostHeader title={title} date={date} />
      <div
        className={`relative border-y border-y-blue-700 flex flex-row flex-nowrap max-md:flex-col-reverse`}
      >
        <div className={`grow shrink pr-10 pt-2 min-w-0 max-md:p-0 `}>
          <CustomMDX {...mdx} />
          <TagsList tags={tags} slug={slug} />
        </div>
        <TableOfContents content={body} />
      </div>
      <div className={`flex flex-col gap-3 my-5`}>
        {allSeriesInfo.map((series) => (
          <PostSeriesList
            key={series.key}
            selectedPostKey={slug}
            seriesInfo={series}
          />
        ))}
      </div>
      <Giscus />
    </main>
  );
};

export default BlogPost;

import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostType } from "@src/models/index";
import { PostSEO } from "@components/common/SEO";
import PostHeader from "@components/post/PostHeader";
import TableOfContents from "@components/post/TableOfContents";
import CustomMDX from "@components/post/CustomMDX";
import CommentWidget from "@components/post/CommentWidget";
import metadata from "@config/index";
import TagsList from "@components/post/TagsList";

const PostLayout = ({
  post: {
    fields: { slug },
    frontMatter,
    body,
    path,
  },
  mdx,
}: {
  post: PostType;
  mdx: MDXRemoteSerializeResult;
}) => {
  const {
    title,
    category,
    tags,
    date,
    description,
    socialImageCredit,
    thumbnail,
  } = frontMatter;

  return (
    <>
      <PostSEO
        title={`${title}`}
        summary={description}
        date={date}
        url={metadata.siteUrl + slug}
        tags={tags}
        images={[]}
      />
      <article className={`flex flex-col`} id={"post"}>
        <PostHeader {...frontMatter} />
        <div
          className={`flex flex-row flex-nowrap relative border-y border-y-blue-700 max-md:flex-col-reverse`}
        >
          <div
            className={`grow shrink pr-10 pt-5 min-w-0 max-md:p-0 max-md:pb-4`}
          >
            <CustomMDX {...mdx} />
            <TagsList tags={tags} slug={slug} />
          </div>
          <TableOfContents content={body} />
        </div>
        <CommentWidget />
      </article>
    </>
  );
};

export default PostLayout;

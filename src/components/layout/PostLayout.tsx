import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostType } from "@type/index";
import { PostSEO } from "@components/common/SEO";
import PostHeader from "@components/post/PostHeader";
import TableOfContents from "@components/post/TableOfContents";
import CustomMDX from "@components/post/CustomMDX";
import CommentWidget from "@components/post/CommentWidget";
import metadata from "@config/index";

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
        title={`${metadata.title} | ${title}`}
        summary={description}
        date={date}
        url={metadata.siteUrl + slug}
        tags={tags}
        images={[]}
      />
      <article className={`flex flex-col`}>
        <PostHeader {...frontMatter} />
        <div
          className={`flex flex-row flex-nowrap relative border-y border-y-blue-700 py-10`}
        >
          <CustomMDX {...mdx} />
          <TableOfContents content={body} />
        </div>
        <CommentWidget />
      </article>
    </>
  );
};

export default PostLayout;

import CustomMDX from "@components/post/CustomMDX";
import TableOfContents from "@components/post/TableOfContents";
import { PostType } from "@type/index";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const PostLayout = ({
  post,
  mdx,
}: {
  post: PostType;
  mdx: MDXRemoteSerializeResult;
}) => {
  return (
    <div className={`flex relative`}>
      <CustomMDX {...mdx} />
      <TableOfContents content={post.body} />
    </div>
  );
};

export default PostLayout;

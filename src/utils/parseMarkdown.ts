import { serialize } from "next-mdx-remote/serialize";
//remark
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
//rehype
import rehypePrism from "rehype-prism-plus";
import rehypeKatex from "rehype-katex";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/*
interface ImageNode extends Node {
  type: 'element'
  tagName: 'img'
  properties: {
    src: string
    height?: number
    width?: number
  }
}

function isImageNode(node: Node): node is ImageNode {
  const img = node as ImageNode
  return (
    img.type === 'element' &&
    img.tagName === 'img' &&
    img.properties &&
    typeof img.properties.src === 'string'
  )
}
*/

const parseMarkdownToMdx = async (body: string) => {
  return serialize(body, {
    mdxOptions: {
      remarkPlugins: [remarkSlug, remarkMath, remarkGfm],
      rehypePlugins: [rehypeAutolinkHeadings, rehypeKatex, rehypePrism],
    },
  });
};

export default parseMarkdownToMdx;

import { serialize } from "next-mdx-remote/serialize";
//remark
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm"; // 기본적인 마크다운 문법을 HTML로 변환
import remarkSlug from "remark-slug";
//rehype
import rehypePrism from "rehype-prism-plus"; // 코드블럭을 syntax highlighting 해주는 도구
import rehypeKatex from "rehype-katex";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/*
interface ImageNode extends Node {
  models: 'element'
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
    img.models === 'element' &&
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

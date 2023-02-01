import { serialize } from "next-mdx-remote/serialize";
//remark
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import remarkSlug from "remark-slug";
import remarkPrism from "remark-prism";
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
      remarkPlugins: [
        remarkToc,
        remarkSlug,
        remarkMath,
        remarkGfm,
        [
          remarkPrism,
          {
            plugins: [
              "autolinker",
              "command-line",
              "data-uri-highlight",
              "diff-highlight",
              "inline-color",
              "keep-markup",
              "line-numbers",
              "show-invisibles",
              "treeview",
            ],
          },
        ],
      ],
      rehypePlugins: [rehypeAutolinkHeadings, rehypeKatex, rehypePrism],
    },
  });
};

export default parseMarkdownToMdx;
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
//remark
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm"; // 기본적인 마크다운 문법을 HTML로 변환
//rehype
import rehypePrettyCode from "rehype-pretty-code";
import rehypeKatex from "rehype-katex";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `post/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    published: { type: "boolean", required: false },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", required: true, of: { type: "string" } },
    series: { type: "list", required: false, of: { type: "string" } },
    thumbnail: { type: "string", required: true },
    blurThumbnail: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
      // resolve: (post) => {
      //     const segments = post._raw.flattenedPath.split(/[/\\]/)
      //     return segments[segments.length - 1]
      // },
    },
    id: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(".mdx", ""),
    },
  },
}));

export const Series = defineDocumentType(() => ({
  name: "Series",
  filePathPattern: `series/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", required: true, of: { type: "string" } },
    thumbnail: { type: "string", required: true },
    blurThumbnail: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
      // resolve: (post) => {
      //     const segments = post._raw.flattenedPath.split(/[/\\]/)
      //     return segments[segments.length - 1]
      // },
    },
    id: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(".mdx", ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Series],
  mdx: {
    rehypePlugins: [
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          keepBackground: false,
          defaultLang: "plaintext",
        },
      ],
      rehypeKatex,
    ],
    remarkPlugins: [remarkMath, remarkGfm],
  },
});

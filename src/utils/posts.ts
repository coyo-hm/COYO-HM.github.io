import { allPosts } from "contentlayer/generated";
import { isDev } from "@libs/core";
import { PostType } from "@models/post";
import { allTags } from "@utils/tags";
import { DEFAULT_NUMBER_OF_POST } from "@constants/post";
import { ALL_TAG } from "@constants/tag_info";

export const allBlogPosts: PostType[] = allPosts
  .reduce(
    (arr: PostType[], post) =>
      post.slug.startsWith("/post") && (isDev || post.published)
        ? [...arr, post]
        : arr,
    []
  )
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const allBlogPostIds = allBlogPosts.map((post) => post.id);

// export const getPostList = async (
//   tag: string = ALL_TAG,
//   page: number = 0,
//   size: number = DEFAULT_NUMBER_OF_POST.list
// ): Promise<Array<PostType>> => {
//   const selectedTagPostIds = allTags[tag];
//
//   return (
//     tag === ALL_TAG
//       ? allBlogPosts
//       : allBlogPosts.reduce(
//           (arr: PostType[], post) =>
//             selectedTagPostIds.includes(post.id) ? [...arr, post] : arr,
//           []
//         )
//   ).slice(page * size, (page + 1) * size);
// };

export const getPostList = (
  tag: string = ALL_TAG,
  page: number = 0,
  size: number = DEFAULT_NUMBER_OF_POST.list
): Array<PostType> => {
  const selectedTagPostIds = allTags[tag];

  return (
    tag === ALL_TAG
      ? allBlogPosts
      : allBlogPosts.reduce(
          (arr: PostType[], post) =>
            selectedTagPostIds.includes(post.id) ? [...arr, post] : arr,
          []
        )
  ).slice(page * size, (page + 1) * size);
};

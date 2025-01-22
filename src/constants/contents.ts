import { isDev } from "@libs/core";
import { allPosts } from "contentlayer/generated";
import SeriesTable from "@constants/seriesTable";
import PostsTable from "@constants/postsTable";
import TagsTable from "@constants/tagsTable";

import CONSTANTS from "@constants/index";
import { TAG_ALL } from "@constants/tagInfo";
import sortPostByDate from "@utils/sortPostByDate";
import { PostInfoType, PostType } from "@models/post";
import { SeriesInfoWithPost } from "@models/series";
import { TagTable, TagWithCountType } from "@models/tag";

export const seriesInfoTable = isDev
  ? SeriesTable.unpublished
  : SeriesTable.published;

export const allTags: TagTable = isDev
  ? TagsTable.unpublished
  : TagsTable.published;

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

export const getPostList = (
  tag: string = TAG_ALL,
  page: number = 0,
  size: number = CONSTANTS.DEFAULT_NUMBER_OF_POST.LIST
): Array<PostType> =>
  (tag === TAG_ALL
    ? allBlogPosts
    : allBlogPosts.reduce(
        (arr: PostType[], post) =>
          allTags[tag].includes(post.id) ? [...arr, post] : arr,
        []
      )
  ).slice(page * size, (page + 1) * size);

export const allSeriesInfo = Object.keys(seriesInfoTable)
  .map((series) => seriesInfoTable[series])
  .sort((a, b) => {
    if (a.endDate === "") {
      return 1;
    }

    if (b.endDate === "") {
      return -1;
    }

    const dateA = new Date(a.endDate);
    const dateB = new Date(b.endDate);

    if (dateA < dateB) {
      return 1;
    }
    if (dateA > dateB) {
      return -1;
    }

    return 0;
  });

export const totalSeries = allSeriesInfo.length;

export const getSortedPostsInSeries = async (
  seriesId: string
): Promise<PostInfoType[]> => {
  const selectedSeries = seriesInfoTable[seriesId];
  return selectedSeries.postIds.map((id: string) => PostsTable[id]);
};

export const getSeriesInfoWithRecentPosts = (
  postId: string,
  seriesIds: string[] = []
): SeriesInfoWithPost[] => {
  return seriesIds.map((seriesId) => {
    const selectedSeries = seriesInfoTable[seriesId];
    const posts = sortPostByDate<PostInfoType>(
      selectedSeries.postIds.map((id: string) => PostsTable[id]),
      true
    );
    const postIdx = posts.findIndex((post) => post.id === postId);
    let startIdx = Math.max(0, postIdx - 3);
    const endIdx = Math.min(
      posts.length,
      startIdx + CONSTANTS.DEFAULT_NUMBER_OF_RECENT_POST
    );
    startIdx = Math.max(endIdx - CONSTANTS.DEFAULT_NUMBER_OF_RECENT_POST, 0);

    const selectedPosts = posts.slice(startIdx, endIdx).map((post, idx) => ({
      id: post.id,
      slug: `/post/${post.id}`,
      title: post.title,
      no: "" + (startIdx + idx + 1),
    }));

    return {
      ...selectedSeries,
      posts: selectedPosts,
    };
  });
};

export const getSeriesInfoList = async (
  page: number,
  size: number = CONSTANTS.DEFAULT_NUMBER_OF_POST.SERIES
) => allSeriesInfo.slice(page * size, (page + 1) * size);

const tagWithCount = Object.keys(allTags).map((tag) => ({
  tag,
  count: allTags[tag].length,
}));

export const allTagsWithCount: Array<TagWithCountType> = tagWithCount.sort(
  (a: TagWithCountType, b: TagWithCountType) => b.count - a.count
);

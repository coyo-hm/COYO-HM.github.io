import SeriesTable from "@tables/seriesTable.json";
import PostsTable from "@tables/postsTable.json";
import { isDev } from "@libs/core";
import { SeriesInfoTable, SeriesInfoWithPost } from "@models/series";
import { PostInfoTable, PostInfoType } from "@models/post";
import sortPostByDate from "@utils/sortPostByDate";
import { DEFAULT_NUMBER_OF_POST } from "@constants/post";

const NUMBER_OF_POST = 5;

export const seriesInfoTable: SeriesInfoTable = isDev
  ? SeriesTable.unpublished
  : SeriesTable.published;

const postInfoTable: PostInfoTable = PostsTable;

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
  return selectedSeries.postIds.map((id: string) => postInfoTable[id]);
};

export const getSeriesInfoWithRecentPosts = async (
  postId: string,
  seriesIds: string[] = []
): Promise<SeriesInfoWithPost[]> => {
  return seriesIds.map((seriesId) => {
    const selectedSeries = seriesInfoTable[seriesId];
    const posts = sortPostByDate<PostInfoType>(
      selectedSeries.postIds.map((id: string) => postInfoTable[id]),
      true
    );
    const postIdx = posts.findIndex((post) => post.id === postId);
    let startIdx = Math.max(0, postIdx - 3);
    let endIdx = Math.min(posts.length, startIdx + NUMBER_OF_POST);
    startIdx = Math.max(endIdx - NUMBER_OF_POST, 0);

    const selectedPosts = posts.slice(startIdx, endIdx).map((post, idx) => ({
      id: post.id,
      slug: `/post/${post.id}`,
      title: post.title,
      no: startIdx + idx + 1,
    }));

    return {
      ...selectedSeries,
      posts: selectedPosts,
    };
  });
};

export const getSeriesInfoList = async (
  page: number,
  size: number = DEFAULT_NUMBER_OF_POST["series"]
) => allSeriesInfo.slice(page * size, (page + 1) * size);

import SeriesTable from "public/static/table/seriesTable.json";
import PostsTable from "public/static/table/postsTable.json";

import { SeriesAttributeWithPostType, SeriesTableNode } from "@models/series";
import { PostTableNode } from "@models/post";
import sortPostByDate from "@utils/sortPostByDate";

const NUMBER_OF_POST = 5;

const getPostSeriesInfo = async (
  selectedPostKey: string,
  seriesKeyList: string[]
): Promise<Array<SeriesAttributeWithPostType>> => {
  const seriesAttributeTable: { [key: string]: SeriesTableNode } =
    process.env.NODE_ENV === "development"
      ? SeriesTable.unpublished
      : SeriesTable.published;

  const postsAttributesTable: {
    [key: string]: PostTableNode;
  } = PostsTable;

  const seriesAttributeList: SeriesAttributeWithPostType[] =
    seriesKeyList.reduce((arr: SeriesAttributeWithPostType[], seriesKey) => {
      const seriesAttribute = seriesAttributeTable[seriesKey];
      if (seriesAttribute) {
        const postIdx = seriesAttribute.posts.indexOf(selectedPostKey);
        let startIdx = Math.max(0, postIdx - 3);
        let endIdx = Math.min(
          seriesAttribute.posts.length,
          startIdx + NUMBER_OF_POST
        );
        const posts =
          seriesAttribute?.posts.slice(startIdx, endIdx).map((postKey) => ({
            ...postsAttributesTable[postKey],
            key: postKey,
          })) || [];
        const sortedPosts = sortPostByDate(posts, true);

        return [
          ...arr,
          {
            ...seriesAttribute,
            key: seriesKey,
            posts: sortedPosts.map((post, idx) => ({
              ...post,
              title: `${startIdx + idx + 1}. ${post.title}`,
            })),
          },
        ];
      }
      return arr;
    }, []);

  return seriesAttributeList;
};
export default getPostSeriesInfo;

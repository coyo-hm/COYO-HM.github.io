import SeriesTable from "public/static/table/seriesTable.json";
import PostsTable from "public/static/table/postsTable.json";

import { SeriesAttributeWithPostType, SeriesTableNode } from "@models/series";
import { PostAttributeType, PostTableNode } from "@models/post";
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
        const posts =
          seriesAttribute?.posts.map((postKey) => ({
            ...postsAttributesTable[postKey],
            key: postKey,
          })) || [];
        const sortedPosts = sortPostByDate(posts, true);
        const postIdx = sortedPosts.findIndex(
          (post: PostAttributeType) => post.key === selectedPostKey
        );
        let startIdx = Math.max(0, postIdx - 3);
        let endIdx = Math.min(
          seriesAttribute.posts.length,
          startIdx + NUMBER_OF_POST
        );
        startIdx = Math.max(endIdx - NUMBER_OF_POST, 0);

        const selectedPosts = sortedPosts
          .slice(startIdx, endIdx)
          .map((post, idx) => ({
            ...post,
            title: `${startIdx + idx + 1}. ${post.title}`,
          }));

        return [
          ...arr,
          {
            ...seriesAttribute,
            key: seriesKey,
            posts: selectedPosts,
          },
        ];
      }
      return arr;
    }, []);

  return seriesAttributeList;
};
export default getPostSeriesInfo;

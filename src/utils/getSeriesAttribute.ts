import SeriesTable from "public/static/table/seriesTable.json";
import PostsTable from "public/static/table/postsTable.json";
import { SeriesAttributeWithPostType, SeriesTableNode } from "@models/series";
import { PostTableNode } from "@models/post";
import sortPostByDate from "@utils/sortPostByDate";

const getSeriesAttribute = async (
  seriesKey: string
): Promise<SeriesAttributeWithPostType> => {
  const seriesInfoTable: { [key: string]: SeriesTableNode } =
    process.env.NODE_ENV === "development"
      ? SeriesTable.unpublished
      : SeriesTable.published;

  const postsAttributesObj: {
    [key: string]: PostTableNode;
  } = PostsTable;

  const seriesAttribute = seriesInfoTable[seriesKey];

  const postsInfo =
    seriesAttribute?.posts.map((key) => ({
      ...postsAttributesObj[key],
      key,
    })) || [];

  return {
    ...seriesAttribute,
    posts: sortPostByDate(postsInfo, true),
    key: seriesKey,
  };
};

export default getSeriesAttribute;

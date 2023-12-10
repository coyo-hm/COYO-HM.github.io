import SeriesTable from "public/static/table/seriesTable.json";
import PostsTable from "public/static/table/postsTable.json";
import { SeriesTableNode, SeriesPostType } from "@models/series";
import { PostTableNode } from "@models/post";
import sortPostByDate from "@utils/sortPostByDate";
import { SERIES_DIR_PATH } from "@constants/api";
import fs from "fs";
import frontMatter from "front-matter";

const SERIES_PATH = `${process.cwd()}${SERIES_DIR_PATH}`;

const getSeriesInfo = async (seriesKey: string): Promise<SeriesPostType> => {
  const seriesInfoTable: { [key: string]: SeriesTableNode } =
    process.env.NODE_ENV === "development"
      ? SeriesTable.unpublished
      : SeriesTable.published;

  const postsAttributesObj: {
    [key: string]: PostTableNode;
  } = PostsTable;

  const seriesInfo = seriesInfoTable[seriesKey];

  const file = fs.readFileSync(`${SERIES_PATH}/${seriesKey}.mdx`, {
    encoding: "utf8",
  });
  const { body } = frontMatter<SeriesTableNode>(file);

  const postsInfo =
    seriesInfo?.posts.map((key) => ({ ...postsAttributesObj[key], key })) || [];

  return {
    frontMatter: seriesInfo,
    posts: sortPostByDate(postsInfo, true),
    key: seriesKey,
    body,
    fields: {
      slug: `${seriesKey}`,
    },
    path: seriesKey,
  };
};
export default getSeriesInfo;

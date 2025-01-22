const fs = require("fs");
const path = require("path");
const { sync } = require("glob");
const frontMatter = require("front-matter");

const POST_DIR_PATH = path.join(process.cwd(), "content/Post");
const SERIES_DIR_PATH = path.join(process.cwd(), "content/series");
// const TABLE_DIR_PATH = path.join(process.cwd(), "public/static/tables");
const TABLE_DIR_PATH = path.join(process.cwd(), "src/constants");

const isIntroPost = (postKey = "") => {
  const postDirectory = postKey.split("/");
  const postDirLength = postDirectory.length;
  const fileName = postDirectory[postDirLength - 1];
  return fileName === "intro";
};

const getSeriesKey = (postKey = "") => {
  const postDirectory = postKey.split("/");
  const isSeries = postDirectory[0] === "series";
  if (isSeries) {
    return postDirectory[1];
  }
  return undefined;
};

const getDate = (type, a, b) => {
  if (a === "") {
    return b;
  }
  const dateA = new Date(a);
  const dateB = new Date(b);

  if (type === "start") {
    return dateA < dateB ? dateA : dateB;
  }

  if (type === "end") {
    return dateA > dateB ? dateA : dateB;
  }
};

const createTable = () => {
  const files = sync(`${POST_DIR_PATH}/**/*.md*`).reverse();
  const seriesFiles = sync(`${SERIES_DIR_PATH}/**/*.md*`).reverse();

  try {
    let fileAttributes = {};
    let seriesTablePublished = {};
    let seriesTableUnpublished = {};
    let tagsTablePublished = { all: [] };
    let tagsTableUnpublished = { all: [] };

    for (const filePath of seriesFiles) {
      const file = fs.readFileSync(filePath, { encoding: "utf8" });
      const { attributes } = frontMatter(file);
      const seriesPath = filePath.replace(`${SERIES_DIR_PATH}/`, "");
      const seriesKey = seriesPath?.replace(path.extname(filePath), "");

      seriesTablePublished[seriesKey] = {
        id: seriesKey,
        ...attributes,
        startDate: "",
        endDate: "",
        postIds: [],
      };

      seriesTableUnpublished[seriesKey] = {
        id: seriesKey,
        ...attributes,
        startDate: "",
        endDate: "",
        postIds: [],
      };
    }

    for (const filePath of files) {
      const file = fs.readFileSync(filePath, { encoding: "utf8" });
      const { attributes } = frontMatter(file);
      const { series, published } = attributes;
      const date = new Date(attributes.date).toISOString();
      const tags = attributes.tags?.map((tag) =>
        tag.toLowerCase().replace(/\s|-/gi, "_")
      );

      const postPath = filePath.replace(`${POST_DIR_PATH}/`, "");
      const postKey = postPath.replace(path.extname(filePath), "");

      const postInfo = {
        ...attributes,
        // path: postPath,
        id: postKey,
        tags,
        date,
        published,
      };

      tagsTableUnpublished.all = [...tagsTableUnpublished.all, postKey];
      if (published) {
        tagsTablePublished.all = [...tagsTablePublished.all, postKey];
      }

      if (!!series) {
        series.forEach((seriesKey) => {
          seriesTableUnpublished[seriesKey] = seriesTableUnpublished[seriesKey]
            ? {
                ...seriesTableUnpublished[seriesKey],
                startDate: getDate(
                  "start",
                  seriesTableUnpublished[seriesKey].startDate,
                  date
                ),
                endDate: getDate(
                  "end",
                  seriesTableUnpublished[seriesKey].endDate,
                  date
                ),
                postIds: [
                  ...seriesTableUnpublished[seriesKey].postIds,
                  postKey,
                ],
              }
            : { postIds: [postKey] };

          if (published) {
            seriesTablePublished[seriesKey] = seriesTablePublished[seriesKey]
              ? {
                  ...seriesTablePublished[seriesKey],
                  startDate: getDate(
                    "start",
                    seriesTablePublished[seriesKey].startDate,
                    date
                  ),
                  endDate: getDate(
                    "end",
                    seriesTablePublished[seriesKey].endDate,
                    date
                  ),
                  postIds: [
                    ...seriesTablePublished[seriesKey].postIds,
                    postKey,
                  ],
                }
              : { postIds: [postKey] };
          }
        });
      }

      tags.forEach((t) => {
        tagsTableUnpublished[t] = tagsTableUnpublished[t]
          ? [...tagsTableUnpublished[t], postKey]
          : [postKey];
        if (published) {
          tagsTablePublished[t] = tagsTablePublished[t]
            ? [...tagsTablePublished[t], postKey]
            : [postKey];
        }
      });

      fileAttributes[postKey] = postInfo;
    }

    fs.mkdirSync(TABLE_DIR_PATH, { recursive: true });
    fs.writeFileSync(
      path.join(TABLE_DIR_PATH, `postsTable.ts`),
      'import { PostInfoTable } from "@models/post";\n' +
        "\n" +
        "const PostsTable: PostInfoTable = " +
        JSON.stringify(fileAttributes) +
        ";export default PostsTable;",
      "utf-8"
    );

    fs.writeFileSync(
      path.join(TABLE_DIR_PATH, `tagsTable.ts`),
      "const TagsTable =" +
        JSON.stringify({
          published: tagsTablePublished,
          unpublished: tagsTableUnpublished,
        }) +
        ";export default TagsTable;",
      "utf-8"
    );
    fs.writeFileSync(
      path.join(TABLE_DIR_PATH, `seriesTable.ts`),
      'import { SeriesInfoTable } from "@models/series";\n' +
        "\n" +
        "const SeriesTable: {\n" +
        "  published: SeriesInfoTable;\n" +
        "  unpublished: SeriesInfoTable;\n" +
        "} = " +
        JSON.stringify({
          published: seriesTablePublished,
          unpublished: seriesTableUnpublished,
        }) +
        ";export default SeriesTable;",
      "utf-8"
    );
  } catch (e) {
    console.error(e);
  }
};

createTable();

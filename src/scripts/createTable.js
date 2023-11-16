const fs = require("fs");
const path = require("path");
const { sync } = require("glob");
const frontMatter = require("front-matter");

const CONTENT_DIR_PATH = path.join(process.cwd(), "content");
const TABLE_DIR_PATH = path.join(process.cwd(), "public/static/table");

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

const createTable = () => {
  const files = sync(`${CONTENT_DIR_PATH}/**/*.md*`).reverse();

  try {
    let fileAttributes = {};
    let seriesTablePublished = {};
    let seriesTableUnpublished = {};
    let tagsTablePublished = { all: [] };
    let tagsTableUnpublished = { all: [] };

    for (const filePath of files) {
      const file = fs.readFileSync(filePath, { encoding: "utf8" });
      const { attributes } = frontMatter(file);
      const { date, title, tags, description, published } = attributes;

      const postPath = filePath.replace(`${CONTENT_DIR_PATH}/`, "");
      const postKey = postPath.replace(path.extname(filePath), "");
      const series = getSeriesKey(postKey);

      if (isIntroPost(postKey)) {
        seriesTablePublished[series] = {
          ...attributes,
          posts: seriesTablePublished[series]?.posts || [],
        };

        seriesTableUnpublished[series] = {
          ...attributes,
          posts: seriesTableUnpublished[series]?.posts || [],
        };
        continue;
      }

      const postTags = tags?.map((tag) =>
        tag.toLowerCase().replace(/\s|-/gi, "_")
      );

      tagsTableUnpublished.all = [...tagsTableUnpublished.all, postKey];
      if (published) {
        tagsTablePublished.all = [...tagsTablePublished.all, postKey];
      }

      if (!!series) {
        seriesTableUnpublished[series] = seriesTableUnpublished[series]
          ? {
              ...seriesTableUnpublished[series],
              posts: [...seriesTableUnpublished[series].posts, postKey],
            }
          : { posts: [postKey] };

        if (published) {
          seriesTablePublished[series] = seriesTablePublished[series]
            ? {
                ...seriesTablePublished[series],
                posts: [...seriesTablePublished[series].posts, postKey],
              }
            : { posts: [postKey] };
        }
      }

      postTags.forEach((t) => {
        tagsTableUnpublished[t] = tagsTableUnpublished[t]
          ? [...tagsTableUnpublished[t], postKey]
          : [postKey];
        if (published) {
          tagsTablePublished[t] = tagsTablePublished[t]
            ? [...tagsTablePublished[t], postKey]
            : [postKey];
        }
      });

      fileAttributes[postKey] = {
        ...attributes,
        path: postPath,
        series,
        title,
        tags: postTags,
        date: date ? new Date(date).toISOString().substring(0, 19) : "",
        published,
      };
    }

    fs.mkdirSync(TABLE_DIR_PATH, { recursive: true });
    fs.writeFileSync(
      path.join(TABLE_DIR_PATH, `postsTable.json`),
      JSON.stringify(fileAttributes),
      "utf-8"
    );
    fs.writeFileSync(
      path.join(TABLE_DIR_PATH, `tagsTable.json`),
      JSON.stringify({
        published: tagsTablePublished,
        unpublished: tagsTableUnpublished,
      }),
      "utf-8"
    );
    fs.writeFileSync(
      path.join(TABLE_DIR_PATH, `seriesTable.json`),
      JSON.stringify({
        published: seriesTablePublished,
        unpublished: seriesTableUnpublished,
      }),
      "utf-8"
    );
  } catch (e) {
    console.error(e);
  }
};

createTable();

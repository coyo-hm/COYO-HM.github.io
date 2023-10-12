const fs = require("fs");
const path = require("path");
const { sync } = require("glob");
const frontMatter = require("front-matter");

const CONTENT_DIR_PATH = path.join(process.cwd(), "content");
const TABLE_DIR_PATH = path.join(process.cwd(), "public/static/table");

const createPostTable = () => {
  const files = sync(`${CONTENT_DIR_PATH}/**/*.md*`).reverse();

  try {
    let fileAttributes = {};
    let tagsTablePublished = { blog: { all: [] }, project: { all: [] } };
    let tagsTableUnpublished = { blog: { all: [] }, project: { all: [] } };

    for (const filePath of files) {
      const file = fs.readFileSync(filePath, { encoding: "utf8" });
      const { attributes } = frontMatter(file);
      const { date, title, tags, description, published } = attributes;

      const postPath = filePath.replace(`${CONTENT_DIR_PATH}/`, "");
      const postKey = postPath.replace(path.extname(filePath), "");
      const postTags = tags.map((tag) =>
        tag.toLowerCase().replace(/\s|-/gi, "_")
      );
      const postMenu = postPath.split("/")[0];

      tagsTableUnpublished[postMenu].all = [
        ...tagsTableUnpublished[postMenu].all,
        postKey,
      ];
      if (published) {
        tagsTablePublished[postMenu].all = [
          ...tagsTablePublished[postMenu].all,
          postKey,
        ];
      }

      postTags.forEach((t) => {
        tagsTableUnpublished[postMenu][t] = tagsTableUnpublished[postMenu][t]
          ? [...tagsTableUnpublished[postMenu][t], postKey]
          : [postKey];

        if (published) {
          tagsTablePublished[postMenu][t] = tagsTablePublished[postMenu][t]
            ? [...tagsTablePublished[postMenu][t], postKey]
            : [postKey];
        }
      });
      fileAttributes[postKey] = {
        ...attributes,
        path: postPath,
        menu: postMenu,
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
  } catch (e) {
    console.error(e);
  }
};

createPostTable();

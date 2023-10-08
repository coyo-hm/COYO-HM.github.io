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
    let tagsTablePublished = {};
    let tagsTableUnpublished = {};
    for (const filePath of files) {
      const file = fs.readFileSync(filePath, { encoding: "utf8" });
      const { attributes } = frontMatter(file);
      const { date, title, tags, description, published } = attributes;
      const fileKey = filePath
        .replace(`${CONTENT_DIR_PATH}/`, "")
        .replace(path.extname(filePath), "");
      const fileTags = tags.map((tag) =>
        tag.toLowerCase().replace(/\s|-/gi, "_")
      );
      fileTags.forEach((t) => {
        tagsTableUnpublished[t] = tagsTableUnpublished[t]
          ? [...tagsTableUnpublished[t], fileKey]
          : [fileKey];
        if (published) {
          tagsTablePublished[t] = tagsTablePublished[t]
            ? [...tagsTablePublished[t], fileKey]
            : [fileKey];
        }
      });
      fileAttributes[fileKey] = {
        title,
        tags: fileTags,
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
      path.join(TABLE_DIR_PATH, `publishedPostsTagTable.json`),
      JSON.stringify(tagsTablePublished),
      "utf-8"
    );
    fs.writeFileSync(
      path.join(TABLE_DIR_PATH, `unpublishedPostsTagTable.json`),
      JSON.stringify(tagsTableUnpublished),
      "utf-8"
    );
  } catch (e) {
    console.error(e);
  }
};

createPostTable();

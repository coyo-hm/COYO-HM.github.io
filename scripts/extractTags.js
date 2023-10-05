const fs = require("fs");
const path = require("path");
const { sync } = require("glob");
const frontMatter = require("front-matter");

const CONTENT_DIR_PATH = path.join(process.cwd(), "content");
const TABLE_DIR_PATH = path.join(process.cwd(), "public/static/table");

const createTagsTable = () => {
  const files = sync(`${CONTENT_DIR_PATH}/**/*.md*`).reverse();

  try {
    let tags = {};
    for (const filePath of files) {
      const file = fs.readFileSync(filePath, { encoding: "utf8" });
      const { attributes } = frontMatter(file);
      const fm = attributes;
      const fileKey = filePath
        .replace(`${CONTENT_DIR_PATH}/`, "")
        .replace(path.extname(filePath), "");
      const fileTags = fm?.tags.map((tag) =>
        tag.toLowerCase().replace(/\s|-/gi, "_")
      );
      tags[fileKey] = fileTags;
    }
    fs.mkdirSync(TABLE_DIR_PATH, { recursive: true });
    fs.writeFileSync(
      path.join(TABLE_DIR_PATH, `tags.json`),
      JSON.stringify(tags),
      "utf-8"
    );
  } catch (e) {
    console.error(e);
  }
};

createTagsTable();

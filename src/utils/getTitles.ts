import parseHeadingToId from "@utils/parseHeadingToId";

const getTitles = (content: string) =>
  content
    .split("\n")
    .filter((t) => t.includes("# ") && t[0] === "#")
    .map((item) => {
      const title = item.split("# ")[1].replace(/`|\*/g, "").trim();
      return {
        title,
        id: parseHeadingToId(title),
        depth: item.match(/#/g)?.length || 0,
      };
    });

export default getTitles;

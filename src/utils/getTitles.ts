import parseHeadingToId from "@utils/parseHeadingToId";

type TitleType = { title: string; id: string; depth: number };

const getTitles = (content: string) => {
  let isCode = false;
  const contents = content
    .split("\n")
    .filter((t) => (t.includes("# ") && t[0] === "#") || t.includes("```"));

  return contents.reduce((titles: TitleType[], item: string) => {
    if (!isCode && item.includes("# ")) {
      const title = item.split("# ")[1].replace(/`|\*/g, "").trim();
      return [
        ...titles,
        {
          title,
          id: parseHeadingToId(title),
          depth: item.match(/#/g)?.length || 0,
        },
      ];
    }
    if (item.includes("```")) {
      isCode = !isCode;
    }
    return titles;
  }, []);
};

export default getTitles;

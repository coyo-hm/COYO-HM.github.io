import { PostTitleType } from "@models/post";

const getHeaders = (content: string): PostTitleType[] => {
  const titles = content.split(`\n`).filter((t) => t.includes("# "));
  return titles
    .filter((str) => str[0] === "#")
    .map((item) => {
      let count = item.match(/#/g)?.length || 0;
      const title = item.split("# ")[1].replace(/`|\*/g, "").trim();
      return {
        id: title.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/g, ""),
        title,
        count,
      };
    });
};

export default getHeaders;

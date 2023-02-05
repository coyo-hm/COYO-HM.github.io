const getHeaders = (content: string) => {
  const titles = content.split(`\n`).filter((t) => t.includes("# "));
  return titles
    .filter((str) => str[0] === "#")
    .map((item) => {
      let count = item.match(/#/g)?.length || 0;
      return {
        title: item.split("# ")[1].replace(/`/g, "").trim(),
        count,
      };
    });
};

export default getHeaders;

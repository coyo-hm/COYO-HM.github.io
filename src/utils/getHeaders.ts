const getHeaders = (content: string) => {
  const titles = content.split(`\n`).filter((t) => t.includes("# "));
  return titles
    .filter((str) => str[0] === "#")
    .map((item) => {
      //   console.log(item, item.match(/#/g)?.length);

      let count = item.match(/#/g)?.length || 0;
      //   if (count) {
      //     count = count * 10;
      //   } else {
      //     count = 0;
      //   }
      return {
        title: item.split("# ")[1].replace(/`/g, "").trim(),
        count,
      };
    });
};

export default getHeaders;

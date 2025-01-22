const parseHeadingToId = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();

export default parseHeadingToId;

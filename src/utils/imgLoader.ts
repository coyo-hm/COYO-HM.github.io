const prefix =
  process.env.NODE_ENV === "production" ? "https://coyo-hm.github.io" : "";

const imgLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) =>
  `${src.includes("http") ? "" : prefix}${src}?w=${width}&q=${quality || 75}`;

export default imgLoader;

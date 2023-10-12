const prefix =
  process.env.NODE_ENV === "production" ? "https://coyo-hm.github.io" : "";

export default function imgLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return `${src.includes("http") ? "" : prefix}${src}?w=${width}&q=${
    quality || 75
  }`;
}

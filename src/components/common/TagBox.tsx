import TAG_COLOR from "@constants/TagColor";

const TagBox = ({ tag }: { tag: string }) => {
  let bgColor = TAG_COLOR.BG[tag] || "bg-neutral-400";
  return (
    <div
      key={tag}
      className={`shrink-0 rounded py-0.5 px-1 text-xs text-neutral-100 ${bgColor}`}
    >
      #{tag}
    </div>
  );
};

export default TagBox;

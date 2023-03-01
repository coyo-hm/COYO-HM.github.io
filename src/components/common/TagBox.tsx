import TAG_COLOR from "@constants/TagColor";

const TagBox = ({ tag }: { tag: string }) => {
  let bgColor = TAG_COLOR.BG[tag] || "bg-neutral-400";
  return (
    <div
      key={tag}
      className={`shrink-0 text-xs rounded p-1 mr-2 text-neutral-100 ${bgColor}`}
    >
      #{tag}
    </div>
  );
};

export default TagBox;

import TAG_INFO from "@constants/tag_info";

const TagColorBox = ({ tag }: { tag: string }) => {
  const tagInfo = TAG_INFO[tag];
  const bgColor = tagInfo?.bg || "bg-neutral-400";

  return (
    <div
      key={tag}
      className={`shrink-0 rounded py-0.5 px-1 text-xs text-neutral-100 ${bgColor}`}
    >
      #{tagInfo?.label || tag}
    </div>
  );
};

export default TagColorBox;

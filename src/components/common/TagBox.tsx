import TagInfo from "@constants/TagInfo";

const TagBox = ({ tag }: { tag: string }) => {
  const tagInfo = TagInfo[tag];
  const bgColor = tagInfo.bg || "bg-neutral-400";

  return (
    <div
      key={tag}
      className={`shrink-0 rounded py-0.5 px-1 text-xs text-neutral-100 ${bgColor}`}
    >
      #{tagInfo?.label || tag}
    </div>
  );
};

export default TagBox;

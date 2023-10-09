import TAG_COLOR from "@constants/TagColor";
import Link from "next/link";
import TagInfo from "@constants/TagInfo";

const TagsList = ({ tags, slug: path }: { tags: string[]; slug: string }) => {
  return (
    <div className={`pt-4 flex flex-row items-center flex-wrap`}>
      <h1 className={`text-lg mr-3 mb-2`}>Tags</h1>
      {tags.map((tag) => {
        const tagInfo = TagInfo[tag];
        const tagHoverColor =
          tagInfo?.bg_hover || "hover:bg-blue-700 dark:hover:bg-blue-700";
        return (
          <Link
            className={`mr-2 mb-2 h-6 p-1 w-fit break-keep text-xs rounded bg-neutral-100 dark:bg-neutral-700 hover:text-white ${tagHoverColor}`}
            href={`/blog/0/${tag}`}
            key={tag}
          >
            #{tagInfo?.label || tag}
          </Link>
        );
      })}
    </div>
  );
};

export default TagsList;

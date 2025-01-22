import { ForwardedRef, forwardRef } from "react";
import Link from "next/link";
import TagInfo from "@constants/tagInfo";
import { TagWithCountType } from "@models/tag";

const SpinningTags = forwardRef(function TagList(
  { tagList }: { tagList: TagWithCountType[] },
  tagListRef?: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className={`flex flex-nowrap border-y-2 border-black dark:border-neutral-50 py-2 text-base my-4`}
    >
      <span className={"font-bold mr-4 cursor-default"}>#tags</span>
      <div className={`overflow-hidden relative flex-grow`}>
        <div
          id={"tags"}
          className={`absolute whitespace-nowrap paused animate-scrollLeft`}
          ref={tagListRef}
        >
          {[...tagList, ...tagList, ...tagList].map(({ tag }, idx) => (
            <Link
              href={`/post/page/0/${tag}`}
              key={`${tag}_${idx}`}
              className={`whitespace-nowrap mr-2 hover:font-bold  ${
                TagInfo[tag]?.text_hover || "hover:text-blue-700"
              }  hover:-translate-y-0.5 hover:duration-300 hover:ease-in-out`}
              aria-label={`link-${tag}`}
            >
              {TagInfo[tag]?.label || tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});
export default SpinningTags;

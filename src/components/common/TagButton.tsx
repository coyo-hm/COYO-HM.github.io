import { ButtonHTMLAttributes } from "react";
import { RxCross1, RxPlus } from "react-icons/rx";
import TAG_COLOR from "@constants/TagColor";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  tag: string;
  isSelectedTag: boolean;
}

const TagButton = ({ tag, isSelectedTag, ...rest }: Props) => {
  return (
    <button
      key={tag}
      className={`flex gap-2 justify-center items-center py-1 px-3 text-xs text-neutral-800 dark:text-neutral-100 rounded-3xl border overflow-hidden relative ${
        rest?.className
      } ${TAG_COLOR.BORDER[tag] || "border-blue-700"}`}
      type={"button"}
      {...rest}
    >
      <div
        className={`w-full h-full absolute opacity-10 hover:opacity-20 ${
          TAG_COLOR.BG[tag] ? TAG_COLOR.BG[tag] : "bg-blue-700"
        }`}
      />
      {isSelectedTag ? <RxCross1 size={12} /> : <RxPlus size={14} />}
      {tag}
    </button>
  );
};

export default TagButton;

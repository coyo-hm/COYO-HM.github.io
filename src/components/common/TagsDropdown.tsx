import Link from "next/link";
import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { RxReset } from "react-icons/rx";
import { TagWithCountType } from "@type/index";
import useInput from "@hooks/useInput";
import TagButton from "@components/common/TagButton";

interface Props {
  allTags: TagWithCountType[];
  prevSelectedTags: string[];
  path: string;
}

const TagsDropdown = ({ allTags, prevSelectedTags = [], path }: Props) => {
  const [keyword, onChangeKeyword, setKeyword] = useInput("");
  const [selectedTags, setSelectedTags] = useState<string[]>(prevSelectedTags);
  const [showTags, setShowTags] = useState<TagWithCountType[]>(allTags);

  useEffect(() => {
    searchTags();
  }, [keyword]);

  const onClickTag = (tag: string) => {
    setSelectedTags((prevState) => {
      if (prevState.includes(tag)) {
        return prevState.filter((prev) => prev !== tag);
      } else {
        return [...prevState, tag];
      }
    });
  };

  const searchTags = (e?: any) => {
    if (!!e) {
      e.preventDefault();
    }

    setShowTags(
      allTags.filter(({ tag }) =>
        tag.toUpperCase().includes(keyword.toUpperCase())
      )
    );
  };

  return (
    <div className={`flex flex-col gap-4 border-y-2 border-blue-700 py-3`}>
      <form className={`flex gap-1 items-center justify-end`}>
        <label className={`flex gap-1 items-center justify-start flex-grow`}>
          <input
            value={keyword}
            onChange={onChangeKeyword}
            className={`rounded-2xl bg-neutral-500/10 pl-4 py-1 border-none outline-0 text-sm text-neutral-700 dark:text-neutral-200`}
          />
          <button
            type={"submit"}
            onClick={searchTags}
            className={
              "p-2 bg-white dark:bg-neutral-500/20 rounded-2xl hover:bg-neutral-200 dark:hover:bg-neutral-700 text-inherit hover:text-blue-700"
            }
          >
            <RiSearchLine />
          </button>
        </label>
        <button
          className={`p-2 bg-white dark:bg-neutral-500/20 flex gap-2 items-center text-xs rounded-2xl hover:bg-neutral-200 dark:hover:bg-neutral-700 text-inherit hover:text-blue-700`}
          onClick={() => setSelectedTags([])}
          type={"button"}
        >
          <RxReset size={16} />
          초기화
        </button>
        <Link
          href={{
            pathname: path,
            query: {
              page: 0,
              tags: selectedTags,
            },
          }}
          className={`p-2 bg-white dark:bg-neutral-500/20 text-xs rounded-2xl hover:bg-neutral-200 dark:hover:bg-neutral-700 text-inherit hover:text-blue-700`}
        >
          태그 적용하기
        </Link>
      </form>
      {selectedTags.length > 0 && (
        <section
          className={`flex items-center gap-1 border-b-2 border-blue-700/25 pb-3`}
        >
          <span className={`text-xs pr-1 mr-1 border-r-neutral-400 border-r-2`}>
            선택된 태그
          </span>
          {selectedTags.map((tag) => (
            <TagButton
              key={tag}
              tag={tag}
              onClick={(e) => onClickTag(tag)}
              isSelectedTag={true}
            />
          ))}
        </section>
      )}
      {showTags.length > 0 && (
        <ul className={"flex flex-wrap gap-1.5"}>
          {showTags.map(({ tag }) => (
            <TagButton
              key={tag}
              tag={tag}
              isSelectedTag={selectedTags.includes(tag)}
              onClick={() => onClickTag(tag)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsDropdown;

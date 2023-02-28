import React from "react";
import { useRouter } from "next/router";
import { RxCross1 } from "react-icons/rx";
import { TagWithCountType } from "@type/index";
import useScrollBlock from "@hooks/useScrollBlock";
import useSidebar from "@hooks/useSidebar";
import TAG_COLOR from "@constants/TagColor";

const TagTitle = ({ tag, count }: TagWithCountType) => {
  const router = useRouter();
  const { closeSidebar } = useSidebar();

  const onClickTag = (e: React.MouseEvent<HTMLButtonElement>, tag: string) => {
    e.preventDefault();
    closeSidebar();
    router.push(`/blog/tags/${tag}`);
  };

  let tagColor = TAG_COLOR.TEXT_HOVER[tag] || `hover:text-blue-700`;
  return (
    <li>
      <button
        onClick={(e) => onClickTag(e, tag)}
        className={`break-normal transition-all hover:text-lg ${tagColor}`}
      >
        {tag} ({count})
      </button>
    </li>
  );
};

const SideBar = ({ tags }: { tags: TagWithCountType[] }) => {
  const { closeSidebar } = useSidebar();
  useScrollBlock();

  return (
    <div className={`inset-0 m-0 p-0 fixed w-screen h-full`}>
      <div
        className={`fixed inset-0 m-0 p-0 w-full h-full opacity-70 bg-neutral-800`}
      />
      <div
        className={`fixed inset-0 flex flex-col px-4 py-4 w-[300px] h-full bg-white/90 overflow-y-auto dark:bg-neutral-900/90 dark:text-neutral-200`}
      >
        <h1 className={"font-extrabold text-xl py-2 w-full flex"}>
          <button onClick={closeSidebar} className={`hover:text-blue-700 mr-4`}>
            <RxCross1 size={24} strokeWidth={"1"} />
          </button>
          Tag
        </h1>
        <ul className={`pl-10 grid gap-1 grid-cols-1`}>
          {tags.map((tag) => (
            <TagTitle {...tag} key={tag.tag} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

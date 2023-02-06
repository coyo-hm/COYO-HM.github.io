import React from "react";
import { useRouter } from "next/router";
import { RxCross1 } from "react-icons/rx";
import { TagWithCountType } from "@type/index";
import useScrollBlock from "@hooks/useScrollBlock";
import useSidebar from "@hooks/useSidebar";

const SideBar = ({ tags }: { tags: TagWithCountType[] }) => {
  const router = useRouter();
  const { closeSidebar } = useSidebar();

  useScrollBlock();

  const onClickTag = (e: React.MouseEvent<HTMLButtonElement>, tag: string) => {
    e.preventDefault();
    closeSidebar();
    router.push(`/blog/tags/${tag}`);
  };

  return (
    <div className={`inset-0 m-0 p-0 fixed w-screen h-full`}>
      <div
        className={`fixed inset-0 m-0 p-0 w-full h-full opacity-70 bg-neutral-800`}
      />
      <div
        className={`fixed inset-0 flex flex-col p-4 w-[300px] h-full bg-white overflow-y-auto`}
      >
        <button onClick={closeSidebar} className={`hover:text-blue-700`}>
          <RxCross1 size={24} />
        </button>
        <h1 className={"pl-6 font-extrabold text-xl py-2 w-full"}>#Tag</h1>
        <ul className={`pl-10 grid gap-1 grid-cols-1`}>
          {tags.map(({ tag, count }) => (
            <li key={tag}>
              <button
                onClick={(e) => onClickTag(e, tag)}
                className={`break-normal transition-all hover:text-blue-700 hover:text-lg`}
              >
                {tag} ({count})
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

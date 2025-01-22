import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import useScrollTitle from "@hooks/useScrollTitle";
import getTitles from "@utils/getTitles";

const TableOfContents = ({ content }: { content: string }) => {
  const titles = getTitles(content);
  const pathname = usePathname();
  const [activeHeaderId, setActiveHeaderId] = useState("");

  const onClickEvent = useScrollTitle(setActiveHeaderId);

  const onClickUp = () => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    document
      .getElementById("main-header")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickDownButton = () => {
    // document.body.scrollTop = document.body.scrollHeight;
    // window.scroll(0, document.body.scrollHeight);
    document
      .getElementById("main-footer-copyright")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useIntersectionObserver(pathname, setActiveHeaderId);

  return (
    <div
      className={`w-52 shrink-0 h-full top-0 py-[50px] sticky flex flex-col flex-nowrap justify-center items-center max-md:static max-md:h-fit max-md:w-full max-md:py-0`}
    >
      <button
        onClick={onClickUp}
        className={`hover:text-blue-700 max-md:hidden`}
      >
        <FaChevronUp size={32} />
      </button>
      <div
        id={"toc"}
        className={`w-full flex flex-col border-l-2 border-l-blue-100 dark:border-l-blue-900 my-4 rounded-none max-md:border-0 max-md:p-4 max-md:bg-neutral-200 max-md:rounded-xl dark:bg-neutral-700`}
      >
        {titles.map(({ title, depth, id }) => {
          return (
            <Link
              key={title}
              href={`#${id}`}
              scroll={false}
              className={`header-${depth} ${
                activeHeaderId === id && "bg-blue-100 dark:bg-blue-900"
              }`}
              onClick={() => {
                onClickEvent(id);
                // setActiveHeaderId(id);
              }}
            >
              {title}
            </Link>
          );
        })}
      </div>
      <button onClick={onClickDownButton}>
        <FaChevronDown
          size={32}
          className={`hover:text-blue-700 max-md:hidden`}
        />
      </button>
    </div>
  );
};

export default TableOfContents;

import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import getHeaders from "@utils/getHeaders";
import { usePathname } from "next/navigation";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import useScrollTitle from "@hooks/useScrollTitle";

const TableOfContents = ({ content }: { content: string }) => {
  const headers = getHeaders(content);
  const pathname = usePathname();
  const [activeHeaderId, setActiveHeaderId] = useState("");

  const onClickEvent = useScrollTitle();

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
      .getElementById("main-footer")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useIntersectionObserver(pathname, setActiveHeaderId);

  return (
    <div
      className={`w-52 shrink-0 h-full top-0 py-[50px] sticky flex flex-col flex-nowrap justify-center items-center max-md:static max-md:h-fit max-md:w-full`}
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
        {headers.map(({ title, count, id }) => {
          return (
            <Link
              key={title}
              href={`#${id}`}
              scroll={false}
              className={`hover:text-blue-700 box-decoration-slice py-1.5 pr-1 text-xs ${
                activeHeaderId === id ? "bg-blue-100 dark:bg-blue-900" : ""
              } header-${count}`}
              onClick={() => onClickEvent(id)}
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

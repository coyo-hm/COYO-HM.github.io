import Link from "next/link";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import getHeaders from "@utils/getHeaders";

const TableOfContents = ({ content }: { content: string }) => {
  const headers = getHeaders(content);
  const activeHeader = "";

  const onClickUp = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const onClickDownButton = () => {
    // console.log(window.outerHeight, document.body.scrollHeight);
    document.body.scrollTop = document.body.scrollHeight;
    window.scroll(0, document.body.scrollHeight);
    // const contentWrapperRef = document.getElementById("contentWrapper");
    // if (contentWrapperRef) {
    //   contentWrapperRef.scrollTo(0, window.scrollHeight);
    // }
  };

  return (
    <div
      className={`w-52 shrink-0 h-full top-0 py-[50px] sticky flex flex-col flex-nowrap justify-center items-center max-md:static max-md:h-fit max-md:w-full`}
      id={"toc"}
    >
      <button
        onClick={onClickUp}
        className={`hover:text-blue-700 max-md:hidden`}
      >
        <FaChevronUp size={32} />
      </button>
      <div
        className={`w-full grid gap-1.5 py-1 border-l border-l-blue-700 my-4 rounded-none max-md:border-0 max-md:p-4 max-md:bg-neutral-200 max-md:rounded-xl`}
      >
        {headers.map(({ title, count }) => {
          return (
            <Link
              key={title}
              href={`#${title.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi, "")}`}
              className={`hover:text-blue-700 ${
                activeHeader === title ? "bg-blue-100" : ""
              } header-${count}`}
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

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import getHeaders from "@utils/getHeaders";

const TableOfContents = ({ content }: { content: string }) => {
  const headers = getHeaders(content);
  const headersRef = useRef<any>({});
  const [activeHeaderId, setActiveHeaderId] = useState("");

  useEffect(() => {
    headersRef.current = {};
    const callback: IntersectionObserverCallback = (headers) => {
      headersRef.current = headers.reduce((dict: any, headerElement) => {
        dict[headerElement.target.id] = headerElement;
        return dict;
      }, headersRef.current);

      const visibleHeaders: IntersectionObserverEntry[] = [];

      Object.keys(headersRef.current).forEach((key) => {
        const headerElement = headersRef.current[key];
        if (headerElement.isIntersecting) {
          visibleHeaders.push(headerElement);
        }
      });
      setActiveHeaderId(visibleHeaders[0].target.id);
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-50px 0px 0px 0px",
    });

    headers.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!!element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headers]);

  const onClickUp = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const onClickDownButton = () => {
    document.body.scrollTop = document.body.scrollHeight;
    window.scroll(0, document.body.scrollHeight);
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
        className={`w-full flex flex-col py-1 border-l border-l-blue-700 my-4 rounded-none max-md:border-0 max-md:p-4 max-md:bg-neutral-200 max-md:rounded-xl dark:bg-neutral-700`}
      >
        {headers.map(({ title, count, id }) => {
          return (
            <Link
              key={title}
              href={`#${id}`}
              className={`hover:text-blue-700 py-1 ${
                activeHeaderId === id ? "bg-blue-100" : ""
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

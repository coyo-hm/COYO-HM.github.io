import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  currPage,
  startPage,
  endPage,
  path,
}: {
  currPage: number;
  startPage: number;
  endPage: number;
  path: string;
}) => {
  const getPath = (page: number) => {
    return `${path}?page=${page}`;
  };

  return (
    <div className={`flex text-blue-700 justify-center items-center my-2.5`}>
      <Link
        href={getPath(Math.max(startPage, currPage - 1))}
        className={`hover:text-blue-900`}
      >
        <IoIosArrowBack />
      </Link>
      <div
        className={`grid grid-flow-col grid-cols-[repeat(auto-fill, auto)] gap-3 mx-2 text-base place-items-center text-center`}
      >
        {Array(endPage - startPage)
          .fill(0)
          .map((v: number, i) => {
            return (
              <Link
                href={getPath(i + startPage)}
                className={`hover:text-blue-900 ${
                  i + startPage === currPage
                    ? "h-8 w-8 border-4 rounded-full border-blue-700 text-center leading-6 font-semibold"
                    : ""
                }`}
                key={i + startPage}
              >
                {i + startPage + 1}
              </Link>
            );
          })}
      </div>
      <Link
        className={`hover:text-blue-900`}
        href={getPath(Math.min(endPage, currPage + 1))}
      >
        <IoIosArrowForward />
      </Link>
    </div>
  );
};

export default Pagination;

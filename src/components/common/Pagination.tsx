import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  currPage,
  startPage,
  endPage,
  path,
  selectedTags,
}: {
  currPage: number;
  startPage: number;
  endPage: number;
  path: string;
  selectedTags: string[];
}) => {
  const getPath = (page: number) => {
    return {
      pathname: path,
      query: {
        tags: selectedTags,
        page: page,
      },
    };
  };

  return (
    <div className={`flex text-blue-700 justify-center items-center my-5`}>
      <Link
        href={getPath(currPage - 1)}
        className={`hover:text-blue-900`}
        onClick={(e) => startPage === currPage && e.preventDefault()}
      >
        <IoIosArrowBack />
      </Link>
      <div className={`flex gap-3 items-center justify-center mx-2 text-base`}>
        {Array(endPage - startPage)
          .fill(0)
          .map((v: number, i) => {
            return (
              <Link
                href={getPath(i + startPage)}
                className={`hover:text-blue-900 flex items-center justify-center ${
                  i + startPage === currPage
                    ? "h-9 w-9 rounded-full border-blue-700 font-semibold border-4"
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
        href={getPath(currPage + 1)}
        onClick={(e) => endPage === currPage + 1 && e.preventDefault()}
      >
        <IoIosArrowForward />
      </Link>
    </div>
  );
};

export default Pagination;

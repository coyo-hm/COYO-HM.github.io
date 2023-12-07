import Link from "next/link";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { categoryType } from "@constants/category";

const pageVariants = {
  initial: {
    color: "inherit",
  },
  animate: {
    color: "inherit",
    borderBottom: "2px solid rgb(29, 78, 216)",
    transition: {
      type: "tween",
      stiffness: 100,
      dumpling: 0,
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.2,
    color: "rgb(29, 78, 216)",
  },
};

const Pagination = ({
  currPage,
  startPage,
  endPage,
  tag,
  category,
}: {
  currPage: number;
  startPage: number;
  endPage: number;
  tag?: string;
  category: categoryType;
}) => {
  const getPath = (page: number) =>
    tag ? `/${category}/page/${page}/${tag}` : `/${category}/page/${page}`;
  return (
    <div className={`flex justify-center items-center my-5 text-lg`}>
      <Link
        href={getPath(currPage - 1)}
        className={`hover:text-blue-700 `}
        onClick={(e) => startPage === currPage && e.preventDefault()}
      >
        <IoIosArrowBack />
      </Link>
      <div className={`flex gap-3 items-center justify-center mx-2 text-base`}>
        {Array(endPage - startPage)
          .fill(0)
          .map((v: number, i) => {
            return (
              <Link href={getPath(i + startPage)} key={i + startPage}>
                <motion.div
                  className={`flex items-center justify-center w-3 font-light`}
                  variants={pageVariants}
                  initial={"initial"}
                  animate={i + startPage === currPage ? "animate" : ""}
                  whileHover={"hover"}
                >
                  {i + startPage + 1}
                </motion.div>
              </Link>
            );
          })}
      </div>
      <Link
        className={`hover:text-blue-700`}
        href={getPath(currPage + 1)}
        onClick={(e) => endPage === currPage + 1 && e.preventDefault()}
      >
        <IoIosArrowForward />
      </Link>
    </div>
  );
};

export default Pagination;

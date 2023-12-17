import { useEffect, useState } from "react";
import { DEFAULT_NUMBER_OF_POST } from "@constants/post";
import { showType } from "@models/post";
import getLastPage from "@utils/getLastPage";

const usePage = (total: number, currPage: number, size: number) => {
  const lastPage = getLastPage(total, size);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(0);

  useEffect(() => {
    let start = currPage - 2;
    if (start < 0) {
      start = 0;
    }

    let end = start + 4;
    if (end > lastPage) {
      end = lastPage;
    }

    setStartPage(start);
    setEndPage(end);
  }, [currPage, lastPage]);

  return { lastPage, startPage, endPage };
};

export default usePage;

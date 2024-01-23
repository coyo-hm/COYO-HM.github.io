import { useEffect, useState } from "react";
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

    let end = start + 5;
    if (end > lastPage) {
      end = lastPage;
    }

    setStartPage(start);
    setEndPage(end);
  }, [currPage, lastPage]);

  return { lastPage, startPage, endPage };
};

export default usePage;

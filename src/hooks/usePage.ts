import { DEFAULT_NUMBER_OF_POST } from "@src/constants";
import { useEffect, useState } from "react";
import { showType } from "@src/models";

const usePage = (total: number, currPage: number, showType: showType) => {
  const lastPage = Math.max(
    1,
    Math.ceil(total / DEFAULT_NUMBER_OF_POST[showType])
  );
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

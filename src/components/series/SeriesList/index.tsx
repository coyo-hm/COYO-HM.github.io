import Link from "next/link";
import usePage from "@hooks/usePage";
import { SeriesInfoType } from "@models/series";
import CATEGORY from "@constants/category";
import CONSTANTS from "@constants/index";
import { totalSeries } from "@constants/contents";
import Pagination from "@components/common/Pagination";
import SeriesItem from "@components/series/SeriesList/SeriesItem";

interface Props {
  page: number;
  series: SeriesInfoType[];
}

const SeriesList = ({ page, series }: Props) => {
  const { startPage, endPage } = usePage(
    totalSeries,
    page,
    CONSTANTS.DEFAULT_NUMBER_OF_POST.SERIES
  );
  return (
    <main>
      <h1 className={`page-title mt-14 mb-24`}>{CATEGORY.series.label}</h1>
      <div className={`text-neutral-500 text-sm text-right`}>
        시리즈 수: {totalSeries}
      </div>
      <ul className={`w-full mt-5 flex flex-col flex-nowrap gap-3`}>
        {series.map((info) => (
          <Link href={`/series/${info.id}`} key={info.id}>
            <SeriesItem {...info} />
          </Link>
        ))}
      </ul>
      <Pagination
        currPage={page}
        startPage={startPage}
        endPage={endPage}
        category={"series"}
      />
    </main>
  );
};
export default SeriesList;

import Link from "next/link";
import usePage from "@hooks/usePage";
import { SeriesAttributeType } from "@models/series";
import CATEGORY from "@constants/category";
import { DEFAULT_NUMBER_OF_POST } from "@constants/post";
import Pagination from "@components/common/Pagination";
import SeriesItem from "@components/series/SeriesList/SeriesItem";

interface Props {
  page: number;
  seriesTotal: number;
  series: SeriesAttributeType[];
}

const SeriesList = ({ page, seriesTotal, series }: Props) => {
  const { startPage, endPage } = usePage(
    seriesTotal,
    page,
    DEFAULT_NUMBER_OF_POST.series
  );
  return (
    <main>
      <h1 className={`page-title mt-14 mb-24`}>{CATEGORY.series.label}</h1>
      <div className={`text-neutral-500 text-sm text-right`}>
        시리즈 수: {seriesTotal}
      </div>
      <ul className={`w-full mt-5 flex flex-col flex-nowrap gap-3`}>
        {series.map((info) => (
          <Link href={`/series/${info.key}`} key={info.key}>
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

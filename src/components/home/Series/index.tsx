import Link from "next/link";
import CATEGORY from "@constants/category";
import { SeriesInfoType } from "@models/series";
import useHorizontalScroll from "@hooks/useHorizontalScroll";
import SeriesFlippedCard from "./SeriesFlippedCard";

interface Props {
  allSeriesInfo: SeriesInfoType[];
}

const Series = ({ allSeriesInfo }: Props) => {
  const seriesRef = useHorizontalScroll();

  return (
    <section>
      <Link
        href={CATEGORY.series.link}
        aria-label={"link-series"}
        className={`page-subtitle flex justify-between mt-10 mb-4 hover:text-blue-700`}
      >
        Series
      </Link>
      <div
        className={"flex gap-5 overflow-auto pb-10 px-5 scrollbar-hide"}
        ref={seriesRef}
      >
        {allSeriesInfo.map(({ id, ...rest }) => (
          <SeriesFlippedCard key={id} id={id} {...rest} />
        ))}
      </div>
    </section>
  );
};

export default Series;

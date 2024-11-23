import Link from "next/link";
import CATEGORY from "@constants/category";
import { SeriesAttributeTableType } from "@models/series";
import useHorizontalScroll from "@hooks/useHorizontalScroll";
import SeriesFlippedCard from "./SeriesFlippedCard";

interface Props {
  allSeriesInfo: SeriesAttributeTableType;
}

const Series = ({ allSeriesInfo }: Props) => {
  const seriesRef = useHorizontalScroll();
  const sortedSeriesKey = Object.keys(allSeriesInfo).sort(
    (a, b) => allSeriesInfo[b].posts.length - allSeriesInfo[a].posts.length
  );

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
        {sortedSeriesKey.map((seriesKey) => (
          <SeriesFlippedCard
            id={seriesKey}
            key={seriesKey}
            {...allSeriesInfo[seriesKey]}
          />
        ))}
      </div>
    </section>
  );
};

export default Series;

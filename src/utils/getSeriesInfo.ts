import SeriesTable from "public/static/table/seriesTable.json";
import { SeriesInfoNode } from "@models/series";

const getSeriesInfo = async (seriesKey: string): Promise<SeriesInfoNode> => {
  const seriesInfoTable: { [key: string]: SeriesInfoNode } =
    process.env.NODE_ENV === "development"
      ? SeriesTable.unpublished
      : SeriesTable.published;
  return seriesInfoTable[seriesKey];
};
export default getSeriesInfo;

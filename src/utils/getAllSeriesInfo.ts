import SeriesTable from "public/static/table/seriesTable.json";
import { SeriesInfoTable } from "@models/series";

const getAllSeriesInfo = async (): Promise<SeriesInfoTable> => {
  return process.env.NODE_ENV === "development"
    ? SeriesTable.unpublished
    : SeriesTable.published;
};
export default getAllSeriesInfo;

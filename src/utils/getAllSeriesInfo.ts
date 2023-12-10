import SeriesTable from "public/static/table/seriesTable.json";
import { SeriesAttributeTableType } from "@models/series";

const getAllSeriesInfo = async (): Promise<SeriesAttributeTableType> => {
  return process.env.NODE_ENV === "development"
    ? SeriesTable.unpublished
    : SeriesTable.published;
};
export default getAllSeriesInfo;

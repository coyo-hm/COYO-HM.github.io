import SeriesTable from "public/static/table/seriesTable.json";
import { SeriesAttributeTableType, SeriesAttributeType } from "@models/series";

const getSeries = async (
  page: number,
  size: number
): Promise<SeriesAttributeType[]> => {
  const seriesInfo: SeriesAttributeTableType =
    process.env.NODE_ENV === "development"
      ? SeriesTable.unpublished
      : SeriesTable.published;

  const seriesList = Object.keys(seriesInfo).map((key) => ({
    key,
    ...seriesInfo[key],
  }));

  const sortedSeriesList = seriesList.sort((a, b) => {
    if (a.endDate === "") {
      return 1;
    }

    if (b.endDate === "") {
      return -1;
    }

    const dateA = new Date(a.endDate);
    const dateB = new Date(b.endDate);

    if (dateA < dateB) {
      return 1;
    }
    if (dateA > dateB) {
      return -1;
    }

    return 0;
  });

  return sortedSeriesList.slice(page * size, (page + 1) * size);
};

export default getSeries;

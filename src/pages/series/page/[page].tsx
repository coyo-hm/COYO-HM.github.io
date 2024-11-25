import { GetStaticPaths, GetStaticProps } from "next";
import metadata from "@config/index";
import { DEFAULT_NUMBER_OF_POST } from "@constants/post";
import CATEGORY from "@constants/category";
import PageSeo from "@components/common/PageSEO";
import SeriesList from "@components/series/SeriesList";
import { SeriesAttributeType } from "@models/series";
import getAllSeriesInfo from "@utils/getAllSeriesInfo";
import getLastPage from "@utils/getLastPage";
import getSeries from "@utils/getSeries";
import getBlurImg from "@utils/getBlurImg";

const Series = (props: {
  series: SeriesAttributeType[];
  seriesTotal: number;
  page: number;
}) => {
  return (
    <>
      <PageSeo
        title={CATEGORY.series.label}
        description={metadata.description}
        url={metadata.siteUrl + `series`}
      />
      <SeriesList {...props} />
    </>
  );
};

export default Series;

export const getStaticPaths: GetStaticPaths = async () => {
  const allSeriesInfo = await getAllSeriesInfo();
  const total = Object.keys(allSeriesInfo).length;
  const size = DEFAULT_NUMBER_OF_POST["series"];
  const paths = new Array(getLastPage(total, size)).fill(0).map((_, p) => ({
    params: { page: "" + p },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = params as { page: string };
  const allSeriesInfo = await getAllSeriesInfo();
  const seriesInfo = await getSeries(+page, DEFAULT_NUMBER_OF_POST["series"]);

  const series = await Promise.all(
    seriesInfo.map(async (s: SeriesAttributeType) => {
      const blurThumbnail = await getBlurImg(s.thumbnail);
      return { ...s, blurThumbnail };
    })
  );

  return {
    props: {
      series,
      seriesTotal: Object.keys(allSeriesInfo).length,
      page: +page,
    },
  };
};

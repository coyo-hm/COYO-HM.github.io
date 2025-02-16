import { GetStaticPaths, GetStaticProps } from "next";
import metadata from "@config/index";
import CATEGORY from "@constants/category";
import CONSTANTS from "@src/constants";
import { getSeriesInfoList, totalSeries } from "@constants/contents";
import { SeriesInfoType } from "@src/types/series";
import getLastPage from "@utils/getLastPage";
import getBlurImg from "@utils/getBlurImg";
import PageSeo from "@components/common/PageSEO";
import SeriesList from "@components/series/SeriesList";

const Series = (props: { series: SeriesInfoType[]; page: number }) => {
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
  const paths = new Array(
    getLastPage(totalSeries, CONSTANTS.DEFAULT_NUMBER_OF_POST.SERIES)
  )
    .fill(0)
    .map((_, p) => ({
      params: { page: "" + p },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = params as { page: string };
  const seriesInfo = await getSeriesInfoList(+page);

  const series = await Promise.all(
    seriesInfo.map(async (s: SeriesInfoType) => {
      const blurThumbnail = await getBlurImg(s.thumbnail);
      return { ...s, blurThumbnail };
    })
  );

  return {
    props: {
      series,
      page: +page,
    },
  };
};

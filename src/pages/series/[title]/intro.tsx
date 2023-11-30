import { GetStaticPaths, GetStaticProps } from "next";
import getAllSeriesInfo from "@utils/getAllSeriesInfo";
import getSeriesInfo from "@utils/getSeriesInfo";
import { SeriesInfoNode } from "@models/series";

const SeriesIntroPage = ({ seriesInfo }: { seriesInfo: SeriesInfoNode }) => {
  return <div>{JSON.stringify(seriesInfo)}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allSeriesInfo = await getAllSeriesInfo();

  return {
    paths: Object.keys(allSeriesInfo).map((key) => ({
      params: { title: key },
    })),
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { title } = params as { title: string };
  const seriesInfo = await getSeriesInfo(title);

  return {
    props: {
      seriesInfo,
    },
  };
};
export default SeriesIntroPage;

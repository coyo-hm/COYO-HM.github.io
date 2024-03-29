import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

import metadata from "@config/index";
import { DEFAULT_NUMBER_OF_POST } from "@constants/post";
import { CATEGORY_INFO } from "@constants/category";
import PageSeo from "@components/SEO/PageSEO";
import Pagination from "@components/Pagination";
import usePage from "@hooks/usePage";
import { SeriesAttributeType } from "@models/series";
import getAllSeriesInfo from "@utils/getAllSeriesInfo";
import getLastPage from "@utils/getLastPage";
import Image from "next/image";
import imgLoader from "@utils/imgLoader";
import PageTitle from "@components/Title/PageTitle";
import getSeries from "@utils/getSeries";
import getBlurImg from "@utils/getBlurImg";
import { PostType } from "@models/post";

const Series = ({
  series,
  seriesTotal,
  page,
}: {
  series: SeriesAttributeType[];
  seriesTotal: number;
  page: number;
}) => {
  const { startPage, endPage } = usePage(
    seriesTotal,
    page,
    DEFAULT_NUMBER_OF_POST.series
  );

  return (
    <>
      <PageSeo
        title={CATEGORY_INFO.series.label}
        description={metadata.description}
        url={metadata.siteUrl + `series`}
      />
      <main className={`flex flex-col items-center`}>
        <PageTitle className={`mb-24 mt-14`}>
          {CATEGORY_INFO.series.label}
        </PageTitle>
        <div className={`text-neutral-500 text-sm text-right mb-5 w-full`}>
          시리즈 수: {seriesTotal}
        </div>
        <article className={`flex flex-col flex-nowrap gap-3 w-full`}>
          {series.map(
            (
              {
                key,
                title,
                thumbnail,
                blurThumbnail,
                tags,
                description,
                posts,
              },
              idx
            ) => (
              <Link
                key={key}
                href={`/series/${key}`}
                className={`grid grid-cols-[1fr_3fr_1fr] bg-[rgb(255,255,255,0.6)] dark:bg-[rgba(255,250,250,0.1)] rounded shadow-xl bg-translate overflow-hidden hover:-translate-y-0.5 hover:duration-300 hover:ease-in-out hover:text-blue-700`}
              >
                <div className={`relative`}>
                  {!!thumbnail ? (
                    <Image
                      loader={(props) => imgLoader(props)}
                      src={thumbnail}
                      alt={title}
                      className={`object-cover h-auto`}
                      fill
                      placeholder={"blur"}
                      blurDataURL={blurThumbnail}
                    />
                  ) : (
                    <div
                      className={`h-full w-full bg-[rgb(255,255,255,0.8)] dark:bg-[rgb(255,255,255,0.1)]`}
                    />
                  )}
                </div>
                <section className={`flex flex-col p-4 min-h-[130px]`}>
                  <h2 className={`text-inherit text-xl font-semibold pb-2`}>
                    {title}
                  </h2>
                  {!!description && (
                    <div
                      className={`text-inherit break-normal text-ellipsis text-xs`}
                    >
                      {description}
                    </div>
                  )}
                </section>
                <div
                  className={`italic font-extrabold text-6xl flex flex-col justify-center items-center`}
                >
                  <div className={`text-sm text-neutral-400 font-light`}>
                    포스트 수
                  </div>
                  {posts.length}
                </div>
              </Link>
            )
          )}
        </article>
        <Pagination
          currPage={page}
          startPage={startPage}
          endPage={endPage}
          category={"series"}
        />
      </main>
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
    fallback: "blocking",
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

import { GetStaticProps } from "next";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import metadata from "config";
import Carousel from "@components/Carousel";
import TagList from "@components/Tag/TagList";
import ShadowRoundedCard from "@components/ShadowRoundedCard";
import PageSeo from "@components/SEO/PageSEO";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";
import { CATEGORY_INFO, CATEGORY_KEYS } from "@constants/category";
import useHorizontalScroll from "@hooks/useHorizontalScroll";
import { PostType } from "@models/post";
import { SeriesInfoTable } from "@models/series";
import { TagWithCountType } from "@models/tag";
import { getPosts } from "@utils/getPosts";
import getAllTags from "@utils/getAllTags";
import getAllSeriesInfo from "@utils/getAllSeriesInfo";
import Image from "next/image";
import imgLoader from "@utils/imgLoader";

export default function Home({
  recentPosts,
  tags,
  allSeriesInfo,
}: {
  recentPosts: PostType[];
  tags: TagWithCountType[];
  allSeriesInfo: SeriesInfoTable;
}) {
  const seriesRef = useHorizontalScroll();

  return (
    <>
      <PageSeo
        title="Home"
        description={metadata.description}
        url={metadata.siteUrl}
      />
      <Title title={metadata.title} />
      <nav className={`flex gap-3 justify-center my-10`}>
        {CATEGORY_KEYS.map((key) => (
          <Link
            href={CATEGORY_INFO[key].link}
            key={CATEGORY_INFO[key].id}
            className={`hover:text-blue-700`}
          >
            {CATEGORY_INFO[key].label}
          </Link>
        ))}
      </nav>
      <TagList tagList={tags} />
      <Link href={CATEGORY_INFO.post.link} aria-label={"link-blog"}>
        <Subtitle className={`flex justify-between hover:text-blue-700`}>
          <span>Recent Post</span>
          <BsArrowRight />
        </Subtitle>
      </Link>
      <Carousel posts={recentPosts} allSeriesInfo={allSeriesInfo} />
      <Link href={CATEGORY_INFO.series.link} aria-label={"link-blog"}>
        <Subtitle className={`flex justify-between hover:text-blue-700 mt-6`}>
          Series
        </Subtitle>
      </Link>
      <div className={"flex gap-5"} ref={seriesRef}>
        {Object.keys(allSeriesInfo).map((seriesKey) => (
          <Link href={`/series/${seriesKey}/intro`} key={seriesKey}>
            <ShadowRoundedCard
              isFloated={false}
              className={`w-[250px] h-[350px] overflow-hidden bg-transparent `}
            >
              <div
                className={`relative w-full h-full hover:[transform:rotateY(180deg)] [transform-style:preserve-3d] [transition:transform 1s]`}
              >
                <div
                  id={"seriesFront"}
                  className={`absolute w-full h-full [backface-visibility:hidden] [-webkit-backface-visibility:hidden] bg-white pb-10 dark:bg-neutral-900`}
                >
                  <div className={"w-full h-[250px] relative top-0 left-0 "}>
                    {allSeriesInfo[seriesKey].thumbnail && (
                      <Image
                        loader={(props) => imgLoader(props)}
                        src={allSeriesInfo[seriesKey].thumbnail as string}
                        alt={allSeriesInfo[seriesKey].title}
                        className={`object-contain`}
                        priority
                        fill
                        sizes={"(min-width:640px) 50vw, 100vw"}
                      />
                    )}
                  </div>
                  <h1
                    className={`px-5 text-2xl italic font-bold break-keep whitespace-pre-line text-center`}
                  >
                    {allSeriesInfo[seriesKey].title}
                  </h1>
                </div>
                <div
                  id={"seriesBack"}
                  className={`absolute h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] bg-white p-5 dark:bg-neutral-900`}
                >
                  <div
                    className={`flex flex-col items-center justify-center h-[150px]`}
                  >
                    <div
                      className={`text-blue-700 text-3xl font-[900] border-blue-700 border-4 p-3 rounded-full w-[60px] h-[60px] flex justify-center items-center`}
                    >
                      {allSeriesInfo[seriesKey].posts.length}
                    </div>
                  </div>
                  <h1 className={`text-left text-2xl italic font-bold`}>
                    Description
                  </h1>
                  <p className={`mt-5`}>
                    {allSeriesInfo[seriesKey].description}
                  </p>
                </div>
              </div>
            </ShadowRoundedCard>
          </Link>
        ))}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const recentPosts = await getPosts(0, 5);
  const allTags = await getAllTags();
  const allSeriesInfo = await getAllSeriesInfo();
  return {
    props: {
      recentPosts,
      tags: allTags,
      allSeriesInfo: allSeriesInfo,
    },
  };
};

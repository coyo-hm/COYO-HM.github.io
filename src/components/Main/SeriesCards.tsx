import useHorizontalScroll from "@hooks/useHorizontalScroll";
import { SeriesAttributeTableType, SeriesTableNode } from "@models/series";
import Link from "next/link";
import Image from "next/image";
import imgLoader from "@utils/imgLoader";
import FlippedShadowRoundedCard from "@components/Card/FlippedShadowRoundedCard";

interface Props {
  allSeriesInfo: SeriesAttributeTableType;
}

const FrontSide = ({ thumbnail, title }: SeriesTableNode) => {
  return (
    <>
      <div className={"w-full h-[250px] relative top-0 left-0 "}>
        {thumbnail && (
          <Image
            loader={(props) => imgLoader(props)}
            src={thumbnail}
            alt={title}
            className={`object-contain`}
            priority
            fill
            sizes={"(min-width:640px) 50vw, 100vw"}
          />
        )}
      </div>
      <h1
        className={`px-5 pt-5 text-2xl italic font-bold break-keep whitespace-pre-line text-center`}
      >
        {title}
      </h1>
    </>
  );
};

const BackSide = ({ posts, description }: SeriesTableNode) => {
  return (
    <>
      <div className={`flex flex-col items-center justify-center h-[150px]`}>
        <div
          className={`text-blue-700 text-3xl font-[900] border-blue-700 border-4 p-3 rounded-full w-[60px] h-[60px] flex justify-center items-center`}
        >
          {posts.length}
        </div>
      </div>
      <h1 className={`text-left text-2xl italic font-bold`}>Description</h1>
      <p className={`mt-5`}>{description}</p>
    </>
  );
};

const SeriesCards = ({ allSeriesInfo }: Props) => {
  const seriesRef = useHorizontalScroll();
  const sortedSeriesKey = Object.keys(allSeriesInfo).sort(
    (a, b) => allSeriesInfo[b].posts.length - allSeriesInfo[a].posts.length
  );
  return (
    <div
      className={"flex gap-5 overflow-auto pb-10 px-5 scrollbar-hide"}
      ref={seriesRef}
    >
      {sortedSeriesKey.map((seriesKey) => (
        <Link href={`/series/${seriesKey}`} key={seriesKey}>
          <FlippedShadowRoundedCard
            frontComponent={<FrontSide {...allSeriesInfo[seriesKey]} />}
            frontClassName={`pb-10`}
            backComponent={<BackSide {...allSeriesInfo[seriesKey]} />}
            backClassName={`p-5`}
            cardClassName={`w-[240px] h-[350px]`}
          />
        </Link>
      ))}
    </div>
  );
};

export default SeriesCards;

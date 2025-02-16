import { SeriesInfoType } from "@src/types/series";

const BackSide = ({ postIds = [], description }: SeriesInfoType) => (
  <div
    id={"seriesBack"}
    className={`flippedCard-side [transform:rotateY(180deg)] bg-neutral-50 dark:bg-neutral-900 p-5`}
  >
    <div className={`flex flex-col items-center justify-center h-[150px]`}>
      <div
        className={`text-blue-700 text-3xl font-[900] border-blue-700 border-4 p-3 rounded-full w-[60px] h-[60px] flex justify-center items-center`}
      >
        {postIds.length}
      </div>
    </div>
    <h1 className={`text-left text-2xl italic font-bold`}>Description</h1>
    <p className={`mt-5`}>{description}</p>
  </div>
);
export default BackSide;

import { SeriesTableNode } from "@models/series";
import BlurImage from "@components/common/BlurImage";

const FrontSide = ({ thumbnail, title, blurThumbnail }: SeriesTableNode) => (
  <div
    id={"seriesFront"}
    className={`flippedCard-side bg-neutral-50 dark:bg-neutral-900`}
  >
    <div className={"w-[230px] h-[250px] relative top-1 left-[5px]"}>
      <BlurImage
        src={thumbnail}
        alt={title}
        className={`object-contain`}
        blurDataURL={blurThumbnail}
        fill
      />
    </div>
    <h1
      className={`px-5 pt-5 text-2xl italic font-bold break-keep whitespace-pre-line text-center`}
    >
      {title}
    </h1>
  </div>
);
export default FrontSide;

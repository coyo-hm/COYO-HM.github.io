import Link from "next/link";
import { SeriesInfoType } from "@src/types/series";
import FrontSide from "./FrontSide";
import BackSide from "./BackSide";

const SeriesFlippedCard = (props: SeriesInfoType) => {
  const { id } = props;
  return (
    <Link href={`/series/${id}`}>
      <div className={`flippedCard`}>
        <div className={`flippedCard-inner`}>
          <FrontSide {...props} />
          <BackSide {...props} />
        </div>
      </div>
    </Link>
  );
};

export default SeriesFlippedCard;

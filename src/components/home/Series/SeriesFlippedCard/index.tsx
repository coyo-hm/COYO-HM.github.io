import Link from "next/link";
import { SeriesInfoType } from "@models/series";
import FrontSide from "./FrontSide";
import BackSide from "./BackSide";

interface Props extends SeriesInfoType {}

const SeriesFlippedCard = (props: Props) => {
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

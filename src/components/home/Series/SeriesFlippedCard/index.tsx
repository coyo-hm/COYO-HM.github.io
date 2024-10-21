import Link from "next/link";
import { SeriesTableNode } from "@models/series";
import FrontSide from "./FrontSide";
import BackSide from "./BackSide";

interface Props extends SeriesTableNode {
  id: string;
}

const SeriesFlippedCard = ({ id, ...rest }: Props) => {
  return (
    <Link href={`/series/${id}`}>
      <div className={`flippedCard`}>
        <div className={`flippedCard-inner`}>
          <FrontSide {...rest} />
          <BackSide {...rest} />
        </div>
      </div>
    </Link>
  );
};

export default SeriesFlippedCard;

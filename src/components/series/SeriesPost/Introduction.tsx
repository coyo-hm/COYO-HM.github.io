import { CiCalendar } from "react-icons/ci";
import { SeriesType } from "@models/series";
import getDate from "@utils/getDate";
import NextImage from "@components/common/NextImage";
import CustomMDX from "@components/common/CustomMDX";

interface Props extends SeriesType {
  startDate: string;
  endDate: string;
}

const Introduction = ({
  title,
  startDate,
  endDate,
  thumbnail,
  body,
}: Props) => {
  const start = getDate(startDate);
  const end = getDate(endDate);

  return (
    <div>
      <h2 className={`series-subtitle flex justify-between`}>
        INTRODUCTION
        <p
          className={`text-sm text-neutral-500 font-light flex items-center justify-end gap-1`}
        >
          <CiCalendar size={20} />
          {start.dateStr} - {end.dateStr}
        </p>
      </h2>
      <div className={`flex gap-8`}>
        <div
          className={
            "w-48 shadow-2xl dark:shadow-black rounded-lg overflow-hidden"
          }
        >
          <NextImage
            src={thumbnail}
            alt={title}
            className={`w-full h-auto my-auto`}
            width={100}
            height={100}
          />
        </div>
        <div className={`flex flex-col w-full`}>
          <CustomMDX body={body} />
        </div>
      </div>
    </div>
  );
};

export default Introduction;

import { SeriesAttributeType } from "@models/series";
import BlurImage from "@components/common/BlurImage";

interface Props extends SeriesAttributeType {}
const SeriesItem = ({
  title,
  thumbnail,
  blurThumbnail,
  description,
  posts,
}: Props) => {
  return (
    <li
      className={`grid grid-cols-[1fr_3fr_1fr] bg-[rgb(255,255,255,0.6)] dark:bg-[rgba(255,250,250,0.1)] rounded shadow-xl bg-translate overflow-hidden hover:-translate-y-0.5 hover:duration-300 hover:ease-in-out hover:text-blue-700`}
    >
      <div className={`relative`}>
        <BlurImage
          alt={title}
          src={thumbnail}
          blurDataURL={blurThumbnail}
          className={`object-cover h-auto`}
          fill
        />
      </div>
      <section className={`flex flex-col p-4 min-h-[130px]`}>
        <h2 className={`text-xl font-semibold pb-2`}>{title}</h2>
        <p className={`text-xs two-line-ellipsis`}>{description}</p>
      </section>
      <section className={`italic flex flex-col justify-center items-center`}>
        <h3 className={`text-sm text-neutral-400 font-light`}>포스트 수</h3>
        <div className={`font-extrabold text-6xl`}>{posts.length}</div>
      </section>
    </li>
  );
};
export default SeriesItem;

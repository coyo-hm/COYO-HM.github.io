import Image from "next/image";
import { FrontMatterType } from "@type/index";

const PreviewPostCard = ({ title, date, tags, thumbnail }: FrontMatterType) => {
  return (
    <article className={`overflow-hidden shadow-xl rounded-xl flex flex-col`}>
      {!!thumbnail && <Image src={thumbnail} alt={title} className={``} />}
      <div></div>
    </article>
  );
};

export default PreviewPostCard;

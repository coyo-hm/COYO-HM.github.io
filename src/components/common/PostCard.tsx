import { FrontMatterType } from "@src/type";

const PostCard = ({ title, date, tags, description }: FrontMatterType) => {
  const postDate = new Date(date);
  return (
    <div
      className={`shadow-xl rounded-xl h-48 p-3 bg-white hover:-translate-y-2 hover:duration-300 hover:ease-in-out`}
    >
      <h1 className={`text-base w-full break-normal`}>{title}</h1>
      <div className={`text-xs text-neutral-400 text-right mt-2`}>
        {postDate.getFullYear()}.{postDate.getMonth() + 1}.{postDate.getDate()}
      </div>
      <div className={`flex overflow-hidden my-2`}>
        {tags.map((tag) => (
          <div
            key={tag}
            className={`shrink-0 text-xs rounded bg-neutral-400 p-1 mr-2 text-neutral-100`}
          >
            {tag}
          </div>
        ))}
      </div>
      <div
        className={`text-[12px] text-neutral-600 max-w-full block text-ellipsis overflow-hidden break-words h-[54px]`}
      >
        {description}
      </div>
    </div>
  );
};

export default PostCard;

import { FrontMatterType } from "@src/type";

const PostCard = ({ title, date, tags, description }: FrontMatterType) => {
  const postDate = new Date(date);
  console.log(date, postDate);
  return (
    <div className={`shadow-2xl rounded-xl h-48 p-2 bg-white`}>
      <h1 className={`text-base`}>{title}</h1>
      <div className={`text-xs text-neutral-400 text-right mt-2`}>
        {postDate.getFullYear()}.{postDate.getMonth() + 1}.{postDate.getDate()}
      </div>
      <div className={`flex overflow-auto my-2`}>
        {tags.map((tag) => (
          <div
            key={tag}
            className={`text-xs rounded bg-neutral-400 p-1 mr-2 text-neutral-100`}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className={`text-sm text-neutral-600 text-ellipsis max-w-full`}>
        {description}
      </div>
    </div>
  );
};

export default PostCard;

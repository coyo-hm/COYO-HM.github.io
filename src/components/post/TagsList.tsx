import Link from "next/link";

const TagsList = ({ tags }: { tags: string[] }) => {
  return (
    <div className={`pt-4 flex flex-row items-center flex-wrap`}>
      <h1 className={`text-lg mr-3 mb-2`}>Tags</h1>
      {tags.map((tag) => (
        <Link
          className={`mr-2 mb-2 h-6 p-1 w-fit break-keep text-xs rounded bg-neutral-100 dark:bg-neutral-700 hover:bg-blue-700 dark:hover:bg-blue-700 hover:text-white `}
          href={`/blog/tags/${tag}`}
          key={tag}
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
};

export default TagsList;

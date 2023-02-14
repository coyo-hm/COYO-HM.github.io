import Link from "next/link";
import { navLinks } from "@components/common/Nav";
const PostListHeader = ({
  categoryId,
  tag,
}: {
  categoryId: string;
  tag?: string;
}) => {
  const category = navLinks.find(({ title }) => title === categoryId);
  return (
    <span className={`font-bold pb-6 pl-1 text-2xl`}>
      {!!category && (
        <>
          <Link href={category.link}>{category.title}</Link>
          {tag && (
            <>
              &nbsp; &#12297; &nbsp;
              <Link href={`${category.link}/tags/${tag}`}>{tag}</Link>
            </>
          )}
        </>
      )}
    </span>
  );
};
export default PostListHeader;

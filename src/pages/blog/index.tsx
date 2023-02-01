import Pagination from "@components/common/Pagination";
import PostBox from "@components/common/PostBox";
import { DEFAULT_NUMBER_OF_RECENT_POST } from "@constants/index";
import usePage from "@hooks/usePage";
import { PostType, TagWithCount } from "@type/index";
import { getAllPosts, getAllTagsFromPosts } from "@utils/api";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

const Blog = ({ posts, tags }: { posts: PostType[]; tags: TagWithCount[] }) => {
  const {
    route,
    query: { page },
  } = useRouter();
  const currPage = page ? parseInt(page as string) : 0;
  const { startPage, endPage } = usePage(posts.length, currPage);
  const showPosts = posts.slice(
    currPage * DEFAULT_NUMBER_OF_RECENT_POST,
    (currPage + 1) * DEFAULT_NUMBER_OF_RECENT_POST
  );

  console.log("blog", route, page, posts.length);

  return (
    <>
      <span className={`font-bold`}>TEST</span>
      <article className={`flex flex-col flex-nowrap gap-3`}>
        {showPosts.map(({ frontMatter, fields: { slug } }) => (
          <PostBox {...frontMatter} slug={slug} key={slug} />
        ))}
      </article>
      <Pagination
        currPage={currPage}
        path={route}
        startPage={startPage}
        endPage={endPage}
      />
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  const allTags = await getAllTagsFromPosts();

  return {
    props: {
      posts: posts,
      tags: allTags,
    },
  };
};

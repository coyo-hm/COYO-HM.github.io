import { useEffect } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { PostType, TagsType, TagWithCountType } from "@type/index";
import { getAllPosts, getAllTagsFromPosts } from "@utils/api";
import useSidebar from "@hooks/useSidebar";
import { PageSeo } from "@components/common/SEO";
import metadata from "@config/index";
import usePage from "@hooks/usePage";
import { DEFAULT_NUMBER_OF_POST } from "@src/constants";
import PostListHeader from "@components/common/PostListHeader";
import PostBox from "@components/common/PostBox";
import Pagination from "@components/common/Pagination";

const TagListPage = ({
  posts,
  tags,
  tag,
}: {
  posts: PostType[];
  tags: TagWithCountType[];
  tag: string;
}) => {
  const {
    route,
    query: { page },
  } = useRouter();
  const currPage = typeof page === "string" ? parseInt(page) : 0;
  const { startPage, endPage } = usePage(posts.length, currPage);
  const showPosts = posts.slice(
    currPage * DEFAULT_NUMBER_OF_POST,
    (currPage + 1) * DEFAULT_NUMBER_OF_POST
  );
  const { setTags } = useSidebar();

  useEffect(() => {
    setTags(tags);
  }, [setTags, tags]);

  return (
    <>
      <PageSeo
        title={tag}
        description={metadata.description}
        url={metadata.siteUrl + `tags/${tag}`}
      />
      <PostListHeader categoryId={"tag"} tag={tag} />
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

export default TagListPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = await getAllTagsFromPosts();
  const paths = allTags.map(({ tag }) => {
    return { params: { tag: tag } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { tag } = params as TagsType;
  const allPosts = await getAllPosts();
  const allTags = await getAllTagsFromPosts();
  const posts = allPosts.filter(({ frontMatter: { tags }, fields: { slug } }) =>
    tags.includes(tag)
  );

  return {
    props: {
      posts: posts,
      tags: allTags,
      tag: tag,
    },
  };
};

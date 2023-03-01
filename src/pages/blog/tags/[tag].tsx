import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { PostType, TagsType, TagWithCountType } from "@type/index";
import { getAllPosts, getAllTagsFromBlog } from "@utils/api";
import useSidebar from "@hooks/useSidebar";
import PostListLayout from "@components/layout/PostListLayout";
import { PageSeo } from "@components/common/SEO";
import metadata from "@config/index";

const BlogTagPage = ({
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
  const currPage = page ? parseInt(page as string) : 0;
  useSidebar(tags);

  return (
    <>
      <PageSeo
        title={`Blog | ${tag}`}
        description={metadata.description}
        url={metadata.siteUrl + `blog/tags/${tag}`}
      />
      <PostListLayout
        tag={tag}
        categoryId={"blog"}
        posts={posts}
        currPage={currPage}
        path={route}
      />
    </>
  );
};

export default BlogTagPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = await getAllTagsFromBlog();
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
  const allPosts = await getAllPosts("blog");
  const allTags = await getAllTagsFromBlog();
  const posts = allPosts.filter(({ frontMatter: { tags } }) =>
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

import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

import metadata from "config";
import PostCard from "@components/common/PostCard";
import { PageSeo } from "@components/common/SEO";
import { DEFAULT_NUMBER_OF_RECENT_POST } from "@constants/index";
import useSidebar from "@hooks/useSidebar";
import { PostType, TagWithCountType } from "@type/index";
import { getAllPosts, getAllTagsFromPosts } from "@utils/api";
import imgLoader from "@utils/imgLoader";

export default function Home({
  posts,
  tags,
}: {
  posts: PostType[];
  tags: TagWithCountType[];
}) {
  const { setTags } = useSidebar();

  useEffect(() => {
    setTags(tags);
  }, [setTags, tags]);

  return (
    <>
      <PageSeo
        title="Home"
        description={metadata.description}
        url={metadata.siteUrl}
      />
      <div
        id={"profile"}
        className={`grid gap-2 grid-rows-4 grid-cols-[240px_1fr] px-6 max-md:grid-cols-1 max-md:auto-rows-auto`}
      >
        <Image
          loader={(props) => imgLoader(props)}
          src={`/static/images/profile.png`}
          alt={"profileImage"}
          className={"row-span-4 col-span-1 place-self-center mb-5"}
          width={150}
          height={150}
        />
        <h1 className={`text-2xl font-semibold break-keep`}>
          안녕하세요, Frontend 개발자 {metadata.author.name} 입니다.
        </h1>
        <p className={`row-span-2 break-keep`}>
          React와 TypeScript를 주로 사용하여 개발하고 있습니다.
          <br /> 블로그를 통해 공부 기록을 남기고 있습니다.
        </p>
        <div className={`flex`}>
          <a
            href="https://github.com/COYO-HM"
            target={"_blank"}
            rel="noreferrer"
            className={"mr-3 hover:text-blue-700"}
          >
            <FaGithub size={24} />
          </a>
          <a href="mailto:bsydwp@gmail.com" className={`hover:text-blue-700`}>
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
      <div
        className={`flex flex-nowrap text-blue-700 border-y-2 border-blue-700 py-2 text-base my-4`}
      >
        <span className={"font-bold mr-4"}>#tags</span>
        <div id={"tags"} className={`flex flex-nowrap overflow-auto`}>
          {tags.map(({ tag }) => (
            <Link
              href={`/blog/tags/${tag}`}
              key={tag}
              className={`whitespace-nowrap mr-2 hover:font-bold hover:text-blue-900 dark:hover:text-blue-500 hover:-translate-y-0.5 hover:duration-300 hover:ease-in-out`}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
      <div
        id={"recent_post"}
        className={`shadow-2xl rounded-2xl overflow-hidden`}
      >
        <Link
          href={"/blog?page=0"}
          className={`text-2xl text-blue-700 p-6 pb-0 flex justify-between bg-neutral-50 hover:text-blue-900 dark:bg-neutral-700`}
        >
          <span>Recent Blog Post</span>
          <BsArrowRight />
        </Link>
        <div
          id={"tags"}
          className={`grid gap-5 grid-flow-col auto-cols-[200px] px-4 py-6 bg-neutral-50 overflow-x-auto dark:bg-neutral-700`}
        >
          {posts.map(({ frontMatter, fields: { slug } }) => {
            return (
              <Link href={`/${slug}`} key={slug}>
                <PostCard {...frontMatter} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const recentPosts = (await getAllPosts()).slice(
    0,
    DEFAULT_NUMBER_OF_RECENT_POST
  );
  const allTags = await getAllTagsFromPosts();

  return {
    props: {
      posts: recentPosts.map((post) => ({ ...post, path: "" })),
      tags: allTags,
    },
  };
};

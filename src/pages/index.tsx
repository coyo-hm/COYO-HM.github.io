import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import metadata from "config";
import { DEFAULT_NUMBER_OF_RECENT_POST } from "@constants/index";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";
import PostCard from "@components/common/PostCard";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { PageSeo } from "@components/common/SEO";
import { getAllPosts, getAllTagsFromPosts } from "@utils/api";
import { PostType, TagWithCount } from "@type/index";

export default function Home({
  posts,
  tags,
}: {
  posts: PostType[];
  tags: TagWithCount[];
}) {
  console.log(posts, tags);
  return (
    <div>
      <PageSeo
        title="Home"
        description={metadata.description}
        url={metadata.siteUrl}
      />
      <div className={`flex flex-col justify-center m-auto`}>
        <Header />
        <div
          className={`w-900 flex flex-col justify-center m-auto overflow-auto`}
        >
          <div id={"profile"} className={`grid gap-2 grid-rows-5 grid-cols-2`}>
            <Image
              src={`/static/images/profile.png`}
              alt={"profileImage"}
              className={"row-span-5 col-span-1"}
              width={100}
              height={100}
            />
            <h1>HELLO</h1>
            <p className={`row-span-2`}>DESCRIPTION</p>
            <div className={`flex`}>
              <a
                href="https://github.com/COYO-HM"
                target={"_blank"}
                rel="noreferrer"
                className={"mr-10"}
              >
                <FaGithub />
              </a>
              <a href="mailto:bsydwp@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div
            id={"tags"}
            className={`flex flex-nowrap text-blue-700 border-y-2 border-blue-700 py-2 text-base my-4`}
          >
            <span className={"font-bold mr-4"}>#tags</span>
            <div className={`flex flex-nowrap overflow-auto`}>
              {tags.map(({ tag }) => (
                <Link href={`/blog/${tag}`} key={tag} className={"mr-2"}>
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
              className={`text-2xl text-blue-700 p-6 flex justify-between`}
            >
              <span>Recent Post</span>
              <BsArrowRight />
            </Link>
            <div
              className={`grid gap-5 grid-flow-col grid-cols-postcard px-4 py-6 bg-neutral-100`}
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
        </div>
        <Footer />
      </div>
    </div>
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

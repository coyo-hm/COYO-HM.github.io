import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { motion } from "framer-motion";

import metadata from "@config/index";
import CustomMDX from "@components/Post/CustomMDX";
import CommentWidget from "@components/Post/CommentWidget";
import TagColorBox from "@components/Tag/TagColorBox";
import PageSeo from "@components/SEO/PageSEO";
import { SeriesPostType } from "@models/series";
import getDate from "@utils/getDate";
import getAllSeriesInfo from "@utils/getAllSeriesInfo";
import getSeriesIntro from "@utils/getSeriesIntro";
import parseMarkdownToMdx from "@utils/parseMarkdown";
import imgLoader from "@utils/imgLoader";
import PostTitle from "@components/Title/PostTitle";
import PostSubTitle from "@components/Title/PostSubTitle";
import { CATEGORY_INFO } from "@constants/category";
import Giscus from "@components/Post/Giscus";

const postVariants = {
  initial: { y: 0 },
  hover: {
    y: -3,
    backgroundColor: "rgba(147, 197, 253, 0.2)",
    transition: { type: "tween", duration: 0.3 },
  },
};

const SeriesIntroPage = ({
  seriesInfo,
  mdx,
  seriesKey,
}: {
  seriesInfo: SeriesPostType;
  mdx: MDXRemoteSerializeResult;
  seriesKey: string;
}) => {
  const { frontMatter, posts } = seriesInfo;
  const { title, description, thumbnail } = frontMatter;

  return (
    <>
      <PageSeo
        title={`${title}`}
        description={description}
        url={`${metadata.siteUrl}/series/${seriesKey}`}
      />
      <main className={`flex flex-col mx-auto w-full lg:w-[800px] pt-5`}>
        <div className={`relative h-[200px] z-0`}>
          <Image
            loader={(props) => imgLoader(props)}
            src={thumbnail}
            alt={title}
            className={`object-cover h-auto`}
            fill
            loading={"lazy"}
          />
          <div
            className={`h-full w-full bg-gradient-to-b from-white/0 dark:from-neutral-800/0 via-white/70 dark:via-neutral-800/70 to-white/100 dark:to-neutral-800/100 absolute`}
          ></div>
        </div>
        <PostTitle className={`mb-20 mt-[-5px] z-10`}>
          <h1
            className={`text-lg w-fit font-normal italic bg-transparent border-b-2 border-black dark:border-white mb-4 mx-auto`}
          >
            {CATEGORY_INFO.series.label}
          </h1>
          {title}
        </PostTitle>
        <div className={`py-7`}>
          <PostSubTitle
            className={`text-blue-700 border-b-2 py-2 border-blue-700 mb-4`}
          >
            INTRODUCTION
          </PostSubTitle>
          <div className={``}>
            <CustomMDX {...mdx} />
          </div>
        </div>
        <div className={`py-7`}>
          <PostSubTitle
            className={`text-blue-700 border-b-2 py-2 border-blue-700 mb-4`}
          >
            SERIES POST
          </PostSubTitle>
          <section className={`flex flex-col gap-3`}>
            {posts.map((post, idx) => (
              <Link href={`/post/${post.key}`} key={post.key}>
                <motion.div
                  variants={postVariants}
                  initial={"initial"}
                  whileHover={"hover"}
                  className={`flex gap-3 bg-white/60 dark:bg-neutral-700/20 rounded shadow-xl overflow-hidden p-5`}
                >
                  {post?.thumbnail && (
                    <div className={`relative w-1/5 min-w-[100px]`}>
                      <Image
                        loader={(props) => imgLoader(props)}
                        src={post.thumbnail}
                        alt={title}
                        className={`object-cover h-auto`}
                        fill
                        loading={"lazy"}
                      />
                    </div>
                  )}
                  <div className={`flex flex-col gap-1.5`}>
                    <h3
                      className={`text-neutral-800 dark:text-neutral-100 text-lg font-semibold`}
                    >
                      {idx + 1}.&nbsp;{post.title}
                    </h3>
                    <div
                      className={`flex flex-wrap text-neutral-600 dark:text-neutral-300 text-xs`}
                    >
                      {getDate(post.date).dateStr}
                      <div
                        className={`flex flex-shrink flex-wrap items-center gap-1 border-l-2 border-neutral-200 dark:border-neutral-500 pl-2 ml-2`}
                      >
                        {post?.tags.map((tag) => (
                          <TagColorBox tag={tag} key={tag} />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </section>
        </div>
        <div className={`mt-12`}>
          <Giscus />
        </div>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allSeriesInfo = await getAllSeriesInfo();

  return {
    paths: Object.keys(allSeriesInfo).map((key) => ({
      params: { title: key },
    })),
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { title } = params as { title: string };
  const seriesInfo = await getSeriesIntro(title);

  if (seriesInfo) {
    const source = await parseMarkdownToMdx(seriesInfo.body);
    return {
      props: {
        seriesInfo,
        mdx: source,
        seriesKey: title,
      },
    };
  }
  return {
    notFound: true,
  };
};
export default SeriesIntroPage;

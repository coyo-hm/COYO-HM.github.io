import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import metadata from "@config/index";
import PageSeo from "@components/common/PageSEO";
import SeriesPost from "@components/series/SeriesPost";
import { SeriesPostType } from "@models/series";
import getAllSeriesInfo from "@utils/getAllSeriesInfo";
import getSeriesIntro from "@utils/getSeriesIntro";
import parseMarkdownToMdx from "@utils/parseMarkdown";

const SeriesPostPage = ({
  seriesInfo,
  mdx,
  seriesKey,
}: {
  seriesInfo: SeriesPostType;
  mdx: MDXRemoteSerializeResult;
  seriesKey: string;
}) => {
  const { frontMatter, posts } = seriesInfo;
  const { title, description } = frontMatter;

  return (
    <>
      <PageSeo
        title={`${title}`}
        description={description}
        url={`${metadata.siteUrl}/series/${seriesKey}`}
      />
      <SeriesPost {...frontMatter} mdx={mdx} posts={posts} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allSeriesInfo = await getAllSeriesInfo();

  return {
    paths: Object.keys(allSeriesInfo).map((key) => ({
      params: { title: key },
    })),
    fallback: false,
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
export default SeriesPostPage;

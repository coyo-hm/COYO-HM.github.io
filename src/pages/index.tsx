import { GetStaticProps } from "next";
import Link from "next/link";
import { PageSeo } from "@components/common/SEO";
import { DEFAULT_NUMBER_OF_RECENT_POST } from "@constants/index";
import { PostType } from "@type/index";
import { getAllPosts } from "@utils/api";
import metadata from "config";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";

export default function Home({ posts }: { posts: PostType[] }) {
  console.log(posts);
  return (
    <>
      <PageSeo
        title="Home"
        description={metadata.description}
        url={metadata.siteUrl}
      />
      <div className="">
        <Header />
        <div>
          <h1>Recent Post</h1>
          <ul>
            {posts.map(({ frontMatter, fields: { slug } }) => {
              const { date, title, tags, description } = frontMatter;
              const postDate = new Date(date);
              console.log(slug);
              return (
                <li key={slug}>
                  <article>
                    <Link href={`/${slug}`}>{title}</Link>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const recentPosts = (await getAllPosts()).slice(
    0,
    DEFAULT_NUMBER_OF_RECENT_POST
  );

  return {
    props: { posts: recentPosts.map((post) => ({ ...post, path: "" })) },
  };
};

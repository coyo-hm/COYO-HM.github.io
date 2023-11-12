import { ArticleJsonLd, NextSeo } from "next-seo";
import metadata from "@config/index";

const PostSEO = ({
  title,
  summary,
  date,
  updatedAt,
  url,
  tags,
  images = [],
}: {
  title: string;
  summary: string;
  date: string;
  updatedAt?: string;
  url: string;
  tags: string[];
  images: string[];
}) => {
  const publishedAt = new Date(date).toISOString();
  const modifiedAt = new Date(updatedAt || date).toISOString();

  const featuredImages = images.map((img) => {
    return {
      url: img,
      alt: title,
    };
  });

  return (
    <>
      <NextSeo
        title={`${metadata.title} | ${title}`}
        description={summary}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
            authors: [metadata.author.name],
            tags,
          },
          url,
          title,
          description: summary,
          images: featuredImages,
        }}
      />
      <ArticleJsonLd
        authorName={metadata.author.name}
        dateModified={modifiedAt}
        datePublished={publishedAt}
        description={summary}
        images={images}
        publisherName={metadata.author.name}
        title={title}
        url={url}
        publisherLogo={`${metadata.siteUrl}/favicons/favicon-32x32.png`}
      />
    </>
  );
};

export default PostSEO;

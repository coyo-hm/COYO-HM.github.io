import { NextSeo } from "next-seo";
import metadata from "@config/index";

const PageSeo = ({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <NextSeo
      title={`${metadata.title} | ${title}`}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [{ alt: title, url: "/static/images/moblie-profile.png" }],
      }}
    />
  );
};

export default PageSeo;

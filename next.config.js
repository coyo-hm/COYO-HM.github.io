/** @models {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer2");

module.exports = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://coyo-hm.github.io/"],
    loader: "imgix",
    path: "https://coyo-hm.github.io/",
  },
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_REPO_ID: process.env.NEXT_PUBLIC_REPO_ID,
    NEXT_PUBLIC_CATEGORY_ID: process.env.NEXT_PUBLIC_CATEGORY_ID,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  output: "export",
});

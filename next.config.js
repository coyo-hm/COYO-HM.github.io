/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["https://coyo-hm.github.io/"],
    loader: "imgix",
    path: "https://coyo-hm.github.io/",
  },
};

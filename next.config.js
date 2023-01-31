/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://coyo-hm.github.io/" : "",
};

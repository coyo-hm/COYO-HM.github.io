(self.__BUILD_MANIFEST = (function (s, e, a) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    "/": [s, "static/chunks/pages/index-8b3dce16c367dc5f.js"],
    "/404": ["static/chunks/pages/404-c43ebaaec30028de.js"],
    "/_error": ["static/chunks/pages/_error-8353112a01355ec2.js"],
    "/blog/post/[...slugs]": [
      s,
      e,
      "static/chunks/pages/blog/post/[...slugs]-a812e78197e72fbb.js",
    ],
    "/blog/[page]/[category]": [
      a,
      s,
      "static/chunks/pages/blog/[page]/[category]-7d75488627889cf5.js",
    ],
    "/project/post/[...slugs]": [
      s,
      e,
      "static/chunks/pages/project/post/[...slugs]-fe6757923e8631b1.js",
    ],
    "/project/[page]/[category]": [
      a,
      s,
      "static/chunks/pages/project/[page]/[category]-49b69434506b7039.js",
    ],
    sortedPages: [
      "/",
      "/404",
      "/_app",
      "/_error",
      "/blog/post/[...slugs]",
      "/blog/[page]/[category]",
      "/project/post/[...slugs]",
      "/project/[page]/[category]",
    ],
  };
})(
  "static/chunks/130-e223123549145b7d.js",
  "static/chunks/564-171264324f0f9df2.js",
  "static/chunks/95b64a6e-5c1c80ce1af5e491.js"
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();

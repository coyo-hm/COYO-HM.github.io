(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(4300);
        },
      ]);
    },
    4541: function (e, t, r) {
      "use strict";
      r.d(t, {
        Is: function () {
          return c;
        },
        Rj: function () {
          return s;
        },
      });
      var a = r(5893),
        l = r(2962),
        o = r(8014);
      o.Z.title,
        o.Z.description,
        o.Z.siteUrl,
        o.Z.title,
        o.Z.description,
        o.Z.author.name;
      let c = (e) => {
          let { title: t, description: r, url: c } = e;
          return (0, a.jsx)(l.PB, {
            title: "".concat(o.Z.title, " | ").concat(t),
            description: r,
            canonical: c,
            openGraph: {
              url: c,
              title: t,
              description: r,
              images: [{ alt: t, url: "/static/images/moblie-profile.png" }],
            },
          });
        },
        s = (e) => {
          let {
              title: t,
              summary: r,
              date: c,
              updatedAt: s,
              url: n,
              tags: i,
              images: b = [],
            } = e,
            d = new Date(c).toISOString(),
            x = new Date(s || c).toISOString(),
            h = b.map((e) => ({ url: e, alt: t }));
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(l.PB, {
                title: "".concat(o.Z.title, " | ").concat(t),
                description: r,
                canonical: n,
                openGraph: {
                  type: "article",
                  article: {
                    publishedTime: d,
                    modifiedTime: x,
                    authors: [o.Z.author.name],
                    tags: i,
                  },
                  url: n,
                  title: t,
                  description: r,
                  images: h,
                },
              }),
              (0, a.jsx)(l.dX, {
                authorName: o.Z.author.name,
                dateModified: x,
                datePublished: d,
                description: r,
                images: b,
                publisherName: o.Z.author.name,
                title: t,
                url: n,
                publisherLogo: "".concat(
                  o.Z.siteUrl,
                  "/favicons/favicon-32x32.png"
                ),
              }),
            ],
          });
        };
    },
    8161: function (e, t, r) {
      "use strict";
      var a = r(5893),
        l = r(5117);
      let o = (e) => {
        let { tag: t } = e,
          r = l.Z[t],
          o = (null == r ? void 0 : r.bg) || "bg-neutral-400";
        return (0, a.jsxs)(
          "div",
          {
            className:
              "shrink-0 rounded py-0.5 px-1 text-xs text-neutral-100 ".concat(
                o
              ),
            children: ["#", (null == r ? void 0 : r.label) || t],
          },
          t
        );
      };
      t.Z = o;
    },
    4883: function (e, t, r) {
      "use strict";
      var a = r(5893),
        l = r(1664),
        o = r.n(l),
        c = r(5675),
        s = r.n(c),
        n = r(7635),
        i = r(3930);
      let b = (e) => {
        let { title: t, date: r, tags: l, thumbnail: c, slug: b } = e,
          { dateStr: d } = (0, n.Z)(r);
        return (0, a.jsxs)(o(), {
          className:
            "hover:-translate-y-2 hover:duration-300 hover:ease-in-out overflow-hidden shadow-xl rounded-xl bg-neutral-100 grid grid-rows-[2fr_1fr] dark:bg-neutral-900",
          href: "/".concat(b),
          children: [
            (0, a.jsx)("div", {
              className: "relative",
              children:
                !!c &&
                (0, a.jsx)(s(), {
                  loader: (e) => (0, i.Z)(e),
                  src: c,
                  alt: t,
                  className: "object-cover",
                  priority: !0,
                  fill: !0,
                  sizes: "(min-width:640px) 50vw, 100vw",
                }),
            }),
            (0, a.jsxs)("div", {
              className: "w-full p-3",
              children: [
                (0, a.jsx)("h1", {
                  className:
                    "text-lg font-bold text-neutral-900 dark:text-neutral-100",
                  children: t,
                }),
                (0, a.jsx)("p", { className: "text-neutral-400", children: d }),
              ],
            }),
          ],
        });
      };
      t.Z = b;
    },
    5117: function (e, t) {
      "use strict";
      t.Z = {
        algorithm: { category: "COMPUTER SCIENCE", label: "Algorithm" },
        programming: { category: "COMPUTER SCIENCE", label: "Programming" },
        network: { category: "COMPUTER SCIENCE", label: "Network" },
        css: {
          category: "CSS",
          label: "CSS",
          color: "#1572b6",
          bg: "bg-[#1572b6]",
          bg_hover: "hover:bg-[#1572b6]",
          text: "text-[#1572b6]",
          text_hover: "hover:text-[#1572b6]",
          border: "border-[#1572b6]",
        },
        scss: {
          category: "CSS",
          label: "SCSS",
          color: "#bf4080",
          bg: "bg-[#bf4080]",
          bg_hover: "hover:bg-[#bf4080]",
          text: "text-[#bf4080]",
          text_hover: "hover:text-[#bf4080]",
          border: "border-[#bf4080]",
        },
        emotion: {
          category: "CSS",
          label: "Emotion",
          color: "#d26ac2",
          bg: "bg-[#d26ac2]",
          bg_hover: "hover:bg-[#d26ac2]",
          text: "text-[#d26ac2]",
          text_hover: "hover:text-[#d26ac2]",
          border: "border-[#d26ac2]",
        },
        styled_components: {
          category: "CSS",
          label: "Styled-Components",
          color: "#ffa4e8",
          bg: "bg-[#ffa4e8]",
          bg_hover: "hover:bg-[#ffa4e8]",
          text: "text-[#ffa4e8]",
          text_hover: "hover:text-[#ffa4e8]",
          border: "border-[#ffa4e8]",
        },
        gatsby: {
          category: "FRAMEWORK",
          label: "Gatsby",
          color: "#663399",
          bg: "bg-[#663399]",
          bg_hover: "hover:bg-[#663399]",
          text: "text-[#663399]",
          text_hover: "hover:text-[#663399]",
          border: "border-[#663399]",
        },
        nextjs: { category: "FRAMEWORK", label: "Next.js" },
        intellij: { category: "IDE", label: "IntelliJ" },
        javascript: {
          category: "LANGUAGE",
          label: "JavaScript",
          color: "#fac905",
          bg: "bg-[#fac905]",
          bg_hover: "hover:bg-[#fac905]",
          text: "text-[#fac905]",
          text_hover: "hover:text-[#fac905]",
          border: "border-[#fac905]",
        },
        typescript: {
          category: "LANGUAGE",
          label: "TypeScript",
          color: "#3178c6",
          bg: "bg-[#3178c6]",
          bg_hover: "hover:bg-[#3178c6]",
          text: "text-[#3178c6]",
          text_hover: "hover:text-[#3178c6]",
          border: "border-[#3178c6]",
        },
        python3: { category: "LANGUAGE", label: "Python3" },
        html: {
          category: "LANGUAGE",
          label: "HTML",
          color: "#e44f26",
          bg: "bg-[#e44f26]",
          bg_hover: "hover:bg-[#e44f26]",
          text: "text-[#e44f26]",
          text_hover: "hover:text-[#e44f26]",
          border: "border-[#e44f26]",
        },
        react: {
          category: "LIBRARY",
          label: "React",
          color: "#61dbfb",
          bg: "bg-[#61dbfb]",
          bg_hover: "hover:bg-[#61dbfb]",
          text: "text-[#61dbfb]",
          text_hover: "hover:text-[#61dbfb]",
          border: "border-[#61dbfb]",
        },
        redux_persist: { category: "LIBRARY", label: "Redux-Persist" },
        redux: {
          category: "LIBRARY",
          label: "Redux",
          color: "#764abc",
          bg: "bg-[#764abc]",
          bg_hover: "hover:bg-[#764abc]",
          text: "text-[#764abc",
          text_hover: "hover:text-[#764abc]",
          border: "border-[#764abc]",
        },
        recoil: { category: "LIBRARY", label: "Recoil" },
        axios: { category: "LIBRARY", label: "Axios" },
        lodash: { category: "LIBRARY", label: "Lodash" },
        git: {
          category: "MANAGEMENT",
          label: "Git",
          color: "#000000",
          bg: "bg-black",
          bg_hover: "hover:bg-black",
          text: "text-black",
          text_hover: "hover:text-black",
          border: "border-black",
        },
        git_hub: {
          category: "MANAGEMENT",
          label: "GitHub",
          color: "#000000",
          bg: "bg-black",
          bg_hover: "hover:bg-black",
          text: "text-black",
          text_hover: "hover:text-black",
          border: "border-black",
        },
        npm: { category: "PACKAGE MANAGER", label: "npm" },
        yarn: { category: "PACKAGE MANAGER", label: "yarn" },
        yarn_berry: { category: "PACKAGE MANAGER", label: "yarn berry" },
        jest: {
          category: "TEST",
          label: "Jest",
          color: "#99425b",
          bg: "bg-[#99425b]",
          bg_hover: "hover:bg-[#99425b]",
          text: "text-[#99425b]",
          text_hover: "hover:text-[#99425b]",
          border: "border-[#99425b]",
        },
      };
    },
    4300: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return y;
          },
          default: function () {
            return j;
          },
        });
      var a = r(5893),
        l = r(7294),
        o = r(1664),
        c = r.n(o),
        s = r(5675),
        n = r.n(s),
        i = r(9583),
        b = r(3750),
        d = r(8014),
        x = r(7635),
        h = r(8161);
      let g = (e) => {
        let { title: t, date: r, tags: l, description: o } = e,
          { dateStr: c } = (0, x.Z)(r);
        return (0, a.jsxs)("div", {
          className:
            "shadow-xl rounded-xl h-48 p-3 bg-white hover:-translate-y-2 hover:duration-300 hover:ease-in-out dark:bg-neutral-800",
          children: [
            (0, a.jsx)("h1", {
              className:
                "text-base w-full max-h-12 min-h-12 h-12 overflow-hidden text-ellipsis",
              children: t,
            }),
            (0, a.jsx)("div", {
              className: "text-xs text-neutral-400 text-right mt-2",
              children: c,
            }),
            (0, a.jsx)("div", {
              className: "flex gap-2 overflow-hidden my-2",
              children: l
                .slice(0, 2)
                .map((e) => (0, a.jsx)(h.Z, { tag: e }, e)),
            }),
            (0, a.jsx)("div", {
              className:
                "text-[12px] text-neutral-600 max-w-full block text-ellipsis overflow-hidden break-words h-[54px] dark:text-neutral-300",
              children: o,
            }),
          ],
        });
      };
      var u = r(4883),
        v = r(4541),
        f = r(3930);
      let m = () => {
        let e = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            let t = e.current;
            if (t) {
              let e = (e) => {
                0 != e.deltaY &&
                  (e.preventDefault(),
                  t.scrollTo({
                    left: t.scrollLeft + e.deltaY,
                    behavior: "smooth",
                  }));
              };
              return (
                t.addEventListener("wheel", e),
                () => t.removeEventListener("wheel", e)
              );
            }
          }, []),
          e
        );
      };
      var p = r(5117),
        y = !0;
      function j(e) {
        let { blogPosts: t, tags: r, projectPosts: o } = e,
          s = m(),
          x = m();
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(v.Is, {
              title: "Home",
              description: d.Z.description,
              url: d.Z.siteUrl,
            }),
            (0, a.jsxs)("div", {
              id: "profile",
              className:
                "grid gap-2 grid-rows-4 grid-cols-[240px_1fr] px-6 max-md:grid-cols-1 max-md:auto-rows-auto",
              children: [
                (0, a.jsx)(n(), {
                  loader: (e) => (0, f.Z)(e),
                  src: "/static/images/profile.png",
                  alt: "profileImage",
                  width: 0,
                  height: 0,
                  className:
                    "row-span-4 col-span-1 place-self-center mb-5 w-[150px] h-auto",
                }),
                (0, a.jsxs)("h1", {
                  className: "text-2xl font-semibold break-keep",
                  children: [
                    "안녕하세요, Frontend 개발자 ",
                    d.Z.author.name,
                    " 입니다.",
                  ],
                }),
                (0, a.jsxs)("p", {
                  className: "row-span-2 break-keep",
                  children: [
                    "React와 TypeScript를 주로 사용하여 개발하고 있습니다.",
                    (0, a.jsx)("br", {}),
                    " 블로그를 통해 공부 기록을 남기고 있습니다.",
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex",
                  children: [
                    (0, a.jsx)("a", {
                      href: "https://github.com/COYO-HM",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "mr-3 hover:text-blue-700",
                      "aria-label": "link-github",
                      children: (0, a.jsx)(i.hJX, { size: 24 }),
                    }),
                    (0, a.jsx)("a", {
                      href: "mailto:bsydwp@gmail.com",
                      className: "hover:text-blue-700",
                      "aria-label": "link-email",
                      children: (0, a.jsx)(i.SRX, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "flex flex-nowrap text-blue-700 border-y-2 border-blue-700 py-2 text-base my-4",
              children: [
                (0, a.jsx)("span", {
                  className: "font-bold mr-4",
                  children: "#tags",
                }),
                (0, a.jsx)("div", {
                  id: "tags",
                  className: "flex flex-nowrap overflow-auto",
                  ref: s,
                  children: r.map((e) => {
                    var t;
                    let { tag: r } = e;
                    return (0, a.jsx)(
                      c(),
                      {
                        href: "/blog/0/".concat(r),
                        className:
                          "whitespace-nowrap mr-2 hover:font-bold hover:text-blue-900 dark:hover:text-blue-400 hover:-translate-y-0.5 hover:duration-300 hover:ease-in-out",
                        "aria-label": "link-".concat(r),
                        children:
                          (null === (t = p.Z[r]) || void 0 === t
                            ? void 0
                            : t.label) || r,
                      },
                      r
                    );
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              id: "recent_post",
              className: "shadow-2xl rounded-2xl overflow-hidden",
              children: [
                (0, a.jsxs)(c(), {
                  href: "/blog/0/all",
                  className:
                    "font-extrabold text-2xl text-blue-700 hover:text-blue-900 dark:hover:text-blue-400 p-6 pb-0 flex justify-between bg-neutral-50  dark:bg-neutral-700",
                  "aria-label": "link-blog",
                  children: [
                    (0, a.jsx)("span", { children: "Recent Blog Post" }),
                    (0, a.jsx)(b.lzl, {}),
                  ],
                }),
                (0, a.jsx)("div", {
                  id: "tags",
                  className:
                    "grid gap-5 grid-flow-col auto-cols-[200px] px-4 py-6 bg-neutral-50 overflow-x-auto dark:bg-neutral-700",
                  ref: x,
                  children:
                    null == t
                      ? void 0
                      : t.map((e) => {
                          let {
                            frontMatter: t,
                            fields: { slug: r },
                          } = e;
                          return (0, a.jsx)(
                            c(),
                            {
                              href: "/".concat(r),
                              "aria-label": "link-".concat(r),
                              children: (0, a.jsx)(g, { ...t }),
                            },
                            r
                          );
                        }),
                }),
              ],
            }),
            o.length > 0 &&
              (0, a.jsxs)("div", {
                className: "mt-6 mb-4 px-4 max-sm:px-0",
                children: [
                  (0, a.jsx)(c(), {
                    href: "/project/0/all",
                    className:
                      "text-2xl font-extrabold text-blue-700 hover:text-blue-900 dark:hover:text-blue-400",
                    "aria-label": "link-project",
                    children: (0, a.jsx)("span", { children: "Project" }),
                  }),
                  (0, a.jsx)("article", {
                    className:
                      "grid grid-cols-3 gap-4 my-4 max-sm:grid-cols-1 ",
                    children: o.map((e) => {
                      let {
                        frontMatter: t,
                        fields: { slug: r },
                      } = e;
                      return (0, l.createElement)(u.Z, {
                        ...t,
                        slug: r,
                        key: r,
                      });
                    }),
                  }),
                ],
              }),
          ],
        });
      }
    },
    7635: function (e, t) {
      "use strict";
      let r = (e) => {
        let t = new Date(e),
          r = t.getFullYear(),
          a = t.getMonth() + 1,
          l = t.getDate();
        return {
          year: r,
          month: a,
          date: l,
          dateStr: "".concat(r, ".").concat(a, ".").concat(l),
        };
      };
      t.Z = r;
    },
    3930: function (e, t, r) {
      "use strict";
      function a(e) {
        let { src: t, width: r, quality: a } = e;
        return ""
          .concat("https://coyo-hm.github.io")
          .concat(t, "?w=")
          .concat(r, "&q=")
          .concat(a || 75);
      }
      r.d(t, {
        Z: function () {
          return a;
        },
      });
    },
  },
  function (e) {
    e.O(0, [130, 774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);

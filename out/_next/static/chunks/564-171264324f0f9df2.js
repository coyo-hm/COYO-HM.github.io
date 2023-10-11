(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [564],
  {
    4541: function (e, t, r) {
      "use strict";
      r.d(t, {
        Is: function () {
          return a;
        },
        Rj: function () {
          return c;
        },
      });
      var l = r(5893),
        o = r(2962),
        n = r(8014);
      n.Z.title,
        n.Z.description,
        n.Z.siteUrl,
        n.Z.title,
        n.Z.description,
        n.Z.author.name;
      let a = (e) => {
          let { title: t, description: r, url: a } = e;
          return (0, l.jsx)(o.PB, {
            title: "".concat(n.Z.title, " | ").concat(t),
            description: r,
            canonical: a,
            openGraph: {
              url: a,
              title: t,
              description: r,
              images: [{ alt: t, url: "/static/images/moblie-profile.png" }],
            },
          });
        },
        c = (e) => {
          let {
              title: t,
              summary: r,
              date: a,
              updatedAt: c,
              url: i,
              tags: s,
              images: d = [],
            } = e,
            b = new Date(a).toISOString(),
            u = new Date(c || a).toISOString(),
            h = d.map((e) => ({ url: e, alt: t }));
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(o.PB, {
                title: "".concat(n.Z.title, " | ").concat(t),
                description: r,
                canonical: i,
                openGraph: {
                  type: "article",
                  article: {
                    publishedTime: b,
                    modifiedTime: u,
                    authors: [n.Z.author.name],
                    tags: s,
                  },
                  url: i,
                  title: t,
                  description: r,
                  images: h,
                },
              }),
              (0, l.jsx)(o.dX, {
                authorName: n.Z.author.name,
                dateModified: u,
                datePublished: b,
                description: r,
                images: d,
                publisherName: n.Z.author.name,
                title: t,
                url: i,
                publisherLogo: "".concat(
                  n.Z.siteUrl,
                  "/favicons/favicon-32x32.png"
                ),
              }),
            ],
          });
        };
    },
    3564: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return G;
        },
      });
      var l = {};
      r.r(l),
        r.d(l, {
          MDXContext: function () {
            return f;
          },
          MDXProvider: function () {
            return j;
          },
          useMDXComponents: function () {
            return v;
          },
          withMDXComponents: function () {
            return p;
          },
        });
      var o = r(5893),
        n = r(4541),
        a = r(7635);
      let c = (e) => {
        let { title: t, date: r } = e,
          { dateStr: l } = (0, a.Z)(r);
        return (0, o.jsxs)("header", {
          className: "pt-28 pb-14 text-5xl font-semibold text-center",
          children: [
            (0, o.jsx)("h1", {
              className: "break-keep max-md:text-xl leading-snug",
              children: t,
            }),
            (0, o.jsx)("p", {
              className: "text-sm text-neutral-500 mt-10",
              children: l,
            }),
          ],
        });
      };
      var i = r(1664),
        s = r.n(i),
        d = r(7294),
        b = r(9583);
      let u = (e) => {
          let t = e.split("\n").filter((e) => e.includes("# "));
          return t
            .filter((e) => "#" === e[0])
            .map((e) => {
              var t;
              let r =
                  (null === (t = e.match(/#/g)) || void 0 === t
                    ? void 0
                    : t.length) || 0,
                l = e.split("# ")[1].replace(/`|\*/g, "").trim();
              return {
                id: l.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/g, ""),
                title: l,
                count: r,
              };
            });
        },
        h = (e) => {
          let { content: t } = e,
            r = u(t),
            l = (0, d.useRef)({}),
            [n, a] = (0, d.useState)("");
          (0, d.useEffect)(() => {
            l.current = {};
            let e = (e) => {
                l.current = e.reduce(
                  (e, t) => ((e[t.target.id] = t), e),
                  l.current
                );
                let t = [];
                Object.keys(l.current).forEach((e) => {
                  let r = l.current[e];
                  r.isIntersecting && t.push(r);
                }),
                  (null == t ? void 0 : t.length) > 0 && a(t[0].target.id);
              },
              t = new IntersectionObserver(e, {
                rootMargin: "-50px 0px 0px 0px",
              });
            return (
              r.forEach((e) => {
                let { id: r } = e,
                  l = document.getElementById(r);
                l && t.observe(l);
              }),
              () => t.disconnect()
            );
          }, [r]);
          let c = () => {
              window.scroll({ top: 0, behavior: "smooth" });
            },
            i = () => {
              (document.body.scrollTop = document.body.scrollHeight),
                window.scroll(0, document.body.scrollHeight);
            };
          return (0, o.jsxs)("div", {
            className:
              "w-52 shrink-0 h-full top-0 py-[50px] sticky flex flex-col flex-nowrap justify-center items-center max-md:static max-md:h-fit max-md:w-full",
            children: [
              (0, o.jsx)("button", {
                onClick: c,
                className: "hover:text-blue-700 max-md:hidden",
                children: (0, o.jsx)(b.s$2, { size: 32 }),
              }),
              (0, o.jsx)("div", {
                id: "toc",
                className:
                  "w-full flex flex-col border-l-2 border-l-blue-100 dark:border-l-blue-900 my-4 rounded-none max-md:border-0 max-md:p-4 max-md:bg-neutral-200 max-md:rounded-xl dark:bg-neutral-700",
                children: r.map((e) => {
                  let { title: t, count: r, id: l } = e;
                  return (0, o.jsx)(
                    s(),
                    {
                      href: "#".concat(l),
                      className:
                        "hover:text-blue-700 box-decoration-slice py-1.5 pr-1 "
                          .concat(
                            n === l ? "bg-blue-100 dark:bg-blue-900" : "",
                            " header-"
                          )
                          .concat(r),
                      children: t,
                    },
                    t
                  );
                }),
              }),
              (0, o.jsx)("button", {
                onClick: i,
                children: (0, o.jsx)(b.RiI, {
                  size: 32,
                  className: "hover:text-blue-700 max-md:hidden",
                }),
              }),
            ],
          });
        };
      var x = r(5675),
        m = r.n(x),
        g = r(2746);
      let f = d.createContext({});
      function p(e) {
        return function (t) {
          let r = v(t.components);
          return d.createElement(e, { ...t, allComponents: r });
        };
      }
      function v(e) {
        let t = d.useContext(f);
        return d.useMemo(
          () => ("function" == typeof e ? e(t) : { ...t, ...e }),
          [t, e]
        );
      }
      let y = {};
      function j({ components: e, children: t, disableParentContext: r }) {
        let l = v(e);
        return r && (l = e || y), d.createElement(f.Provider, { value: l }, t);
      }
      function N({
        compiledSource: e,
        frontmatter: t,
        scope: r,
        components: o = {},
        lazy: n,
      }) {
        let [a, c] = (0, d.useState)(!n || "undefined" == typeof window);
        (0, d.useEffect)(() => {
          if (n) {
            let e = window.requestIdleCallback(() => {
              c(!0);
            });
            return () => window.cancelIdleCallback(e);
          }
        }, []);
        let i = (0, d.useMemo)(() => {
          let o = Object.assign(
              { opts: { ...l, ...g.jsxRuntime } },
              { frontmatter: t },
              r
            ),
            n = Object.keys(o),
            a = Object.values(o),
            c = Reflect.construct(Function, n.concat(`${e}`));
          return c.apply(c, a).default;
        }, [r, e]);
        if (!a)
          return d.createElement("div", {
            dangerouslySetInnerHTML: { __html: "" },
            suppressHydrationWarning: !0,
          });
        let s = d.createElement(j, { components: o }, d.createElement(i, null));
        return n ? d.createElement("div", null, s) : s;
      }
      "undefined" != typeof window &&
        ((window.requestIdleCallback =
          window.requestIdleCallback ||
          function (e) {
            var t = Date.now();
            return setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          }),
        (window.cancelIdleCallback =
          window.cancelIdleCallback ||
          function (e) {
            clearTimeout(e);
          }));
      let w = (e) => {
          let { children: t } = e,
            r = "";
          return (
            null == t ||
              t.map((e) => {
                var t, l, o;
                "string" == typeof e
                  ? (r += e.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi, ""))
                  : "string" ==
                      typeof (null == e
                        ? void 0
                        : null === (t = e.props) || void 0 === t
                        ? void 0
                        : t.children) &&
                    (r +=
                      null == e
                        ? void 0
                        : null === (l = e.props) || void 0 === l
                        ? void 0
                        : null === (o = l.children) || void 0 === o
                        ? void 0
                        : o.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi, ""));
              }),
            r
          );
        },
        E = {
          Image: m(),
          table: (e) =>
            (0, o.jsx)("table", {
              ...e,
              className: "border-collapse border border-neutral-200",
              children: null == e ? void 0 : e.children,
            }),
          th: (e) =>
            (0, o.jsx)("th", {
              ...e,
              className: "py-2 px-4 border border-neutral-200 text-left",
              children: null == e ? void 0 : e.children,
            }),
          td: (e) =>
            (0, o.jsx)("td", {
              ...e,
              className: "py-2 px-4 border border-neutral-200",
              children: null == e ? void 0 : e.children,
            }),
          blockquote: (e) =>
            (0, o.jsx)("blockquote", {
              ...e,
              className: "border-l-4 pl-3 my-2 border-neutral-600",
              children: null == e ? void 0 : e.children,
            }),
          ul: (e) =>
            (0, o.jsx)("ul", {
              ...e,
              className: "pl-3 my-2 ml-4 list-disc",
              children: null == e ? void 0 : e.children,
            }),
          ol: (e) =>
            (0, o.jsx)("ol", {
              ...e,
              className: "pl-3 my-2 ml-4 list-decimal",
              children: null == e ? void 0 : e.children,
            }),
          code: (e) =>
            (0, o.jsx)("code", {
              className: "",
              ...e,
              children: null == e ? void 0 : e.children,
            }),
          a: (e) =>
            (null == e ? void 0 : e.href) && "#" === e.href[0]
              ? (0, o.jsx)("a", {
                  href: "".concat(null == e ? void 0 : e.href),
                  ...e,
                  className: "underline",
                  children: null == e ? void 0 : e.children,
                })
              : (0, o.jsx)("a", {
                  href: "".concat(null == e ? void 0 : e.href),
                  ...e,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "hover:text-blue-700 underline",
                  children: null == e ? void 0 : e.children,
                }),
          h1: (e) =>
            (0, o.jsx)("h1", {
              className: "font-bold text-2xl pt-8 pb-2 max-md:text-xl",
              id: w(e),
              children: e.children,
            }),
          h2: (e) =>
            (0, o.jsx)("h2", {
              className: "font-bold text-xl pt-8 pb-2 max-md:text-lg",
              id: w(e),
              children: e.children,
            }),
          h3: (e) =>
            (0, o.jsx)("h3", {
              className: "font-bold pt-6 pb-2 text-lg max-md:text",
              id: w(e),
              children: e.children,
            }),
          h4: (e) =>
            (0, o.jsx)("h4", {
              className: "font-bold pt-6 pb-2 text-lg max-md:text",
              id: w(e),
              children: e.children,
            }),
          h5: (e) =>
            (0, o.jsx)("h5", {
              className: "font-bold pt-4 pb-2 text-lg max-md:text",
              id: w(e),
              children: e.children,
            }),
          h6: (e) =>
            (0, o.jsx)("h6", {
              className: "font-bold pt-4 pb-2 text-lg max-md:text",
              id: w(e),
              children: e.children,
            }),
          p: (e) =>
            (0, o.jsx)("p", {
              className: "font-light text py-2",
              ...e,
              children: e.children,
            }),
          li: (e) =>
            (0, o.jsx)("li", {
              className: "font-light text py-1 leading-6",
              ...e,
              children: e.children,
            }),
        },
        k = (e) =>
          (0, o.jsx)(N, {
            ...e,
            components: { ...E, ...(e.components || {}) },
          }),
        C = "https://utteranc.es/client.js",
        _ = "COYO-HM/COYO-HM.github.io",
        A = () => {
          let e = (0, d.createRef)(),
            t = (0, d.createRef)();
          return (
            (0, d.useEffect)(() => {
              if (null !== e.current && null !== t.current) {
                let r = document.createElement("script"),
                  l = document.createElement("script");
                Object.entries({
                  src: C,
                  repo: _,
                  "issue-term": "pathname",
                  label: "Comment",
                  theme: "github-light",
                  crossorigin: "anonymous",
                  async: "true",
                }).forEach((e) => {
                  let [t, l] = e;
                  r.setAttribute(t, l);
                }),
                  Object.entries({
                    src: C,
                    repo: _,
                    "issue-term": "pathname",
                    label: "Comment",
                    theme: "photon-dark",
                    crossorigin: "anonymous",
                    async: "true",
                  }).forEach((e) => {
                    let [t, r] = e;
                    l.setAttribute(t, r);
                  }),
                  e.current.appendChild(r),
                  t.current.appendChild(l);
              }
            }, []),
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)("div", { ref: e, id: "utterances-light" }),
                (0, o.jsx)("div", { ref: t, id: "utterances-dark" }),
              ],
            })
          );
        };
      var R = r(8014),
        S = r(5117);
      let I = (e) => {
          let { tags: t, slug: r } = e;
          return (0, o.jsxs)("div", {
            className: "pt-4 flex flex-row items-center flex-wrap",
            children: [
              (0, o.jsx)("h1", {
                className: "text-lg mr-3 mb-2",
                children: "Tags",
              }),
              t.map((e) => {
                let t = S.Z[e],
                  r =
                    (null == t ? void 0 : t.bg_hover) ||
                    "hover:bg-blue-700 dark:hover:bg-blue-700";
                return (0, o.jsxs)(
                  s(),
                  {
                    className:
                      "mr-2 mb-2 h-6 p-1 w-fit break-keep text-xs rounded bg-neutral-100 dark:bg-neutral-700 hover:text-white ".concat(
                        r
                      ),
                    href: "/blog/0/".concat(e),
                    children: ["#", (null == t ? void 0 : t.label) || e],
                  },
                  e
                );
              }),
            ],
          });
        },
        M = (e) => {
          let {
              post: {
                fields: { slug: t },
                frontMatter: r,
                body: l,
                path: a,
              },
              mdx: i,
            } = e,
            {
              title: s,
              category: d,
              tags: b,
              date: u,
              description: x,
              socialImageCredit: m,
              thumbnail: g,
            } = r;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(n.Rj, {
                title: "".concat(s),
                summary: x,
                date: u,
                url: R.Z.siteUrl + t,
                tags: b,
                images: [],
              }),
              (0, o.jsxs)("article", {
                className: "flex flex-col",
                id: "post",
                children: [
                  (0, o.jsx)(c, { ...r }),
                  (0, o.jsxs)("div", {
                    className:
                      "flex flex-row flex-nowrap relative border-y border-y-blue-700 max-md:flex-col-reverse",
                    children: [
                      (0, o.jsxs)("div", {
                        className:
                          "grow shrink pr-10 pt-5 min-w-0 max-md:p-0 max-md:pb-4",
                        children: [
                          (0, o.jsx)(k, { ...i }),
                          (0, o.jsx)(I, { tags: b, slug: t }),
                        ],
                      }),
                      (0, o.jsx)(h, { content: l }),
                    ],
                  }),
                  (0, o.jsx)(A, {}),
                ],
              }),
            ],
          });
        };
      var G = M;
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
    7635: function (e, t) {
      "use strict";
      let r = (e) => {
        let t = new Date(e),
          r = t.getFullYear(),
          l = t.getMonth() + 1,
          o = t.getDate();
        return {
          year: r,
          month: l,
          date: o,
          dateStr: "".concat(r, ".").concat(l, ".").concat(o),
        };
      };
      t.Z = r;
    },
    2746: function (e, t, r) {
      e.exports.jsxRuntime = r(5893);
    },
  },
]);

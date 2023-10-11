(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [130],
  {
    2962: function (e, t, r) {
      "use strict";
      r.d(t, {
        PB: function () {
          return h;
        },
        dX: function () {
          return O;
        },
      });
      var o = r(7294),
        a = r(9008),
        n = r.n(a);
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r)
                  Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, t) {
        if (null == e) return {};
        var r,
          o,
          a = {},
          n = Object.keys(e);
        for (o = 0; o < n.length; o++)
          (r = n[o]), t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a;
      }
      var p = ["keyOverride"],
        c = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        s = function (e, t, r) {
          void 0 === t && (t = []);
          var a = void 0 === r ? {} : r,
            n = a.defaultWidth,
            i = a.defaultHeight;
          return t.reduce(function (t, r, a) {
            return (
              t.push(
                o.createElement("meta", {
                  key: "og:" + e + ":0" + a,
                  property: "og:" + e,
                  content: r.url,
                })
              ),
              r.alt &&
                t.push(
                  o.createElement("meta", {
                    key: "og:" + e + ":alt0" + a,
                    property: "og:" + e + ":alt",
                    content: r.alt,
                  })
                ),
              r.secureUrl &&
                t.push(
                  o.createElement("meta", {
                    key: "og:" + e + ":secure_url0" + a,
                    property: "og:" + e + ":secure_url",
                    content: r.secureUrl.toString(),
                  })
                ),
              r.type &&
                t.push(
                  o.createElement("meta", {
                    key: "og:" + e + ":type0" + a,
                    property: "og:" + e + ":type",
                    content: r.type.toString(),
                  })
                ),
              r.width
                ? t.push(
                    o.createElement("meta", {
                      key: "og:" + e + ":width0" + a,
                      property: "og:" + e + ":width",
                      content: r.width.toString(),
                    })
                  )
                : n &&
                  t.push(
                    o.createElement("meta", {
                      key: "og:" + e + ":width0" + a,
                      property: "og:" + e + ":width",
                      content: n.toString(),
                    })
                  ),
              r.height
                ? t.push(
                    o.createElement("meta", {
                      key: "og:" + e + ":height" + a,
                      property: "og:" + e + ":height",
                      content: r.height.toString(),
                    })
                  )
                : i &&
                  t.push(
                    o.createElement("meta", {
                      key: "og:" + e + ":height" + a,
                      property: "og:" + e + ":height",
                      content: i.toString(),
                    })
                  ),
              t
            );
          }, []);
        },
        d = function (e) {
          var t,
            r,
            a,
            n,
            d,
            u = [];
          e.titleTemplate && (c.templateTitle = e.titleTemplate);
          var h = "";
          e.title
            ? ((h = e.title),
              c.templateTitle &&
                (h = c.templateTitle.replace(/%s/g, function () {
                  return h;
                })))
            : e.defaultTitle && (h = e.defaultTitle),
            h && u.push(o.createElement("title", { key: "title" }, h));
          var m = e.noindex || c.noindex || e.dangerouslySetAllPagesToNoIndex,
            f = e.nofollow || c.nofollow || e.dangerouslySetAllPagesToNoFollow,
            g = "";
          if (e.robotsProps) {
            var y = e.robotsProps,
              v = y.nosnippet,
              b = y.maxSnippet,
              k = y.maxImagePreview,
              G = y.maxVideoPreview,
              E = y.noarchive,
              w = y.noimageindex,
              O = y.notranslate,
              _ = y.unavailableAfter;
            g =
              (v ? ",nosnippet" : "") +
              (b ? ",max-snippet:" + b : "") +
              (k ? ",max-image-preview:" + k : "") +
              (E ? ",noarchive" : "") +
              (_ ? ",unavailable_after:" + _ : "") +
              (w ? ",noimageindex" : "") +
              (G ? ",max-video-preview:" + G : "") +
              (O ? ",notranslate" : "");
          }
          if (
            (m || f
              ? (e.dangerouslySetAllPagesToNoIndex && (c.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (c.nofollow = !0),
                u.push(
                  o.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content:
                      (m ? "noindex" : "index") +
                      "," +
                      (f ? "nofollow" : "follow") +
                      g,
                  })
                ))
              : u.push(
                  o.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content: "index,follow" + g,
                  })
                ),
            e.description &&
              u.push(
                o.createElement("meta", {
                  key: "description",
                  name: "description",
                  content: e.description,
                })
              ),
            e.themeColor &&
              u.push(
                o.createElement("meta", {
                  key: "theme-color",
                  name: "theme-color",
                  content: e.themeColor,
                })
              ),
            e.mobileAlternate &&
              u.push(
                o.createElement("link", {
                  rel: "alternate",
                  key: "mobileAlternate",
                  media: e.mobileAlternate.media,
                  href: e.mobileAlternate.href,
                })
              ),
            e.languageAlternates &&
              e.languageAlternates.length > 0 &&
              e.languageAlternates.forEach(function (e) {
                u.push(
                  o.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href,
                  })
                );
              }),
            e.twitter &&
              (e.twitter.cardType &&
                u.push(
                  o.createElement("meta", {
                    key: "twitter:card",
                    name: "twitter:card",
                    content: e.twitter.cardType,
                  })
                ),
              e.twitter.site &&
                u.push(
                  o.createElement("meta", {
                    key: "twitter:site",
                    name: "twitter:site",
                    content: e.twitter.site,
                  })
                ),
              e.twitter.handle &&
                u.push(
                  o.createElement("meta", {
                    key: "twitter:creator",
                    name: "twitter:creator",
                    content: e.twitter.handle,
                  })
                )),
            e.facebook &&
              e.facebook.appId &&
              u.push(
                o.createElement("meta", {
                  key: "fb:app_id",
                  property: "fb:app_id",
                  content: e.facebook.appId,
                })
              ),
            ((null != (t = e.openGraph) && t.title) || h) &&
              u.push(
                o.createElement("meta", {
                  key: "og:title",
                  property: "og:title",
                  content: (null == (n = e.openGraph) ? void 0 : n.title) || h,
                })
              ),
            ((null != (r = e.openGraph) && r.description) || e.description) &&
              u.push(
                o.createElement("meta", {
                  key: "og:description",
                  property: "og:description",
                  content:
                    (null == (d = e.openGraph) ? void 0 : d.description) ||
                    e.description,
                })
              ),
            e.openGraph)
          ) {
            if (
              ((e.openGraph.url || e.canonical) &&
                u.push(
                  o.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var x = e.openGraph.type.toLowerCase();
              u.push(
                o.createElement("meta", {
                  key: "og:type",
                  property: "og:type",
                  content: x,
                })
              ),
                "profile" === x && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      u.push(
                        o.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      u.push(
                        o.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      u.push(
                        o.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      u.push(
                        o.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : "book" === x && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, t) {
                        u.push(
                          o.createElement("meta", {
                            key: "book:author:0" + t,
                            property: "book:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.book.isbn &&
                      u.push(
                        o.createElement("meta", {
                          key: "book:isbn",
                          property: "book:isbn",
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      u.push(
                        o.createElement("meta", {
                          key: "book:release_date",
                          property: "book:release_date",
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, t) {
                        u.push(
                          o.createElement("meta", {
                            key: "book:tag:0" + t,
                            property: "book:tag",
                            content: e,
                          })
                        );
                      }))
                  : "article" === x && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      u.push(
                        o.createElement("meta", {
                          key: "article:published_time",
                          property: "article:published_time",
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      u.push(
                        o.createElement("meta", {
                          key: "article:modified_time",
                          property: "article:modified_time",
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      u.push(
                        o.createElement("meta", {
                          key: "article:expiration_time",
                          property: "article:expiration_time",
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, t) {
                        u.push(
                          o.createElement("meta", {
                            key: "article:author:0" + t,
                            property: "article:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.article.section &&
                      u.push(
                        o.createElement("meta", {
                          key: "article:section",
                          property: "article:section",
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, t) {
                        u.push(
                          o.createElement("meta", {
                            key: "article:tag:0" + t,
                            property: "article:tag",
                            content: e,
                          })
                        );
                      }))
                  : ("video.movie" === x ||
                      "video.episode" === x ||
                      "video.tv_show" === x ||
                      "video.other" === x) &&
                    e.openGraph.video &&
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, t) {
                        e.profile &&
                          u.push(
                            o.createElement("meta", {
                              key: "video:actor:0" + t,
                              property: "video:actor",
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            u.push(
                              o.createElement("meta", {
                                key: "video:actor:role:0" + t,
                                property: "video:actor:role",
                                content: e.role,
                              })
                            );
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, t) {
                        u.push(
                          o.createElement("meta", {
                            key: "video:director:0" + t,
                            property: "video:director",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, t) {
                        u.push(
                          o.createElement("meta", {
                            key: "video:writer:0" + t,
                            property: "video:writer",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.duration &&
                      u.push(
                        o.createElement("meta", {
                          key: "video:duration",
                          property: "video:duration",
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      u.push(
                        o.createElement("meta", {
                          key: "video:release_date",
                          property: "video:release_date",
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, t) {
                        u.push(
                          o.createElement("meta", {
                            key: "video:tag:0" + t,
                            property: "video:tag",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.series &&
                      u.push(
                        o.createElement("meta", {
                          key: "video:series",
                          property: "video:series",
                          content: e.openGraph.video.series,
                        })
                      ));
            }
            e.defaultOpenGraphImageWidth &&
              (c.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight &&
                (c.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                u.push.apply(
                  u,
                  s("image", e.openGraph.images, {
                    defaultWidth: c.defaultOpenGraphImageWidth,
                    defaultHeight: c.defaultOpenGraphImageHeight,
                  })
                ),
              e.defaultOpenGraphVideoWidth &&
                (c.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight &&
                (c.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                u.push.apply(
                  u,
                  s("video", e.openGraph.videos, {
                    defaultWidth: c.defaultOpenGraphVideoWidth,
                    defaultHeight: c.defaultOpenGraphVideoHeight,
                  })
                ),
              e.openGraph.audio &&
                u.push.apply(u, s("audio", e.openGraph.audio)),
              e.openGraph.locale &&
                u.push(
                  o.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale,
                  })
                ),
              (e.openGraph.siteName || e.openGraph.site_name) &&
                u.push(
                  o.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.siteName || e.openGraph.site_name,
                  })
                );
          }
          return (
            e.canonical &&
              u.push(
                o.createElement("link", {
                  rel: "canonical",
                  href: e.canonical,
                  key: "canonical",
                })
              ),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                var t,
                  r,
                  a = e.keyOverride,
                  n = l(e, p);
                u.push(
                  o.createElement(
                    "meta",
                    i(
                      {
                        key:
                          "meta:" +
                          (null !=
                          (t =
                            null != (r = null != a ? a : n.name)
                              ? r
                              : n.property)
                            ? t
                            : n.httpEquiv),
                      },
                      n
                    )
                  )
                );
              }),
            null != (a = e.additionalLinkTags) &&
              a.length &&
              e.additionalLinkTags.forEach(function (e) {
                var t;
                u.push(
                  o.createElement(
                    "link",
                    i(
                      {
                        key:
                          "link" +
                          (null != (t = e.keyOverride) ? t : e.href) +
                          e.rel,
                      },
                      e
                    )
                  )
                );
              }),
            u
          );
        },
        u = function (e) {
          return o.createElement(n(), null, d(e));
        },
        h = function (e) {
          var t = e.title,
            r = e.themeColor,
            a = e.noindex,
            n = void 0 !== a && a,
            i = e.nofollow,
            l = e.robotsProps,
            p = e.description,
            c = e.canonical,
            s = e.openGraph,
            h = e.facebook,
            m = e.twitter,
            f = e.additionalMetaTags,
            g = e.titleTemplate,
            y = e.defaultTitle,
            v = e.mobileAlternate,
            b = e.languageAlternates,
            k = e.additionalLinkTags,
            G = e.useAppDir;
          return o.createElement(
            o.Fragment,
            null,
            void 0 !== G && G
              ? d({
                  title: t,
                  themeColor: r,
                  noindex: n,
                  nofollow: i,
                  robotsProps: l,
                  description: p,
                  canonical: c,
                  facebook: h,
                  openGraph: s,
                  additionalMetaTags: f,
                  twitter: m,
                  titleTemplate: g,
                  defaultTitle: y,
                  mobileAlternate: v,
                  languageAlternates: b,
                  additionalLinkTags: k,
                })
              : o.createElement(u, {
                  title: t,
                  themeColor: r,
                  noindex: n,
                  nofollow: i,
                  robotsProps: l,
                  description: p,
                  canonical: c,
                  facebook: h,
                  openGraph: s,
                  additionalMetaTags: f,
                  twitter: m,
                  titleTemplate: g,
                  defaultTitle: y,
                  mobileAlternate: v,
                  languageAlternates: b,
                  additionalLinkTags: k,
                })
          );
        },
        m = function (e, t) {
          var r = t;
          return (
            Array.isArray(r) && 1 === r.length && (r = i({}, t[0])),
            {
              __html: JSON.stringify(
                Array.isArray(r)
                  ? r.map(function (t) {
                      return f(e, t);
                    })
                  : f(e, r),
                b
              ),
            }
          );
        },
        f = function (e, t) {
          var r = t.id,
            o = i({}, (void 0 === r ? void 0 : r) ? { "@id": t.id } : {}, t);
          return (
            delete o.id, i({ "@context": "https://schema.org", "@type": e }, o)
          );
        },
        g = Object.freeze({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&apos;",
        }),
        y = RegExp("[" + Object.keys(g).join("") + "]", "g"),
        v = function (e) {
          return g[e];
        },
        b = function (e, t) {
          switch (typeof t) {
            case "object":
              if (null === t) return;
              return t;
            case "number":
            case "boolean":
            case "bigint":
              return t;
            case "string":
              return t.replace(y, v);
            default:
              return;
          }
        },
        k = [
          "type",
          "keyOverride",
          "scriptKey",
          "scriptId",
          "dataArray",
          "useAppDir",
        ];
      function G(e) {
        var t = e.type,
          r = void 0 === t ? "Thing" : t,
          a = e.keyOverride,
          p = e.scriptKey,
          c = e.scriptId,
          s = void 0 === c ? void 0 : c,
          d = e.dataArray,
          u = e.useAppDir,
          h = l(e, k),
          f = function () {
            return o.createElement("script", {
              type: "application/ld+json",
              id: s,
              "data-testid": s,
              dangerouslySetInnerHTML: m(r, void 0 === d ? i({}, h) : d),
              key: "jsonld-" + p + (a ? "-" + a : ""),
            });
          };
        return void 0 !== u && u
          ? o.createElement(f, null)
          : o.createElement(n(), null, f());
      }
      function E(e) {
        if ("string" == typeof e) return { "@type": "Person", name: e };
        if (e.name) {
          var t;
          return {
            "@type": null != (t = null == e ? void 0 : e.type) ? t : "Person",
            name: e.name,
            url: null == e ? void 0 : e.url,
          };
        }
      }
      var w = [
        "type",
        "keyOverride",
        "url",
        "title",
        "images",
        "datePublished",
        "dateModified",
        "authorName",
        "publisherName",
        "publisherLogo",
        "description",
        "isAccessibleForFree",
      ];
      function O(e) {
        var t = e.type,
          r = e.keyOverride,
          a = e.url,
          n = e.title,
          p = e.images,
          c = e.datePublished,
          s = e.dateModified,
          d = e.authorName,
          u = e.publisherName,
          h = e.publisherLogo,
          m = e.description,
          f = e.isAccessibleForFree,
          g = l(e, w),
          y = i(
            {
              datePublished: c,
              description: m,
              mainEntityOfPage: { "@type": "WebPage", "@id": a },
              headline: n,
              image: p,
              dateModified: s || c,
              author: Array.isArray(d)
                ? d
                    .map(function (e) {
                      return E(e);
                    })
                    .filter(function (e) {
                      return !!e;
                    })
                : d
                ? E(d)
                : void 0,
              publisher: (function (e, t) {
                if (e)
                  return {
                    "@type": "Organization",
                    name: e,
                    logo: (function (e) {
                      if (e) return { "@type": "ImageObject", url: e };
                    })(t),
                  };
              })(void 0 === u ? void 0 : u, void 0 === h ? void 0 : h),
              isAccessibleForFree: f,
            },
            g
          );
        return o.createElement(
          G,
          i({ type: void 0 === t ? "Article" : t, keyOverride: r }, y, {
            scriptKey: "article",
          })
        );
      }
    },
    9749: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(6495).Z,
        a = r(2648).Z,
        n = r(1598).Z,
        i = r(7273).Z,
        l = n(r(7294)),
        p = a(r(3121)),
        c = r(2675),
        s = r(139),
        d = r(8730);
      r(7238);
      var u = a(r(9824));
      let h = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "https://coyo-hm.github.io/",
        loader: "imgix",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
      function m(e) {
        return void 0 !== e.default;
      }
      function f(e) {
        return "number" == typeof e || void 0 === e
          ? e
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function g(e, t, r, a, n, i, l) {
        if (!e || e["data-loaded-src"] === t) return;
        e["data-loaded-src"] = t;
        let p = "decode" in e ? e.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          if (e.parentNode) {
            if (("blur" === r && i(!0), null == a ? void 0 : a.current)) {
              let t = new Event("load");
              Object.defineProperty(t, "target", { writable: !1, value: e });
              let r = !1,
                n = !1;
              a.current(
                o({}, t, {
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => r,
                  isPropagationStopped: () => n,
                  persist: () => {},
                  preventDefault: () => {
                    (r = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (n = !0), t.stopPropagation();
                  },
                })
              );
            }
            (null == n ? void 0 : n.current) && n.current(e);
          }
        });
      }
      let y = l.forwardRef((e, t) => {
          var {
              imgAttributes: r,
              heightInt: a,
              widthInt: n,
              qualityInt: p,
              className: c,
              imgStyle: s,
              blurStyle: d,
              isLazy: u,
              fill: h,
              placeholder: m,
              loading: f,
              srcString: y,
              config: v,
              unoptimized: b,
              loader: k,
              onLoadRef: G,
              onLoadingCompleteRef: E,
              setBlurComplete: w,
              setShowAltText: O,
              onLoad: _,
              onError: x,
            } = e,
            A = i(e, [
              "imgAttributes",
              "heightInt",
              "widthInt",
              "qualityInt",
              "className",
              "imgStyle",
              "blurStyle",
              "isLazy",
              "fill",
              "placeholder",
              "loading",
              "srcString",
              "config",
              "unoptimized",
              "loader",
              "onLoadRef",
              "onLoadingCompleteRef",
              "setBlurComplete",
              "setShowAltText",
              "onLoad",
              "onError",
            ]);
          return (
            (f = u ? "lazy" : f),
            l.default.createElement(
              l.default.Fragment,
              null,
              l.default.createElement(
                "img",
                Object.assign({}, A, r, {
                  width: n,
                  height: a,
                  decoding: "async",
                  "data-nimg": h ? "fill" : "1",
                  className: c,
                  loading: f,
                  style: o({}, s, d),
                  ref: l.useCallback(
                    (e) => {
                      t &&
                        ("function" == typeof t
                          ? t(e)
                          : "object" == typeof t && (t.current = e)),
                        e &&
                          (x && (e.src = e.src),
                          e.complete && g(e, y, m, G, E, w, b));
                    },
                    [y, m, G, E, w, x, b, t]
                  ),
                  onLoad: (e) => {
                    let t = e.currentTarget;
                    g(t, y, m, G, E, w, b);
                  },
                  onError: (e) => {
                    O(!0), "blur" === m && w(!0), x && x(e);
                  },
                })
              )
            )
          );
        }),
        v = l.forwardRef((e, t) => {
          let r, a;
          var n,
            {
              src: g,
              sizes: v,
              unoptimized: b = !1,
              priority: k = !1,
              loading: G,
              className: E,
              quality: w,
              width: O,
              height: _,
              fill: x,
              style: A,
              onLoad: T,
              onLoadingComplete: S,
              placeholder: j = "empty",
              blurDataURL: P,
              layout: I,
              objectFit: C,
              objectPosition: N,
              lazyBoundary: z,
              lazyRoot: L,
            } = e,
            W = i(e, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "className",
              "quality",
              "width",
              "height",
              "fill",
              "style",
              "onLoad",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
              "layout",
              "objectFit",
              "objectPosition",
              "lazyBoundary",
              "lazyRoot",
            ]);
          let M = l.useContext(d.ImageConfigContext),
            R = l.useMemo(() => {
              let e = h || M || s.imageConfigDefault,
                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                r = e.deviceSizes.sort((e, t) => e - t);
              return o({}, e, { allSizes: t, deviceSizes: r });
            }, [M]),
            H = W,
            D = H.loader || u.default;
          delete H.loader;
          let F = "__next_img_default" in D;
          if (F) {
            if ("custom" === R.loader)
              throw Error(
                'Image with src "'.concat(g, '" is missing "loader" prop.') +
                  "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
              );
          } else {
            let e = D;
            D = (t) => {
              let { config: r } = t,
                o = i(t, ["config"]);
              return e(o);
            };
          }
          if (I) {
            "fill" === I && (x = !0);
            let e = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[I];
            e && (A = o({}, A, e));
            let t = { responsive: "100vw", fill: "100vw" }[I];
            t && !v && (v = t);
          }
          let V = "",
            B = f(O),
            q = f(_);
          if ("object" == typeof (n = g) && (m(n) || void 0 !== n.src)) {
            let e = m(g) ? g.default : g;
            if (!e.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(e)
                )
              );
            if (!e.height || !e.width)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(e)
                )
              );
            if (
              ((r = e.blurWidth),
              (a = e.blurHeight),
              (P = P || e.blurDataURL),
              (V = e.src),
              !x)
            ) {
              if (B || q) {
                if (B && !q) {
                  let t = B / e.width;
                  q = Math.round(e.height * t);
                } else if (!B && q) {
                  let t = q / e.height;
                  B = Math.round(e.width * t);
                }
              } else (B = e.width), (q = e.height);
            }
          }
          let U = !k && ("lazy" === G || void 0 === G);
          ((g = "string" == typeof g ? g : V).startsWith("data:") ||
            g.startsWith("blob:")) &&
            ((b = !0), (U = !1)),
            R.unoptimized && (b = !0),
            F && g.endsWith(".svg") && !R.dangerouslyAllowSVG && (b = !0);
          let [Z, J] = l.useState(!1),
            [K, X] = l.useState(!1),
            $ = f(w),
            Q = Object.assign(
              x
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: C,
                    objectPosition: N,
                  }
                : {},
              K ? {} : { color: "transparent" },
              A
            ),
            Y =
              "blur" === j && P && !Z
                ? {
                    backgroundSize: Q.objectFit || "cover",
                    backgroundPosition: Q.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf-8,'.concat(
                        c.getImageBlurSvg({
                          widthInt: B,
                          heightInt: q,
                          blurWidth: r,
                          blurHeight: a,
                          blurDataURL: P,
                        }),
                        '")'
                      ),
                  }
                : {},
            ee = (function (e) {
              let {
                config: t,
                src: r,
                unoptimized: o,
                width: a,
                quality: n,
                sizes: i,
                loader: l,
              } = e;
              if (o) return { src: r, srcSet: void 0, sizes: void 0 };
              let { widths: p, kind: c } = (function (e, t, r) {
                  let { deviceSizes: o, allSizes: a } = e;
                  if (r) {
                    let e = /(^|\s)(1?\d?\d)vw/g,
                      t = [];
                    for (let o; (o = e.exec(r)); o) t.push(parseInt(o[2]));
                    if (t.length) {
                      let e = 0.01 * Math.min(...t);
                      return {
                        widths: a.filter((t) => t >= o[0] * e),
                        kind: "w",
                      };
                    }
                    return { widths: a, kind: "w" };
                  }
                  if ("number" != typeof t) return { widths: o, kind: "w" };
                  let n = [
                    ...new Set(
                      [t, 2 * t].map(
                        (e) => a.find((t) => t >= e) || a[a.length - 1]
                      )
                    ),
                  ];
                  return { widths: n, kind: "x" };
                })(t, a, i),
                s = p.length - 1;
              return {
                sizes: i || "w" !== c ? i : "100vw",
                srcSet: p
                  .map((e, o) =>
                    ""
                      .concat(
                        l({ config: t, src: r, quality: n, width: e }),
                        " "
                      )
                      .concat("w" === c ? e : o + 1)
                      .concat(c)
                  )
                  .join(", "),
                src: l({ config: t, src: r, quality: n, width: p[s] }),
              };
            })({
              config: R,
              src: g,
              unoptimized: b,
              width: B,
              quality: $,
              sizes: v,
              loader: D,
            }),
            et = g,
            er = {
              imageSrcSet: ee.srcSet,
              imageSizes: ee.sizes,
              crossOrigin: H.crossOrigin,
            },
            eo = l.useRef(T);
          l.useEffect(() => {
            eo.current = T;
          }, [T]);
          let ea = l.useRef(S);
          l.useEffect(() => {
            ea.current = S;
          }, [S]);
          let en = o(
            {
              isLazy: U,
              imgAttributes: ee,
              heightInt: q,
              widthInt: B,
              qualityInt: $,
              className: E,
              imgStyle: Q,
              blurStyle: Y,
              loading: G,
              config: R,
              fill: x,
              unoptimized: b,
              placeholder: j,
              loader: D,
              srcString: et,
              onLoadRef: eo,
              onLoadingCompleteRef: ea,
              setBlurComplete: J,
              setShowAltText: X,
            },
            H
          );
          return l.default.createElement(
            l.default.Fragment,
            null,
            l.default.createElement(y, Object.assign({}, en, { ref: t })),
            k
              ? l.default.createElement(
                  p.default,
                  null,
                  l.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + ee.src + ee.srcSet + ee.sizes,
                        rel: "preload",
                        as: "image",
                        href: ee.srcSet ? void 0 : ee.src,
                      },
                      er
                    )
                  )
                )
              : null
          );
        });
      (t.default = v),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    2675: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getImageBlurSvg = function (e) {
          let {
              widthInt: t,
              heightInt: r,
              blurWidth: o,
              blurHeight: a,
              blurDataURL: n,
            } = e,
            i = o || t,
            l = a || r,
            p = n.startsWith("data:image/jpeg")
              ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
              : "";
          return i && l
            ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "
                .concat(i, " ")
                .concat(
                  l,
                  "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"
                )
                .concat(o && a ? "1" : "20", "'/%3E")
                .concat(
                  p,
                  "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(n, "'/%3E%3C/svg%3E")
            : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(
                n,
                "'/%3E%3C/svg%3E"
              );
        });
    },
    9824: function (e, t) {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: o, quality: a } = e;
        return ""
          .concat(t.path, "?url=")
          .concat(encodeURIComponent(r), "&w=")
          .concat(o, "&q=")
          .concat(a || 75);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (r.__next_img_default = !0),
        (t.default = r);
    },
    9008: function (e, t, r) {
      e.exports = r(3121);
    },
    5675: function (e, t, r) {
      e.exports = r(9749);
    },
  },
]);

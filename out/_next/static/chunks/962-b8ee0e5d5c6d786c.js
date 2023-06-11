(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [962],
  {
    2962: function (e, t, r) {
      "use strict";
      r.d(t, {
        PB: function () {
          return u;
        },
        dX: function () {
          return O;
        },
      });
      var a = r(7294),
        o = r(9008),
        n = r.n(o);
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var a in r)
                  Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
              }
              return e;
            }).apply(this, arguments);
      }
      function p(e, t) {
        if (null == e) return {};
        var r,
          a,
          o = {},
          n = Object.keys(e);
        for (a = 0; a < n.length; a++)
          (r = n[a]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      var l = ["keyOverride"],
        c = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        h = function (e, t, r) {
          void 0 === t && (t = []);
          var o = void 0 === r ? {} : r,
            n = o.defaultWidth,
            i = o.defaultHeight;
          return t.reduce(function (t, r, o) {
            return (
              t.push(
                a.createElement("meta", {
                  key: "og:" + e + ":0" + o,
                  property: "og:" + e,
                  content: r.url,
                })
              ),
              r.alt &&
                t.push(
                  a.createElement("meta", {
                    key: "og:" + e + ":alt0" + o,
                    property: "og:" + e + ":alt",
                    content: r.alt,
                  })
                ),
              r.secureUrl &&
                t.push(
                  a.createElement("meta", {
                    key: "og:" + e + ":secure_url0" + o,
                    property: "og:" + e + ":secure_url",
                    content: r.secureUrl.toString(),
                  })
                ),
              r.type &&
                t.push(
                  a.createElement("meta", {
                    key: "og:" + e + ":type0" + o,
                    property: "og:" + e + ":models",
                    content: r.type.toString(),
                  })
                ),
              r.width
                ? t.push(
                    a.createElement("meta", {
                      key: "og:" + e + ":width0" + o,
                      property: "og:" + e + ":width",
                      content: r.width.toString(),
                    })
                  )
                : n &&
                  t.push(
                    a.createElement("meta", {
                      key: "og:" + e + ":width0" + o,
                      property: "og:" + e + ":width",
                      content: n.toString(),
                    })
                  ),
              r.height
                ? t.push(
                    a.createElement("meta", {
                      key: "og:" + e + ":height" + o,
                      property: "og:" + e + ":height",
                      content: r.height.toString(),
                    })
                  )
                : i &&
                  t.push(
                    a.createElement("meta", {
                      key: "og:" + e + ":height" + o,
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
            o,
            n,
            d,
            s = [];
          e.titleTemplate && (c.templateTitle = e.titleTemplate);
          var u = "";
          e.title
            ? ((u = e.title),
              c.templateTitle &&
                (u = c.templateTitle.replace(/%s/g, function () {
                  return u;
                })))
            : e.defaultTitle && (u = e.defaultTitle),
            u && s.push(a.createElement("title", { key: "title" }, u));
          var m = e.noindex || c.noindex || e.dangerouslySetAllPagesToNoIndex,
            g = e.nofollow || c.nofollow || e.dangerouslySetAllPagesToNoFollow,
            f = "";
          if (e.robotsProps) {
            var y = e.robotsProps,
              v = y.nosnippet,
              k = y.maxSnippet,
              G = y.maxImagePreview,
              b = y.maxVideoPreview,
              E = y.noarchive,
              w = y.noimageindex,
              O = y.notranslate,
              T = y.unavailableAfter;
            f =
              (v ? ",nosnippet" : "") +
              (k ? ",max-snippet:" + k : "") +
              (G ? ",max-image-preview:" + G : "") +
              (E ? ",noarchive" : "") +
              (T ? ",unavailable_after:" + T : "") +
              (w ? ",noimageindex" : "") +
              (b ? ",max-video-preview:" + b : "") +
              (O ? ",notranslate" : "");
          }
          if (
            (m || g
              ? (e.dangerouslySetAllPagesToNoIndex && (c.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (c.nofollow = !0),
                s.push(
                  a.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content:
                      (m ? "noindex" : "index") +
                      "," +
                      (g ? "nofollow" : "follow") +
                      f,
                  })
                ))
              : s.push(
                  a.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content: "index,follow" + f,
                  })
                ),
            e.description &&
              s.push(
                a.createElement("meta", {
                  key: "description",
                  name: "description",
                  content: e.description,
                })
              ),
            e.themeColor &&
              s.push(
                a.createElement("meta", {
                  key: "theme-color",
                  name: "theme-color",
                  content: e.themeColor,
                })
              ),
            e.mobileAlternate &&
              s.push(
                a.createElement("link", {
                  rel: "alternate",
                  key: "mobileAlternate",
                  media: e.mobileAlternate.media,
                  href: e.mobileAlternate.href,
                })
              ),
            e.languageAlternates &&
              e.languageAlternates.length > 0 &&
              e.languageAlternates.forEach(function (e) {
                s.push(
                  a.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href,
                  })
                );
              }),
            e.twitter &&
              (e.twitter.cardType &&
                s.push(
                  a.createElement("meta", {
                    key: "twitter:card",
                    name: "twitter:card",
                    content: e.twitter.cardType,
                  })
                ),
              e.twitter.site &&
                s.push(
                  a.createElement("meta", {
                    key: "twitter:site",
                    name: "twitter:site",
                    content: e.twitter.site,
                  })
                ),
              e.twitter.handle &&
                s.push(
                  a.createElement("meta", {
                    key: "twitter:creator",
                    name: "twitter:creator",
                    content: e.twitter.handle,
                  })
                )),
            e.facebook &&
              e.facebook.appId &&
              s.push(
                a.createElement("meta", {
                  key: "fb:app_id",
                  property: "fb:app_id",
                  content: e.facebook.appId,
                })
              ),
            ((null != (t = e.openGraph) && t.title) || u) &&
              s.push(
                a.createElement("meta", {
                  key: "og:title",
                  property: "og:title",
                  content: (null == (n = e.openGraph) ? void 0 : n.title) || u,
                })
              ),
            ((null != (r = e.openGraph) && r.description) || e.description) &&
              s.push(
                a.createElement("meta", {
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
                s.push(
                  a.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var A = e.openGraph.type.toLowerCase();
              s.push(
                a.createElement("meta", {
                  key: "og:models",
                  property: "og:models",
                  content: A,
                })
              ),
                "profile" === A && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      s.push(
                        a.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      s.push(
                        a.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      s.push(
                        a.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      s.push(
                        a.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : "book" === A && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, t) {
                        s.push(
                          a.createElement("meta", {
                            key: "book:author:0" + t,
                            property: "book:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.book.isbn &&
                      s.push(
                        a.createElement("meta", {
                          key: "book:isbn",
                          property: "book:isbn",
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      s.push(
                        a.createElement("meta", {
                          key: "book:release_date",
                          property: "book:release_date",
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, t) {
                        s.push(
                          a.createElement("meta", {
                            key: "book:tag:0" + t,
                            property: "book:tag",
                            content: e,
                          })
                        );
                      }))
                  : "article" === A && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      s.push(
                        a.createElement("meta", {
                          key: "article:published_time",
                          property: "article:published_time",
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      s.push(
                        a.createElement("meta", {
                          key: "article:modified_time",
                          property: "article:modified_time",
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      s.push(
                        a.createElement("meta", {
                          key: "article:expiration_time",
                          property: "article:expiration_time",
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, t) {
                        s.push(
                          a.createElement("meta", {
                            key: "article:author:0" + t,
                            property: "article:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.article.section &&
                      s.push(
                        a.createElement("meta", {
                          key: "article:section",
                          property: "article:section",
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, t) {
                        s.push(
                          a.createElement("meta", {
                            key: "article:tag:0" + t,
                            property: "article:tag",
                            content: e,
                          })
                        );
                      }))
                  : ("video.movie" === A ||
                      "video.episode" === A ||
                      "video.tv_show" === A ||
                      "video.other" === A) &&
                    e.openGraph.video &&
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, t) {
                        e.profile &&
                          s.push(
                            a.createElement("meta", {
                              key: "video:actor:0" + t,
                              property: "video:actor",
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            s.push(
                              a.createElement("meta", {
                                key: "video:actor:role:0" + t,
                                property: "video:actor:role",
                                content: e.role,
                              })
                            );
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, t) {
                        s.push(
                          a.createElement("meta", {
                            key: "video:director:0" + t,
                            property: "video:director",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, t) {
                        s.push(
                          a.createElement("meta", {
                            key: "video:writer:0" + t,
                            property: "video:writer",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.duration &&
                      s.push(
                        a.createElement("meta", {
                          key: "video:duration",
                          property: "video:duration",
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      s.push(
                        a.createElement("meta", {
                          key: "video:release_date",
                          property: "video:release_date",
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, t) {
                        s.push(
                          a.createElement("meta", {
                            key: "video:tag:0" + t,
                            property: "video:tag",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.series &&
                      s.push(
                        a.createElement("meta", {
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
                s.push.apply(
                  s,
                  h("image", e.openGraph.images, {
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
                s.push.apply(
                  s,
                  h("video", e.openGraph.videos, {
                    defaultWidth: c.defaultOpenGraphVideoWidth,
                    defaultHeight: c.defaultOpenGraphVideoHeight,
                  })
                ),
              e.openGraph.audio &&
                s.push.apply(s, h("audio", e.openGraph.audio)),
              e.openGraph.locale &&
                s.push(
                  a.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale,
                  })
                ),
              (e.openGraph.siteName || e.openGraph.site_name) &&
                s.push(
                  a.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.siteName || e.openGraph.site_name,
                  })
                );
          }
          return (
            e.canonical &&
              s.push(
                a.createElement("link", {
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
                  o = e.keyOverride,
                  n = p(e, l);
                s.push(
                  a.createElement(
                    "meta",
                    i(
                      {
                        key:
                          "meta:" +
                          (null !=
                          (t =
                            null != (r = null != o ? o : n.name)
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
            null != (o = e.additionalLinkTags) &&
              o.length &&
              e.additionalLinkTags.forEach(function (e) {
                var t;
                s.push(
                  a.createElement(
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
            s
          );
        },
        s = function (e) {
          return a.createElement(n(), null, d(e));
        },
        u = function (e) {
          var t = e.title,
            r = e.themeColor,
            o = e.noindex,
            n = void 0 !== o && o,
            i = e.nofollow,
            p = e.robotsProps,
            l = e.description,
            c = e.canonical,
            h = e.openGraph,
            u = e.facebook,
            m = e.twitter,
            g = e.additionalMetaTags,
            f = e.titleTemplate,
            y = e.defaultTitle,
            v = e.mobileAlternate,
            k = e.languageAlternates,
            G = e.additionalLinkTags,
            b = e.useAppDir;
          return a.createElement(
            a.Fragment,
            null,
            void 0 !== b && b
              ? d({
                  title: t,
                  themeColor: r,
                  noindex: n,
                  nofollow: i,
                  robotsProps: p,
                  description: l,
                  canonical: c,
                  facebook: u,
                  openGraph: h,
                  additionalMetaTags: g,
                  twitter: m,
                  titleTemplate: f,
                  defaultTitle: y,
                  mobileAlternate: v,
                  languageAlternates: k,
                  additionalLinkTags: G,
                })
              : a.createElement(s, {
                  title: t,
                  themeColor: r,
                  noindex: n,
                  nofollow: i,
                  robotsProps: p,
                  description: l,
                  canonical: c,
                  facebook: u,
                  openGraph: h,
                  additionalMetaTags: g,
                  twitter: m,
                  titleTemplate: f,
                  defaultTitle: y,
                  mobileAlternate: v,
                  languageAlternates: k,
                  additionalLinkTags: G,
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
                      return g(e, t);
                    })
                  : g(e, r),
                k
              ),
            }
          );
        },
        g = function (e, t) {
          var r = t.id,
            a = i({}, (void 0 === r ? void 0 : r) ? { "@id": t.id } : {}, t);
          return (
            delete a.id, i({ "@context": "https://schema.org", "@type": e }, a)
          );
        },
        f = Object.freeze({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&apos;",
        }),
        y = RegExp("[" + Object.keys(f).join("") + "]", "g"),
        v = function (e) {
          return f[e];
        },
        k = function (e, t) {
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
        G = [
          "type",
          "keyOverride",
          "scriptKey",
          "scriptId",
          "dataArray",
          "useAppDir",
        ];
      function b(e) {
        var t = e.type,
          r = void 0 === t ? "Thing" : t,
          o = e.keyOverride,
          l = e.scriptKey,
          c = e.scriptId,
          h = void 0 === c ? void 0 : c,
          d = e.dataArray,
          s = e.useAppDir,
          u = p(e, G),
          g = function () {
            return a.createElement("script", {
              type: "application/ld+json",
              id: h,
              "data-testid": h,
              dangerouslySetInnerHTML: m(r, void 0 === d ? i({}, u) : d),
              key: "jsonld-" + l + (o ? "-" + o : ""),
            });
          };
        return void 0 !== s && s
          ? a.createElement(g, null)
          : a.createElement(n(), null, g());
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
          o = e.url,
          n = e.title,
          l = e.images,
          c = e.datePublished,
          h = e.dateModified,
          d = e.authorName,
          s = e.publisherName,
          u = e.publisherLogo,
          m = e.description,
          g = e.isAccessibleForFree,
          f = p(e, w),
          y = i(
            {
              datePublished: c,
              description: m,
              mainEntityOfPage: { "@type": "WebPage", "@id": o },
              headline: n,
              image: l,
              dateModified: h || c,
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
              })(void 0 === s ? void 0 : s, void 0 === u ? void 0 : u),
              isAccessibleForFree: g,
            },
            f
          );
        return a.createElement(
          b,
          i({ type: void 0 === t ? "Article" : t, keyOverride: r }, y, {
            scriptKey: "article",
          })
        );
      }
    },
    9008: function (e, t, r) {
      e.exports = r(3121);
    },
  },
]);

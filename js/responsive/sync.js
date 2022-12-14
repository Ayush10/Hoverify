!(function (t) {
  var e = {};
  function n(o) {
    if (e[o]) return e[o].exports;
    var r = (e[o] = { i: o, l: !1, exports: {} });
    return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            o,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 2));
})([
  function (t, e, n) {
    var o = n(1);
    function r(t, e, n) {
      Array.isArray(t) ? t.push(e) : (t[n] = e);
    }
    t.exports = function (t) {
      var e,
        n,
        i,
        c = [];
      if (Array.isArray(t)) (n = []), (e = t.length - 1);
      else {
        if ("object" != typeof t || null === t)
          throw new TypeError(
            "Expecting an Array or an Object, but `" +
              (null === t ? "null" : typeof t) +
              "` provided."
          );
        (n = {}), (i = Object.keys(t)), (e = i.length - 1);
      }
      return (
        (function n(u, l) {
          var a, s, d;
          for (
            s = i ? i[l] : l,
              Array.isArray(t[s]) ||
                (void 0 === t[s] ? (t[s] = []) : (t[s] = [t[s]])),
              a = 0;
            a < t[s].length;
            a++
          )
            (f = u),
              r((d = Array.isArray(f) ? [].concat(f) : o(f)), t[s][a], s),
              l >= e ? c.push(d) : n(d, l + 1);
          var f;
        })(n, 0),
        c
      );
    };
  },
  function (t, e) {
    t.exports = function () {
      for (var t = {}, e = 0; e < arguments.length; e++) {
        var o = arguments[e];
        for (var r in o) n.call(o, r) && (t[r] = o[r]);
      }
      return t;
    };
    var n = Object.prototype.hasOwnProperty;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var o,
      r,
      i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol
                ? "symbol"
                : typeof t;
            },
      c = function (t) {
        return (
          null != t &&
          "object" === (void 0 === t ? "undefined" : i(t)) &&
          1 === t.nodeType &&
          "object" === i(t.style) &&
          "object" === i(t.ownerDocument)
        );
      };
    !(function (t) {
      (t.NONE = "none"), (t.DESCENDANT = "descendant"), (t.CHILD = "child");
    })(o || (o = {})),
      (function (t) {
        (t.id = "id"),
          (t.class = "class"),
          (t.tag = "tag"),
          (t.attribute = "attribute"),
          (t.nthchild = "nthchild"),
          (t.nthoftype = "nthoftype");
      })(r || (r = {}));
    function u(t = "unknown problem", ...e) {
      console.warn("CssSelectorGenerator: " + t, ...e);
    }
    const l = {
      selectors: [r.id, r.class, r.tag, r.attribute],
      includeTag: !1,
      whitelist: [],
      blacklist: [],
      combineWithinSelector: !0,
      combineBetweenSelectors: !0,
      root: null,
      maxCombinations: Number.POSITIVE_INFINITY,
      maxCandidates: Number.POSITIVE_INFINITY,
    };
    function a(t) {
      return Array.isArray(t)
        ? t.filter((t) => {
            return (e = r), (n = t), Object.values(e).includes(n);
            var e, n;
          })
        : [];
    }
    function s(t) {
      return t instanceof RegExp;
    }
    function d(t) {
      return ["string", "function"].includes(typeof t) || s(t);
    }
    function f(t) {
      return Array.isArray(t) ? t.filter(d) : [];
    }
    function m(t) {
      const e = [
        Node.DOCUMENT_NODE,
        Node.DOCUMENT_FRAGMENT_NODE,
        Node.ELEMENT_NODE,
      ];
      return (
        (function (t) {
          return t instanceof Node;
        })(t) && e.includes(t.nodeType)
      );
    }
    function h(t, e) {
      if (m(t))
        return (
          t.contains(e) ||
            u(
              "element root mismatch",
              "Provided root does not contain the element. This will most likely result in producing a fallback selector using element's real root node. If you plan to use the selector using provided root (e.g. `root.querySelector`), it will nto work as intended."
            ),
          t
        );
      const n = e.getRootNode({ composed: !1 });
      return m(n)
        ? (n !== document &&
            u(
              "shadow root inferred",
              "You did not provide a root and the element is a child of Shadow DOM. This will produce a selector using ShadowRoot as a root. If you plan to use the selector using document as a root (e.g. `document.querySelector`), it will not work as intended."
            ),
          n)
        : e.ownerDocument.querySelector(":root");
    }
    function p(t) {
      return "number" == typeof t ? t : Number.POSITIVE_INFINITY;
    }
    function g(t = []) {
      const [e = [], ...n] = t;
      return 0 === n.length
        ? e
        : n.reduce((t, e) => t.filter((t) => e.includes(t)), e);
    }
    function b(t) {
      return [].concat(...t);
    }
    function y(t) {
      const e = t.map((t) => {
        if (s(t)) return (e) => t.test(e);
        if ("function" == typeof t)
          return (e) => {
            const n = t(e);
            return "boolean" != typeof n
              ? (u(
                  "pattern matcher function invalid",
                  "Provided pattern matching function does not return boolean. It's result will be ignored.",
                  t
                ),
                !1)
              : n;
          };
        if ("string" == typeof t) {
          const e = new RegExp(
            "^" +
              (t.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".+") +
                "$")
          );
          return (t) => e.test(t);
        }
        return (
          u(
            "pattern matcher invalid",
            "Pattern matching only accepts strings, regular expressions and/or functions. This item is invalid and will be ignored.",
            t
          ),
          () => !1
        );
      });
      return (t) => e.some((e) => e(t));
    }
    function w(t, e, n) {
      const o = Array.from(h(n, t[0]).querySelectorAll(e));
      return o.length === t.length && t.every((t) => o.includes(t));
    }
    function v(t, e) {
      e =
        null != e
          ? e
          : (function (t) {
              return t.ownerDocument.querySelector(":root");
            })(t);
      const n = [];
      let o = t;
      for (; c(o) && o !== e; ) n.push(o), (o = o.parentElement);
      return n;
    }
    function E(t, e) {
      return g(t.map((t) => v(t, e)));
    }
    const S = {
        [o.NONE]: { type: o.NONE, value: "" },
        [o.DESCENDANT]: { type: o.DESCENDANT, value: " > " },
        [o.CHILD]: { type: o.CHILD, value: " " },
      },
      N = new RegExp(["^$", "\\s", "^\\d"].join("|")),
      O = new RegExp(["^$", "^\\d"].join("|")),
      T = [r.nthoftype, r.tag, r.id, r.class, r.attribute, r.nthchild];
    var k = n(0),
      x = n.n(k);
    const A = y(["class", "id", "ng-*"]);
    function C({ nodeName: t }) {
      return `[${t}]`;
    }
    function I({ nodeName: t, nodeValue: e }) {
      return `[${t}='${B(e)}']`;
    }
    function j({ nodeName: t }) {
      return !A(t);
    }
    function H(t) {
      const e = Array.from(t.attributes).filter(j);
      return [...e.map(C), ...e.map(I)];
    }
    function _(t) {
      return (t.getAttribute("class") || "")
        .trim()
        .split(/\s+/)
        .filter((t) => !O.test(t))
        .map((t) => "." + B(t));
    }
    function D(t) {
      const e = t.getAttribute("id") || "",
        n = "#" + B(e),
        o = t.getRootNode({ composed: !1 });
      return !N.test(e) && w([t], n, o) ? [n] : [];
    }
    function M(t) {
      const e = t.parentNode;
      if (e) {
        const n = Array.from(e.childNodes).filter(c).indexOf(t);
        if (n > -1) return [`:nth-child(${n + 1})`];
      }
      return [];
    }
    function L(t) {
      return [B(t.tagName.toLowerCase())];
    }
    function P(t) {
      const e = [...new Set(b(t.map(L)))];
      return 0 === e.length || e.length > 1 ? [] : [e[0]];
    }
    function $(t) {
      const e = P([t])[0],
        n = t.parentElement;
      if (n) {
        const o = Array.from(n.children)
          .filter((t) => t.tagName.toLowerCase() === e)
          .indexOf(t);
        if (o > -1) return [`${e}:nth-of-type(${o + 1})`];
      }
      return [];
    }
    function R(t = [], { maxResults: e = Number.POSITIVE_INFINITY } = {}) {
      const n = [];
      let o = 0,
        r = Y(1);
      for (; r.length <= t.length && o < e; )
        (o += 1), n.push(r.map((e) => t[e])), (r = q(r, t.length - 1));
      return n;
    }
    function q(t = [], e = 0) {
      const n = t.length;
      if (0 === n) return [];
      const o = [...t];
      o[n - 1] += 1;
      for (let t = n - 1; t >= 0; t--)
        if (o[t] > e) {
          if (0 === t) return Y(n + 1);
          o[t - 1]++, (o[t] = o[t - 1] + 1);
        }
      return o[n - 1] > e ? Y(n + 1) : o;
    }
    function Y(t = 1) {
      return Array.from(Array(t).keys());
    }
    const F = ":".charCodeAt(0).toString(16).toUpperCase(),
      V = /[ !"#$%&'()\[\]{|}<>*+,./;=?@^`~\\]/;
    function B(t = "") {
      var e, n;
      return null !==
        (n =
          null === (e = null === CSS || void 0 === CSS ? void 0 : CSS.escape) ||
          void 0 === e
            ? void 0
            : e.call(CSS, t)) && void 0 !== n
        ? n
        : (function (t = "") {
            return t
              .split("")
              .map((t) =>
                ":" === t
                  ? `\\${F} `
                  : V.test(t)
                  ? "\\" + t
                  : escape(t).replace(/%/g, "\\")
              )
              .join("");
          })(t);
    }
    const W = {
        tag: P,
        id: function (t) {
          return 0 === t.length || t.length > 1 ? [] : D(t[0]);
        },
        class: function (t) {
          return g(t.map(_));
        },
        attribute: function (t) {
          return g(t.map(H));
        },
        nthchild: function (t) {
          return g(t.map(M));
        },
        nthoftype: function (t) {
          return g(t.map($));
        },
      },
      U = { tag: L, id: D, class: _, attribute: H, nthchild: M, nthoftype: $ };
    function z(t, e, n) {
      const o = b(
        (function (t, e) {
          return (function (t) {
            const {
                selectors: e,
                combineBetweenSelectors: n,
                includeTag: o,
                maxCandidates: r,
              } = t,
              i = n ? R(e, { maxResults: r }) : e.map((t) => [t]);
            return o ? i.map(G) : i;
          })(e)
            .map((e) =>
              (function (t, e) {
                const n = {};
                t.forEach((t) => {
                  const o = e[t];
                  o.length > 0 && (n[t] = o);
                });
                return x()(n).map(J);
              })(e, t)
            )
            .filter((t) => t.length > 0);
        })(
          (function (t, e) {
            const {
                blacklist: n,
                whitelist: o,
                combineWithinSelector: r,
                maxCombinations: i,
              } = e,
              c = y(n),
              u = y(o);
            return (function (t) {
              const { selectors: e, includeTag: n } = t,
                o = [].concat(e);
              n && !o.includes("tag") && o.push("tag");
              return o;
            })(e).reduce((e, n) => {
              const o = (function (t = [], e) {
                return t.sort((t, n) => {
                  const o = e(t),
                    r = e(n);
                  return o && !r ? -1 : !o && r ? 1 : 0;
                });
              })(
                (function (t = [], e, n) {
                  return t.filter((t) => n(t) || !e(t));
                })(
                  (function (t, e) {
                    var n;
                    return (null !== (n = W[e]) && void 0 !== n ? n : () => [])(
                      t
                    );
                  })(t, n),
                  c,
                  u
                ),
                u
              );
              return (
                (e[n] = r ? R(o, { maxResults: i }) : o.map((t) => [t])), e
              );
            }, {});
          })(t, n),
          n
        )
      );
      return [...new Set(o)];
    }
    function G(t) {
      return t.includes(r.tag) || t.includes(r.nthoftype)
        ? [...t]
        : [...t, r.tag];
    }
    function J(t = {}) {
      const e = [...T];
      return (
        t[r.tag] && t[r.nthoftype] && e.splice(e.indexOf(r.tag), 1),
        e
          .map((e) => {
            return (o = t)[(n = e)] ? o[n].join("") : "";
            var n, o;
          })
          .join("")
      );
    }
    function K(t, e, n = "", o) {
      const r = (function (t, e) {
        return "" === e
          ? t
          : (function (t, e) {
              return [
                ...t.map((t) => e + " " + t),
                ...t.map((t) => e + " > " + t),
              ];
            })(t, e);
      })(z(t, o.root, o), n);
      for (const e of r) if (w(t, e, o.root)) return e;
      return null;
    }
    function Q(t) {
      return { value: t, include: !1 };
    }
    function X(t, e, n = o.NONE) {
      const r = {};
      return (
        e.forEach((e) => {
          Reflect.set(
            r,
            e,
            (function (t, e) {
              return U[e](t);
            })(t, e).map(Q)
          );
        }),
        { element: t, operator: S[n], selectors: r }
      );
    }
    function Z({ selectors: t, operator: e }) {
      let n = [...T];
      t[r.tag] && t[r.nthoftype] && (n = n.filter((t) => t !== r.tag));
      let o = "";
      return (
        n.forEach((e) => {
          (t[e] || []).forEach(({ value: t, include: e }) => {
            e && (o += t);
          });
        }),
        e.value + o
      );
    }
    function tt(t) {
      return [
        ":root",
        ...v(t)
          .reverse()
          .map((t) => {
            const e = X(t, [r.nthchild], o.DESCENDANT);
            return (
              e.selectors.nthchild.forEach((t) => {
                t.include = !0;
              }),
              e
            );
          })
          .map(Z),
      ].join("");
    }
    var et = function t(e, n = {}) {
      const o = (function (t) {
          const e = (Array.isArray(t) ? t : [t]).filter(c);
          return [...new Set(e)];
        })(e),
        r = (function (t, e = {}) {
          const n = Object.assign(Object.assign({}, l), e);
          return {
            selectors: a(n.selectors),
            whitelist: f(n.whitelist),
            blacklist: f(n.blacklist),
            root: h(n.root, t),
            combineWithinSelector: !!n.combineWithinSelector,
            combineBetweenSelectors: !!n.combineBetweenSelectors,
            includeTag: !!n.includeTag,
            maxCombinations: p(n.maxCombinations),
            maxCandidates: p(n.maxCandidates),
          };
        })(o[0], n);
      let i = "",
        u = r.root;
      function s() {
        return (function (t, e, n = "", o) {
          if (0 === t.length) return null;
          const r = [t.length > 1 ? t : [], ...E(t, e).map((t) => [t])];
          for (const t of r) {
            const e = K(t, 0, n, o);
            if (e) return { foundElements: t, selector: e };
          }
          return null;
        })(o, u, i, r);
      }
      let d = s();
      for (; d; ) {
        const { foundElements: t, selector: e } = d;
        if (w(o, e, r.root)) return e;
        (u = t[0]), (i = e), (d = s());
      }
      return o.length > 1
        ? o.map((e) => t(e, r)).join(", ")
        : (function (t) {
            return t.map(tt).join(", ");
          })(o);
    };
    const nt = {
      id: Math.random().toString(36).substring(7),
      url: window.location.href,
      user_scroll: !1,
      coded_click: !1,
    };
    function ot(t, e, n = "*") {
      e || (e = {}),
        (e.action = t),
        (e.id = nt.id),
        window.parent.postMessage(e, n);
    }
    function rt(t) {
      if (nt.coded_click) return void (nt.coded_click = !1);
      ot("hv-click", { selector: et(t.target, { root: document.body }) });
    }
    function it() {
      ot("hv-remove", {});
    }
    function ct() {
      if (nt.user_scroll) {
        const t =
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight ||
            0,
          e =
            window.pageYOffset ||
            document.body.scrollTop ||
            document.documentElement.scrollTop ||
            0,
          n = Math.max(
            document.body.scrollHeight || 0,
            document.documentElement.scrollHeight || 0,
            document.body.offsetHeight || 0,
            document.documentElement.offsetHeight || 0,
            document.body.clientHeight || 0,
            document.documentElement.clientHeight || 0
          );
        ot("hv-scroll", { scroll: Math.ceil((e / (n - t)) * 100) });
      }
    }
    function ut(t) {
      nt.user_scroll = !0;
    }
    new MutationObserver((t) => {
      t.forEach((t) => {
        nt.url !== document.location.href &&
          ((nt.url = document.location.href),
          ot("hv-update-url", { url: window.location.href }));
      });
    }).observe(document.querySelector("body"), { childList: !0, subtree: !0 }),
      (document.onmousewheel = ut),
      document.addEventListener("DOMMouseScroll", ut, !1),
      window.addEventListener(
        "message",
        function (t) {
          if (t.data.from !== nt.id || "hv-initialize" === t.data.action)
            switch (t.data.action) {
              case "hv-initialize":
                !(function () {
                  const t = document.createElement("style");
                  (t.innerHTML =
                    "\n\t\t::-webkit-scrollbar {\n\t\t    width: 0px;\n\t\t    position: fixed;\n\t\t}\n\n\t\t::-webkit-scrollbar-track {\n\t\t    background: transparent !important;\n\t\t}\n\n\t\t::-webkit-scrollbar-thumb {\n\t\t    background: rgba(0, 0, 0, 0.3) !important;\n\t\t    border-radius: 2rem !important;\n\t\t}\n\t"),
                    document.head.appendChild(t),
                    window.addEventListener("unload", it),
                    window.addEventListener("scroll", ct),
                    document.body.addEventListener("click", rt, !0);
                })();
                break;
              case "hv-back":
                window.history.back();
                break;
              case "hv-forward":
                window.history.forward();
                break;
              case "hv-setScroll":
                !(function (t) {
                  nt.user_scroll = !1;
                  const e =
                      window.innerHeight ||
                      document.documentElement.clientHeight ||
                      document.body.clientHeight ||
                      0,
                    n =
                      (t / 100) *
                      (Math.max(
                        document.body.scrollHeight || 0,
                        document.documentElement.scrollHeight || 0,
                        document.body.offsetHeight || 0,
                        document.documentElement.offsetHeight || 0,
                        document.body.clientHeight || 0,
                        document.documentElement.clientHeight || 0
                      ) -
                        e);
                  window.scrollTo(0, n);
                })(t.data.scroll);
                break;
              case "hv-click":
                !(function (t) {
                  const e = document.querySelector(t);
                  if (e) {
                    nt.coded_click = !0;
                    const t = new MouseEvent("click", {
                      bubbles: !0,
                      cancelable: !1,
                      view: window,
                    });
                    e.dispatchEvent(t);
                  }
                })(t.data.selector);
            }
        },
        !1
      ),
      ot("hv-add", { url: nt.url });
  },
]);

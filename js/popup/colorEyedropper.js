!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 2));
})([
  function (e, t, n) {
    var r = n(1);
    function o(e, t, n) {
      Array.isArray(e) ? e.push(t) : (e[n] = t);
    }
    e.exports = function (e) {
      var t,
        n,
        i,
        c = [];
      if (Array.isArray(e)) (n = []), (t = e.length - 1);
      else {
        if ("object" != typeof e || null === e)
          throw new TypeError(
            "Expecting an Array or an Object, but `" +
              (null === e ? "null" : typeof e) +
              "` provided."
          );
        (n = {}), (i = Object.keys(e)), (t = i.length - 1);
      }
      return (
        (function n(a, s) {
          var l, u, d;
          for (
            u = i ? i[s] : s,
              Array.isArray(e[u]) ||
                (void 0 === e[u] ? (e[u] = []) : (e[u] = [e[u]])),
              l = 0;
            l < e[u].length;
            l++
          )
            (p = a),
              o((d = Array.isArray(p) ? [].concat(p) : r(p)), e[u][l], u),
              s >= t ? c.push(d) : n(d, s + 1);
          var p;
        })(n, 0),
        c
      );
    };
  },
  function (e, t) {
    e.exports = function () {
      for (var e = {}, t = 0; t < arguments.length; t++) {
        var r = arguments[t];
        for (var o in r) n.call(r, o) && (e[o] = r[o]);
      }
      return e;
    };
    var n = Object.prototype.hasOwnProperty;
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = (e, t, n) => {
      t || (t = {}),
        (t.action = e),
        n ? chrome.tabs.sendMessage(n, t) : chrome.runtime.sendMessage(t);
    };
    var o,
      i,
      c =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
      a =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>',
      s =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>',
      l =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>',
      u =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol
                ? "symbol"
                : typeof e;
            },
      d = function (e) {
        return (
          null != e &&
          "object" === (void 0 === e ? "undefined" : u(e)) &&
          1 === e.nodeType &&
          "object" === u(e.style) &&
          "object" === u(e.ownerDocument)
        );
      };
    !(function (e) {
      (e.NONE = "none"), (e.DESCENDANT = "descendant"), (e.CHILD = "child");
    })(o || (o = {})),
      (function (e) {
        (e.id = "id"),
          (e.class = "class"),
          (e.tag = "tag"),
          (e.attribute = "attribute"),
          (e.nthchild = "nthchild"),
          (e.nthoftype = "nthoftype");
      })(i || (i = {}));
    function p(e = "unknown problem", ...t) {
      console.warn("CssSelectorGenerator: " + e, ...t);
    }
    const f = {
      selectors: [i.id, i.class, i.tag, i.attribute],
      includeTag: !1,
      whitelist: [],
      blacklist: [],
      combineWithinSelector: !0,
      combineBetweenSelectors: !0,
      root: null,
      maxCombinations: Number.POSITIVE_INFINITY,
      maxCandidates: Number.POSITIVE_INFINITY,
    };
    function m(e) {
      return Array.isArray(e)
        ? e.filter((e) => {
            return (t = i), (n = e), Object.values(t).includes(n);
            var t, n;
          })
        : [];
    }
    function h(e) {
      return e instanceof RegExp;
    }
    function g(e) {
      return ["string", "function"].includes(typeof e) || h(e);
    }
    function v(e) {
      return Array.isArray(e) ? e.filter(g) : [];
    }
    function y(e) {
      const t = [
        Node.DOCUMENT_NODE,
        Node.DOCUMENT_FRAGMENT_NODE,
        Node.ELEMENT_NODE,
      ];
      return (
        (function (e) {
          return e instanceof Node;
        })(e) && t.includes(e.nodeType)
      );
    }
    function b(e, t) {
      if (y(e))
        return (
          e.contains(t) ||
            p(
              "element root mismatch",
              "Provided root does not contain the element. This will most likely result in producing a fallback selector using element's real root node. If you plan to use the selector using provided root (e.g. `root.querySelector`), it will nto work as intended."
            ),
          e
        );
      const n = t.getRootNode({ composed: !1 });
      return y(n)
        ? (n !== document &&
            p(
              "shadow root inferred",
              "You did not provide a root and the element is a child of Shadow DOM. This will produce a selector using ShadowRoot as a root. If you plan to use the selector using document as a root (e.g. `document.querySelector`), it will not work as intended."
            ),
          n)
        : t.ownerDocument.querySelector(":root");
    }
    function w(e) {
      return "number" == typeof e ? e : Number.POSITIVE_INFINITY;
    }
    function E(e = []) {
      const [t = [], ...n] = e;
      return 0 === n.length
        ? t
        : n.reduce((e, t) => e.filter((e) => t.includes(e)), t);
    }
    function x(e) {
      return [].concat(...e);
    }
    function S(e) {
      const t = e.map((e) => {
        if (h(e)) return (t) => e.test(t);
        if ("function" == typeof e)
          return (t) => {
            const n = e(t);
            return "boolean" != typeof n
              ? (p(
                  "pattern matcher function invalid",
                  "Provided pattern matching function does not return boolean. It's result will be ignored.",
                  e
                ),
                !1)
              : n;
          };
        if ("string" == typeof e) {
          const t = new RegExp(
            "^" +
              (e.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".+") +
                "$")
          );
          return (e) => t.test(e);
        }
        return (
          p(
            "pattern matcher invalid",
            "Pattern matching only accepts strings, regular expressions and/or functions. This item is invalid and will be ignored.",
            e
          ),
          () => !1
        );
      });
      return (e) => t.some((t) => t(e));
    }
    function N(e, t, n) {
      const r = Array.from(b(n, e[0]).querySelectorAll(t));
      return r.length === e.length && e.every((e) => r.includes(e));
    }
    function k(e, t) {
      t =
        null != t
          ? t
          : (function (e) {
              return e.ownerDocument.querySelector(":root");
            })(e);
      const n = [];
      let r = e;
      for (; d(r) && r !== t; ) n.push(r), (r = r.parentElement);
      return n;
    }
    function C(e, t) {
      return E(e.map((e) => k(e, t)));
    }
    const I = {
        [o.NONE]: { type: o.NONE, value: "" },
        [o.DESCENDANT]: { type: o.DESCENDANT, value: " > " },
        [o.CHILD]: { type: o.CHILD, value: " " },
      },
      T = new RegExp(["^$", "\\s", "^\\d"].join("|")),
      L = new RegExp(["^$", "^\\d"].join("|")),
      O = [i.nthoftype, i.tag, i.id, i.class, i.attribute, i.nthchild];
    var _ = n(0),
      A = n.n(_);
    const M = S(["class", "id", "ng-*"]);
    function j({ nodeName: e }) {
      return `[${e}]`;
    }
    function $({ nodeName: e, nodeValue: t }) {
      return `[${e}='${J(t)}']`;
    }
    function D({ nodeName: e }) {
      return !M(e);
    }
    function H(e) {
      const t = Array.from(e.attributes).filter(D);
      return [...t.map(j), ...t.map($)];
    }
    function B(e) {
      return (e.getAttribute("class") || "")
        .trim()
        .split(/\s+/)
        .filter((e) => !L.test(e))
        .map((e) => "." + J(e));
    }
    function P(e) {
      const t = e.getAttribute("id") || "",
        n = "#" + J(t),
        r = e.getRootNode({ composed: !1 });
      return !T.test(t) && N([e], n, r) ? [n] : [];
    }
    function R(e) {
      const t = e.parentNode;
      if (t) {
        const n = Array.from(t.childNodes).filter(d).indexOf(e);
        if (n > -1) return [`:nth-child(${n + 1})`];
      }
      return [];
    }
    function q(e) {
      return [J(e.tagName.toLowerCase())];
    }
    function V(e) {
      const t = [...new Set(x(e.map(q)))];
      return 0 === t.length || t.length > 1 ? [] : [t[0]];
    }
    function F(e) {
      const t = V([e])[0],
        n = e.parentElement;
      if (n) {
        const r = Array.from(n.children)
          .filter((e) => e.tagName.toLowerCase() === t)
          .indexOf(e);
        if (r > -1) return [`${t}:nth-of-type(${r + 1})`];
      }
      return [];
    }
    function U(e = [], { maxResults: t = Number.POSITIVE_INFINITY } = {}) {
      const n = [];
      let r = 0,
        o = z(1);
      for (; o.length <= e.length && r < t; )
        (r += 1), n.push(o.map((t) => e[t])), (o = W(o, e.length - 1));
      return n;
    }
    function W(e = [], t = 0) {
      const n = e.length;
      if (0 === n) return [];
      const r = [...e];
      r[n - 1] += 1;
      for (let e = n - 1; e >= 0; e--)
        if (r[e] > t) {
          if (0 === e) return z(n + 1);
          r[e - 1]++, (r[e] = r[e - 1] + 1);
        }
      return r[n - 1] > t ? z(n + 1) : r;
    }
    function z(e = 1) {
      return Array.from(Array(e).keys());
    }
    const Y = ":".charCodeAt(0).toString(16).toUpperCase(),
      G = /[ !"#$%&'()\[\]{|}<>*+,./;=?@^`~\\]/;
    function J(e = "") {
      var t, n;
      return null !==
        (n =
          null === (t = null === CSS || void 0 === CSS ? void 0 : CSS.escape) ||
          void 0 === t
            ? void 0
            : t.call(CSS, e)) && void 0 !== n
        ? n
        : (function (e = "") {
            return e
              .split("")
              .map((e) =>
                ":" === e
                  ? `\\${Y} `
                  : G.test(e)
                  ? "\\" + e
                  : escape(e).replace(/%/g, "\\")
              )
              .join("");
          })(e);
    }
    const K = {
        tag: V,
        id: function (e) {
          return 0 === e.length || e.length > 1 ? [] : P(e[0]);
        },
        class: function (e) {
          return E(e.map(B));
        },
        attribute: function (e) {
          return E(e.map(H));
        },
        nthchild: function (e) {
          return E(e.map(R));
        },
        nthoftype: function (e) {
          return E(e.map(F));
        },
      },
      Q = { tag: q, id: P, class: B, attribute: H, nthchild: R, nthoftype: F };
    function X(e, t, n) {
      const r = x(
        (function (e, t) {
          return (function (e) {
            const {
                selectors: t,
                combineBetweenSelectors: n,
                includeTag: r,
                maxCandidates: o,
              } = e,
              i = n ? U(t, { maxResults: o }) : t.map((e) => [e]);
            return r ? i.map(Z) : i;
          })(t)
            .map((t) =>
              (function (e, t) {
                const n = {};
                e.forEach((e) => {
                  const r = t[e];
                  r.length > 0 && (n[e] = r);
                });
                return A()(n).map(ee);
              })(t, e)
            )
            .filter((e) => e.length > 0);
        })(
          (function (e, t) {
            const {
                blacklist: n,
                whitelist: r,
                combineWithinSelector: o,
                maxCombinations: i,
              } = t,
              c = S(n),
              a = S(r);
            return (function (e) {
              const { selectors: t, includeTag: n } = e,
                r = [].concat(t);
              n && !r.includes("tag") && r.push("tag");
              return r;
            })(t).reduce((t, n) => {
              const r = (function (e = [], t) {
                return e.sort((e, n) => {
                  const r = t(e),
                    o = t(n);
                  return r && !o ? -1 : !r && o ? 1 : 0;
                });
              })(
                (function (e = [], t, n) {
                  return e.filter((e) => n(e) || !t(e));
                })(
                  (function (e, t) {
                    var n;
                    return (null !== (n = K[t]) && void 0 !== n ? n : () => [])(
                      e
                    );
                  })(e, n),
                  c,
                  a
                ),
                a
              );
              return (
                (t[n] = o ? U(r, { maxResults: i }) : r.map((e) => [e])), t
              );
            }, {});
          })(e, n),
          n
        )
      );
      return [...new Set(r)];
    }
    function Z(e) {
      return e.includes(i.tag) || e.includes(i.nthoftype)
        ? [...e]
        : [...e, i.tag];
    }
    function ee(e = {}) {
      const t = [...O];
      return (
        e[i.tag] && e[i.nthoftype] && t.splice(t.indexOf(i.tag), 1),
        t
          .map((t) => {
            return (r = e)[(n = t)] ? r[n].join("") : "";
            var n, r;
          })
          .join("")
      );
    }
    function te(e, t, n = "", r) {
      const o = (function (e, t) {
        return "" === t
          ? e
          : (function (e, t) {
              return [
                ...e.map((e) => t + " " + e),
                ...e.map((e) => t + " > " + e),
              ];
            })(e, t);
      })(X(e, r.root, r), n);
      for (const t of o) if (N(e, t, r.root)) return t;
      return null;
    }
    function ne(e) {
      return { value: e, include: !1 };
    }
    function re(e, t, n = o.NONE) {
      const r = {};
      return (
        t.forEach((t) => {
          Reflect.set(
            r,
            t,
            (function (e, t) {
              return Q[t](e);
            })(e, t).map(ne)
          );
        }),
        { element: e, operator: I[n], selectors: r }
      );
    }
    function oe({ selectors: e, operator: t }) {
      let n = [...O];
      e[i.tag] && e[i.nthoftype] && (n = n.filter((e) => e !== i.tag));
      let r = "";
      return (
        n.forEach((t) => {
          (e[t] || []).forEach(({ value: e, include: t }) => {
            t && (r += e);
          });
        }),
        t.value + r
      );
    }
    function ie(e) {
      return [
        ":root",
        ...k(e)
          .reverse()
          .map((e) => {
            const t = re(e, [i.nthchild], o.DESCENDANT);
            return (
              t.selectors.nthchild.forEach((e) => {
                e.include = !0;
              }),
              t
            );
          })
          .map(oe),
      ].join("");
    }
    var ce = function e(t, n = {}) {
      const r = (function (e) {
          const t = (Array.isArray(e) ? e : [e]).filter(d);
          return [...new Set(t)];
        })(t),
        o = (function (e, t = {}) {
          const n = Object.assign(Object.assign({}, f), t);
          return {
            selectors: m(n.selectors),
            whitelist: v(n.whitelist),
            blacklist: v(n.blacklist),
            root: b(n.root, e),
            combineWithinSelector: !!n.combineWithinSelector,
            combineBetweenSelectors: !!n.combineBetweenSelectors,
            includeTag: !!n.includeTag,
            maxCombinations: w(n.maxCombinations),
            maxCandidates: w(n.maxCandidates),
          };
        })(r[0], n);
      let i = "",
        c = o.root;
      function a() {
        return (function (e, t, n = "", r) {
          if (0 === e.length) return null;
          const o = [e.length > 1 ? e : [], ...C(e, t).map((e) => [e])];
          for (const e of o) {
            const t = te(e, 0, n, r);
            if (t) return { foundElements: e, selector: t };
          }
          return null;
        })(r, c, i, o);
      }
      let s = a();
      for (; s; ) {
        const { foundElements: e, selector: t } = s;
        if (N(r, t, o.root)) return t;
        (c = e[0]), (i = t), (s = a());
      }
      return r.length > 1
        ? r.map((t) => e(t, o)).join(", ")
        : (function (e) {
            return e.map(ie).join(", ");
          })(r);
    };
    var ae = {
      getSelector: function (e) {
        let t = "";
        e.id && (t += "#" + e.id);
        const n = e.getAttribute("class");
        return (
          n &&
            (t +=
              "." +
              n
                .split(" ")
                .map((e) => e.trim())
                .filter((e) => "" !== e)
                .join(".")),
          t
        );
      },
      create: function (e) {
        const t = document.createElement("div");
        return (t.innerHTML = e), t.firstElementChild;
      },
      getHtml: function (e) {
        const t = document.createElement("div");
        return t.appendChild(e.cloneNode(!0)), t.innerHTML;
      },
      getOuterHtml: function (e) {
        const t = e.cloneNode(!0);
        return (t.innerHTML = ""), t.outerHTML;
      },
      isFixed: function (e) {
        do {
          if ("fixed" == window.getComputedStyle(e).position) return !0;
        } while ((e = e.offsetParent));
        return !1;
      },
      isSticky: function (e) {
        do {
          if ("sticky" == window.getComputedStyle(e).position) return !0;
        } while ((e = e.offsetParent));
        return !1;
      },
      findParentWithId: function (e, t, n) {
        let r = null,
          o = 0,
          i = t;
        do {
          if (o >= n) break;
          if (i.id === e) {
            r = i;
            break;
          }
          o += 1;
        } while ((i = i.parentNode));
        return r;
      },
      getSource: function (e) {
        let t = "";
        const n = e.tagName.toUpperCase();
        if ("IMG" === n || "VIDEO" === n)
          if ("IMG" === n) t = e.src;
          else {
            const n = e.querySelector("source");
            e.src ? (t = e.src) : n && (t = n.src);
          }
        return t;
      },
      getUniqueSelector: function (e) {
        return ce(e, { root: document.body, blacklist: [/(^\[|\]$)/] });
      },
    };
    let se = null,
      le = null;
    var ue = {
      createCopyModal: function () {
        const e = document.createElement("hv-copy-modal"),
          t = e.attachShadow({ mode: "open" });
        (se = document.createElement("div")),
          (se.innerHTML = a + " <span>Copied</span>");
        const n = document.createElement("style");
        (n.innerHTML =
          "\n        div {\n            position: fixed;\n            z-index: 5000000000;\n            right: 16px;\n            bottom: -100%;\n            padding: 1rem;\n            display: flex;\n            align-items: center;\n            font-size: 24px;\n            color: #43a047;\n            background: rgb(25, 25, 31);\n            border-radius: 0.2rem;\n            font-weight: 700;\n            transform: scale(0);\n            transition: bottom 0.5s ease-in-out, transform 0.5s ease-in-out;\n        }\n\n        div svg {\n            margin-right: 1rem;\n        }\n\n        div.active {\n            bottom: 16px;\n            transform: scale(1);\n        }\n    "),
          t.appendChild(
            ae.create(
              `<link href="${chrome.extension.getURL(
                "css/global.css"
              )}" rel="stylesheet" type="text/css">`
            )
          ),
          t.appendChild(n),
          t.appendChild(se),
          document.body.appendChild(e);
      },
      createToast: function () {
        const e = document.createElement("hv-copy-modal"),
          t = e.attachShadow({ mode: "open" });
        (se = document.createElement("div")),
          (se.innerHTML = a + " <span>copied</span>");
        const n = document.createElement("style");
        (n.innerHTML =
          "\n        div {\n            position: fixed;\n            z-index: 500000000;\n            top: 100%;\n            left: 100%;\n            padding: 0.5rem 1rem;\n            display: flex;\n            align-items: center;\n            font-size: 20px;\n            color: white;\n            background: rgb(25, 25, 31);\n            border-radius: 0.2rem;\n            font-weight: 700;\n            transform: scale(0) translate(-50%, -50%);\n            transform-origin: top left;\n            opacity: 0;\n            transition: transform 0.2s ease-in-out;\n            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);\n        }\n\n        div svg {\n            width: 20px;\n            height: 20px;\n            margin-right: 0.5rem;\n        }\n\n        div.active {\n            left: 50%;\n            top: 50%;\n            opacity: 1;\n            transform: scale(1) translate(-50%, -50%);\n        }\n    "),
          t.appendChild(
            ae.create(
              `<link href="${chrome.extension.getURL(
                "css/global.css"
              )}" rel="stylesheet" type="text/css">`
            )
          ),
          t.appendChild(n),
          t.appendChild(se),
          document.body.appendChild(e);
      },
      show: function (e, t, n) {
        le && (se.classList.remove("active"), clearTimeout(le), (le = null)),
          t
            ? (se.innerHTML = `${t} <span>${e}</span>`)
            : (se.querySelector("span").innerHTML = e),
          n && (se.style.background = n),
          se.classList.add("active"),
          (le = setTimeout(() => se.classList.remove("active"), 2e3));
      },
    };
    function de(e) {
      if (!navigator.clipboard) {
        const t = document.createElement("textarea");
        return (
          document.body.appendChild(t),
          (t.innerHTML = e),
          t.select(),
          document.execCommand("copy"),
          t.remove(),
          !0
        );
      }
      (async () => {
        try {
          await navigator.clipboard.writeText(e);
        } catch (e) {
          throw e;
        }
      })();
    }
    function pe(e, t, n) {
      (this.data = t),
        (this.element = e),
        (this.callback = n),
        (e.value = t),
        e.addEventListener("change", this, !1);
    }
    (pe.prototype.handleEvent = function (e) {
      switch (e.type) {
        case "change":
          this.change(this.element.value);
      }
    }),
      (pe.prototype.change = function (e) {
        (this.data = e), this.callback();
      });
    function fe(e, t, n) {
      return "#" + ((1 << 24) + (e << 16) + (t << 8) + n).toString(16).slice(1);
    }
    ue.createToast();
    const me = document.getElementById("pick_colors"),
      he = document.getElementById("recents"),
      ge = document.getElementById("saved"),
      ve = document.getElementById("palette"),
      ye = document.getElementById("r"),
      be = document.getElementById("g"),
      we = document.getElementById("b"),
      Ee = document.getElementById("hex"),
      xe = document.getElementById("color"),
      Se = xe.querySelector("input"),
      Ne = {
        tab_id: 0,
        url: "",
        status: {},
        current_tab: "recents",
        colors: [],
      };
    function ke() {
      let e = 0,
        t = 0,
        n = 0;
      ye.value && (e = isNaN(parseInt(ye.value)) ? 0 : parseInt(ye.value)),
        be.value && (t = isNaN(parseInt(be.value)) ? 0 : parseInt(be.value)),
        we.value && (n = isNaN(parseInt(we.value)) ? 0 : parseInt(we.value));
      const r = fe(e, t, n);
      (Ee.value = r.substring(1, r.length)),
        (xe.style.background = r),
        (Se.value = r);
    }
    function Ce() {
      const e = Ee.value,
        t = (function (e) {
          e = e.replace(
            /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            (e, t, n, r) => t + t + n + n + r + r
          );
          const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
          return t
            ? {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16),
              }
            : null;
        })("#" + e);
      t
        ? ((ye.value = t.r), (be.value = t.g), (we.value = t.b))
        : ((ye.value = ""), (be.value = ""), (we.value = "")),
        (xe.style.background = "#" + e),
        (Se.value = "#" + e);
    }
    function Ie(e) {
      for (const t of Ne.colors) {
        const n = document.createElement("li");
        if (((n.color = t), (n.style.background = t.hex), e)) {
          const e = ae.create(`<div class="action">${l}</div>`);
          n.appendChild(e),
            e.addEventListener("click", (e) => {
              e.stopPropagation(),
                r("colorEyedropper.addToSaved", { color: n.color }),
                ue.show("Saved", s, "#039be5");
            });
        } else {
          const e = ae.create(`<div class="action">${c}</div>`);
          n.appendChild(e),
            e.addEventListener("click", (e) => {
              e.stopPropagation(),
                r("colorEyedropper.removeFromSaved", { color: n.color }),
                n.remove();
            });
        }
        n.addEventListener("click", () => {
          (ye.value = n.color.r),
            (be.value = n.color.g),
            (we.value = n.color.b),
            (Ee.value = n.color.hex.substring(1, n.color.hex.length)),
            (xe.style.background = n.color.hex),
            (Se.value = n.color.hex),
            de(n.color.hex),
            ue.show("Copied", a, "#43a047");
        }),
          ve.appendChild(n);
      }
    }
    function Te(e, t) {
      t ? e.classList.add("active") : e.classList.remove("active");
    }
    document.getElementById("copy_rgb").addEventListener("click", () => {
      de(`${ye.value}, ${be.value}, ${we.value}`),
        ue.show("Copied", a, "#43a047");
    }),
      document.getElementById("copy_hex").addEventListener("click", () => {
        de("#" + Ee.value), ue.show("Copied", a, "#43a047");
      }),
      ye.addEventListener("input", ke),
      be.addEventListener("input", ke),
      we.addEventListener("input", ke),
      Ee.addEventListener("input", Ce),
      Ee.addEventListener("paste", (e) => {
        const t = event.clipboardData.getData("text");
        t.startsWith("#") &&
          (e.preventDefault(), (Ee.value = t.substring(1, t.length)), Ce());
      }),
      Se.addEventListener("input", () => {
        const e = Se.value;
        (xe.style.background = e), (Ee.value = e.substring(1, e.length)), Ce();
      }),
      xe.addEventListener("click", () => {
        Se.click();
      }),
      r("colorEyedropper.getRecents", {}),
      he.addEventListener("click", () => {
        "recents" !== Ne.current_tab &&
          ((Ne.current_tab = "recents"),
          Te(he, !0),
          Te(ge, !1),
          (ve.innerHTML = ""),
          r("colorEyedropper.getRecents"));
      }),
      ge.addEventListener("click", () => {
        "saved" !== Ne.current_tab &&
          ((Ne.current_tab = "saved"),
          Te(ge, !0),
          Te(he, !1),
          (ve.innerHTML = ""),
          r("colorEyedropper.getSaved"));
      }),
      chrome.runtime.onMessage.addListener((e, t, n) => {
        switch (e.action) {
          case "popup.setStatus":
            {
              const t = e.status;
              t
                ? ((Ne.status = t),
                  Te(me, Ne.status.color_eyedropper),
                  me.addEventListener("click", (e) => {
                    Ne.status.color_eyedropper = !Ne.status.color_eyedropper;
                    const t = Ne.status.color_eyedropper;
                    r(
                      "manager.toggleColorEyedropper",
                      { tab_id: Ne.tab_id, status: t },
                      null
                    ),
                      Te(me, t),
                      t && window.close();
                  }))
                : me.classList.add("disabled");
            }
            break;
          case "colorEyedropper.setRecents":
            (Ne.colors = e.recents), Ie(!0);
            break;
          case "colorEyedropper.setSaved":
            (Ne.colors = e.saved), Ie(!1);
        }
      }),
      chrome.tabs.query({ active: !0, currentWindow: !0 }, (e) => {
        (Ne.tab_id = e[0].id),
          (Ne.url = e[0].url),
          r("manager.getStatus", { tab_id: Ne.tab_id, url: Ne.url });
      });
  },
]);

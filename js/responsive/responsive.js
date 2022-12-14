!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
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
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
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
    var i = n(1);
    function r(e, t, n) {
      Array.isArray(e) ? e.push(t) : (e[n] = t);
    }
    e.exports = function (e) {
      var t,
        n,
        o,
        s = [];
      if (Array.isArray(e)) (n = []), (t = e.length - 1);
      else {
        if ("object" != typeof e || null === e)
          throw new TypeError(
            "Expecting an Array or an Object, but `" +
              (null === e ? "null" : typeof e) +
              "` provided."
          );
        (n = {}), (o = Object.keys(e)), (t = o.length - 1);
      }
      return (
        (function n(a, l) {
          var c, d, u;
          for (
            d = o ? o[l] : l,
              Array.isArray(e[d]) ||
                (void 0 === e[d] ? (e[d] = []) : (e[d] = [e[d]])),
              c = 0;
            c < e[d].length;
            c++
          )
            (v = a),
              r((u = Array.isArray(v) ? [].concat(v) : i(v)), e[d][c], d),
              l >= t ? s.push(u) : n(u, l + 1);
          var v;
        })(n, 0),
        s
      );
    };
  },
  function (e, t) {
    e.exports = function () {
      for (var e = {}, t = 0; t < arguments.length; t++) {
        var i = arguments[t];
        for (var r in i) n.call(i, r) && (e[r] = i[r]);
      }
      return e;
    };
    var n = Object.prototype.hasOwnProperty;
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i,
      r,
      o =
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
      s = function (e) {
        return (
          null != e &&
          "object" === (void 0 === e ? "undefined" : o(e)) &&
          1 === e.nodeType &&
          "object" === o(e.style) &&
          "object" === o(e.ownerDocument)
        );
      };
    !(function (e) {
      (e.NONE = "none"), (e.DESCENDANT = "descendant"), (e.CHILD = "child");
    })(i || (i = {})),
      (function (e) {
        (e.id = "id"),
          (e.class = "class"),
          (e.tag = "tag"),
          (e.attribute = "attribute"),
          (e.nthchild = "nthchild"),
          (e.nthoftype = "nthoftype");
      })(r || (r = {}));
    function a(e = "unknown problem", ...t) {
      console.warn("CssSelectorGenerator: " + e, ...t);
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
    function c(e) {
      return Array.isArray(e)
        ? e.filter((e) => {
            return (t = r), (n = e), Object.values(t).includes(n);
            var t, n;
          })
        : [];
    }
    function d(e) {
      return e instanceof RegExp;
    }
    function u(e) {
      return ["string", "function"].includes(typeof e) || d(e);
    }
    function v(e) {
      return Array.isArray(e) ? e.filter(u) : [];
    }
    function p(e) {
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
    function h(e, t) {
      if (p(e))
        return (
          e.contains(t) ||
            a(
              "element root mismatch",
              "Provided root does not contain the element. This will most likely result in producing a fallback selector using element's real root node. If you plan to use the selector using provided root (e.g. `root.querySelector`), it will nto work as intended."
            ),
          e
        );
      const n = t.getRootNode({ composed: !1 });
      return p(n)
        ? (n !== document &&
            a(
              "shadow root inferred",
              "You did not provide a root and the element is a child of Shadow DOM. This will produce a selector using ShadowRoot as a root. If you plan to use the selector using document as a root (e.g. `document.querySelector`), it will not work as intended."
            ),
          n)
        : t.ownerDocument.querySelector(":root");
    }
    function f(e) {
      return "number" == typeof e ? e : Number.POSITIVE_INFINITY;
    }
    function g(e = []) {
      const [t = [], ...n] = e;
      return 0 === n.length
        ? t
        : n.reduce((e, t) => e.filter((e) => t.includes(e)), t);
    }
    function m(e) {
      return [].concat(...e);
    }
    function w(e) {
      const t = e.map((e) => {
        if (d(e)) return (t) => e.test(t);
        if ("function" == typeof e)
          return (t) => {
            const n = e(t);
            return "boolean" != typeof n
              ? (a(
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
          a(
            "pattern matcher invalid",
            "Pattern matching only accepts strings, regular expressions and/or functions. This item is invalid and will be ignored.",
            e
          ),
          () => !1
        );
      });
      return (e) => t.some((t) => t(e));
    }
    function y(e, t, n) {
      const i = Array.from(h(n, e[0]).querySelectorAll(t));
      return i.length === e.length && e.every((e) => i.includes(e));
    }
    function b(e, t) {
      t =
        null != t
          ? t
          : (function (e) {
              return e.ownerDocument.querySelector(":root");
            })(e);
      const n = [];
      let i = e;
      for (; s(i) && i !== t; ) n.push(i), (i = i.parentElement);
      return n;
    }
    function C(e, t) {
      return g(e.map((e) => b(e, t)));
    }
    const k = {
        [i.NONE]: { type: i.NONE, value: "" },
        [i.DESCENDANT]: { type: i.DESCENDANT, value: " > " },
        [i.CHILD]: { type: i.CHILD, value: " " },
      },
      x = new RegExp(["^$", "\\s", "^\\d"].join("|")),
      E = new RegExp(["^$", "^\\d"].join("|")),
      L = [r.nthoftype, r.tag, r.id, r.class, r.attribute, r.nthchild];
    var S = n(0),
      N = n.n(S);
    const A = w(["class", "id", "ng-*"]);
    function _({ nodeName: e }) {
      return `[${e}]`;
    }
    function I({ nodeName: e, nodeValue: t }) {
      return `[${e}='${P(t)}']`;
    }
    function T({ nodeName: e }) {
      return !A(e);
    }
    function D(e) {
      const t = Array.from(e.attributes).filter(T);
      return [...t.map(_), ...t.map(I)];
    }
    function R(e) {
      return (e.getAttribute("class") || "")
        .trim()
        .split(/\s+/)
        .filter((e) => !E.test(e))
        .map((e) => "." + P(e));
    }
    function j(e) {
      const t = e.getAttribute("id") || "",
        n = "#" + P(t),
        i = e.getRootNode({ composed: !1 });
      return !x.test(t) && y([e], n, i) ? [n] : [];
    }
    function M(e) {
      const t = e.parentNode;
      if (t) {
        const n = Array.from(t.childNodes).filter(s).indexOf(e);
        if (n > -1) return [`:nth-child(${n + 1})`];
      }
      return [];
    }
    function O(e) {
      return [P(e.tagName.toLowerCase())];
    }
    function $(e) {
      const t = [...new Set(m(e.map(O)))];
      return 0 === t.length || t.length > 1 ? [] : [t[0]];
    }
    function F(e) {
      const t = $([e])[0],
        n = e.parentElement;
      if (n) {
        const i = Array.from(n.children)
          .filter((e) => e.tagName.toLowerCase() === t)
          .indexOf(e);
        if (i > -1) return [`${t}:nth-of-type(${i + 1})`];
      }
      return [];
    }
    function q(e = [], { maxResults: t = Number.POSITIVE_INFINITY } = {}) {
      const n = [];
      let i = 0,
        r = B(1);
      for (; r.length <= e.length && i < t; )
        (i += 1), n.push(r.map((t) => e[t])), (r = V(r, e.length - 1));
      return n;
    }
    function V(e = [], t = 0) {
      const n = e.length;
      if (0 === n) return [];
      const i = [...e];
      i[n - 1] += 1;
      for (let e = n - 1; e >= 0; e--)
        if (i[e] > t) {
          if (0 === e) return B(n + 1);
          i[e - 1]++, (i[e] = i[e - 1] + 1);
        }
      return i[n - 1] > t ? B(n + 1) : i;
    }
    function B(e = 1) {
      return Array.from(Array(e).keys());
    }
    const U = ":".charCodeAt(0).toString(16).toUpperCase(),
      H = /[ !"#$%&'()\[\]{|}<>*+,./;=?@^`~\\]/;
    function P(e = "") {
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
                  ? `\\${U} `
                  : H.test(e)
                  ? "\\" + e
                  : escape(e).replace(/%/g, "\\")
              )
              .join("");
          })(e);
    }
    const Z = {
        tag: $,
        id: function (e) {
          return 0 === e.length || e.length > 1 ? [] : j(e[0]);
        },
        class: function (e) {
          return g(e.map(R));
        },
        attribute: function (e) {
          return g(e.map(D));
        },
        nthchild: function (e) {
          return g(e.map(M));
        },
        nthoftype: function (e) {
          return g(e.map(F));
        },
      },
      z = { tag: O, id: j, class: R, attribute: D, nthchild: M, nthoftype: F };
    function Y(e, t, n) {
      const i = m(
        (function (e, t) {
          return (function (e) {
            const {
                selectors: t,
                combineBetweenSelectors: n,
                includeTag: i,
                maxCandidates: r,
              } = e,
              o = n ? q(t, { maxResults: r }) : t.map((e) => [e]);
            return i ? o.map(W) : o;
          })(t)
            .map((t) =>
              (function (e, t) {
                const n = {};
                e.forEach((e) => {
                  const i = t[e];
                  i.length > 0 && (n[e] = i);
                });
                return N()(n).map(G);
              })(t, e)
            )
            .filter((e) => e.length > 0);
        })(
          (function (e, t) {
            const {
                blacklist: n,
                whitelist: i,
                combineWithinSelector: r,
                maxCombinations: o,
              } = t,
              s = w(n),
              a = w(i);
            return (function (e) {
              const { selectors: t, includeTag: n } = e,
                i = [].concat(t);
              n && !i.includes("tag") && i.push("tag");
              return i;
            })(t).reduce((t, n) => {
              const i = (function (e = [], t) {
                return e.sort((e, n) => {
                  const i = t(e),
                    r = t(n);
                  return i && !r ? -1 : !i && r ? 1 : 0;
                });
              })(
                (function (e = [], t, n) {
                  return e.filter((e) => n(e) || !t(e));
                })(
                  (function (e, t) {
                    var n;
                    return (null !== (n = Z[t]) && void 0 !== n ? n : () => [])(
                      e
                    );
                  })(e, n),
                  s,
                  a
                ),
                a
              );
              return (
                (t[n] = r ? q(i, { maxResults: o }) : i.map((e) => [e])), t
              );
            }, {});
          })(e, n),
          n
        )
      );
      return [...new Set(i)];
    }
    function W(e) {
      return e.includes(r.tag) || e.includes(r.nthoftype)
        ? [...e]
        : [...e, r.tag];
    }
    function G(e = {}) {
      const t = [...L];
      return (
        e[r.tag] && e[r.nthoftype] && t.splice(t.indexOf(r.tag), 1),
        t
          .map((t) => {
            return (i = e)[(n = t)] ? i[n].join("") : "";
            var n, i;
          })
          .join("")
      );
    }
    function X(e, t, n = "", i) {
      const r = (function (e, t) {
        return "" === t
          ? e
          : (function (e, t) {
              return [
                ...e.map((e) => t + " " + e),
                ...e.map((e) => t + " > " + e),
              ];
            })(e, t);
      })(Y(e, i.root, i), n);
      for (const t of r) if (y(e, t, i.root)) return t;
      return null;
    }
    function J(e) {
      return { value: e, include: !1 };
    }
    function K(e, t, n = i.NONE) {
      const r = {};
      return (
        t.forEach((t) => {
          Reflect.set(
            r,
            t,
            (function (e, t) {
              return z[t](e);
            })(e, t).map(J)
          );
        }),
        { element: e, operator: k[n], selectors: r }
      );
    }
    function Q({ selectors: e, operator: t }) {
      let n = [...L];
      e[r.tag] && e[r.nthoftype] && (n = n.filter((e) => e !== r.tag));
      let i = "";
      return (
        n.forEach((t) => {
          (e[t] || []).forEach(({ value: e, include: t }) => {
            t && (i += e);
          });
        }),
        t.value + i
      );
    }
    function ee(e) {
      return [
        ":root",
        ...b(e)
          .reverse()
          .map((e) => {
            const t = K(e, [r.nthchild], i.DESCENDANT);
            return (
              t.selectors.nthchild.forEach((e) => {
                e.include = !0;
              }),
              t
            );
          })
          .map(Q),
      ].join("");
    }
    var te = function e(t, n = {}) {
      const i = (function (e) {
          const t = (Array.isArray(e) ? e : [e]).filter(s);
          return [...new Set(t)];
        })(t),
        r = (function (e, t = {}) {
          const n = Object.assign(Object.assign({}, l), t);
          return {
            selectors: c(n.selectors),
            whitelist: v(n.whitelist),
            blacklist: v(n.blacklist),
            root: h(n.root, e),
            combineWithinSelector: !!n.combineWithinSelector,
            combineBetweenSelectors: !!n.combineBetweenSelectors,
            includeTag: !!n.includeTag,
            maxCombinations: f(n.maxCombinations),
            maxCandidates: f(n.maxCandidates),
          };
        })(i[0], n);
      let o = "",
        a = r.root;
      function d() {
        return (function (e, t, n = "", i) {
          if (0 === e.length) return null;
          const r = [e.length > 1 ? e : [], ...C(e, t).map((e) => [e])];
          for (const e of r) {
            const t = X(e, 0, n, i);
            if (t) return { foundElements: e, selector: t };
          }
          return null;
        })(i, a, o, r);
      }
      let u = d();
      for (; u; ) {
        const { foundElements: e, selector: t } = u;
        if (y(i, t, r.root)) return t;
        (a = e[0]), (o = t), (u = d());
      }
      return i.length > 1
        ? i.map((t) => e(t, r)).join(", ")
        : (function (e) {
            return e.map(ee).join(", ");
          })(i);
    };
    var ne = {
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
        let i = null,
          r = 0,
          o = t;
        do {
          if (r >= n) break;
          if (o.id === e) {
            i = o;
            break;
          }
          r += 1;
        } while ((o = o.parentNode));
        return i;
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
        return te(e, { root: document.body, blacklist: [/(^\[|\]$)/] });
      },
    };
    var ie = (e, t, n) => {
      t || (t = {}),
        (t.action = e),
        n ? chrome.tabs.sendMessage(n, t) : chrome.runtime.sendMessage(t);
    };
    let re = null;
    var oe = {
      render: function () {
        return (re = ne.create('<div class="overlay"></div>')), re;
      },
      show: function () {
        re.style.display = "block";
      },
      hide: function () {
        re.style.display = "none";
      },
    };
    var se =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',
      ae =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
      le =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
      ce =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>',
      de =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>',
      ue =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>',
      ve =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
      pe =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>',
      he =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>',
      fe =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
      ge =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"  stroke-linejoin="round" class="css-i6dzq1"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>';
    var me = {
      render: function (e = 0) {
        const t = ne.create("<div class='slider'></div>"),
          n = ne.create("<div class='slider-background'></div>"),
          i = ne.create("<div class='slider-fill' style='width: 20px;'></div>");
        n.appendChild(i);
        const r = ne.create("<input type='range' min='0' max='100'/>");
        return (r.value = e), t.appendChild(n), t.appendChild(r), t;
      },
    };
    var we = () => ne.create("<div class='space'></div>");
    const ye = {
      onZoomChange: [],
      onURLChange: [],
      onRefresh: [],
      onFrameEvent: [],
      onDevicesChange: [],
      onViewChange: [],
      onFrameToggle: [],
    };
    function be(e) {
      this.zoom = e;
    }
    function Ce(e) {
      this.url = e;
    }
    function ke() {}
    function xe(e, t, n) {
      (this.action = e), (this.frameId = t), (this.data = n);
    }
    function Ee() {}
    function Le(e) {
      this.view = e;
    }
    function Se(e) {
      this.status = e;
    }
    var Ne = {
      ZoomChange: be,
      URLChange: Ce,
      Refresh: ke,
      FrameEvent: xe,
      DevicesChange: Ee,
      ViewChange: Le,
      FrameToggle: Se,
      listen: function (e, t) {
        if (!ye[e]) throw new Error("Incorrect event type");
        ye[e].push(t);
      },
      trigger: function (e) {
        let t = [];
        switch (e.constructor) {
          case be:
            t = ye.onZoomChange;
            break;
          case Ce:
            t = ye.onURLChange;
            break;
          case ke:
            t = ye.onRefresh;
            break;
          case xe:
            t = ye.onFrameEvent;
            break;
          case Ee:
            t = ye.onDevicesChange;
            break;
          case Le:
            t = ye.onViewChange;
            break;
          case Se:
            t = ye.onFrameToggle;
        }
        for (const n of t) n(e);
      },
      clear: function (e) {
        if ("string" == typeof e && ye[e]) ye[e] = [];
        else if (typeof e == typeof [])
          for (const t of e) ye[t] && (ye[t] = []);
      },
    };
    const Ae = {
      devices: [],
      url: "",
      zoom: 50,
      view: "potrait",
      is_frame: !0,
    };
    var _e = {
      setURL: function (e) {
        const t = e.split("?");
        if (t.length > 1) {
          const e = t[1].split("&");
          for (let t = 0; t < e.length; t++)
            e[t].startsWith("__user-agent__") && e.splice(t, 1);
          (t[1] = e.join("&")), t[1] || t.splice(1, 1);
        }
        Ae.url = t.join("?");
      },
      getURL: function () {
        return Ae.url;
      },
      setZoom: function (e) {
        Ae.zoom = e;
      },
      getZoom: function () {
        return Ae.zoom;
      },
      setDevices: function (e) {
        Ae.devices = e;
      },
      getDevices: function () {
        return JSON.parse(JSON.stringify(Ae.devices));
      },
      getView: function () {
        return Ae.view;
      },
      setView: function (e) {
        Ae.view = e;
      },
      getIsFrame: () => Ae.is_frame,
      setIsFrame: (e) => (Ae.is_frame = e),
    };
    function Ie(e, t, n) {
      (this.data = t),
        (this.element = e),
        (this.callback = n),
        (e.value = t),
        e.addEventListener("change", this, !1);
    }
    (Ie.prototype.handleEvent = function (e) {
      switch (e.type) {
        case "change":
          this.change(this.element.value);
      }
    }),
      (Ie.prototype.change = function (e) {
        (this.data = e), this.callback();
      });
    let Te = null,
      De = null,
      Re = null,
      je = null,
      Me = null,
      Oe = null;
    const $e = { device: null, callback: null };
    function Fe() {
      const e = Re.value,
        t = parseInt(je.value),
        n = parseInt(Me.value),
        i = Oe.value;
      if (e && !isNaN(t) && !isNaN(n)) {
        const r = {
          name: e,
          width: t,
          height: n,
          user_agent: i,
          hide: $e.device.hide,
          view_mode_support: !0,
        };
        $e.callback(r), qe();
      }
    }
    function qe() {
      ($e.device = null),
        ($e.callback = null),
        (Te.style.display = "none"),
        (De.style.display = "none");
    }
    var Ve = {
      render: function () {
        const e = ne.create('<div class="edit"></div>');
        (Te = ne.create('<div class="overlay"></div>')),
          (De = ne.create('<div class="edit-modal"></div>')),
          (Re = ne.create('<input type="text" spellcheck="false" id="name"/>')),
          (je = ne.create('<input type="text" spellcheck="false" id="name"/>')),
          (Me = ne.create('<input type="text" spellcheck="false" id="name"/>')),
          (Oe = ne.create('<input type="text" spellcheck="false" id="name"/>'));
        const t = ne.create(
          '<div class="input"><label>Device Name</label></div>'
        );
        t.appendChild(Re);
        const n = ne.create('<div class="parallel"></di>'),
          i = ne.create(
            '<div class="input" style="margin-right: 0.25rem"><label>Width</label></div>'
          );
        i.appendChild(je);
        const r = ne.create(
          '<div class="input" style="margin-left: 0.25rem"><label>Height</label></div>'
        );
        r.appendChild(Me);
        const o = ne.create(
          '<div class="input"><label>User Agent</label></div>'
        );
        o.appendChild(Oe);
        const s = ne.create(
            '<div class="parallel" style="margin-top: 1rem;"></div>'
          ),
          a = ne.create(
            '<button class="btn red" style="margin-right: 0.25rem">Cancel</button>'
          ),
          l = ne.create(
            '<button class="btn" style="margin-left: 0.25rem">Ok</button>'
          );
        return (
          a.addEventListener("click", qe),
          l.addEventListener("click", Fe),
          De.appendChild(t),
          n.appendChild(i),
          n.appendChild(r),
          De.appendChild(n),
          De.appendChild(o),
          s.appendChild(we()),
          s.appendChild(a),
          s.appendChild(l),
          s.appendChild(we()),
          De.appendChild(s),
          e.appendChild(Te),
          e.appendChild(De),
          e
        );
      },
      show: function (e, t) {
        ($e.device = e),
          ($e.callback = t),
          (Te.style.display = "block"),
          (De.style.display = "block"),
          (Re.value = e.name),
          (je.value = e.width),
          (Me.value = e.height),
          (Oe.value = e.user_agent);
      },
      hide: qe,
    };
    const Be = ne.create(ae),
      Ue = ne.create(he);
    let He = null,
      Pe = null,
      Ze = null,
      ze = null;
    const Ye = { opened: !1, ulX: 0, ulY: 0 };
    function We() {
      ie("responsive.resetDevices", {}), nt();
    }
    function Ge(e, t) {
      Ve.show(e, (n) => {
        (function e(t, n) {
          const i = Object.keys,
            r = typeof t;
          return t && n && "object" === r && r === typeof n
            ? i(t).length === i(n).length && i(t).every((i) => e(t[i], n[i]))
            : t === n;
        })(e, n) ||
          ((t.device = n),
          (t.querySelector("h3").innerHTML = n.name),
          (t.querySelector(
            "span"
          ).innerHTML = `(${n.width}px * ${n.height}px)`));
      });
    }
    function Xe() {
      const e = document.createElement("li");
      return e.classList.add("dummy"), e;
    }
    function Je(e) {
      let t = null;
      do {
        if ("li" === e.tagName.toLowerCase()) {
          t = e;
          break;
        }
        if (
          "ul" === e.tagName.toLowerCase() ||
          "body" === e.tagName.toLowerCase()
        )
          break;
      } while ((e = e.parentNode));
      return t;
    }
    function Ke(e) {
      if (ze) {
        (ze.style.position = "static"),
          (ze.style.background = "transparent"),
          (ze.style.pointerEvents = "auto");
        const t = Je(e.target);
        t ? ze.parentNode.insertBefore(ze, t) : Pe.appendChild(ze),
          (ze = null),
          Ze.remove(),
          (Ze = null);
      }
    }
    function Qe(e) {
      if (((Ye.ulX = e.clientX), (Ye.ulY = e.clientY), ze)) {
        const t = Je(e.target);
        t ? Pe.insertBefore(Ze, t) : Pe.appendChild(Ze);
      }
    }
    function et() {
      const e = [];
      for (const t of Pe.children) e.push(t.device);
      _e.setDevices(e),
        Ne.trigger(new Ne.DevicesChange()),
        ie("responsive.saveDevices", { devices: e }),
        nt();
    }
    function tt() {
      if (ze) {
        const e = Pe.getBoundingClientRect(),
          t = ze.getBoundingClientRect().height;
        (ze.style.left = "0px"), (ze.style.top = Ye.ulY - e.y - t / 2 + "px");
      }
      Ye.opened && requestAnimationFrame(tt);
    }
    function nt() {
      oe.hide(),
        (Ye.opened = !1),
        (He.style.display = "none"),
        Pe.parentNode.removeEventListener("mouseup", Ke),
        Pe.parentNode.removeEventListener("mousemove", Qe),
        Pe.remove();
    }
    var it = {
      render: function () {
        He = ne.create('<div class="popup devices"></div>');
        const e = ne.create('<div class="head"><h1>Manage Devices</h1></div>'),
          t = ne.create(le);
        t.setAttribute("class", "hcolor-white pointer"),
          t.addEventListener("click", () => {
            nt();
          });
        const n = ne.create('<div class="content"></div>'),
          i = ne.create('<div class="footer"></div>'),
          r = ne.create(
            '\n\t\t<button class="btn translucent" style="margin-right: 0.5rem">\n\t\t\tReset\n\t\t</button>\n\t'
          );
        r.addEventListener("click", We);
        const o = ne.create(
          '\n\t\t<button class="btn">\n\t\t\tSave\n\t\t</button>\n\t'
        );
        return (
          o.addEventListener("click", et),
          e.appendChild(t),
          He.appendChild(e),
          n.appendChild(Ve.render()),
          He.appendChild(n),
          i.appendChild(r),
          i.appendChild(we()),
          i.appendChild(o),
          He.appendChild(i),
          He
        );
      },
      show: function () {
        oe.show(),
          (function () {
            Pe = ne.create("<ul></ul>");
            for (const e of _e.getDevices()) {
              const t = ne.create("<li></li>");
              t.device = e;
              const n = ne.create(pe);
              n.setAttribute("class", "hcolor-white grab"),
                n.addEventListener("mousedown", () => {
                  (t.style.position = "absolute"),
                    (t.style.background = "rgba(0, 0, 0, 0.5)"),
                    (t.style.pointerEvents = "none"),
                    (Ze = Xe()),
                    Pe.insertBefore(Ze, t),
                    (ze = t);
                });
              const i = ne.create(`<h3>${e.name}</h3>`),
                r = ne.create(`<span>(${e.width}px * ${e.height}px)</span>`),
                o = document.createElement("actions");
              o.classList.add("actions");
              let s = null;
              (s = e.hide ? Ue.cloneNode(!0) : Be.cloneNode(!0)),
                s.setAttribute("class", "hcolor-white hover"),
                s.addEventListener("click", () => {
                  (e.hide = !e.hide),
                    e.hide
                      ? (s.innerHTML = Ue.innerHTML)
                      : (s.innerHTML = Be.innerHTML);
                });
              const a = ne.create(de);
              a.setAttribute("class", "hcolor-white hover"),
                a.addEventListener("click", () => Ge(e, t));
              const l = ne.create(ue);
              l.addEventListener("click", () => t.remove()),
                o.appendChild(s),
                o.appendChild(a),
                o.appendChild(l),
                t.appendChild(n),
                t.appendChild(i),
                t.appendChild(r),
                t.appendChild(o),
                (t.device = e),
                Pe.appendChild(t);
            }
            He.querySelector(".content").appendChild(Pe);
          })(),
          (Ye.opened = !0),
          (He.style.display = "flex"),
          Pe.parentNode.addEventListener("mouseup", Ke),
          Pe.parentNode.addEventListener("mousemove", Qe),
          requestAnimationFrame(tt);
      },
      hide: nt,
    };
    let rt = null,
      ot = null,
      st = null,
      at = null,
      lt = null;
    function ct() {
      const e = ot.value,
        t = parseInt(st.value),
        n = parseInt(at.value),
        i = lt.value;
      if (e && !isNaN(t) && !isNaN(n)) {
        const r = {
            name: e,
            width: t,
            height: n,
            user_agent: i,
            hide: !1,
            view_mode_support: !0,
          },
          o = _e.getDevices();
        o.push(r),
          _e.setDevices(o),
          Ne.trigger(new Ne.DevicesChange()),
          ie("responsive.saveDevices", { devices: o }),
          dt();
      }
    }
    function dt() {
      oe.hide(), (rt.style.display = "none");
    }
    var ut = {
      render: function () {
        rt = ne.create('<div class="popup add-device"></div>');
        const e = ne.create('<div class="head"><h1>Add Devices</h1></div>'),
          t = ne.create(le);
        t.setAttribute("class", "hcolor-white pointer"),
          t.addEventListener("click", () => {
            dt();
          });
        const n = ne.create('<div class="content"></div>');
        (ot = ne.create('<input type="text" spellcheck="false" id="name"/>')),
          (st = ne.create('<input type="text" spellcheck="false" id="name"/>')),
          (at = ne.create('<input type="text" spellcheck="false" id="name"/>')),
          (lt = ne.create('<input type="text" spellcheck="false" id="name"/>'));
        const i = ne.create(
          '<div class="input"><label>Device Name</label></div>'
        );
        i.appendChild(ot);
        const r = ne.create('<div class="parallel"></di>'),
          o = ne.create(
            '<div class="input" style="margin-right: 0.25rem"><label>Width</label></div>'
          );
        o.appendChild(st);
        const s = ne.create(
          '<div class="input" style="margin-left: 0.25rem"><label>Height</label></div>'
        );
        s.appendChild(at);
        const a = ne.create(
          '<div class="input"><label>User Agent</label></div>'
        );
        a.appendChild(lt);
        const l = ne.create('<div class="footer"></div>'),
          c = ne.create(
            '\n\t\t<button class="btn">\n\t\t\tSave\n\t\t</button>\n\t'
          );
        return (
          c.addEventListener("click", ct),
          e.appendChild(t),
          rt.appendChild(e),
          n.appendChild(i),
          r.appendChild(o),
          r.appendChild(s),
          n.appendChild(r),
          n.appendChild(a),
          rt.appendChild(n),
          l.appendChild(we()),
          l.appendChild(c),
          rt.appendChild(l),
          rt
        );
      },
      show: function () {
        oe.show(), (rt.style.display = "flex");
      },
      hide: dt,
    };
    let vt = null,
      pt = null,
      ht = null,
      ft = null,
      gt = null;
    function mt(e) {
      _e.getView() !== e &&
        (_e.setView(e),
        "portrait" === e
          ? (ft.setAttribute("active", "true"),
            gt.setAttribute("active", "false"))
          : (ft.setAttribute("active", "false"),
            gt.setAttribute("active", "true")),
        Ne.trigger(new Ne.ViewChange(e)),
        ie("responsive.saveView", { view: e }));
    }
    function wt(e) {
      const t = (e / 100) * 100;
      (pt.querySelector(".slider-fill").style.width = t + "%"),
        (ht.innerHTML = Math.ceil(t - 50) + "%");
    }
    var yt = {
      render: function () {
        const e = ne.create("<header></header>");
        e.appendChild(ne.create("<img src='assets/icon48.png'/>"));
        const t = ne.create("<div class='url'></div>"),
          n = ne.create(se);
        n.setAttribute("class", "hcolor-white hover pointer"),
          (n.style.transform = "rotate(180deg)"),
          n.addEventListener("click", () => {
            Ne.trigger(new Ne.FrameEvent("hv-back", null, {}));
          });
        const i = ne.create(se);
        i.setAttribute("class", "hcolor-white hover pointer"),
          i.addEventListener("click", () => {
            Ne.trigger(new Ne.FrameEvent("hv-forward", null, {}));
          }),
          (vt = ne.create(
            "<input type='text' placeholder='Type a URL' spellcheck='false'/>"
          )),
          vt.addEventListener("keypress", (e) => {
            if (("Enter" === e.key || 32 === e.keyCode) && vt.value) {
              const e = vt.value.startsWith("http")
                ? vt.value
                : "https://" + vt.value;
              (vt.value = e), _e.setURL(e), Ne.trigger(new Ne.URLChange(e));
            }
          });
        const r = ne.create(ce);
        r.setAttribute("class", "hcolor-white hover pointer"),
          r.addEventListener("click", () => {
            Ne.trigger(new Ne.Refresh());
          }),
          t.appendChild(n),
          t.appendChild(i),
          t.appendChild(vt),
          t.appendChild(r),
          e.appendChild(t);
        const o = ne.create(
          `\n\t\t<div class="checkbox" active="${
            _e.getIsFrame() ? "true" : "false"
          }">\n\t\t\t<div class="checkmark">${
            _e.getIsFrame() ? ve : ""
          }</div>\n\t\t\t<span>Show Frames</span>\n\t\t</div>\n\t`
        );
        o.addEventListener("click", () => {
          const e = "true" === o.getAttribute("active");
          var t;
          e
            ? (o.setAttribute("active", "false"),
              (o.querySelector(".checkmark").innerHTML = ""))
            : (o.setAttribute("active", "true"),
              (o.querySelector(".checkmark").innerHTML = ve)),
            (t = !e),
            _e.setIsFrame(t),
            Ne.trigger(new Ne.FrameToggle(t)),
            Ne.trigger(new Ne.ZoomChange(_e.getZoom())),
            Ne.trigger(new Ne.ViewChange(_e.getView())),
            ie("responsive.saveIsFrame", { status: t });
        }),
          e.appendChild(o);
        const s = ne.create('<ul class="tabs"></ul>');
        (ft = ne.create(
          `<li style="width: 90px" active="${
            "portrait" === _e.getView() ? "true" : "false"
          }">Portrait</li>`
        )),
          (gt = ne.create(
            `<li style="width: 90px" active="${
              "landscape" === _e.getView() ? "true" : "false"
            }">Landscape</li>`
          )),
          ft.addEventListener("click", () => mt("portrait")),
          gt.addEventListener("click", () => mt("landscape")),
          s.appendChild(ft),
          s.appendChild(gt),
          e.appendChild(s);
        const a = ne.create(fe);
        (a.style.marginLeft = "1rem"),
          a.setAttribute("class", "hcolor-white hover pointer"),
          a.addEventListener("click", () => {
            ut.show();
          }),
          e.appendChild(a);
        const l = ne.create(ge);
        return (
          (l.style.marginLeft = "1rem"),
          l.setAttribute("class", "hcolor-white hover pointer"),
          l.addEventListener("click", () => {
            it.show();
          }),
          e.appendChild(l),
          e.appendChild(
            ne.create("<span style='margin-left: 1rem;'>Zoom</span>")
          ),
          (pt = me.render(_e.getZoom())),
          pt.querySelector("input").addEventListener("input", (e) => {
            const t = e.target.value;
            wt(t),
              _e.setZoom(t),
              Ne.trigger(new Ne.ZoomChange(t)),
              ie("responsive.saveZoom", { zoom: t });
          }),
          e.appendChild(pt),
          (ht = ne.create(
            "<span style='margin-left: 0.5rem; display: block; width: 50px;'>0%</span>"
          )),
          e.appendChild(ht),
          wt(_e.getZoom()),
          e
        );
      },
      urlChange: function () {
        vt.value = _e.getURL();
      },
    };
    var bt = {
      "Nexus 5":
        '\n\t\t<div class="marvel-device nexus5" id="device_frame">\n\t\t    <div class="top-bar"></div>\n\t\t    <div class="sleep"></div>\n\t\t    <div class="volume"></div>\n\t\t    <div class="camera"></div>\n\t\t    <div class="screen"></div>\n\t\t</div>\n\t',
      "Galaxy S5":
        '\n\t\t<div class="marvel-device s5" id="device_frame">\n\t\t    <div class="top-bar"></div>\n\t\t    <div class="sleep"></div>\n\t\t    <div class="camera"></div>\n\t\t    <div class="sensor"></div>\n\t\t    <div class="speaker"></div>\n\t\t    <div class="screen"></div>\n\t\t    <div class="home"></div>\n\t\t</div>\n\t',
      "Galaxy Note 8":
        '\n\t\t<div class="marvel-device note8" id="device_frame">\n\t\t    <div class="inner"></div>\n\t\t    <div class="overflow">\n\t\t        <div class="shadow"></div>\n\t\t    </div>\n\t\t    <div class="speaker"></div>\n\t\t    <div class="sensors"></div>\n\t\t    <div class="more-sensors"></div>\n\t\t    <div class="sleep"></div>\n\t\t    <div class="volume"></div>\n\t\t    <div class="camera"></div>\n\t\t    <div class="screen"></div>\n\t\t</div>\n\t',
      "iPhone SE":
        '\n\t\t<div class="marvel-device iphone5s black" id="device_frame">\n\t\t    <div class="top-bar"></div>\n\t\t    <div class="sleep"></div>\n\t\t    <div class="volume"></div>\n\t\t    <div class="camera"></div>\n\t\t    <div class="sensor"></div>\n\t\t    <div class="speaker"></div>\n\t\t    <div class="screen"> </div>\n\t\t    <div class="home"></div>\n\t\t    <div class="bottom-bar"></div>\n\t\t</div>\n\t',
      "iPhone X":
        '\n\t\t<div class="marvel-device iphone-x" id="device_frame">\n\t\t    <div class="notch">\n\t\t        <div class="camera"></div>\n\t\t        <div class="speaker"></div>\n\t\t    </div>\n\t\t    <div class="top-bar"></div>\n\t\t    <div class="sleep"></div>\n\t\t    <div class="bottom-bar"></div>\n\t\t    <div class="volume"></div>\n\t\t    <div class="overflow">\n\t\t        <div class="shadow shadow--tr"></div>\n\t\t        <div class="shadow shadow--tl"></div>\n\t\t        <div class="shadow shadow--br"></div>\n\t\t        <div class="shadow shadow--bl"></div>\n\t\t    </div>\n\t\t    <div class="inner-shadow"></div>\n\t\t    <div class="screen"></div>\n\t\t</div>\n\t',
      "iPhone 8":
        '\n\t\t<div class="marvel-device iphone8 black" id="device_frame">\n\t\t    <div class="top-bar"></div>\n\t\t    <div class="sleep"></div>\n\t\t    <div class="volume"></div>\n\t\t    <div class="camera"></div>\n\t\t    <div class="sensor"></div>\n\t\t    <div class="speaker"></div>\n\t\t    <div class="screen"></div>\n\t\t    <div class="home"></div>\n\t\t    <div class="bottom-bar"></div>\n\t\t</div>\n\t',
      "iPhone 8 Plus":
        '\n\t\t<div class="marvel-device iphone8plus black" id="device_frame">\n\t\t    <div class="top-bar"></div>\n\t\t    <div class="sleep"></div>\n\t\t    <div class="volume"></div>\n\t\t    <div class="camera"></div>\n\t\t    <div class="sensor"></div>\n\t\t    <div class="speaker"></div>\n\t\t    <div class="screen"></div>\n\t\t    <div class="home"></div>\n\t\t    <div class="bottom-bar"></div>\n\t\t</div>\n\t',
      "iPad Mini":
        '\n\t\t<div class="marvel-device ipad silver" id="device_frame">\n\t\t    <div class="camera"></div>\n\t\t    <div class="screen"></div>\n\t\t    <div class="home"></div>\n\t\t</div>\n\t',
    };
    function Ct(e, t) {
      const n = bt[t.name],
        i = ne.create(
          `\n\t\t<iframe \n\t\t\tsrc="${xt(
            _e.getURL(),
            t.user_agent
          )}" \n\t\t\ttitle="${t.name}"></iframe>\n\t`
        );
      if (
        ((i.style.width = t.width + "px"),
        (i.style.height = t.height + "px"),
        n && _e.getIsFrame())
      ) {
        const r = ne.create(n);
        (r.style.width = t.width + "px"),
          (r.style.height = t.height + "px"),
          r.querySelector(".screen").appendChild(i),
          e.appendChild(r);
      } else e.appendChild(i);
    }
    function kt(e, t, n, i) {
      n || (n = {}),
        (n.action = e),
        (n.from = t),
        i.contentWindow.postMessage(n, "*");
    }
    function xt(e, t) {
      if (e) {
        e = (function (e) {
          let t = e.split("?")[1];
          if (t) {
            if (((t = t.split("&")), "" == t)) return {};
            for (var n = {}, i = 0; i < t.length; ++i) {
              var r = t[i].split("=", 2);
              1 == r.length
                ? (n[r[0]] = "")
                : (n[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")));
            }
            return n;
          }
        })(e)
          ? `${e}&__user-agent__=${t}`
          : `${e}?__user-agent__=${t}`;
      }
      return e;
    }
    var Et = {
      render: function (e) {
        const t = ne.create("<div class='frame'></div>"),
          n = ne.create(
            `\n\t\t<div class="info">\n\t\t\t<h3>${e.name}</h3>\n    \t\t<span>(${e.width} x ${e.height})</span>\n\t\t</div>\n\t`
          );
        n.appendChild(we());
        const i = ne.create(ce);
        return (
          i.setAttribute("class", "hcolor-white hover pointer"),
          n.appendChild(i),
          i.addEventListener("click", () => {
            t.querySelector("iframe").src = _e.getURL();
          }),
          t.appendChild(n),
          Ct(t, e),
          (function (e, t) {
            Ne.listen("onFrameToggle", (n) => {
              const i = e.querySelector("#device_frame");
              if (n.status && !i) {
                e.querySelector("iframe").remove(), Ct(e, t);
              } else !n.status && i && (i.remove(), Ct(e, t));
            }),
              Ne.listen("onZoomChange", (t) => {
                const n = t.zoom / 100 + 0.5;
                let i = null;
                const r = e.querySelector("#device_frame");
                if (r)
                  (r.style.transform = `scale(${n})`),
                    (i = r.getBoundingClientRect());
                else {
                  const t = e.querySelector("iframe");
                  (t.style.transform = `scale(${n})`),
                    (i = t.getBoundingClientRect());
                }
                (e.style.width = i.width + "px"),
                  (e.style.height = i.height + 40 + "px");
              }),
              Ne.listen("onViewChange", (n) => {
                if (!t.view_mode_support) return;
                let i = 0,
                  r = 0,
                  o = null;
                const s = e.querySelector("#device_frame");
                "portrait" === n.view
                  ? ((i = t.width),
                    (r = t.height),
                    s && s.classList.remove("landscape"))
                  : ((i = t.height),
                    (r = t.width),
                    s && s.classList.add("landscape"));
                const a = e.querySelector("iframe");
                (a.style.width = i + "px"),
                  (a.style.height = r + "px"),
                  s
                    ? ((s.style.width = i + "px"),
                      (s.style.height = r + "px"),
                      (o = s.getBoundingClientRect()))
                    : (o = a.getBoundingClientRect()),
                  (e.style.width = o.width + "px"),
                  (e.style.height = o.height + 40 + "px");
              }),
              Ne.listen("onURLChange", (n) => {
                e.querySelector("iframe").src = xt(n.url, t.user_agent);
              }),
              Ne.listen("onRefresh", (n) => {
                e.querySelector("iframe").src = xt(_e.getURL(), t.user_agent);
              }),
              Ne.listen("onFrameEvent", (t) => {
                const n = e.querySelector("iframe");
                switch (t.action) {
                  case "hv-add":
                    kt("hv-initialize", t.frameId, {}, n);
                    break;
                  case "hv-back":
                    kt("hv-back", t.frameId, {}, n);
                    break;
                  case "hv-forward":
                    kt("hv-forward", t.frameId, {}, n);
                    break;
                  case "hv-scroll":
                    kt("hv-setScroll", t.frameId, { scroll: t.data.scroll }, n);
                    break;
                  case "hv-click":
                    kt("hv-click", t.frameId, { selector: t.data.selector }, n);
                }
              });
          })(t, e),
          t
        );
      },
    };
    const Lt = ne.create("<div class='frames'></div>"),
      St = ne.create("<div></div>");
    function Nt() {
      St.innerHTML = "";
      for (const e of _e.getDevices()) e.hide || St.appendChild(Et.render(e));
      return (
        Ne.listen("onZoomChange", (e) => {
          St.getBoundingClientRect().height > Lt.getBoundingClientRect().height
            ? (Lt.style.overflowY = "auto")
            : ((Lt.scrollTop = 0), (Lt.style.overflowY = "hidden"));
        }),
        Lt
      );
    }
    Lt.appendChild(St),
      Ne.listen("onDevicesChange", (e) => {
        Ne.clear([
          "onFrameEvent",
          "onRefresh",
          "onURLChange",
          "onZoomChange",
          "onViewChange",
        ]),
          Nt(),
          Ne.trigger(new Ne.ZoomChange(_e.getZoom())),
          Ne.trigger(new Ne.ViewChange(_e.getView()));
      });
    var At = { render: Nt };
    const _t = document.getElementById("root");
    let It = null;
    function Tt() {
      const e = window.innerHeight - 60;
      It.style.height = e + "px";
    }
    window.addEventListener("resize", Tt),
      ie("responsive.register", {}),
      window.addEventListener("unload", (e) => {
        ie("responsive.remove", {});
      }),
      window.addEventListener(
        "message",
        (e) => {
          const t = e.data.id,
            n = e.data.action;
          switch (n) {
            case "hv-unload":
              break;
            case "hv-add":
              _e.setURL(e.data.url),
                yt.urlChange(e.data.url),
                Ne.trigger(new Ne.FrameEvent(n, t, {}));
              break;
            case "hv-update-url":
              _e.setURL(e.data.url), yt.urlChange();
              break;
            case "hv-scroll":
              {
                const i = { scroll: e.data.scroll };
                Ne.trigger(new Ne.FrameEvent(n, t, i));
              }
              break;
            case "hv-click": {
              const i = { selector: e.data.selector };
              Ne.trigger(new Ne.FrameEvent(n, t, i));
            }
          }
        },
        !1
      ),
      chrome.runtime.onMessage.addListener((e, t, n) => {
        switch (e.action) {
          case "responsive.initialize":
            e.activation
              ? (_e.setZoom(e.zoom),
                _e.setIsFrame(e.is_frame),
                _e.setView(e.view),
                _e.setURL(e.url),
                _e.setDevices(e.devices),
                _t.appendChild(oe.render()),
                _t.appendChild(ut.render()),
                _t.appendChild(it.render()),
                _t.appendChild(yt.render()),
                (It = ne.create("<div class='container'></div>")),
                It.appendChild(At.render()),
                _t.appendChild(It),
                Tt(),
                Ne.trigger(new Ne.ZoomChange(_e.getZoom())),
                Ne.trigger(new Ne.ViewChange(_e.getView())))
              : window.close();
            break;
          case "responsive.setDevices":
            _e.setDevices(e.devices), Ne.trigger(new Ne.DevicesChange());
        }
      });
  },
]);

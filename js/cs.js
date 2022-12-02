!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
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
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
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
    n((n.s = 44));
})([
  function (e, t, n) {
    "use strict";
    var r = n(3),
      i = Object.prototype.toString;
    function o(e) {
      return "[object Array]" === i.call(e);
    }
    function a(e) {
      return void 0 === e;
    }
    function s(e) {
      return null !== e && "object" == typeof e;
    }
    function l(e) {
      if ("[object Object]" !== i.call(e)) return !1;
      var t = Object.getPrototypeOf(e);
      return null === t || t === Object.prototype;
    }
    function c(e) {
      return "[object Function]" === i.call(e);
    }
    function u(e, t) {
      if (null != e)
        if (("object" != typeof e && (e = [e]), o(e)))
          for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
        else
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              t.call(null, e[i], i, e);
    }
    e.exports = {
      isArray: o,
      isArrayBuffer: function (e) {
        return "[object ArrayBuffer]" === i.call(e);
      },
      isBuffer: function (e) {
        return (
          null !== e &&
          !a(e) &&
          null !== e.constructor &&
          !a(e.constructor) &&
          "function" == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: function (e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      },
      isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && e.buffer instanceof ArrayBuffer;
      },
      isString: function (e) {
        return "string" == typeof e;
      },
      isNumber: function (e) {
        return "number" == typeof e;
      },
      isObject: s,
      isPlainObject: l,
      isUndefined: a,
      isDate: function (e) {
        return "[object Date]" === i.call(e);
      },
      isFile: function (e) {
        return "[object File]" === i.call(e);
      },
      isBlob: function (e) {
        return "[object Blob]" === i.call(e);
      },
      isFunction: c,
      isStream: function (e) {
        return s(e) && c(e.pipe);
      },
      isURLSearchParams: function (e) {
        return (
          "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        );
      },
      isStandardBrowserEnv: function () {
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: u,
      merge: function e() {
        var t = {};
        function n(n, r) {
          l(t[r]) && l(n)
            ? (t[r] = e(t[r], n))
            : l(n)
            ? (t[r] = e({}, n))
            : o(n)
            ? (t[r] = n.slice())
            : (t[r] = n);
        }
        for (var r = 0, i = arguments.length; r < i; r++) u(arguments[r], n);
        return t;
      },
      extend: function (e, t, n) {
        return (
          u(t, function (t, i) {
            e[i] = n && "function" == typeof t ? r(t, n) : t;
          }),
          e
        );
      },
      trim: function (e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
      },
      stripBOM: function (e) {
        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
      },
    };
  },
  function (e, t, n) {
    e.exports = (function () {
      "use strict";
      var e = navigator.userAgent,
        t = navigator.platform,
        n = /gecko\/\d/i.test(e),
        r = /MSIE \d/.test(e),
        i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
        o = /Edge\/(\d+)/.exec(e),
        a = r || i || o,
        s = a && (r ? document.documentMode || 6 : +(o || i)[1]),
        l = !o && /WebKit\//.test(e),
        c = l && /Qt\/\d+\.\d+/.test(e),
        u = !o && /Chrome\//.test(e),
        d = /Opera\//.test(e),
        f = /Apple Computer/.test(navigator.vendor),
        h = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
        p = /PhantomJS/.test(e),
        m = f && (/Mobile\/\w+/.test(e) || navigator.maxTouchPoints > 2),
        g = /Android/.test(e),
        v =
          m || g || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
        y = m || /Mac/.test(t),
        b = /\bCrOS\b/.test(e),
        w = /win/i.test(t),
        x = d && e.match(/Version\/(\d*\.\d*)/);
      x && (x = Number(x[1])), x && x >= 15 && ((d = !1), (l = !0));
      var k = y && (c || (d && (null == x || x < 12.11))),
        S = n || (a && s >= 9);
      function C(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
      }
      var L,
        T = function (e, t) {
          var n = e.className,
            r = C(t).exec(n);
          if (r) {
            var i = n.slice(r.index + r[0].length);
            e.className = n.slice(0, r.index) + (i ? r[1] + i : "");
          }
        };
      function M(e) {
        for (var t = e.childNodes.length; t > 0; --t)
          e.removeChild(e.firstChild);
        return e;
      }
      function O(e, t) {
        return M(e).appendChild(t);
      }
      function E(e, t, n, r) {
        var i = document.createElement(e);
        if (
          (n && (i.className = n),
          r && (i.style.cssText = r),
          "string" == typeof t)
        )
          i.appendChild(document.createTextNode(t));
        else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
        return i;
      }
      function A(e, t, n, r) {
        var i = E(e, t, n, r);
        return i.setAttribute("role", "presentation"), i;
      }
      function N(e, t) {
        if ((3 == t.nodeType && (t = t.parentNode), e.contains))
          return e.contains(t);
        do {
          if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
        } while ((t = t.parentNode));
      }
      function _() {
        var e;
        try {
          e = document.activeElement;
        } catch (t) {
          e = document.body || null;
        }
        for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
          e = e.shadowRoot.activeElement;
        return e;
      }
      function P(e, t) {
        var n = e.className;
        C(t).test(n) || (e.className += (n ? " " : "") + t);
      }
      function R(e, t) {
        for (var n = e.split(" "), r = 0; r < n.length; r++)
          n[r] && !C(n[r]).test(t) && (t += " " + n[r]);
        return t;
      }
      L = document.createRange
        ? function (e, t, n, r) {
            var i = document.createRange();
            return i.setEnd(r || e, n), i.setStart(e, t), i;
          }
        : function (e, t, n) {
            var r = document.body.createTextRange();
            try {
              r.moveToElementText(e.parentNode);
            } catch (e) {
              return r;
            }
            return (
              r.collapse(!0),
              r.moveEnd("character", n),
              r.moveStart("character", t),
              r
            );
          };
      var j = function (e) {
        e.select();
      };
      function H(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function () {
          return e.apply(null, t);
        };
      }
      function D(e, t, n) {
        for (var r in (t || (t = {}), e))
          !e.hasOwnProperty(r) ||
            (!1 === n && t.hasOwnProperty(r)) ||
            (t[r] = e[r]);
        return t;
      }
      function z(e, t, n, r, i) {
        null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
        for (var o = r || 0, a = i || 0; ; ) {
          var s = e.indexOf("\t", o);
          if (s < 0 || s >= t) return a + (t - o);
          (a += s - o), (a += n - (a % n)), (o = s + 1);
        }
      }
      m
        ? (j = function (e) {
            (e.selectionStart = 0), (e.selectionEnd = e.value.length);
          })
        : a &&
          (j = function (e) {
            try {
              e.select();
            } catch (e) {}
          });
      var B = function () {
        (this.id = null),
          (this.f = null),
          (this.time = 0),
          (this.handler = H(this.onTimeout, this));
      };
      function I(e, t) {
        for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
        return -1;
      }
      (B.prototype.onTimeout = function (e) {
        (e.id = 0),
          e.time <= +new Date()
            ? e.f()
            : setTimeout(e.handler, e.time - +new Date());
      }),
        (B.prototype.set = function (e, t) {
          this.f = t;
          var n = +new Date() + e;
          (!this.id || n < this.time) &&
            (clearTimeout(this.id),
            (this.id = setTimeout(this.handler, e)),
            (this.time = n));
        });
      var q = {
          toString: function () {
            return "CodeMirror.Pass";
          },
        },
        W = { scroll: !1 },
        F = { origin: "*mouse" },
        $ = { origin: "+move" };
      function U(e, t, n) {
        for (var r = 0, i = 0; ; ) {
          var o = e.indexOf("\t", r);
          -1 == o && (o = e.length);
          var a = o - r;
          if (o == e.length || i + a >= t) return r + Math.min(a, t - i);
          if (((i += o - r), (r = o + 1), (i += n - (i % n)) >= t)) return r;
        }
      }
      var G = [""];
      function V(e) {
        for (; G.length <= e; ) G.push(K(G) + " ");
        return G[e];
      }
      function K(e) {
        return e[e.length - 1];
      }
      function Y(e, t) {
        for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
        return n;
      }
      function J() {}
      function X(e, t) {
        var n;
        return (
          Object.create
            ? (n = Object.create(e))
            : ((J.prototype = e), (n = new J())),
          t && D(t, n),
          n
        );
      }
      var Z =
        /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      function Q(e) {
        return (
          /\w/.test(e) ||
          (e > "" && (e.toUpperCase() != e.toLowerCase() || Z.test(e)))
        );
      }
      function ee(e, t) {
        return t ? !!(t.source.indexOf("\\w") > -1 && Q(e)) || t.test(e) : Q(e);
      }
      function te(e) {
        for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
        return !0;
      }
      var ne =
        /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
      function re(e) {
        return e.charCodeAt(0) >= 768 && ne.test(e);
      }
      function ie(e, t, n) {
        for (; (n < 0 ? t > 0 : t < e.length) && re(e.charAt(t)); ) t += n;
        return t;
      }
      function oe(e, t, n) {
        for (var r = t > n ? -1 : 1; ; ) {
          if (t == n) return t;
          var i = (t + n) / 2,
            o = r < 0 ? Math.ceil(i) : Math.floor(i);
          if (o == t) return e(o) ? t : n;
          e(o) ? (n = o) : (t = o + r);
        }
      }
      var ae = null;
      function se(e, t, n) {
        var r;
        ae = null;
        for (var i = 0; i < e.length; ++i) {
          var o = e[i];
          if (o.from < t && o.to > t) return i;
          o.to == t && (o.from != o.to && "before" == n ? (r = i) : (ae = i)),
            o.from == t &&
              (o.from != o.to && "before" != n ? (r = i) : (ae = i));
        }
        return null != r ? r : ae;
      }
      var le = (function () {
        var e = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
          t = /[stwN]/,
          n = /[LRr]/,
          r = /[Lb1n]/,
          i = /[1n]/;
        function o(e, t, n) {
          (this.level = e), (this.from = t), (this.to = n);
        }
        return function (a, s) {
          var l = "ltr" == s ? "L" : "R";
          if (0 == a.length || ("ltr" == s && !e.test(a))) return !1;
          for (var c, u = a.length, d = [], f = 0; f < u; ++f)
            d.push(
              (c = a.charCodeAt(f)) <= 247
                ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(
                    c
                  )
                : 1424 <= c && c <= 1524
                ? "R"
                : 1536 <= c && c <= 1785
                ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(
                    c - 1536
                  )
                : 1774 <= c && c <= 2220
                ? "r"
                : 8192 <= c && c <= 8203
                ? "w"
                : 8204 == c
                ? "b"
                : "L"
            );
          for (var h = 0, p = l; h < u; ++h) {
            var m = d[h];
            "m" == m ? (d[h] = p) : (p = m);
          }
          for (var g = 0, v = l; g < u; ++g) {
            var y = d[g];
            "1" == y && "r" == v
              ? (d[g] = "n")
              : n.test(y) && ((v = y), "r" == y && (d[g] = "R"));
          }
          for (var b = 1, w = d[0]; b < u - 1; ++b) {
            var x = d[b];
            "+" == x && "1" == w && "1" == d[b + 1]
              ? (d[b] = "1")
              : "," != x ||
                w != d[b + 1] ||
                ("1" != w && "n" != w) ||
                (d[b] = w),
              (w = x);
          }
          for (var k = 0; k < u; ++k) {
            var S = d[k];
            if ("," == S) d[k] = "N";
            else if ("%" == S) {
              var C = void 0;
              for (C = k + 1; C < u && "%" == d[C]; ++C);
              for (
                var L =
                    (k && "!" == d[k - 1]) || (C < u && "1" == d[C])
                      ? "1"
                      : "N",
                  T = k;
                T < C;
                ++T
              )
                d[T] = L;
              k = C - 1;
            }
          }
          for (var M = 0, O = l; M < u; ++M) {
            var E = d[M];
            "L" == O && "1" == E ? (d[M] = "L") : n.test(E) && (O = E);
          }
          for (var A = 0; A < u; ++A)
            if (t.test(d[A])) {
              var N = void 0;
              for (N = A + 1; N < u && t.test(d[N]); ++N);
              for (
                var _ = "L" == (A ? d[A - 1] : l),
                  P = _ == ("L" == (N < u ? d[N] : l)) ? (_ ? "L" : "R") : l,
                  R = A;
                R < N;
                ++R
              )
                d[R] = P;
              A = N - 1;
            }
          for (var j, H = [], D = 0; D < u; )
            if (r.test(d[D])) {
              var z = D;
              for (++D; D < u && r.test(d[D]); ++D);
              H.push(new o(0, z, D));
            } else {
              var B = D,
                I = H.length,
                q = "rtl" == s ? 1 : 0;
              for (++D; D < u && "L" != d[D]; ++D);
              for (var W = B; W < D; )
                if (i.test(d[W])) {
                  B < W && (H.splice(I, 0, new o(1, B, W)), (I += q));
                  var F = W;
                  for (++W; W < D && i.test(d[W]); ++W);
                  H.splice(I, 0, new o(2, F, W)), (I += q), (B = W);
                } else ++W;
              B < D && H.splice(I, 0, new o(1, B, D));
            }
          return (
            "ltr" == s &&
              (1 == H[0].level &&
                (j = a.match(/^\s+/)) &&
                ((H[0].from = j[0].length),
                H.unshift(new o(0, 0, j[0].length))),
              1 == K(H).level &&
                (j = a.match(/\s+$/)) &&
                ((K(H).to -= j[0].length),
                H.push(new o(0, u - j[0].length, u)))),
            "rtl" == s ? H.reverse() : H
          );
        };
      })();
      function ce(e, t) {
        var n = e.order;
        return null == n && (n = e.order = le(e.text, t)), n;
      }
      var ue = [],
        de = function (e, t, n) {
          if (e.addEventListener) e.addEventListener(t, n, !1);
          else if (e.attachEvent) e.attachEvent("on" + t, n);
          else {
            var r = e._handlers || (e._handlers = {});
            r[t] = (r[t] || ue).concat(n);
          }
        };
      function fe(e, t) {
        return (e._handlers && e._handlers[t]) || ue;
      }
      function he(e, t, n) {
        if (e.removeEventListener) e.removeEventListener(t, n, !1);
        else if (e.detachEvent) e.detachEvent("on" + t, n);
        else {
          var r = e._handlers,
            i = r && r[t];
          if (i) {
            var o = I(i, n);
            o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
          }
        }
      }
      function pe(e, t) {
        var n = fe(e, t);
        if (n.length)
          for (
            var r = Array.prototype.slice.call(arguments, 2), i = 0;
            i < n.length;
            ++i
          )
            n[i].apply(null, r);
      }
      function me(e, t, n) {
        return (
          "string" == typeof t &&
            (t = {
              type: t,
              preventDefault: function () {
                this.defaultPrevented = !0;
              },
            }),
          pe(e, n || t.type, e, t),
          xe(t) || t.codemirrorIgnore
        );
      }
      function ge(e) {
        var t = e._handlers && e._handlers.cursorActivity;
        if (t)
          for (
            var n =
                e.curOp.cursorActivityHandlers ||
                (e.curOp.cursorActivityHandlers = []),
              r = 0;
            r < t.length;
            ++r
          )
            -1 == I(n, t[r]) && n.push(t[r]);
      }
      function ve(e, t) {
        return fe(e, t).length > 0;
      }
      function ye(e) {
        (e.prototype.on = function (e, t) {
          de(this, e, t);
        }),
          (e.prototype.off = function (e, t) {
            he(this, e, t);
          });
      }
      function be(e) {
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
      }
      function we(e) {
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
      }
      function xe(e) {
        return null != e.defaultPrevented
          ? e.defaultPrevented
          : 0 == e.returnValue;
      }
      function ke(e) {
        be(e), we(e);
      }
      function Se(e) {
        return e.target || e.srcElement;
      }
      function Ce(e) {
        var t = e.which;
        return (
          null == t &&
            (1 & e.button
              ? (t = 1)
              : 2 & e.button
              ? (t = 3)
              : 4 & e.button && (t = 2)),
          y && e.ctrlKey && 1 == t && (t = 3),
          t
        );
      }
      var Le,
        Te,
        Me = (function () {
          if (a && s < 9) return !1;
          var e = E("div");
          return "draggable" in e || "dragDrop" in e;
        })();
      function Oe(e) {
        if (null == Le) {
          var t = E("span", "​");
          O(e, E("span", [t, document.createTextNode("x")])),
            0 != e.firstChild.offsetHeight &&
              (Le = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && s < 8));
        }
        var n = Le
          ? E("span", "​")
          : E(
              "span",
              " ",
              null,
              "display: inline-block; width: 1px; margin-right: -1px"
            );
        return n.setAttribute("cm-text", ""), n;
      }
      function Ee(e) {
        if (null != Te) return Te;
        var t = O(e, document.createTextNode("AخA")),
          n = L(t, 0, 1).getBoundingClientRect(),
          r = L(t, 1, 2).getBoundingClientRect();
        return M(e), !(!n || n.left == n.right) && (Te = r.right - n.right < 3);
      }
      var Ae,
        Ne =
          3 != "\n\nb".split(/\n/).length
            ? function (e) {
                for (var t = 0, n = [], r = e.length; t <= r; ) {
                  var i = e.indexOf("\n", t);
                  -1 == i && (i = e.length);
                  var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                    a = o.indexOf("\r");
                  -1 != a
                    ? (n.push(o.slice(0, a)), (t += a + 1))
                    : (n.push(o), (t = i + 1));
                }
                return n;
              }
            : function (e) {
                return e.split(/\r\n?|\n/);
              },
        _e = window.getSelection
          ? function (e) {
              try {
                return e.selectionStart != e.selectionEnd;
              } catch (e) {
                return !1;
              }
            }
          : function (e) {
              var t;
              try {
                t = e.ownerDocument.selection.createRange();
              } catch (e) {}
              return (
                !(!t || t.parentElement() != e) &&
                0 != t.compareEndPoints("StartToEnd", t)
              );
            },
        Pe =
          "oncopy" in (Ae = E("div")) ||
          (Ae.setAttribute("oncopy", "return;"),
          "function" == typeof Ae.oncopy),
        Re = null,
        je = {},
        He = {};
      function De(e, t) {
        arguments.length > 2 &&
          (t.dependencies = Array.prototype.slice.call(arguments, 2)),
          (je[e] = t);
      }
      function ze(e) {
        if ("string" == typeof e && He.hasOwnProperty(e)) e = He[e];
        else if (e && "string" == typeof e.name && He.hasOwnProperty(e.name)) {
          var t = He[e.name];
          "string" == typeof t && (t = { name: t }),
            ((e = X(t, e)).name = t.name);
        } else {
          if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return ze("application/xml");
          if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
            return ze("application/json");
        }
        return "string" == typeof e ? { name: e } : e || { name: "null" };
      }
      function Be(e, t) {
        t = ze(t);
        var n = je[t.name];
        if (!n) return Be(e, "text/plain");
        var r = n(e, t);
        if (Ie.hasOwnProperty(t.name)) {
          var i = Ie[t.name];
          for (var o in i)
            i.hasOwnProperty(o) &&
              (r.hasOwnProperty(o) && (r["_" + o] = r[o]), (r[o] = i[o]));
        }
        if (
          ((r.name = t.name),
          t.helperType && (r.helperType = t.helperType),
          t.modeProps)
        )
          for (var a in t.modeProps) r[a] = t.modeProps[a];
        return r;
      }
      var Ie = {};
      function qe(e, t) {
        D(t, Ie.hasOwnProperty(e) ? Ie[e] : (Ie[e] = {}));
      }
      function We(e, t) {
        if (!0 === t) return t;
        if (e.copyState) return e.copyState(t);
        var n = {};
        for (var r in t) {
          var i = t[r];
          i instanceof Array && (i = i.concat([])), (n[r] = i);
        }
        return n;
      }
      function Fe(e, t) {
        for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e; )
          (t = n.state), (e = n.mode);
        return n || { mode: e, state: t };
      }
      function $e(e, t, n) {
        return !e.startState || e.startState(t, n);
      }
      var Ue = function (e, t, n) {
        (this.pos = this.start = 0),
          (this.string = e),
          (this.tabSize = t || 8),
          (this.lastColumnPos = this.lastColumnValue = 0),
          (this.lineStart = 0),
          (this.lineOracle = n);
      };
      function Ge(e, t) {
        if ((t -= e.first) < 0 || t >= e.size)
          throw new Error(
            "There is no line " + (t + e.first) + " in the document."
          );
        for (var n = e; !n.lines; )
          for (var r = 0; ; ++r) {
            var i = n.children[r],
              o = i.chunkSize();
            if (t < o) {
              n = i;
              break;
            }
            t -= o;
          }
        return n.lines[t];
      }
      function Ve(e, t, n) {
        var r = [],
          i = t.line;
        return (
          e.iter(t.line, n.line + 1, function (e) {
            var o = e.text;
            i == n.line && (o = o.slice(0, n.ch)),
              i == t.line && (o = o.slice(t.ch)),
              r.push(o),
              ++i;
          }),
          r
        );
      }
      function Ke(e, t, n) {
        var r = [];
        return (
          e.iter(t, n, function (e) {
            r.push(e.text);
          }),
          r
        );
      }
      function Ye(e, t) {
        var n = t - e.height;
        if (n) for (var r = e; r; r = r.parent) r.height += n;
      }
      function Je(e) {
        if (null == e.parent) return null;
        for (
          var t = e.parent, n = I(t.lines, e), r = t.parent;
          r;
          t = r, r = r.parent
        )
          for (var i = 0; r.children[i] != t; ++i)
            n += r.children[i].chunkSize();
        return n + t.first;
      }
      function Xe(e, t) {
        var n = e.first;
        e: do {
          for (var r = 0; r < e.children.length; ++r) {
            var i = e.children[r],
              o = i.height;
            if (t < o) {
              e = i;
              continue e;
            }
            (t -= o), (n += i.chunkSize());
          }
          return n;
        } while (!e.lines);
        for (var a = 0; a < e.lines.length; ++a) {
          var s = e.lines[a].height;
          if (t < s) break;
          t -= s;
        }
        return n + a;
      }
      function Ze(e, t) {
        return t >= e.first && t < e.first + e.size;
      }
      function Qe(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber));
      }
      function et(e, t, n) {
        if ((void 0 === n && (n = null), !(this instanceof et)))
          return new et(e, t, n);
        (this.line = e), (this.ch = t), (this.sticky = n);
      }
      function tt(e, t) {
        return e.line - t.line || e.ch - t.ch;
      }
      function nt(e, t) {
        return e.sticky == t.sticky && 0 == tt(e, t);
      }
      function rt(e) {
        return et(e.line, e.ch);
      }
      function it(e, t) {
        return tt(e, t) < 0 ? t : e;
      }
      function ot(e, t) {
        return tt(e, t) < 0 ? e : t;
      }
      function at(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1));
      }
      function st(e, t) {
        if (t.line < e.first) return et(e.first, 0);
        var n = e.first + e.size - 1;
        return t.line > n
          ? et(n, Ge(e, n).text.length)
          : (function (e, t) {
              var n = e.ch;
              return null == n || n > t
                ? et(e.line, t)
                : n < 0
                ? et(e.line, 0)
                : e;
            })(t, Ge(e, t.line).text.length);
      }
      function lt(e, t) {
        for (var n = [], r = 0; r < t.length; r++) n[r] = st(e, t[r]);
        return n;
      }
      (Ue.prototype.eol = function () {
        return this.pos >= this.string.length;
      }),
        (Ue.prototype.sol = function () {
          return this.pos == this.lineStart;
        }),
        (Ue.prototype.peek = function () {
          return this.string.charAt(this.pos) || void 0;
        }),
        (Ue.prototype.next = function () {
          if (this.pos < this.string.length)
            return this.string.charAt(this.pos++);
        }),
        (Ue.prototype.eat = function (e) {
          var t = this.string.charAt(this.pos);
          if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t)))
            return ++this.pos, t;
        }),
        (Ue.prototype.eatWhile = function (e) {
          for (var t = this.pos; this.eat(e); );
          return this.pos > t;
        }),
        (Ue.prototype.eatSpace = function () {
          for (
            var e = this.pos;
            /[\s\u00a0]/.test(this.string.charAt(this.pos));

          )
            ++this.pos;
          return this.pos > e;
        }),
        (Ue.prototype.skipToEnd = function () {
          this.pos = this.string.length;
        }),
        (Ue.prototype.skipTo = function (e) {
          var t = this.string.indexOf(e, this.pos);
          if (t > -1) return (this.pos = t), !0;
        }),
        (Ue.prototype.backUp = function (e) {
          this.pos -= e;
        }),
        (Ue.prototype.column = function () {
          return (
            this.lastColumnPos < this.start &&
              ((this.lastColumnValue = z(
                this.string,
                this.start,
                this.tabSize,
                this.lastColumnPos,
                this.lastColumnValue
              )),
              (this.lastColumnPos = this.start)),
            this.lastColumnValue -
              (this.lineStart
                ? z(this.string, this.lineStart, this.tabSize)
                : 0)
          );
        }),
        (Ue.prototype.indentation = function () {
          return (
            z(this.string, null, this.tabSize) -
            (this.lineStart ? z(this.string, this.lineStart, this.tabSize) : 0)
          );
        }),
        (Ue.prototype.match = function (e, t, n) {
          if ("string" != typeof e) {
            var r = this.string.slice(this.pos).match(e);
            return r && r.index > 0
              ? null
              : (r && !1 !== t && (this.pos += r[0].length), r);
          }
          var i = function (e) {
            return n ? e.toLowerCase() : e;
          };
          if (i(this.string.substr(this.pos, e.length)) == i(e))
            return !1 !== t && (this.pos += e.length), !0;
        }),
        (Ue.prototype.current = function () {
          return this.string.slice(this.start, this.pos);
        }),
        (Ue.prototype.hideFirstChars = function (e, t) {
          this.lineStart += e;
          try {
            return t();
          } finally {
            this.lineStart -= e;
          }
        }),
        (Ue.prototype.lookAhead = function (e) {
          var t = this.lineOracle;
          return t && t.lookAhead(e);
        }),
        (Ue.prototype.baseToken = function () {
          var e = this.lineOracle;
          return e && e.baseToken(this.pos);
        });
      var ct = function (e, t) {
          (this.state = e), (this.lookAhead = t);
        },
        ut = function (e, t, n, r) {
          (this.state = t),
            (this.doc = e),
            (this.line = n),
            (this.maxLookAhead = r || 0),
            (this.baseTokens = null),
            (this.baseTokenPos = 1);
        };
      function dt(e, t, n, r) {
        var i = [e.state.modeGen],
          o = {};
        wt(
          e,
          t.text,
          e.doc.mode,
          n,
          function (e, t) {
            return i.push(e, t);
          },
          o,
          r
        );
        for (
          var a = n.state,
            s = function (r) {
              n.baseTokens = i;
              var s = e.state.overlays[r],
                l = 1,
                c = 0;
              (n.state = !0),
                wt(
                  e,
                  t.text,
                  s.mode,
                  n,
                  function (e, t) {
                    for (var n = l; c < e; ) {
                      var r = i[l];
                      r > e && i.splice(l, 1, e, i[l + 1], r),
                        (l += 2),
                        (c = Math.min(e, r));
                    }
                    if (t)
                      if (s.opaque)
                        i.splice(n, l - n, e, "overlay " + t), (l = n + 2);
                      else
                        for (; n < l; n += 2) {
                          var o = i[n + 1];
                          i[n + 1] = (o ? o + " " : "") + "overlay " + t;
                        }
                  },
                  o
                ),
                (n.state = a),
                (n.baseTokens = null),
                (n.baseTokenPos = 1);
            },
            l = 0;
          l < e.state.overlays.length;
          ++l
        )
          s(l);
        return { styles: i, classes: o.bgClass || o.textClass ? o : null };
      }
      function ft(e, t, n) {
        if (!t.styles || t.styles[0] != e.state.modeGen) {
          var r = ht(e, Je(t)),
            i =
              t.text.length > e.options.maxHighlightLength &&
              We(e.doc.mode, r.state),
            o = dt(e, t, r);
          i && (r.state = i),
            (t.stateAfter = r.save(!i)),
            (t.styles = o.styles),
            o.classes
              ? (t.styleClasses = o.classes)
              : t.styleClasses && (t.styleClasses = null),
            n === e.doc.highlightFrontier &&
              (e.doc.modeFrontier = Math.max(
                e.doc.modeFrontier,
                ++e.doc.highlightFrontier
              ));
        }
        return t.styles;
      }
      function ht(e, t, n) {
        var r = e.doc,
          i = e.display;
        if (!r.mode.startState) return new ut(r, !0, t);
        var o = (function (e, t, n) {
            for (
              var r,
                i,
                o = e.doc,
                a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
                s = t;
              s > a;
              --s
            ) {
              if (s <= o.first) return o.first;
              var l = Ge(o, s - 1),
                c = l.stateAfter;
              if (
                c &&
                (!n ||
                  s + (c instanceof ct ? c.lookAhead : 0) <= o.modeFrontier)
              )
                return s;
              var u = z(l.text, null, e.options.tabSize);
              (null == i || r > u) && ((i = s - 1), (r = u));
            }
            return i;
          })(e, t, n),
          a = o > r.first && Ge(r, o - 1).stateAfter,
          s = a ? ut.fromSaved(r, a, o) : new ut(r, $e(r.mode), o);
        return (
          r.iter(o, t, function (n) {
            pt(e, n.text, s);
            var r = s.line;
            (n.stateAfter =
              r == t - 1 || r % 5 == 0 || (r >= i.viewFrom && r < i.viewTo)
                ? s.save()
                : null),
              s.nextLine();
          }),
          n && (r.modeFrontier = s.line),
          s
        );
      }
      function pt(e, t, n, r) {
        var i = e.doc.mode,
          o = new Ue(t, e.options.tabSize, n);
        for (o.start = o.pos = r || 0, "" == t && mt(i, n.state); !o.eol(); )
          gt(i, o, n.state), (o.start = o.pos);
      }
      function mt(e, t) {
        if (e.blankLine) return e.blankLine(t);
        if (e.innerMode) {
          var n = Fe(e, t);
          return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
        }
      }
      function gt(e, t, n, r) {
        for (var i = 0; i < 10; i++) {
          r && (r[0] = Fe(e, n).mode);
          var o = e.token(t, n);
          if (t.pos > t.start) return o;
        }
        throw new Error("Mode " + e.name + " failed to advance stream.");
      }
      (ut.prototype.lookAhead = function (e) {
        var t = this.doc.getLine(this.line + e);
        return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
      }),
        (ut.prototype.baseToken = function (e) {
          if (!this.baseTokens) return null;
          for (; this.baseTokens[this.baseTokenPos] <= e; )
            this.baseTokenPos += 2;
          var t = this.baseTokens[this.baseTokenPos + 1];
          return {
            type: t && t.replace(/( |^)overlay .*/, ""),
            size: this.baseTokens[this.baseTokenPos] - e,
          };
        }),
        (ut.prototype.nextLine = function () {
          this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
        }),
        (ut.fromSaved = function (e, t, n) {
          return t instanceof ct
            ? new ut(e, We(e.mode, t.state), n, t.lookAhead)
            : new ut(e, We(e.mode, t), n);
        }),
        (ut.prototype.save = function (e) {
          var t = !1 !== e ? We(this.doc.mode, this.state) : this.state;
          return this.maxLookAhead > 0 ? new ct(t, this.maxLookAhead) : t;
        });
      var vt = function (e, t, n) {
        (this.start = e.start),
          (this.end = e.pos),
          (this.string = e.current()),
          (this.type = t || null),
          (this.state = n);
      };
      function yt(e, t, n, r) {
        var i,
          o,
          a = e.doc,
          s = a.mode,
          l = Ge(a, (t = st(a, t)).line),
          c = ht(e, t.line, n),
          u = new Ue(l.text, e.options.tabSize, c);
        for (r && (o = []); (r || u.pos < t.ch) && !u.eol(); )
          (u.start = u.pos),
            (i = gt(s, u, c.state)),
            r && o.push(new vt(u, i, We(a.mode, c.state)));
        return r ? o : new vt(u, i, c.state);
      }
      function bt(e, t) {
        if (e)
          for (;;) {
            var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!n) break;
            e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
            var r = n[1] ? "bgClass" : "textClass";
            null == t[r]
              ? (t[r] = n[2])
              : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(t[r]) ||
                (t[r] += " " + n[2]);
          }
        return e;
      }
      function wt(e, t, n, r, i, o, a) {
        var s = n.flattenSpans;
        null == s && (s = e.options.flattenSpans);
        var l,
          c = 0,
          u = null,
          d = new Ue(t, e.options.tabSize, r),
          f = e.options.addModeClass && [null];
        for ("" == t && bt(mt(n, r.state), o); !d.eol(); ) {
          if (
            (d.pos > e.options.maxHighlightLength
              ? ((s = !1),
                a && pt(e, t, r, d.pos),
                (d.pos = t.length),
                (l = null))
              : (l = bt(gt(n, d, r.state, f), o)),
            f)
          ) {
            var h = f[0].name;
            h && (l = "m-" + (l ? h + " " + l : h));
          }
          if (!s || u != l) {
            for (; c < d.start; ) i((c = Math.min(d.start, c + 5e3)), u);
            u = l;
          }
          d.start = d.pos;
        }
        for (; c < d.pos; ) {
          var p = Math.min(d.pos, c + 5e3);
          i(p, u), (c = p);
        }
      }
      var xt = !1,
        kt = !1;
      function St(e, t, n) {
        (this.marker = e), (this.from = t), (this.to = n);
      }
      function Ct(e, t) {
        if (e)
          for (var n = 0; n < e.length; ++n) {
            var r = e[n];
            if (r.marker == t) return r;
          }
      }
      function Lt(e, t) {
        for (var n, r = 0; r < e.length; ++r)
          e[r] != t && (n || (n = [])).push(e[r]);
        return n;
      }
      function Tt(e, t) {
        if (t.full) return null;
        var n = Ze(e, t.from.line) && Ge(e, t.from.line).markedSpans,
          r = Ze(e, t.to.line) && Ge(e, t.to.line).markedSpans;
        if (!n && !r) return null;
        var i = t.from.ch,
          o = t.to.ch,
          a = 0 == tt(t.from, t.to),
          s = (function (e, t, n) {
            var r;
            if (e)
              for (var i = 0; i < e.length; ++i) {
                var o = e[i],
                  a = o.marker;
                if (
                  null == o.from ||
                  (a.inclusiveLeft ? o.from <= t : o.from < t) ||
                  (o.from == t &&
                    "bookmark" == a.type &&
                    (!n || !o.marker.insertLeft))
                ) {
                  var s =
                    null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                  (r || (r = [])).push(new St(a, o.from, s ? null : o.to));
                }
              }
            return r;
          })(n, i, a),
          l = (function (e, t, n) {
            var r;
            if (e)
              for (var i = 0; i < e.length; ++i) {
                var o = e[i],
                  a = o.marker;
                if (
                  null == o.to ||
                  (a.inclusiveRight ? o.to >= t : o.to > t) ||
                  (o.from == t &&
                    "bookmark" == a.type &&
                    (!n || o.marker.insertLeft))
                ) {
                  var s =
                    null == o.from ||
                    (a.inclusiveLeft ? o.from <= t : o.from < t);
                  (r || (r = [])).push(
                    new St(
                      a,
                      s ? null : o.from - t,
                      null == o.to ? null : o.to - t
                    )
                  );
                }
              }
            return r;
          })(r, o, a),
          c = 1 == t.text.length,
          u = K(t.text).length + (c ? i : 0);
        if (s)
          for (var d = 0; d < s.length; ++d) {
            var f = s[d];
            if (null == f.to) {
              var h = Ct(l, f.marker);
              h ? c && (f.to = null == h.to ? null : h.to + u) : (f.to = i);
            }
          }
        if (l)
          for (var p = 0; p < l.length; ++p) {
            var m = l[p];
            null != m.to && (m.to += u),
              null == m.from
                ? Ct(s, m.marker) ||
                  ((m.from = u), c && (s || (s = [])).push(m))
                : ((m.from += u), c && (s || (s = [])).push(m));
          }
        s && (s = Mt(s)), l && l != s && (l = Mt(l));
        var g = [s];
        if (!c) {
          var v,
            y = t.text.length - 2;
          if (y > 0 && s)
            for (var b = 0; b < s.length; ++b)
              null == s[b].to &&
                (v || (v = [])).push(new St(s[b].marker, null, null));
          for (var w = 0; w < y; ++w) g.push(v);
          g.push(l);
        }
        return g;
      }
      function Mt(e) {
        for (var t = 0; t < e.length; ++t) {
          var n = e[t];
          null != n.from &&
            n.from == n.to &&
            !1 !== n.marker.clearWhenEmpty &&
            e.splice(t--, 1);
        }
        return e.length ? e : null;
      }
      function Ot(e) {
        var t = e.markedSpans;
        if (t) {
          for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
          e.markedSpans = null;
        }
      }
      function Et(e, t) {
        if (t) {
          for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
          e.markedSpans = t;
        }
      }
      function At(e) {
        return e.inclusiveLeft ? -1 : 0;
      }
      function Nt(e) {
        return e.inclusiveRight ? 1 : 0;
      }
      function _t(e, t) {
        var n = e.lines.length - t.lines.length;
        if (0 != n) return n;
        var r = e.find(),
          i = t.find(),
          o = tt(r.from, i.from) || At(e) - At(t);
        if (o) return -o;
        var a = tt(r.to, i.to) || Nt(e) - Nt(t);
        return a || t.id - e.id;
      }
      function Pt(e, t) {
        var n,
          r = kt && e.markedSpans;
        if (r)
          for (var i = void 0, o = 0; o < r.length; ++o)
            (i = r[o]).marker.collapsed &&
              null == (t ? i.from : i.to) &&
              (!n || _t(n, i.marker) < 0) &&
              (n = i.marker);
        return n;
      }
      function Rt(e) {
        return Pt(e, !0);
      }
      function jt(e) {
        return Pt(e, !1);
      }
      function Ht(e, t) {
        var n,
          r = kt && e.markedSpans;
        if (r)
          for (var i = 0; i < r.length; ++i) {
            var o = r[i];
            o.marker.collapsed &&
              (null == o.from || o.from < t) &&
              (null == o.to || o.to > t) &&
              (!n || _t(n, o.marker) < 0) &&
              (n = o.marker);
          }
        return n;
      }
      function Dt(e, t, n, r, i) {
        var o = Ge(e, t),
          a = kt && o.markedSpans;
        if (a)
          for (var s = 0; s < a.length; ++s) {
            var l = a[s];
            if (l.marker.collapsed) {
              var c = l.marker.find(0),
                u = tt(c.from, n) || At(l.marker) - At(i),
                d = tt(c.to, r) || Nt(l.marker) - Nt(i);
              if (
                !((u >= 0 && d <= 0) || (u <= 0 && d >= 0)) &&
                ((u <= 0 &&
                  (l.marker.inclusiveRight && i.inclusiveLeft
                    ? tt(c.to, n) >= 0
                    : tt(c.to, n) > 0)) ||
                  (u >= 0 &&
                    (l.marker.inclusiveRight && i.inclusiveLeft
                      ? tt(c.from, r) <= 0
                      : tt(c.from, r) < 0)))
              )
                return !0;
            }
          }
      }
      function zt(e) {
        for (var t; (t = Rt(e)); ) e = t.find(-1, !0).line;
        return e;
      }
      function Bt(e, t) {
        var n = Ge(e, t),
          r = zt(n);
        return n == r ? t : Je(r);
      }
      function It(e, t) {
        if (t > e.lastLine()) return t;
        var n,
          r = Ge(e, t);
        if (!qt(e, r)) return t;
        for (; (n = jt(r)); ) r = n.find(1, !0).line;
        return Je(r) + 1;
      }
      function qt(e, t) {
        var n = kt && t.markedSpans;
        if (n)
          for (var r = void 0, i = 0; i < n.length; ++i)
            if ((r = n[i]).marker.collapsed) {
              if (null == r.from) return !0;
              if (
                !r.marker.widgetNode &&
                0 == r.from &&
                r.marker.inclusiveLeft &&
                Wt(e, t, r)
              )
                return !0;
            }
      }
      function Wt(e, t, n) {
        if (null == n.to) {
          var r = n.marker.find(1, !0);
          return Wt(e, r.line, Ct(r.line.markedSpans, n.marker));
        }
        if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
        for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
          if (
            (i = t.markedSpans[o]).marker.collapsed &&
            !i.marker.widgetNode &&
            i.from == n.to &&
            (null == i.to || i.to != n.from) &&
            (i.marker.inclusiveLeft || n.marker.inclusiveRight) &&
            Wt(e, t, i)
          )
            return !0;
      }
      function Ft(e) {
        for (
          var t = 0, n = (e = zt(e)).parent, r = 0;
          r < n.lines.length;
          ++r
        ) {
          var i = n.lines[r];
          if (i == e) break;
          t += i.height;
        }
        for (var o = n.parent; o; o = (n = o).parent)
          for (var a = 0; a < o.children.length; ++a) {
            var s = o.children[a];
            if (s == n) break;
            t += s.height;
          }
        return t;
      }
      function $t(e) {
        if (0 == e.height) return 0;
        for (var t, n = e.text.length, r = e; (t = Rt(r)); ) {
          var i = t.find(0, !0);
          (r = i.from.line), (n += i.from.ch - i.to.ch);
        }
        for (r = e; (t = jt(r)); ) {
          var o = t.find(0, !0);
          (n -= r.text.length - o.from.ch),
            (n += (r = o.to.line).text.length - o.to.ch);
        }
        return n;
      }
      function Ut(e) {
        var t = e.display,
          n = e.doc;
        (t.maxLine = Ge(n, n.first)),
          (t.maxLineLength = $t(t.maxLine)),
          (t.maxLineChanged = !0),
          n.iter(function (e) {
            var n = $t(e);
            n > t.maxLineLength && ((t.maxLineLength = n), (t.maxLine = e));
          });
      }
      var Gt = function (e, t, n) {
        (this.text = e), Et(this, t), (this.height = n ? n(this) : 1);
      };
      function Vt(e) {
        (e.parent = null), Ot(e);
      }
      (Gt.prototype.lineNo = function () {
        return Je(this);
      }),
        ye(Gt);
      var Kt = {},
        Yt = {};
      function Jt(e, t) {
        if (!e || /^\s*$/.test(e)) return null;
        var n = t.addModeClass ? Yt : Kt;
        return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
      }
      function Xt(e, t) {
        var n = A("span", null, null, l ? "padding-right: .1px" : null),
          r = {
            pre: A("pre", [n], "CodeMirror-line"),
            content: n,
            col: 0,
            pos: 0,
            cm: e,
            trailingSpace: !1,
            splitSpaces: e.getOption("lineWrapping"),
          };
        t.measure = {};
        for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
          var o = i ? t.rest[i - 1] : t.line,
            a = void 0;
          (r.pos = 0),
            (r.addToken = Qt),
            Ee(e.display.measure) &&
              (a = ce(o, e.doc.direction)) &&
              (r.addToken = en(r.addToken, a)),
            (r.map = []),
            nn(o, r, ft(e, o, t != e.display.externalMeasured && Je(o))),
            o.styleClasses &&
              (o.styleClasses.bgClass &&
                (r.bgClass = R(o.styleClasses.bgClass, r.bgClass || "")),
              o.styleClasses.textClass &&
                (r.textClass = R(o.styleClasses.textClass, r.textClass || ""))),
            0 == r.map.length &&
              r.map.push(0, 0, r.content.appendChild(Oe(e.display.measure))),
            0 == i
              ? ((t.measure.map = r.map), (t.measure.cache = {}))
              : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
                (t.measure.caches || (t.measure.caches = [])).push({}));
        }
        if (l) {
          var s = r.content.lastChild;
          (/\bcm-tab\b/.test(s.className) ||
            (s.querySelector && s.querySelector(".cm-tab"))) &&
            (r.content.className = "cm-tab-wrap-hack");
        }
        return (
          pe(e, "renderLine", e, t.line, r.pre),
          r.pre.className &&
            (r.textClass = R(r.pre.className, r.textClass || "")),
          r
        );
      }
      function Zt(e) {
        var t = E("span", "•", "cm-invalidchar");
        return (
          (t.title = "\\u" + e.charCodeAt(0).toString(16)),
          t.setAttribute("aria-label", t.title),
          t
        );
      }
      function Qt(e, t, n, r, i, o, l) {
        if (t) {
          var c,
            u = e.splitSpaces
              ? (function (e, t) {
                  if (e.length > 1 && !/  /.test(e)) return e;
                  for (var n = t, r = "", i = 0; i < e.length; i++) {
                    var o = e.charAt(i);
                    " " != o ||
                      !n ||
                      (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) ||
                      (o = " "),
                      (r += o),
                      (n = " " == o);
                  }
                  return r;
                })(t, e.trailingSpace)
              : t,
            d = e.cm.state.specialChars,
            f = !1;
          if (d.test(t)) {
            c = document.createDocumentFragment();
            for (var h = 0; ; ) {
              d.lastIndex = h;
              var p = d.exec(t),
                m = p ? p.index - h : t.length - h;
              if (m) {
                var g = document.createTextNode(u.slice(h, h + m));
                a && s < 9 ? c.appendChild(E("span", [g])) : c.appendChild(g),
                  e.map.push(e.pos, e.pos + m, g),
                  (e.col += m),
                  (e.pos += m);
              }
              if (!p) break;
              h += m + 1;
              var v = void 0;
              if ("\t" == p[0]) {
                var y = e.cm.options.tabSize,
                  b = y - (e.col % y);
                (v = c.appendChild(E("span", V(b), "cm-tab"))).setAttribute(
                  "role",
                  "presentation"
                ),
                  v.setAttribute("cm-text", "\t"),
                  (e.col += b);
              } else
                "\r" == p[0] || "\n" == p[0]
                  ? ((v = c.appendChild(
                      E("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar")
                    )).setAttribute("cm-text", p[0]),
                    (e.col += 1))
                  : ((v = e.cm.options.specialCharPlaceholder(
                      p[0]
                    )).setAttribute("cm-text", p[0]),
                    a && s < 9
                      ? c.appendChild(E("span", [v]))
                      : c.appendChild(v),
                    (e.col += 1));
              e.map.push(e.pos, e.pos + 1, v), e.pos++;
            }
          } else
            (e.col += t.length),
              (c = document.createTextNode(u)),
              e.map.push(e.pos, e.pos + t.length, c),
              a && s < 9 && (f = !0),
              (e.pos += t.length);
          if (
            ((e.trailingSpace = 32 == u.charCodeAt(t.length - 1)),
            n || r || i || f || o || l)
          ) {
            var w = n || "";
            r && (w += r), i && (w += i);
            var x = E("span", [c], w, o);
            if (l)
              for (var k in l)
                l.hasOwnProperty(k) &&
                  "style" != k &&
                  "class" != k &&
                  x.setAttribute(k, l[k]);
            return e.content.appendChild(x);
          }
          e.content.appendChild(c);
        }
      }
      function en(e, t) {
        return function (n, r, i, o, a, s, l) {
          i = i ? i + " cm-force-border" : "cm-force-border";
          for (var c = n.pos, u = c + r.length; ; ) {
            for (
              var d = void 0, f = 0;
              f < t.length && !((d = t[f]).to > c && d.from <= c);
              f++
            );
            if (d.to >= u) return e(n, r, i, o, a, s, l);
            e(n, r.slice(0, d.to - c), i, o, null, s, l),
              (o = null),
              (r = r.slice(d.to - c)),
              (c = d.to);
          }
        };
      }
      function tn(e, t, n, r) {
        var i = !r && n.widgetNode;
        i && e.map.push(e.pos, e.pos + t, i),
          !r &&
            e.cm.display.input.needsContentAttribute &&
            (i || (i = e.content.appendChild(document.createElement("span"))),
            i.setAttribute("cm-marker", n.id)),
          i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
          (e.pos += t),
          (e.trailingSpace = !1);
      }
      function nn(e, t, n) {
        var r = e.markedSpans,
          i = e.text,
          o = 0;
        if (r)
          for (
            var a, s, l, c, u, d, f, h = i.length, p = 0, m = 1, g = "", v = 0;
            ;

          ) {
            if (v == p) {
              (l = c = u = s = ""), (f = null), (d = null), (v = 1 / 0);
              for (var y = [], b = void 0, w = 0; w < r.length; ++w) {
                var x = r[w],
                  k = x.marker;
                if ("bookmark" == k.type && x.from == p && k.widgetNode)
                  y.push(k);
                else if (
                  x.from <= p &&
                  (null == x.to ||
                    x.to > p ||
                    (k.collapsed && x.to == p && x.from == p))
                ) {
                  if (
                    (null != x.to &&
                      x.to != p &&
                      v > x.to &&
                      ((v = x.to), (c = "")),
                    k.className && (l += " " + k.className),
                    k.css && (s = (s ? s + ";" : "") + k.css),
                    k.startStyle && x.from == p && (u += " " + k.startStyle),
                    k.endStyle &&
                      x.to == v &&
                      (b || (b = [])).push(k.endStyle, x.to),
                    k.title && ((f || (f = {})).title = k.title),
                    k.attributes)
                  )
                    for (var S in k.attributes)
                      (f || (f = {}))[S] = k.attributes[S];
                  k.collapsed && (!d || _t(d.marker, k) < 0) && (d = x);
                } else x.from > p && v > x.from && (v = x.from);
              }
              if (b)
                for (var C = 0; C < b.length; C += 2)
                  b[C + 1] == v && (c += " " + b[C]);
              if (!d || d.from == p)
                for (var L = 0; L < y.length; ++L) tn(t, 0, y[L]);
              if (d && (d.from || 0) == p) {
                if (
                  (tn(
                    t,
                    (null == d.to ? h + 1 : d.to) - p,
                    d.marker,
                    null == d.from
                  ),
                  null == d.to)
                )
                  return;
                d.to == p && (d = !1);
              }
            }
            if (p >= h) break;
            for (var T = Math.min(h, v); ; ) {
              if (g) {
                var M = p + g.length;
                if (!d) {
                  var O = M > T ? g.slice(0, T - p) : g;
                  t.addToken(
                    t,
                    O,
                    a ? a + l : l,
                    u,
                    p + O.length == v ? c : "",
                    s,
                    f
                  );
                }
                if (M >= T) {
                  (g = g.slice(T - p)), (p = T);
                  break;
                }
                (p = M), (u = "");
              }
              (g = i.slice(o, (o = n[m++]))), (a = Jt(n[m++], t.cm.options));
            }
          }
        else
          for (var E = 1; E < n.length; E += 2)
            t.addToken(t, i.slice(o, (o = n[E])), Jt(n[E + 1], t.cm.options));
      }
      function rn(e, t, n) {
        (this.line = t),
          (this.rest = (function (e) {
            for (var t, n; (t = jt(e)); )
              (e = t.find(1, !0).line), (n || (n = [])).push(e);
            return n;
          })(t)),
          (this.size = this.rest ? Je(K(this.rest)) - n + 1 : 1),
          (this.node = this.text = null),
          (this.hidden = qt(e, t));
      }
      function on(e, t, n) {
        for (var r, i = [], o = t; o < n; o = r) {
          var a = new rn(e.doc, Ge(e.doc, o), o);
          (r = o + a.size), i.push(a);
        }
        return i;
      }
      var an = null,
        sn = null;
      function ln(e, t) {
        var n = fe(e, t);
        if (n.length) {
          var r,
            i = Array.prototype.slice.call(arguments, 2);
          an
            ? (r = an.delayedCallbacks)
            : sn
            ? (r = sn)
            : ((r = sn = []), setTimeout(cn, 0));
          for (
            var o = function (e) {
                r.push(function () {
                  return n[e].apply(null, i);
                });
              },
              a = 0;
            a < n.length;
            ++a
          )
            o(a);
        }
      }
      function cn() {
        var e = sn;
        sn = null;
        for (var t = 0; t < e.length; ++t) e[t]();
      }
      function un(e, t, n, r) {
        for (var i = 0; i < t.changes.length; i++) {
          var o = t.changes[i];
          "text" == o
            ? hn(e, t)
            : "gutter" == o
            ? mn(e, t, n, r)
            : "class" == o
            ? pn(e, t)
            : "widget" == o && gn(e, t, r);
        }
        t.changes = null;
      }
      function dn(e) {
        return (
          e.node == e.text &&
            ((e.node = E("div", null, null, "position: relative")),
            e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
            e.node.appendChild(e.text),
            a && s < 8 && (e.node.style.zIndex = 2)),
          e.node
        );
      }
      function fn(e, t) {
        var n = e.display.externalMeasured;
        return n && n.line == t.line
          ? ((e.display.externalMeasured = null),
            (t.measure = n.measure),
            n.built)
          : Xt(e, t);
      }
      function hn(e, t) {
        var n = t.text.className,
          r = fn(e, t);
        t.text == t.node && (t.node = r.pre),
          t.text.parentNode.replaceChild(r.pre, t.text),
          (t.text = r.pre),
          r.bgClass != t.bgClass || r.textClass != t.textClass
            ? ((t.bgClass = r.bgClass), (t.textClass = r.textClass), pn(e, t))
            : n && (t.text.className = n);
      }
      function pn(e, t) {
        !(function (e, t) {
          var n = t.bgClass
            ? t.bgClass + " " + (t.line.bgClass || "")
            : t.line.bgClass;
          if ((n && (n += " CodeMirror-linebackground"), t.background))
            n
              ? (t.background.className = n)
              : (t.background.parentNode.removeChild(t.background),
                (t.background = null));
          else if (n) {
            var r = dn(t);
            (t.background = r.insertBefore(E("div", null, n), r.firstChild)),
              e.display.input.setUneditable(t.background);
          }
        })(e, t),
          t.line.wrapClass
            ? (dn(t).className = t.line.wrapClass)
            : t.node != t.text && (t.node.className = "");
        var n = t.textClass
          ? t.textClass + " " + (t.line.textClass || "")
          : t.line.textClass;
        t.text.className = n || "";
      }
      function mn(e, t, n, r) {
        if (
          (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
          t.gutterBackground &&
            (t.node.removeChild(t.gutterBackground),
            (t.gutterBackground = null)),
          t.line.gutterClass)
        ) {
          var i = dn(t);
          (t.gutterBackground = E(
            "div",
            null,
            "CodeMirror-gutter-background " + t.line.gutterClass,
            "left: " +
              (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
              "px; width: " +
              r.gutterTotalWidth +
              "px"
          )),
            e.display.input.setUneditable(t.gutterBackground),
            i.insertBefore(t.gutterBackground, t.text);
        }
        var o = t.line.gutterMarkers;
        if (e.options.lineNumbers || o) {
          var a = dn(t),
            s = (t.gutter = E(
              "div",
              null,
              "CodeMirror-gutter-wrapper",
              "left: " +
                (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
                "px"
            ));
          if (
            (s.setAttribute("aria-hidden", "true"),
            e.display.input.setUneditable(s),
            a.insertBefore(s, t.text),
            t.line.gutterClass && (s.className += " " + t.line.gutterClass),
            !e.options.lineNumbers ||
              (o && o["CodeMirror-linenumbers"]) ||
              (t.lineNumber = s.appendChild(
                E(
                  "div",
                  Qe(e.options, n),
                  "CodeMirror-linenumber CodeMirror-gutter-elt",
                  "left: " +
                    r.gutterLeft["CodeMirror-linenumbers"] +
                    "px; width: " +
                    e.display.lineNumInnerWidth +
                    "px"
                )
              )),
            o)
          )
            for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
              var c = e.display.gutterSpecs[l].className,
                u = o.hasOwnProperty(c) && o[c];
              u &&
                s.appendChild(
                  E(
                    "div",
                    [u],
                    "CodeMirror-gutter-elt",
                    "left: " +
                      r.gutterLeft[c] +
                      "px; width: " +
                      r.gutterWidth[c] +
                      "px"
                  )
                );
            }
        }
      }
      function gn(e, t, n) {
        t.alignable && (t.alignable = null);
        for (
          var r = C("CodeMirror-linewidget"), i = t.node.firstChild, o = void 0;
          i;
          i = o
        )
          (o = i.nextSibling), r.test(i.className) && t.node.removeChild(i);
        yn(e, t, n);
      }
      function vn(e, t, n, r) {
        var i = fn(e, t);
        return (
          (t.text = t.node = i.pre),
          i.bgClass && (t.bgClass = i.bgClass),
          i.textClass && (t.textClass = i.textClass),
          pn(e, t),
          mn(e, t, n, r),
          yn(e, t, r),
          t.node
        );
      }
      function yn(e, t, n) {
        if ((bn(e, t.line, t, n, !0), t.rest))
          for (var r = 0; r < t.rest.length; r++) bn(e, t.rest[r], t, n, !1);
      }
      function bn(e, t, n, r, i) {
        if (t.widgets)
          for (var o = dn(n), a = 0, s = t.widgets; a < s.length; ++a) {
            var l = s[a],
              c = E(
                "div",
                [l.node],
                "CodeMirror-linewidget" + (l.className ? " " + l.className : "")
              );
            l.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"),
              wn(l, c, n, r),
              e.display.input.setUneditable(c),
              i && l.above
                ? o.insertBefore(c, n.gutter || n.text)
                : o.appendChild(c),
              ln(l, "redraw");
          }
      }
      function wn(e, t, n, r) {
        if (e.noHScroll) {
          (n.alignable || (n.alignable = [])).push(t);
          var i = r.wrapperWidth;
          (t.style.left = r.fixedPos + "px"),
            e.coverGutter ||
              ((i -= r.gutterTotalWidth),
              (t.style.paddingLeft = r.gutterTotalWidth + "px")),
            (t.style.width = i + "px");
        }
        e.coverGutter &&
          ((t.style.zIndex = 5),
          (t.style.position = "relative"),
          e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
      }
      function xn(e) {
        if (null != e.height) return e.height;
        var t = e.doc.cm;
        if (!t) return 0;
        if (!N(document.body, e.node)) {
          var n = "position: relative;";
          e.coverGutter &&
            (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
            e.noHScroll &&
              (n += "width: " + t.display.wrapper.clientWidth + "px;"),
            O(t.display.measure, E("div", [e.node], null, n));
        }
        return (e.height = e.node.parentNode.offsetHeight);
      }
      function kn(e, t) {
        for (var n = Se(t); n != e.wrapper; n = n.parentNode)
          if (
            !n ||
            (1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events")) ||
            (n.parentNode == e.sizer && n != e.mover)
          )
            return !0;
      }
      function Sn(e) {
        return e.lineSpace.offsetTop;
      }
      function Cn(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight;
      }
      function Ln(e) {
        if (e.cachedPaddingH) return e.cachedPaddingH;
        var t = O(e.measure, E("pre", "x", "CodeMirror-line-like")),
          n = window.getComputedStyle
            ? window.getComputedStyle(t)
            : t.currentStyle,
          r = {
            left: parseInt(n.paddingLeft),
            right: parseInt(n.paddingRight),
          };
        return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r;
      }
      function Tn(e) {
        return 50 - e.display.nativeBarWidth;
      }
      function Mn(e) {
        return e.display.scroller.clientWidth - Tn(e) - e.display.barWidth;
      }
      function On(e) {
        return e.display.scroller.clientHeight - Tn(e) - e.display.barHeight;
      }
      function En(e, t, n) {
        if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
        for (var r = 0; r < e.rest.length; r++)
          if (e.rest[r] == t)
            return { map: e.measure.maps[r], cache: e.measure.caches[r] };
        for (var i = 0; i < e.rest.length; i++)
          if (Je(e.rest[i]) > n)
            return {
              map: e.measure.maps[i],
              cache: e.measure.caches[i],
              before: !0,
            };
      }
      function An(e, t, n, r) {
        return Pn(e, _n(e, t), n, r);
      }
      function Nn(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)
          return e.display.view[ur(e, t)];
        var n = e.display.externalMeasured;
        return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
      }
      function _n(e, t) {
        var n = Je(t),
          r = Nn(e, n);
        r && !r.text
          ? (r = null)
          : r && r.changes && (un(e, r, n, or(e)), (e.curOp.forceUpdate = !0)),
          r ||
            (r = (function (e, t) {
              var n = Je((t = zt(t))),
                r = (e.display.externalMeasured = new rn(e.doc, t, n));
              r.lineN = n;
              var i = (r.built = Xt(e, r));
              return (r.text = i.pre), O(e.display.lineMeasure, i.pre), r;
            })(e, t));
        var i = En(r, t, n);
        return {
          line: t,
          view: r,
          rect: null,
          map: i.map,
          cache: i.cache,
          before: i.before,
          hasHeights: !1,
        };
      }
      function Pn(e, t, n, r, i) {
        t.before && (n = -1);
        var o,
          l = n + (r || "");
        return (
          t.cache.hasOwnProperty(l)
            ? (o = t.cache[l])
            : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
              t.hasHeights ||
                ((function (e, t, n) {
                  var r = e.options.lineWrapping,
                    i = r && Mn(e);
                  if (!t.measure.heights || (r && t.measure.width != i)) {
                    var o = (t.measure.heights = []);
                    if (r) {
                      t.measure.width = i;
                      for (
                        var a = t.text.firstChild.getClientRects(), s = 0;
                        s < a.length - 1;
                        s++
                      ) {
                        var l = a[s],
                          c = a[s + 1];
                        Math.abs(l.bottom - c.bottom) > 2 &&
                          o.push((l.bottom + c.top) / 2 - n.top);
                      }
                    }
                    o.push(n.bottom - n.top);
                  }
                })(e, t.view, t.rect),
                (t.hasHeights = !0)),
              (o = (function (e, t, n, r) {
                var i,
                  o = Hn(t.map, n, r),
                  l = o.node,
                  c = o.start,
                  u = o.end,
                  d = o.collapse;
                if (3 == l.nodeType) {
                  for (var f = 0; f < 4; f++) {
                    for (; c && re(t.line.text.charAt(o.coverStart + c)); ) --c;
                    for (
                      ;
                      o.coverStart + u < o.coverEnd &&
                      re(t.line.text.charAt(o.coverStart + u));

                    )
                      ++u;
                    if (
                      (i =
                        a && s < 9 && 0 == c && u == o.coverEnd - o.coverStart
                          ? l.parentNode.getBoundingClientRect()
                          : Dn(L(l, c, u).getClientRects(), r)).left ||
                      i.right ||
                      0 == c
                    )
                      break;
                    (u = c), (c -= 1), (d = "right");
                  }
                  a &&
                    s < 11 &&
                    (i = (function (e, t) {
                      if (
                        !window.screen ||
                        null == screen.logicalXDPI ||
                        screen.logicalXDPI == screen.deviceXDPI ||
                        !(function (e) {
                          if (null != Re) return Re;
                          var t = O(e, E("span", "x")),
                            n = t.getBoundingClientRect(),
                            r = L(t, 0, 1).getBoundingClientRect();
                          return (Re = Math.abs(n.left - r.left) > 1);
                        })(e)
                      )
                        return t;
                      var n = screen.logicalXDPI / screen.deviceXDPI,
                        r = screen.logicalYDPI / screen.deviceYDPI;
                      return {
                        left: t.left * n,
                        right: t.right * n,
                        top: t.top * r,
                        bottom: t.bottom * r,
                      };
                    })(e.display.measure, i));
                } else {
                  var h;
                  c > 0 && (d = r = "right"),
                    (i =
                      e.options.lineWrapping &&
                      (h = l.getClientRects()).length > 1
                        ? h["right" == r ? h.length - 1 : 0]
                        : l.getBoundingClientRect());
                }
                if (a && s < 9 && !c && (!i || (!i.left && !i.right))) {
                  var p = l.parentNode.getClientRects()[0];
                  i = p
                    ? {
                        left: p.left,
                        right: p.left + ir(e.display),
                        top: p.top,
                        bottom: p.bottom,
                      }
                    : jn;
                }
                for (
                  var m = i.top - t.rect.top,
                    g = i.bottom - t.rect.top,
                    v = (m + g) / 2,
                    y = t.view.measure.heights,
                    b = 0;
                  b < y.length - 1 && !(v < y[b]);
                  b++
                );
                var w = b ? y[b - 1] : 0,
                  x = y[b],
                  k = {
                    left: ("right" == d ? i.right : i.left) - t.rect.left,
                    right: ("left" == d ? i.left : i.right) - t.rect.left,
                    top: w,
                    bottom: x,
                  };
                return (
                  i.left || i.right || (k.bogus = !0),
                  e.options.singleCursorHeightPerLine ||
                    ((k.rtop = m), (k.rbottom = g)),
                  k
                );
              })(e, t, n, r)).bogus || (t.cache[l] = o)),
          {
            left: o.left,
            right: o.right,
            top: i ? o.rtop : o.top,
            bottom: i ? o.rbottom : o.bottom,
          }
        );
      }
      var Rn,
        jn = { left: 0, right: 0, top: 0, bottom: 0 };
      function Hn(e, t, n) {
        for (var r, i, o, a, s, l, c = 0; c < e.length; c += 3)
          if (
            ((s = e[c]),
            (l = e[c + 1]),
            t < s
              ? ((i = 0), (o = 1), (a = "left"))
              : t < l
              ? (o = 1 + (i = t - s))
              : (c == e.length - 3 || (t == l && e[c + 3] > t)) &&
                ((i = (o = l - s) - 1), t >= l && (a = "right")),
            null != i)
          ) {
            if (
              ((r = e[c + 2]),
              s == l && n == (r.insertLeft ? "left" : "right") && (a = n),
              "left" == n && 0 == i)
            )
              for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft; )
                (r = e[2 + (c -= 3)]), (a = "left");
            if ("right" == n && i == l - s)
              for (
                ;
                c < e.length - 3 &&
                e[c + 3] == e[c + 4] &&
                !e[c + 5].insertLeft;

              )
                (r = e[(c += 3) + 2]), (a = "right");
            break;
          }
        return {
          node: r,
          start: i,
          end: o,
          collapse: a,
          coverStart: s,
          coverEnd: l,
        };
      }
      function Dn(e, t) {
        var n = jn;
        if ("left" == t)
          for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
        else
          for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--);
        return n;
      }
      function zn(e) {
        if (
          e.measure &&
          ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
        )
          for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
      }
      function Bn(e) {
        (e.display.externalMeasure = null), M(e.display.lineMeasure);
        for (var t = 0; t < e.display.view.length; t++) zn(e.display.view[t]);
      }
      function In(e) {
        Bn(e),
          (e.display.cachedCharWidth =
            e.display.cachedTextHeight =
            e.display.cachedPaddingH =
              null),
          e.options.lineWrapping || (e.display.maxLineChanged = !0),
          (e.display.lineNumChars = null);
      }
      function qn() {
        return u && g
          ? -(
              document.body.getBoundingClientRect().left -
              parseInt(getComputedStyle(document.body).marginLeft)
            )
          : window.pageXOffset ||
              (document.documentElement || document.body).scrollLeft;
      }
      function Wn() {
        return u && g
          ? -(
              document.body.getBoundingClientRect().top -
              parseInt(getComputedStyle(document.body).marginTop)
            )
          : window.pageYOffset ||
              (document.documentElement || document.body).scrollTop;
      }
      function Fn(e) {
        var t = 0;
        if (e.widgets)
          for (var n = 0; n < e.widgets.length; ++n)
            e.widgets[n].above && (t += xn(e.widgets[n]));
        return t;
      }
      function $n(e, t, n, r, i) {
        if (!i) {
          var o = Fn(t);
          (n.top += o), (n.bottom += o);
        }
        if ("line" == r) return n;
        r || (r = "local");
        var a = Ft(t);
        if (
          ("local" == r ? (a += Sn(e.display)) : (a -= e.display.viewOffset),
          "page" == r || "window" == r)
        ) {
          var s = e.display.lineSpace.getBoundingClientRect();
          a += s.top + ("window" == r ? 0 : Wn());
          var l = s.left + ("window" == r ? 0 : qn());
          (n.left += l), (n.right += l);
        }
        return (n.top += a), (n.bottom += a), n;
      }
      function Un(e, t, n) {
        if ("div" == n) return t;
        var r = t.left,
          i = t.top;
        if ("page" == n) (r -= qn()), (i -= Wn());
        else if ("local" == n || !n) {
          var o = e.display.sizer.getBoundingClientRect();
          (r += o.left), (i += o.top);
        }
        var a = e.display.lineSpace.getBoundingClientRect();
        return { left: r - a.left, top: i - a.top };
      }
      function Gn(e, t, n, r, i) {
        return r || (r = Ge(e.doc, t.line)), $n(e, r, An(e, r, t.ch, i), n);
      }
      function Vn(e, t, n, r, i, o) {
        function a(t, a) {
          var s = Pn(e, i, t, a ? "right" : "left", o);
          return a ? (s.left = s.right) : (s.right = s.left), $n(e, r, s, n);
        }
        (r = r || Ge(e.doc, t.line)), i || (i = _n(e, r));
        var s = ce(r, e.doc.direction),
          l = t.ch,
          c = t.sticky;
        if (
          (l >= r.text.length
            ? ((l = r.text.length), (c = "before"))
            : l <= 0 && ((l = 0), (c = "after")),
          !s)
        )
          return a("before" == c ? l - 1 : l, "before" == c);
        function u(e, t, n) {
          return a(n ? e - 1 : e, (1 == s[t].level) != n);
        }
        var d = se(s, l, c),
          f = ae,
          h = u(l, d, "before" == c);
        return null != f && (h.other = u(l, f, "before" != c)), h;
      }
      function Kn(e, t) {
        var n = 0;
        (t = st(e.doc, t)),
          e.options.lineWrapping || (n = ir(e.display) * t.ch);
        var r = Ge(e.doc, t.line),
          i = Ft(r) + Sn(e.display);
        return { left: n, right: n, top: i, bottom: i + r.height };
      }
      function Yn(e, t, n, r, i) {
        var o = et(e, t, n);
        return (o.xRel = i), r && (o.outside = r), o;
      }
      function Jn(e, t, n) {
        var r = e.doc;
        if ((n += e.display.viewOffset) < 0)
          return Yn(r.first, 0, null, -1, -1);
        var i = Xe(r, n),
          o = r.first + r.size - 1;
        if (i > o)
          return Yn(r.first + r.size - 1, Ge(r, o).text.length, null, 1, 1);
        t < 0 && (t = 0);
        for (var a = Ge(r, i); ; ) {
          var s = er(e, a, i, t, n),
            l = Ht(a, s.ch + (s.xRel > 0 || s.outside > 0 ? 1 : 0));
          if (!l) return s;
          var c = l.find(1);
          if (c.line == i) return c;
          a = Ge(r, (i = c.line));
        }
      }
      function Xn(e, t, n, r) {
        r -= Fn(t);
        var i = t.text.length,
          o = oe(
            function (t) {
              return Pn(e, n, t - 1).bottom <= r;
            },
            i,
            0
          );
        return {
          begin: o,
          end: (i = oe(
            function (t) {
              return Pn(e, n, t).top > r;
            },
            o,
            i
          )),
        };
      }
      function Zn(e, t, n, r) {
        return (
          n || (n = _n(e, t)), Xn(e, t, n, $n(e, t, Pn(e, n, r), "line").top)
        );
      }
      function Qn(e, t, n, r) {
        return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t);
      }
      function er(e, t, n, r, i) {
        i -= Ft(t);
        var o = _n(e, t),
          a = Fn(t),
          s = 0,
          l = t.text.length,
          c = !0,
          u = ce(t, e.doc.direction);
        if (u) {
          var d = (e.options.lineWrapping ? nr : tr)(e, t, n, o, u, r, i);
          (s = (c = 1 != d.level) ? d.from : d.to - 1),
            (l = c ? d.to : d.from - 1);
        }
        var f,
          h,
          p = null,
          m = null,
          g = oe(
            function (t) {
              var n = Pn(e, o, t);
              return (
                (n.top += a),
                (n.bottom += a),
                !!Qn(n, r, i, !1) &&
                  (n.top <= i && n.left <= r && ((p = t), (m = n)), !0)
              );
            },
            s,
            l
          ),
          v = !1;
        if (m) {
          var y = r - m.left < m.right - r,
            b = y == c;
          (g = p + (b ? 0 : 1)),
            (h = b ? "after" : "before"),
            (f = y ? m.left : m.right);
        } else {
          c || (g != l && g != s) || g++,
            (h =
              0 == g
                ? "after"
                : g == t.text.length
                ? "before"
                : Pn(e, o, g - (c ? 1 : 0)).bottom + a <= i == c
                ? "after"
                : "before");
          var w = Vn(e, et(n, g, h), "line", t, o);
          (f = w.left), (v = i < w.top ? -1 : i >= w.bottom ? 1 : 0);
        }
        return Yn(n, (g = ie(t.text, g, 1)), h, v, r - f);
      }
      function tr(e, t, n, r, i, o, a) {
        var s = oe(
            function (s) {
              var l = i[s],
                c = 1 != l.level;
              return Qn(
                Vn(
                  e,
                  et(n, c ? l.to : l.from, c ? "before" : "after"),
                  "line",
                  t,
                  r
                ),
                o,
                a,
                !0
              );
            },
            0,
            i.length - 1
          ),
          l = i[s];
        if (s > 0) {
          var c = 1 != l.level,
            u = Vn(
              e,
              et(n, c ? l.from : l.to, c ? "after" : "before"),
              "line",
              t,
              r
            );
          Qn(u, o, a, !0) && u.top > a && (l = i[s - 1]);
        }
        return l;
      }
      function nr(e, t, n, r, i, o, a) {
        var s = Xn(e, t, r, a),
          l = s.begin,
          c = s.end;
        /\s/.test(t.text.charAt(c - 1)) && c--;
        for (var u = null, d = null, f = 0; f < i.length; f++) {
          var h = i[f];
          if (!(h.from >= c || h.to <= l)) {
            var p = Pn(
                e,
                r,
                1 != h.level ? Math.min(c, h.to) - 1 : Math.max(l, h.from)
              ).right,
              m = p < o ? o - p + 1e9 : p - o;
            (!u || d > m) && ((u = h), (d = m));
          }
        }
        return (
          u || (u = i[i.length - 1]),
          u.from < l && (u = { from: l, to: u.to, level: u.level }),
          u.to > c && (u = { from: u.from, to: c, level: u.level }),
          u
        );
      }
      function rr(e) {
        if (null != e.cachedTextHeight) return e.cachedTextHeight;
        if (null == Rn) {
          Rn = E("pre", null, "CodeMirror-line-like");
          for (var t = 0; t < 49; ++t)
            Rn.appendChild(document.createTextNode("x")),
              Rn.appendChild(E("br"));
          Rn.appendChild(document.createTextNode("x"));
        }
        O(e.measure, Rn);
        var n = Rn.offsetHeight / 50;
        return n > 3 && (e.cachedTextHeight = n), M(e.measure), n || 1;
      }
      function ir(e) {
        if (null != e.cachedCharWidth) return e.cachedCharWidth;
        var t = E("span", "xxxxxxxxxx"),
          n = E("pre", [t], "CodeMirror-line-like");
        O(e.measure, n);
        var r = t.getBoundingClientRect(),
          i = (r.right - r.left) / 10;
        return i > 2 && (e.cachedCharWidth = i), i || 10;
      }
      function or(e) {
        for (
          var t = e.display,
            n = {},
            r = {},
            i = t.gutters.clientLeft,
            o = t.gutters.firstChild,
            a = 0;
          o;
          o = o.nextSibling, ++a
        ) {
          var s = e.display.gutterSpecs[a].className;
          (n[s] = o.offsetLeft + o.clientLeft + i), (r[s] = o.clientWidth);
        }
        return {
          fixedPos: ar(t),
          gutterTotalWidth: t.gutters.offsetWidth,
          gutterLeft: n,
          gutterWidth: r,
          wrapperWidth: t.wrapper.clientWidth,
        };
      }
      function ar(e) {
        return (
          e.scroller.getBoundingClientRect().left -
          e.sizer.getBoundingClientRect().left
        );
      }
      function sr(e) {
        var t = rr(e.display),
          n = e.options.lineWrapping,
          r =
            n &&
            Math.max(5, e.display.scroller.clientWidth / ir(e.display) - 3);
        return function (i) {
          if (qt(e.doc, i)) return 0;
          var o = 0;
          if (i.widgets)
            for (var a = 0; a < i.widgets.length; a++)
              i.widgets[a].height && (o += i.widgets[a].height);
          return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
        };
      }
      function lr(e) {
        var t = e.doc,
          n = sr(e);
        t.iter(function (e) {
          var t = n(e);
          t != e.height && Ye(e, t);
        });
      }
      function cr(e, t, n, r) {
        var i = e.display;
        if (!n && "true" == Se(t).getAttribute("cm-not-content")) return null;
        var o,
          a,
          s = i.lineSpace.getBoundingClientRect();
        try {
          (o = t.clientX - s.left), (a = t.clientY - s.top);
        } catch (e) {
          return null;
        }
        var l,
          c = Jn(e, o, a);
        if (r && c.xRel > 0 && (l = Ge(e.doc, c.line).text).length == c.ch) {
          var u = z(l, l.length, e.options.tabSize) - l.length;
          c = et(
            c.line,
            Math.max(
              0,
              Math.round((o - Ln(e.display).left) / ir(e.display)) - u
            )
          );
        }
        return c;
      }
      function ur(e, t) {
        if (t >= e.display.viewTo) return null;
        if ((t -= e.display.viewFrom) < 0) return null;
        for (var n = e.display.view, r = 0; r < n.length; r++)
          if ((t -= n[r].size) < 0) return r;
      }
      function dr(e, t, n, r) {
        null == t && (t = e.doc.first),
          null == n && (n = e.doc.first + e.doc.size),
          r || (r = 0);
        var i = e.display;
        if (
          (r &&
            n < i.viewTo &&
            (null == i.updateLineNumbers || i.updateLineNumbers > t) &&
            (i.updateLineNumbers = t),
          (e.curOp.viewChanged = !0),
          t >= i.viewTo)
        )
          kt && Bt(e.doc, t) < i.viewTo && hr(e);
        else if (n <= i.viewFrom)
          kt && It(e.doc, n + r) > i.viewFrom
            ? hr(e)
            : ((i.viewFrom += r), (i.viewTo += r));
        else if (t <= i.viewFrom && n >= i.viewTo) hr(e);
        else if (t <= i.viewFrom) {
          var o = pr(e, n, n + r, 1);
          o
            ? ((i.view = i.view.slice(o.index)),
              (i.viewFrom = o.lineN),
              (i.viewTo += r))
            : hr(e);
        } else if (n >= i.viewTo) {
          var a = pr(e, t, t, -1);
          a
            ? ((i.view = i.view.slice(0, a.index)), (i.viewTo = a.lineN))
            : hr(e);
        } else {
          var s = pr(e, t, t, -1),
            l = pr(e, n, n + r, 1);
          s && l
            ? ((i.view = i.view
                .slice(0, s.index)
                .concat(on(e, s.lineN, l.lineN))
                .concat(i.view.slice(l.index))),
              (i.viewTo += r))
            : hr(e);
        }
        var c = i.externalMeasured;
        c &&
          (n < c.lineN
            ? (c.lineN += r)
            : t < c.lineN + c.size && (i.externalMeasured = null));
      }
      function fr(e, t, n) {
        e.curOp.viewChanged = !0;
        var r = e.display,
          i = e.display.externalMeasured;
        if (
          (i &&
            t >= i.lineN &&
            t < i.lineN + i.size &&
            (r.externalMeasured = null),
          !(t < r.viewFrom || t >= r.viewTo))
        ) {
          var o = r.view[ur(e, t)];
          if (null != o.node) {
            var a = o.changes || (o.changes = []);
            -1 == I(a, n) && a.push(n);
          }
        }
      }
      function hr(e) {
        (e.display.viewFrom = e.display.viewTo = e.doc.first),
          (e.display.view = []),
          (e.display.viewOffset = 0);
      }
      function pr(e, t, n, r) {
        var i,
          o = ur(e, t),
          a = e.display.view;
        if (!kt || n == e.doc.first + e.doc.size) return { index: o, lineN: n };
        for (var s = e.display.viewFrom, l = 0; l < o; l++) s += a[l].size;
        if (s != t) {
          if (r > 0) {
            if (o == a.length - 1) return null;
            (i = s + a[o].size - t), o++;
          } else i = s - t;
          (t += i), (n += i);
        }
        for (; Bt(e.doc, n) != n; ) {
          if (o == (r < 0 ? 0 : a.length - 1)) return null;
          (n += r * a[o - (r < 0 ? 1 : 0)].size), (o += r);
        }
        return { index: o, lineN: n };
      }
      function mr(e) {
        for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
          var i = t[r];
          i.hidden || (i.node && !i.changes) || ++n;
        }
        return n;
      }
      function gr(e) {
        e.display.input.showSelection(e.display.input.prepareSelection());
      }
      function vr(e, t) {
        void 0 === t && (t = !0);
        for (
          var n = e.doc,
            r = {},
            i = (r.cursors = document.createDocumentFragment()),
            o = (r.selection = document.createDocumentFragment()),
            a = 0;
          a < n.sel.ranges.length;
          a++
        )
          if (t || a != n.sel.primIndex) {
            var s = n.sel.ranges[a];
            if (
              !(
                s.from().line >= e.display.viewTo ||
                s.to().line < e.display.viewFrom
              )
            ) {
              var l = s.empty();
              (l || e.options.showCursorWhenSelecting) && yr(e, s.head, i),
                l || wr(e, s, o);
            }
          }
        return r;
      }
      function yr(e, t, n) {
        var r = Vn(
            e,
            t,
            "div",
            null,
            null,
            !e.options.singleCursorHeightPerLine
          ),
          i = n.appendChild(E("div", " ", "CodeMirror-cursor"));
        if (
          ((i.style.left = r.left + "px"),
          (i.style.top = r.top + "px"),
          (i.style.height =
            Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px"),
          r.other)
        ) {
          var o = n.appendChild(
            E("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor")
          );
          (o.style.display = ""),
            (o.style.left = r.other.left + "px"),
            (o.style.top = r.other.top + "px"),
            (o.style.height = 0.85 * (r.other.bottom - r.other.top) + "px");
        }
      }
      function br(e, t) {
        return e.top - t.top || e.left - t.left;
      }
      function wr(e, t, n) {
        var r = e.display,
          i = e.doc,
          o = document.createDocumentFragment(),
          a = Ln(e.display),
          s = a.left,
          l = Math.max(r.sizerWidth, Mn(e) - r.sizer.offsetLeft) - a.right,
          c = "ltr" == i.direction;
        function u(e, t, n, r) {
          t < 0 && (t = 0),
            (t = Math.round(t)),
            (r = Math.round(r)),
            o.appendChild(
              E(
                "div",
                null,
                "CodeMirror-selected",
                "position: absolute; left: " +
                  e +
                  "px;\n                             top: " +
                  t +
                  "px; width: " +
                  (null == n ? l - e : n) +
                  "px;\n                             height: " +
                  (r - t) +
                  "px"
              )
            );
        }
        function d(t, n, r) {
          var o,
            a,
            d = Ge(i, t),
            f = d.text.length;
          function h(n, r) {
            return Gn(e, et(t, n), "div", d, r);
          }
          function p(t, n, r) {
            var i = Zn(e, d, null, t),
              o = ("ltr" == n) == ("after" == r) ? "left" : "right";
            return h(
              "after" == r
                ? i.begin
                : i.end - (/\s/.test(d.text.charAt(i.end - 1)) ? 2 : 1),
              o
            )[o];
          }
          var m = ce(d, i.direction);
          return (
            (function (e, t, n, r) {
              if (!e) return r(t, n, "ltr", 0);
              for (var i = !1, o = 0; o < e.length; ++o) {
                var a = e[o];
                ((a.from < n && a.to > t) || (t == n && a.to == t)) &&
                  (r(
                    Math.max(a.from, t),
                    Math.min(a.to, n),
                    1 == a.level ? "rtl" : "ltr",
                    o
                  ),
                  (i = !0));
              }
              i || r(t, n, "ltr");
            })(m, n || 0, null == r ? f : r, function (e, t, i, d) {
              var g = "ltr" == i,
                v = h(e, g ? "left" : "right"),
                y = h(t - 1, g ? "right" : "left"),
                b = null == n && 0 == e,
                w = null == r && t == f,
                x = 0 == d,
                k = !m || d == m.length - 1;
              if (y.top - v.top <= 3) {
                var S = (c ? w : b) && k,
                  C = (c ? b : w) && x ? s : (g ? v : y).left,
                  L = S ? l : (g ? y : v).right;
                u(C, v.top, L - C, v.bottom);
              } else {
                var T, M, O, E;
                g
                  ? ((T = c && b && x ? s : v.left),
                    (M = c ? l : p(e, i, "before")),
                    (O = c ? s : p(t, i, "after")),
                    (E = c && w && k ? l : y.right))
                  : ((T = c ? p(e, i, "before") : s),
                    (M = !c && b && x ? l : v.right),
                    (O = !c && w && k ? s : y.left),
                    (E = c ? p(t, i, "after") : l)),
                  u(T, v.top, M - T, v.bottom),
                  v.bottom < y.top && u(s, v.bottom, null, y.top),
                  u(O, y.top, E - O, y.bottom);
              }
              (!o || br(v, o) < 0) && (o = v),
                br(y, o) < 0 && (o = y),
                (!a || br(v, a) < 0) && (a = v),
                br(y, a) < 0 && (a = y);
            }),
            { start: o, end: a }
          );
        }
        var f = t.from(),
          h = t.to();
        if (f.line == h.line) d(f.line, f.ch, h.ch);
        else {
          var p = Ge(i, f.line),
            m = Ge(i, h.line),
            g = zt(p) == zt(m),
            v = d(f.line, f.ch, g ? p.text.length + 1 : null).end,
            y = d(h.line, g ? 0 : null, h.ch).start;
          g &&
            (v.top < y.top - 2
              ? (u(v.right, v.top, null, v.bottom),
                u(s, y.top, y.left, y.bottom))
              : u(v.right, v.top, y.left - v.right, v.bottom)),
            v.bottom < y.top && u(s, v.bottom, null, y.top);
        }
        n.appendChild(o);
      }
      function xr(e) {
        if (e.state.focused) {
          var t = e.display;
          clearInterval(t.blinker);
          var n = !0;
          (t.cursorDiv.style.visibility = ""),
            e.options.cursorBlinkRate > 0
              ? (t.blinker = setInterval(function () {
                  e.hasFocus() || Lr(e),
                    (t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden");
                }, e.options.cursorBlinkRate))
              : e.options.cursorBlinkRate < 0 &&
                (t.cursorDiv.style.visibility = "hidden");
        }
      }
      function kr(e) {
        e.hasFocus() || (e.display.input.focus(), e.state.focused || Cr(e));
      }
      function Sr(e) {
        (e.state.delayingBlurEvent = !0),
          setTimeout(function () {
            e.state.delayingBlurEvent &&
              ((e.state.delayingBlurEvent = !1), e.state.focused && Lr(e));
          }, 100);
      }
      function Cr(e, t) {
        e.state.delayingBlurEvent &&
          !e.state.draggingText &&
          (e.state.delayingBlurEvent = !1),
          "nocursor" != e.options.readOnly &&
            (e.state.focused ||
              (pe(e, "focus", e, t),
              (e.state.focused = !0),
              P(e.display.wrapper, "CodeMirror-focused"),
              e.curOp ||
                e.display.selForContextMenu == e.doc.sel ||
                (e.display.input.reset(),
                l &&
                  setTimeout(function () {
                    return e.display.input.reset(!0);
                  }, 20)),
              e.display.input.receivedFocus()),
            xr(e));
      }
      function Lr(e, t) {
        e.state.delayingBlurEvent ||
          (e.state.focused &&
            (pe(e, "blur", e, t),
            (e.state.focused = !1),
            T(e.display.wrapper, "CodeMirror-focused")),
          clearInterval(e.display.blinker),
          setTimeout(function () {
            e.state.focused || (e.display.shift = !1);
          }, 150));
      }
      function Tr(e) {
        for (
          var t = e.display, n = t.lineDiv.offsetTop, r = 0;
          r < t.view.length;
          r++
        ) {
          var i = t.view[r],
            o = e.options.lineWrapping,
            l = void 0,
            c = 0;
          if (!i.hidden) {
            if (a && s < 8) {
              var u = i.node.offsetTop + i.node.offsetHeight;
              (l = u - n), (n = u);
            } else {
              var d = i.node.getBoundingClientRect();
              (l = d.bottom - d.top),
                !o &&
                  i.text.firstChild &&
                  (c =
                    i.text.firstChild.getBoundingClientRect().right -
                    d.left -
                    1);
            }
            var f = i.line.height - l;
            if (
              (f > 0.005 || f < -0.005) &&
              (Ye(i.line, l), Mr(i.line), i.rest)
            )
              for (var h = 0; h < i.rest.length; h++) Mr(i.rest[h]);
            if (c > e.display.sizerWidth) {
              var p = Math.ceil(c / ir(e.display));
              p > e.display.maxLineLength &&
                ((e.display.maxLineLength = p),
                (e.display.maxLine = i.line),
                (e.display.maxLineChanged = !0));
            }
          }
        }
      }
      function Mr(e) {
        if (e.widgets)
          for (var t = 0; t < e.widgets.length; ++t) {
            var n = e.widgets[t],
              r = n.node.parentNode;
            r && (n.height = r.offsetHeight);
          }
      }
      function Or(e, t, n) {
        var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
        r = Math.floor(r - Sn(e));
        var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
          o = Xe(t, r),
          a = Xe(t, i);
        if (n && n.ensure) {
          var s = n.ensure.from.line,
            l = n.ensure.to.line;
          s < o
            ? ((o = s), (a = Xe(t, Ft(Ge(t, s)) + e.wrapper.clientHeight)))
            : Math.min(l, t.lastLine()) >= a &&
              ((o = Xe(t, Ft(Ge(t, l)) - e.wrapper.clientHeight)), (a = l));
        }
        return { from: o, to: Math.max(a, o + 1) };
      }
      function Er(e, t) {
        var n = e.display,
          r = rr(e.display);
        t.top < 0 && (t.top = 0);
        var i =
            e.curOp && null != e.curOp.scrollTop
              ? e.curOp.scrollTop
              : n.scroller.scrollTop,
          o = On(e),
          a = {};
        t.bottom - t.top > o && (t.bottom = t.top + o);
        var s = e.doc.height + Cn(n),
          l = t.top < r,
          c = t.bottom > s - r;
        if (t.top < i) a.scrollTop = l ? 0 : t.top;
        else if (t.bottom > i + o) {
          var u = Math.min(t.top, (c ? s : t.bottom) - o);
          u != i && (a.scrollTop = u);
        }
        var d = e.options.fixedGutter ? 0 : n.gutters.offsetWidth,
          f =
            e.curOp && null != e.curOp.scrollLeft
              ? e.curOp.scrollLeft
              : n.scroller.scrollLeft - d,
          h = Mn(e) - n.gutters.offsetWidth,
          p = t.right - t.left > h;
        return (
          p && (t.right = t.left + h),
          t.left < 10
            ? (a.scrollLeft = 0)
            : t.left < f
            ? (a.scrollLeft = Math.max(0, t.left + d - (p ? 0 : 10)))
            : t.right > h + f - 3 &&
              (a.scrollLeft = t.right + (p ? 0 : 10) - h),
          a
        );
      }
      function Ar(e, t) {
        null != t &&
          (Pr(e),
          (e.curOp.scrollTop =
            (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) +
            t));
      }
      function Nr(e) {
        Pr(e);
        var t = e.getCursor();
        e.curOp.scrollToPos = {
          from: t,
          to: t,
          margin: e.options.cursorScrollMargin,
        };
      }
      function _r(e, t, n) {
        (null == t && null == n) || Pr(e),
          null != t && (e.curOp.scrollLeft = t),
          null != n && (e.curOp.scrollTop = n);
      }
      function Pr(e) {
        var t = e.curOp.scrollToPos;
        t &&
          ((e.curOp.scrollToPos = null),
          Rr(e, Kn(e, t.from), Kn(e, t.to), t.margin));
      }
      function Rr(e, t, n, r) {
        var i = Er(e, {
          left: Math.min(t.left, n.left),
          top: Math.min(t.top, n.top) - r,
          right: Math.max(t.right, n.right),
          bottom: Math.max(t.bottom, n.bottom) + r,
        });
        _r(e, i.scrollLeft, i.scrollTop);
      }
      function jr(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 ||
          (n || li(e, { top: t }), Hr(e, t, !0), n && li(e), ri(e, 100));
      }
      function Hr(e, t, n) {
        (t = Math.max(
          0,
          Math.min(
            e.display.scroller.scrollHeight - e.display.scroller.clientHeight,
            t
          )
        )),
          (e.display.scroller.scrollTop != t || n) &&
            ((e.doc.scrollTop = t),
            e.display.scrollbars.setScrollTop(t),
            e.display.scroller.scrollTop != t &&
              (e.display.scroller.scrollTop = t));
      }
      function Dr(e, t, n, r) {
        (t = Math.max(
          0,
          Math.min(
            t,
            e.display.scroller.scrollWidth - e.display.scroller.clientWidth
          )
        )),
          ((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) &&
            !r) ||
            ((e.doc.scrollLeft = t),
            di(e),
            e.display.scroller.scrollLeft != t &&
              (e.display.scroller.scrollLeft = t),
            e.display.scrollbars.setScrollLeft(t));
      }
      function zr(e) {
        var t = e.display,
          n = t.gutters.offsetWidth,
          r = Math.round(e.doc.height + Cn(e.display));
        return {
          clientHeight: t.scroller.clientHeight,
          viewHeight: t.wrapper.clientHeight,
          scrollWidth: t.scroller.scrollWidth,
          clientWidth: t.scroller.clientWidth,
          viewWidth: t.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? n : 0,
          docHeight: r,
          scrollHeight: r + Tn(e) + t.barHeight,
          nativeBarWidth: t.nativeBarWidth,
          gutterWidth: n,
        };
      }
      var Br = function (e, t, n) {
        this.cm = n;
        var r = (this.vert = E(
            "div",
            [E("div", null, null, "min-width: 1px")],
            "CodeMirror-vscrollbar"
          )),
          i = (this.horiz = E(
            "div",
            [E("div", null, null, "height: 100%; min-height: 1px")],
            "CodeMirror-hscrollbar"
          ));
        (r.tabIndex = i.tabIndex = -1),
          e(r),
          e(i),
          de(r, "scroll", function () {
            r.clientHeight && t(r.scrollTop, "vertical");
          }),
          de(i, "scroll", function () {
            i.clientWidth && t(i.scrollLeft, "horizontal");
          }),
          (this.checkedZeroWidth = !1),
          a &&
            s < 8 &&
            (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
      };
      (Br.prototype.update = function (e) {
        var t = e.scrollWidth > e.clientWidth + 1,
          n = e.scrollHeight > e.clientHeight + 1,
          r = e.nativeBarWidth;
        if (n) {
          (this.vert.style.display = "block"),
            (this.vert.style.bottom = t ? r + "px" : "0");
          var i = e.viewHeight - (t ? r : 0);
          this.vert.firstChild.style.height =
            Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
        } else
          (this.vert.style.display = ""),
            (this.vert.firstChild.style.height = "0");
        if (t) {
          (this.horiz.style.display = "block"),
            (this.horiz.style.right = n ? r + "px" : "0"),
            (this.horiz.style.left = e.barLeft + "px");
          var o = e.viewWidth - e.barLeft - (n ? r : 0);
          this.horiz.firstChild.style.width =
            Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
        } else
          (this.horiz.style.display = ""),
            (this.horiz.firstChild.style.width = "0");
        return (
          !this.checkedZeroWidth &&
            e.clientHeight > 0 &&
            (0 == r && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
          { right: n ? r : 0, bottom: t ? r : 0 }
        );
      }),
        (Br.prototype.setScrollLeft = function (e) {
          this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
            this.disableHoriz &&
              this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
        }),
        (Br.prototype.setScrollTop = function (e) {
          this.vert.scrollTop != e && (this.vert.scrollTop = e),
            this.disableVert &&
              this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
        }),
        (Br.prototype.zeroWidthHack = function () {
          var e = y && !h ? "12px" : "18px";
          (this.horiz.style.height = this.vert.style.width = e),
            (this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
              "none"),
            (this.disableHoriz = new B()),
            (this.disableVert = new B());
        }),
        (Br.prototype.enableZeroWidthBar = function (e, t, n) {
          (e.style.pointerEvents = "auto"),
            t.set(1e3, function r() {
              var i = e.getBoundingClientRect();
              ("vert" == n
                ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
                : document.elementFromPoint(
                    (i.right + i.left) / 2,
                    i.bottom - 1
                  )) != e
                ? (e.style.pointerEvents = "none")
                : t.set(1e3, r);
            });
        }),
        (Br.prototype.clear = function () {
          var e = this.horiz.parentNode;
          e.removeChild(this.horiz), e.removeChild(this.vert);
        });
      var Ir = function () {};
      function qr(e, t) {
        t || (t = zr(e));
        var n = e.display.barWidth,
          r = e.display.barHeight;
        Wr(e, t);
        for (
          var i = 0;
          (i < 4 && n != e.display.barWidth) || r != e.display.barHeight;
          i++
        )
          n != e.display.barWidth && e.options.lineWrapping && Tr(e),
            Wr(e, zr(e)),
            (n = e.display.barWidth),
            (r = e.display.barHeight);
      }
      function Wr(e, t) {
        var n = e.display,
          r = n.scrollbars.update(t);
        (n.sizer.style.paddingRight = (n.barWidth = r.right) + "px"),
          (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px"),
          (n.heightForcer.style.borderBottom =
            r.bottom + "px solid transparent"),
          r.right && r.bottom
            ? ((n.scrollbarFiller.style.display = "block"),
              (n.scrollbarFiller.style.height = r.bottom + "px"),
              (n.scrollbarFiller.style.width = r.right + "px"))
            : (n.scrollbarFiller.style.display = ""),
          r.bottom &&
          e.options.coverGutterNextToScrollbar &&
          e.options.fixedGutter
            ? ((n.gutterFiller.style.display = "block"),
              (n.gutterFiller.style.height = r.bottom + "px"),
              (n.gutterFiller.style.width = t.gutterWidth + "px"))
            : (n.gutterFiller.style.display = "");
      }
      (Ir.prototype.update = function () {
        return { bottom: 0, right: 0 };
      }),
        (Ir.prototype.setScrollLeft = function () {}),
        (Ir.prototype.setScrollTop = function () {}),
        (Ir.prototype.clear = function () {});
      var Fr = { native: Br, null: Ir };
      function $r(e) {
        e.display.scrollbars &&
          (e.display.scrollbars.clear(),
          e.display.scrollbars.addClass &&
            T(e.display.wrapper, e.display.scrollbars.addClass)),
          (e.display.scrollbars = new Fr[e.options.scrollbarStyle](
            function (t) {
              e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                de(t, "mousedown", function () {
                  e.state.focused &&
                    setTimeout(function () {
                      return e.display.input.focus();
                    }, 0);
                }),
                t.setAttribute("cm-not-content", "true");
            },
            function (t, n) {
              "horizontal" == n ? Dr(e, t) : jr(e, t);
            },
            e
          )),
          e.display.scrollbars.addClass &&
            P(e.display.wrapper, e.display.scrollbars.addClass);
      }
      var Ur = 0;
      function Gr(e) {
        var t;
        (e.curOp = {
          cm: e,
          viewChanged: !1,
          startHeight: e.doc.height,
          forceUpdate: !1,
          updateInput: 0,
          typing: !1,
          changeObjs: null,
          cursorActivityHandlers: null,
          cursorActivityCalled: 0,
          selectionChanged: !1,
          updateMaxLine: !1,
          scrollLeft: null,
          scrollTop: null,
          scrollToPos: null,
          focus: !1,
          id: ++Ur,
          markArrays: null,
        }),
          (t = e.curOp),
          an
            ? an.ops.push(t)
            : (t.ownsGroup = an = { ops: [t], delayedCallbacks: [] });
      }
      function Vr(e) {
        var t = e.curOp;
        t &&
          (function (e, t) {
            var n = e.ownsGroup;
            if (n)
              try {
                !(function (e) {
                  var t = e.delayedCallbacks,
                    n = 0;
                  do {
                    for (; n < t.length; n++) t[n].call(null);
                    for (var r = 0; r < e.ops.length; r++) {
                      var i = e.ops[r];
                      if (i.cursorActivityHandlers)
                        for (
                          ;
                          i.cursorActivityCalled <
                          i.cursorActivityHandlers.length;

                        )
                          i.cursorActivityHandlers[
                            i.cursorActivityCalled++
                          ].call(null, i.cm);
                    }
                  } while (n < t.length);
                })(n);
              } finally {
                (an = null), t(n);
              }
          })(t, function (e) {
            for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
            !(function (e) {
              for (var t = e.ops, n = 0; n < t.length; n++) Kr(t[n]);
              for (var r = 0; r < t.length; r++) Yr(t[r]);
              for (var i = 0; i < t.length; i++) Jr(t[i]);
              for (var o = 0; o < t.length; o++) Xr(t[o]);
              for (var a = 0; a < t.length; a++) Zr(t[a]);
            })(e);
          });
      }
      function Kr(e) {
        var t = e.cm,
          n = t.display;
        !(function (e) {
          var t = e.display;
          !t.scrollbarsClipped &&
            t.scroller.offsetWidth &&
            ((t.nativeBarWidth =
              t.scroller.offsetWidth - t.scroller.clientWidth),
            (t.heightForcer.style.height = Tn(e) + "px"),
            (t.sizer.style.marginBottom = -t.nativeBarWidth + "px"),
            (t.sizer.style.borderRightWidth = Tn(e) + "px"),
            (t.scrollbarsClipped = !0));
        })(t),
          e.updateMaxLine && Ut(t),
          (e.mustUpdate =
            e.viewChanged ||
            e.forceUpdate ||
            null != e.scrollTop ||
            (e.scrollToPos &&
              (e.scrollToPos.from.line < n.viewFrom ||
                e.scrollToPos.to.line >= n.viewTo)) ||
            (n.maxLineChanged && t.options.lineWrapping)),
          (e.update =
            e.mustUpdate &&
            new oi(
              t,
              e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
              e.forceUpdate
            ));
      }
      function Yr(e) {
        e.updatedDisplay = e.mustUpdate && ai(e.cm, e.update);
      }
      function Jr(e) {
        var t = e.cm,
          n = t.display;
        e.updatedDisplay && Tr(t),
          (e.barMeasure = zr(t)),
          n.maxLineChanged &&
            !t.options.lineWrapping &&
            ((e.adjustWidthTo =
              An(t, n.maxLine, n.maxLine.text.length).left + 3),
            (t.display.sizerWidth = e.adjustWidthTo),
            (e.barMeasure.scrollWidth = Math.max(
              n.scroller.clientWidth,
              n.sizer.offsetLeft + e.adjustWidthTo + Tn(t) + t.display.barWidth
            )),
            (e.maxScrollLeft = Math.max(
              0,
              n.sizer.offsetLeft + e.adjustWidthTo - Mn(t)
            ))),
          (e.updatedDisplay || e.selectionChanged) &&
            (e.preparedSelection = n.input.prepareSelection());
      }
      function Xr(e) {
        var t = e.cm;
        null != e.adjustWidthTo &&
          ((t.display.sizer.style.minWidth = e.adjustWidthTo + "px"),
          e.maxScrollLeft < t.doc.scrollLeft &&
            Dr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
          (t.display.maxLineChanged = !1));
        var n = e.focus && e.focus == _();
        e.preparedSelection &&
          t.display.input.showSelection(e.preparedSelection, n),
          (e.updatedDisplay || e.startHeight != t.doc.height) &&
            qr(t, e.barMeasure),
          e.updatedDisplay && ui(t, e.barMeasure),
          e.selectionChanged && xr(t),
          t.state.focused && e.updateInput && t.display.input.reset(e.typing),
          n && kr(e.cm);
      }
      function Zr(e) {
        var t = e.cm,
          n = t.display,
          r = t.doc;
        e.updatedDisplay && si(t, e.update),
          null == n.wheelStartX ||
            (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) ||
            (n.wheelStartX = n.wheelStartY = null),
          null != e.scrollTop && Hr(t, e.scrollTop, e.forceScroll),
          null != e.scrollLeft && Dr(t, e.scrollLeft, !0, !0),
          e.scrollToPos &&
            (function (e, t) {
              if (!me(e, "scrollCursorIntoView")) {
                var n = e.display,
                  r = n.sizer.getBoundingClientRect(),
                  i = null;
                if (
                  (t.top + r.top < 0
                    ? (i = !0)
                    : t.bottom + r.top >
                        (window.innerHeight ||
                          document.documentElement.clientHeight) && (i = !1),
                  null != i && !p)
                ) {
                  var o = E(
                    "div",
                    "​",
                    null,
                    "position: absolute;\n                         top: " +
                      (t.top - n.viewOffset - Sn(e.display)) +
                      "px;\n                         height: " +
                      (t.bottom - t.top + Tn(e) + n.barHeight) +
                      "px;\n                         left: " +
                      t.left +
                      "px; width: " +
                      Math.max(2, t.right - t.left) +
                      "px;"
                  );
                  e.display.lineSpace.appendChild(o),
                    o.scrollIntoView(i),
                    e.display.lineSpace.removeChild(o);
                }
              }
            })(
              t,
              (function (e, t, n, r) {
                var i;
                null == r && (r = 0),
                  e.options.lineWrapping ||
                    t != n ||
                    ((n =
                      "before" == t.sticky
                        ? et(t.line, t.ch + 1, "before")
                        : t),
                    (t = t.ch
                      ? et(
                          t.line,
                          "before" == t.sticky ? t.ch - 1 : t.ch,
                          "after"
                        )
                      : t));
                for (var o = 0; o < 5; o++) {
                  var a = !1,
                    s = Vn(e, t),
                    l = n && n != t ? Vn(e, n) : s,
                    c = Er(
                      e,
                      (i = {
                        left: Math.min(s.left, l.left),
                        top: Math.min(s.top, l.top) - r,
                        right: Math.max(s.left, l.left),
                        bottom: Math.max(s.bottom, l.bottom) + r,
                      })
                    ),
                    u = e.doc.scrollTop,
                    d = e.doc.scrollLeft;
                  if (
                    (null != c.scrollTop &&
                      (jr(e, c.scrollTop),
                      Math.abs(e.doc.scrollTop - u) > 1 && (a = !0)),
                    null != c.scrollLeft &&
                      (Dr(e, c.scrollLeft),
                      Math.abs(e.doc.scrollLeft - d) > 1 && (a = !0)),
                    !a)
                  )
                    break;
                }
                return i;
              })(
                t,
                st(r, e.scrollToPos.from),
                st(r, e.scrollToPos.to),
                e.scrollToPos.margin
              )
            );
        var i = e.maybeHiddenMarkers,
          o = e.maybeUnhiddenMarkers;
        if (i)
          for (var a = 0; a < i.length; ++a)
            i[a].lines.length || pe(i[a], "hide");
        if (o)
          for (var s = 0; s < o.length; ++s)
            o[s].lines.length && pe(o[s], "unhide");
        n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop),
          e.changeObjs && pe(t, "changes", t, e.changeObjs),
          e.update && e.update.finish();
      }
      function Qr(e, t) {
        if (e.curOp) return t();
        Gr(e);
        try {
          return t();
        } finally {
          Vr(e);
        }
      }
      function ei(e, t) {
        return function () {
          if (e.curOp) return t.apply(e, arguments);
          Gr(e);
          try {
            return t.apply(e, arguments);
          } finally {
            Vr(e);
          }
        };
      }
      function ti(e) {
        return function () {
          if (this.curOp) return e.apply(this, arguments);
          Gr(this);
          try {
            return e.apply(this, arguments);
          } finally {
            Vr(this);
          }
        };
      }
      function ni(e) {
        return function () {
          var t = this.cm;
          if (!t || t.curOp) return e.apply(this, arguments);
          Gr(t);
          try {
            return e.apply(this, arguments);
          } finally {
            Vr(t);
          }
        };
      }
      function ri(e, t) {
        e.doc.highlightFrontier < e.display.viewTo &&
          e.state.highlight.set(t, H(ii, e));
      }
      function ii(e) {
        var t = e.doc;
        if (!(t.highlightFrontier >= e.display.viewTo)) {
          var n = +new Date() + e.options.workTime,
            r = ht(e, t.highlightFrontier),
            i = [];
          t.iter(
            r.line,
            Math.min(t.first + t.size, e.display.viewTo + 500),
            function (o) {
              if (r.line >= e.display.viewFrom) {
                var a = o.styles,
                  s =
                    o.text.length > e.options.maxHighlightLength
                      ? We(t.mode, r.state)
                      : null,
                  l = dt(e, o, r, !0);
                s && (r.state = s), (o.styles = l.styles);
                var c = o.styleClasses,
                  u = l.classes;
                u ? (o.styleClasses = u) : c && (o.styleClasses = null);
                for (
                  var d =
                      !a ||
                      a.length != o.styles.length ||
                      (c != u &&
                        (!c ||
                          !u ||
                          c.bgClass != u.bgClass ||
                          c.textClass != u.textClass)),
                    f = 0;
                  !d && f < a.length;
                  ++f
                )
                  d = a[f] != o.styles[f];
                d && i.push(r.line), (o.stateAfter = r.save()), r.nextLine();
              } else
                o.text.length <= e.options.maxHighlightLength &&
                  pt(e, o.text, r),
                  (o.stateAfter = r.line % 5 == 0 ? r.save() : null),
                  r.nextLine();
              if (+new Date() > n) return ri(e, e.options.workDelay), !0;
            }
          ),
            (t.highlightFrontier = r.line),
            (t.modeFrontier = Math.max(t.modeFrontier, r.line)),
            i.length &&
              Qr(e, function () {
                for (var t = 0; t < i.length; t++) fr(e, i[t], "text");
              });
        }
      }
      var oi = function (e, t, n) {
        var r = e.display;
        (this.viewport = t),
          (this.visible = Or(r, e.doc, t)),
          (this.editorIsHidden = !r.wrapper.offsetWidth),
          (this.wrapperHeight = r.wrapper.clientHeight),
          (this.wrapperWidth = r.wrapper.clientWidth),
          (this.oldDisplayWidth = Mn(e)),
          (this.force = n),
          (this.dims = or(e)),
          (this.events = []);
      };
      function ai(e, t) {
        var n = e.display,
          r = e.doc;
        if (t.editorIsHidden) return hr(e), !1;
        if (
          !t.force &&
          t.visible.from >= n.viewFrom &&
          t.visible.to <= n.viewTo &&
          (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) &&
          n.renderedView == n.view &&
          0 == mr(e)
        )
          return !1;
        fi(e) && (hr(e), (t.dims = or(e)));
        var i = r.first + r.size,
          o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
          a = Math.min(i, t.visible.to + e.options.viewportMargin);
        n.viewFrom < o &&
          o - n.viewFrom < 20 &&
          (o = Math.max(r.first, n.viewFrom)),
          n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)),
          kt && ((o = Bt(e.doc, o)), (a = It(e.doc, a)));
        var s =
          o != n.viewFrom ||
          a != n.viewTo ||
          n.lastWrapHeight != t.wrapperHeight ||
          n.lastWrapWidth != t.wrapperWidth;
        !(function (e, t, n) {
          var r = e.display;
          0 == r.view.length || t >= r.viewTo || n <= r.viewFrom
            ? ((r.view = on(e, t, n)), (r.viewFrom = t))
            : (r.viewFrom > t
                ? (r.view = on(e, t, r.viewFrom).concat(r.view))
                : r.viewFrom < t && (r.view = r.view.slice(ur(e, t))),
              (r.viewFrom = t),
              r.viewTo < n
                ? (r.view = r.view.concat(on(e, r.viewTo, n)))
                : r.viewTo > n && (r.view = r.view.slice(0, ur(e, n)))),
            (r.viewTo = n);
        })(e, o, a),
          (n.viewOffset = Ft(Ge(e.doc, n.viewFrom))),
          (e.display.mover.style.top = n.viewOffset + "px");
        var c = mr(e);
        if (
          !s &&
          0 == c &&
          !t.force &&
          n.renderedView == n.view &&
          (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)
        )
          return !1;
        var u = (function (e) {
          if (e.hasFocus()) return null;
          var t = _();
          if (!t || !N(e.display.lineDiv, t)) return null;
          var n = { activeElt: t };
          if (window.getSelection) {
            var r = window.getSelection();
            r.anchorNode &&
              r.extend &&
              N(e.display.lineDiv, r.anchorNode) &&
              ((n.anchorNode = r.anchorNode),
              (n.anchorOffset = r.anchorOffset),
              (n.focusNode = r.focusNode),
              (n.focusOffset = r.focusOffset));
          }
          return n;
        })(e);
        return (
          c > 4 && (n.lineDiv.style.display = "none"),
          (function (e, t, n) {
            var r = e.display,
              i = e.options.lineNumbers,
              o = r.lineDiv,
              a = o.firstChild;
            function s(t) {
              var n = t.nextSibling;
              return (
                l && y && e.display.currentWheelTarget == t
                  ? (t.style.display = "none")
                  : t.parentNode.removeChild(t),
                n
              );
            }
            for (var c = r.view, u = r.viewFrom, d = 0; d < c.length; d++) {
              var f = c[d];
              if (f.hidden);
              else if (f.node && f.node.parentNode == o) {
                for (; a != f.node; ) a = s(a);
                var h = i && null != t && t <= u && f.lineNumber;
                f.changes &&
                  (I(f.changes, "gutter") > -1 && (h = !1), un(e, f, u, n)),
                  h &&
                    (M(f.lineNumber),
                    f.lineNumber.appendChild(
                      document.createTextNode(Qe(e.options, u))
                    )),
                  (a = f.node.nextSibling);
              } else {
                var p = vn(e, f, u, n);
                o.insertBefore(p, a);
              }
              u += f.size;
            }
            for (; a; ) a = s(a);
          })(e, n.updateLineNumbers, t.dims),
          c > 4 && (n.lineDiv.style.display = ""),
          (n.renderedView = n.view),
          (function (e) {
            if (
              e &&
              e.activeElt &&
              e.activeElt != _() &&
              (e.activeElt.focus(),
              !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
                e.anchorNode &&
                N(document.body, e.anchorNode) &&
                N(document.body, e.focusNode))
            ) {
              var t = window.getSelection(),
                n = document.createRange();
              n.setEnd(e.anchorNode, e.anchorOffset),
                n.collapse(!1),
                t.removeAllRanges(),
                t.addRange(n),
                t.extend(e.focusNode, e.focusOffset);
            }
          })(u),
          M(n.cursorDiv),
          M(n.selectionDiv),
          (n.gutters.style.height = n.sizer.style.minHeight = 0),
          s &&
            ((n.lastWrapHeight = t.wrapperHeight),
            (n.lastWrapWidth = t.wrapperWidth),
            ri(e, 400)),
          (n.updateLineNumbers = null),
          !0
        );
      }
      function si(e, t) {
        for (var n = t.viewport, r = !0; ; r = !1) {
          if (r && e.options.lineWrapping && t.oldDisplayWidth != Mn(e))
            r && (t.visible = Or(e.display, e.doc, n));
          else if (
            (n &&
              null != n.top &&
              (n = {
                top: Math.min(e.doc.height + Cn(e.display) - On(e), n.top),
              }),
            (t.visible = Or(e.display, e.doc, n)),
            t.visible.from >= e.display.viewFrom &&
              t.visible.to <= e.display.viewTo)
          )
            break;
          if (!ai(e, t)) break;
          Tr(e);
          var i = zr(e);
          gr(e), qr(e, i), ui(e, i), (t.force = !1);
        }
        t.signal(e, "update", e),
          (e.display.viewFrom == e.display.reportedViewFrom &&
            e.display.viewTo == e.display.reportedViewTo) ||
            (t.signal(
              e,
              "viewportChange",
              e,
              e.display.viewFrom,
              e.display.viewTo
            ),
            (e.display.reportedViewFrom = e.display.viewFrom),
            (e.display.reportedViewTo = e.display.viewTo));
      }
      function li(e, t) {
        var n = new oi(e, t);
        if (ai(e, n)) {
          Tr(e), si(e, n);
          var r = zr(e);
          gr(e), qr(e, r), ui(e, r), n.finish();
        }
      }
      function ci(e) {
        var t = e.gutters.offsetWidth;
        (e.sizer.style.marginLeft = t + "px"), ln(e, "gutterChanged", e);
      }
      function ui(e, t) {
        (e.display.sizer.style.minHeight = t.docHeight + "px"),
          (e.display.heightForcer.style.top = t.docHeight + "px"),
          (e.display.gutters.style.height =
            t.docHeight + e.display.barHeight + Tn(e) + "px");
      }
      function di(e) {
        var t = e.display,
          n = t.view;
        if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
          for (
            var r = ar(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
              i = t.gutters.offsetWidth,
              o = r + "px",
              a = 0;
            a < n.length;
            a++
          )
            if (!n[a].hidden) {
              e.options.fixedGutter &&
                (n[a].gutter && (n[a].gutter.style.left = o),
                n[a].gutterBackground &&
                  (n[a].gutterBackground.style.left = o));
              var s = n[a].alignable;
              if (s) for (var l = 0; l < s.length; l++) s[l].style.left = o;
            }
          e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
        }
      }
      function fi(e) {
        if (!e.options.lineNumbers) return !1;
        var t = e.doc,
          n = Qe(e.options, t.first + t.size - 1),
          r = e.display;
        if (n.length != r.lineNumChars) {
          var i = r.measure.appendChild(
              E(
                "div",
                [E("div", n)],
                "CodeMirror-linenumber CodeMirror-gutter-elt"
              )
            ),
            o = i.firstChild.offsetWidth,
            a = i.offsetWidth - o;
          return (
            (r.lineGutter.style.width = ""),
            (r.lineNumInnerWidth =
              Math.max(o, r.lineGutter.offsetWidth - a) + 1),
            (r.lineNumWidth = r.lineNumInnerWidth + a),
            (r.lineNumChars = r.lineNumInnerWidth ? n.length : -1),
            (r.lineGutter.style.width = r.lineNumWidth + "px"),
            ci(e.display),
            !0
          );
        }
        return !1;
      }
      function hi(e, t) {
        for (var n = [], r = !1, i = 0; i < e.length; i++) {
          var o = e[i],
            a = null;
          if (
            ("string" != typeof o && ((a = o.style), (o = o.className)),
            "CodeMirror-linenumbers" == o)
          ) {
            if (!t) continue;
            r = !0;
          }
          n.push({ className: o, style: a });
        }
        return (
          t &&
            !r &&
            n.push({ className: "CodeMirror-linenumbers", style: null }),
          n
        );
      }
      function pi(e) {
        var t = e.gutters,
          n = e.gutterSpecs;
        M(t), (e.lineGutter = null);
        for (var r = 0; r < n.length; ++r) {
          var i = n[r],
            o = i.className,
            a = i.style,
            s = t.appendChild(E("div", null, "CodeMirror-gutter " + o));
          a && (s.style.cssText = a),
            "CodeMirror-linenumbers" == o &&
              ((e.lineGutter = s),
              (s.style.width = (e.lineNumWidth || 1) + "px"));
        }
        (t.style.display = n.length ? "" : "none"), ci(e);
      }
      function mi(e) {
        pi(e.display), dr(e), di(e);
      }
      function gi(e, t, r, i) {
        var o = this;
        (this.input = r),
          (o.scrollbarFiller = E("div", null, "CodeMirror-scrollbar-filler")),
          o.scrollbarFiller.setAttribute("cm-not-content", "true"),
          (o.gutterFiller = E("div", null, "CodeMirror-gutter-filler")),
          o.gutterFiller.setAttribute("cm-not-content", "true"),
          (o.lineDiv = A("div", null, "CodeMirror-code")),
          (o.selectionDiv = E(
            "div",
            null,
            null,
            "position: relative; z-index: 1"
          )),
          (o.cursorDiv = E("div", null, "CodeMirror-cursors")),
          (o.measure = E("div", null, "CodeMirror-measure")),
          (o.lineMeasure = E("div", null, "CodeMirror-measure")),
          (o.lineSpace = A(
            "div",
            [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv],
            null,
            "position: relative; outline: none"
          ));
        var c = A("div", [o.lineSpace], "CodeMirror-lines");
        (o.mover = E("div", [c], null, "position: relative")),
          (o.sizer = E("div", [o.mover], "CodeMirror-sizer")),
          (o.sizerWidth = null),
          (o.heightForcer = E(
            "div",
            null,
            null,
            "position: absolute; height: 50px; width: 1px;"
          )),
          (o.gutters = E("div", null, "CodeMirror-gutters")),
          (o.lineGutter = null),
          (o.scroller = E(
            "div",
            [o.sizer, o.heightForcer, o.gutters],
            "CodeMirror-scroll"
          )),
          o.scroller.setAttribute("tabIndex", "-1"),
          (o.wrapper = E(
            "div",
            [o.scrollbarFiller, o.gutterFiller, o.scroller],
            "CodeMirror"
          )),
          a &&
            s < 8 &&
            ((o.gutters.style.zIndex = -1),
            (o.scroller.style.paddingRight = 0)),
          l || (n && v) || (o.scroller.draggable = !0),
          e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
          (o.viewFrom = o.viewTo = t.first),
          (o.reportedViewFrom = o.reportedViewTo = t.first),
          (o.view = []),
          (o.renderedView = null),
          (o.externalMeasured = null),
          (o.viewOffset = 0),
          (o.lastWrapHeight = o.lastWrapWidth = 0),
          (o.updateLineNumbers = null),
          (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
          (o.scrollbarsClipped = !1),
          (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
          (o.alignWidgets = !1),
          (o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null),
          (o.maxLine = null),
          (o.maxLineLength = 0),
          (o.maxLineChanged = !1),
          (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
          (o.shift = !1),
          (o.selForContextMenu = null),
          (o.activeTouch = null),
          (o.gutterSpecs = hi(i.gutters, i.lineNumbers)),
          pi(o),
          r.init(o);
      }
      (oi.prototype.signal = function (e, t) {
        ve(e, t) && this.events.push(arguments);
      }),
        (oi.prototype.finish = function () {
          for (var e = 0; e < this.events.length; e++)
            pe.apply(null, this.events[e]);
        });
      var vi = 0,
        yi = null;
      function bi(e) {
        var t = e.wheelDeltaX,
          n = e.wheelDeltaY;
        return (
          null == t &&
            e.detail &&
            e.axis == e.HORIZONTAL_AXIS &&
            (t = e.detail),
          null == n && e.detail && e.axis == e.VERTICAL_AXIS
            ? (n = e.detail)
            : null == n && (n = e.wheelDelta),
          { x: t, y: n }
        );
      }
      function wi(e) {
        var t = bi(e);
        return (t.x *= yi), (t.y *= yi), t;
      }
      function xi(e, t) {
        var r = bi(t),
          i = r.x,
          o = r.y,
          a = e.display,
          s = a.scroller,
          c = s.scrollWidth > s.clientWidth,
          u = s.scrollHeight > s.clientHeight;
        if ((i && c) || (o && u)) {
          if (o && y && l)
            e: for (var f = t.target, h = a.view; f != s; f = f.parentNode)
              for (var p = 0; p < h.length; p++)
                if (h[p].node == f) {
                  e.display.currentWheelTarget = f;
                  break e;
                }
          if (i && !n && !d && null != yi)
            return (
              o && u && jr(e, Math.max(0, s.scrollTop + o * yi)),
              Dr(e, Math.max(0, s.scrollLeft + i * yi)),
              (!o || (o && u)) && be(t),
              void (a.wheelStartX = null)
            );
          if (o && null != yi) {
            var m = o * yi,
              g = e.doc.scrollTop,
              v = g + a.wrapper.clientHeight;
            m < 0
              ? (g = Math.max(0, g + m - 50))
              : (v = Math.min(e.doc.height, v + m + 50)),
              li(e, { top: g, bottom: v });
          }
          vi < 20 &&
            (null == a.wheelStartX
              ? ((a.wheelStartX = s.scrollLeft),
                (a.wheelStartY = s.scrollTop),
                (a.wheelDX = i),
                (a.wheelDY = o),
                setTimeout(function () {
                  if (null != a.wheelStartX) {
                    var e = s.scrollLeft - a.wheelStartX,
                      t = s.scrollTop - a.wheelStartY,
                      n =
                        (t && a.wheelDY && t / a.wheelDY) ||
                        (e && a.wheelDX && e / a.wheelDX);
                    (a.wheelStartX = a.wheelStartY = null),
                      n && ((yi = (yi * vi + n) / (vi + 1)), ++vi);
                  }
                }, 200))
              : ((a.wheelDX += i), (a.wheelDY += o)));
        }
      }
      a ? (yi = -0.53) : n ? (yi = 15) : u ? (yi = -0.7) : f && (yi = -1 / 3);
      var ki = function (e, t) {
        (this.ranges = e), (this.primIndex = t);
      };
      (ki.prototype.primary = function () {
        return this.ranges[this.primIndex];
      }),
        (ki.prototype.equals = function (e) {
          if (e == this) return !0;
          if (
            e.primIndex != this.primIndex ||
            e.ranges.length != this.ranges.length
          )
            return !1;
          for (var t = 0; t < this.ranges.length; t++) {
            var n = this.ranges[t],
              r = e.ranges[t];
            if (!nt(n.anchor, r.anchor) || !nt(n.head, r.head)) return !1;
          }
          return !0;
        }),
        (ki.prototype.deepCopy = function () {
          for (var e = [], t = 0; t < this.ranges.length; t++)
            e[t] = new Si(rt(this.ranges[t].anchor), rt(this.ranges[t].head));
          return new ki(e, this.primIndex);
        }),
        (ki.prototype.somethingSelected = function () {
          for (var e = 0; e < this.ranges.length; e++)
            if (!this.ranges[e].empty()) return !0;
          return !1;
        }),
        (ki.prototype.contains = function (e, t) {
          t || (t = e);
          for (var n = 0; n < this.ranges.length; n++) {
            var r = this.ranges[n];
            if (tt(t, r.from()) >= 0 && tt(e, r.to()) <= 0) return n;
          }
          return -1;
        });
      var Si = function (e, t) {
        (this.anchor = e), (this.head = t);
      };
      function Ci(e, t, n) {
        var r = e && e.options.selectionsMayTouch,
          i = t[n];
        t.sort(function (e, t) {
          return tt(e.from(), t.from());
        }),
          (n = I(t, i));
        for (var o = 1; o < t.length; o++) {
          var a = t[o],
            s = t[o - 1],
            l = tt(s.to(), a.from());
          if (r && !a.empty() ? l > 0 : l >= 0) {
            var c = ot(s.from(), a.from()),
              u = it(s.to(), a.to()),
              d = s.empty() ? a.from() == a.head : s.from() == s.head;
            o <= n && --n, t.splice(--o, 2, new Si(d ? u : c, d ? c : u));
          }
        }
        return new ki(t, n);
      }
      function Li(e, t) {
        return new ki([new Si(e, t || e)], 0);
      }
      function Ti(e) {
        return e.text
          ? et(
              e.from.line + e.text.length - 1,
              K(e.text).length + (1 == e.text.length ? e.from.ch : 0)
            )
          : e.to;
      }
      function Mi(e, t) {
        if (tt(e, t.from) < 0) return e;
        if (tt(e, t.to) <= 0) return Ti(t);
        var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
          r = e.ch;
        return e.line == t.to.line && (r += Ti(t).ch - t.to.ch), et(n, r);
      }
      function Oi(e, t) {
        for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
          var i = e.sel.ranges[r];
          n.push(new Si(Mi(i.anchor, t), Mi(i.head, t)));
        }
        return Ci(e.cm, n, e.sel.primIndex);
      }
      function Ei(e, t, n) {
        return e.line == t.line
          ? et(n.line, e.ch - t.ch + n.ch)
          : et(n.line + (e.line - t.line), e.ch);
      }
      function Ai(e) {
        (e.doc.mode = Be(e.options, e.doc.modeOption)), Ni(e);
      }
      function Ni(e) {
        e.doc.iter(function (e) {
          e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
        }),
          (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
          ri(e, 100),
          e.state.modeGen++,
          e.curOp && dr(e);
      }
      function _i(e, t) {
        return (
          0 == t.from.ch &&
          0 == t.to.ch &&
          "" == K(t.text) &&
          (!e.cm || e.cm.options.wholeLineUpdateBefore)
        );
      }
      function Pi(e, t, n, r) {
        function i(e) {
          return n ? n[e] : null;
        }
        function o(e, n, i) {
          !(function (e, t, n, r) {
            (e.text = t),
              e.stateAfter && (e.stateAfter = null),
              e.styles && (e.styles = null),
              null != e.order && (e.order = null),
              Ot(e),
              Et(e, n);
            var i = r ? r(e) : 1;
            i != e.height && Ye(e, i);
          })(e, n, i, r),
            ln(e, "change", e, t);
        }
        function a(e, t) {
          for (var n = [], o = e; o < t; ++o) n.push(new Gt(c[o], i(o), r));
          return n;
        }
        var s = t.from,
          l = t.to,
          c = t.text,
          u = Ge(e, s.line),
          d = Ge(e, l.line),
          f = K(c),
          h = i(c.length - 1),
          p = l.line - s.line;
        if (t.full)
          e.insert(0, a(0, c.length)), e.remove(c.length, e.size - c.length);
        else if (_i(e, t)) {
          var m = a(0, c.length - 1);
          o(d, d.text, h),
            p && e.remove(s.line, p),
            m.length && e.insert(s.line, m);
        } else if (u == d)
          if (1 == c.length)
            o(u, u.text.slice(0, s.ch) + f + u.text.slice(l.ch), h);
          else {
            var g = a(1, c.length - 1);
            g.push(new Gt(f + u.text.slice(l.ch), h, r)),
              o(u, u.text.slice(0, s.ch) + c[0], i(0)),
              e.insert(s.line + 1, g);
          }
        else if (1 == c.length)
          o(u, u.text.slice(0, s.ch) + c[0] + d.text.slice(l.ch), i(0)),
            e.remove(s.line + 1, p);
        else {
          o(u, u.text.slice(0, s.ch) + c[0], i(0)),
            o(d, f + d.text.slice(l.ch), h);
          var v = a(1, c.length - 1);
          p > 1 && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, v);
        }
        ln(e, "change", e, t);
      }
      function Ri(e, t, n) {
        !(function e(r, i, o) {
          if (r.linked)
            for (var a = 0; a < r.linked.length; ++a) {
              var s = r.linked[a];
              if (s.doc != i) {
                var l = o && s.sharedHist;
                (n && !l) || (t(s.doc, l), e(s.doc, r, l));
              }
            }
        })(e, null, !0);
      }
      function ji(e, t) {
        if (t.cm) throw new Error("This document is already in use.");
        (e.doc = t),
          (t.cm = e),
          lr(e),
          Ai(e),
          Hi(e),
          (e.options.direction = t.direction),
          e.options.lineWrapping || Ut(e),
          (e.options.mode = t.modeOption),
          dr(e);
      }
      function Hi(e) {
        ("rtl" == e.doc.direction ? P : T)(e.display.lineDiv, "CodeMirror-rtl");
      }
      function Di(e) {
        (this.done = []),
          (this.undone = []),
          (this.undoDepth = e ? e.undoDepth : 1 / 0),
          (this.lastModTime = this.lastSelTime = 0),
          (this.lastOp = this.lastSelOp = null),
          (this.lastOrigin = this.lastSelOrigin = null),
          (this.generation = this.maxGeneration = e ? e.maxGeneration : 1);
      }
      function zi(e, t) {
        var n = { from: rt(t.from), to: Ti(t), text: Ve(e, t.from, t.to) };
        return (
          Fi(e, n, t.from.line, t.to.line + 1),
          Ri(
            e,
            function (e) {
              return Fi(e, n, t.from.line, t.to.line + 1);
            },
            !0
          ),
          n
        );
      }
      function Bi(e) {
        for (; e.length && K(e).ranges; ) e.pop();
      }
      function Ii(e, t, n, r) {
        var i = e.history;
        i.undone.length = 0;
        var o,
          a,
          s = +new Date();
        if (
          (i.lastOp == r ||
            (i.lastOrigin == t.origin &&
              t.origin &&
              (("+" == t.origin.charAt(0) &&
                i.lastModTime >
                  s - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                "*" == t.origin.charAt(0)))) &&
          (o = (function (e, t) {
            return t
              ? (Bi(e.done), K(e.done))
              : e.done.length && !K(e.done).ranges
              ? K(e.done)
              : e.done.length > 1 && !e.done[e.done.length - 2].ranges
              ? (e.done.pop(), K(e.done))
              : void 0;
          })(i, i.lastOp == r))
        )
          (a = K(o.changes)),
            0 == tt(t.from, t.to) && 0 == tt(t.from, a.to)
              ? (a.to = Ti(t))
              : o.changes.push(zi(e, t));
        else {
          var l = K(i.done);
          for (
            (l && l.ranges) || Wi(e.sel, i.done),
              o = { changes: [zi(e, t)], generation: i.generation },
              i.done.push(o);
            i.done.length > i.undoDepth;

          )
            i.done.shift(), i.done[0].ranges || i.done.shift();
        }
        i.done.push(n),
          (i.generation = ++i.maxGeneration),
          (i.lastModTime = i.lastSelTime = s),
          (i.lastOp = i.lastSelOp = r),
          (i.lastOrigin = i.lastSelOrigin = t.origin),
          a || pe(e, "historyAdded");
      }
      function qi(e, t, n, r) {
        var i = e.history,
          o = r && r.origin;
        n == i.lastSelOp ||
        (o &&
          i.lastSelOrigin == o &&
          ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
            (function (e, t, n, r) {
              var i = t.charAt(0);
              return (
                "*" == i ||
                ("+" == i &&
                  n.ranges.length == r.ranges.length &&
                  n.somethingSelected() == r.somethingSelected() &&
                  new Date() - e.history.lastSelTime <=
                    (e.cm ? e.cm.options.historyEventDelay : 500))
              );
            })(e, o, K(i.done), t)))
          ? (i.done[i.done.length - 1] = t)
          : Wi(t, i.done),
          (i.lastSelTime = +new Date()),
          (i.lastSelOrigin = o),
          (i.lastSelOp = n),
          r && !1 !== r.clearRedo && Bi(i.undone);
      }
      function Wi(e, t) {
        var n = K(t);
        (n && n.ranges && n.equals(e)) || t.push(e);
      }
      function Fi(e, t, n, r) {
        var i = t["spans_" + e.id],
          o = 0;
        e.iter(
          Math.max(e.first, n),
          Math.min(e.first + e.size, r),
          function (n) {
            n.markedSpans &&
              ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans),
              ++o;
          }
        );
      }
      function $i(e) {
        if (!e) return null;
        for (var t, n = 0; n < e.length; ++n)
          e[n].marker.explicitlyCleared
            ? t || (t = e.slice(0, n))
            : t && t.push(e[n]);
        return t ? (t.length ? t : null) : e;
      }
      function Ui(e, t) {
        var n = (function (e, t) {
            var n = t["spans_" + e.id];
            if (!n) return null;
            for (var r = [], i = 0; i < t.text.length; ++i) r.push($i(n[i]));
            return r;
          })(e, t),
          r = Tt(e, t);
        if (!n) return r;
        if (!r) return n;
        for (var i = 0; i < n.length; ++i) {
          var o = n[i],
            a = r[i];
          if (o && a)
            e: for (var s = 0; s < a.length; ++s) {
              for (var l = a[s], c = 0; c < o.length; ++c)
                if (o[c].marker == l.marker) continue e;
              o.push(l);
            }
          else a && (n[i] = a);
        }
        return n;
      }
      function Gi(e, t, n) {
        for (var r = [], i = 0; i < e.length; ++i) {
          var o = e[i];
          if (o.ranges) r.push(n ? ki.prototype.deepCopy.call(o) : o);
          else {
            var a = o.changes,
              s = [];
            r.push({ changes: s });
            for (var l = 0; l < a.length; ++l) {
              var c = a[l],
                u = void 0;
              if ((s.push({ from: c.from, to: c.to, text: c.text }), t))
                for (var d in c)
                  (u = d.match(/^spans_(\d+)$/)) &&
                    I(t, Number(u[1])) > -1 &&
                    ((K(s)[d] = c[d]), delete c[d]);
            }
          }
        }
        return r;
      }
      function Vi(e, t, n, r) {
        if (r) {
          var i = e.anchor;
          if (n) {
            var o = tt(t, i) < 0;
            o != tt(n, i) < 0
              ? ((i = t), (t = n))
              : o != tt(t, n) < 0 && (t = n);
          }
          return new Si(i, t);
        }
        return new Si(n || t, t);
      }
      function Ki(e, t, n, r, i) {
        null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
          Qi(e, new ki([Vi(e.sel.primary(), t, n, i)], 0), r);
      }
      function Yi(e, t, n) {
        for (
          var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
          o < e.sel.ranges.length;
          o++
        )
          r[o] = Vi(e.sel.ranges[o], t[o], null, i);
        Qi(e, Ci(e.cm, r, e.sel.primIndex), n);
      }
      function Ji(e, t, n, r) {
        var i = e.sel.ranges.slice(0);
        (i[t] = n), Qi(e, Ci(e.cm, i, e.sel.primIndex), r);
      }
      function Xi(e, t, n, r) {
        Qi(e, Li(t, n), r);
      }
      function Zi(e, t, n) {
        var r = e.history.done,
          i = K(r);
        i && i.ranges ? ((r[r.length - 1] = t), eo(e, t, n)) : Qi(e, t, n);
      }
      function Qi(e, t, n) {
        eo(e, t, n), qi(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
      }
      function eo(e, t, n) {
        (ve(e, "beforeSelectionChange") ||
          (e.cm && ve(e.cm, "beforeSelectionChange"))) &&
          (t = (function (e, t, n) {
            var r = {
              ranges: t.ranges,
              update: function (t) {
                this.ranges = [];
                for (var n = 0; n < t.length; n++)
                  this.ranges[n] = new Si(st(e, t[n].anchor), st(e, t[n].head));
              },
              origin: n && n.origin,
            };
            return (
              pe(e, "beforeSelectionChange", e, r),
              e.cm && pe(e.cm, "beforeSelectionChange", e.cm, r),
              r.ranges != t.ranges ? Ci(e.cm, r.ranges, r.ranges.length - 1) : t
            );
          })(e, t, n));
        var r =
          (n && n.bias) ||
          (tt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        to(e, ro(e, t, r, !0)),
          (n && !1 === n.scroll) ||
            !e.cm ||
            "nocursor" == e.cm.getOption("readOnly") ||
            Nr(e.cm);
      }
      function to(e, t) {
        t.equals(e.sel) ||
          ((e.sel = t),
          e.cm &&
            ((e.cm.curOp.updateInput = 1),
            (e.cm.curOp.selectionChanged = !0),
            ge(e.cm)),
          ln(e, "cursorActivity", e));
      }
      function no(e) {
        to(e, ro(e, e.sel, null, !1));
      }
      function ro(e, t, n, r) {
        for (var i, o = 0; o < t.ranges.length; o++) {
          var a = t.ranges[o],
            s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
            l = oo(e, a.anchor, s && s.anchor, n, r),
            c = oo(e, a.head, s && s.head, n, r);
          (i || l != a.anchor || c != a.head) &&
            (i || (i = t.ranges.slice(0, o)), (i[o] = new Si(l, c)));
        }
        return i ? Ci(e.cm, i, t.primIndex) : t;
      }
      function io(e, t, n, r, i) {
        var o = Ge(e, t.line);
        if (o.markedSpans)
          for (var a = 0; a < o.markedSpans.length; ++a) {
            var s = o.markedSpans[a],
              l = s.marker,
              c = "selectLeft" in l ? !l.selectLeft : l.inclusiveLeft,
              u = "selectRight" in l ? !l.selectRight : l.inclusiveRight;
            if (
              (null == s.from || (c ? s.from <= t.ch : s.from < t.ch)) &&
              (null == s.to || (u ? s.to >= t.ch : s.to > t.ch))
            ) {
              if (i && (pe(l, "beforeCursorEnter"), l.explicitlyCleared)) {
                if (o.markedSpans) {
                  --a;
                  continue;
                }
                break;
              }
              if (!l.atomic) continue;
              if (n) {
                var d = l.find(r < 0 ? 1 : -1),
                  f = void 0;
                if (
                  ((r < 0 ? u : c) &&
                    (d = ao(e, d, -r, d && d.line == t.line ? o : null)),
                  d &&
                    d.line == t.line &&
                    (f = tt(d, n)) &&
                    (r < 0 ? f < 0 : f > 0))
                )
                  return io(e, d, t, r, i);
              }
              var h = l.find(r < 0 ? -1 : 1);
              return (
                (r < 0 ? c : u) &&
                  (h = ao(e, h, r, h.line == t.line ? o : null)),
                h ? io(e, h, t, r, i) : null
              );
            }
          }
        return t;
      }
      function oo(e, t, n, r, i) {
        var o = r || 1,
          a =
            io(e, t, n, o, i) ||
            (!i && io(e, t, n, o, !0)) ||
            io(e, t, n, -o, i) ||
            (!i && io(e, t, n, -o, !0));
        return a || ((e.cantEdit = !0), et(e.first, 0));
      }
      function ao(e, t, n, r) {
        return n < 0 && 0 == t.ch
          ? t.line > e.first
            ? st(e, et(t.line - 1))
            : null
          : n > 0 && t.ch == (r || Ge(e, t.line)).text.length
          ? t.line < e.first + e.size - 1
            ? et(t.line + 1, 0)
            : null
          : new et(t.line, t.ch + n);
      }
      function so(e) {
        e.setSelection(et(e.firstLine(), 0), et(e.lastLine()), W);
      }
      function lo(e, t, n) {
        var r = {
          canceled: !1,
          from: t.from,
          to: t.to,
          text: t.text,
          origin: t.origin,
          cancel: function () {
            return (r.canceled = !0);
          },
        };
        return (
          n &&
            (r.update = function (t, n, i, o) {
              t && (r.from = st(e, t)),
                n && (r.to = st(e, n)),
                i && (r.text = i),
                void 0 !== o && (r.origin = o);
            }),
          pe(e, "beforeChange", e, r),
          e.cm && pe(e.cm, "beforeChange", e.cm, r),
          r.canceled
            ? (e.cm && (e.cm.curOp.updateInput = 2), null)
            : { from: r.from, to: r.to, text: r.text, origin: r.origin }
        );
      }
      function co(e, t, n) {
        if (e.cm) {
          if (!e.cm.curOp) return ei(e.cm, co)(e, t, n);
          if (e.cm.state.suppressEdits) return;
        }
        if (
          !(ve(e, "beforeChange") || (e.cm && ve(e.cm, "beforeChange"))) ||
          (t = lo(e, t, !0))
        ) {
          var r =
            xt &&
            !n &&
            (function (e, t, n) {
              var r = null;
              if (
                (e.iter(t.line, n.line + 1, function (e) {
                  if (e.markedSpans)
                    for (var t = 0; t < e.markedSpans.length; ++t) {
                      var n = e.markedSpans[t].marker;
                      !n.readOnly ||
                        (r && -1 != I(r, n)) ||
                        (r || (r = [])).push(n);
                    }
                }),
                !r)
              )
                return null;
              for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
                for (var a = r[o], s = a.find(0), l = 0; l < i.length; ++l) {
                  var c = i[l];
                  if (!(tt(c.to, s.from) < 0 || tt(c.from, s.to) > 0)) {
                    var u = [l, 1],
                      d = tt(c.from, s.from),
                      f = tt(c.to, s.to);
                    (d < 0 || (!a.inclusiveLeft && !d)) &&
                      u.push({ from: c.from, to: s.from }),
                      (f > 0 || (!a.inclusiveRight && !f)) &&
                        u.push({ from: s.to, to: c.to }),
                      i.splice.apply(i, u),
                      (l += u.length - 3);
                  }
                }
              return i;
            })(e, t.from, t.to);
          if (r)
            for (var i = r.length - 1; i >= 0; --i)
              uo(e, {
                from: r[i].from,
                to: r[i].to,
                text: i ? [""] : t.text,
                origin: t.origin,
              });
          else uo(e, t);
        }
      }
      function uo(e, t) {
        if (1 != t.text.length || "" != t.text[0] || 0 != tt(t.from, t.to)) {
          var n = Oi(e, t);
          Ii(e, t, n, e.cm ? e.cm.curOp.id : NaN), po(e, t, n, Tt(e, t));
          var r = [];
          Ri(e, function (e, n) {
            n || -1 != I(r, e.history) || (yo(e.history, t), r.push(e.history)),
              po(e, t, null, Tt(e, t));
          });
        }
      }
      function fo(e, t, n) {
        var r = e.cm && e.cm.state.suppressEdits;
        if (!r || n) {
          for (
            var i,
              o = e.history,
              a = e.sel,
              s = "undo" == t ? o.done : o.undone,
              l = "undo" == t ? o.undone : o.done,
              c = 0;
            c < s.length &&
            ((i = s[c]), n ? !i.ranges || i.equals(e.sel) : i.ranges);
            c++
          );
          if (c != s.length) {
            for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
              if (!(i = s.pop()).ranges) {
                if (r) return void s.push(i);
                break;
              }
              if ((Wi(i, l), n && !i.equals(e.sel)))
                return void Qi(e, i, { clearRedo: !1 });
              a = i;
            }
            var u = [];
            Wi(a, l),
              l.push({ changes: u, generation: o.generation }),
              (o.generation = i.generation || ++o.maxGeneration);
            for (
              var d =
                  ve(e, "beforeChange") || (e.cm && ve(e.cm, "beforeChange")),
                f = function (n) {
                  var r = i.changes[n];
                  if (((r.origin = t), d && !lo(e, r, !1)))
                    return (s.length = 0), {};
                  u.push(zi(e, r));
                  var o = n ? Oi(e, r) : K(s);
                  po(e, r, o, Ui(e, r)),
                    !n &&
                      e.cm &&
                      e.cm.scrollIntoView({ from: r.from, to: Ti(r) });
                  var a = [];
                  Ri(e, function (e, t) {
                    t ||
                      -1 != I(a, e.history) ||
                      (yo(e.history, r), a.push(e.history)),
                      po(e, r, null, Ui(e, r));
                  });
                },
                h = i.changes.length - 1;
              h >= 0;
              --h
            ) {
              var p = f(h);
              if (p) return p.v;
            }
          }
        }
      }
      function ho(e, t) {
        if (
          0 != t &&
          ((e.first += t),
          (e.sel = new ki(
            Y(e.sel.ranges, function (e) {
              return new Si(
                et(e.anchor.line + t, e.anchor.ch),
                et(e.head.line + t, e.head.ch)
              );
            }),
            e.sel.primIndex
          )),
          e.cm)
        ) {
          dr(e.cm, e.first, e.first - t, t);
          for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
            fr(e.cm, r, "gutter");
        }
      }
      function po(e, t, n, r) {
        if (e.cm && !e.cm.curOp) return ei(e.cm, po)(e, t, n, r);
        if (t.to.line < e.first)
          ho(e, t.text.length - 1 - (t.to.line - t.from.line));
        else if (!(t.from.line > e.lastLine())) {
          if (t.from.line < e.first) {
            var i = t.text.length - 1 - (e.first - t.from.line);
            ho(e, i),
              (t = {
                from: et(e.first, 0),
                to: et(t.to.line + i, t.to.ch),
                text: [K(t.text)],
                origin: t.origin,
              });
          }
          var o = e.lastLine();
          t.to.line > o &&
            (t = {
              from: t.from,
              to: et(o, Ge(e, o).text.length),
              text: [t.text[0]],
              origin: t.origin,
            }),
            (t.removed = Ve(e, t.from, t.to)),
            n || (n = Oi(e, t)),
            e.cm
              ? (function (e, t, n) {
                  var r = e.doc,
                    i = e.display,
                    o = t.from,
                    a = t.to,
                    s = !1,
                    l = o.line;
                  e.options.lineWrapping ||
                    ((l = Je(zt(Ge(r, o.line)))),
                    r.iter(l, a.line + 1, function (e) {
                      if (e == i.maxLine) return (s = !0), !0;
                    })),
                    r.sel.contains(t.from, t.to) > -1 && ge(e),
                    Pi(r, t, n, sr(e)),
                    e.options.lineWrapping ||
                      (r.iter(l, o.line + t.text.length, function (e) {
                        var t = $t(e);
                        t > i.maxLineLength &&
                          ((i.maxLine = e),
                          (i.maxLineLength = t),
                          (i.maxLineChanged = !0),
                          (s = !1));
                      }),
                      s && (e.curOp.updateMaxLine = !0)),
                    (function (e, t) {
                      if (
                        ((e.modeFrontier = Math.min(e.modeFrontier, t)),
                        !(e.highlightFrontier < t - 10))
                      ) {
                        for (var n = e.first, r = t - 1; r > n; r--) {
                          var i = Ge(e, r).stateAfter;
                          if (
                            i &&
                            (!(i instanceof ct) || r + i.lookAhead < t)
                          ) {
                            n = r + 1;
                            break;
                          }
                        }
                        e.highlightFrontier = Math.min(e.highlightFrontier, n);
                      }
                    })(r, o.line),
                    ri(e, 400);
                  var c = t.text.length - (a.line - o.line) - 1;
                  t.full
                    ? dr(e)
                    : o.line != a.line || 1 != t.text.length || _i(e.doc, t)
                    ? dr(e, o.line, a.line + 1, c)
                    : fr(e, o.line, "text");
                  var u = ve(e, "changes"),
                    d = ve(e, "change");
                  if (d || u) {
                    var f = {
                      from: o,
                      to: a,
                      text: t.text,
                      removed: t.removed,
                      origin: t.origin,
                    };
                    d && ln(e, "change", e, f),
                      u &&
                        (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(
                          f
                        );
                  }
                  e.display.selForContextMenu = null;
                })(e.cm, t, r)
              : Pi(e, t, r),
            eo(e, n, W),
            e.cantEdit && oo(e, et(e.firstLine(), 0)) && (e.cantEdit = !1);
        }
      }
      function mo(e, t, n, r, i) {
        var o;
        r || (r = n),
          tt(r, n) < 0 && ((n = (o = [r, n])[0]), (r = o[1])),
          "string" == typeof t && (t = e.splitLines(t)),
          co(e, { from: n, to: r, text: t, origin: i });
      }
      function go(e, t, n, r) {
        n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0));
      }
      function vo(e, t, n, r) {
        for (var i = 0; i < e.length; ++i) {
          var o = e[i],
            a = !0;
          if (o.ranges) {
            o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
            for (var s = 0; s < o.ranges.length; s++)
              go(o.ranges[s].anchor, t, n, r), go(o.ranges[s].head, t, n, r);
          } else {
            for (var l = 0; l < o.changes.length; ++l) {
              var c = o.changes[l];
              if (n < c.from.line)
                (c.from = et(c.from.line + r, c.from.ch)),
                  (c.to = et(c.to.line + r, c.to.ch));
              else if (t <= c.to.line) {
                a = !1;
                break;
              }
            }
            a || (e.splice(0, i + 1), (i = 0));
          }
        }
      }
      function yo(e, t) {
        var n = t.from.line,
          r = t.to.line,
          i = t.text.length - (r - n) - 1;
        vo(e.done, n, r, i), vo(e.undone, n, r, i);
      }
      function bo(e, t, n, r) {
        var i = t,
          o = t;
        return (
          "number" == typeof t ? (o = Ge(e, at(e, t))) : (i = Je(t)),
          null == i ? null : (r(o, i) && e.cm && fr(e.cm, i, n), o)
        );
      }
      function wo(e) {
        (this.lines = e), (this.parent = null);
        for (var t = 0, n = 0; n < e.length; ++n)
          (e[n].parent = this), (t += e[n].height);
        this.height = t;
      }
      function xo(e) {
        this.children = e;
        for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
          var i = e[r];
          (t += i.chunkSize()), (n += i.height), (i.parent = this);
        }
        (this.size = t), (this.height = n), (this.parent = null);
      }
      (Si.prototype.from = function () {
        return ot(this.anchor, this.head);
      }),
        (Si.prototype.to = function () {
          return it(this.anchor, this.head);
        }),
        (Si.prototype.empty = function () {
          return (
            this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
          );
        }),
        (wo.prototype = {
          chunkSize: function () {
            return this.lines.length;
          },
          removeInner: function (e, t) {
            for (var n = e, r = e + t; n < r; ++n) {
              var i = this.lines[n];
              (this.height -= i.height), Vt(i), ln(i, "delete");
            }
            this.lines.splice(e, t);
          },
          collapse: function (e) {
            e.push.apply(e, this.lines);
          },
          insertInner: function (e, t, n) {
            (this.height += n),
              (this.lines = this.lines
                .slice(0, e)
                .concat(t)
                .concat(this.lines.slice(e)));
            for (var r = 0; r < t.length; ++r) t[r].parent = this;
          },
          iterN: function (e, t, n) {
            for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
          },
        }),
        (xo.prototype = {
          chunkSize: function () {
            return this.size;
          },
          removeInner: function (e, t) {
            this.size -= t;
            for (var n = 0; n < this.children.length; ++n) {
              var r = this.children[n],
                i = r.chunkSize();
              if (e < i) {
                var o = Math.min(t, i - e),
                  a = r.height;
                if (
                  (r.removeInner(e, o),
                  (this.height -= a - r.height),
                  i == o && (this.children.splice(n--, 1), (r.parent = null)),
                  0 == (t -= o))
                )
                  break;
                e = 0;
              } else e -= i;
            }
            if (
              this.size - t < 25 &&
              (this.children.length > 1 || !(this.children[0] instanceof wo))
            ) {
              var s = [];
              this.collapse(s),
                (this.children = [new wo(s)]),
                (this.children[0].parent = this);
            }
          },
          collapse: function (e) {
            for (var t = 0; t < this.children.length; ++t)
              this.children[t].collapse(e);
          },
          insertInner: function (e, t, n) {
            (this.size += t.length), (this.height += n);
            for (var r = 0; r < this.children.length; ++r) {
              var i = this.children[r],
                o = i.chunkSize();
              if (e <= o) {
                if ((i.insertInner(e, t, n), i.lines && i.lines.length > 50)) {
                  for (
                    var a = (i.lines.length % 25) + 25, s = a;
                    s < i.lines.length;

                  ) {
                    var l = new wo(i.lines.slice(s, (s += 25)));
                    (i.height -= l.height),
                      this.children.splice(++r, 0, l),
                      (l.parent = this);
                  }
                  (i.lines = i.lines.slice(0, a)), this.maybeSpill();
                }
                break;
              }
              e -= o;
            }
          },
          maybeSpill: function () {
            if (!(this.children.length <= 10)) {
              var e = this;
              do {
                var t = new xo(e.children.splice(e.children.length - 5, 5));
                if (e.parent) {
                  (e.size -= t.size), (e.height -= t.height);
                  var n = I(e.parent.children, e);
                  e.parent.children.splice(n + 1, 0, t);
                } else {
                  var r = new xo(e.children);
                  (r.parent = e), (e.children = [r, t]), (e = r);
                }
                t.parent = e.parent;
              } while (e.children.length > 10);
              e.parent.maybeSpill();
            }
          },
          iterN: function (e, t, n) {
            for (var r = 0; r < this.children.length; ++r) {
              var i = this.children[r],
                o = i.chunkSize();
              if (e < o) {
                var a = Math.min(t, o - e);
                if (i.iterN(e, a, n)) return !0;
                if (0 == (t -= a)) break;
                e = 0;
              } else e -= o;
            }
          },
        });
      var ko = function (e, t, n) {
        if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
        (this.doc = e), (this.node = t);
      };
      function So(e, t, n) {
        Ft(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && Ar(e, n);
      }
      (ko.prototype.clear = function () {
        var e = this.doc.cm,
          t = this.line.widgets,
          n = this.line,
          r = Je(n);
        if (null != r && t) {
          for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
          t.length || (n.widgets = null);
          var o = xn(this);
          Ye(n, Math.max(0, n.height - o)),
            e &&
              (Qr(e, function () {
                So(e, n, -o), fr(e, r, "widget");
              }),
              ln(e, "lineWidgetCleared", e, this, r));
        }
      }),
        (ko.prototype.changed = function () {
          var e = this,
            t = this.height,
            n = this.doc.cm,
            r = this.line;
          this.height = null;
          var i = xn(this) - t;
          i &&
            (qt(this.doc, r) || Ye(r, r.height + i),
            n &&
              Qr(n, function () {
                (n.curOp.forceUpdate = !0),
                  So(n, r, i),
                  ln(n, "lineWidgetChanged", n, e, Je(r));
              }));
        }),
        ye(ko);
      var Co = 0,
        Lo = function (e, t) {
          (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++Co);
        };
      function To(e, t, n, r, i) {
        if (r && r.shared)
          return (function (e, t, n, r, i) {
            (r = D(r)).shared = !1;
            var o = [To(e, t, n, r, i)],
              a = o[0],
              s = r.widgetNode;
            return (
              Ri(e, function (e) {
                s && (r.widgetNode = s.cloneNode(!0)),
                  o.push(To(e, st(e, t), st(e, n), r, i));
                for (var l = 0; l < e.linked.length; ++l)
                  if (e.linked[l].isParent) return;
                a = K(o);
              }),
              new Mo(o, a)
            );
          })(e, t, n, r, i);
        if (e.cm && !e.cm.curOp) return ei(e.cm, To)(e, t, n, r, i);
        var o = new Lo(e, i),
          a = tt(t, n);
        if ((r && D(r, o, !1), a > 0 || (0 == a && !1 !== o.clearWhenEmpty)))
          return o;
        if (
          (o.replacedWith &&
            ((o.collapsed = !0),
            (o.widgetNode = A("span", [o.replacedWith], "CodeMirror-widget")),
            r.handleMouseEvents ||
              o.widgetNode.setAttribute("cm-ignore-events", "true"),
            r.insertLeft && (o.widgetNode.insertLeft = !0)),
          o.collapsed)
        ) {
          if (
            Dt(e, t.line, t, n, o) ||
            (t.line != n.line && Dt(e, n.line, t, n, o))
          )
            throw new Error(
              "Inserting collapsed marker partially overlapping an existing one"
            );
          kt = !0;
        }
        o.addToHistory &&
          Ii(e, { from: t, to: n, origin: "markText" }, e.sel, NaN);
        var s,
          l = t.line,
          c = e.cm;
        if (
          (e.iter(l, n.line + 1, function (r) {
            c &&
              o.collapsed &&
              !c.options.lineWrapping &&
              zt(r) == c.display.maxLine &&
              (s = !0),
              o.collapsed && l != t.line && Ye(r, 0),
              (function (e, t, n) {
                var r =
                  n &&
                  window.WeakSet &&
                  (n.markedSpans || (n.markedSpans = new WeakSet()));
                r && r.has(e.markedSpans)
                  ? e.markedSpans.push(t)
                  : ((e.markedSpans = e.markedSpans
                      ? e.markedSpans.concat([t])
                      : [t]),
                    r && r.add(e.markedSpans)),
                  t.marker.attachLine(e);
              })(
                r,
                new St(o, l == t.line ? t.ch : null, l == n.line ? n.ch : null),
                e.cm && e.cm.curOp
              ),
              ++l;
          }),
          o.collapsed &&
            e.iter(t.line, n.line + 1, function (t) {
              qt(e, t) && Ye(t, 0);
            }),
          o.clearOnEnter &&
            de(o, "beforeCursorEnter", function () {
              return o.clear();
            }),
          o.readOnly &&
            ((xt = !0),
            (e.history.done.length || e.history.undone.length) &&
              e.clearHistory()),
          o.collapsed && ((o.id = ++Co), (o.atomic = !0)),
          c)
        ) {
          if ((s && (c.curOp.updateMaxLine = !0), o.collapsed))
            dr(c, t.line, n.line + 1);
          else if (
            o.className ||
            o.startStyle ||
            o.endStyle ||
            o.css ||
            o.attributes ||
            o.title
          )
            for (var u = t.line; u <= n.line; u++) fr(c, u, "text");
          o.atomic && no(c.doc), ln(c, "markerAdded", c, o);
        }
        return o;
      }
      (Lo.prototype.clear = function () {
        if (!this.explicitlyCleared) {
          var e = this.doc.cm,
            t = e && !e.curOp;
          if ((t && Gr(e), ve(this, "clear"))) {
            var n = this.find();
            n && ln(this, "clear", n.from, n.to);
          }
          for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
            var a = this.lines[o],
              s = Ct(a.markedSpans, this);
            e && !this.collapsed
              ? fr(e, Je(a), "text")
              : e &&
                (null != s.to && (i = Je(a)), null != s.from && (r = Je(a))),
              (a.markedSpans = Lt(a.markedSpans, s)),
              null == s.from &&
                this.collapsed &&
                !qt(this.doc, a) &&
                e &&
                Ye(a, rr(e.display));
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var l = 0; l < this.lines.length; ++l) {
              var c = zt(this.lines[l]),
                u = $t(c);
              u > e.display.maxLineLength &&
                ((e.display.maxLine = c),
                (e.display.maxLineLength = u),
                (e.display.maxLineChanged = !0));
            }
          null != r && e && this.collapsed && dr(e, r, i + 1),
            (this.lines.length = 0),
            (this.explicitlyCleared = !0),
            this.atomic &&
              this.doc.cantEdit &&
              ((this.doc.cantEdit = !1), e && no(e.doc)),
            e && ln(e, "markerCleared", e, this, r, i),
            t && Vr(e),
            this.parent && this.parent.clear();
        }
      }),
        (Lo.prototype.find = function (e, t) {
          var n, r;
          null == e && "bookmark" == this.type && (e = 1);
          for (var i = 0; i < this.lines.length; ++i) {
            var o = this.lines[i],
              a = Ct(o.markedSpans, this);
            if (null != a.from && ((n = et(t ? o : Je(o), a.from)), -1 == e))
              return n;
            if (null != a.to && ((r = et(t ? o : Je(o), a.to)), 1 == e))
              return r;
          }
          return n && { from: n, to: r };
        }),
        (Lo.prototype.changed = function () {
          var e = this,
            t = this.find(-1, !0),
            n = this,
            r = this.doc.cm;
          t &&
            r &&
            Qr(r, function () {
              var i = t.line,
                o = Je(t.line),
                a = Nn(r, o);
              if (
                (a &&
                  (zn(a),
                  (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
                (r.curOp.updateMaxLine = !0),
                !qt(n.doc, i) && null != n.height)
              ) {
                var s = n.height;
                n.height = null;
                var l = xn(n) - s;
                l && Ye(i, i.height + l);
              }
              ln(r, "markerChanged", r, e);
            });
        }),
        (Lo.prototype.attachLine = function (e) {
          if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers && -1 != I(t.maybeHiddenMarkers, this)) ||
              (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(
                this
              );
          }
          this.lines.push(e);
        }),
        (Lo.prototype.detachLine = function (e) {
          if (
            (this.lines.splice(I(this.lines, e), 1),
            !this.lines.length && this.doc.cm)
          ) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
          }
        }),
        ye(Lo);
      var Mo = function (e, t) {
        (this.markers = e), (this.primary = t);
        for (var n = 0; n < e.length; ++n) e[n].parent = this;
      };
      function Oo(e) {
        return e.findMarks(
          et(e.first, 0),
          e.clipPos(et(e.lastLine())),
          function (e) {
            return e.parent;
          }
        );
      }
      function Eo(e) {
        for (
          var t = function (t) {
              var n = e[t],
                r = [n.primary.doc];
              Ri(n.primary.doc, function (e) {
                return r.push(e);
              });
              for (var i = 0; i < n.markers.length; i++) {
                var o = n.markers[i];
                -1 == I(r, o.doc) &&
                  ((o.parent = null), n.markers.splice(i--, 1));
              }
            },
            n = 0;
          n < e.length;
          n++
        )
          t(n);
      }
      (Mo.prototype.clear = function () {
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
          ln(this, "clear");
        }
      }),
        (Mo.prototype.find = function (e, t) {
          return this.primary.find(e, t);
        }),
        ye(Mo);
      var Ao = 0,
        No = function (e, t, n, r, i) {
          if (!(this instanceof No)) return new No(e, t, n, r, i);
          null == n && (n = 0),
            xo.call(this, [new wo([new Gt("", null)])]),
            (this.first = n),
            (this.scrollTop = this.scrollLeft = 0),
            (this.cantEdit = !1),
            (this.cleanGeneration = 1),
            (this.modeFrontier = this.highlightFrontier = n);
          var o = et(n, 0);
          (this.sel = Li(o)),
            (this.history = new Di(null)),
            (this.id = ++Ao),
            (this.modeOption = t),
            (this.lineSep = r),
            (this.direction = "rtl" == i ? "rtl" : "ltr"),
            (this.extend = !1),
            "string" == typeof e && (e = this.splitLines(e)),
            Pi(this, { from: o, to: o, text: e }),
            Qi(this, Li(o), W);
        };
      (No.prototype = X(xo.prototype, {
        constructor: No,
        iter: function (e, t, n) {
          n
            ? this.iterN(e - this.first, t - e, n)
            : this.iterN(this.first, this.first + this.size, e);
        },
        insert: function (e, t) {
          for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
          this.insertInner(e - this.first, t, n);
        },
        remove: function (e, t) {
          this.removeInner(e - this.first, t);
        },
        getValue: function (e) {
          var t = Ke(this, this.first, this.first + this.size);
          return !1 === e ? t : t.join(e || this.lineSeparator());
        },
        setValue: ni(function (e) {
          var t = et(this.first, 0),
            n = this.first + this.size - 1;
          co(
            this,
            {
              from: t,
              to: et(n, Ge(this, n).text.length),
              text: this.splitLines(e),
              origin: "setValue",
              full: !0,
            },
            !0
          ),
            this.cm && _r(this.cm, 0, 0),
            Qi(this, Li(t), W);
        }),
        replaceRange: function (e, t, n, r) {
          mo(this, e, (t = st(this, t)), (n = n ? st(this, n) : t), r);
        },
        getRange: function (e, t, n) {
          var r = Ve(this, st(this, e), st(this, t));
          return !1 === n ? r : r.join(n || this.lineSeparator());
        },
        getLine: function (e) {
          var t = this.getLineHandle(e);
          return t && t.text;
        },
        getLineHandle: function (e) {
          if (Ze(this, e)) return Ge(this, e);
        },
        getLineNumber: function (e) {
          return Je(e);
        },
        getLineHandleVisualStart: function (e) {
          return "number" == typeof e && (e = Ge(this, e)), zt(e);
        },
        lineCount: function () {
          return this.size;
        },
        firstLine: function () {
          return this.first;
        },
        lastLine: function () {
          return this.first + this.size - 1;
        },
        clipPos: function (e) {
          return st(this, e);
        },
        getCursor: function (e) {
          var t = this.sel.primary();
          return null == e || "head" == e
            ? t.head
            : "anchor" == e
            ? t.anchor
            : "end" == e || "to" == e || !1 === e
            ? t.to()
            : t.from();
        },
        listSelections: function () {
          return this.sel.ranges;
        },
        somethingSelected: function () {
          return this.sel.somethingSelected();
        },
        setCursor: ni(function (e, t, n) {
          Xi(this, st(this, "number" == typeof e ? et(e, t || 0) : e), null, n);
        }),
        setSelection: ni(function (e, t, n) {
          Xi(this, st(this, e), st(this, t || e), n);
        }),
        extendSelection: ni(function (e, t, n) {
          Ki(this, st(this, e), t && st(this, t), n);
        }),
        extendSelections: ni(function (e, t) {
          Yi(this, lt(this, e), t);
        }),
        extendSelectionsBy: ni(function (e, t) {
          Yi(this, lt(this, Y(this.sel.ranges, e)), t);
        }),
        setSelections: ni(function (e, t, n) {
          if (e.length) {
            for (var r = [], i = 0; i < e.length; i++)
              r[i] = new Si(
                st(this, e[i].anchor),
                st(this, e[i].head || e[i].anchor)
              );
            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
              Qi(this, Ci(this.cm, r, t), n);
          }
        }),
        addSelection: ni(function (e, t, n) {
          var r = this.sel.ranges.slice(0);
          r.push(new Si(st(this, e), st(this, t || e))),
            Qi(this, Ci(this.cm, r, r.length - 1), n);
        }),
        getSelection: function (e) {
          for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
            var i = Ve(this, n[r].from(), n[r].to());
            t = t ? t.concat(i) : i;
          }
          return !1 === e ? t : t.join(e || this.lineSeparator());
        },
        getSelections: function (e) {
          for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
            var i = Ve(this, n[r].from(), n[r].to());
            !1 !== e && (i = i.join(e || this.lineSeparator())), (t[r] = i);
          }
          return t;
        },
        replaceSelection: function (e, t, n) {
          for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
          this.replaceSelections(r, t, n || "+input");
        },
        replaceSelections: ni(function (e, t, n) {
          for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
            var a = i.ranges[o];
            r[o] = {
              from: a.from(),
              to: a.to(),
              text: this.splitLines(e[o]),
              origin: n,
            };
          }
          for (
            var s =
                t &&
                "end" != t &&
                (function (e, t, n) {
                  for (
                    var r = [], i = et(e.first, 0), o = i, a = 0;
                    a < t.length;
                    a++
                  ) {
                    var s = t[a],
                      l = Ei(s.from, i, o),
                      c = Ei(Ti(s), i, o);
                    if (((i = s.to), (o = c), "around" == n)) {
                      var u = e.sel.ranges[a],
                        d = tt(u.head, u.anchor) < 0;
                      r[a] = new Si(d ? c : l, d ? l : c);
                    } else r[a] = new Si(l, l);
                  }
                  return new ki(r, e.sel.primIndex);
                })(this, r, t),
              l = r.length - 1;
            l >= 0;
            l--
          )
            co(this, r[l]);
          s ? Zi(this, s) : this.cm && Nr(this.cm);
        }),
        undo: ni(function () {
          fo(this, "undo");
        }),
        redo: ni(function () {
          fo(this, "redo");
        }),
        undoSelection: ni(function () {
          fo(this, "undo", !0);
        }),
        redoSelection: ni(function () {
          fo(this, "redo", !0);
        }),
        setExtending: function (e) {
          this.extend = e;
        },
        getExtending: function () {
          return this.extend;
        },
        historySize: function () {
          for (
            var e = this.history, t = 0, n = 0, r = 0;
            r < e.done.length;
            r++
          )
            e.done[r].ranges || ++t;
          for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
          return { undo: t, redo: n };
        },
        clearHistory: function () {
          var e = this;
          (this.history = new Di(this.history)),
            Ri(
              this,
              function (t) {
                return (t.history = e.history);
              },
              !0
            );
        },
        markClean: function () {
          this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function (e) {
          return (
            e &&
              (this.history.lastOp =
                this.history.lastSelOp =
                this.history.lastOrigin =
                  null),
            this.history.generation
          );
        },
        isClean: function (e) {
          return this.history.generation == (e || this.cleanGeneration);
        },
        getHistory: function () {
          return {
            done: Gi(this.history.done),
            undone: Gi(this.history.undone),
          };
        },
        setHistory: function (e) {
          var t = (this.history = new Di(this.history));
          (t.done = Gi(e.done.slice(0), null, !0)),
            (t.undone = Gi(e.undone.slice(0), null, !0));
        },
        setGutterMarker: ni(function (e, t, n) {
          return bo(this, e, "gutter", function (e) {
            var r = e.gutterMarkers || (e.gutterMarkers = {});
            return (r[t] = n), !n && te(r) && (e.gutterMarkers = null), !0;
          });
        }),
        clearGutter: ni(function (e) {
          var t = this;
          this.iter(function (n) {
            n.gutterMarkers &&
              n.gutterMarkers[e] &&
              bo(t, n, "gutter", function () {
                return (
                  (n.gutterMarkers[e] = null),
                  te(n.gutterMarkers) && (n.gutterMarkers = null),
                  !0
                );
              });
          });
        }),
        lineInfo: function (e) {
          var t;
          if ("number" == typeof e) {
            if (!Ze(this, e)) return null;
            if (((t = e), !(e = Ge(this, e)))) return null;
          } else if (null == (t = Je(e))) return null;
          return {
            line: t,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets,
          };
        },
        addLineClass: ni(function (e, t, n) {
          return bo(this, e, "gutter" == t ? "gutter" : "class", function (e) {
            var r =
              "text" == t
                ? "textClass"
                : "background" == t
                ? "bgClass"
                : "gutter" == t
                ? "gutterClass"
                : "wrapClass";
            if (e[r]) {
              if (C(n).test(e[r])) return !1;
              e[r] += " " + n;
            } else e[r] = n;
            return !0;
          });
        }),
        removeLineClass: ni(function (e, t, n) {
          return bo(this, e, "gutter" == t ? "gutter" : "class", function (e) {
            var r =
                "text" == t
                  ? "textClass"
                  : "background" == t
                  ? "bgClass"
                  : "gutter" == t
                  ? "gutterClass"
                  : "wrapClass",
              i = e[r];
            if (!i) return !1;
            if (null == n) e[r] = null;
            else {
              var o = i.match(C(n));
              if (!o) return !1;
              var a = o.index + o[0].length;
              e[r] =
                i.slice(0, o.index) +
                  (o.index && a != i.length ? " " : "") +
                  i.slice(a) || null;
            }
            return !0;
          });
        }),
        addLineWidget: ni(function (e, t, n) {
          return (function (e, t, n, r) {
            var i = new ko(e, n, r),
              o = e.cm;
            return (
              o && i.noHScroll && (o.display.alignWidgets = !0),
              bo(e, t, "widget", function (t) {
                var n = t.widgets || (t.widgets = []);
                if (
                  (null == i.insertAt
                    ? n.push(i)
                    : n.splice(
                        Math.min(n.length, Math.max(0, i.insertAt)),
                        0,
                        i
                      ),
                  (i.line = t),
                  o && !qt(e, t))
                ) {
                  var r = Ft(t) < e.scrollTop;
                  Ye(t, t.height + xn(i)),
                    r && Ar(o, i.height),
                    (o.curOp.forceUpdate = !0);
                }
                return !0;
              }),
              o &&
                ln(
                  o,
                  "lineWidgetAdded",
                  o,
                  i,
                  "number" == typeof t ? t : Je(t)
                ),
              i
            );
          })(this, e, t, n);
        }),
        removeLineWidget: function (e) {
          e.clear();
        },
        markText: function (e, t, n) {
          return To(
            this,
            st(this, e),
            st(this, t),
            n,
            (n && n.type) || "range"
          );
        },
        setBookmark: function (e, t) {
          var n = {
            replacedWith: t && (null == t.nodeType ? t.widget : t),
            insertLeft: t && t.insertLeft,
            clearWhenEmpty: !1,
            shared: t && t.shared,
            handleMouseEvents: t && t.handleMouseEvents,
          };
          return To(this, (e = st(this, e)), e, n, "bookmark");
        },
        findMarksAt: function (e) {
          var t = [],
            n = Ge(this, (e = st(this, e)).line).markedSpans;
          if (n)
            for (var r = 0; r < n.length; ++r) {
              var i = n[r];
              (null == i.from || i.from <= e.ch) &&
                (null == i.to || i.to >= e.ch) &&
                t.push(i.marker.parent || i.marker);
            }
          return t;
        },
        findMarks: function (e, t, n) {
          (e = st(this, e)), (t = st(this, t));
          var r = [],
            i = e.line;
          return (
            this.iter(e.line, t.line + 1, function (o) {
              var a = o.markedSpans;
              if (a)
                for (var s = 0; s < a.length; s++) {
                  var l = a[s];
                  (null != l.to && i == e.line && e.ch >= l.to) ||
                    (null == l.from && i != e.line) ||
                    (null != l.from && i == t.line && l.from >= t.ch) ||
                    (n && !n(l.marker)) ||
                    r.push(l.marker.parent || l.marker);
                }
              ++i;
            }),
            r
          );
        },
        getAllMarks: function () {
          var e = [];
          return (
            this.iter(function (t) {
              var n = t.markedSpans;
              if (n)
                for (var r = 0; r < n.length; ++r)
                  null != n[r].from && e.push(n[r].marker);
            }),
            e
          );
        },
        posFromIndex: function (e) {
          var t,
            n = this.first,
            r = this.lineSeparator().length;
          return (
            this.iter(function (i) {
              var o = i.text.length + r;
              if (o > e) return (t = e), !0;
              (e -= o), ++n;
            }),
            st(this, et(n, t))
          );
        },
        indexFromPos: function (e) {
          var t = (e = st(this, e)).ch;
          if (e.line < this.first || e.ch < 0) return 0;
          var n = this.lineSeparator().length;
          return (
            this.iter(this.first, e.line, function (e) {
              t += e.text.length + n;
            }),
            t
          );
        },
        copy: function (e) {
          var t = new No(
            Ke(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          );
          return (
            (t.scrollTop = this.scrollTop),
            (t.scrollLeft = this.scrollLeft),
            (t.sel = this.sel),
            (t.extend = !1),
            e &&
              ((t.history.undoDepth = this.history.undoDepth),
              t.setHistory(this.getHistory())),
            t
          );
        },
        linkedDoc: function (e) {
          e || (e = {});
          var t = this.first,
            n = this.first + this.size;
          null != e.from && e.from > t && (t = e.from),
            null != e.to && e.to < n && (n = e.to);
          var r = new No(
            Ke(this, t, n),
            e.mode || this.modeOption,
            t,
            this.lineSep,
            this.direction
          );
          return (
            e.sharedHist && (r.history = this.history),
            (this.linked || (this.linked = [])).push({
              doc: r,
              sharedHist: e.sharedHist,
            }),
            (r.linked = [
              { doc: this, isParent: !0, sharedHist: e.sharedHist },
            ]),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n],
                  i = r.find(),
                  o = e.clipPos(i.from),
                  a = e.clipPos(i.to);
                if (tt(o, a)) {
                  var s = To(e, o, a, r.primary, r.primary.type);
                  r.markers.push(s), (s.parent = r);
                }
              }
            })(r, Oo(this)),
            r
          );
        },
        unlinkDoc: function (e) {
          if ((e instanceof Ma && (e = e.doc), this.linked))
            for (var t = 0; t < this.linked.length; ++t)
              if (this.linked[t].doc == e) {
                this.linked.splice(t, 1), e.unlinkDoc(this), Eo(Oo(this));
                break;
              }
          if (e.history == this.history) {
            var n = [e.id];
            Ri(
              e,
              function (e) {
                return n.push(e.id);
              },
              !0
            ),
              (e.history = new Di(null)),
              (e.history.done = Gi(this.history.done, n)),
              (e.history.undone = Gi(this.history.undone, n));
          }
        },
        iterLinkedDocs: function (e) {
          Ri(this, e);
        },
        getMode: function () {
          return this.mode;
        },
        getEditor: function () {
          return this.cm;
        },
        splitLines: function (e) {
          return this.lineSep ? e.split(this.lineSep) : Ne(e);
        },
        lineSeparator: function () {
          return this.lineSep || "\n";
        },
        setDirection: ni(function (e) {
          var t;
          "rtl" != e && (e = "ltr"),
            e != this.direction &&
              ((this.direction = e),
              this.iter(function (e) {
                return (e.order = null);
              }),
              this.cm &&
                Qr((t = this.cm), function () {
                  Hi(t), dr(t);
                }));
        }),
      })),
        (No.prototype.eachLine = No.prototype.iter);
      var _o = 0;
      function Po(e) {
        var t = this;
        if ((Ro(t), !me(t, e) && !kn(t.display, e))) {
          be(e), a && (_o = +new Date());
          var n = cr(t, e, !0),
            r = e.dataTransfer.files;
          if (n && !t.isReadOnly())
            if (r && r.length && window.FileReader && window.File)
              for (
                var i = r.length,
                  o = Array(i),
                  s = 0,
                  l = function () {
                    ++s == i &&
                      ei(t, function () {
                        var e = {
                          from: (n = st(t.doc, n)),
                          to: n,
                          text: t.doc.splitLines(
                            o
                              .filter(function (e) {
                                return null != e;
                              })
                              .join(t.doc.lineSeparator())
                          ),
                          origin: "paste",
                        };
                        co(t.doc, e),
                          Zi(t.doc, Li(st(t.doc, n), st(t.doc, Ti(e))));
                      })();
                  },
                  c = function (e, n) {
                    if (
                      t.options.allowDropFileTypes &&
                      -1 == I(t.options.allowDropFileTypes, e.type)
                    )
                      l();
                    else {
                      var r = new FileReader();
                      (r.onerror = function () {
                        return l();
                      }),
                        (r.onload = function () {
                          var e = r.result;
                          /[\x00-\x08\x0e-\x1f]{2}/.test(e) || (o[n] = e), l();
                        }),
                        r.readAsText(e);
                    }
                  },
                  u = 0;
                u < r.length;
                u++
              )
                c(r[u], u);
            else {
              if (t.state.draggingText && t.doc.sel.contains(n) > -1)
                return (
                  t.state.draggingText(e),
                  void setTimeout(function () {
                    return t.display.input.focus();
                  }, 20)
                );
              try {
                var d = e.dataTransfer.getData("Text");
                if (d) {
                  var f;
                  if (
                    (t.state.draggingText &&
                      !t.state.draggingText.copy &&
                      (f = t.listSelections()),
                    eo(t.doc, Li(n, n)),
                    f)
                  )
                    for (var h = 0; h < f.length; ++h)
                      mo(t.doc, "", f[h].anchor, f[h].head, "drag");
                  t.replaceSelection(d, "around", "paste"),
                    t.display.input.focus();
                }
              } catch (e) {}
            }
        }
      }
      function Ro(e) {
        e.display.dragCursor &&
          (e.display.lineSpace.removeChild(e.display.dragCursor),
          (e.display.dragCursor = null));
      }
      function jo(e) {
        if (document.getElementsByClassName) {
          for (
            var t = document.getElementsByClassName("CodeMirror"),
              n = [],
              r = 0;
            r < t.length;
            r++
          ) {
            var i = t[r].CodeMirror;
            i && n.push(i);
          }
          n.length &&
            n[0].operation(function () {
              for (var t = 0; t < n.length; t++) e(n[t]);
            });
        }
      }
      var Ho = !1;
      function Do() {
        var e;
        Ho ||
          (de(window, "resize", function () {
            null == e &&
              (e = setTimeout(function () {
                (e = null), jo(zo);
              }, 100));
          }),
          de(window, "blur", function () {
            return jo(Lr);
          }),
          (Ho = !0));
      }
      function zo(e) {
        var t = e.display;
        (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
          (t.scrollbarsClipped = !1),
          e.setSize();
      }
      for (
        var Bo = {
            3: "Pause",
            8: "Backspace",
            9: "Tab",
            13: "Enter",
            16: "Shift",
            17: "Ctrl",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Esc",
            32: "Space",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "Left",
            38: "Up",
            39: "Right",
            40: "Down",
            44: "PrintScrn",
            45: "Insert",
            46: "Delete",
            59: ";",
            61: "=",
            91: "Mod",
            92: "Mod",
            93: "Mod",
            106: "*",
            107: "=",
            109: "-",
            110: ".",
            111: "/",
            145: "ScrollLock",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
            224: "Mod",
            63232: "Up",
            63233: "Down",
            63234: "Left",
            63235: "Right",
            63272: "Delete",
            63273: "Home",
            63275: "End",
            63276: "PageUp",
            63277: "PageDown",
            63302: "Insert",
          },
          Io = 0;
        Io < 10;
        Io++
      )
        Bo[Io + 48] = Bo[Io + 96] = String(Io);
      for (var qo = 65; qo <= 90; qo++) Bo[qo] = String.fromCharCode(qo);
      for (var Wo = 1; Wo <= 12; Wo++) Bo[Wo + 111] = Bo[Wo + 63235] = "F" + Wo;
      var Fo = {};
      function $o(e) {
        var t,
          n,
          r,
          i,
          o = e.split(/-(?!$)/);
        e = o[o.length - 1];
        for (var a = 0; a < o.length - 1; a++) {
          var s = o[a];
          if (/^(cmd|meta|m)$/i.test(s)) i = !0;
          else if (/^a(lt)?$/i.test(s)) t = !0;
          else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
          else {
            if (!/^s(hift)?$/i.test(s))
              throw new Error("Unrecognized modifier name: " + s);
            r = !0;
          }
        }
        return (
          t && (e = "Alt-" + e),
          n && (e = "Ctrl-" + e),
          i && (e = "Cmd-" + e),
          r && (e = "Shift-" + e),
          e
        );
      }
      function Uo(e) {
        var t = {};
        for (var n in e)
          if (e.hasOwnProperty(n)) {
            var r = e[n];
            if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
            if ("..." == r) {
              delete e[n];
              continue;
            }
            for (var i = Y(n.split(" "), $o), o = 0; o < i.length; o++) {
              var a = void 0,
                s = void 0;
              o == i.length - 1
                ? ((s = i.join(" ")), (a = r))
                : ((s = i.slice(0, o + 1).join(" ")), (a = "..."));
              var l = t[s];
              if (l) {
                if (l != a) throw new Error("Inconsistent bindings for " + s);
              } else t[s] = a;
            }
            delete e[n];
          }
        for (var c in t) e[c] = t[c];
        return e;
      }
      function Go(e, t, n, r) {
        var i = (t = Jo(t)).call ? t.call(e, r) : t[e];
        if (!1 === i) return "nothing";
        if ("..." === i) return "multi";
        if (null != i && n(i)) return "handled";
        if (t.fallthrough) {
          if ("[object Array]" != Object.prototype.toString.call(t.fallthrough))
            return Go(e, t.fallthrough, n, r);
          for (var o = 0; o < t.fallthrough.length; o++) {
            var a = Go(e, t.fallthrough[o], n, r);
            if (a) return a;
          }
        }
      }
      function Vo(e) {
        var t = "string" == typeof e ? e : Bo[e.keyCode];
        return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
      }
      function Ko(e, t, n) {
        var r = e;
        return (
          t.altKey && "Alt" != r && (e = "Alt-" + e),
          (k ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e),
          (k ? t.ctrlKey : t.metaKey) && "Mod" != r && (e = "Cmd-" + e),
          !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e),
          e
        );
      }
      function Yo(e, t) {
        if (d && 34 == e.keyCode && e.char) return !1;
        var n = Bo[e.keyCode];
        return (
          null != n &&
          !e.altGraphKey &&
          (3 == e.keyCode && e.code && (n = e.code), Ko(n, e, t))
        );
      }
      function Jo(e) {
        return "string" == typeof e ? Fo[e] : e;
      }
      function Xo(e, t) {
        for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
          for (var o = t(n[i]); r.length && tt(o.from, K(r).to) <= 0; ) {
            var a = r.pop();
            if (tt(a.from, o.from) < 0) {
              o.from = a.from;
              break;
            }
          }
          r.push(o);
        }
        Qr(e, function () {
          for (var t = r.length - 1; t >= 0; t--)
            mo(e.doc, "", r[t].from, r[t].to, "+delete");
          Nr(e);
        });
      }
      function Zo(e, t, n) {
        var r = ie(e.text, t + n, n);
        return r < 0 || r > e.text.length ? null : r;
      }
      function Qo(e, t, n) {
        var r = Zo(e, t.ch, n);
        return null == r ? null : new et(t.line, r, n < 0 ? "after" : "before");
      }
      function ea(e, t, n, r, i) {
        if (e) {
          "rtl" == t.doc.direction && (i = -i);
          var o = ce(n, t.doc.direction);
          if (o) {
            var a,
              s = i < 0 ? K(o) : o[0],
              l = i < 0 == (1 == s.level) ? "after" : "before";
            if (s.level > 0 || "rtl" == t.doc.direction) {
              var c = _n(t, n);
              a = i < 0 ? n.text.length - 1 : 0;
              var u = Pn(t, c, a).top;
              (a = oe(
                function (e) {
                  return Pn(t, c, e).top == u;
                },
                i < 0 == (1 == s.level) ? s.from : s.to - 1,
                a
              )),
                "before" == l && (a = Zo(n, a, 1));
            } else a = i < 0 ? s.to : s.from;
            return new et(r, a, l);
          }
        }
        return new et(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after");
      }
      (Fo.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection",
      }),
        (Fo.pcDefault = {
          "Ctrl-A": "selectAll",
          "Ctrl-D": "deleteLine",
          "Ctrl-Z": "undo",
          "Shift-Ctrl-Z": "redo",
          "Ctrl-Y": "redo",
          "Ctrl-Home": "goDocStart",
          "Ctrl-End": "goDocEnd",
          "Ctrl-Up": "goLineUp",
          "Ctrl-Down": "goLineDown",
          "Ctrl-Left": "goGroupLeft",
          "Ctrl-Right": "goGroupRight",
          "Alt-Left": "goLineStart",
          "Alt-Right": "goLineEnd",
          "Ctrl-Backspace": "delGroupBefore",
          "Ctrl-Delete": "delGroupAfter",
          "Ctrl-S": "save",
          "Ctrl-F": "find",
          "Ctrl-G": "findNext",
          "Shift-Ctrl-G": "findPrev",
          "Shift-Ctrl-F": "replace",
          "Shift-Ctrl-R": "replaceAll",
          "Ctrl-[": "indentLess",
          "Ctrl-]": "indentMore",
          "Ctrl-U": "undoSelection",
          "Shift-Ctrl-U": "redoSelection",
          "Alt-U": "redoSelection",
          fallthrough: "basic",
        }),
        (Fo.emacsy = {
          "Ctrl-F": "goCharRight",
          "Ctrl-B": "goCharLeft",
          "Ctrl-P": "goLineUp",
          "Ctrl-N": "goLineDown",
          "Ctrl-A": "goLineStart",
          "Ctrl-E": "goLineEnd",
          "Ctrl-V": "goPageDown",
          "Shift-Ctrl-V": "goPageUp",
          "Ctrl-D": "delCharAfter",
          "Ctrl-H": "delCharBefore",
          "Alt-Backspace": "delWordBefore",
          "Ctrl-K": "killLine",
          "Ctrl-T": "transposeChars",
          "Ctrl-O": "openLine",
        }),
        (Fo.macDefault = {
          "Cmd-A": "selectAll",
          "Cmd-D": "deleteLine",
          "Cmd-Z": "undo",
          "Shift-Cmd-Z": "redo",
          "Cmd-Y": "redo",
          "Cmd-Home": "goDocStart",
          "Cmd-Up": "goDocStart",
          "Cmd-End": "goDocEnd",
          "Cmd-Down": "goDocEnd",
          "Alt-Left": "goGroupLeft",
          "Alt-Right": "goGroupRight",
          "Cmd-Left": "goLineLeft",
          "Cmd-Right": "goLineRight",
          "Alt-Backspace": "delGroupBefore",
          "Ctrl-Alt-Backspace": "delGroupAfter",
          "Alt-Delete": "delGroupAfter",
          "Cmd-S": "save",
          "Cmd-F": "find",
          "Cmd-G": "findNext",
          "Shift-Cmd-G": "findPrev",
          "Cmd-Alt-F": "replace",
          "Shift-Cmd-Alt-F": "replaceAll",
          "Cmd-[": "indentLess",
          "Cmd-]": "indentMore",
          "Cmd-Backspace": "delWrappedLineLeft",
          "Cmd-Delete": "delWrappedLineRight",
          "Cmd-U": "undoSelection",
          "Shift-Cmd-U": "redoSelection",
          "Ctrl-Up": "goDocStart",
          "Ctrl-Down": "goDocEnd",
          fallthrough: ["basic", "emacsy"],
        }),
        (Fo.default = y ? Fo.macDefault : Fo.pcDefault);
      var ta = {
        selectAll: so,
        singleSelection: function (e) {
          return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), W);
        },
        killLine: function (e) {
          return Xo(e, function (t) {
            if (t.empty()) {
              var n = Ge(e.doc, t.head.line).text.length;
              return t.head.ch == n && t.head.line < e.lastLine()
                ? { from: t.head, to: et(t.head.line + 1, 0) }
                : { from: t.head, to: et(t.head.line, n) };
            }
            return { from: t.from(), to: t.to() };
          });
        },
        deleteLine: function (e) {
          return Xo(e, function (t) {
            return {
              from: et(t.from().line, 0),
              to: st(e.doc, et(t.to().line + 1, 0)),
            };
          });
        },
        delLineLeft: function (e) {
          return Xo(e, function (e) {
            return { from: et(e.from().line, 0), to: e.from() };
          });
        },
        delWrappedLineLeft: function (e) {
          return Xo(e, function (t) {
            var n = e.charCoords(t.head, "div").top + 5;
            return {
              from: e.coordsChar({ left: 0, top: n }, "div"),
              to: t.from(),
            };
          });
        },
        delWrappedLineRight: function (e) {
          return Xo(e, function (t) {
            var n = e.charCoords(t.head, "div").top + 5,
              r = e.coordsChar(
                { left: e.display.lineDiv.offsetWidth + 100, top: n },
                "div"
              );
            return { from: t.from(), to: r };
          });
        },
        undo: function (e) {
          return e.undo();
        },
        redo: function (e) {
          return e.redo();
        },
        undoSelection: function (e) {
          return e.undoSelection();
        },
        redoSelection: function (e) {
          return e.redoSelection();
        },
        goDocStart: function (e) {
          return e.extendSelection(et(e.firstLine(), 0));
        },
        goDocEnd: function (e) {
          return e.extendSelection(et(e.lastLine()));
        },
        goLineStart: function (e) {
          return e.extendSelectionsBy(
            function (t) {
              return na(e, t.head.line);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineStartSmart: function (e) {
          return e.extendSelectionsBy(
            function (t) {
              return ra(e, t.head);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineEnd: function (e) {
          return e.extendSelectionsBy(
            function (t) {
              return (function (e, t) {
                var n = Ge(e.doc, t),
                  r = (function (e) {
                    for (var t; (t = jt(e)); ) e = t.find(1, !0).line;
                    return e;
                  })(n);
                return r != n && (t = Je(r)), ea(!0, e, n, t, -1);
              })(e, t.head.line);
            },
            { origin: "+move", bias: -1 }
          );
        },
        goLineRight: function (e) {
          return e.extendSelectionsBy(function (t) {
            var n = e.cursorCoords(t.head, "div").top + 5;
            return e.coordsChar(
              { left: e.display.lineDiv.offsetWidth + 100, top: n },
              "div"
            );
          }, $);
        },
        goLineLeft: function (e) {
          return e.extendSelectionsBy(function (t) {
            var n = e.cursorCoords(t.head, "div").top + 5;
            return e.coordsChar({ left: 0, top: n }, "div");
          }, $);
        },
        goLineLeftSmart: function (e) {
          return e.extendSelectionsBy(function (t) {
            var n = e.cursorCoords(t.head, "div").top + 5,
              r = e.coordsChar({ left: 0, top: n }, "div");
            return r.ch < e.getLine(r.line).search(/\S/) ? ra(e, t.head) : r;
          }, $);
        },
        goLineUp: function (e) {
          return e.moveV(-1, "line");
        },
        goLineDown: function (e) {
          return e.moveV(1, "line");
        },
        goPageUp: function (e) {
          return e.moveV(-1, "page");
        },
        goPageDown: function (e) {
          return e.moveV(1, "page");
        },
        goCharLeft: function (e) {
          return e.moveH(-1, "char");
        },
        goCharRight: function (e) {
          return e.moveH(1, "char");
        },
        goColumnLeft: function (e) {
          return e.moveH(-1, "column");
        },
        goColumnRight: function (e) {
          return e.moveH(1, "column");
        },
        goWordLeft: function (e) {
          return e.moveH(-1, "word");
        },
        goGroupRight: function (e) {
          return e.moveH(1, "group");
        },
        goGroupLeft: function (e) {
          return e.moveH(-1, "group");
        },
        goWordRight: function (e) {
          return e.moveH(1, "word");
        },
        delCharBefore: function (e) {
          return e.deleteH(-1, "codepoint");
        },
        delCharAfter: function (e) {
          return e.deleteH(1, "char");
        },
        delWordBefore: function (e) {
          return e.deleteH(-1, "word");
        },
        delWordAfter: function (e) {
          return e.deleteH(1, "word");
        },
        delGroupBefore: function (e) {
          return e.deleteH(-1, "group");
        },
        delGroupAfter: function (e) {
          return e.deleteH(1, "group");
        },
        indentAuto: function (e) {
          return e.indentSelection("smart");
        },
        indentMore: function (e) {
          return e.indentSelection("add");
        },
        indentLess: function (e) {
          return e.indentSelection("subtract");
        },
        insertTab: function (e) {
          return e.replaceSelection("\t");
        },
        insertSoftTab: function (e) {
          for (
            var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0;
            i < n.length;
            i++
          ) {
            var o = n[i].from(),
              a = z(e.getLine(o.line), o.ch, r);
            t.push(V(r - (a % r)));
          }
          e.replaceSelections(t);
        },
        defaultTab: function (e) {
          e.somethingSelected()
            ? e.indentSelection("add")
            : e.execCommand("insertTab");
        },
        transposeChars: function (e) {
          return Qr(e, function () {
            for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
              if (t[r].empty()) {
                var i = t[r].head,
                  o = Ge(e.doc, i.line).text;
                if (o)
                  if (
                    (i.ch == o.length && (i = new et(i.line, i.ch - 1)),
                    i.ch > 0)
                  )
                    (i = new et(i.line, i.ch + 1)),
                      e.replaceRange(
                        o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                        et(i.line, i.ch - 2),
                        i,
                        "+transpose"
                      );
                  else if (i.line > e.doc.first) {
                    var a = Ge(e.doc, i.line - 1).text;
                    a &&
                      ((i = new et(i.line, 1)),
                      e.replaceRange(
                        o.charAt(0) +
                          e.doc.lineSeparator() +
                          a.charAt(a.length - 1),
                        et(i.line - 1, a.length - 1),
                        i,
                        "+transpose"
                      ));
                  }
                n.push(new Si(i, i));
              }
            e.setSelections(n);
          });
        },
        newlineAndIndent: function (e) {
          return Qr(e, function () {
            for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
              e.replaceRange(
                e.doc.lineSeparator(),
                t[n].anchor,
                t[n].head,
                "+input"
              );
            t = e.listSelections();
            for (var r = 0; r < t.length; r++)
              e.indentLine(t[r].from().line, null, !0);
            Nr(e);
          });
        },
        openLine: function (e) {
          return e.replaceSelection("\n", "start");
        },
        toggleOverwrite: function (e) {
          return e.toggleOverwrite();
        },
      };
      function na(e, t) {
        var n = Ge(e.doc, t),
          r = zt(n);
        return r != n && (t = Je(r)), ea(!0, e, r, t, 1);
      }
      function ra(e, t) {
        var n = na(e, t.line),
          r = Ge(e.doc, n.line),
          i = ce(r, e.doc.direction);
        if (!i || 0 == i[0].level) {
          var o = Math.max(n.ch, r.text.search(/\S/)),
            a = t.line == n.line && t.ch <= o && t.ch;
          return et(n.line, a ? 0 : o, n.sticky);
        }
        return n;
      }
      function ia(e, t, n) {
        if ("string" == typeof t && !(t = ta[t])) return !1;
        e.display.input.ensurePolled();
        var r = e.display.shift,
          i = !1;
        try {
          e.isReadOnly() && (e.state.suppressEdits = !0),
            n && (e.display.shift = !1),
            (i = t(e) != q);
        } finally {
          (e.display.shift = r), (e.state.suppressEdits = !1);
        }
        return i;
      }
      var oa = new B();
      function aa(e, t, n, r) {
        var i = e.state.keySeq;
        if (i) {
          if (Vo(t)) return "handled";
          if (
            (/\'$/.test(t)
              ? (e.state.keySeq = null)
              : oa.set(50, function () {
                  e.state.keySeq == i &&
                    ((e.state.keySeq = null), e.display.input.reset());
                }),
            sa(e, i + " " + t, n, r))
          )
            return !0;
        }
        return sa(e, t, n, r);
      }
      function sa(e, t, n, r) {
        var i = (function (e, t, n) {
          for (var r = 0; r < e.state.keyMaps.length; r++) {
            var i = Go(t, e.state.keyMaps[r], n, e);
            if (i) return i;
          }
          return (
            (e.options.extraKeys && Go(t, e.options.extraKeys, n, e)) ||
            Go(t, e.options.keyMap, n, e)
          );
        })(e, t, r);
        return (
          "multi" == i && (e.state.keySeq = t),
          "handled" == i && ln(e, "keyHandled", e, t, n),
          ("handled" != i && "multi" != i) || (be(n), xr(e)),
          !!i
        );
      }
      function la(e, t) {
        var n = Yo(t, !0);
        return (
          !!n &&
          (t.shiftKey && !e.state.keySeq
            ? aa(e, "Shift-" + n, t, function (t) {
                return ia(e, t, !0);
              }) ||
              aa(e, n, t, function (t) {
                if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion)
                  return ia(e, t);
              })
            : aa(e, n, t, function (t) {
                return ia(e, t);
              }))
        );
      }
      var ca = null;
      function ua(e) {
        var t = this;
        if (
          !(
            (e.target && e.target != t.display.input.getField()) ||
            ((t.curOp.focus = _()), me(t, e))
          )
        ) {
          a && s < 11 && 27 == e.keyCode && (e.returnValue = !1);
          var r = e.keyCode;
          t.display.shift = 16 == r || e.shiftKey;
          var i = la(t, e);
          d &&
            ((ca = i ? r : null),
            i ||
              88 != r ||
              Pe ||
              !(y ? e.metaKey : e.ctrlKey) ||
              t.replaceSelection("", null, "cut")),
            n &&
              !y &&
              !i &&
              46 == r &&
              e.shiftKey &&
              !e.ctrlKey &&
              document.execCommand &&
              document.execCommand("cut"),
            18 != r ||
              /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) ||
              (function (e) {
                var t = e.display.lineDiv;
                function n(e) {
                  (18 != e.keyCode && e.altKey) ||
                    (T(t, "CodeMirror-crosshair"),
                    he(document, "keyup", n),
                    he(document, "mouseover", n));
                }
                P(t, "CodeMirror-crosshair"),
                  de(document, "keyup", n),
                  de(document, "mouseover", n);
              })(t);
        }
      }
      function da(e) {
        16 == e.keyCode && (this.doc.sel.shift = !1), me(this, e);
      }
      function fa(e) {
        var t = this;
        if (
          !(
            (e.target && e.target != t.display.input.getField()) ||
            kn(t.display, e) ||
            me(t, e) ||
            (e.ctrlKey && !e.altKey) ||
            (y && e.metaKey)
          )
        ) {
          var n = e.keyCode,
            r = e.charCode;
          if (d && n == ca) return (ca = null), void be(e);
          if (!d || (e.which && !(e.which < 10)) || !la(t, e)) {
            var i = String.fromCharCode(null == r ? n : r);
            "\b" != i &&
              ((function (e, t, n) {
                return aa(e, "'" + n + "'", t, function (t) {
                  return ia(e, t, !0);
                });
              })(t, e, i) ||
                t.display.input.onKeyPress(e));
          }
        }
      }
      var ha,
        pa,
        ma = function (e, t, n) {
          (this.time = e), (this.pos = t), (this.button = n);
        };
      function ga(e) {
        var t = this,
          n = t.display;
        if (!(me(t, e) || (n.activeTouch && n.input.supportsTouch())))
          if ((n.input.ensurePolled(), (n.shift = e.shiftKey), kn(n, e)))
            l ||
              ((n.scroller.draggable = !1),
              setTimeout(function () {
                return (n.scroller.draggable = !0);
              }, 100));
          else if (!ba(t, e)) {
            var r = cr(t, e),
              i = Ce(e),
              o = r
                ? (function (e, t) {
                    var n = +new Date();
                    return pa && pa.compare(n, e, t)
                      ? ((ha = pa = null), "triple")
                      : ha && ha.compare(n, e, t)
                      ? ((pa = new ma(n, e, t)), (ha = null), "double")
                      : ((ha = new ma(n, e, t)), (pa = null), "single");
                  })(r, i)
                : "single";
            window.focus(),
              1 == i && t.state.selectingText && t.state.selectingText(e),
              (r &&
                (function (e, t, n, r, i) {
                  var o = "Click";
                  return (
                    "double" == r
                      ? (o = "Double" + o)
                      : "triple" == r && (o = "Triple" + o),
                    aa(
                      e,
                      Ko(
                        (o =
                          (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o),
                        i
                      ),
                      i,
                      function (t) {
                        if (("string" == typeof t && (t = ta[t]), !t))
                          return !1;
                        var r = !1;
                        try {
                          e.isReadOnly() && (e.state.suppressEdits = !0),
                            (r = t(e, n) != q);
                        } finally {
                          e.state.suppressEdits = !1;
                        }
                        return r;
                      }
                    )
                  );
                })(t, i, r, o, e)) ||
                (1 == i
                  ? r
                    ? (function (e, t, n, r) {
                        a ? setTimeout(H(kr, e), 0) : (e.curOp.focus = _());
                        var i,
                          o = (function (e, t, n) {
                            var r = e.getOption("configureMouse"),
                              i = r ? r(e, t, n) : {};
                            if (null == i.unit) {
                              var o = b ? n.shiftKey && n.metaKey : n.altKey;
                              i.unit = o
                                ? "rectangle"
                                : "single" == t
                                ? "char"
                                : "double" == t
                                ? "word"
                                : "line";
                            }
                            return (
                              (null == i.extend || e.doc.extend) &&
                                (i.extend = e.doc.extend || n.shiftKey),
                              null == i.addNew &&
                                (i.addNew = y ? n.metaKey : n.ctrlKey),
                              null == i.moveOnDrag &&
                                (i.moveOnDrag = !(y ? n.altKey : n.ctrlKey)),
                              i
                            );
                          })(e, n, r),
                          c = e.doc.sel;
                        e.options.dragDrop &&
                        Me &&
                        !e.isReadOnly() &&
                        "single" == n &&
                        (i = c.contains(t)) > -1 &&
                        (tt((i = c.ranges[i]).from(), t) < 0 || t.xRel > 0) &&
                        (tt(i.to(), t) > 0 || t.xRel < 0)
                          ? (function (e, t, n, r) {
                              var i = e.display,
                                o = !1,
                                c = ei(e, function (t) {
                                  l && (i.scroller.draggable = !1),
                                    (e.state.draggingText = !1),
                                    e.state.delayingBlurEvent &&
                                      (e.hasFocus()
                                        ? (e.state.delayingBlurEvent = !1)
                                        : Sr(e)),
                                    he(i.wrapper.ownerDocument, "mouseup", c),
                                    he(i.wrapper.ownerDocument, "mousemove", u),
                                    he(i.scroller, "dragstart", d),
                                    he(i.scroller, "drop", c),
                                    o ||
                                      (be(t),
                                      r.addNew ||
                                        Ki(e.doc, n, null, null, r.extend),
                                      (l && !f) || (a && 9 == s)
                                        ? setTimeout(function () {
                                            i.wrapper.ownerDocument.body.focus({
                                              preventScroll: !0,
                                            }),
                                              i.input.focus();
                                          }, 20)
                                        : i.input.focus());
                                }),
                                u = function (e) {
                                  o =
                                    o ||
                                    Math.abs(t.clientX - e.clientX) +
                                      Math.abs(t.clientY - e.clientY) >=
                                      10;
                                },
                                d = function () {
                                  return (o = !0);
                                };
                              l && (i.scroller.draggable = !0),
                                (e.state.draggingText = c),
                                (c.copy = !r.moveOnDrag),
                                de(i.wrapper.ownerDocument, "mouseup", c),
                                de(i.wrapper.ownerDocument, "mousemove", u),
                                de(i.scroller, "dragstart", d),
                                de(i.scroller, "drop", c),
                                (e.state.delayingBlurEvent = !0),
                                setTimeout(function () {
                                  return i.input.focus();
                                }, 20),
                                i.scroller.dragDrop && i.scroller.dragDrop();
                            })(e, r, t, o)
                          : (function (e, t, n, r) {
                              a && Sr(e);
                              var i = e.display,
                                o = e.doc;
                              be(t);
                              var s,
                                l,
                                c = o.sel,
                                u = c.ranges;
                              if (
                                (r.addNew && !r.extend
                                  ? ((l = o.sel.contains(n)),
                                    (s = l > -1 ? u[l] : new Si(n, n)))
                                  : ((s = o.sel.primary()),
                                    (l = o.sel.primIndex)),
                                "rectangle" == r.unit)
                              )
                                r.addNew || (s = new Si(n, n)),
                                  (n = cr(e, t, !0, !0)),
                                  (l = -1);
                              else {
                                var d = va(e, n, r.unit);
                                s = r.extend
                                  ? Vi(s, d.anchor, d.head, r.extend)
                                  : d;
                              }
                              r.addNew
                                ? -1 == l
                                  ? ((l = u.length),
                                    Qi(o, Ci(e, u.concat([s]), l), {
                                      scroll: !1,
                                      origin: "*mouse",
                                    }))
                                  : u.length > 1 &&
                                    u[l].empty() &&
                                    "char" == r.unit &&
                                    !r.extend
                                  ? (Qi(
                                      o,
                                      Ci(
                                        e,
                                        u.slice(0, l).concat(u.slice(l + 1)),
                                        0
                                      ),
                                      { scroll: !1, origin: "*mouse" }
                                    ),
                                    (c = o.sel))
                                  : Ji(o, l, s, F)
                                : ((l = 0),
                                  Qi(o, new ki([s], 0), F),
                                  (c = o.sel));
                              var f = n;
                              function h(t) {
                                if (0 != tt(f, t))
                                  if (((f = t), "rectangle" == r.unit)) {
                                    for (
                                      var i = [],
                                        a = e.options.tabSize,
                                        u = z(Ge(o, n.line).text, n.ch, a),
                                        d = z(Ge(o, t.line).text, t.ch, a),
                                        h = Math.min(u, d),
                                        p = Math.max(u, d),
                                        m = Math.min(n.line, t.line),
                                        g = Math.min(
                                          e.lastLine(),
                                          Math.max(n.line, t.line)
                                        );
                                      m <= g;
                                      m++
                                    ) {
                                      var v = Ge(o, m).text,
                                        y = U(v, h, a);
                                      h == p
                                        ? i.push(new Si(et(m, y), et(m, y)))
                                        : v.length > y &&
                                          i.push(
                                            new Si(et(m, y), et(m, U(v, p, a)))
                                          );
                                    }
                                    i.length || i.push(new Si(n, n)),
                                      Qi(
                                        o,
                                        Ci(
                                          e,
                                          c.ranges.slice(0, l).concat(i),
                                          l
                                        ),
                                        { origin: "*mouse", scroll: !1 }
                                      ),
                                      e.scrollIntoView(t);
                                  } else {
                                    var b,
                                      w = s,
                                      x = va(e, t, r.unit),
                                      k = w.anchor;
                                    tt(x.anchor, k) > 0
                                      ? ((b = x.head),
                                        (k = ot(w.from(), x.anchor)))
                                      : ((b = x.anchor),
                                        (k = it(w.to(), x.head)));
                                    var S = c.ranges.slice(0);
                                    (S[l] = (function (e, t) {
                                      var n = t.anchor,
                                        r = t.head,
                                        i = Ge(e.doc, n.line);
                                      if (0 == tt(n, r) && n.sticky == r.sticky)
                                        return t;
                                      var o = ce(i);
                                      if (!o) return t;
                                      var a = se(o, n.ch, n.sticky),
                                        s = o[a];
                                      if (s.from != n.ch && s.to != n.ch)
                                        return t;
                                      var l,
                                        c =
                                          a +
                                          ((s.from == n.ch) == (1 != s.level)
                                            ? 0
                                            : 1);
                                      if (0 == c || c == o.length) return t;
                                      if (r.line != n.line)
                                        l =
                                          (r.line - n.line) *
                                            ("ltr" == e.doc.direction
                                              ? 1
                                              : -1) >
                                          0;
                                      else {
                                        var u = se(o, r.ch, r.sticky),
                                          d =
                                            u - a ||
                                            (r.ch - n.ch) *
                                              (1 == s.level ? -1 : 1);
                                        l =
                                          u == c - 1 || u == c ? d < 0 : d > 0;
                                      }
                                      var f = o[c + (l ? -1 : 0)],
                                        h = l == (1 == f.level),
                                        p = h ? f.from : f.to,
                                        m = h ? "after" : "before";
                                      return n.ch == p && n.sticky == m
                                        ? t
                                        : new Si(new et(n.line, p, m), r);
                                    })(e, new Si(st(o, k), b))),
                                      Qi(o, Ci(e, S, l), F);
                                  }
                              }
                              var p = i.wrapper.getBoundingClientRect(),
                                m = 0;
                              function g(t) {
                                (e.state.selectingText = !1),
                                  (m = 1 / 0),
                                  t && (be(t), i.input.focus()),
                                  he(i.wrapper.ownerDocument, "mousemove", v),
                                  he(i.wrapper.ownerDocument, "mouseup", y),
                                  (o.history.lastSelOrigin = null);
                              }
                              var v = ei(e, function (t) {
                                  0 !== t.buttons && Ce(t)
                                    ? (function t(n) {
                                        var a = ++m,
                                          s = cr(
                                            e,
                                            n,
                                            !0,
                                            "rectangle" == r.unit
                                          );
                                        if (s)
                                          if (0 != tt(s, f)) {
                                            (e.curOp.focus = _()), h(s);
                                            var l = Or(i, o);
                                            (s.line >= l.to ||
                                              s.line < l.from) &&
                                              setTimeout(
                                                ei(e, function () {
                                                  m == a && t(n);
                                                }),
                                                150
                                              );
                                          } else {
                                            var c =
                                              n.clientY < p.top
                                                ? -20
                                                : n.clientY > p.bottom
                                                ? 20
                                                : 0;
                                            c &&
                                              setTimeout(
                                                ei(e, function () {
                                                  m == a &&
                                                    ((i.scroller.scrollTop +=
                                                      c),
                                                    t(n));
                                                }),
                                                50
                                              );
                                          }
                                      })(t)
                                    : g(t);
                                }),
                                y = ei(e, g);
                              (e.state.selectingText = y),
                                de(i.wrapper.ownerDocument, "mousemove", v),
                                de(i.wrapper.ownerDocument, "mouseup", y);
                            })(e, r, t, o);
                      })(t, r, o, e)
                    : Se(e) == n.scroller && be(e)
                  : 2 == i
                  ? (r && Ki(t.doc, r),
                    setTimeout(function () {
                      return n.input.focus();
                    }, 20))
                  : 3 == i && (S ? t.display.input.onContextMenu(e) : Sr(t)));
          }
      }
      function va(e, t, n) {
        if ("char" == n) return new Si(t, t);
        if ("word" == n) return e.findWordAt(t);
        if ("line" == n)
          return new Si(et(t.line, 0), st(e.doc, et(t.line + 1, 0)));
        var r = n(e, t);
        return new Si(r.from, r.to);
      }
      function ya(e, t, n, r) {
        var i, o;
        if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
        else
          try {
            (i = t.clientX), (o = t.clientY);
          } catch (e) {
            return !1;
          }
        if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
          return !1;
        r && be(t);
        var a = e.display,
          s = a.lineDiv.getBoundingClientRect();
        if (o > s.bottom || !ve(e, n)) return xe(t);
        o -= s.top - a.viewOffset;
        for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
          var c = a.gutters.childNodes[l];
          if (c && c.getBoundingClientRect().right >= i)
            return (
              pe(e, n, e, Xe(e.doc, o), e.display.gutterSpecs[l].className, t),
              xe(t)
            );
        }
      }
      function ba(e, t) {
        return ya(e, t, "gutterClick", !0);
      }
      function wa(e, t) {
        kn(e.display, t) ||
          (function (e, t) {
            return (
              !!ve(e, "gutterContextMenu") && ya(e, t, "gutterContextMenu", !1)
            );
          })(e, t) ||
          me(e, t, "contextmenu") ||
          S ||
          e.display.input.onContextMenu(t);
      }
      function xa(e) {
        (e.display.wrapper.className =
          e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
          e.options.theme.replace(/(^|\s)\s*/g, " cm-s-")),
          In(e);
      }
      ma.prototype.compare = function (e, t, n) {
        return this.time + 400 > e && 0 == tt(t, this.pos) && n == this.button;
      };
      var ka = {
          toString: function () {
            return "CodeMirror.Init";
          },
        },
        Sa = {},
        Ca = {};
      function La(e, t, n) {
        if (!t != !(n && n != ka)) {
          var r = e.display.dragFunctions,
            i = t ? de : he;
          i(e.display.scroller, "dragstart", r.start),
            i(e.display.scroller, "dragenter", r.enter),
            i(e.display.scroller, "dragover", r.over),
            i(e.display.scroller, "dragleave", r.leave),
            i(e.display.scroller, "drop", r.drop);
        }
      }
      function Ta(e) {
        e.options.lineWrapping
          ? (P(e.display.wrapper, "CodeMirror-wrap"),
            (e.display.sizer.style.minWidth = ""),
            (e.display.sizerWidth = null))
          : (T(e.display.wrapper, "CodeMirror-wrap"), Ut(e)),
          lr(e),
          dr(e),
          In(e),
          setTimeout(function () {
            return qr(e);
          }, 100);
      }
      function Ma(e, t) {
        var n = this;
        if (!(this instanceof Ma)) return new Ma(e, t);
        (this.options = t = t ? D(t) : {}), D(Sa, t, !1);
        var r = t.value;
        "string" == typeof r
          ? (r = new No(r, t.mode, null, t.lineSeparator, t.direction))
          : t.mode && (r.modeOption = t.mode),
          (this.doc = r);
        var i = new Ma.inputStyles[t.inputStyle](this),
          o = (this.display = new gi(e, r, i, t));
        for (var c in ((o.wrapper.CodeMirror = this),
        xa(this),
        t.lineWrapping &&
          (this.display.wrapper.className += " CodeMirror-wrap"),
        $r(this),
        (this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: -1,
          cutIncoming: -1,
          selectingText: !1,
          draggingText: !1,
          highlight: new B(),
          keySeq: null,
          specialChars: null,
        }),
        t.autofocus && !v && o.input.focus(),
        a &&
          s < 11 &&
          setTimeout(function () {
            return n.display.input.reset(!0);
          }, 20),
        (function (e) {
          var t = e.display;
          de(t.scroller, "mousedown", ei(e, ga)),
            de(
              t.scroller,
              "dblclick",
              a && s < 11
                ? ei(e, function (t) {
                    if (!me(e, t)) {
                      var n = cr(e, t);
                      if (n && !ba(e, t) && !kn(e.display, t)) {
                        be(t);
                        var r = e.findWordAt(n);
                        Ki(e.doc, r.anchor, r.head);
                      }
                    }
                  })
                : function (t) {
                    return me(e, t) || be(t);
                  }
            ),
            de(t.scroller, "contextmenu", function (t) {
              return wa(e, t);
            }),
            de(t.input.getField(), "contextmenu", function (n) {
              t.scroller.contains(n.target) || wa(e, n);
            });
          var n,
            r = { end: 0 };
          function i() {
            t.activeTouch &&
              ((n = setTimeout(function () {
                return (t.activeTouch = null);
              }, 1e3)),
              ((r = t.activeTouch).end = +new Date()));
          }
          function o(e, t) {
            if (null == t.left) return !0;
            var n = t.left - e.left,
              r = t.top - e.top;
            return n * n + r * r > 400;
          }
          de(t.scroller, "touchstart", function (i) {
            if (
              !me(e, i) &&
              !(function (e) {
                if (1 != e.touches.length) return !1;
                var t = e.touches[0];
                return t.radiusX <= 1 && t.radiusY <= 1;
              })(i) &&
              !ba(e, i)
            ) {
              t.input.ensurePolled(), clearTimeout(n);
              var o = +new Date();
              (t.activeTouch = {
                start: o,
                moved: !1,
                prev: o - r.end <= 300 ? r : null,
              }),
                1 == i.touches.length &&
                  ((t.activeTouch.left = i.touches[0].pageX),
                  (t.activeTouch.top = i.touches[0].pageY));
            }
          }),
            de(t.scroller, "touchmove", function () {
              t.activeTouch && (t.activeTouch.moved = !0);
            }),
            de(t.scroller, "touchend", function (n) {
              var r = t.activeTouch;
              if (
                r &&
                !kn(t, n) &&
                null != r.left &&
                !r.moved &&
                new Date() - r.start < 300
              ) {
                var a,
                  s = e.coordsChar(t.activeTouch, "page");
                (a =
                  !r.prev || o(r, r.prev)
                    ? new Si(s, s)
                    : !r.prev.prev || o(r, r.prev.prev)
                    ? e.findWordAt(s)
                    : new Si(et(s.line, 0), st(e.doc, et(s.line + 1, 0)))),
                  e.setSelection(a.anchor, a.head),
                  e.focus(),
                  be(n);
              }
              i();
            }),
            de(t.scroller, "touchcancel", i),
            de(t.scroller, "scroll", function () {
              t.scroller.clientHeight &&
                (jr(e, t.scroller.scrollTop),
                Dr(e, t.scroller.scrollLeft, !0),
                pe(e, "scroll", e));
            }),
            de(t.scroller, "mousewheel", function (t) {
              return xi(e, t);
            }),
            de(t.scroller, "DOMMouseScroll", function (t) {
              return xi(e, t);
            }),
            de(t.wrapper, "scroll", function () {
              return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
            }),
            (t.dragFunctions = {
              enter: function (t) {
                me(e, t) || ke(t);
              },
              over: function (t) {
                me(e, t) ||
                  ((function (e, t) {
                    var n = cr(e, t);
                    if (n) {
                      var r = document.createDocumentFragment();
                      yr(e, n, r),
                        e.display.dragCursor ||
                          ((e.display.dragCursor = E(
                            "div",
                            null,
                            "CodeMirror-cursors CodeMirror-dragcursors"
                          )),
                          e.display.lineSpace.insertBefore(
                            e.display.dragCursor,
                            e.display.cursorDiv
                          )),
                        O(e.display.dragCursor, r);
                    }
                  })(e, t),
                  ke(t));
              },
              start: function (t) {
                return (function (e, t) {
                  if (a && (!e.state.draggingText || +new Date() - _o < 100))
                    ke(t);
                  else if (
                    !me(e, t) &&
                    !kn(e.display, t) &&
                    (t.dataTransfer.setData("Text", e.getSelection()),
                    (t.dataTransfer.effectAllowed = "copyMove"),
                    t.dataTransfer.setDragImage && !f)
                  ) {
                    var n = E(
                      "img",
                      null,
                      null,
                      "position: fixed; left: 0; top: 0;"
                    );
                    (n.src =
                      "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                      d &&
                        ((n.width = n.height = 1),
                        e.display.wrapper.appendChild(n),
                        (n._top = n.offsetTop)),
                      t.dataTransfer.setDragImage(n, 0, 0),
                      d && n.parentNode.removeChild(n);
                  }
                })(e, t);
              },
              drop: ei(e, Po),
              leave: function (t) {
                me(e, t) || Ro(e);
              },
            });
          var l = t.input.getField();
          de(l, "keyup", function (t) {
            return da.call(e, t);
          }),
            de(l, "keydown", ei(e, ua)),
            de(l, "keypress", ei(e, fa)),
            de(l, "focus", function (t) {
              return Cr(e, t);
            }),
            de(l, "blur", function (t) {
              return Lr(e, t);
            });
        })(this),
        Do(),
        Gr(this),
        (this.curOp.forceUpdate = !0),
        ji(this, r),
        (t.autofocus && !v) || this.hasFocus()
          ? setTimeout(function () {
              n.hasFocus() && !n.state.focused && Cr(n);
            }, 20)
          : Lr(this),
        Ca))
          Ca.hasOwnProperty(c) && Ca[c](this, t[c], ka);
        fi(this), t.finishInit && t.finishInit(this);
        for (var u = 0; u < Oa.length; ++u) Oa[u](this);
        Vr(this),
          l &&
            t.lineWrapping &&
            "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering &&
            (o.lineDiv.style.textRendering = "auto");
      }
      (Ma.defaults = Sa), (Ma.optionHandlers = Ca);
      var Oa = [];
      function Ea(e, t, n, r) {
        var i,
          o = e.doc;
        null == n && (n = "add"),
          "smart" == n && (o.mode.indent ? (i = ht(e, t).state) : (n = "prev"));
        var a = e.options.tabSize,
          s = Ge(o, t),
          l = z(s.text, null, a);
        s.stateAfter && (s.stateAfter = null);
        var c,
          u = s.text.match(/^\s*/)[0];
        if (r || /\S/.test(s.text)) {
          if (
            "smart" == n &&
            ((c = o.mode.indent(i, s.text.slice(u.length), s.text)) == q ||
              c > 150)
          ) {
            if (!r) return;
            n = "prev";
          }
        } else (c = 0), (n = "not");
        "prev" == n
          ? (c = t > o.first ? z(Ge(o, t - 1).text, null, a) : 0)
          : "add" == n
          ? (c = l + e.options.indentUnit)
          : "subtract" == n
          ? (c = l - e.options.indentUnit)
          : "number" == typeof n && (c = l + n),
          (c = Math.max(0, c));
        var d = "",
          f = 0;
        if (e.options.indentWithTabs)
          for (var h = Math.floor(c / a); h; --h) (f += a), (d += "\t");
        if ((f < c && (d += V(c - f)), d != u))
          return (
            mo(o, d, et(t, 0), et(t, u.length), "+input"),
            (s.stateAfter = null),
            !0
          );
        for (var p = 0; p < o.sel.ranges.length; p++) {
          var m = o.sel.ranges[p];
          if (m.head.line == t && m.head.ch < u.length) {
            var g = et(t, u.length);
            Ji(o, p, new Si(g, g));
            break;
          }
        }
      }
      Ma.defineInitHook = function (e) {
        return Oa.push(e);
      };
      var Aa = null;
      function Na(e) {
        Aa = e;
      }
      function _a(e, t, n, r, i) {
        var o = e.doc;
        (e.display.shift = !1), r || (r = o.sel);
        var a = +new Date() - 200,
          s = "paste" == i || e.state.pasteIncoming > a,
          l = Ne(t),
          c = null;
        if (s && r.ranges.length > 1)
          if (Aa && Aa.text.join("\n") == t) {
            if (r.ranges.length % Aa.text.length == 0) {
              c = [];
              for (var u = 0; u < Aa.text.length; u++)
                c.push(o.splitLines(Aa.text[u]));
            }
          } else
            l.length == r.ranges.length &&
              e.options.pasteLinesPerSelection &&
              (c = Y(l, function (e) {
                return [e];
              }));
        for (
          var d = e.curOp.updateInput, f = r.ranges.length - 1;
          f >= 0;
          f--
        ) {
          var h = r.ranges[f],
            p = h.from(),
            m = h.to();
          h.empty() &&
            (n && n > 0
              ? (p = et(p.line, p.ch - n))
              : e.state.overwrite && !s
              ? (m = et(
                  m.line,
                  Math.min(Ge(o, m.line).text.length, m.ch + K(l).length)
                ))
              : s &&
                Aa &&
                Aa.lineWise &&
                Aa.text.join("\n") == l.join("\n") &&
                (p = m = et(p.line, 0)));
          var g = {
            from: p,
            to: m,
            text: c ? c[f % c.length] : l,
            origin:
              i || (s ? "paste" : e.state.cutIncoming > a ? "cut" : "+input"),
          };
          co(e.doc, g), ln(e, "inputRead", e, g);
        }
        t && !s && Ra(e, t),
          Nr(e),
          e.curOp.updateInput < 2 && (e.curOp.updateInput = d),
          (e.curOp.typing = !0),
          (e.state.pasteIncoming = e.state.cutIncoming = -1);
      }
      function Pa(e, t) {
        var n = e.clipboardData && e.clipboardData.getData("Text");
        if (n)
          return (
            e.preventDefault(),
            t.isReadOnly() ||
              t.options.disableInput ||
              Qr(t, function () {
                return _a(t, n, 0, null, "paste");
              }),
            !0
          );
      }
      function Ra(e, t) {
        if (e.options.electricChars && e.options.smartIndent)
          for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
            var i = n.ranges[r];
            if (
              !(
                i.head.ch > 100 ||
                (r && n.ranges[r - 1].head.line == i.head.line)
              )
            ) {
              var o = e.getModeAt(i.head),
                a = !1;
              if (o.electricChars) {
                for (var s = 0; s < o.electricChars.length; s++)
                  if (t.indexOf(o.electricChars.charAt(s)) > -1) {
                    a = Ea(e, i.head.line, "smart");
                    break;
                  }
              } else
                o.electricInput &&
                  o.electricInput.test(
                    Ge(e.doc, i.head.line).text.slice(0, i.head.ch)
                  ) &&
                  (a = Ea(e, i.head.line, "smart"));
              a && ln(e, "electricInput", e, i.head.line);
            }
          }
      }
      function ja(e) {
        for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
          var i = e.doc.sel.ranges[r].head.line,
            o = { anchor: et(i, 0), head: et(i + 1, 0) };
          n.push(o), t.push(e.getRange(o.anchor, o.head));
        }
        return { text: t, ranges: n };
      }
      function Ha(e, t, n, r) {
        e.setAttribute("autocorrect", n ? "" : "off"),
          e.setAttribute("autocapitalize", r ? "" : "off"),
          e.setAttribute("spellcheck", !!t);
      }
      function Da() {
        var e = E(
            "textarea",
            null,
            null,
            "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"
          ),
          t = E(
            "div",
            [e],
            null,
            "overflow: hidden; position: relative; width: 3px; height: 0px;"
          );
        return (
          l ? (e.style.width = "1000px") : e.setAttribute("wrap", "off"),
          m && (e.style.border = "1px solid black"),
          Ha(e),
          t
        );
      }
      function za(e, t, n, r, i) {
        var o = t,
          a = n,
          s = Ge(e, t.line),
          l = i && "rtl" == e.direction ? -n : n;
        function c(o) {
          var a, c;
          if ("codepoint" == r) {
            var u = s.text.charCodeAt(t.ch + (n > 0 ? 0 : -1));
            if (isNaN(u)) a = null;
            else {
              var d = n > 0 ? u >= 55296 && u < 56320 : u >= 56320 && u < 57343;
              a = new et(
                t.line,
                Math.max(0, Math.min(s.text.length, t.ch + n * (d ? 2 : 1))),
                -n
              );
            }
          } else
            a = i
              ? (function (e, t, n, r) {
                  var i = ce(t, e.doc.direction);
                  if (!i) return Qo(t, n, r);
                  n.ch >= t.text.length
                    ? ((n.ch = t.text.length), (n.sticky = "before"))
                    : n.ch <= 0 && ((n.ch = 0), (n.sticky = "after"));
                  var o = se(i, n.ch, n.sticky),
                    a = i[o];
                  if (
                    "ltr" == e.doc.direction &&
                    a.level % 2 == 0 &&
                    (r > 0 ? a.to > n.ch : a.from < n.ch)
                  )
                    return Qo(t, n, r);
                  var s,
                    l = function (e, n) {
                      return Zo(t, e instanceof et ? e.ch : e, n);
                    },
                    c = function (n) {
                      return e.options.lineWrapping
                        ? ((s = s || _n(e, t)), Zn(e, t, s, n))
                        : { begin: 0, end: t.text.length };
                    },
                    u = c("before" == n.sticky ? l(n, -1) : n.ch);
                  if ("rtl" == e.doc.direction || 1 == a.level) {
                    var d = (1 == a.level) == r < 0,
                      f = l(n, d ? 1 : -1);
                    if (
                      null != f &&
                      (d
                        ? f <= a.to && f <= u.end
                        : f >= a.from && f >= u.begin)
                    ) {
                      var h = d ? "before" : "after";
                      return new et(n.line, f, h);
                    }
                  }
                  var p = function (e, t, r) {
                      for (
                        var o = function (e, t) {
                          return t
                            ? new et(n.line, l(e, 1), "before")
                            : new et(n.line, e, "after");
                        };
                        e >= 0 && e < i.length;
                        e += t
                      ) {
                        var a = i[e],
                          s = t > 0 == (1 != a.level),
                          c = s ? r.begin : l(r.end, -1);
                        if (a.from <= c && c < a.to) return o(c, s);
                        if (
                          ((c = s ? a.from : l(a.to, -1)),
                          r.begin <= c && c < r.end)
                        )
                          return o(c, s);
                      }
                    },
                    m = p(o + r, r, u);
                  if (m) return m;
                  var g = r > 0 ? u.end : l(u.begin, -1);
                  return null == g ||
                    (r > 0 && g == t.text.length) ||
                    !(m = p(r > 0 ? 0 : i.length - 1, r, c(g)))
                    ? null
                    : m;
                })(e.cm, s, t, n)
              : Qo(s, t, n);
          if (null == a) {
            if (
              o ||
              (c = t.line + l) < e.first ||
              c >= e.first + e.size ||
              ((t = new et(c, t.ch, t.sticky)), !(s = Ge(e, c)))
            )
              return !1;
            t = ea(i, e.cm, s, t.line, l);
          } else t = a;
          return !0;
        }
        if ("char" == r || "codepoint" == r) c();
        else if ("column" == r) c(!0);
        else if ("word" == r || "group" == r)
          for (
            var u = null,
              d = "group" == r,
              f = e.cm && e.cm.getHelper(t, "wordChars"),
              h = !0;
            !(n < 0) || c(!h);
            h = !1
          ) {
            var p = s.text.charAt(t.ch) || "\n",
              m = ee(p, f)
                ? "w"
                : d && "\n" == p
                ? "n"
                : !d || /\s/.test(p)
                ? null
                : "p";
            if ((!d || h || m || (m = "s"), u && u != m)) {
              n < 0 && ((n = 1), c(), (t.sticky = "after"));
              break;
            }
            if ((m && (u = m), n > 0 && !c(!h))) break;
          }
        var g = oo(e, t, o, a, !0);
        return nt(o, g) && (g.hitSide = !0), g;
      }
      function Ba(e, t, n, r) {
        var i,
          o,
          a = e.doc,
          s = t.left;
        if ("page" == r) {
          var l = Math.min(
              e.display.wrapper.clientHeight,
              window.innerHeight || document.documentElement.clientHeight
            ),
            c = Math.max(l - 0.5 * rr(e.display), 3);
          i = (n > 0 ? t.bottom : t.top) + n * c;
        } else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
        for (; (o = Jn(e, s, i)).outside; ) {
          if (n < 0 ? i <= 0 : i >= a.height) {
            o.hitSide = !0;
            break;
          }
          i += 5 * n;
        }
        return o;
      }
      var Ia = function (e) {
        (this.cm = e),
          (this.lastAnchorNode =
            this.lastAnchorOffset =
            this.lastFocusNode =
            this.lastFocusOffset =
              null),
          (this.polling = new B()),
          (this.composing = null),
          (this.gracePeriod = !1),
          (this.readDOMTimeout = null);
      };
      function qa(e, t) {
        var n = Nn(e, t.line);
        if (!n || n.hidden) return null;
        var r = Ge(e.doc, t.line),
          i = En(n, r, t.line),
          o = ce(r, e.doc.direction),
          a = "left";
        o && (a = se(o, t.ch) % 2 ? "right" : "left");
        var s = Hn(i.map, t.ch, a);
        return (s.offset = "right" == s.collapse ? s.end : s.start), s;
      }
      function Wa(e, t) {
        return t && (e.bad = !0), e;
      }
      function Fa(e, t, n) {
        var r;
        if (t == e.display.lineDiv) {
          if (!(r = e.display.lineDiv.childNodes[n]))
            return Wa(e.clipPos(et(e.display.viewTo - 1)), !0);
          (t = null), (n = 0);
        } else
          for (r = t; ; r = r.parentNode) {
            if (!r || r == e.display.lineDiv) return null;
            if (r.parentNode && r.parentNode == e.display.lineDiv) break;
          }
        for (var i = 0; i < e.display.view.length; i++) {
          var o = e.display.view[i];
          if (o.node == r) return $a(o, t, n);
        }
      }
      function $a(e, t, n) {
        var r = e.text.firstChild,
          i = !1;
        if (!t || !N(r, t)) return Wa(et(Je(e.line), 0), !0);
        if (t == r && ((i = !0), (t = r.childNodes[n]), (n = 0), !t)) {
          var o = e.rest ? K(e.rest) : e.line;
          return Wa(et(Je(o), o.text.length), i);
        }
        var a = 3 == t.nodeType ? t : null,
          s = t;
        for (
          a ||
          1 != t.childNodes.length ||
          3 != t.firstChild.nodeType ||
          ((a = t.firstChild), n && (n = a.nodeValue.length));
          s.parentNode != r;

        )
          s = s.parentNode;
        var l = e.measure,
          c = l.maps;
        function u(t, n, r) {
          for (var i = -1; i < (c ? c.length : 0); i++)
            for (var o = i < 0 ? l.map : c[i], a = 0; a < o.length; a += 3) {
              var s = o[a + 2];
              if (s == t || s == n) {
                var u = Je(i < 0 ? e.line : e.rest[i]),
                  d = o[a] + r;
                return (r < 0 || s != t) && (d = o[a + (r ? 1 : 0)]), et(u, d);
              }
            }
        }
        var d = u(a, s, n);
        if (d) return Wa(d, i);
        for (
          var f = s.nextSibling, h = a ? a.nodeValue.length - n : 0;
          f;
          f = f.nextSibling
        ) {
          if ((d = u(f, f.firstChild, 0))) return Wa(et(d.line, d.ch - h), i);
          h += f.textContent.length;
        }
        for (var p = s.previousSibling, m = n; p; p = p.previousSibling) {
          if ((d = u(p, p.firstChild, -1))) return Wa(et(d.line, d.ch + m), i);
          m += p.textContent.length;
        }
      }
      (Ia.prototype.init = function (e) {
        var t = this,
          n = this,
          r = n.cm,
          i = (n.div = e.lineDiv);
        function o(e) {
          for (var t = e.target; t; t = t.parentNode) {
            if (t == i) return !0;
            if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break;
          }
          return !1;
        }
        function a(e) {
          if (o(e) && !me(r, e)) {
            if (r.somethingSelected())
              Na({ lineWise: !1, text: r.getSelections() }),
                "cut" == e.type && r.replaceSelection("", null, "cut");
            else {
              if (!r.options.lineWiseCopyCut) return;
              var t = ja(r);
              Na({ lineWise: !0, text: t.text }),
                "cut" == e.type &&
                  r.operation(function () {
                    r.setSelections(t.ranges, 0, W),
                      r.replaceSelection("", null, "cut");
                  });
            }
            if (e.clipboardData) {
              e.clipboardData.clearData();
              var a = Aa.text.join("\n");
              if (
                (e.clipboardData.setData("Text", a),
                e.clipboardData.getData("Text") == a)
              )
                return void e.preventDefault();
            }
            var s = Da(),
              l = s.firstChild;
            r.display.lineSpace.insertBefore(s, r.display.lineSpace.firstChild),
              (l.value = Aa.text.join("\n"));
            var c = _();
            j(l),
              setTimeout(function () {
                r.display.lineSpace.removeChild(s),
                  c.focus(),
                  c == i && n.showPrimarySelection();
              }, 50);
          }
        }
        (i.contentEditable = !0),
          Ha(
            i,
            r.options.spellcheck,
            r.options.autocorrect,
            r.options.autocapitalize
          ),
          de(i, "paste", function (e) {
            !o(e) ||
              me(r, e) ||
              Pa(e, r) ||
              (s <= 11 &&
                setTimeout(
                  ei(r, function () {
                    return t.updateFromDOM();
                  }),
                  20
                ));
          }),
          de(i, "compositionstart", function (e) {
            t.composing = { data: e.data, done: !1 };
          }),
          de(i, "compositionupdate", function (e) {
            t.composing || (t.composing = { data: e.data, done: !1 });
          }),
          de(i, "compositionend", function (e) {
            t.composing &&
              (e.data != t.composing.data && t.readFromDOMSoon(),
              (t.composing.done = !0));
          }),
          de(i, "touchstart", function () {
            return n.forceCompositionEnd();
          }),
          de(i, "input", function () {
            t.composing || t.readFromDOMSoon();
          }),
          de(i, "copy", a),
          de(i, "cut", a);
      }),
        (Ia.prototype.screenReaderLabelChanged = function (e) {
          e
            ? this.div.setAttribute("aria-label", e)
            : this.div.removeAttribute("aria-label");
        }),
        (Ia.prototype.prepareSelection = function () {
          var e = vr(this.cm, !1);
          return (e.focus = _() == this.div), e;
        }),
        (Ia.prototype.showSelection = function (e, t) {
          e &&
            this.cm.display.view.length &&
            ((e.focus || t) && this.showPrimarySelection(),
            this.showMultipleSelections(e));
        }),
        (Ia.prototype.getSelection = function () {
          return this.cm.display.wrapper.ownerDocument.getSelection();
        }),
        (Ia.prototype.showPrimarySelection = function () {
          var e = this.getSelection(),
            t = this.cm,
            r = t.doc.sel.primary(),
            i = r.from(),
            o = r.to();
          if (
            t.display.viewTo == t.display.viewFrom ||
            i.line >= t.display.viewTo ||
            o.line < t.display.viewFrom
          )
            e.removeAllRanges();
          else {
            var a = Fa(t, e.anchorNode, e.anchorOffset),
              s = Fa(t, e.focusNode, e.focusOffset);
            if (
              !a ||
              a.bad ||
              !s ||
              s.bad ||
              0 != tt(ot(a, s), i) ||
              0 != tt(it(a, s), o)
            ) {
              var l = t.display.view,
                c = (i.line >= t.display.viewFrom && qa(t, i)) || {
                  node: l[0].measure.map[2],
                  offset: 0,
                },
                u = o.line < t.display.viewTo && qa(t, o);
              if (!u) {
                var d = l[l.length - 1].measure,
                  f = d.maps ? d.maps[d.maps.length - 1] : d.map;
                u = {
                  node: f[f.length - 1],
                  offset: f[f.length - 2] - f[f.length - 3],
                };
              }
              if (c && u) {
                var h,
                  p = e.rangeCount && e.getRangeAt(0);
                try {
                  h = L(c.node, c.offset, u.offset, u.node);
                } catch (e) {}
                h &&
                  (!n && t.state.focused
                    ? (e.collapse(c.node, c.offset),
                      h.collapsed || (e.removeAllRanges(), e.addRange(h)))
                    : (e.removeAllRanges(), e.addRange(h)),
                  p && null == e.anchorNode
                    ? e.addRange(p)
                    : n && this.startGracePeriod()),
                  this.rememberSelection();
              } else e.removeAllRanges();
            }
          }
        }),
        (Ia.prototype.startGracePeriod = function () {
          var e = this;
          clearTimeout(this.gracePeriod),
            (this.gracePeriod = setTimeout(function () {
              (e.gracePeriod = !1),
                e.selectionChanged() &&
                  e.cm.operation(function () {
                    return (e.cm.curOp.selectionChanged = !0);
                  });
            }, 20));
        }),
        (Ia.prototype.showMultipleSelections = function (e) {
          O(this.cm.display.cursorDiv, e.cursors),
            O(this.cm.display.selectionDiv, e.selection);
        }),
        (Ia.prototype.rememberSelection = function () {
          var e = this.getSelection();
          (this.lastAnchorNode = e.anchorNode),
            (this.lastAnchorOffset = e.anchorOffset),
            (this.lastFocusNode = e.focusNode),
            (this.lastFocusOffset = e.focusOffset);
        }),
        (Ia.prototype.selectionInEditor = function () {
          var e = this.getSelection();
          if (!e.rangeCount) return !1;
          var t = e.getRangeAt(0).commonAncestorContainer;
          return N(this.div, t);
        }),
        (Ia.prototype.focus = function () {
          "nocursor" != this.cm.options.readOnly &&
            ((this.selectionInEditor() && _() == this.div) ||
              this.showSelection(this.prepareSelection(), !0),
            this.div.focus());
        }),
        (Ia.prototype.blur = function () {
          this.div.blur();
        }),
        (Ia.prototype.getField = function () {
          return this.div;
        }),
        (Ia.prototype.supportsTouch = function () {
          return !0;
        }),
        (Ia.prototype.receivedFocus = function () {
          var e = this;
          this.selectionInEditor()
            ? this.pollSelection()
            : Qr(this.cm, function () {
                return (e.cm.curOp.selectionChanged = !0);
              }),
            this.polling.set(this.cm.options.pollInterval, function t() {
              e.cm.state.focused &&
                (e.pollSelection(),
                e.polling.set(e.cm.options.pollInterval, t));
            });
        }),
        (Ia.prototype.selectionChanged = function () {
          var e = this.getSelection();
          return (
            e.anchorNode != this.lastAnchorNode ||
            e.anchorOffset != this.lastAnchorOffset ||
            e.focusNode != this.lastFocusNode ||
            e.focusOffset != this.lastFocusOffset
          );
        }),
        (Ia.prototype.pollSelection = function () {
          if (
            null == this.readDOMTimeout &&
            !this.gracePeriod &&
            this.selectionChanged()
          ) {
            var e = this.getSelection(),
              t = this.cm;
            if (
              g &&
              u &&
              this.cm.display.gutterSpecs.length &&
              (function (e) {
                for (var t = e; t; t = t.parentNode)
                  if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                return !1;
              })(e.anchorNode)
            )
              return (
                this.cm.triggerOnKeyDown({
                  type: "keydown",
                  keyCode: 8,
                  preventDefault: Math.abs,
                }),
                this.blur(),
                void this.focus()
              );
            if (!this.composing) {
              this.rememberSelection();
              var n = Fa(t, e.anchorNode, e.anchorOffset),
                r = Fa(t, e.focusNode, e.focusOffset);
              n &&
                r &&
                Qr(t, function () {
                  Qi(t.doc, Li(n, r), W),
                    (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
                });
            }
          }
        }),
        (Ia.prototype.pollContent = function () {
          null != this.readDOMTimeout &&
            (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
          var e,
            t,
            n,
            r = this.cm,
            i = r.display,
            o = r.doc.sel.primary(),
            a = o.from(),
            s = o.to();
          if (
            (0 == a.ch &&
              a.line > r.firstLine() &&
              (a = et(a.line - 1, Ge(r.doc, a.line - 1).length)),
            s.ch == Ge(r.doc, s.line).text.length &&
              s.line < r.lastLine() &&
              (s = et(s.line + 1, 0)),
            a.line < i.viewFrom || s.line > i.viewTo - 1)
          )
            return !1;
          a.line == i.viewFrom || 0 == (e = ur(r, a.line))
            ? ((t = Je(i.view[0].line)), (n = i.view[0].node))
            : ((t = Je(i.view[e].line)), (n = i.view[e - 1].node.nextSibling));
          var l,
            c,
            u = ur(r, s.line);
          if (
            (u == i.view.length - 1
              ? ((l = i.viewTo - 1), (c = i.lineDiv.lastChild))
              : ((l = Je(i.view[u + 1].line) - 1),
                (c = i.view[u + 1].node.previousSibling)),
            !n)
          )
            return !1;
          for (
            var d = r.doc.splitLines(
                (function (e, t, n, r, i) {
                  var o = "",
                    a = !1,
                    s = e.doc.lineSeparator(),
                    l = !1;
                  function c() {
                    a && ((o += s), l && (o += s), (a = l = !1));
                  }
                  function u(e) {
                    e && (c(), (o += e));
                  }
                  function d(t) {
                    if (1 == t.nodeType) {
                      var n = t.getAttribute("cm-text");
                      if (n) return void u(n);
                      var o,
                        f = t.getAttribute("cm-marker");
                      if (f) {
                        var h = e.findMarks(
                          et(r, 0),
                          et(i + 1, 0),
                          ((g = +f),
                          function (e) {
                            return e.id == g;
                          })
                        );
                        return void (
                          h.length &&
                          (o = h[0].find(0)) &&
                          u(Ve(e.doc, o.from, o.to).join(s))
                        );
                      }
                      if ("false" == t.getAttribute("contenteditable")) return;
                      var p = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                      if (
                        !/^br$/i.test(t.nodeName) &&
                        0 == t.textContent.length
                      )
                        return;
                      p && c();
                      for (var m = 0; m < t.childNodes.length; m++)
                        d(t.childNodes[m]);
                      /^(pre|p)$/i.test(t.nodeName) && (l = !0), p && (a = !0);
                    } else
                      3 == t.nodeType &&
                        u(
                          t.nodeValue
                            .replace(/\u200b/g, "")
                            .replace(/\u00a0/g, " ")
                        );
                    var g;
                  }
                  for (; d(t), t != n; ) (t = t.nextSibling), (l = !1);
                  return o;
                })(r, n, c, t, l)
              ),
              f = Ve(r.doc, et(t, 0), et(l, Ge(r.doc, l).text.length));
            d.length > 1 && f.length > 1;

          )
            if (K(d) == K(f)) d.pop(), f.pop(), l--;
            else {
              if (d[0] != f[0]) break;
              d.shift(), f.shift(), t++;
            }
          for (
            var h = 0,
              p = 0,
              m = d[0],
              g = f[0],
              v = Math.min(m.length, g.length);
            h < v && m.charCodeAt(h) == g.charCodeAt(h);

          )
            ++h;
          for (
            var y = K(d),
              b = K(f),
              w = Math.min(
                y.length - (1 == d.length ? h : 0),
                b.length - (1 == f.length ? h : 0)
              );
            p < w &&
            y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);

          )
            ++p;
          if (1 == d.length && 1 == f.length && t == a.line)
            for (
              ;
              h &&
              h > a.ch &&
              y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);

            )
              h--, p++;
          (d[d.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, "")),
            (d[0] = d[0].slice(h).replace(/\u200b+$/, ""));
          var x = et(t, h),
            k = et(l, f.length ? K(f).length - p : 0);
          return d.length > 1 || d[0] || tt(x, k)
            ? (mo(r.doc, d, x, k, "+input"), !0)
            : void 0;
        }),
        (Ia.prototype.ensurePolled = function () {
          this.forceCompositionEnd();
        }),
        (Ia.prototype.reset = function () {
          this.forceCompositionEnd();
        }),
        (Ia.prototype.forceCompositionEnd = function () {
          this.composing &&
            (clearTimeout(this.readDOMTimeout),
            (this.composing = null),
            this.updateFromDOM(),
            this.div.blur(),
            this.div.focus());
        }),
        (Ia.prototype.readFromDOMSoon = function () {
          var e = this;
          null == this.readDOMTimeout &&
            (this.readDOMTimeout = setTimeout(function () {
              if (((e.readDOMTimeout = null), e.composing)) {
                if (!e.composing.done) return;
                e.composing = null;
              }
              e.updateFromDOM();
            }, 80));
        }),
        (Ia.prototype.updateFromDOM = function () {
          var e = this;
          (!this.cm.isReadOnly() && this.pollContent()) ||
            Qr(this.cm, function () {
              return dr(e.cm);
            });
        }),
        (Ia.prototype.setUneditable = function (e) {
          e.contentEditable = "false";
        }),
        (Ia.prototype.onKeyPress = function (e) {
          0 == e.charCode ||
            this.composing ||
            (e.preventDefault(),
            this.cm.isReadOnly() ||
              ei(this.cm, _a)(
                this.cm,
                String.fromCharCode(
                  null == e.charCode ? e.keyCode : e.charCode
                ),
                0
              ));
        }),
        (Ia.prototype.readOnlyChanged = function (e) {
          this.div.contentEditable = String("nocursor" != e);
        }),
        (Ia.prototype.onContextMenu = function () {}),
        (Ia.prototype.resetPosition = function () {}),
        (Ia.prototype.needsContentAttribute = !0);
      var Ua = function (e) {
        (this.cm = e),
          (this.prevInput = ""),
          (this.pollingFast = !1),
          (this.polling = new B()),
          (this.hasSelection = !1),
          (this.composing = null);
      };
      (Ua.prototype.init = function (e) {
        var t = this,
          n = this,
          r = this.cm;
        this.createField(e);
        var i = this.textarea;
        function o(e) {
          if (!me(r, e)) {
            if (r.somethingSelected())
              Na({ lineWise: !1, text: r.getSelections() });
            else {
              if (!r.options.lineWiseCopyCut) return;
              var t = ja(r);
              Na({ lineWise: !0, text: t.text }),
                "cut" == e.type
                  ? r.setSelections(t.ranges, null, W)
                  : ((n.prevInput = ""), (i.value = t.text.join("\n")), j(i));
            }
            "cut" == e.type && (r.state.cutIncoming = +new Date());
          }
        }
        e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
          m && (i.style.width = "0px"),
          de(i, "input", function () {
            a && s >= 9 && t.hasSelection && (t.hasSelection = null), n.poll();
          }),
          de(i, "paste", function (e) {
            me(r, e) ||
              Pa(e, r) ||
              ((r.state.pasteIncoming = +new Date()), n.fastPoll());
          }),
          de(i, "cut", o),
          de(i, "copy", o),
          de(e.scroller, "paste", function (t) {
            if (!kn(e, t) && !me(r, t)) {
              if (!i.dispatchEvent)
                return (r.state.pasteIncoming = +new Date()), void n.focus();
              var o = new Event("paste");
              (o.clipboardData = t.clipboardData), i.dispatchEvent(o);
            }
          }),
          de(e.lineSpace, "selectstart", function (t) {
            kn(e, t) || be(t);
          }),
          de(i, "compositionstart", function () {
            var e = r.getCursor("from");
            n.composing && n.composing.range.clear(),
              (n.composing = {
                start: e,
                range: r.markText(e, r.getCursor("to"), {
                  className: "CodeMirror-composing",
                }),
              });
          }),
          de(i, "compositionend", function () {
            n.composing &&
              (n.poll(), n.composing.range.clear(), (n.composing = null));
          });
      }),
        (Ua.prototype.createField = function (e) {
          (this.wrapper = Da()), (this.textarea = this.wrapper.firstChild);
        }),
        (Ua.prototype.screenReaderLabelChanged = function (e) {
          e
            ? this.textarea.setAttribute("aria-label", e)
            : this.textarea.removeAttribute("aria-label");
        }),
        (Ua.prototype.prepareSelection = function () {
          var e = this.cm,
            t = e.display,
            n = e.doc,
            r = vr(e);
          if (e.options.moveInputWithCursor) {
            var i = Vn(e, n.sel.primary().head, "div"),
              o = t.wrapper.getBoundingClientRect(),
              a = t.lineDiv.getBoundingClientRect();
            (r.teTop = Math.max(
              0,
              Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)
            )),
              (r.teLeft = Math.max(
                0,
                Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left)
              ));
          }
          return r;
        }),
        (Ua.prototype.showSelection = function (e) {
          var t = this.cm.display;
          O(t.cursorDiv, e.cursors),
            O(t.selectionDiv, e.selection),
            null != e.teTop &&
              ((this.wrapper.style.top = e.teTop + "px"),
              (this.wrapper.style.left = e.teLeft + "px"));
        }),
        (Ua.prototype.reset = function (e) {
          if (!this.contextMenuPending && !this.composing) {
            var t = this.cm;
            if (t.somethingSelected()) {
              this.prevInput = "";
              var n = t.getSelection();
              (this.textarea.value = n),
                t.state.focused && j(this.textarea),
                a && s >= 9 && (this.hasSelection = n);
            } else
              e ||
                ((this.prevInput = this.textarea.value = ""),
                a && s >= 9 && (this.hasSelection = null));
          }
        }),
        (Ua.prototype.getField = function () {
          return this.textarea;
        }),
        (Ua.prototype.supportsTouch = function () {
          return !1;
        }),
        (Ua.prototype.focus = function () {
          if (
            "nocursor" != this.cm.options.readOnly &&
            (!v || _() != this.textarea)
          )
            try {
              this.textarea.focus();
            } catch (e) {}
        }),
        (Ua.prototype.blur = function () {
          this.textarea.blur();
        }),
        (Ua.prototype.resetPosition = function () {
          this.wrapper.style.top = this.wrapper.style.left = 0;
        }),
        (Ua.prototype.receivedFocus = function () {
          this.slowPoll();
        }),
        (Ua.prototype.slowPoll = function () {
          var e = this;
          this.pollingFast ||
            this.polling.set(this.cm.options.pollInterval, function () {
              e.poll(), e.cm.state.focused && e.slowPoll();
            });
        }),
        (Ua.prototype.fastPoll = function () {
          var e = !1,
            t = this;
          (t.pollingFast = !0),
            t.polling.set(20, function n() {
              t.poll() || e
                ? ((t.pollingFast = !1), t.slowPoll())
                : ((e = !0), t.polling.set(60, n));
            });
        }),
        (Ua.prototype.poll = function () {
          var e = this,
            t = this.cm,
            n = this.textarea,
            r = this.prevInput;
          if (
            this.contextMenuPending ||
            !t.state.focused ||
            (_e(n) && !r && !this.composing) ||
            t.isReadOnly() ||
            t.options.disableInput ||
            t.state.keySeq
          )
            return !1;
          var i = n.value;
          if (i == r && !t.somethingSelected()) return !1;
          if (
            (a && s >= 9 && this.hasSelection === i) ||
            (y && /[\uf700-\uf7ff]/.test(i))
          )
            return t.display.input.reset(), !1;
          if (t.doc.sel == t.display.selForContextMenu) {
            var o = i.charCodeAt(0);
            if ((8203 != o || r || (r = "​"), 8666 == o))
              return this.reset(), this.cm.execCommand("undo");
          }
          for (
            var l = 0, c = Math.min(r.length, i.length);
            l < c && r.charCodeAt(l) == i.charCodeAt(l);

          )
            ++l;
          return (
            Qr(t, function () {
              _a(
                t,
                i.slice(l),
                r.length - l,
                null,
                e.composing ? "*compose" : null
              ),
                i.length > 1e3 || i.indexOf("\n") > -1
                  ? (n.value = e.prevInput = "")
                  : (e.prevInput = i),
                e.composing &&
                  (e.composing.range.clear(),
                  (e.composing.range = t.markText(
                    e.composing.start,
                    t.getCursor("to"),
                    { className: "CodeMirror-composing" }
                  )));
            }),
            !0
          );
        }),
        (Ua.prototype.ensurePolled = function () {
          this.pollingFast && this.poll() && (this.pollingFast = !1);
        }),
        (Ua.prototype.onKeyPress = function () {
          a && s >= 9 && (this.hasSelection = null), this.fastPoll();
        }),
        (Ua.prototype.onContextMenu = function (e) {
          var t = this,
            n = t.cm,
            r = n.display,
            i = t.textarea;
          t.contextMenuPending && t.contextMenuPending();
          var o = cr(n, e),
            c = r.scroller.scrollTop;
          if (o && !d) {
            n.options.resetSelectionOnContextMenu &&
              -1 == n.doc.sel.contains(o) &&
              ei(n, Qi)(n.doc, Li(o), W);
            var u,
              f = i.style.cssText,
              h = t.wrapper.style.cssText,
              p = t.wrapper.offsetParent.getBoundingClientRect();
            if (
              ((t.wrapper.style.cssText = "position: static"),
              (i.style.cssText =
                "position: absolute; width: 30px; height: 30px;\n      top: " +
                (e.clientY - p.top - 5) +
                "px; left: " +
                (e.clientX - p.left - 5) +
                "px;\n      z-index: 1000; background: " +
                (a ? "rgba(255, 255, 255, .05)" : "transparent") +
                ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"),
              l && (u = window.scrollY),
              r.input.focus(),
              l && window.scrollTo(null, u),
              r.input.reset(),
              n.somethingSelected() || (i.value = t.prevInput = " "),
              (t.contextMenuPending = v),
              (r.selForContextMenu = n.doc.sel),
              clearTimeout(r.detectingSelectAll),
              a && s >= 9 && g(),
              S)
            ) {
              ke(e);
              var m = function () {
                he(window, "mouseup", m), setTimeout(v, 20);
              };
              de(window, "mouseup", m);
            } else setTimeout(v, 50);
          }
          function g() {
            if (null != i.selectionStart) {
              var e = n.somethingSelected(),
                o = "​" + (e ? i.value : "");
              (i.value = "⇚"),
                (i.value = o),
                (t.prevInput = e ? "" : "​"),
                (i.selectionStart = 1),
                (i.selectionEnd = o.length),
                (r.selForContextMenu = n.doc.sel);
            }
          }
          function v() {
            if (
              t.contextMenuPending == v &&
              ((t.contextMenuPending = !1),
              (t.wrapper.style.cssText = h),
              (i.style.cssText = f),
              a &&
                s < 9 &&
                r.scrollbars.setScrollTop((r.scroller.scrollTop = c)),
              null != i.selectionStart)
            ) {
              (!a || (a && s < 9)) && g();
              var e = 0,
                o = function () {
                  r.selForContextMenu == n.doc.sel &&
                  0 == i.selectionStart &&
                  i.selectionEnd > 0 &&
                  "​" == t.prevInput
                    ? ei(n, so)(n)
                    : e++ < 10
                    ? (r.detectingSelectAll = setTimeout(o, 500))
                    : ((r.selForContextMenu = null), r.input.reset());
                };
              r.detectingSelectAll = setTimeout(o, 200);
            }
          }
        }),
        (Ua.prototype.readOnlyChanged = function (e) {
          e || this.reset(),
            (this.textarea.disabled = "nocursor" == e),
            (this.textarea.readOnly = !!e);
        }),
        (Ua.prototype.setUneditable = function () {}),
        (Ua.prototype.needsContentAttribute = !1),
        (function (e) {
          var t = e.optionHandlers;
          function n(n, r, i, o) {
            (e.defaults[n] = r),
              i &&
                (t[n] = o
                  ? function (e, t, n) {
                      n != ka && i(e, t, n);
                    }
                  : i);
          }
          (e.defineOption = n),
            (e.Init = ka),
            n(
              "value",
              "",
              function (e, t) {
                return e.setValue(t);
              },
              !0
            ),
            n(
              "mode",
              null,
              function (e, t) {
                (e.doc.modeOption = t), Ai(e);
              },
              !0
            ),
            n("indentUnit", 2, Ai, !0),
            n("indentWithTabs", !1),
            n("smartIndent", !0),
            n(
              "tabSize",
              4,
              function (e) {
                Ni(e), In(e), dr(e);
              },
              !0
            ),
            n("lineSeparator", null, function (e, t) {
              if (((e.doc.lineSep = t), t)) {
                var n = [],
                  r = e.doc.first;
                e.doc.iter(function (e) {
                  for (var i = 0; ; ) {
                    var o = e.text.indexOf(t, i);
                    if (-1 == o) break;
                    (i = o + t.length), n.push(et(r, o));
                  }
                  r++;
                });
                for (var i = n.length - 1; i >= 0; i--)
                  mo(e.doc, t, n[i], et(n[i].line, n[i].ch + t.length));
              }
            }),
            n(
              "specialChars",
              /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
              function (e, t, n) {
                (e.state.specialChars = new RegExp(
                  t.source + (t.test("\t") ? "" : "|\t"),
                  "g"
                )),
                  n != ka && e.refresh();
              }
            ),
            n(
              "specialCharPlaceholder",
              Zt,
              function (e) {
                return e.refresh();
              },
              !0
            ),
            n("electricChars", !0),
            n(
              "inputStyle",
              v ? "contenteditable" : "textarea",
              function () {
                throw new Error(
                  "inputStyle can not (yet) be changed in a running editor"
                );
              },
              !0
            ),
            n(
              "spellcheck",
              !1,
              function (e, t) {
                return (e.getInputField().spellcheck = t);
              },
              !0
            ),
            n(
              "autocorrect",
              !1,
              function (e, t) {
                return (e.getInputField().autocorrect = t);
              },
              !0
            ),
            n(
              "autocapitalize",
              !1,
              function (e, t) {
                return (e.getInputField().autocapitalize = t);
              },
              !0
            ),
            n("rtlMoveVisually", !w),
            n("wholeLineUpdateBefore", !0),
            n(
              "theme",
              "default",
              function (e) {
                xa(e), mi(e);
              },
              !0
            ),
            n("keyMap", "default", function (e, t, n) {
              var r = Jo(t),
                i = n != ka && Jo(n);
              i && i.detach && i.detach(e, r),
                r.attach && r.attach(e, i || null);
            }),
            n("extraKeys", null),
            n("configureMouse", null),
            n("lineWrapping", !1, Ta, !0),
            n(
              "gutters",
              [],
              function (e, t) {
                (e.display.gutterSpecs = hi(t, e.options.lineNumbers)), mi(e);
              },
              !0
            ),
            n(
              "fixedGutter",
              !0,
              function (e, t) {
                (e.display.gutters.style.left = t ? ar(e.display) + "px" : "0"),
                  e.refresh();
              },
              !0
            ),
            n(
              "coverGutterNextToScrollbar",
              !1,
              function (e) {
                return qr(e);
              },
              !0
            ),
            n(
              "scrollbarStyle",
              "native",
              function (e) {
                $r(e),
                  qr(e),
                  e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                  e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
              },
              !0
            ),
            n(
              "lineNumbers",
              !1,
              function (e, t) {
                (e.display.gutterSpecs = hi(e.options.gutters, t)), mi(e);
              },
              !0
            ),
            n("firstLineNumber", 1, mi, !0),
            n(
              "lineNumberFormatter",
              function (e) {
                return e;
              },
              mi,
              !0
            ),
            n("showCursorWhenSelecting", !1, gr, !0),
            n("resetSelectionOnContextMenu", !0),
            n("lineWiseCopyCut", !0),
            n("pasteLinesPerSelection", !0),
            n("selectionsMayTouch", !1),
            n("readOnly", !1, function (e, t) {
              "nocursor" == t && (Lr(e), e.display.input.blur()),
                e.display.input.readOnlyChanged(t);
            }),
            n("screenReaderLabel", null, function (e, t) {
              (t = "" === t ? null : t),
                e.display.input.screenReaderLabelChanged(t);
            }),
            n(
              "disableInput",
              !1,
              function (e, t) {
                t || e.display.input.reset();
              },
              !0
            ),
            n("dragDrop", !0, La),
            n("allowDropFileTypes", null),
            n("cursorBlinkRate", 530),
            n("cursorScrollMargin", 0),
            n("cursorHeight", 1, gr, !0),
            n("singleCursorHeightPerLine", !0, gr, !0),
            n("workTime", 100),
            n("workDelay", 100),
            n("flattenSpans", !0, Ni, !0),
            n("addModeClass", !1, Ni, !0),
            n("pollInterval", 100),
            n("undoDepth", 200, function (e, t) {
              return (e.doc.history.undoDepth = t);
            }),
            n("historyEventDelay", 1250),
            n(
              "viewportMargin",
              10,
              function (e) {
                return e.refresh();
              },
              !0
            ),
            n("maxHighlightLength", 1e4, Ni, !0),
            n("moveInputWithCursor", !0, function (e, t) {
              t || e.display.input.resetPosition();
            }),
            n("tabindex", null, function (e, t) {
              return (e.display.input.getField().tabIndex = t || "");
            }),
            n("autofocus", null),
            n(
              "direction",
              "ltr",
              function (e, t) {
                return e.doc.setDirection(t);
              },
              !0
            ),
            n("phrases", null);
        })(Ma),
        (function (e) {
          var t = e.optionHandlers,
            n = (e.helpers = {});
          (e.prototype = {
            constructor: e,
            focus: function () {
              window.focus(), this.display.input.focus();
            },
            setOption: function (e, n) {
              var r = this.options,
                i = r[e];
              (r[e] == n && "mode" != e) ||
                ((r[e] = n),
                t.hasOwnProperty(e) && ei(this, t[e])(this, n, i),
                pe(this, "optionChange", this, e));
            },
            getOption: function (e) {
              return this.options[e];
            },
            getDoc: function () {
              return this.doc;
            },
            addKeyMap: function (e, t) {
              this.state.keyMaps[t ? "push" : "unshift"](Jo(e));
            },
            removeKeyMap: function (e) {
              for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
                if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
            },
            addOverlay: ti(function (t, n) {
              var r = t.token ? t : e.getMode(this.options, t);
              if (r.startState)
                throw new Error("Overlays may not be stateful.");
              !(function (e, t, n) {
                for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; ) r++;
                e.splice(r, 0, t);
              })(
                this.state.overlays,
                {
                  mode: r,
                  modeSpec: t,
                  opaque: n && n.opaque,
                  priority: (n && n.priority) || 0,
                },
                function (e) {
                  return e.priority;
                }
              ),
                this.state.modeGen++,
                dr(this);
            }),
            removeOverlay: ti(function (e) {
              for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                var r = t[n].modeSpec;
                if (r == e || ("string" == typeof e && r.name == e))
                  return t.splice(n, 1), this.state.modeGen++, void dr(this);
              }
            }),
            indentLine: ti(function (e, t, n) {
              "string" != typeof t &&
                "number" != typeof t &&
                (t =
                  null == t
                    ? this.options.smartIndent
                      ? "smart"
                      : "prev"
                    : t
                    ? "add"
                    : "subtract"),
                Ze(this.doc, e) && Ea(this, e, t, n);
            }),
            indentSelection: ti(function (e) {
              for (
                var t = this.doc.sel.ranges, n = -1, r = 0;
                r < t.length;
                r++
              ) {
                var i = t[r];
                if (i.empty())
                  i.head.line > n &&
                    (Ea(this, i.head.line, e, !0),
                    (n = i.head.line),
                    r == this.doc.sel.primIndex && Nr(this));
                else {
                  var o = i.from(),
                    a = i.to(),
                    s = Math.max(n, o.line);
                  n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                  for (var l = s; l < n; ++l) Ea(this, l, e);
                  var c = this.doc.sel.ranges;
                  0 == o.ch &&
                    t.length == c.length &&
                    c[r].from().ch > 0 &&
                    Ji(this.doc, r, new Si(o, c[r].to()), W);
                }
              }
            }),
            getTokenAt: function (e, t) {
              return yt(this, e, t);
            },
            getLineTokens: function (e, t) {
              return yt(this, et(e), t, !0);
            },
            getTokenTypeAt: function (e) {
              e = st(this.doc, e);
              var t,
                n = ft(this, Ge(this.doc, e.line)),
                r = 0,
                i = (n.length - 1) / 2,
                o = e.ch;
              if (0 == o) t = n[2];
              else
                for (;;) {
                  var a = (r + i) >> 1;
                  if ((a ? n[2 * a - 1] : 0) >= o) i = a;
                  else {
                    if (!(n[2 * a + 1] < o)) {
                      t = n[2 * a + 2];
                      break;
                    }
                    r = a + 1;
                  }
                }
              var s = t ? t.indexOf("overlay ") : -1;
              return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1);
            },
            getModeAt: function (t) {
              var n = this.doc.mode;
              return n.innerMode
                ? e.innerMode(n, this.getTokenAt(t).state).mode
                : n;
            },
            getHelper: function (e, t) {
              return this.getHelpers(e, t)[0];
            },
            getHelpers: function (e, t) {
              var r = [];
              if (!n.hasOwnProperty(t)) return r;
              var i = n[t],
                o = this.getModeAt(e);
              if ("string" == typeof o[t]) i[o[t]] && r.push(i[o[t]]);
              else if (o[t])
                for (var a = 0; a < o[t].length; a++) {
                  var s = i[o[t][a]];
                  s && r.push(s);
                }
              else
                o.helperType && i[o.helperType]
                  ? r.push(i[o.helperType])
                  : i[o.name] && r.push(i[o.name]);
              for (var l = 0; l < i._global.length; l++) {
                var c = i._global[l];
                c.pred(o, this) && -1 == I(r, c.val) && r.push(c.val);
              }
              return r;
            },
            getStateAfter: function (e, t) {
              var n = this.doc;
              return ht(
                this,
                (e = at(n, null == e ? n.first + n.size - 1 : e)) + 1,
                t
              ).state;
            },
            cursorCoords: function (e, t) {
              var n = this.doc.sel.primary();
              return Vn(
                this,
                null == e
                  ? n.head
                  : "object" == typeof e
                  ? st(this.doc, e)
                  : e
                  ? n.from()
                  : n.to(),
                t || "page"
              );
            },
            charCoords: function (e, t) {
              return Gn(this, st(this.doc, e), t || "page");
            },
            coordsChar: function (e, t) {
              return Jn(this, (e = Un(this, e, t || "page")).left, e.top);
            },
            lineAtHeight: function (e, t) {
              return (
                (e = Un(this, { top: e, left: 0 }, t || "page").top),
                Xe(this.doc, e + this.display.viewOffset)
              );
            },
            heightAtLine: function (e, t, n) {
              var r,
                i = !1;
              if ("number" == typeof e) {
                var o = this.doc.first + this.doc.size - 1;
                e < this.doc.first
                  ? (e = this.doc.first)
                  : e > o && ((e = o), (i = !0)),
                  (r = Ge(this.doc, e));
              } else r = e;
              return (
                $n(this, r, { top: 0, left: 0 }, t || "page", n || i).top +
                (i ? this.doc.height - Ft(r) : 0)
              );
            },
            defaultTextHeight: function () {
              return rr(this.display);
            },
            defaultCharWidth: function () {
              return ir(this.display);
            },
            getViewport: function () {
              return { from: this.display.viewFrom, to: this.display.viewTo };
            },
            addWidget: function (e, t, n, r, i) {
              var o,
                a,
                s,
                l = this.display,
                c = (e = Vn(this, st(this.doc, e))).bottom,
                u = e.left;
              if (
                ((t.style.position = "absolute"),
                t.setAttribute("cm-ignore-events", "true"),
                this.display.input.setUneditable(t),
                l.sizer.appendChild(t),
                "over" == r)
              )
                c = e.top;
              else if ("above" == r || "near" == r) {
                var d = Math.max(l.wrapper.clientHeight, this.doc.height),
                  f = Math.max(l.sizer.clientWidth, l.lineSpace.clientWidth);
                ("above" == r || e.bottom + t.offsetHeight > d) &&
                e.top > t.offsetHeight
                  ? (c = e.top - t.offsetHeight)
                  : e.bottom + t.offsetHeight <= d && (c = e.bottom),
                  u + t.offsetWidth > f && (u = f - t.offsetWidth);
              }
              (t.style.top = c + "px"),
                (t.style.left = t.style.right = ""),
                "right" == i
                  ? ((u = l.sizer.clientWidth - t.offsetWidth),
                    (t.style.right = "0px"))
                  : ("left" == i
                      ? (u = 0)
                      : "middle" == i &&
                        (u = (l.sizer.clientWidth - t.offsetWidth) / 2),
                    (t.style.left = u + "px")),
                n &&
                  ((o = this),
                  (a = {
                    left: u,
                    top: c,
                    right: u + t.offsetWidth,
                    bottom: c + t.offsetHeight,
                  }),
                  null != (s = Er(o, a)).scrollTop && jr(o, s.scrollTop),
                  null != s.scrollLeft && Dr(o, s.scrollLeft));
            },
            triggerOnKeyDown: ti(ua),
            triggerOnKeyPress: ti(fa),
            triggerOnKeyUp: da,
            triggerOnMouseDown: ti(ga),
            execCommand: function (e) {
              if (ta.hasOwnProperty(e)) return ta[e].call(null, this);
            },
            triggerElectric: ti(function (e) {
              Ra(this, e);
            }),
            findPosH: function (e, t, n, r) {
              var i = 1;
              t < 0 && ((i = -1), (t = -t));
              for (
                var o = st(this.doc, e), a = 0;
                a < t && !(o = za(this.doc, o, i, n, r)).hitSide;
                ++a
              );
              return o;
            },
            moveH: ti(function (e, t) {
              var n = this;
              this.extendSelectionsBy(function (r) {
                return n.display.shift || n.doc.extend || r.empty()
                  ? za(n.doc, r.head, e, t, n.options.rtlMoveVisually)
                  : e < 0
                  ? r.from()
                  : r.to();
              }, $);
            }),
            deleteH: ti(function (e, t) {
              var n = this.doc.sel,
                r = this.doc;
              n.somethingSelected()
                ? r.replaceSelection("", null, "+delete")
                : Xo(this, function (n) {
                    var i = za(r, n.head, e, t, !1);
                    return e < 0
                      ? { from: i, to: n.head }
                      : { from: n.head, to: i };
                  });
            }),
            findPosV: function (e, t, n, r) {
              var i = 1,
                o = r;
              t < 0 && ((i = -1), (t = -t));
              for (var a = st(this.doc, e), s = 0; s < t; ++s) {
                var l = Vn(this, a, "div");
                if (
                  (null == o ? (o = l.left) : (l.left = o),
                  (a = Ba(this, l, i, n)).hitSide)
                )
                  break;
              }
              return a;
            },
            moveV: ti(function (e, t) {
              var n = this,
                r = this.doc,
                i = [],
                o =
                  !this.display.shift && !r.extend && r.sel.somethingSelected();
              if (
                (r.extendSelectionsBy(function (a) {
                  if (o) return e < 0 ? a.from() : a.to();
                  var s = Vn(n, a.head, "div");
                  null != a.goalColumn && (s.left = a.goalColumn),
                    i.push(s.left);
                  var l = Ba(n, s, e, t);
                  return (
                    "page" == t &&
                      a == r.sel.primary() &&
                      Ar(n, Gn(n, l, "div").top - s.top),
                    l
                  );
                }, $),
                i.length)
              )
                for (var a = 0; a < r.sel.ranges.length; a++)
                  r.sel.ranges[a].goalColumn = i[a];
            }),
            findWordAt: function (e) {
              var t = Ge(this.doc, e.line).text,
                n = e.ch,
                r = e.ch;
              if (t) {
                var i = this.getHelper(e, "wordChars");
                ("before" != e.sticky && r != t.length) || !n ? ++r : --n;
                for (
                  var o = t.charAt(n),
                    a = ee(o, i)
                      ? function (e) {
                          return ee(e, i);
                        }
                      : /\s/.test(o)
                      ? function (e) {
                          return /\s/.test(e);
                        }
                      : function (e) {
                          return !/\s/.test(e) && !ee(e);
                        };
                  n > 0 && a(t.charAt(n - 1));

                )
                  --n;
                for (; r < t.length && a(t.charAt(r)); ) ++r;
              }
              return new Si(et(e.line, n), et(e.line, r));
            },
            toggleOverwrite: function (e) {
              (null != e && e == this.state.overwrite) ||
                ((this.state.overwrite = !this.state.overwrite)
                  ? P(this.display.cursorDiv, "CodeMirror-overwrite")
                  : T(this.display.cursorDiv, "CodeMirror-overwrite"),
                pe(this, "overwriteToggle", this, this.state.overwrite));
            },
            hasFocus: function () {
              return this.display.input.getField() == _();
            },
            isReadOnly: function () {
              return !(!this.options.readOnly && !this.doc.cantEdit);
            },
            scrollTo: ti(function (e, t) {
              _r(this, e, t);
            }),
            getScrollInfo: function () {
              var e = this.display.scroller;
              return {
                left: e.scrollLeft,
                top: e.scrollTop,
                height: e.scrollHeight - Tn(this) - this.display.barHeight,
                width: e.scrollWidth - Tn(this) - this.display.barWidth,
                clientHeight: On(this),
                clientWidth: Mn(this),
              };
            },
            scrollIntoView: ti(function (e, t) {
              null == e
                ? ((e = { from: this.doc.sel.primary().head, to: null }),
                  null == t && (t = this.options.cursorScrollMargin))
                : "number" == typeof e
                ? (e = { from: et(e, 0), to: null })
                : null == e.from && (e = { from: e, to: null }),
                e.to || (e.to = e.from),
                (e.margin = t || 0),
                null != e.from.line
                  ? (function (e, t) {
                      Pr(e), (e.curOp.scrollToPos = t);
                    })(this, e)
                  : Rr(this, e.from, e.to, e.margin);
            }),
            setSize: ti(function (e, t) {
              var n = this,
                r = function (e) {
                  return "number" == typeof e || /^\d+$/.test(String(e))
                    ? e + "px"
                    : e;
                };
              null != e && (this.display.wrapper.style.width = r(e)),
                null != t && (this.display.wrapper.style.height = r(t)),
                this.options.lineWrapping && Bn(this);
              var i = this.display.viewFrom;
              this.doc.iter(i, this.display.viewTo, function (e) {
                if (e.widgets)
                  for (var t = 0; t < e.widgets.length; t++)
                    if (e.widgets[t].noHScroll) {
                      fr(n, i, "widget");
                      break;
                    }
                ++i;
              }),
                (this.curOp.forceUpdate = !0),
                pe(this, "refresh", this);
            }),
            operation: function (e) {
              return Qr(this, e);
            },
            startOperation: function () {
              return Gr(this);
            },
            endOperation: function () {
              return Vr(this);
            },
            refresh: ti(function () {
              var e = this.display.cachedTextHeight;
              dr(this),
                (this.curOp.forceUpdate = !0),
                In(this),
                _r(this, this.doc.scrollLeft, this.doc.scrollTop),
                ci(this.display),
                (null == e ||
                  Math.abs(e - rr(this.display)) > 0.5 ||
                  this.options.lineWrapping) &&
                  lr(this),
                pe(this, "refresh", this);
            }),
            swapDoc: ti(function (e) {
              var t = this.doc;
              return (
                (t.cm = null),
                this.state.selectingText && this.state.selectingText(),
                ji(this, e),
                In(this),
                this.display.input.reset(),
                _r(this, e.scrollLeft, e.scrollTop),
                (this.curOp.forceScroll = !0),
                ln(this, "swapDoc", this, t),
                t
              );
            }),
            phrase: function (e) {
              var t = this.options.phrases;
              return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e;
            },
            getInputField: function () {
              return this.display.input.getField();
            },
            getWrapperElement: function () {
              return this.display.wrapper;
            },
            getScrollerElement: function () {
              return this.display.scroller;
            },
            getGutterElement: function () {
              return this.display.gutters;
            },
          }),
            ye(e),
            (e.registerHelper = function (t, r, i) {
              n.hasOwnProperty(t) || (n[t] = e[t] = { _global: [] }),
                (n[t][r] = i);
            }),
            (e.registerGlobalHelper = function (t, r, i, o) {
              e.registerHelper(t, r, o), n[t]._global.push({ pred: i, val: o });
            });
        })(Ma);
      var Ga = "iter insert remove copy getEditor constructor".split(" ");
      for (var Va in No.prototype)
        No.prototype.hasOwnProperty(Va) &&
          I(Ga, Va) < 0 &&
          (Ma.prototype[Va] = (function (e) {
            return function () {
              return e.apply(this.doc, arguments);
            };
          })(No.prototype[Va]));
      return (
        ye(No),
        (Ma.inputStyles = { textarea: Ua, contenteditable: Ia }),
        (Ma.defineMode = function (e) {
          Ma.defaults.mode || "null" == e || (Ma.defaults.mode = e),
            De.apply(this, arguments);
        }),
        (Ma.defineMIME = function (e, t) {
          He[e] = t;
        }),
        Ma.defineMode("null", function () {
          return {
            token: function (e) {
              return e.skipToEnd();
            },
          };
        }),
        Ma.defineMIME("text/plain", "null"),
        (Ma.defineExtension = function (e, t) {
          Ma.prototype[e] = t;
        }),
        (Ma.defineDocExtension = function (e, t) {
          No.prototype[e] = t;
        }),
        (Ma.fromTextArea = function (e, t) {
          if (
            (((t = t ? D(t) : {}).value = e.value),
            !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
            !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
            null == t.autofocus)
          ) {
            var n = _();
            t.autofocus =
              n == e ||
              (null != e.getAttribute("autofocus") && n == document.body);
          }
          function r() {
            e.value = s.getValue();
          }
          var i;
          if (e.form && (de(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
            var o = e.form;
            i = o.submit;
            try {
              var a = (o.submit = function () {
                r(), (o.submit = i), o.submit(), (o.submit = a);
              });
            } catch (e) {}
          }
          (t.finishInit = function (n) {
            (n.save = r),
              (n.getTextArea = function () {
                return e;
              }),
              (n.toTextArea = function () {
                (n.toTextArea = isNaN),
                  r(),
                  e.parentNode.removeChild(n.getWrapperElement()),
                  (e.style.display = ""),
                  e.form &&
                    (he(e.form, "submit", r),
                    t.leaveSubmitMethodAlone ||
                      "function" != typeof e.form.submit ||
                      (e.form.submit = i));
              });
          }),
            (e.style.display = "none");
          var s = Ma(function (t) {
            return e.parentNode.insertBefore(t, e.nextSibling);
          }, t);
          return s;
        }),
        (function (e) {
          (e.off = he),
            (e.on = de),
            (e.wheelEventPixels = wi),
            (e.Doc = No),
            (e.splitLines = Ne),
            (e.countColumn = z),
            (e.findColumn = U),
            (e.isWordChar = Q),
            (e.Pass = q),
            (e.signal = pe),
            (e.Line = Gt),
            (e.changeEnd = Ti),
            (e.scrollbarModel = Fr),
            (e.Pos = et),
            (e.cmpPos = tt),
            (e.modes = je),
            (e.mimeModes = He),
            (e.resolveMode = ze),
            (e.getMode = Be),
            (e.modeExtensions = Ie),
            (e.extendMode = qe),
            (e.copyState = We),
            (e.startState = $e),
            (e.innerMode = Fe),
            (e.commands = ta),
            (e.keyMap = Fo),
            (e.keyName = Yo),
            (e.isModifierKey = Vo),
            (e.lookupKey = Go),
            (e.normalizeKeyMap = Uo),
            (e.StringStream = Ue),
            (e.SharedTextMarker = Mo),
            (e.TextMarker = Lo),
            (e.LineWidget = ko),
            (e.e_preventDefault = be),
            (e.e_stopPropagation = we),
            (e.e_stop = ke),
            (e.addClass = P),
            (e.contains = N),
            (e.rmClass = T),
            (e.keyNames = Bo);
        })(Ma),
        (Ma.version = "5.61.1"),
        Ma
      );
    })();
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r = n(0),
        i = n(22),
        o = n(5),
        a = { "Content-Type": "application/x-www-form-urlencoded" };
      function s(e, t) {
        !r.isUndefined(e) &&
          r.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var l,
        c = {
          transitional: {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          },
          adapter:
            (("undefined" != typeof XMLHttpRequest ||
              (void 0 !== t &&
                "[object process]" === Object.prototype.toString.call(t))) &&
              (l = n(6)),
            l),
          transformRequest: [
            function (e, t) {
              return (
                i(t, "Accept"),
                i(t, "Content-Type"),
                r.isFormData(e) ||
                r.isArrayBuffer(e) ||
                r.isBuffer(e) ||
                r.isStream(e) ||
                r.isFile(e) ||
                r.isBlob(e)
                  ? e
                  : r.isArrayBufferView(e)
                  ? e.buffer
                  : r.isURLSearchParams(e)
                  ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : r.isObject(e) ||
                    (t && "application/json" === t["Content-Type"])
                  ? (s(t, "application/json"),
                    (function (e, t, n) {
                      if (r.isString(e))
                        try {
                          return (t || JSON.parse)(e), r.trim(e);
                        } catch (e) {
                          if ("SyntaxError" !== e.name) throw e;
                        }
                      return (n || JSON.stringify)(e);
                    })(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              var t = this.transitional,
                n = t && t.silentJSONParsing,
                i = t && t.forcedJSONParsing,
                a = !n && "json" === this.responseType;
              if (a || (i && r.isString(e) && e.length))
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (a) {
                    if ("SyntaxError" === e.name)
                      throw o(e, this, "E_JSON_PARSE");
                    throw e;
                  }
                }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
        };
      (c.headers = { common: { Accept: "application/json, text/plain, */*" } }),
        r.forEach(["delete", "get", "head"], function (e) {
          c.headers[e] = {};
        }),
        r.forEach(["post", "put", "patch"], function (e) {
          c.headers[e] = r.merge(a);
        }),
        (e.exports = c);
    }.call(this, n(21)));
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
          n[r] = arguments[r];
        return e.apply(t, n);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    function i(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, n) {
      if (!t) return e;
      var o;
      if (n) o = n(t);
      else if (r.isURLSearchParams(t)) o = t.toString();
      else {
        var a = [];
        r.forEach(t, function (e, t) {
          null != e &&
            (r.isArray(e) ? (t += "[]") : (e = [e]),
            r.forEach(e, function (e) {
              r.isDate(e)
                ? (e = e.toISOString())
                : r.isObject(e) && (e = JSON.stringify(e)),
                a.push(i(t) + "=" + i(e));
            }));
        }),
          (o = a.join("&"));
      }
      if (o) {
        var s = e.indexOf("#");
        -1 !== s && (e = e.slice(0, s)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + o);
      }
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r, i) {
      return (
        (e.config = t),
        n && (e.code = n),
        (e.request = r),
        (e.response = i),
        (e.isAxiosError = !0),
        (e.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
          };
        }),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      i = n(23),
      o = n(24),
      a = n(4),
      s = n(25),
      l = n(28),
      c = n(29),
      u = n(7);
    e.exports = function (e) {
      return new Promise(function (t, n) {
        var d = e.data,
          f = e.headers,
          h = e.responseType;
        r.isFormData(d) && delete f["Content-Type"];
        var p = new XMLHttpRequest();
        if (e.auth) {
          var m = e.auth.username || "",
            g = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          f.Authorization = "Basic " + btoa(m + ":" + g);
        }
        var v = s(e.baseURL, e.url);
        function y() {
          if (p) {
            var r =
                "getAllResponseHeaders" in p
                  ? l(p.getAllResponseHeaders())
                  : null,
              o = {
                data:
                  h && "text" !== h && "json" !== h
                    ? p.response
                    : p.responseText,
                status: p.status,
                statusText: p.statusText,
                headers: r,
                config: e,
                request: p,
              };
            i(t, n, o), (p = null);
          }
        }
        if (
          (p.open(
            e.method.toUpperCase(),
            a(v, e.params, e.paramsSerializer),
            !0
          ),
          (p.timeout = e.timeout),
          "onloadend" in p
            ? (p.onloadend = y)
            : (p.onreadystatechange = function () {
                p &&
                  4 === p.readyState &&
                  (0 !== p.status ||
                    (p.responseURL && 0 === p.responseURL.indexOf("file:"))) &&
                  setTimeout(y);
              }),
          (p.onabort = function () {
            p && (n(u("Request aborted", e, "ECONNABORTED", p)), (p = null));
          }),
          (p.onerror = function () {
            n(u("Network Error", e, null, p)), (p = null);
          }),
          (p.ontimeout = function () {
            var t = "timeout of " + e.timeout + "ms exceeded";
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              n(
                u(
                  t,
                  e,
                  e.transitional && e.transitional.clarifyTimeoutError
                    ? "ETIMEDOUT"
                    : "ECONNABORTED",
                  p
                )
              ),
              (p = null);
          }),
          r.isStandardBrowserEnv())
        ) {
          var b =
            (e.withCredentials || c(v)) && e.xsrfCookieName
              ? o.read(e.xsrfCookieName)
              : void 0;
          b && (f[e.xsrfHeaderName] = b);
        }
        "setRequestHeader" in p &&
          r.forEach(f, function (e, t) {
            void 0 === d && "content-type" === t.toLowerCase()
              ? delete f[t]
              : p.setRequestHeader(t, e);
          }),
          r.isUndefined(e.withCredentials) ||
            (p.withCredentials = !!e.withCredentials),
          h && "json" !== h && (p.responseType = e.responseType),
          "function" == typeof e.onDownloadProgress &&
            p.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            p.upload &&
            p.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              p && (p.abort(), n(e), (p = null));
            }),
          d || (d = null),
          p.send(d);
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(5);
    e.exports = function (e, t, n, i, o) {
      var a = new Error(e);
      return r(a, t, n, i, o);
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e, t) {
      t = t || {};
      var n = {},
        i = ["url", "method", "data"],
        o = ["headers", "auth", "proxy", "params"],
        a = [
          "baseURL",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "timeoutMessage",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "decompress",
          "maxContentLength",
          "maxBodyLength",
          "maxRedirects",
          "transport",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
          "responseEncoding",
        ],
        s = ["validateStatus"];
      function l(e, t) {
        return r.isPlainObject(e) && r.isPlainObject(t)
          ? r.merge(e, t)
          : r.isPlainObject(t)
          ? r.merge({}, t)
          : r.isArray(t)
          ? t.slice()
          : t;
      }
      function c(i) {
        r.isUndefined(t[i])
          ? r.isUndefined(e[i]) || (n[i] = l(void 0, e[i]))
          : (n[i] = l(e[i], t[i]));
      }
      r.forEach(i, function (e) {
        r.isUndefined(t[e]) || (n[e] = l(void 0, t[e]));
      }),
        r.forEach(o, c),
        r.forEach(a, function (i) {
          r.isUndefined(t[i])
            ? r.isUndefined(e[i]) || (n[i] = l(void 0, e[i]))
            : (n[i] = l(void 0, t[i]));
        }),
        r.forEach(s, function (r) {
          r in t ? (n[r] = l(e[r], t[r])) : r in e && (n[r] = l(void 0, e[r]));
        });
      var u = i.concat(o).concat(a).concat(s),
        d = Object.keys(e)
          .concat(Object.keys(t))
          .filter(function (e) {
            return -1 === u.indexOf(e);
          });
      return r.forEach(d, c), n;
    };
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      this.message = e;
    }
    (r.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (r.prototype.__CANCEL__ = !0),
      (e.exports = r);
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    e.exports = n(16);
  },
  function (e, t, n) {
    var r = n(35);
    function i(e, t, n) {
      Array.isArray(e) ? e.push(t) : (e[n] = t);
    }
    e.exports = function (e) {
      var t,
        n,
        o,
        a = [];
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
        (function n(s, l) {
          var c, u, d;
          for (
            u = o ? o[l] : l,
              Array.isArray(e[u]) ||
                (void 0 === e[u] ? (e[u] = []) : (e[u] = [e[u]])),
              c = 0;
            c < e[u].length;
            c++
          )
            (f = s),
              i((d = Array.isArray(f) ? [].concat(f) : r(f)), e[u][c], u),
              l >= t ? a.push(d) : n(d, l + 1);
          var f;
        })(n, 0),
        a
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(36),
      i = n(38);
    function o() {
      (this.protocol = null),
        (this.slashes = null),
        (this.auth = null),
        (this.host = null),
        (this.port = null),
        (this.hostname = null),
        (this.hash = null),
        (this.search = null),
        (this.query = null),
        (this.pathname = null),
        (this.path = null),
        (this.href = null);
    }
    (t.parse = b),
      (t.resolve = function (e, t) {
        return b(e, !1, !0).resolve(t);
      }),
      (t.resolveObject = function (e, t) {
        return e ? b(e, !1, !0).resolveObject(t) : t;
      }),
      (t.format = function (e) {
        i.isString(e) && (e = b(e));
        return e instanceof o ? e.format() : o.prototype.format.call(e);
      }),
      (t.Url = o);
    var a = /^([a-z0-9.+-]+:)/i,
      s = /:[0-9]*$/,
      l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
      c = ["{", "}", "|", "\\", "^", "`"].concat([
        "<",
        ">",
        '"',
        "`",
        " ",
        "\r",
        "\n",
        "\t",
      ]),
      u = ["'"].concat(c),
      d = ["%", "/", "?", ";", "#"].concat(u),
      f = ["/", "?", "#"],
      h = /^[+a-z0-9A-Z_-]{0,63}$/,
      p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
      m = { javascript: !0, "javascript:": !0 },
      g = { javascript: !0, "javascript:": !0 },
      v = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0,
      },
      y = n(39);
    function b(e, t, n) {
      if (e && i.isObject(e) && e instanceof o) return e;
      var r = new o();
      return r.parse(e, t, n), r;
    }
    (o.prototype.parse = function (e, t, n) {
      if (!i.isString(e))
        throw new TypeError(
          "Parameter 'url' must be a string, not " + typeof e
        );
      var o = e.indexOf("?"),
        s = -1 !== o && o < e.indexOf("#") ? "?" : "#",
        c = e.split(s);
      c[0] = c[0].replace(/\\/g, "/");
      var b = (e = c.join(s));
      if (((b = b.trim()), !n && 1 === e.split("#").length)) {
        var w = l.exec(b);
        if (w)
          return (
            (this.path = b),
            (this.href = b),
            (this.pathname = w[1]),
            w[2]
              ? ((this.search = w[2]),
                (this.query = t
                  ? y.parse(this.search.substr(1))
                  : this.search.substr(1)))
              : t && ((this.search = ""), (this.query = {})),
            this
          );
      }
      var x = a.exec(b);
      if (x) {
        var k = (x = x[0]).toLowerCase();
        (this.protocol = k), (b = b.substr(x.length));
      }
      if (n || x || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var S = "//" === b.substr(0, 2);
        !S || (x && g[x]) || ((b = b.substr(2)), (this.slashes = !0));
      }
      if (!g[x] && (S || (x && !v[x]))) {
        for (var C, L, T = -1, M = 0; M < f.length; M++) {
          -1 !== (O = b.indexOf(f[M])) && (-1 === T || O < T) && (T = O);
        }
        -1 !== (L = -1 === T ? b.lastIndexOf("@") : b.lastIndexOf("@", T)) &&
          ((C = b.slice(0, L)),
          (b = b.slice(L + 1)),
          (this.auth = decodeURIComponent(C))),
          (T = -1);
        for (M = 0; M < d.length; M++) {
          var O;
          -1 !== (O = b.indexOf(d[M])) && (-1 === T || O < T) && (T = O);
        }
        -1 === T && (T = b.length),
          (this.host = b.slice(0, T)),
          (b = b.slice(T)),
          this.parseHost(),
          (this.hostname = this.hostname || "");
        var E =
          "[" === this.hostname[0] &&
          "]" === this.hostname[this.hostname.length - 1];
        if (!E)
          for (
            var A = this.hostname.split(/\./), N = ((M = 0), A.length);
            M < N;
            M++
          ) {
            var _ = A[M];
            if (_ && !_.match(h)) {
              for (var P = "", R = 0, j = _.length; R < j; R++)
                _.charCodeAt(R) > 127 ? (P += "x") : (P += _[R]);
              if (!P.match(h)) {
                var H = A.slice(0, M),
                  D = A.slice(M + 1),
                  z = _.match(p);
                z && (H.push(z[1]), D.unshift(z[2])),
                  D.length && (b = "/" + D.join(".") + b),
                  (this.hostname = H.join("."));
                break;
              }
            }
          }
        this.hostname.length > 255
          ? (this.hostname = "")
          : (this.hostname = this.hostname.toLowerCase()),
          E || (this.hostname = r.toASCII(this.hostname));
        var B = this.port ? ":" + this.port : "",
          I = this.hostname || "";
        (this.host = I + B),
          (this.href += this.host),
          E &&
            ((this.hostname = this.hostname.substr(
              1,
              this.hostname.length - 2
            )),
            "/" !== b[0] && (b = "/" + b));
      }
      if (!m[k])
        for (M = 0, N = u.length; M < N; M++) {
          var q = u[M];
          if (-1 !== b.indexOf(q)) {
            var W = encodeURIComponent(q);
            W === q && (W = escape(q)), (b = b.split(q).join(W));
          }
        }
      var F = b.indexOf("#");
      -1 !== F && ((this.hash = b.substr(F)), (b = b.slice(0, F)));
      var $ = b.indexOf("?");
      if (
        (-1 !== $
          ? ((this.search = b.substr($)),
            (this.query = b.substr($ + 1)),
            t && (this.query = y.parse(this.query)),
            (b = b.slice(0, $)))
          : t && ((this.search = ""), (this.query = {})),
        b && (this.pathname = b),
        v[k] && this.hostname && !this.pathname && (this.pathname = "/"),
        this.pathname || this.search)
      ) {
        B = this.pathname || "";
        var U = this.search || "";
        this.path = B + U;
      }
      return (this.href = this.format()), this;
    }),
      (o.prototype.format = function () {
        var e = this.auth || "";
        e &&
          ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ":")), (e += "@"));
        var t = this.protocol || "",
          n = this.pathname || "",
          r = this.hash || "",
          o = !1,
          a = "";
        this.host
          ? (o = e + this.host)
          : this.hostname &&
            ((o =
              e +
              (-1 === this.hostname.indexOf(":")
                ? this.hostname
                : "[" + this.hostname + "]")),
            this.port && (o += ":" + this.port)),
          this.query &&
            i.isObject(this.query) &&
            Object.keys(this.query).length &&
            (a = y.stringify(this.query));
        var s = this.search || (a && "?" + a) || "";
        return (
          t && ":" !== t.substr(-1) && (t += ":"),
          this.slashes || ((!t || v[t]) && !1 !== o)
            ? ((o = "//" + (o || "")),
              n && "/" !== n.charAt(0) && (n = "/" + n))
            : o || (o = ""),
          r && "#" !== r.charAt(0) && (r = "#" + r),
          s && "?" !== s.charAt(0) && (s = "?" + s),
          t +
            o +
            (n = n.replace(/[?#]/g, function (e) {
              return encodeURIComponent(e);
            })) +
            (s = s.replace("#", "%23")) +
            r
        );
      }),
      (o.prototype.resolve = function (e) {
        return this.resolveObject(b(e, !1, !0)).format();
      }),
      (o.prototype.resolveObject = function (e) {
        if (i.isString(e)) {
          var t = new o();
          t.parse(e, !1, !0), (e = t);
        }
        for (var n = new o(), r = Object.keys(this), a = 0; a < r.length; a++) {
          var s = r[a];
          n[s] = this[s];
        }
        if (((n.hash = e.hash), "" === e.href)) return (n.href = n.format()), n;
        if (e.slashes && !e.protocol) {
          for (var l = Object.keys(e), c = 0; c < l.length; c++) {
            var u = l[c];
            "protocol" !== u && (n[u] = e[u]);
          }
          return (
            v[n.protocol] &&
              n.hostname &&
              !n.pathname &&
              (n.path = n.pathname = "/"),
            (n.href = n.format()),
            n
          );
        }
        if (e.protocol && e.protocol !== n.protocol) {
          if (!v[e.protocol]) {
            for (var d = Object.keys(e), f = 0; f < d.length; f++) {
              var h = d[f];
              n[h] = e[h];
            }
            return (n.href = n.format()), n;
          }
          if (((n.protocol = e.protocol), e.host || g[e.protocol]))
            n.pathname = e.pathname;
          else {
            for (
              var p = (e.pathname || "").split("/");
              p.length && !(e.host = p.shift());

            );
            e.host || (e.host = ""),
              e.hostname || (e.hostname = ""),
              "" !== p[0] && p.unshift(""),
              p.length < 2 && p.unshift(""),
              (n.pathname = p.join("/"));
          }
          if (
            ((n.search = e.search),
            (n.query = e.query),
            (n.host = e.host || ""),
            (n.auth = e.auth),
            (n.hostname = e.hostname || e.host),
            (n.port = e.port),
            n.pathname || n.search)
          ) {
            var m = n.pathname || "",
              y = n.search || "";
            n.path = m + y;
          }
          return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
        }
        var b = n.pathname && "/" === n.pathname.charAt(0),
          w = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
          x = w || b || (n.host && e.pathname),
          k = x,
          S = (n.pathname && n.pathname.split("/")) || [],
          C =
            ((p = (e.pathname && e.pathname.split("/")) || []),
            n.protocol && !v[n.protocol]);
        if (
          (C &&
            ((n.hostname = ""),
            (n.port = null),
            n.host && ("" === S[0] ? (S[0] = n.host) : S.unshift(n.host)),
            (n.host = ""),
            e.protocol &&
              ((e.hostname = null),
              (e.port = null),
              e.host && ("" === p[0] ? (p[0] = e.host) : p.unshift(e.host)),
              (e.host = null)),
            (x = x && ("" === p[0] || "" === S[0]))),
          w)
        )
          (n.host = e.host || "" === e.host ? e.host : n.host),
            (n.hostname =
              e.hostname || "" === e.hostname ? e.hostname : n.hostname),
            (n.search = e.search),
            (n.query = e.query),
            (S = p);
        else if (p.length)
          S || (S = []),
            S.pop(),
            (S = S.concat(p)),
            (n.search = e.search),
            (n.query = e.query);
        else if (!i.isNullOrUndefined(e.search)) {
          if (C)
            (n.hostname = n.host = S.shift()),
              (E =
                !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) &&
                ((n.auth = E.shift()), (n.host = n.hostname = E.shift()));
          return (
            (n.search = e.search),
            (n.query = e.query),
            (i.isNull(n.pathname) && i.isNull(n.search)) ||
              (n.path =
                (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
            (n.href = n.format()),
            n
          );
        }
        if (!S.length)
          return (
            (n.pathname = null),
            n.search ? (n.path = "/" + n.search) : (n.path = null),
            (n.href = n.format()),
            n
          );
        for (
          var L = S.slice(-1)[0],
            T =
              ((n.host || e.host || S.length > 1) &&
                ("." === L || ".." === L)) ||
              "" === L,
            M = 0,
            O = S.length;
          O >= 0;
          O--
        )
          "." === (L = S[O])
            ? S.splice(O, 1)
            : ".." === L
            ? (S.splice(O, 1), M++)
            : M && (S.splice(O, 1), M--);
        if (!x && !k) for (; M--; M) S.unshift("..");
        !x || "" === S[0] || (S[0] && "/" === S[0].charAt(0)) || S.unshift(""),
          T && "/" !== S.join("/").substr(-1) && S.push("");
        var E,
          A = "" === S[0] || (S[0] && "/" === S[0].charAt(0));
        C &&
          ((n.hostname = n.host = A ? "" : S.length ? S.shift() : ""),
          (E = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) &&
            ((n.auth = E.shift()), (n.host = n.hostname = E.shift())));
        return (
          (x = x || (n.host && S.length)) && !A && S.unshift(""),
          S.length
            ? (n.pathname = S.join("/"))
            : ((n.pathname = null), (n.path = null)),
          (i.isNull(n.pathname) && i.isNull(n.search)) ||
            (n.path =
              (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
          (n.auth = e.auth || n.auth),
          (n.slashes = n.slashes || e.slashes),
          (n.href = n.format()),
          n
        );
      }),
      (o.prototype.parseHost = function () {
        var e = this.host,
          t = s.exec(e);
        t &&
          (":" !== (t = t[0]) && (this.port = t.substr(1)),
          (e = e.substr(0, e.length - t.length))),
          e && (this.hostname = e);
      });
  },
  function (e, t, n) {
    (function (n) {
      var r, i, o;
      (i = []),
        void 0 ===
          (o =
            "function" ==
            typeof (r = function () {
              "use strict";
              function t(e, t, n) {
                var r = new XMLHttpRequest();
                r.open("GET", e),
                  (r.responseType = "blob"),
                  (r.onload = function () {
                    s(r.response, t, n);
                  }),
                  (r.onerror = function () {
                    console.error("could not download file");
                  }),
                  r.send();
              }
              function r(e) {
                var t = new XMLHttpRequest();
                t.open("HEAD", e, !1);
                try {
                  t.send();
                } catch (e) {}
                return 200 <= t.status && 299 >= t.status;
              }
              function i(e) {
                try {
                  e.dispatchEvent(new MouseEvent("click"));
                } catch (n) {
                  var t = document.createEvent("MouseEvents");
                  t.initMouseEvent(
                    "click",
                    !0,
                    !0,
                    window,
                    0,
                    0,
                    0,
                    80,
                    20,
                    !1,
                    !1,
                    !1,
                    !1,
                    0,
                    null
                  ),
                    e.dispatchEvent(t);
                }
              }
              var o =
                  "object" == typeof window && window.window === window
                    ? window
                    : "object" == typeof self && self.self === self
                    ? self
                    : "object" == typeof n && n.global === n
                    ? n
                    : void 0,
                a =
                  o.navigator &&
                  /Macintosh/.test(navigator.userAgent) &&
                  /AppleWebKit/.test(navigator.userAgent) &&
                  !/Safari/.test(navigator.userAgent),
                s =
                  o.saveAs ||
                  ("object" != typeof window || window !== o
                    ? function () {}
                    : "download" in HTMLAnchorElement.prototype && !a
                    ? function (e, n, a) {
                        var s = o.URL || o.webkitURL,
                          l = document.createElement("a");
                        (n = n || e.name || "download"),
                          (l.download = n),
                          (l.rel = "noopener"),
                          "string" == typeof e
                            ? ((l.href = e),
                              l.origin === location.origin
                                ? i(l)
                                : r(l.href)
                                ? t(e, n, a)
                                : i(l, (l.target = "_blank")))
                            : ((l.href = s.createObjectURL(e)),
                              setTimeout(function () {
                                s.revokeObjectURL(l.href);
                              }, 4e4),
                              setTimeout(function () {
                                i(l);
                              }, 0));
                      }
                    : "msSaveOrOpenBlob" in navigator
                    ? function (e, n, o) {
                        if (
                          ((n = n || e.name || "download"),
                          "string" != typeof e)
                        )
                          navigator.msSaveOrOpenBlob(
                            (function (e, t) {
                              return (
                                void 0 === t
                                  ? (t = { autoBom: !1 })
                                  : "object" != typeof t &&
                                    (console.warn(
                                      "Deprecated: Expected third argument to be a object"
                                    ),
                                    (t = { autoBom: !t })),
                                t.autoBom &&
                                /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                                  e.type
                                )
                                  ? new Blob(["\ufeff", e], { type: e.type })
                                  : e
                              );
                            })(e, o),
                            n
                          );
                        else if (r(e)) t(e, n, o);
                        else {
                          var a = document.createElement("a");
                          (a.href = e),
                            (a.target = "_blank"),
                            setTimeout(function () {
                              i(a);
                            });
                        }
                      }
                    : function (e, n, r, i) {
                        if (
                          ((i = i || open("", "_blank")) &&
                            (i.document.title = i.document.body.innerText =
                              "downloading..."),
                          "string" == typeof e)
                        )
                          return t(e, n, r);
                        var s = "application/octet-stream" === e.type,
                          l = /constructor/i.test(o.HTMLElement) || o.safari,
                          c = /CriOS\/[\d]+/.test(navigator.userAgent);
                        if (
                          (c || (s && l) || a) &&
                          "undefined" != typeof FileReader
                        ) {
                          var u = new FileReader();
                          (u.onloadend = function () {
                            var e = u.result;
                            (e = c
                              ? e
                              : e.replace(
                                  /^data:[^;]*;/,
                                  "data:attachment/file;"
                                )),
                              i ? (i.location.href = e) : (location = e),
                              (i = null);
                          }),
                            u.readAsDataURL(e);
                        } else {
                          var d = o.URL || o.webkitURL,
                            f = d.createObjectURL(e);
                          i ? (i.location = f) : (location.href = f),
                            (i = null),
                            setTimeout(function () {
                              d.revokeObjectURL(f);
                            }, 4e4);
                        }
                      });
              (o.saveAs = s.saveAs = s), (e.exports = s);
            })
              ? r.apply(t, i)
              : r) || (e.exports = o);
    }.call(this, n(11)));
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      i = n(3),
      o = n(17),
      a = n(9);
    function s(e) {
      var t = new o(e),
        n = i(o.prototype.request, t);
      return r.extend(n, o.prototype, t), r.extend(n, t), n;
    }
    var l = s(n(2));
    (l.Axios = o),
      (l.create = function (e) {
        return s(a(l.defaults, e));
      }),
      (l.Cancel = n(10)),
      (l.CancelToken = n(32)),
      (l.isCancel = n(8)),
      (l.all = function (e) {
        return Promise.all(e);
      }),
      (l.spread = n(33)),
      (l.isAxiosError = n(34)),
      (e.exports = l),
      (e.exports.default = l);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      i = n(4),
      o = n(18),
      a = n(19),
      s = n(9),
      l = n(30),
      c = l.validators;
    function u(e) {
      (this.defaults = e),
        (this.interceptors = { request: new o(), response: new o() });
    }
    (u.prototype.request = function (e) {
      "string" == typeof e
        ? ((e = arguments[1] || {}).url = arguments[0])
        : (e = e || {}),
        (e = s(this.defaults, e)).method
          ? (e.method = e.method.toLowerCase())
          : this.defaults.method
          ? (e.method = this.defaults.method.toLowerCase())
          : (e.method = "get");
      var t = e.transitional;
      void 0 !== t &&
        l.assertOptions(
          t,
          {
            silentJSONParsing: c.transitional(c.boolean, "1.0.0"),
            forcedJSONParsing: c.transitional(c.boolean, "1.0.0"),
            clarifyTimeoutError: c.transitional(c.boolean, "1.0.0"),
          },
          !1
        );
      var n = [],
        r = !0;
      this.interceptors.request.forEach(function (t) {
        ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
          ((r = r && t.synchronous), n.unshift(t.fulfilled, t.rejected));
      });
      var i,
        o = [];
      if (
        (this.interceptors.response.forEach(function (e) {
          o.push(e.fulfilled, e.rejected);
        }),
        !r)
      ) {
        var u = [a, void 0];
        for (
          Array.prototype.unshift.apply(u, n),
            u = u.concat(o),
            i = Promise.resolve(e);
          u.length;

        )
          i = i.then(u.shift(), u.shift());
        return i;
      }
      for (var d = e; n.length; ) {
        var f = n.shift(),
          h = n.shift();
        try {
          d = f(d);
        } catch (e) {
          h(e);
          break;
        }
      }
      try {
        i = a(d);
      } catch (e) {
        return Promise.reject(e);
      }
      for (; o.length; ) i = i.then(o.shift(), o.shift());
      return i;
    }),
      (u.prototype.getUri = function (e) {
        return (
          (e = s(this.defaults, e)),
          i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        );
      }),
      r.forEach(["delete", "get", "head", "options"], function (e) {
        u.prototype[e] = function (t, n) {
          return this.request(
            s(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
      r.forEach(["post", "put", "patch"], function (e) {
        u.prototype[e] = function (t, n, r) {
          return this.request(s(r || {}, { method: e, url: t, data: n }));
        };
      }),
      (e.exports = u);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    function i() {
      this.handlers = [];
    }
    (i.prototype.use = function (e, t, n) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: !!n && n.synchronous,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }),
      (i.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (i.prototype.forEach = function (e) {
        r.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = i);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      i = n(20),
      o = n(8),
      a = n(2);
    function s(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function (e) {
      return (
        s(e),
        (e.headers = e.headers || {}),
        (e.data = i.call(e, e.data, e.headers, e.transformRequest)),
        (e.headers = r.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        r.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        ),
        (e.adapter || a.adapter)(e).then(
          function (t) {
            return (
              s(e),
              (t.data = i.call(e, t.data, t.headers, e.transformResponse)),
              t
            );
          },
          function (t) {
            return (
              o(t) ||
                (s(e),
                t &&
                  t.response &&
                  (t.response.data = i.call(
                    e,
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            );
          }
        )
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      i = n(2);
    e.exports = function (e, t, n) {
      var o = this || i;
      return (
        r.forEach(n, function (n) {
          e = n.call(o, e, t);
        }),
        e
      );
    };
  },
  function (e, t) {
    var n,
      r,
      i = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        n = o;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        r = a;
      }
    })();
    var l,
      c = [],
      u = !1,
      d = -1;
    function f() {
      u &&
        l &&
        ((u = !1), l.length ? (c = l.concat(c)) : (d = -1), c.length && h());
    }
    function h() {
      if (!u) {
        var e = s(f);
        u = !0;
        for (var t = c.length; t; ) {
          for (l = c, c = []; ++d < t; ) l && l[d].run();
          (d = -1), (t = c.length);
        }
        (l = null),
          (u = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function p(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new p(e, t)), 1 !== c.length || u || s(h);
    }),
      (p.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = m),
      (i.addListener = m),
      (i.once = m),
      (i.off = m),
      (i.removeListener = m),
      (i.removeAllListeners = m),
      (i.emit = m),
      (i.prependListener = m),
      (i.prependOnceListener = m),
      (i.listeners = function (e) {
        return [];
      }),
      (i.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function () {
        return "/";
      }),
      (i.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e, t) {
      r.forEach(e, function (n, r) {
        r !== t &&
          r.toUpperCase() === t.toUpperCase() &&
          ((e[t] = n), delete e[r]);
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(7);
    e.exports = function (e, t, n) {
      var i = n.config.validateStatus;
      n.status && i && !i(n.status)
        ? t(
            r(
              "Request failed with status code " + n.status,
              n.config,
              null,
              n.request,
              n
            )
          )
        : e(n);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv()
      ? {
          write: function (e, t, n, i, o, a) {
            var s = [];
            s.push(e + "=" + encodeURIComponent(t)),
              r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
              r.isString(i) && s.push("path=" + i),
              r.isString(o) && s.push("domain=" + o),
              !0 === a && s.push("secure"),
              (document.cookie = s.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
  },
  function (e, t, n) {
    "use strict";
    var r = n(26),
      i = n(27);
    e.exports = function (e, t) {
      return e && !r(t) ? i(e, t) : t;
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      i = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    e.exports = function (e) {
      var t,
        n,
        o,
        a = {};
      return e
        ? (r.forEach(e.split("\n"), function (e) {
            if (
              ((o = e.indexOf(":")),
              (t = r.trim(e.substr(0, o)).toLowerCase()),
              (n = r.trim(e.substr(o + 1))),
              t)
            ) {
              if (a[t] && i.indexOf(t) >= 0) return;
              a[t] =
                "set-cookie" === t
                  ? (a[t] ? a[t] : []).concat([n])
                  : a[t]
                  ? a[t] + ", " + n
                  : n;
            }
          }),
          a)
        : a;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
          function i(e) {
            var r = e;
            return (
              t && (n.setAttribute("href", r), (r = n.href)),
              n.setAttribute("href", r),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (e = i(window.location.href)),
            function (t) {
              var n = r.isString(t) ? i(t) : t;
              return n.protocol === e.protocol && n.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        };
  },
  function (e, t, n) {
    "use strict";
    var r = n(31),
      i = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(
      function (e, t) {
        i[e] = function (n) {
          return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
        };
      }
    );
    var o = {},
      a = r.version.split(".");
    function s(e, t) {
      for (var n = t ? t.split(".") : a, r = e.split("."), i = 0; i < 3; i++) {
        if (n[i] > r[i]) return !0;
        if (n[i] < r[i]) return !1;
      }
      return !1;
    }
    (i.transitional = function (e, t, n) {
      var i = t && s(t);
      function a(e, t) {
        return (
          "[Axios v" +
          r.version +
          "] Transitional option '" +
          e +
          "'" +
          t +
          (n ? ". " + n : "")
        );
      }
      return function (n, r, s) {
        if (!1 === e) throw new Error(a(r, " has been removed in " + t));
        return (
          i &&
            !o[r] &&
            ((o[r] = !0),
            console.warn(
              a(
                r,
                " has been deprecated since v" +
                  t +
                  " and will be removed in the near future"
              )
            )),
          !e || e(n, r, s)
        );
      };
    }),
      (e.exports = {
        isOlderVersion: s,
        assertOptions: function (e, t, n) {
          if ("object" != typeof e)
            throw new TypeError("options must be an object");
          for (var r = Object.keys(e), i = r.length; i-- > 0; ) {
            var o = r[i],
              a = t[o];
            if (a) {
              var s = e[o],
                l = void 0 === s || a(s, o, e);
              if (!0 !== l)
                throw new TypeError("option " + o + " must be " + l);
            } else if (!0 !== n) throw Error("Unknown option " + o);
          }
        },
        validators: i,
      });
  },
  function (e) {
    e.exports = JSON.parse(
      '{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}'
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(10);
    function i(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var n = this;
      e(function (e) {
        n.reason || ((n.reason = new r(e)), t(n.reason));
      });
    }
    (i.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (i.source = function () {
        var e;
        return {
          token: new i(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (e.exports = i);
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return "object" == typeof e && !0 === e.isAxiosError;
    };
  },
  function (e, t) {
    e.exports = function () {
      for (var e = {}, t = 0; t < arguments.length; t++) {
        var r = arguments[t];
        for (var i in r) n.call(r, i) && (e[i] = r[i]);
      }
      return e;
    };
    var n = Object.prototype.hasOwnProperty;
  },
  function (e, t, n) {
    (function (e, r) {
      var i;
      /*! https://mths.be/punycode v1.4.1 by @mathias */ !(function (o) {
        t && t.nodeType, e && e.nodeType;
        var a = "object" == typeof r && r;
        a.global !== a && a.window !== a && a.self;
        var s,
          l = 2147483647,
          c = /^xn--/,
          u = /[^\x20-\x7E]/,
          d = /[\x2E\u3002\uFF0E\uFF61]/g,
          f = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input",
          },
          h = Math.floor,
          p = String.fromCharCode;
        function m(e) {
          throw new RangeError(f[e]);
        }
        function g(e, t) {
          for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
          return r;
        }
        function v(e, t) {
          var n = e.split("@"),
            r = "";
          return (
            n.length > 1 && ((r = n[0] + "@"), (e = n[1])),
            r + g((e = e.replace(d, ".")).split("."), t).join(".")
          );
        }
        function y(e) {
          for (var t, n, r = [], i = 0, o = e.length; i < o; )
            (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o
              ? 56320 == (64512 & (n = e.charCodeAt(i++)))
                ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                : (r.push(t), i--)
              : r.push(t);
          return r;
        }
        function b(e) {
          return g(e, function (e) {
            var t = "";
            return (
              e > 65535 &&
                ((t += p((((e -= 65536) >>> 10) & 1023) | 55296)),
                (e = 56320 | (1023 & e))),
              (t += p(e))
            );
          }).join("");
        }
        function w(e, t) {
          return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        }
        function x(e, t, n) {
          var r = 0;
          for (e = n ? h(e / 700) : e >> 1, e += h(e / t); e > 455; r += 36)
            e = h(e / 35);
          return h(r + (36 * e) / (e + 38));
        }
        function k(e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            c,
            u,
            d,
            f,
            p = [],
            g = e.length,
            v = 0,
            y = 128,
            w = 72;
          for ((n = e.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r)
            e.charCodeAt(r) >= 128 && m("not-basic"), p.push(e.charCodeAt(r));
          for (i = n > 0 ? n + 1 : 0; i < g; ) {
            for (
              o = v, a = 1, s = 36;
              i >= g && m("invalid-input"),
                ((c =
                  (f = e.charCodeAt(i++)) - 48 < 10
                    ? f - 22
                    : f - 65 < 26
                    ? f - 65
                    : f - 97 < 26
                    ? f - 97
                    : 36) >= 36 ||
                  c > h((l - v) / a)) &&
                  m("overflow"),
                (v += c * a),
                !(c < (u = s <= w ? 1 : s >= w + 26 ? 26 : s - w));
              s += 36
            )
              a > h(l / (d = 36 - u)) && m("overflow"), (a *= d);
            (w = x(v - o, (t = p.length + 1), 0 == o)),
              h(v / t) > l - y && m("overflow"),
              (y += h(v / t)),
              (v %= t),
              p.splice(v++, 0, y);
          }
          return b(p);
        }
        function S(e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            c,
            u,
            d,
            f,
            g,
            v,
            b,
            k,
            S = [];
          for (g = (e = y(e)).length, t = 128, n = 0, o = 72, a = 0; a < g; ++a)
            (f = e[a]) < 128 && S.push(p(f));
          for (r = i = S.length, i && S.push("-"); r < g; ) {
            for (s = l, a = 0; a < g; ++a) (f = e[a]) >= t && f < s && (s = f);
            for (
              s - t > h((l - n) / (v = r + 1)) && m("overflow"),
                n += (s - t) * v,
                t = s,
                a = 0;
              a < g;
              ++a
            )
              if (((f = e[a]) < t && ++n > l && m("overflow"), f == t)) {
                for (
                  c = n, u = 36;
                  !(c < (d = u <= o ? 1 : u >= o + 26 ? 26 : u - o));
                  u += 36
                )
                  (k = c - d),
                    (b = 36 - d),
                    S.push(p(w(d + (k % b), 0))),
                    (c = h(k / b));
                S.push(p(w(c, 0))), (o = x(n, v, r == i)), (n = 0), ++r;
              }
            ++n, ++t;
          }
          return S.join("");
        }
        (s = {
          version: "1.4.1",
          ucs2: { decode: y, encode: b },
          decode: k,
          encode: S,
          toASCII: function (e) {
            return v(e, function (e) {
              return u.test(e) ? "xn--" + S(e) : e;
            });
          },
          toUnicode: function (e) {
            return v(e, function (e) {
              return c.test(e) ? k(e.slice(4).toLowerCase()) : e;
            });
          },
        }),
          void 0 ===
            (i = function () {
              return s;
            }.call(t, n, t, e)) || (e.exports = i);
      })();
    }.call(this, n(37)(e), n(11)));
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = {
      isString: function (e) {
        return "string" == typeof e;
      },
      isObject: function (e) {
        return "object" == typeof e && null !== e;
      },
      isNull: function (e) {
        return null === e;
      },
      isNullOrUndefined: function (e) {
        return null == e;
      },
    };
  },
  function (e, t, n) {
    "use strict";
    (t.decode = t.parse = n(40)), (t.encode = t.stringify = n(41));
  },
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    e.exports = function (e, t, n, o) {
      (t = t || "&"), (n = n || "=");
      var a = {};
      if ("string" != typeof e || 0 === e.length) return a;
      var s = /\+/g;
      e = e.split(t);
      var l = 1e3;
      o && "number" == typeof o.maxKeys && (l = o.maxKeys);
      var c = e.length;
      l > 0 && c > l && (c = l);
      for (var u = 0; u < c; ++u) {
        var d,
          f,
          h,
          p,
          m = e[u].replace(s, "%20"),
          g = m.indexOf(n);
        g >= 0
          ? ((d = m.substr(0, g)), (f = m.substr(g + 1)))
          : ((d = m), (f = "")),
          (h = decodeURIComponent(d)),
          (p = decodeURIComponent(f)),
          r(a, h) ? (i(a[h]) ? a[h].push(p) : (a[h] = [a[h], p])) : (a[h] = p);
      }
      return a;
    };
    var i =
      Array.isArray ||
      function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      };
  },
  function (e, t, n) {
    "use strict";
    var r = function (e) {
      switch (typeof e) {
        case "string":
          return e;
        case "boolean":
          return e ? "true" : "false";
        case "number":
          return isFinite(e) ? e : "";
        default:
          return "";
      }
    };
    e.exports = function (e, t, n, s) {
      return (
        (t = t || "&"),
        (n = n || "="),
        null === e && (e = void 0),
        "object" == typeof e
          ? o(a(e), function (a) {
              var s = encodeURIComponent(r(a)) + n;
              return i(e[a])
                ? o(e[a], function (e) {
                    return s + encodeURIComponent(r(e));
                  }).join(t)
                : s + encodeURIComponent(r(e[a]));
            }).join(t)
          : s
          ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(e))
          : ""
      );
    };
    var i =
      Array.isArray ||
      function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      };
    function o(e, t) {
      if (e.map) return e.map(t);
      for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
      return n;
    }
    var a =
      Object.keys ||
      function (e) {
        var t = [];
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t;
      };
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e) {
        for (var t = {}, n = 0; n < e.length; ++n) t[e[n].toLowerCase()] = !0;
        return t;
      }
      e.defineMode("css", function (t, n) {
        var r = n.inline;
        n.propertyKeywords || (n = e.resolveMode("text/css"));
        var i,
          o,
          a = t.indentUnit,
          s = n.tokenHooks,
          l = n.documentTypes || {},
          c = n.mediaTypes || {},
          u = n.mediaFeatures || {},
          d = n.mediaValueKeywords || {},
          f = n.propertyKeywords || {},
          h = n.nonStandardPropertyKeywords || {},
          p = n.fontProperties || {},
          m = n.counterDescriptors || {},
          g = n.colorKeywords || {},
          v = n.valueKeywords || {},
          y = n.allowNested,
          b = n.lineComment,
          w = !0 === n.supportsAtComponent,
          x = !1 !== t.highlightNonStandardPropertyKeywords;
        function k(e, t) {
          return (i = t), e;
        }
        function S(e, t) {
          var n = e.next();
          if (s[n]) {
            var r = s[n](e, t);
            if (!1 !== r) return r;
          }
          return "@" == n
            ? (e.eatWhile(/[\w\\\-]/), k("def", e.current()))
            : "=" == n || (("~" == n || "|" == n) && e.eat("="))
            ? k(null, "compare")
            : '"' == n || "'" == n
            ? ((t.tokenize = C(n)), t.tokenize(e, t))
            : "#" == n
            ? (e.eatWhile(/[\w\\\-]/), k("atom", "hash"))
            : "!" == n
            ? (e.match(/^\s*\w*/), k("keyword", "important"))
            : /\d/.test(n) || ("." == n && e.eat(/\d/))
            ? (e.eatWhile(/[\w.%]/), k("number", "unit"))
            : "-" !== n
            ? /[,+>*\/]/.test(n)
              ? k(null, "select-op")
              : "." == n && e.match(/^-?[_a-z][_a-z0-9-]*/i)
              ? k("qualifier", "qualifier")
              : /[:;{}\[\]\(\)]/.test(n)
              ? k(null, n)
              : e.match(/^[\w-.]+(?=\()/)
              ? (/^(url(-prefix)?|domain|regexp)$/i.test(e.current()) &&
                  (t.tokenize = L),
                k("variable callee", "variable"))
              : /[\w\\\-]/.test(n)
              ? (e.eatWhile(/[\w\\\-]/), k("property", "word"))
              : k(null, null)
            : /[\d.]/.test(e.peek())
            ? (e.eatWhile(/[\w.%]/), k("number", "unit"))
            : e.match(/^-[\w\\\-]*/)
            ? (e.eatWhile(/[\w\\\-]/),
              e.match(/^\s*:/, !1)
                ? k("variable-2", "variable-definition")
                : k("variable-2", "variable"))
            : e.match(/^\w+-/)
            ? k("meta", "meta")
            : void 0;
        }
        function C(e) {
          return function (t, n) {
            for (var r, i = !1; null != (r = t.next()); ) {
              if (r == e && !i) {
                ")" == e && t.backUp(1);
                break;
              }
              i = !i && "\\" == r;
            }
            return (
              (r == e || (!i && ")" != e)) && (n.tokenize = null),
              k("string", "string")
            );
          };
        }
        function L(e, t) {
          return (
            e.next(),
            e.match(/^\s*[\"\')]/, !1)
              ? (t.tokenize = null)
              : (t.tokenize = C(")")),
            k(null, "(")
          );
        }
        function T(e, t, n) {
          (this.type = e), (this.indent = t), (this.prev = n);
        }
        function M(e, t, n, r) {
          return (
            (e.context = new T(
              n,
              t.indentation() + (!1 === r ? 0 : a),
              e.context
            )),
            n
          );
        }
        function O(e) {
          return e.context.prev && (e.context = e.context.prev), e.context.type;
        }
        function E(e, t, n) {
          return _[n.context.type](e, t, n);
        }
        function A(e, t, n, r) {
          for (var i = r || 1; i > 0; i--) n.context = n.context.prev;
          return E(e, t, n);
        }
        function N(e) {
          var t = e.current().toLowerCase();
          o = v.hasOwnProperty(t)
            ? "atom"
            : g.hasOwnProperty(t)
            ? "keyword"
            : "variable";
        }
        var _ = {
          top: function (e, t, n) {
            if ("{" == e) return M(n, t, "block");
            if ("}" == e && n.context.prev) return O(n);
            if (w && /@component/i.test(e)) return M(n, t, "atComponentBlock");
            if (/^@(-moz-)?document$/i.test(e)) return M(n, t, "documentTypes");
            if (/^@(media|supports|(-moz-)?document|import)$/i.test(e))
              return M(n, t, "atBlock");
            if (/^@(font-face|counter-style)/i.test(e))
              return (n.stateArg = e), "restricted_atBlock_before";
            if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e))
              return "keyframes";
            if (e && "@" == e.charAt(0)) return M(n, t, "at");
            if ("hash" == e) o = "builtin";
            else if ("word" == e) o = "tag";
            else {
              if ("variable-definition" == e) return "maybeprop";
              if ("interpolation" == e) return M(n, t, "interpolation");
              if (":" == e) return "pseudo";
              if (y && "(" == e) return M(n, t, "parens");
            }
            return n.context.type;
          },
          block: function (e, t, n) {
            if ("word" == e) {
              var r = t.current().toLowerCase();
              return f.hasOwnProperty(r)
                ? ((o = "property"), "maybeprop")
                : h.hasOwnProperty(r)
                ? ((o = x ? "string-2" : "property"), "maybeprop")
                : y
                ? ((o = t.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag"),
                  "block")
                : ((o += " error"), "maybeprop");
            }
            return "meta" == e
              ? "block"
              : y || ("hash" != e && "qualifier" != e)
              ? _.top(e, t, n)
              : ((o = "error"), "block");
          },
          maybeprop: function (e, t, n) {
            return ":" == e ? M(n, t, "prop") : E(e, t, n);
          },
          prop: function (e, t, n) {
            if (";" == e) return O(n);
            if ("{" == e && y) return M(n, t, "propBlock");
            if ("}" == e || "{" == e) return A(e, t, n);
            if ("(" == e) return M(n, t, "parens");
            if (
              "hash" != e ||
              /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(
                t.current()
              )
            ) {
              if ("word" == e) N(t);
              else if ("interpolation" == e) return M(n, t, "interpolation");
            } else o += " error";
            return "prop";
          },
          propBlock: function (e, t, n) {
            return "}" == e
              ? O(n)
              : "word" == e
              ? ((o = "property"), "maybeprop")
              : n.context.type;
          },
          parens: function (e, t, n) {
            return "{" == e || "}" == e
              ? A(e, t, n)
              : ")" == e
              ? O(n)
              : "(" == e
              ? M(n, t, "parens")
              : "interpolation" == e
              ? M(n, t, "interpolation")
              : ("word" == e && N(t), "parens");
          },
          pseudo: function (e, t, n) {
            return "meta" == e
              ? "pseudo"
              : "word" == e
              ? ((o = "variable-3"), n.context.type)
              : E(e, t, n);
          },
          documentTypes: function (e, t, n) {
            return "word" == e && l.hasOwnProperty(t.current())
              ? ((o = "tag"), n.context.type)
              : _.atBlock(e, t, n);
          },
          atBlock: function (e, t, n) {
            if ("(" == e) return M(n, t, "atBlock_parens");
            if ("}" == e || ";" == e) return A(e, t, n);
            if ("{" == e) return O(n) && M(n, t, y ? "block" : "top");
            if ("interpolation" == e) return M(n, t, "interpolation");
            if ("word" == e) {
              var r = t.current().toLowerCase();
              o =
                "only" == r || "not" == r || "and" == r || "or" == r
                  ? "keyword"
                  : c.hasOwnProperty(r)
                  ? "attribute"
                  : u.hasOwnProperty(r)
                  ? "property"
                  : d.hasOwnProperty(r)
                  ? "keyword"
                  : f.hasOwnProperty(r)
                  ? "property"
                  : h.hasOwnProperty(r)
                  ? x
                    ? "string-2"
                    : "property"
                  : v.hasOwnProperty(r)
                  ? "atom"
                  : g.hasOwnProperty(r)
                  ? "keyword"
                  : "error";
            }
            return n.context.type;
          },
          atComponentBlock: function (e, t, n) {
            return "}" == e
              ? A(e, t, n)
              : "{" == e
              ? O(n) && M(n, t, y ? "block" : "top", !1)
              : ("word" == e && (o = "error"), n.context.type);
          },
          atBlock_parens: function (e, t, n) {
            return ")" == e
              ? O(n)
              : "{" == e || "}" == e
              ? A(e, t, n, 2)
              : _.atBlock(e, t, n);
          },
          restricted_atBlock_before: function (e, t, n) {
            return "{" == e
              ? M(n, t, "restricted_atBlock")
              : "word" == e && "@counter-style" == n.stateArg
              ? ((o = "variable"), "restricted_atBlock_before")
              : E(e, t, n);
          },
          restricted_atBlock: function (e, t, n) {
            return "}" == e
              ? ((n.stateArg = null), O(n))
              : "word" == e
              ? ((o =
                  ("@font-face" == n.stateArg &&
                    !p.hasOwnProperty(t.current().toLowerCase())) ||
                  ("@counter-style" == n.stateArg &&
                    !m.hasOwnProperty(t.current().toLowerCase()))
                    ? "error"
                    : "property"),
                "maybeprop")
              : "restricted_atBlock";
          },
          keyframes: function (e, t, n) {
            return "word" == e
              ? ((o = "variable"), "keyframes")
              : "{" == e
              ? M(n, t, "top")
              : E(e, t, n);
          },
          at: function (e, t, n) {
            return ";" == e
              ? O(n)
              : "{" == e || "}" == e
              ? A(e, t, n)
              : ("word" == e ? (o = "tag") : "hash" == e && (o = "builtin"),
                "at");
          },
          interpolation: function (e, t, n) {
            return "}" == e
              ? O(n)
              : "{" == e || ";" == e
              ? A(e, t, n)
              : ("word" == e
                  ? (o = "variable")
                  : "variable" != e && "(" != e && ")" != e && (o = "error"),
                "interpolation");
          },
        };
        return {
          startState: function (e) {
            return {
              tokenize: null,
              state: r ? "block" : "top",
              stateArg: null,
              context: new T(r ? "block" : "top", e || 0, null),
            };
          },
          token: function (e, t) {
            if (!t.tokenize && e.eatSpace()) return null;
            var n = (t.tokenize || S)(e, t);
            return (
              n && "object" == typeof n && ((i = n[1]), (n = n[0])),
              (o = n),
              "comment" != i && (t.state = _[t.state](i, e, t)),
              o
            );
          },
          indent: function (e, t) {
            var n = e.context,
              r = t && t.charAt(0),
              i = n.indent;
            return (
              "prop" != n.type || ("}" != r && ")" != r) || (n = n.prev),
              n.prev &&
                ("}" != r ||
                ("block" != n.type &&
                  "top" != n.type &&
                  "interpolation" != n.type &&
                  "restricted_atBlock" != n.type)
                  ? ((")" != r ||
                      ("parens" != n.type && "atBlock_parens" != n.type)) &&
                      ("{" != r || ("at" != n.type && "atBlock" != n.type))) ||
                    (i = Math.max(0, n.indent - a))
                  : (i = (n = n.prev).indent)),
              i
            );
          },
          electricChars: "}",
          blockCommentStart: "/*",
          blockCommentEnd: "*/",
          blockCommentContinue: " * ",
          lineComment: b,
          fold: "brace",
        };
      });
      var n = ["domain", "regexp", "url", "url-prefix"],
        r = t(n),
        i = [
          "all",
          "aural",
          "braille",
          "handheld",
          "print",
          "projection",
          "screen",
          "tty",
          "tv",
          "embossed",
        ],
        o = t(i),
        a = [
          "width",
          "min-width",
          "max-width",
          "height",
          "min-height",
          "max-height",
          "device-width",
          "min-device-width",
          "max-device-width",
          "device-height",
          "min-device-height",
          "max-device-height",
          "aspect-ratio",
          "min-aspect-ratio",
          "max-aspect-ratio",
          "device-aspect-ratio",
          "min-device-aspect-ratio",
          "max-device-aspect-ratio",
          "color",
          "min-color",
          "max-color",
          "color-index",
          "min-color-index",
          "max-color-index",
          "monochrome",
          "min-monochrome",
          "max-monochrome",
          "resolution",
          "min-resolution",
          "max-resolution",
          "scan",
          "grid",
          "orientation",
          "device-pixel-ratio",
          "min-device-pixel-ratio",
          "max-device-pixel-ratio",
          "pointer",
          "any-pointer",
          "hover",
          "any-hover",
          "prefers-color-scheme",
        ],
        s = t(a),
        l = [
          "landscape",
          "portrait",
          "none",
          "coarse",
          "fine",
          "on-demand",
          "hover",
          "interlace",
          "progressive",
          "dark",
          "light",
        ],
        c = t(l),
        u = [
          "align-content",
          "align-items",
          "align-self",
          "alignment-adjust",
          "alignment-baseline",
          "all",
          "anchor-point",
          "animation",
          "animation-delay",
          "animation-direction",
          "animation-duration",
          "animation-fill-mode",
          "animation-iteration-count",
          "animation-name",
          "animation-play-state",
          "animation-timing-function",
          "appearance",
          "azimuth",
          "backdrop-filter",
          "backface-visibility",
          "background",
          "background-attachment",
          "background-blend-mode",
          "background-clip",
          "background-color",
          "background-image",
          "background-origin",
          "background-position",
          "background-position-x",
          "background-position-y",
          "background-repeat",
          "background-size",
          "baseline-shift",
          "binding",
          "bleed",
          "block-size",
          "bookmark-label",
          "bookmark-level",
          "bookmark-state",
          "bookmark-target",
          "border",
          "border-bottom",
          "border-bottom-color",
          "border-bottom-left-radius",
          "border-bottom-right-radius",
          "border-bottom-style",
          "border-bottom-width",
          "border-collapse",
          "border-color",
          "border-image",
          "border-image-outset",
          "border-image-repeat",
          "border-image-slice",
          "border-image-source",
          "border-image-width",
          "border-left",
          "border-left-color",
          "border-left-style",
          "border-left-width",
          "border-radius",
          "border-right",
          "border-right-color",
          "border-right-style",
          "border-right-width",
          "border-spacing",
          "border-style",
          "border-top",
          "border-top-color",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-top-style",
          "border-top-width",
          "border-width",
          "bottom",
          "box-decoration-break",
          "box-shadow",
          "box-sizing",
          "break-after",
          "break-before",
          "break-inside",
          "caption-side",
          "caret-color",
          "clear",
          "clip",
          "color",
          "color-profile",
          "column-count",
          "column-fill",
          "column-gap",
          "column-rule",
          "column-rule-color",
          "column-rule-style",
          "column-rule-width",
          "column-span",
          "column-width",
          "columns",
          "contain",
          "content",
          "counter-increment",
          "counter-reset",
          "crop",
          "cue",
          "cue-after",
          "cue-before",
          "cursor",
          "direction",
          "display",
          "dominant-baseline",
          "drop-initial-after-adjust",
          "drop-initial-after-align",
          "drop-initial-before-adjust",
          "drop-initial-before-align",
          "drop-initial-size",
          "drop-initial-value",
          "elevation",
          "empty-cells",
          "fit",
          "fit-position",
          "flex",
          "flex-basis",
          "flex-direction",
          "flex-flow",
          "flex-grow",
          "flex-shrink",
          "flex-wrap",
          "float",
          "float-offset",
          "flow-from",
          "flow-into",
          "font",
          "font-family",
          "font-feature-settings",
          "font-kerning",
          "font-language-override",
          "font-optical-sizing",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-synthesis",
          "font-variant",
          "font-variant-alternates",
          "font-variant-caps",
          "font-variant-east-asian",
          "font-variant-ligatures",
          "font-variant-numeric",
          "font-variant-position",
          "font-variation-settings",
          "font-weight",
          "gap",
          "grid",
          "grid-area",
          "grid-auto-columns",
          "grid-auto-flow",
          "grid-auto-rows",
          "grid-column",
          "grid-column-end",
          "grid-column-gap",
          "grid-column-start",
          "grid-gap",
          "grid-row",
          "grid-row-end",
          "grid-row-gap",
          "grid-row-start",
          "grid-template",
          "grid-template-areas",
          "grid-template-columns",
          "grid-template-rows",
          "hanging-punctuation",
          "height",
          "hyphens",
          "icon",
          "image-orientation",
          "image-rendering",
          "image-resolution",
          "inline-box-align",
          "inset",
          "inset-block",
          "inset-block-end",
          "inset-block-start",
          "inset-inline",
          "inset-inline-end",
          "inset-inline-start",
          "isolation",
          "justify-content",
          "justify-items",
          "justify-self",
          "left",
          "letter-spacing",
          "line-break",
          "line-height",
          "line-height-step",
          "line-stacking",
          "line-stacking-ruby",
          "line-stacking-shift",
          "line-stacking-strategy",
          "list-style",
          "list-style-image",
          "list-style-position",
          "list-style-type",
          "margin",
          "margin-bottom",
          "margin-left",
          "margin-right",
          "margin-top",
          "marks",
          "marquee-direction",
          "marquee-loop",
          "marquee-play-count",
          "marquee-speed",
          "marquee-style",
          "mask-clip",
          "mask-composite",
          "mask-image",
          "mask-mode",
          "mask-origin",
          "mask-position",
          "mask-repeat",
          "mask-size",
          "mask-type",
          "max-block-size",
          "max-height",
          "max-inline-size",
          "max-width",
          "min-block-size",
          "min-height",
          "min-inline-size",
          "min-width",
          "mix-blend-mode",
          "move-to",
          "nav-down",
          "nav-index",
          "nav-left",
          "nav-right",
          "nav-up",
          "object-fit",
          "object-position",
          "offset",
          "offset-anchor",
          "offset-distance",
          "offset-path",
          "offset-position",
          "offset-rotate",
          "opacity",
          "order",
          "orphans",
          "outline",
          "outline-color",
          "outline-offset",
          "outline-style",
          "outline-width",
          "overflow",
          "overflow-style",
          "overflow-wrap",
          "overflow-x",
          "overflow-y",
          "padding",
          "padding-bottom",
          "padding-left",
          "padding-right",
          "padding-top",
          "page",
          "page-break-after",
          "page-break-before",
          "page-break-inside",
          "page-policy",
          "pause",
          "pause-after",
          "pause-before",
          "perspective",
          "perspective-origin",
          "pitch",
          "pitch-range",
          "place-content",
          "place-items",
          "place-self",
          "play-during",
          "position",
          "presentation-level",
          "punctuation-trim",
          "quotes",
          "region-break-after",
          "region-break-before",
          "region-break-inside",
          "region-fragment",
          "rendering-intent",
          "resize",
          "rest",
          "rest-after",
          "rest-before",
          "richness",
          "right",
          "rotate",
          "rotation",
          "rotation-point",
          "row-gap",
          "ruby-align",
          "ruby-overhang",
          "ruby-position",
          "ruby-span",
          "scale",
          "scroll-behavior",
          "scroll-margin",
          "scroll-margin-block",
          "scroll-margin-block-end",
          "scroll-margin-block-start",
          "scroll-margin-bottom",
          "scroll-margin-inline",
          "scroll-margin-inline-end",
          "scroll-margin-inline-start",
          "scroll-margin-left",
          "scroll-margin-right",
          "scroll-margin-top",
          "scroll-padding",
          "scroll-padding-block",
          "scroll-padding-block-end",
          "scroll-padding-block-start",
          "scroll-padding-bottom",
          "scroll-padding-inline",
          "scroll-padding-inline-end",
          "scroll-padding-inline-start",
          "scroll-padding-left",
          "scroll-padding-right",
          "scroll-padding-top",
          "scroll-snap-align",
          "scroll-snap-type",
          "shape-image-threshold",
          "shape-inside",
          "shape-margin",
          "shape-outside",
          "size",
          "speak",
          "speak-as",
          "speak-header",
          "speak-numeral",
          "speak-punctuation",
          "speech-rate",
          "stress",
          "string-set",
          "tab-size",
          "table-layout",
          "target",
          "target-name",
          "target-new",
          "target-position",
          "text-align",
          "text-align-last",
          "text-combine-upright",
          "text-decoration",
          "text-decoration-color",
          "text-decoration-line",
          "text-decoration-skip",
          "text-decoration-skip-ink",
          "text-decoration-style",
          "text-emphasis",
          "text-emphasis-color",
          "text-emphasis-position",
          "text-emphasis-style",
          "text-height",
          "text-indent",
          "text-justify",
          "text-orientation",
          "text-outline",
          "text-overflow",
          "text-rendering",
          "text-shadow",
          "text-size-adjust",
          "text-space-collapse",
          "text-transform",
          "text-underline-position",
          "text-wrap",
          "top",
          "touch-action",
          "transform",
          "transform-origin",
          "transform-style",
          "transition",
          "transition-delay",
          "transition-duration",
          "transition-property",
          "transition-timing-function",
          "translate",
          "unicode-bidi",
          "user-select",
          "vertical-align",
          "visibility",
          "voice-balance",
          "voice-duration",
          "voice-family",
          "voice-pitch",
          "voice-range",
          "voice-rate",
          "voice-stress",
          "voice-volume",
          "volume",
          "white-space",
          "widows",
          "width",
          "will-change",
          "word-break",
          "word-spacing",
          "word-wrap",
          "writing-mode",
          "z-index",
          "clip-path",
          "clip-rule",
          "mask",
          "enable-background",
          "filter",
          "flood-color",
          "flood-opacity",
          "lighting-color",
          "stop-color",
          "stop-opacity",
          "pointer-events",
          "color-interpolation",
          "color-interpolation-filters",
          "color-rendering",
          "fill",
          "fill-opacity",
          "fill-rule",
          "image-rendering",
          "marker",
          "marker-end",
          "marker-mid",
          "marker-start",
          "paint-order",
          "shape-rendering",
          "stroke",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke-width",
          "text-rendering",
          "baseline-shift",
          "dominant-baseline",
          "glyph-orientation-horizontal",
          "glyph-orientation-vertical",
          "text-anchor",
          "writing-mode",
        ],
        d = t(u),
        f = [
          "border-block",
          "border-block-color",
          "border-block-end",
          "border-block-end-color",
          "border-block-end-style",
          "border-block-end-width",
          "border-block-start",
          "border-block-start-color",
          "border-block-start-style",
          "border-block-start-width",
          "border-block-style",
          "border-block-width",
          "border-inline",
          "border-inline-color",
          "border-inline-end",
          "border-inline-end-color",
          "border-inline-end-style",
          "border-inline-end-width",
          "border-inline-start",
          "border-inline-start-color",
          "border-inline-start-style",
          "border-inline-start-width",
          "border-inline-style",
          "border-inline-width",
          "margin-block",
          "margin-block-end",
          "margin-block-start",
          "margin-inline",
          "margin-inline-end",
          "margin-inline-start",
          "padding-block",
          "padding-block-end",
          "padding-block-start",
          "padding-inline",
          "padding-inline-end",
          "padding-inline-start",
          "scroll-snap-stop",
          "scrollbar-3d-light-color",
          "scrollbar-arrow-color",
          "scrollbar-base-color",
          "scrollbar-dark-shadow-color",
          "scrollbar-face-color",
          "scrollbar-highlight-color",
          "scrollbar-shadow-color",
          "scrollbar-track-color",
          "searchfield-cancel-button",
          "searchfield-decoration",
          "searchfield-results-button",
          "searchfield-results-decoration",
          "shape-inside",
          "zoom",
        ],
        h = t(f),
        p = t([
          "font-display",
          "font-family",
          "src",
          "unicode-range",
          "font-variant",
          "font-feature-settings",
          "font-stretch",
          "font-weight",
          "font-style",
        ]),
        m = t([
          "additive-symbols",
          "fallback",
          "negative",
          "pad",
          "prefix",
          "range",
          "speak-as",
          "suffix",
          "symbols",
          "system",
        ]),
        g = [
          "aliceblue",
          "antiquewhite",
          "aqua",
          "aquamarine",
          "azure",
          "beige",
          "bisque",
          "black",
          "blanchedalmond",
          "blue",
          "blueviolet",
          "brown",
          "burlywood",
          "cadetblue",
          "chartreuse",
          "chocolate",
          "coral",
          "cornflowerblue",
          "cornsilk",
          "crimson",
          "cyan",
          "darkblue",
          "darkcyan",
          "darkgoldenrod",
          "darkgray",
          "darkgreen",
          "darkkhaki",
          "darkmagenta",
          "darkolivegreen",
          "darkorange",
          "darkorchid",
          "darkred",
          "darksalmon",
          "darkseagreen",
          "darkslateblue",
          "darkslategray",
          "darkturquoise",
          "darkviolet",
          "deeppink",
          "deepskyblue",
          "dimgray",
          "dodgerblue",
          "firebrick",
          "floralwhite",
          "forestgreen",
          "fuchsia",
          "gainsboro",
          "ghostwhite",
          "gold",
          "goldenrod",
          "gray",
          "grey",
          "green",
          "greenyellow",
          "honeydew",
          "hotpink",
          "indianred",
          "indigo",
          "ivory",
          "khaki",
          "lavender",
          "lavenderblush",
          "lawngreen",
          "lemonchiffon",
          "lightblue",
          "lightcoral",
          "lightcyan",
          "lightgoldenrodyellow",
          "lightgray",
          "lightgreen",
          "lightpink",
          "lightsalmon",
          "lightseagreen",
          "lightskyblue",
          "lightslategray",
          "lightsteelblue",
          "lightyellow",
          "lime",
          "limegreen",
          "linen",
          "magenta",
          "maroon",
          "mediumaquamarine",
          "mediumblue",
          "mediumorchid",
          "mediumpurple",
          "mediumseagreen",
          "mediumslateblue",
          "mediumspringgreen",
          "mediumturquoise",
          "mediumvioletred",
          "midnightblue",
          "mintcream",
          "mistyrose",
          "moccasin",
          "navajowhite",
          "navy",
          "oldlace",
          "olive",
          "olivedrab",
          "orange",
          "orangered",
          "orchid",
          "palegoldenrod",
          "palegreen",
          "paleturquoise",
          "palevioletred",
          "papayawhip",
          "peachpuff",
          "peru",
          "pink",
          "plum",
          "powderblue",
          "purple",
          "rebeccapurple",
          "red",
          "rosybrown",
          "royalblue",
          "saddlebrown",
          "salmon",
          "sandybrown",
          "seagreen",
          "seashell",
          "sienna",
          "silver",
          "skyblue",
          "slateblue",
          "slategray",
          "snow",
          "springgreen",
          "steelblue",
          "tan",
          "teal",
          "thistle",
          "tomato",
          "turquoise",
          "violet",
          "wheat",
          "white",
          "whitesmoke",
          "yellow",
          "yellowgreen",
        ],
        v = t(g),
        y = [
          "above",
          "absolute",
          "activeborder",
          "additive",
          "activecaption",
          "afar",
          "after-white-space",
          "ahead",
          "alias",
          "all",
          "all-scroll",
          "alphabetic",
          "alternate",
          "always",
          "amharic",
          "amharic-abegede",
          "antialiased",
          "appworkspace",
          "arabic-indic",
          "armenian",
          "asterisks",
          "attr",
          "auto",
          "auto-flow",
          "avoid",
          "avoid-column",
          "avoid-page",
          "avoid-region",
          "axis-pan",
          "background",
          "backwards",
          "baseline",
          "below",
          "bidi-override",
          "binary",
          "bengali",
          "blink",
          "block",
          "block-axis",
          "bold",
          "bolder",
          "border",
          "border-box",
          "both",
          "bottom",
          "break",
          "break-all",
          "break-word",
          "bullets",
          "button",
          "button-bevel",
          "buttonface",
          "buttonhighlight",
          "buttonshadow",
          "buttontext",
          "calc",
          "cambodian",
          "capitalize",
          "caps-lock-indicator",
          "caption",
          "captiontext",
          "caret",
          "cell",
          "center",
          "checkbox",
          "circle",
          "cjk-decimal",
          "cjk-earthly-branch",
          "cjk-heavenly-stem",
          "cjk-ideographic",
          "clear",
          "clip",
          "close-quote",
          "col-resize",
          "collapse",
          "color",
          "color-burn",
          "color-dodge",
          "column",
          "column-reverse",
          "compact",
          "condensed",
          "contain",
          "content",
          "contents",
          "content-box",
          "context-menu",
          "continuous",
          "copy",
          "counter",
          "counters",
          "cover",
          "crop",
          "cross",
          "crosshair",
          "currentcolor",
          "cursive",
          "cyclic",
          "darken",
          "dashed",
          "decimal",
          "decimal-leading-zero",
          "default",
          "default-button",
          "dense",
          "destination-atop",
          "destination-in",
          "destination-out",
          "destination-over",
          "devanagari",
          "difference",
          "disc",
          "discard",
          "disclosure-closed",
          "disclosure-open",
          "document",
          "dot-dash",
          "dot-dot-dash",
          "dotted",
          "double",
          "down",
          "e-resize",
          "ease",
          "ease-in",
          "ease-in-out",
          "ease-out",
          "element",
          "ellipse",
          "ellipsis",
          "embed",
          "end",
          "ethiopic",
          "ethiopic-abegede",
          "ethiopic-abegede-am-et",
          "ethiopic-abegede-gez",
          "ethiopic-abegede-ti-er",
          "ethiopic-abegede-ti-et",
          "ethiopic-halehame-aa-er",
          "ethiopic-halehame-aa-et",
          "ethiopic-halehame-am-et",
          "ethiopic-halehame-gez",
          "ethiopic-halehame-om-et",
          "ethiopic-halehame-sid-et",
          "ethiopic-halehame-so-et",
          "ethiopic-halehame-ti-er",
          "ethiopic-halehame-ti-et",
          "ethiopic-halehame-tig",
          "ethiopic-numeric",
          "ew-resize",
          "exclusion",
          "expanded",
          "extends",
          "extra-condensed",
          "extra-expanded",
          "fantasy",
          "fast",
          "fill",
          "fill-box",
          "fixed",
          "flat",
          "flex",
          "flex-end",
          "flex-start",
          "footnotes",
          "forwards",
          "from",
          "geometricPrecision",
          "georgian",
          "graytext",
          "grid",
          "groove",
          "gujarati",
          "gurmukhi",
          "hand",
          "hangul",
          "hangul-consonant",
          "hard-light",
          "hebrew",
          "help",
          "hidden",
          "hide",
          "higher",
          "highlight",
          "highlighttext",
          "hiragana",
          "hiragana-iroha",
          "horizontal",
          "hsl",
          "hsla",
          "hue",
          "icon",
          "ignore",
          "inactiveborder",
          "inactivecaption",
          "inactivecaptiontext",
          "infinite",
          "infobackground",
          "infotext",
          "inherit",
          "initial",
          "inline",
          "inline-axis",
          "inline-block",
          "inline-flex",
          "inline-grid",
          "inline-table",
          "inset",
          "inside",
          "intrinsic",
          "invert",
          "italic",
          "japanese-formal",
          "japanese-informal",
          "justify",
          "kannada",
          "katakana",
          "katakana-iroha",
          "keep-all",
          "khmer",
          "korean-hangul-formal",
          "korean-hanja-formal",
          "korean-hanja-informal",
          "landscape",
          "lao",
          "large",
          "larger",
          "left",
          "level",
          "lighter",
          "lighten",
          "line-through",
          "linear",
          "linear-gradient",
          "lines",
          "list-item",
          "listbox",
          "listitem",
          "local",
          "logical",
          "loud",
          "lower",
          "lower-alpha",
          "lower-armenian",
          "lower-greek",
          "lower-hexadecimal",
          "lower-latin",
          "lower-norwegian",
          "lower-roman",
          "lowercase",
          "ltr",
          "luminosity",
          "malayalam",
          "manipulation",
          "match",
          "matrix",
          "matrix3d",
          "media-controls-background",
          "media-current-time-display",
          "media-fullscreen-button",
          "media-mute-button",
          "media-play-button",
          "media-return-to-realtime-button",
          "media-rewind-button",
          "media-seek-back-button",
          "media-seek-forward-button",
          "media-slider",
          "media-sliderthumb",
          "media-time-remaining-display",
          "media-volume-slider",
          "media-volume-slider-container",
          "media-volume-sliderthumb",
          "medium",
          "menu",
          "menulist",
          "menulist-button",
          "menulist-text",
          "menulist-textfield",
          "menutext",
          "message-box",
          "middle",
          "min-intrinsic",
          "mix",
          "mongolian",
          "monospace",
          "move",
          "multiple",
          "multiple_mask_images",
          "multiply",
          "myanmar",
          "n-resize",
          "narrower",
          "ne-resize",
          "nesw-resize",
          "no-close-quote",
          "no-drop",
          "no-open-quote",
          "no-repeat",
          "none",
          "normal",
          "not-allowed",
          "nowrap",
          "ns-resize",
          "numbers",
          "numeric",
          "nw-resize",
          "nwse-resize",
          "oblique",
          "octal",
          "opacity",
          "open-quote",
          "optimizeLegibility",
          "optimizeSpeed",
          "oriya",
          "oromo",
          "outset",
          "outside",
          "outside-shape",
          "overlay",
          "overline",
          "padding",
          "padding-box",
          "painted",
          "page",
          "paused",
          "persian",
          "perspective",
          "pinch-zoom",
          "plus-darker",
          "plus-lighter",
          "pointer",
          "polygon",
          "portrait",
          "pre",
          "pre-line",
          "pre-wrap",
          "preserve-3d",
          "progress",
          "push-button",
          "radial-gradient",
          "radio",
          "read-only",
          "read-write",
          "read-write-plaintext-only",
          "rectangle",
          "region",
          "relative",
          "repeat",
          "repeating-linear-gradient",
          "repeating-radial-gradient",
          "repeat-x",
          "repeat-y",
          "reset",
          "reverse",
          "rgb",
          "rgba",
          "ridge",
          "right",
          "rotate",
          "rotate3d",
          "rotateX",
          "rotateY",
          "rotateZ",
          "round",
          "row",
          "row-resize",
          "row-reverse",
          "rtl",
          "run-in",
          "running",
          "s-resize",
          "sans-serif",
          "saturation",
          "scale",
          "scale3d",
          "scaleX",
          "scaleY",
          "scaleZ",
          "screen",
          "scroll",
          "scrollbar",
          "scroll-position",
          "se-resize",
          "searchfield",
          "searchfield-cancel-button",
          "searchfield-decoration",
          "searchfield-results-button",
          "searchfield-results-decoration",
          "self-start",
          "self-end",
          "semi-condensed",
          "semi-expanded",
          "separate",
          "serif",
          "show",
          "sidama",
          "simp-chinese-formal",
          "simp-chinese-informal",
          "single",
          "skew",
          "skewX",
          "skewY",
          "skip-white-space",
          "slide",
          "slider-horizontal",
          "slider-vertical",
          "sliderthumb-horizontal",
          "sliderthumb-vertical",
          "slow",
          "small",
          "small-caps",
          "small-caption",
          "smaller",
          "soft-light",
          "solid",
          "somali",
          "source-atop",
          "source-in",
          "source-out",
          "source-over",
          "space",
          "space-around",
          "space-between",
          "space-evenly",
          "spell-out",
          "square",
          "square-button",
          "start",
          "static",
          "status-bar",
          "stretch",
          "stroke",
          "stroke-box",
          "sub",
          "subpixel-antialiased",
          "svg_masks",
          "super",
          "sw-resize",
          "symbolic",
          "symbols",
          "system-ui",
          "table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row",
          "table-row-group",
          "tamil",
          "telugu",
          "text",
          "text-bottom",
          "text-top",
          "textarea",
          "textfield",
          "thai",
          "thick",
          "thin",
          "threeddarkshadow",
          "threedface",
          "threedhighlight",
          "threedlightshadow",
          "threedshadow",
          "tibetan",
          "tigre",
          "tigrinya-er",
          "tigrinya-er-abegede",
          "tigrinya-et",
          "tigrinya-et-abegede",
          "to",
          "top",
          "trad-chinese-formal",
          "trad-chinese-informal",
          "transform",
          "translate",
          "translate3d",
          "translateX",
          "translateY",
          "translateZ",
          "transparent",
          "ultra-condensed",
          "ultra-expanded",
          "underline",
          "unidirectional-pan",
          "unset",
          "up",
          "upper-alpha",
          "upper-armenian",
          "upper-greek",
          "upper-hexadecimal",
          "upper-latin",
          "upper-norwegian",
          "upper-roman",
          "uppercase",
          "urdu",
          "url",
          "var",
          "vertical",
          "vertical-text",
          "view-box",
          "visible",
          "visibleFill",
          "visiblePainted",
          "visibleStroke",
          "visual",
          "w-resize",
          "wait",
          "wave",
          "wider",
          "window",
          "windowframe",
          "windowtext",
          "words",
          "wrap",
          "wrap-reverse",
          "x-large",
          "x-small",
          "xor",
          "xx-large",
          "xx-small",
        ],
        b = t(y),
        w = n
          .concat(i)
          .concat(a)
          .concat(l)
          .concat(u)
          .concat(f)
          .concat(g)
          .concat(y);
      function x(e, t) {
        for (var n, r = !1; null != (n = e.next()); ) {
          if (r && "/" == n) {
            t.tokenize = null;
            break;
          }
          r = "*" == n;
        }
        return ["comment", "comment"];
      }
      e.registerHelper("hintWords", "css", w),
        e.defineMIME("text/css", {
          documentTypes: r,
          mediaTypes: o,
          mediaFeatures: s,
          mediaValueKeywords: c,
          propertyKeywords: d,
          nonStandardPropertyKeywords: h,
          fontProperties: p,
          counterDescriptors: m,
          colorKeywords: v,
          valueKeywords: b,
          tokenHooks: {
            "/": function (e, t) {
              return !!e.eat("*") && ((t.tokenize = x), x(e, t));
            },
          },
          name: "css",
        }),
        e.defineMIME("text/x-scss", {
          mediaTypes: o,
          mediaFeatures: s,
          mediaValueKeywords: c,
          propertyKeywords: d,
          nonStandardPropertyKeywords: h,
          colorKeywords: v,
          valueKeywords: b,
          fontProperties: p,
          allowNested: !0,
          lineComment: "//",
          tokenHooks: {
            "/": function (e, t) {
              return e.eat("/")
                ? (e.skipToEnd(), ["comment", "comment"])
                : e.eat("*")
                ? ((t.tokenize = x), x(e, t))
                : ["operator", "operator"];
            },
            ":": function (e) {
              return !!e.match(/^\s*\{/, !1) && [null, null];
            },
            $: function (e) {
              return (
                e.match(/^[\w-]+/),
                e.match(/^\s*:/, !1)
                  ? ["variable-2", "variable-definition"]
                  : ["variable-2", "variable"]
              );
            },
            "#": function (e) {
              return !!e.eat("{") && [null, "interpolation"];
            },
          },
          name: "css",
          helperType: "scss",
        }),
        e.defineMIME("text/x-less", {
          mediaTypes: o,
          mediaFeatures: s,
          mediaValueKeywords: c,
          propertyKeywords: d,
          nonStandardPropertyKeywords: h,
          colorKeywords: v,
          valueKeywords: b,
          fontProperties: p,
          allowNested: !0,
          lineComment: "//",
          tokenHooks: {
            "/": function (e, t) {
              return e.eat("/")
                ? (e.skipToEnd(), ["comment", "comment"])
                : e.eat("*")
                ? ((t.tokenize = x), x(e, t))
                : ["operator", "operator"];
            },
            "@": function (e) {
              return e.eat("{")
                ? [null, "interpolation"]
                : !e.match(
                    /^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,
                    !1
                  ) &&
                    (e.eatWhile(/[\w\\\-]/),
                    e.match(/^\s*:/, !1)
                      ? ["variable-2", "variable-definition"]
                      : ["variable-2", "variable"]);
            },
            "&": function () {
              return ["atom", "atom"];
            },
          },
          name: "css",
          helperType: "less",
        }),
        e.defineMIME("text/x-gss", {
          documentTypes: r,
          mediaTypes: o,
          mediaFeatures: s,
          propertyKeywords: d,
          nonStandardPropertyKeywords: h,
          fontProperties: p,
          counterDescriptors: m,
          colorKeywords: v,
          valueKeywords: b,
          supportsAtComponent: !0,
          tokenHooks: {
            "/": function (e, t) {
              return !!e.eat("*") && ((t.tokenize = x), x(e, t));
            },
          },
          name: "css",
          helperType: "gss",
        });
    })(n(1));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineMode("javascript", function (t, n) {
        var r,
          i,
          o = t.indentUnit,
          a = n.statementIndent,
          s = n.jsonld,
          l = n.json || s,
          c = !1 !== n.trackScope,
          u = n.typescript,
          d = n.wordCharacters || /[\w$\xa1-\uffff]/,
          f = (function () {
            function e(e) {
              return { type: e, style: "keyword" };
            }
            var t = e("keyword a"),
              n = e("keyword b"),
              r = e("keyword c"),
              i = e("keyword d"),
              o = e("operator"),
              a = { type: "atom", style: "atom" };
            return {
              if: e("if"),
              while: t,
              with: t,
              else: n,
              do: n,
              try: n,
              finally: n,
              return: i,
              break: i,
              continue: i,
              new: e("new"),
              delete: r,
              void: r,
              throw: r,
              debugger: e("debugger"),
              var: e("var"),
              const: e("var"),
              let: e("var"),
              function: e("function"),
              catch: e("catch"),
              for: e("for"),
              switch: e("switch"),
              case: e("case"),
              default: e("default"),
              in: o,
              typeof: o,
              instanceof: o,
              true: a,
              false: a,
              null: a,
              undefined: a,
              NaN: a,
              Infinity: a,
              this: e("this"),
              class: e("class"),
              super: e("atom"),
              yield: r,
              export: e("export"),
              import: e("import"),
              extends: r,
              await: r,
            };
          })(),
          h = /[+\-*&%=<>!?|~^@]/,
          p =
            /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
        function m(e, t, n) {
          return (r = e), (i = n), t;
        }
        function g(e, t) {
          var n,
            r = e.next();
          if ('"' == r || "'" == r)
            return (
              (t.tokenize =
                ((n = r),
                function (e, t) {
                  var r,
                    i = !1;
                  if (s && "@" == e.peek() && e.match(p))
                    return (t.tokenize = g), m("jsonld-keyword", "meta");
                  for (; null != (r = e.next()) && (r != n || i); )
                    i = !i && "\\" == r;
                  return i || (t.tokenize = g), m("string", "string");
                })),
              t.tokenize(e, t)
            );
          if ("." == r && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
            return m("number", "number");
          if ("." == r && e.match("..")) return m("spread", "meta");
          if (/[\[\]{}\(\),;\:\.]/.test(r)) return m(r);
          if ("=" == r && e.eat(">")) return m("=>", "operator");
          if ("0" == r && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
            return m("number", "number");
          if (/\d/.test(r))
            return (
              e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),
              m("number", "number")
            );
          if ("/" == r)
            return e.eat("*")
              ? ((t.tokenize = v), v(e, t))
              : e.eat("/")
              ? (e.skipToEnd(), m("comment", "comment"))
              : Ze(e, t, 1)
              ? ((function (e) {
                  for (var t, n = !1, r = !1; null != (t = e.next()); ) {
                    if (!n) {
                      if ("/" == t && !r) return;
                      "[" == t ? (r = !0) : r && "]" == t && (r = !1);
                    }
                    n = !n && "\\" == t;
                  }
                })(e),
                e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                m("regexp", "string-2"))
              : (e.eat("="), m("operator", "operator", e.current()));
          if ("`" == r) return (t.tokenize = y), y(e, t);
          if ("#" == r && "!" == e.peek())
            return e.skipToEnd(), m("meta", "meta");
          if ("#" == r && e.eatWhile(d)) return m("variable", "property");
          if (
            ("<" == r && e.match("!--")) ||
            ("-" == r &&
              e.match("->") &&
              !/\S/.test(e.string.slice(0, e.start)))
          )
            return e.skipToEnd(), m("comment", "comment");
          if (h.test(r))
            return (
              (">" == r && t.lexical && ">" == t.lexical.type) ||
                (e.eat("=")
                  ? ("!" != r && "=" != r) || e.eat("=")
                  : /[<>*+\-|&?]/.test(r) && (e.eat(r), ">" == r && e.eat(r))),
              "?" == r && e.eat(".")
                ? m(".")
                : m("operator", "operator", e.current())
            );
          if (d.test(r)) {
            e.eatWhile(d);
            var i = e.current();
            if ("." != t.lastType) {
              if (f.propertyIsEnumerable(i)) {
                var o = f[i];
                return m(o.type, o.style, i);
              }
              if (
                "async" == i &&
                e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)
              )
                return m("async", "keyword", i);
            }
            return m("variable", "variable", i);
          }
        }
        function v(e, t) {
          for (var n, r = !1; (n = e.next()); ) {
            if ("/" == n && r) {
              t.tokenize = g;
              break;
            }
            r = "*" == n;
          }
          return m("comment", "comment");
        }
        function y(e, t) {
          for (var n, r = !1; null != (n = e.next()); ) {
            if (!r && ("`" == n || ("$" == n && e.eat("{")))) {
              t.tokenize = g;
              break;
            }
            r = !r && "\\" == n;
          }
          return m("quasi", "string-2", e.current());
        }
        function b(e, t) {
          t.fatArrowAt && (t.fatArrowAt = null);
          var n = e.string.indexOf("=>", e.start);
          if (!(n < 0)) {
            if (u) {
              var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                e.string.slice(e.start, n)
              );
              r && (n = r.index);
            }
            for (var i = 0, o = !1, a = n - 1; a >= 0; --a) {
              var s = e.string.charAt(a),
                l = "([{}])".indexOf(s);
              if (l >= 0 && l < 3) {
                if (!i) {
                  ++a;
                  break;
                }
                if (0 == --i) {
                  "(" == s && (o = !0);
                  break;
                }
              } else if (l >= 3 && l < 6) ++i;
              else if (d.test(s)) o = !0;
              else if (/["'\/`]/.test(s))
                for (; ; --a) {
                  if (0 == a) return;
                  if (
                    e.string.charAt(a - 1) == s &&
                    "\\" != e.string.charAt(a - 2)
                  ) {
                    a--;
                    break;
                  }
                }
              else if (o && !i) {
                ++a;
                break;
              }
            }
            o && !i && (t.fatArrowAt = a);
          }
        }
        var w = {
          atom: !0,
          number: !0,
          variable: !0,
          string: !0,
          regexp: !0,
          this: !0,
          import: !0,
          "jsonld-keyword": !0,
        };
        function x(e, t, n, r, i, o) {
          (this.indented = e),
            (this.column = t),
            (this.type = n),
            (this.prev = i),
            (this.info = o),
            null != r && (this.align = r);
        }
        function k(e, t) {
          if (!c) return !1;
          for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0;
          for (var r = e.context; r; r = r.prev)
            for (n = r.vars; n; n = n.next) if (n.name == t) return !0;
        }
        function S(e, t, n, r, i) {
          var o = e.cc;
          for (
            C.state = e,
              C.stream = i,
              C.marked = null,
              C.cc = o,
              C.style = t,
              e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);
            ;

          )
            if ((o.length ? o.pop() : l ? q : B)(n, r)) {
              for (; o.length && o[o.length - 1].lex; ) o.pop()();
              return C.marked
                ? C.marked
                : "variable" == n && k(e, r)
                ? "variable-2"
                : t;
            }
        }
        var C = { state: null, column: null, marked: null, cc: null };
        function L() {
          for (var e = arguments.length - 1; e >= 0; e--)
            C.cc.push(arguments[e]);
        }
        function T() {
          return L.apply(null, arguments), !0;
        }
        function M(e, t) {
          for (var n = t; n; n = n.next) if (n.name == e) return !0;
          return !1;
        }
        function O(e) {
          var t = C.state;
          if (((C.marked = "def"), c)) {
            if (t.context)
              if ("var" == t.lexical.info && t.context && t.context.block) {
                var r = (function e(t, n) {
                  if (n) {
                    if (n.block) {
                      var r = e(t, n.prev);
                      return r
                        ? r == n.prev
                          ? n
                          : new A(r, n.vars, !0)
                        : null;
                    }
                    return M(t, n.vars)
                      ? n
                      : new A(n.prev, new N(t, n.vars), !1);
                  }
                  return null;
                })(e, t.context);
                if (null != r) return void (t.context = r);
              } else if (!M(e, t.localVars))
                return void (t.localVars = new N(e, t.localVars));
            n.globalVars &&
              !M(e, t.globalVars) &&
              (t.globalVars = new N(e, t.globalVars));
          }
        }
        function E(e) {
          return (
            "public" == e ||
            "private" == e ||
            "protected" == e ||
            "abstract" == e ||
            "readonly" == e
          );
        }
        function A(e, t, n) {
          (this.prev = e), (this.vars = t), (this.block = n);
        }
        function N(e, t) {
          (this.name = e), (this.next = t);
        }
        var _ = new N("this", new N("arguments", null));
        function P() {
          (C.state.context = new A(C.state.context, C.state.localVars, !1)),
            (C.state.localVars = _);
        }
        function R() {
          (C.state.context = new A(C.state.context, C.state.localVars, !0)),
            (C.state.localVars = null);
        }
        function j() {
          (C.state.localVars = C.state.context.vars),
            (C.state.context = C.state.context.prev);
        }
        function H(e, t) {
          var n = function () {
            var n = C.state,
              r = n.indented;
            if ("stat" == n.lexical.type) r = n.lexical.indented;
            else
              for (var i = n.lexical; i && ")" == i.type && i.align; i = i.prev)
                r = i.indented;
            n.lexical = new x(r, C.stream.column(), e, null, n.lexical, t);
          };
          return (n.lex = !0), n;
        }
        function D() {
          var e = C.state;
          e.lexical.prev &&
            (")" == e.lexical.type && (e.indented = e.lexical.indented),
            (e.lexical = e.lexical.prev));
        }
        function z(e) {
          return function t(n) {
            return n == e
              ? T()
              : ";" == e || "}" == n || ")" == n || "]" == n
              ? L()
              : T(t);
          };
        }
        function B(e, t) {
          return "var" == e
            ? T(H("vardef", t), Se, z(";"), D)
            : "keyword a" == e
            ? T(H("form"), F, B, D)
            : "keyword b" == e
            ? T(H("form"), B, D)
            : "keyword d" == e
            ? C.stream.match(/^\s*$/, !1)
              ? T()
              : T(H("stat"), U, z(";"), D)
            : "debugger" == e
            ? T(z(";"))
            : "{" == e
            ? T(H("}"), R, se, D, j)
            : ";" == e
            ? T()
            : "if" == e
            ? ("else" == C.state.lexical.info &&
                C.state.cc[C.state.cc.length - 1] == D &&
                C.state.cc.pop()(),
              T(H("form"), F, B, D, Ee))
            : "function" == e
            ? T(Pe)
            : "for" == e
            ? T(H("form"), R, Ae, B, j, D)
            : "class" == e || (u && "interface" == t)
            ? ((C.marked = "keyword"),
              T(H("form", "class" == e ? e : t), ze, D))
            : "variable" == e
            ? u && "declare" == t
              ? ((C.marked = "keyword"), T(B))
              : u &&
                ("module" == t || "enum" == t || "type" == t) &&
                C.stream.match(/^\s*\w/, !1)
              ? ((C.marked = "keyword"),
                "enum" == t
                  ? T(Je)
                  : "type" == t
                  ? T(je, z("operator"), fe, z(";"))
                  : T(H("form"), Ce, z("{"), H("}"), se, D, D))
              : u && "namespace" == t
              ? ((C.marked = "keyword"), T(H("form"), q, B, D))
              : u && "abstract" == t
              ? ((C.marked = "keyword"), T(B))
              : T(H("stat"), ee)
            : "switch" == e
            ? T(H("form"), F, z("{"), H("}", "switch"), R, se, D, D, j)
            : "case" == e
            ? T(q, z(":"))
            : "default" == e
            ? T(z(":"))
            : "catch" == e
            ? T(H("form"), P, I, B, D, j)
            : "export" == e
            ? T(H("stat"), We, D)
            : "import" == e
            ? T(H("stat"), $e, D)
            : "async" == e
            ? T(B)
            : "@" == t
            ? T(q, B)
            : L(H("stat"), q, z(";"), D);
        }
        function I(e) {
          if ("(" == e) return T(He, z(")"));
        }
        function q(e, t) {
          return $(e, t, !1);
        }
        function W(e, t) {
          return $(e, t, !0);
        }
        function F(e) {
          return "(" != e ? L() : T(H(")"), U, z(")"), D);
        }
        function $(e, t, n) {
          if (C.state.fatArrowAt == C.stream.start) {
            var r = n ? X : J;
            if ("(" == e) return T(P, H(")"), oe(He, ")"), D, z("=>"), r, j);
            if ("variable" == e) return L(P, Ce, z("=>"), r, j);
          }
          var i = n ? V : G;
          return w.hasOwnProperty(e)
            ? T(i)
            : "function" == e
            ? T(Pe, i)
            : "class" == e || (u && "interface" == t)
            ? ((C.marked = "keyword"), T(H("form"), De, D))
            : "keyword c" == e || "async" == e
            ? T(n ? W : q)
            : "(" == e
            ? T(H(")"), U, z(")"), D, i)
            : "operator" == e || "spread" == e
            ? T(n ? W : q)
            : "[" == e
            ? T(H("]"), Ye, D, i)
            : "{" == e
            ? ae(ne, "}", null, i)
            : "quasi" == e
            ? L(K, i)
            : "new" == e
            ? T(
                (function (e) {
                  return function (t) {
                    return "." == t
                      ? T(e ? Q : Z)
                      : "variable" == t && u
                      ? T(we, e ? V : G)
                      : L(e ? W : q);
                  };
                })(n)
              )
            : T();
        }
        function U(e) {
          return e.match(/[;\}\)\],]/) ? L() : L(q);
        }
        function G(e, t) {
          return "," == e ? T(U) : V(e, t, !1);
        }
        function V(e, t, n) {
          var r = 0 == n ? G : V,
            i = 0 == n ? q : W;
          return "=>" == e
            ? T(P, n ? X : J, j)
            : "operator" == e
            ? /\+\+|--/.test(t) || (u && "!" == t)
              ? T(r)
              : u && "<" == t && C.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
              ? T(H(">"), oe(fe, ">"), D, r)
              : "?" == t
              ? T(q, z(":"), i)
              : T(i)
            : "quasi" == e
            ? L(K, r)
            : ";" != e
            ? "(" == e
              ? ae(W, ")", "call", r)
              : "." == e
              ? T(te, r)
              : "[" == e
              ? T(H("]"), U, z("]"), D, r)
              : u && "as" == t
              ? ((C.marked = "keyword"), T(fe, r))
              : "regexp" == e
              ? ((C.state.lastType = C.marked = "operator"),
                C.stream.backUp(C.stream.pos - C.stream.start - 1),
                T(i))
              : void 0
            : void 0;
        }
        function K(e, t) {
          return "quasi" != e
            ? L()
            : "${" != t.slice(t.length - 2)
            ? T(K)
            : T(q, Y);
        }
        function Y(e) {
          if ("}" == e)
            return (C.marked = "string-2"), (C.state.tokenize = y), T(K);
        }
        function J(e) {
          return b(C.stream, C.state), L("{" == e ? B : q);
        }
        function X(e) {
          return b(C.stream, C.state), L("{" == e ? B : W);
        }
        function Z(e, t) {
          if ("target" == t) return (C.marked = "keyword"), T(G);
        }
        function Q(e, t) {
          if ("target" == t) return (C.marked = "keyword"), T(V);
        }
        function ee(e) {
          return ":" == e ? T(D, B) : L(G, z(";"), D);
        }
        function te(e) {
          if ("variable" == e) return (C.marked = "property"), T();
        }
        function ne(e, t) {
          return "async" == e
            ? ((C.marked = "property"), T(ne))
            : "variable" == e || "keyword" == C.style
            ? ((C.marked = "property"),
              "get" == t || "set" == t
                ? T(re)
                : (u &&
                    C.state.fatArrowAt == C.stream.start &&
                    (n = C.stream.match(/^\s*:\s*/, !1)) &&
                    (C.state.fatArrowAt = C.stream.pos + n[0].length),
                  T(ie)))
            : "number" == e || "string" == e
            ? ((C.marked = s ? "property" : C.style + " property"), T(ie))
            : "jsonld-keyword" == e
            ? T(ie)
            : u && E(t)
            ? ((C.marked = "keyword"), T(ne))
            : "[" == e
            ? T(q, le, z("]"), ie)
            : "spread" == e
            ? T(W, ie)
            : "*" == t
            ? ((C.marked = "keyword"), T(ne))
            : ":" == e
            ? L(ie)
            : void 0;
          var n;
        }
        function re(e) {
          return "variable" != e ? L(ie) : ((C.marked = "property"), T(Pe));
        }
        function ie(e) {
          return ":" == e ? T(W) : "(" == e ? L(Pe) : void 0;
        }
        function oe(e, t, n) {
          function r(i, o) {
            if (n ? n.indexOf(i) > -1 : "," == i) {
              var a = C.state.lexical;
              return (
                "call" == a.info && (a.pos = (a.pos || 0) + 1),
                T(function (n, r) {
                  return n == t || r == t ? L() : L(e);
                }, r)
              );
            }
            return i == t || o == t
              ? T()
              : n && n.indexOf(";") > -1
              ? L(e)
              : T(z(t));
          }
          return function (n, i) {
            return n == t || i == t ? T() : L(e, r);
          };
        }
        function ae(e, t, n) {
          for (var r = 3; r < arguments.length; r++) C.cc.push(arguments[r]);
          return T(H(t, n), oe(e, t), D);
        }
        function se(e) {
          return "}" == e ? T() : L(B, se);
        }
        function le(e, t) {
          if (u) {
            if (":" == e) return T(fe);
            if ("?" == t) return T(le);
          }
        }
        function ce(e, t) {
          if (u && (":" == e || "in" == t)) return T(fe);
        }
        function ue(e) {
          if (u && ":" == e)
            return C.stream.match(/^\s*\w+\s+is\b/, !1) ? T(q, de, fe) : T(fe);
        }
        function de(e, t) {
          if ("is" == t) return (C.marked = "keyword"), T();
        }
        function fe(e, t) {
          return "keyof" == t ||
            "typeof" == t ||
            "infer" == t ||
            "readonly" == t
            ? ((C.marked = "keyword"), T("typeof" == t ? W : fe))
            : "variable" == e || "void" == t
            ? ((C.marked = "type"), T(be))
            : "|" == t || "&" == t
            ? T(fe)
            : "string" == e || "number" == e || "atom" == e
            ? T(be)
            : "[" == e
            ? T(H("]"), oe(fe, "]", ","), D, be)
            : "{" == e
            ? T(H("}"), pe, D, be)
            : "(" == e
            ? T(oe(ye, ")"), he, be)
            : "<" == e
            ? T(oe(fe, ">"), fe)
            : "quasi" == e
            ? L(ge, be)
            : void 0;
        }
        function he(e) {
          if ("=>" == e) return T(fe);
        }
        function pe(e) {
          return e.match(/[\}\)\]]/)
            ? T()
            : "," == e || ";" == e
            ? T(pe)
            : L(me, pe);
        }
        function me(e, t) {
          return "variable" == e || "keyword" == C.style
            ? ((C.marked = "property"), T(me))
            : "?" == t || "number" == e || "string" == e
            ? T(me)
            : ":" == e
            ? T(fe)
            : "[" == e
            ? T(z("variable"), ce, z("]"), me)
            : "(" == e
            ? L(Re, me)
            : e.match(/[;\}\)\],]/)
            ? void 0
            : T();
        }
        function ge(e, t) {
          return "quasi" != e
            ? L()
            : "${" != t.slice(t.length - 2)
            ? T(ge)
            : T(fe, ve);
        }
        function ve(e) {
          if ("}" == e)
            return (C.marked = "string-2"), (C.state.tokenize = y), T(ge);
        }
        function ye(e, t) {
          return ("variable" == e && C.stream.match(/^\s*[?:]/, !1)) || "?" == t
            ? T(ye)
            : ":" == e
            ? T(fe)
            : "spread" == e
            ? T(ye)
            : L(fe);
        }
        function be(e, t) {
          return "<" == t
            ? T(H(">"), oe(fe, ">"), D, be)
            : "|" == t || "." == e || "&" == t
            ? T(fe)
            : "[" == e
            ? T(fe, z("]"), be)
            : "extends" == t || "implements" == t
            ? ((C.marked = "keyword"), T(fe))
            : "?" == t
            ? T(fe, z(":"), fe)
            : void 0;
        }
        function we(e, t) {
          if ("<" == t) return T(H(">"), oe(fe, ">"), D, be);
        }
        function xe() {
          return L(fe, ke);
        }
        function ke(e, t) {
          if ("=" == t) return T(fe);
        }
        function Se(e, t) {
          return "enum" == t
            ? ((C.marked = "keyword"), T(Je))
            : L(Ce, le, Me, Oe);
        }
        function Ce(e, t) {
          return u && E(t)
            ? ((C.marked = "keyword"), T(Ce))
            : "variable" == e
            ? (O(t), T())
            : "spread" == e
            ? T(Ce)
            : "[" == e
            ? ae(Te, "]")
            : "{" == e
            ? ae(Le, "}")
            : void 0;
        }
        function Le(e, t) {
          return "variable" != e || C.stream.match(/^\s*:/, !1)
            ? ("variable" == e && (C.marked = "property"),
              "spread" == e
                ? T(Ce)
                : "}" == e
                ? L()
                : "[" == e
                ? T(q, z("]"), z(":"), Le)
                : T(z(":"), Ce, Me))
            : (O(t), T(Me));
        }
        function Te() {
          return L(Ce, Me);
        }
        function Me(e, t) {
          if ("=" == t) return T(W);
        }
        function Oe(e) {
          if ("," == e) return T(Se);
        }
        function Ee(e, t) {
          if ("keyword b" == e && "else" == t)
            return T(H("form", "else"), B, D);
        }
        function Ae(e, t) {
          return "await" == t ? T(Ae) : "(" == e ? T(H(")"), Ne, D) : void 0;
        }
        function Ne(e) {
          return "var" == e ? T(Se, _e) : "variable" == e ? T(_e) : L(_e);
        }
        function _e(e, t) {
          return ")" == e
            ? T()
            : ";" == e
            ? T(_e)
            : "in" == t || "of" == t
            ? ((C.marked = "keyword"), T(q, _e))
            : L(q, _e);
        }
        function Pe(e, t) {
          return "*" == t
            ? ((C.marked = "keyword"), T(Pe))
            : "variable" == e
            ? (O(t), T(Pe))
            : "(" == e
            ? T(P, H(")"), oe(He, ")"), D, ue, B, j)
            : u && "<" == t
            ? T(H(">"), oe(xe, ">"), D, Pe)
            : void 0;
        }
        function Re(e, t) {
          return "*" == t
            ? ((C.marked = "keyword"), T(Re))
            : "variable" == e
            ? (O(t), T(Re))
            : "(" == e
            ? T(P, H(")"), oe(He, ")"), D, ue, j)
            : u && "<" == t
            ? T(H(">"), oe(xe, ">"), D, Re)
            : void 0;
        }
        function je(e, t) {
          return "keyword" == e || "variable" == e
            ? ((C.marked = "type"), T(je))
            : "<" == t
            ? T(H(">"), oe(xe, ">"), D)
            : void 0;
        }
        function He(e, t) {
          return (
            "@" == t && T(q, He),
            "spread" == e
              ? T(He)
              : u && E(t)
              ? ((C.marked = "keyword"), T(He))
              : u && "this" == e
              ? T(le, Me)
              : L(Ce, le, Me)
          );
        }
        function De(e, t) {
          return "variable" == e ? ze(e, t) : Be(e, t);
        }
        function ze(e, t) {
          if ("variable" == e) return O(t), T(Be);
        }
        function Be(e, t) {
          return "<" == t
            ? T(H(">"), oe(xe, ">"), D, Be)
            : "extends" == t || "implements" == t || (u && "," == e)
            ? ("implements" == t && (C.marked = "keyword"), T(u ? fe : q, Be))
            : "{" == e
            ? T(H("}"), Ie, D)
            : void 0;
        }
        function Ie(e, t) {
          return "async" == e ||
            ("variable" == e &&
              ("static" == t || "get" == t || "set" == t || (u && E(t))) &&
              C.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
            ? ((C.marked = "keyword"), T(Ie))
            : "variable" == e || "keyword" == C.style
            ? ((C.marked = "property"), T(qe, Ie))
            : "number" == e || "string" == e
            ? T(qe, Ie)
            : "[" == e
            ? T(q, le, z("]"), qe, Ie)
            : "*" == t
            ? ((C.marked = "keyword"), T(Ie))
            : u && "(" == e
            ? L(Re, Ie)
            : ";" == e || "," == e
            ? T(Ie)
            : "}" == e
            ? T()
            : "@" == t
            ? T(q, Ie)
            : void 0;
        }
        function qe(e, t) {
          if ("!" == t) return T(qe);
          if ("?" == t) return T(qe);
          if (":" == e) return T(fe, Me);
          if ("=" == t) return T(W);
          var n = C.state.lexical.prev;
          return L(n && "interface" == n.info ? Re : Pe);
        }
        function We(e, t) {
          return "*" == t
            ? ((C.marked = "keyword"), T(Ke, z(";")))
            : "default" == t
            ? ((C.marked = "keyword"), T(q, z(";")))
            : "{" == e
            ? T(oe(Fe, "}"), Ke, z(";"))
            : L(B);
        }
        function Fe(e, t) {
          return "as" == t
            ? ((C.marked = "keyword"), T(z("variable")))
            : "variable" == e
            ? L(W, Fe)
            : void 0;
        }
        function $e(e) {
          return "string" == e
            ? T()
            : "(" == e
            ? L(q)
            : "." == e
            ? L(G)
            : L(Ue, Ge, Ke);
        }
        function Ue(e, t) {
          return "{" == e
            ? ae(Ue, "}")
            : ("variable" == e && O(t),
              "*" == t && (C.marked = "keyword"),
              T(Ve));
        }
        function Ge(e) {
          if ("," == e) return T(Ue, Ge);
        }
        function Ve(e, t) {
          if ("as" == t) return (C.marked = "keyword"), T(Ue);
        }
        function Ke(e, t) {
          if ("from" == t) return (C.marked = "keyword"), T(q);
        }
        function Ye(e) {
          return "]" == e ? T() : L(oe(W, "]"));
        }
        function Je() {
          return L(H("form"), Ce, z("{"), H("}"), oe(Xe, "}"), D, D);
        }
        function Xe() {
          return L(Ce, Me);
        }
        function Ze(e, t, n) {
          return (
            (t.tokenize == g &&
              /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                t.lastType
              )) ||
            ("quasi" == t.lastType &&
              /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0))))
          );
        }
        return (
          (j.lex = !0),
          (D.lex = !0),
          {
            startState: function (e) {
              var t = {
                tokenize: g,
                lastType: "sof",
                cc: [],
                lexical: new x((e || 0) - o, 0, "block", !1),
                localVars: n.localVars,
                context: n.localVars && new A(null, null, !1),
                indented: e || 0,
              };
              return (
                n.globalVars &&
                  "object" == typeof n.globalVars &&
                  (t.globalVars = n.globalVars),
                t
              );
            },
            token: function (e, t) {
              if (
                (e.sol() &&
                  (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1),
                  (t.indented = e.indentation()),
                  b(e, t)),
                t.tokenize != v && e.eatSpace())
              )
                return null;
              var n = t.tokenize(e, t);
              return "comment" == r
                ? n
                : ((t.lastType =
                    "operator" != r || ("++" != i && "--" != i) ? r : "incdec"),
                  S(t, n, r, i, e));
            },
            indent: function (t, r) {
              if (t.tokenize == v || t.tokenize == y) return e.Pass;
              if (t.tokenize != g) return 0;
              var i,
                s = r && r.charAt(0),
                l = t.lexical;
              if (!/^\s*else\b/.test(r))
                for (var c = t.cc.length - 1; c >= 0; --c) {
                  var u = t.cc[c];
                  if (u == D) l = l.prev;
                  else if (u != Ee && u != j) break;
                }
              for (
                ;
                ("stat" == l.type || "form" == l.type) &&
                ("}" == s ||
                  ((i = t.cc[t.cc.length - 1]) &&
                    (i == G || i == V) &&
                    !/^[,\.=+\-*:?[\(]/.test(r)));

              )
                l = l.prev;
              a && ")" == l.type && "stat" == l.prev.type && (l = l.prev);
              var d = l.type,
                f = s == d;
              return "vardef" == d
                ? l.indented +
                    ("operator" == t.lastType || "," == t.lastType
                      ? l.info.length + 1
                      : 0)
                : "form" == d && "{" == s
                ? l.indented
                : "form" == d
                ? l.indented + o
                : "stat" == d
                ? l.indented +
                  ((function (e, t) {
                    return (
                      "operator" == e.lastType ||
                      "," == e.lastType ||
                      h.test(t.charAt(0)) ||
                      /[,.]/.test(t.charAt(0))
                    );
                  })(t, r)
                    ? a || o
                    : 0)
                : "switch" != l.info || f || 0 == n.doubleIndentSwitch
                ? l.align
                  ? l.column + (f ? 0 : 1)
                  : l.indented + (f ? 0 : o)
                : l.indented + (/^(?:case|default)\b/.test(r) ? o : 2 * o);
            },
            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            blockCommentStart: l ? null : "/*",
            blockCommentEnd: l ? null : "*/",
            blockCommentContinue: l ? null : " * ",
            lineComment: l ? null : "//",
            fold: "brace",
            closeBrackets: "()[]{}''\"\"``",
            helperType: l ? "json" : "javascript",
            jsonldMode: s,
            jsonMode: l,
            expressionAllowed: Ze,
            skipExpression: function (t) {
              S(t, "atom", "atom", "true", new e.StringStream("", 2, null));
            },
          }
        );
      }),
        e.registerHelper("wordChars", "javascript", /[\w$]/),
        e.defineMIME("text/javascript", "javascript"),
        e.defineMIME("text/ecmascript", "javascript"),
        e.defineMIME("application/javascript", "javascript"),
        e.defineMIME("application/x-javascript", "javascript"),
        e.defineMIME("application/ecmascript", "javascript"),
        e.defineMIME("application/json", { name: "javascript", json: !0 }),
        e.defineMIME("application/x-json", { name: "javascript", json: !0 }),
        e.defineMIME("application/manifest+json", {
          name: "javascript",
          json: !0,
        }),
        e.defineMIME("application/ld+json", { name: "javascript", jsonld: !0 }),
        e.defineMIME("text/typescript", { name: "javascript", typescript: !0 }),
        e.defineMIME("application/typescript", {
          name: "javascript",
          typescript: !0,
        });
    })(n(1));
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = (e, t, n) => {
      t || (t = {}),
        (t.action = e),
        n ? chrome.tabs.sendMessage(n, t) : chrome.runtime.sendMessage(t);
    };
    const i = ["https://www.google.com/recaptcha"];
    var o = n(12),
      a = n.n(o);
    const s = document.createElement("link");
    s.setAttribute("rel", "stylesheet"),
      s.setAttribute("type", "text/css"),
      s.setAttribute("href", chrome.extension.getURL("css/global.css"));
    const l = document.createElement("link");
    async function c(e) {
      try {
        const { data: t } = await a.a.get(e);
        return t;
      } catch (e) {
        throw e;
      }
    }
    l.setAttribute("rel", "stylesheet"),
      l.setAttribute("type", "text/css"),
      l.setAttribute("href", chrome.extension.getURL("css/hide_scrollbar.css"));
    const u = { mx: 0, my: 0, focused: null };
    function d() {
      return { mx: u.mx, my: u.my };
    }
    var f,
      h,
      p =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',
      m =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>',
      g =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>',
      v =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
      y =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
      b =
        '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">\n\t\t<path d="M40.9,51.2l-6.4,5.3V7.7l6.4,5.3c0.3,0.3,1.1,0.5,1.6,0.5c0.8,0,1.6-0.3,2.1-1.1c1.1-1.1,0.8-2.9-0.3-3.7l-8.8-7.5\n\t\tc-2.1-1.6-5.1-1.6-7.2,0l-8.8,7.5c-1.1,1.1-1.3,2.7-0.3,3.7s2.7,1.3,3.7,0.3l6.4-5.3v48.8L23.1,51c-1.1-1.1-2.9-0.8-3.7,0.3\n\t\tc-0.8,1.1-0.8,2.9,0.3,3.7l8.8,7.5c0.8,1.1,2.1,1.6,3.5,1.6c1.4,0,2.7-0.5,3.7-1.3l8.8-7.5c1.1-1.1,1.3-2.7,0.3-3.7\n\t\tC43.6,50.4,42,50.4,40.9,51.2z"/>\n\t</svg>',
      w =
        '<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n\t\t<path d="M62.6,28.3l-7.5-8.8c-1.1-1.1-2.7-1.3-3.7-0.3s-1.3,2.7-0.3,3.7l5.3,6.4H7.3l5.3-6.4c1.1-1.1,0.8-2.9-0.3-3.7\n\t\tc-1.1-1.1-2.9-0.8-3.7,0.3l-7.5,8.8c-1.6,2.1-1.6,5.1,0,7.2l7.5,8.8c0.3,0.8,1.1,1.1,1.9,1.1c0.5,0,1.3-0.3,1.6-0.5\n\t\tc1.1-1.1,1.3-2.7,0.3-3.7l-5.3-6.4h49.1l-5.3,6.4c-1.1,1.1-0.8,2.9,0.3,3.7c0.5,0.5,1.1,0.5,1.6,0.5c0.8,0,1.6-0.3,2.1-1.1l7.5-8.8\n\t\tC64.5,33.7,64.5,30.5,62.6,28.3z"/>\n\t</svg>',
      x =
        '<svg viewBox="0 0 512 512"><path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>',
      k =
        '<svg viewBox="0 0 448 512"><path fill="currentColor" d="M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z"></path></svg>',
      S =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9"  width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
      C =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>',
      L =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>',
      T =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
      M =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg>',
      O =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>',
      E =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>',
      A =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
      N =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line></svg>',
      _ =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>',
      P =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
      R =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>',
      j =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
      H =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
      D =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>',
      z =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
      B =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path></svg>',
      I =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>',
      q =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
      W =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
      F =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>',
      $ =
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
      U = function (e) {
        return (
          null != e &&
          "object" === (void 0 === e ? "undefined" : $(e)) &&
          1 === e.nodeType &&
          "object" === $(e.style) &&
          "object" === $(e.ownerDocument)
        );
      };
    !(function (e) {
      (e.NONE = "none"), (e.DESCENDANT = "descendant"), (e.CHILD = "child");
    })(f || (f = {})),
      (function (e) {
        (e.id = "id"),
          (e.class = "class"),
          (e.tag = "tag"),
          (e.attribute = "attribute"),
          (e.nthchild = "nthchild"),
          (e.nthoftype = "nthoftype");
      })(h || (h = {}));
    function G(e = "unknown problem", ...t) {
      console.warn("CssSelectorGenerator: " + e, ...t);
    }
    const V = {
      selectors: [h.id, h.class, h.tag, h.attribute],
      includeTag: !1,
      whitelist: [],
      blacklist: [],
      combineWithinSelector: !0,
      combineBetweenSelectors: !0,
      root: null,
      maxCombinations: Number.POSITIVE_INFINITY,
      maxCandidates: Number.POSITIVE_INFINITY,
    };
    function K(e) {
      return Array.isArray(e)
        ? e.filter((e) => {
            return (t = h), (n = e), Object.values(t).includes(n);
            var t, n;
          })
        : [];
    }
    function Y(e) {
      return e instanceof RegExp;
    }
    function J(e) {
      return ["string", "function"].includes(typeof e) || Y(e);
    }
    function X(e) {
      return Array.isArray(e) ? e.filter(J) : [];
    }
    function Z(e) {
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
    function Q(e, t) {
      if (Z(e))
        return (
          e.contains(t) ||
            G(
              "element root mismatch",
              "Provided root does not contain the element. This will most likely result in producing a fallback selector using element's real root node. If you plan to use the selector using provided root (e.g. `root.querySelector`), it will nto work as intended."
            ),
          e
        );
      const n = t.getRootNode({ composed: !1 });
      return Z(n)
        ? (n !== document &&
            G(
              "shadow root inferred",
              "You did not provide a root and the element is a child of Shadow DOM. This will produce a selector using ShadowRoot as a root. If you plan to use the selector using document as a root (e.g. `document.querySelector`), it will not work as intended."
            ),
          n)
        : t.ownerDocument.querySelector(":root");
    }
    function ee(e) {
      return "number" == typeof e ? e : Number.POSITIVE_INFINITY;
    }
    function te(e = []) {
      const [t = [], ...n] = e;
      return 0 === n.length
        ? t
        : n.reduce((e, t) => e.filter((e) => t.includes(e)), t);
    }
    function ne(e) {
      return [].concat(...e);
    }
    function re(e) {
      const t = e.map((e) => {
        if (Y(e)) return (t) => e.test(t);
        if ("function" == typeof e)
          return (t) => {
            const n = e(t);
            return "boolean" != typeof n
              ? (G(
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
          G(
            "pattern matcher invalid",
            "Pattern matching only accepts strings, regular expressions and/or functions. This item is invalid and will be ignored.",
            e
          ),
          () => !1
        );
      });
      return (e) => t.some((t) => t(e));
    }
    function ie(e, t, n) {
      const r = Array.from(Q(n, e[0]).querySelectorAll(t));
      return r.length === e.length && e.every((e) => r.includes(e));
    }
    function oe(e, t) {
      t =
        null != t
          ? t
          : (function (e) {
              return e.ownerDocument.querySelector(":root");
            })(e);
      const n = [];
      let r = e;
      for (; U(r) && r !== t; ) n.push(r), (r = r.parentElement);
      return n;
    }
    function ae(e, t) {
      return te(e.map((e) => oe(e, t)));
    }
    const se = {
        [f.NONE]: { type: f.NONE, value: "" },
        [f.DESCENDANT]: { type: f.DESCENDANT, value: " > " },
        [f.CHILD]: { type: f.CHILD, value: " " },
      },
      le = new RegExp(["^$", "\\s", "^\\d"].join("|")),
      ce = new RegExp(["^$", "^\\d"].join("|")),
      ue = [h.nthoftype, h.tag, h.id, h.class, h.attribute, h.nthchild];
    var de = n(13),
      fe = n.n(de);
    const he = re(["class", "id", "ng-*"]);
    function pe({ nodeName: e }) {
      return `[${e}]`;
    }
    function me({ nodeName: e, nodeValue: t }) {
      return `[${e}='${Ee(t)}']`;
    }
    function ge({ nodeName: e }) {
      return !he(e);
    }
    function ve(e) {
      const t = Array.from(e.attributes).filter(ge);
      return [...t.map(pe), ...t.map(me)];
    }
    function ye(e) {
      return (e.getAttribute("class") || "")
        .trim()
        .split(/\s+/)
        .filter((e) => !ce.test(e))
        .map((e) => "." + Ee(e));
    }
    function be(e) {
      const t = e.getAttribute("id") || "",
        n = "#" + Ee(t),
        r = e.getRootNode({ composed: !1 });
      return !le.test(t) && ie([e], n, r) ? [n] : [];
    }
    function we(e) {
      const t = e.parentNode;
      if (t) {
        const n = Array.from(t.childNodes).filter(U).indexOf(e);
        if (n > -1) return [`:nth-child(${n + 1})`];
      }
      return [];
    }
    function xe(e) {
      return [Ee(e.tagName.toLowerCase())];
    }
    function ke(e) {
      const t = [...new Set(ne(e.map(xe)))];
      return 0 === t.length || t.length > 1 ? [] : [t[0]];
    }
    function Se(e) {
      const t = ke([e])[0],
        n = e.parentElement;
      if (n) {
        const r = Array.from(n.children)
          .filter((e) => e.tagName.toLowerCase() === t)
          .indexOf(e);
        if (r > -1) return [`${t}:nth-of-type(${r + 1})`];
      }
      return [];
    }
    function Ce(e = [], { maxResults: t = Number.POSITIVE_INFINITY } = {}) {
      const n = [];
      let r = 0,
        i = Te(1);
      for (; i.length <= e.length && r < t; )
        (r += 1), n.push(i.map((t) => e[t])), (i = Le(i, e.length - 1));
      return n;
    }
    function Le(e = [], t = 0) {
      const n = e.length;
      if (0 === n) return [];
      const r = [...e];
      r[n - 1] += 1;
      for (let e = n - 1; e >= 0; e--)
        if (r[e] > t) {
          if (0 === e) return Te(n + 1);
          r[e - 1]++, (r[e] = r[e - 1] + 1);
        }
      return r[n - 1] > t ? Te(n + 1) : r;
    }
    function Te(e = 1) {
      return Array.from(Array(e).keys());
    }
    const Me = ":".charCodeAt(0).toString(16).toUpperCase(),
      Oe = /[ !"#$%&'()\[\]{|}<>*+,./;=?@^`~\\]/;
    function Ee(e = "") {
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
                  ? `\\${Me} `
                  : Oe.test(e)
                  ? "\\" + e
                  : escape(e).replace(/%/g, "\\")
              )
              .join("");
          })(e);
    }
    const Ae = {
        tag: ke,
        id: function (e) {
          return 0 === e.length || e.length > 1 ? [] : be(e[0]);
        },
        class: function (e) {
          return te(e.map(ye));
        },
        attribute: function (e) {
          return te(e.map(ve));
        },
        nthchild: function (e) {
          return te(e.map(we));
        },
        nthoftype: function (e) {
          return te(e.map(Se));
        },
      },
      Ne = {
        tag: xe,
        id: be,
        class: ye,
        attribute: ve,
        nthchild: we,
        nthoftype: Se,
      };
    function _e(e, t, n) {
      const r = ne(
        (function (e, t) {
          return (function (e) {
            const {
                selectors: t,
                combineBetweenSelectors: n,
                includeTag: r,
                maxCandidates: i,
              } = e,
              o = n ? Ce(t, { maxResults: i }) : t.map((e) => [e]);
            return r ? o.map(Pe) : o;
          })(t)
            .map((t) =>
              (function (e, t) {
                const n = {};
                e.forEach((e) => {
                  const r = t[e];
                  r.length > 0 && (n[e] = r);
                });
                return fe()(n).map(Re);
              })(t, e)
            )
            .filter((e) => e.length > 0);
        })(
          (function (e, t) {
            const {
                blacklist: n,
                whitelist: r,
                combineWithinSelector: i,
                maxCombinations: o,
              } = t,
              a = re(n),
              s = re(r);
            return (function (e) {
              const { selectors: t, includeTag: n } = e,
                r = [].concat(t);
              n && !r.includes("tag") && r.push("tag");
              return r;
            })(t).reduce((t, n) => {
              const r = (function (e = [], t) {
                return e.sort((e, n) => {
                  const r = t(e),
                    i = t(n);
                  return r && !i ? -1 : !r && i ? 1 : 0;
                });
              })(
                (function (e = [], t, n) {
                  return e.filter((e) => n(e) || !t(e));
                })(
                  (function (e, t) {
                    var n;
                    return (
                      null !== (n = Ae[t]) && void 0 !== n ? n : () => []
                    )(e);
                  })(e, n),
                  a,
                  s
                ),
                s
              );
              return (
                (t[n] = i ? Ce(r, { maxResults: o }) : r.map((e) => [e])), t
              );
            }, {});
          })(e, n),
          n
        )
      );
      return [...new Set(r)];
    }
    function Pe(e) {
      return e.includes(h.tag) || e.includes(h.nthoftype)
        ? [...e]
        : [...e, h.tag];
    }
    function Re(e = {}) {
      const t = [...ue];
      return (
        e[h.tag] && e[h.nthoftype] && t.splice(t.indexOf(h.tag), 1),
        t
          .map((t) => {
            return (r = e)[(n = t)] ? r[n].join("") : "";
            var n, r;
          })
          .join("")
      );
    }
    function je(e, t, n = "", r) {
      const i = (function (e, t) {
        return "" === t
          ? e
          : (function (e, t) {
              return [
                ...e.map((e) => t + " " + e),
                ...e.map((e) => t + " > " + e),
              ];
            })(e, t);
      })(_e(e, r.root, r), n);
      for (const t of i) if (ie(e, t, r.root)) return t;
      return null;
    }
    function He(e) {
      return { value: e, include: !1 };
    }
    function De(e, t, n = f.NONE) {
      const r = {};
      return (
        t.forEach((t) => {
          Reflect.set(
            r,
            t,
            (function (e, t) {
              return Ne[t](e);
            })(e, t).map(He)
          );
        }),
        { element: e, operator: se[n], selectors: r }
      );
    }
    function ze({ selectors: e, operator: t }) {
      let n = [...ue];
      e[h.tag] && e[h.nthoftype] && (n = n.filter((e) => e !== h.tag));
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
    function Be(e) {
      return [
        ":root",
        ...oe(e)
          .reverse()
          .map((e) => {
            const t = De(e, [h.nthchild], f.DESCENDANT);
            return (
              t.selectors.nthchild.forEach((e) => {
                e.include = !0;
              }),
              t
            );
          })
          .map(ze),
      ].join("");
    }
    var Ie = function e(t, n = {}) {
      const r = (function (e) {
          const t = (Array.isArray(e) ? e : [e]).filter(U);
          return [...new Set(t)];
        })(t),
        i = (function (e, t = {}) {
          const n = Object.assign(Object.assign({}, V), t);
          return {
            selectors: K(n.selectors),
            whitelist: X(n.whitelist),
            blacklist: X(n.blacklist),
            root: Q(n.root, e),
            combineWithinSelector: !!n.combineWithinSelector,
            combineBetweenSelectors: !!n.combineBetweenSelectors,
            includeTag: !!n.includeTag,
            maxCombinations: ee(n.maxCombinations),
            maxCandidates: ee(n.maxCandidates),
          };
        })(r[0], n);
      let o = "",
        a = i.root;
      function s() {
        return (function (e, t, n = "", r) {
          if (0 === e.length) return null;
          const i = [e.length > 1 ? e : [], ...ae(e, t).map((e) => [e])];
          for (const e of i) {
            const t = je(e, 0, n, r);
            if (t) return { foundElements: e, selector: t };
          }
          return null;
        })(r, a, o, i);
      }
      let l = s();
      for (; l; ) {
        const { foundElements: e, selector: t } = l;
        if (ie(r, t, i.root)) return t;
        (a = e[0]), (o = t), (l = s());
      }
      return r.length > 1
        ? r.map((t) => e(t, i)).join(", ")
        : (function (e) {
            return e.map(Be).join(", ");
          })(r);
    };
    var qe = {
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
          i = 0,
          o = t;
        do {
          if (i >= n) break;
          if (o.id === e) {
            r = o;
            break;
          }
          i += 1;
        } while ((o = o.parentNode));
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
        return Ie(e, { root: document.body, blacklist: [/(^\[|\]$)/] });
      },
    };
    let We = null,
      Fe = null;
    var $e = {
        createCopyModal: function () {
          const e = document.createElement("hv-copy-modal"),
            t = e.attachShadow({ mode: "open" });
          (We = document.createElement("div")),
            (We.innerHTML = L + " <span>Copied</span>");
          const n = document.createElement("style");
          (n.innerHTML =
            "\n        div {\n            position: fixed;\n            z-index: 5000000000;\n            right: 16px;\n            bottom: -100%;\n            padding: 1rem;\n            display: flex;\n            align-items: center;\n            font-size: 24px;\n            color: #43a047;\n            background: rgb(25, 25, 31);\n            border-radius: 0.2rem;\n            font-weight: 700;\n            transform: scale(0);\n            transition: bottom 0.5s ease-in-out, transform 0.5s ease-in-out;\n        }\n\n        div svg {\n            margin-right: 1rem;\n        }\n\n        div.active {\n            bottom: 16px;\n            transform: scale(1);\n        }\n    "),
            t.appendChild(
              qe.create(
                `<link href="${chrome.extension.getURL(
                  "css/global.css"
                )}" rel="stylesheet" type="text/css">`
              )
            ),
            t.appendChild(n),
            t.appendChild(We),
            document.body.appendChild(e);
        },
        createToast: function () {
          const e = document.createElement("hv-copy-modal"),
            t = e.attachShadow({ mode: "open" });
          (We = document.createElement("div")),
            (We.innerHTML = L + " <span>copied</span>");
          const n = document.createElement("style");
          (n.innerHTML =
            "\n        div {\n            position: fixed;\n            z-index: 500000000;\n            top: 100%;\n            left: 100%;\n            padding: 0.5rem 1rem;\n            display: flex;\n            align-items: center;\n            font-size: 20px;\n            color: white;\n            background: rgb(25, 25, 31);\n            border-radius: 0.2rem;\n            font-weight: 700;\n            transform: scale(0) translate(-50%, -50%);\n            transform-origin: top left;\n            opacity: 0;\n            transition: transform 0.2s ease-in-out;\n            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);\n        }\n\n        div svg {\n            width: 20px;\n            height: 20px;\n            margin-right: 0.5rem;\n        }\n\n        div.active {\n            left: 50%;\n            top: 50%;\n            opacity: 1;\n            transform: scale(1) translate(-50%, -50%);\n        }\n    "),
            t.appendChild(
              qe.create(
                `<link href="${chrome.extension.getURL(
                  "css/global.css"
                )}" rel="stylesheet" type="text/css">`
              )
            ),
            t.appendChild(n),
            t.appendChild(We),
            document.body.appendChild(e);
        },
        show: function (e, t, n) {
          Fe && (We.classList.remove("active"), clearTimeout(Fe), (Fe = null)),
            t
              ? (We.innerHTML = `${t} <span>${e}</span>`)
              : (We.querySelector("span").innerHTML = e),
            n && (We.style.background = n),
            We.classList.add("active"),
            (Fe = setTimeout(() => We.classList.remove("active"), 2e3));
        },
      },
      Ue = n(14),
      Ge = n.n(Ue);
    var Ve = function () {
      (this.element = null), (this.mark = null);
    };
    function Ke(e, t) {
      const n = e.shadowRoot.querySelector("#tag"),
        r = e.shadowRoot.querySelector("#outline"),
        i = r.querySelectorAll("div");
      n && (n.style.background = t), (r.style.borderColor = t);
      for (const e of i) e.style.background = t;
    }
    function Ye(e) {
      const t = e.shadowRoot.querySelector("#outline"),
        n = e.shadowRoot.querySelector("#tag");
      t.classList.add("bounce"), n.classList.add("bounce");
    }
    function Je(e) {
      const t = e.shadowRoot.querySelector("#outline"),
        n = e.shadowRoot.querySelector("#tag");
      t.classList.remove("bounce"), n.classList.remove("bounce");
    }
    function Xe(e, t) {
      if (qe.isSticky(e)) {
        const n = e.getBoundingClientRect();
        (t.style.left = n.left + window.scrollX + "px"),
          (t.style.top = n.top + window.scrollY + "px");
      }
    }
    var Ze = function (e, t, n, r) {
      const i = e.getBoundingClientRect(),
        o = qe.create('<hv-hover dir="ltr"></hv-hover>'),
        a = o.attachShadow({ mode: "open" }),
        s = document.createElement("div");
      s.id = "outline";
      let l = "absolute",
        c = i.left + window.scrollX,
        u = i.top + window.scrollY;
      t && qe.isFixed(e) && ((l = "fixed"), (c = i.left), (u = i.top)),
        (o.style.position = l),
        (o.style.zIndex = "50000000"),
        (o.style.left = c + "px"),
        (o.style.top = u + "px"),
        (o.style.pointerEvents = "none"),
        0 === i.width && 0 === i.height && (o.style.display = "none"),
        n || (n = "red");
      const d = qe.create(
          `\n\t\t<style>\n\t\t\t#tag {\n\t\t\t\tposition: absolute;\n\t\t\t\tz-index: 10;\n\t\t\t\ttop: -20px;\n\t\t\t\tleft: 2px;\n\t\t\t\theight: 20px;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\tfont: normal 10px Arial;\n\t\t\t\tcolor: white;\n\t\t\t\tbackground: ${n};\n\t\t\t\tborder-top-right-radius: 0.2rem;\n\t\t\t\tborder-top-left-radius: 0.2rem;\n\t\t\t\tpadding: 0.2rem 0.5rem;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\n\t\t\t.bounce {\n\t\t\t\tanimation: bounce .6s;\n\t\t\t}\n\n\t\t\t@keyframes bounce {\n\t\t\t\t0% { transform: scale(1.2); opacity: 1 }\n\t\t\t\t50% { transform: scale(1.75); opacity: .7; }\n\t\t\t\t60% { transform: scale(0.75); opacity: 1 }\n\t\t\t\t80% { transform: scale(1.1) }\n\t\t\t\t100% { transform: scale(1) }\n\t\t\t}\n\t\t</style>\n\t`
        ),
        f = i.width - 2,
        h = i.height - 2;
      if (
        ((s.style.border = "1px solid " + n),
        (s.style.position = "absolute"),
        (s.style.zIndex = "1"),
        (s.style.width = f + "px"),
        (s.style.height = h + "px"),
        (s.innerHTML = `\n\t\t<div style="position: absolute; top: -2px; left: -2px; width: 4px; height: 4px; border-radius: 50%; background: ${n};"></div>\n\t\t<div style="position: absolute; top: ${
          h - 2
        }px; left: -2px; width: 4px; height: 4px; border-radius: 50%; background: ${n};"></div>\n\t\t<div style="position: absolute; top: -2px; left: ${
          f - 2
        }px; width: 4px; height: 4px; border-radius: 50%; background: ${n};"></div>\n\t\t<div style="position: absolute; top: ${
          h - 2
        }px; left: ${
          f - 2
        }px; width: 4px; height: 4px; border-radius: 50%; background: ${n};"></div>\n\t`),
        a.appendChild(d),
        a.appendChild(s),
        !r)
      ) {
        const t = document.createElement("div");
        (t.id = "tag"),
          (t.innerHTML = e.tagName.toUpperCase()),
          a.appendChild(t);
      }
      return document.body.appendChild(o), o;
    };
    function Qe(e) {
      const t = qe.create('<hv-inspect-window dir="ltr"></hv-inspect-window>'),
        n = t.attachShadow({ mode: "open" }),
        r = qe.create('<div class="inspect-window"></div>');
      let i = "",
        o = "";
      if (
        (e
          ? ((t.style.position = "absolute"),
            (r.style.position = "absolute"),
            (i = `<ul id="actions">\n\t\t\t\t<li class="action" id="download"><a href="">${T}</a></li>\n\t\t\t\t<li class="action" id="reset">${C}</li>\n\t\t\t\t<li class="action" id="codepen">${R}</li>\n\t\t\t\t<li class="action" id="copy">${S} </li>\n\t\t\t\t<li class="action" id="close">${y}</li>\n\t\t\t</ul>\n\t\t`))
          : ((r.style.pointerEvents = "none"),
            (o = `\n\t\t\t<div class="help">\n\t\t\t\t${j}\n\t\t\t\tLeft click or press space to dock window.\n\t\t\t</div>\n\t\t`)),
        (r.innerHTML = `\n\t\t<div id="header">\n\t\t\t<div id="meta">\n\t\t        <h1 id='tagname'></h1>\n\t\t        <ul id="dimensions">\n\t\t        \t<li>\n\t\t        \t\t${w}\t            \n\t\t            \t<span id="width"></span>\n\t\t        \t</li>\n\t\t        \t<li>\n\t\t\t        \t${b}\n\t\t\t            <span id="height" style="margin-left: 0px;"></span>\n\t\t        \t</li>\t\n\t\t\t\t\t<li id="media_size" style="margin-left: 4px;">\n\t\t            \t${M}\n\t\t            \t<span></span>\n\t\t\t\t\t</li>\n\t\t        </ul>\n\t\t\t</div>\n\t        <div class="space"></div>\n\t        ${i}\n\t    </div>\n\n\t    <div id="scroll">\n        </div>\n\n        <form action="https://codepen.io/pen/define" method="POST" target="_blank">\n\t\t\t<input id="codepen_value" type="hidden" name="data">\n\t\t\t<input id="codepen_open" type="submit">\n\t\t</form>\n\t\t${o}\n\t`),
        e)
      ) {
        const e = qe.create(
          '<div class="dropdown" style="width: 160px;"></div>'
        );
        (e.innerHTML =
          '\n\t\t\t<ul>\n\t\t\t\t<li id="copy_code">Copy code</li>\n\t\t\t\t<li id="copy_changes">Copy changes</li>\n\t\t\t\t<li id="copy_selector">Copy selector</li>\n\t\t\t\t<li id="copy_unique_selector">Copy unique selector</li>\n\t\t\t</ul>\n\t\t'),
          r.querySelector("#copy").appendChild(e);
      }
      return (
        n.appendChild(
          qe.create(
            `<link href="${chrome.extension.getURL(
              "css/global.css"
            )}" rel="stylesheet" type="text/css">`
          )
        ),
        n.appendChild(
          qe.create(
            `<link href="${chrome.extension.getURL(
              "css/inspect/inspectWindow.css"
            )}" rel="stylesheet" type="text/css">`
          )
        ),
        n.appendChild(
          qe.create(
            `<link href="${chrome.extension.getURL(
              "css/inspect/visualEditor.css"
            )}" rel="stylesheet" type="text/css">`
          )
        ),
        n.appendChild(r),
        document.body.appendChild(t),
        r
      );
    }
    const et = [
      "Roboto",
      "Open Sans",
      "Lato",
      "Montserrat",
      "Noto Sans JP",
      "Source Sans Pro",
      "Roboto Condensed",
      "Oswald",
      "Raleway",
      "Roboto Mono",
      "Poppins",
      "Noto Sans",
      "Roboto Slab",
      "Merriweather",
      "PT Sans",
      "Ubuntu",
      "Playfair Display",
      "Muli",
      "Open Sans Condensed",
      "Lora",
      "PT Serif",
      "Nunito",
      "Work Sans",
      "Rubik",
      "Titillium Web",
      "Noto Serif",
      "Quicksand",
      "Fira Sans",
      "Mukta",
      "Nunito Sans",
      "Nanum Gothic",
      "Noto Sans KR",
      "Heebo",
      "PT Sans Narrow",
      "Noto Sans TC",
      "Arimo",
      "Slabo 27px",
      "Barlow",
      "Oxygen",
      "Dosis",
      "Inconsolata",
      "Josefin Sans",
      "Crimson Text",
      "Libre Baskerville",
      "Libre Franklin",
      "Bitter",
      "Karla",
      "Cabin",
      "Anton",
      "Source Code Pro",
      "Hind",
      "Fjalla One",
      "Dancing Script",
      "Lobster",
      "Abel",
      "Hind Siliguri",
      "Indie Flower",
      "Pacifico",
      "Varela Round",
      "Merriweather Sans",
      "Arvo",
      "Exo 2",
      "Amiri",
      "Source Serif Pro",
      "Righteous",
      "Shadows Into Light",
      "Cairo",
      "Overpass",
      "Kanit",
      "Barlow Condensed",
      "IBM Plex Sans",
      "Comfortaa",
      "Questrial",
      "Catamaran",
      "Prompt",
      "Yanone Kaffeesatz",
      "Acme",
      "Asap",
      "Amatic SC",
      "Abril Fatface",
      "Archivo Narrow",
      "EB Garamond",
      "Bree Serif",
      "Martel",
      "Hind Madurai",
      "Noto Sans SC",
      "Zilla Slab",
      "Play",
      "Exo",
      "Maven Pro",
      "Cormorant Garamond",
      "Teko",
      "Domine",
      "Rajdhani",
      "Signika",
      "Patua One",
      "Fira Sans Condensed",
      "Fredoka One",
      "Permanent Marker",
      "Caveat",
      "PT Sans Caption",
      "IBM Plex Serif",
      "Assistant",
      "Ubuntu Condensed",
      "Crete Round",
      "Vollkorn",
      "ABeeZee",
      "Tajawal",
      "Satisfy",
      "Patrick Hand",
      "Monda",
      "Francois One",
      "Noticia Text",
      "Alegreya",
      "Cinzel",
      "Barlow Semi Condensed",
      "Alegreya Sans",
      "Courgette",
      "Alfa Slab One",
      "Rokkitt",
      "Cuprum",
      "Passion One",
      "Tinos",
      "Kalam",
      "Great Vibes",
      "Kaushan Script",
      "Cardo",
      "Luckiest Guy",
      "Lobster Two",
      "Frank Ruhl Libre",
      "Didact Gothic",
      "Noto Serif JP",
      "Pathway Gothic One",
      "News Cycle",
      "Archivo",
      "Russo One",
      "Nanum Myeongjo",
      "Concert One",
      "Archivo Black",
      "Sacramento",
      "Volkhov",
      "Bebas Neue",
      "Quattrocento Sans",
      "Gloria Hallelujah",
      "Special Elite",
      "Hind Vadodara",
      "Parisienne",
      "DM Sans",
      "Istok Web",
      "Ropa Sans",
      "Old Standard TT",
      "Cantarell",
      "Playfair Display SC",
      "Montserrat Alternates",
      "Yantramanav",
      "Taviraj",
      "Advent Pro",
      "Prata",
      "Changa",
      "M PLUS 1p",
      "Fira Sans Extra Condensed",
      "Orbitron",
      "Vidaloka",
      "Lilita One",
      "Economica",
      "Cookie",
      "Poiret One",
      "Philosopher",
      "Hind Guntur",
      "Chivo",
      "Baloo 2",
      "Sriracha",
      "Sarabun",
      "Josefin Slab",
      "PT Mono",
      "Quattrocento",
      "Neuton",
      "Squada One",
      "Lemonada",
      "Bangers",
      "BenchNine",
      "Handlee",
      "Inter",
      "Staatliches",
      "Lalezar",
      "Sawarabi Mincho",
      "Sanchez",
      "Asap Condensed",
      "Sigmar One",
      "Ultra",
      "Markazi Text",
      "Ruda",
      "Damion",
      "Press Start 2P",
      "Hammersmith One",
      "Gudea",
      "Alice",
      "M PLUS Rounded 1c",
      "Monoton",
      "Gentium Basic",
      "Arapey",
      "Marck Script",
      "Neucha",
      "Unica One",
      "Paytone One",
      "Architects Daughter",
      "Yellowtail",
      "Pontano Sans",
      "Homemade Apple",
      "Enriqueta",
      "Audiowide",
      "Bad Script",
      "Mitr",
      "Spectral",
      "Cabin Condensed",
      "Jaldi",
      "Pragati Narrow",
      "Kreon",
      "Basic",
      "Adamina",
      "Khand",
      "Electrolize",
      "Actor",
      "Merienda",
      "Amaranth",
      "Tangerine",
      "Gochi Hand",
      "DM Serif Text",
      "Candal",
      "Black Han Sans",
      "Gentium Book Basic",
      "Rock Salt",
      "Coda",
      "Cormorant",
      "Julius Sans One",
      "Oleo Script",
      "Karma",
      "Nanum Gothic Coding",
      "Ramabhadra",
      "Allura",
      "Gothic A1",
      "Abhaya Libre",
      "El Messiri",
      "Varela",
      "Viga",
      "Coda Caption",
      "Carter One",
      "Signika Negative",
      "Sarala",
      "Saira",
      "Playball",
      "Rambla",
      "Lusitana",
      "Shadows Into Light Two",
      "Saira Condensed",
      "Sawarabi Gothic",
      "Fugaz One",
      "Yrsa",
      "Unna",
      "Cantata One",
      "Sorts Mill Goudy",
      "Yeseva One",
      "Chewy",
      "Jura",
      "Average",
      "Armata",
      "Quantico",
      "Allan",
      "Chakra Petch",
      "Pangolin",
      "Merienda One",
      "Encode Sans",
      "Cedarville Cursive",
      "Covered By Your Grace",
      "Bowlby One SC",
      "Sintony",
      "Fauna One",
      "Alex Brush",
      "Ubuntu Mono",
      "Pridi",
      "Pinyon Script",
      "Spinnaker",
      "Khula",
      "IBM Plex Mono",
      "ZCOOL XiaoWei",
      "Scada",
      "Glegoo",
      "Aclonica",
      "Alef",
      "Mr Dafoe",
      "Lateef",
      "Marcellus",
      "Palanquin",
      "PT Serif Caption",
      "Arsenal",
      "Kelly Slab",
      "Noto Sans HK",
      "Nothing You Could Do",
      "Spartan",
      "Nanum Pen Script",
      "Black Ops One",
      "Fondamento",
      "Caveat Brush",
      "Bai Jamjuree",
      "Cousine",
      "Overlock",
      "Antic Slab",
      "Knewave",
      "Alegreya Sans SC",
      "Rubik Mono One",
      "Share",
      "Boogaloo",
      "Galada",
      "Miriam Libre",
      "Forum",
      "Montserrat Subrayada",
      "Reem Kufi",
      "Fira Mono",
      "Scheherazade",
      "Capriola",
      "Rufina",
      "Anonymous Pro",
      "Gelasio",
      "Rancho",
      "Fredericka the Great",
      "Marcellus SC",
      "Bevan",
      "Martel Sans",
      "Overpass Mono",
      "Tenor Sans",
      "Encode Sans Condensed",
      "Michroma",
      "Mali",
      "Noto Serif SC",
      "Space Mono",
      "VT323",
      "Do Hyeon",
      "Cabin Sketch",
      "Shrikhand",
      "Annie Use Your Telescope",
      "Reenie Beanie",
      "Berkshire Swash",
      "Itim",
      "Gruppo",
      "Modak",
      "Saira Semi Condensed",
      "Aldrich",
      "Antic",
      "Cinzel Decorative",
      "Arima Madurai",
      "Share Tech Mono",
      "Hanuman",
      "Coustard",
      "Arbutus Slab",
      "Just Another Hand",
      "Italianno",
      "DM Serif Display",
      "Krub",
      "Leckerli One",
      "Saira Extra Condensed",
      "Yesteryear",
      "Six Caps",
      "Marmelad",
      "Racing Sans One",
      "Days One",
      "Niconne",
      "Halant",
      "Mada",
      "Mukta Malar",
      "Allerta",
      "Londrina Solid",
      "Suez One",
      "Pattaya",
      "Kosugi Maru",
      "Rasa",
      "Bungee",
      "Molengo",
      "Bentham",
      "Coming Soon",
      "Syncopate",
      "Allerta Stencil",
      "Biryani",
      "Norican",
      "Cambo",
      "Eczar",
      "Trirong",
      "Mallanna",
      "Aleo",
      "Mrs Saint Delafield",
      "Caudex",
      "Nobile",
      "Noto Serif TC",
      "Slabo 13px",
      "Changa One",
      "Magra",
      "Grand Hotel",
      "Judson",
      "Average Sans",
      "Telex",
      "Kameron",
      "Copse",
      "Contrail One",
      "Rochester",
      "Geo",
      "IM Fell Double Pica",
      "Kadwa",
      "Alegreya SC",
      "Sunflower",
      "Bungee Inline",
      "Arizonia",
      "Aladin",
      "Cutive Mono",
      "Buenard",
      "Lustria",
      "Oranienbaum",
      "Red Hat Display",
      "Raleway Dots",
      "Suranna",
      "Jockey One",
      "IBM Plex Sans Condensed",
      "Bubblegum Sans",
      "Graduate",
      "Titan One",
      "Lexend Deca",
      "Bowlby One",
      "Amethysta",
      "Petit Formal Script",
      "Rozha One",
      "Nanum Brush Script",
      "Love Ya Like A Sister",
      "Delius",
      "Maitree",
      "Baloo Chettan 2",
      "Carrois Gothic",
      "Cambay",
      "Marvel",
      "Ovo",
      "Public Sans",
      "Schoolbell",
      "Ceviche One",
      "Rye",
      "Sofia",
      "Gurajada",
      "Radley",
      "Carme",
      "Lemon",
      "Amiko",
      "Secular One",
      "Freckle Face",
      "Nixie One",
      "Rakkas",
      "Trocchi",
      "Herr Von Muellerhoff",
      "Gilda Display",
      "Voltaire",
      "Oxygen Mono",
      "Palanquin Dark",
      "Averia Serif Libre",
      "Chonburi",
      "Duru Sans",
      "Mukta Vaani",
      "Frijole",
      "Kristi",
      "Rosario",
      "Almarai",
      "Sansita",
      "Belgrano",
      "GFS Didot",
      "Krona One",
      "Federo",
      "Mr De Haviland",
      "Noto Serif KR",
      "Calligraffitti",
      "Emilys Candy",
      "Metrophobic",
      "Faustina",
      "Cutive",
      "Mountains of Christmas",
      "Mate",
      "Seaweed Script",
      "Belleza",
      "Libre Caslon Text",
      "Cormorant Infant",
      "McLaren",
      "Goudy Bookletter 1911",
      "Sue Ellen Francisco",
      "Poly",
      "Pompiere",
      "Megrim",
      "IM Fell English",
      "Chelsea Market",
      "Harmattan",
      "Vast Shadow",
      "Literata",
      "Unkempt",
      "UnifrakturMaguntia",
      "Antic Didone",
      "Athiti",
      "Fresca",
      "Wallpoet",
      "Lekton",
      "Red Hat Text",
      "Gabriela",
      "Proza Libre",
      "Baumans",
      "Jua",
      "Montez",
      "Mirza",
      "Amita",
      "Fanwood Text",
      "Inder",
      "IM Fell DW Pica",
      "Rammetto One",
      "Alike",
      "Corben",
      "Quando",
      "Sniglet",
      "Anaheim",
      "Gravitas One",
      "Niramit",
      "Andada",
      "Vesper Libre",
      "Convergence",
      "Sedgwick Ave",
      "Share Tech",
      "Gugi",
      "Doppio One",
      "Cantora One",
      "Alike Angular",
      "Timmana",
      "Oleo Script Swash Caps",
      "Esteban",
      "Homenaje",
      "Cormorant SC",
      "K2D",
      "La Belle Aurore",
      "Faster One",
      "Patrick Hand SC",
      "Crafty Girls",
      "Numans",
      "Kurale",
      "Limelight",
      "Stardos Stencil",
      "Expletus Sans",
      "Voces",
      "Brawler",
      "Podkova",
      "Rouge Script",
      "Livvic",
      "Battambang",
      "Bungee Shade",
      "Give You Glory",
      "NTR",
      "Mako",
      "Fjord One",
      "Qwigley",
      "Strait",
      "Happy Monkey",
      "Mouse Memoirs",
      "Alata",
      "Mandali",
      "Short Stack",
      "Waiting for the Sunrise",
      "Balthazar",
      "Shojumaru",
      "Encode Sans Expanded",
      "Skranji",
      "Spirax",
      "Katibeh",
      "Dawning of a New Day",
      "Sail",
      "Charm",
      "Oregano",
      "Wendy One",
      "Denk One",
      "IM Fell French Canon SC",
      "Artifika",
      "Meddon",
      "Clicker Script",
      "Cormorant Upright",
      "Ledger",
      "Ibarra Real Nova",
      "Kosugi",
      "Holtwood One SC",
      "Aref Ruqaa",
      "Andika",
      "Iceland",
      "Laila",
      "Bellefair",
      "Finger Paint",
      "BioRhyme",
      "Fontdiner Swanky",
      "Puritan",
      "Zeyada",
      "Imprima",
      "Spicy Rice",
      "Delius Swash Caps",
      "Averia Sans Libre",
      "Sen",
      "B612 Mono",
      "Eater",
      "Farro",
      "Shanti",
      "Walter Turncoat",
      "Comic Neue",
      "The Girl Next Door",
      "Creepster",
      "Aguafina Script",
      "Carrois Gothic SC",
      "Chango",
      "Tauri",
      "Nova Square",
      "Trade Winds",
      "Euphoria Script",
      "Life Savers",
      "Kite One",
      "Loved by the King",
      "Padauk",
      "Ruluko",
      "Baloo Bhaina 2",
      "Tienne",
      "Headland One",
      "Sonsie One",
      "Cherry Swash",
      "Encode Sans Semi Expanded",
      "Spectral SC",
      "Pavanam",
      "Dokdo",
      "Over the Rainbow",
      "Dekko",
      "Sarpanch",
      "Slackey",
      "Bilbo Swash Caps",
      "Codystar",
      "Encode Sans Semi Condensed",
      "Wire One",
      "Salsa",
      "Princess Sofia",
      "Atma",
      "Gafata",
      "David Libre",
      "Ranchers",
      "Metamorphous",
      "Orienta",
      "Manjari",
      "Kotta One",
      "Port Lligat Sans",
      "Nosifer",
      "Medula One",
      "Germania One",
      "Darker Grotesque",
      "Elsie",
      "Ma Shan Zheng",
      "Bilbo",
      "Zilla Slab Highlight",
      "Bubbler One",
      "Rationale",
      "Farsan",
      "Sree Krushnadevaraya",
      "Englebert",
      "Lily Script One",
      "Sirin Stencil",
      "Just Me Again Down Here",
      "Girassol",
      "Yatra One",
      "Vollkorn SC",
      "Vibur",
      "Fascinate Inline",
      "Peralta",
      "Nova Mono",
      "Manuale",
      "Averia Gruesa Libre",
      "Kranky",
      "Prosto One",
      "Grenze",
      "Saira Stencil One",
      "Amarante",
      "Ribeye Marrow",
      "Vampiro One",
      "Port Lligat Slab",
      "Cherry Cream Soda",
      "Ewert",
      "Libre Barcode 39",
      "Ruslan Display",
      "Srisakdi",
      "Arya",
      "Flamenco",
      "Crimson Pro",
      "Trochut",
      "Jacques Francois Shadow",
      "Scope One",
      "Unlock",
      "Baskervville",
      "Asul",
      "Sumana",
      "Ribeye",
      "Khmer",
      "Manrope",
      "Averia Libre",
      "Hepta Slab",
      "Dynalight",
      "IM Fell English SC",
      "B612",
      "Chau Philomene One",
      "Mukta Mahee",
      "Donegal One",
      "Macondo Swash Caps",
      "Mate SC",
      "Gaegu",
      "Meera Inimai",
      "Notable",
      "Sarina",
      "ZCOOL QingKe HuangYou",
      "Asar",
      "Jomolhari",
      "Crushed",
      "Chicle",
      "Habibi",
      "Ranga",
      "League Script",
      "Rosarivo",
      "Akronim",
      "Koulen",
      "Inknut Antiqua",
      "Gamja Flower",
      "Barrio",
      "Big Shoulders Text",
      "Be Vietnam",
      "Engagement",
      "Italiana",
      "Barriecito",
      "Alatsi",
      "Big Shoulders Display",
      "Coiny",
      "Thasadith",
      "Petrona",
      "Paprika",
      "Baloo Tamma 2",
      "Milonga",
      "Tillana",
      "Simonetta",
      "Sura",
      "Chathura",
      "Almendra",
      "IM Fell French Canon",
      "Diplomata",
      "Monsieur La Doulaise",
      "Ramaraja",
      "Nova Round",
      "Miniver",
      "Mystery Quest",
      "Marko One",
      "Sancreek",
      "Lovers Quarrel",
      "Fenix",
      "Overlock SC",
      "Quintessential",
      "Blinker",
      "Mogra",
      "Tulpen One",
      "Diplomata SC",
      "Kumar One",
      "Maiden Orange",
      "Henny Penny",
      "Mansalva",
      "Stalemate",
      "Prociono",
      "Lakki Reddy",
      "Condiment",
      "Stint Ultra Condensed",
      "Stint Ultra Expanded",
      "Poller One",
      "Jost",
      "Dorsa",
      "Baloo Paaji 2",
      "Pirata One",
      "Delius Unicase",
      "UnifrakturCook",
      "Angkor",
      "Cagliostro",
      "Yeon Sung",
      "Hanalei Fill",
      "Kavoon",
      "New Rocker",
      "Hi Melody",
      "Kodchasan",
      "Stoke",
      "Swanky and Moo Moo",
      "Snippet",
      "Londrina Outline",
      "Vibes",
      "Text Me One",
      "Bayon",
      "Uncial Antiqua",
      "Cormorant Unicase",
      "Moul",
      "Rum Raisin",
      "Buda",
      "Flavors",
      "Oxanium",
      "Baloo Thambi 2",
      "Offside",
      "Fira Code",
      "IM Fell Great Primer",
      "Margarine",
      "Stylish",
      "Gupter",
      "Redressed",
      "Calistoga",
      "Eagle Lake",
      "Julee",
      "Libre Barcode 39 Extended Text",
      "Junge",
      "Bigshot One",
      "Mina",
      "Montaga",
      "Nokora",
      "Autour One",
      "Charmonman",
      "Della Respira",
      "Glass Antiqua",
      "Griffy",
      "Metal Mania",
      "Rhodium Libre",
      "IM Fell DW Pica SC",
      "Chilanka",
      "Elsie Swash Caps",
      "Content",
      "Nova Slim",
      "Sedgwick Ave Display",
      "East Sea Dokdo",
      "Wellfleet",
      "Underdog",
      "Revalia",
      "Mrs Sheppards",
      "Song Myung",
      "Chela One",
      "KoHo",
      "Galdeano",
      "Nova Flat",
      "Trykker",
      "Linden Hill",
      "Jim Nightshade",
      "Odor Mean Chey",
      "Joti One",
      "Gorditas",
      "Croissant One",
      "Risque",
      "Bokor",
      "Bahiana",
      "Inika",
      "Baloo Da 2",
      "Jomhuria",
      "Smythe",
      "Major Mono Display",
      "Odibee Sans",
      "Poor Story",
      "Peddana",
      "Fahkwang",
      "Ruthie",
      "Snowburst One",
      "MedievalSharp",
      "Smokum",
      "Monofett",
      "Kantumruy",
      "Arbutus",
      "Iceberg",
      "Oldenburg",
      "Modern Antiqua",
      "Meie Script",
      "Caesar Dressing",
      "Felipa",
      "Sahitya",
      "Plaster",
      "Irish Grover",
      "Libre Barcode 128",
      "Devonshire",
      "Bellota Text",
      "Londrina Shadow",
      "Inria Serif",
      "Keania One",
      "Purple Purse",
      "Libre Barcode 39 Extended",
      "Tomorrow",
      "Original Surfer",
      "Siemreap",
      "Cute Font",
      "Asset",
      "Jacques Francois",
      "Nova Cut",
      "Ravi Prakash",
      "Almendra SC",
      "Galindo",
      "Metal",
      "Libre Caslon Display",
      "Goblin One",
      "GFS Neohellenic",
      "Lancelot",
      "Gidugu",
      "Kirang Haerang",
      "Atomic Age",
      "Lexend Exa",
      "Piedra",
      "Bungee Outline",
      "Kavivanar",
      "Dangrek",
      "IM Fell Great Primer SC",
      "Dr Sugiyama",
      "Liu Jian Mao Cao",
      "Butcherman",
      "Freehand",
      "Courier Prime",
      "Emblema One",
      "Black And White Picture",
      "Gotu",
      "Romanesco",
      "Ruge Boogie",
      "Kulim Park",
      "Caladea",
      "Kumar One Outline",
      "Bungee Hairline",
      "Sunshiney",
      "IM Fell Double Pica SC",
      "Libre Barcode 39 Text",
      "Miss Fajardose",
      "Jolly Lodger",
      "Bonbon",
      "Dhurjati",
      "Almendra Display",
      "Molle",
      "Astloch",
      "Taprom",
      "Preahvihear",
      "Lacquer",
      "Macondo",
      "Libre Barcode 128 Text",
      "Sofadi One",
      "Hanalei",
      "Butterfly Kids",
      "Tenali Ramakrishna",
      "Supermercado One",
      "Sevillana",
      "Seymour One",
      "Fruktur",
      "Erica One",
      "Federant",
      "Mr Bedfort",
      "Beth Ellen",
      "Nova Script",
      "Suwannaphum",
      "ZCOOL KuaiLe",
      "Miltonian Tattoo",
      "Miltonian",
      "Bigelow Rules",
      "Nova Oval",
      "Bellota",
      "Combo",
      "Geostar Fill",
      "Aubrey",
      "Londrina Sketch",
      "Fascinate",
      "Sulphur Point",
      "Solway",
      "Stalinist One",
      "Long Cang",
      "Geostar",
      "Passero One",
      "Kdam Thmor",
      "Gayathri",
      "Inria Sans",
      "Moulpali",
      "Single Day",
      "Lexend Giga",
      "Kenia",
      "Suravaram",
      "Zhi Mang Xing",
      "Chenla",
      "Fasthand",
      "BioRhyme Expanded",
      "Baloo Bhai 2",
      "Warnes",
      "Lexend Tera",
      "Turret Road",
      "Lexend Mega",
      "Viaoda Libre",
      "Bahianita",
      "Lexend Zetta",
      "Baloo Tammudu 2",
      "Lexend Peta",
      "Balsamiq Sans",
      "DM Mono",
    ];
    function tt(e) {
      const t = e.split(" ");
      for (let e in t) t[e] = t[e].charAt(0).toUpperCase() + t[e].slice(1);
      return t.join(" ");
    }
    var nt = {
        find: function (e) {
          return -1 !== et.indexOf(tt(e));
        },
        getGoogleFontsLink: function (e) {
          return (
            "https://fonts.google.com/specimen/" + tt(e).split(" ").join("+")
          );
        },
      },
      rt = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        "indianred ": "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgrey: "#d3d3d3",
        lightgreen: "#90ee90",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370d8",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#d87093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32",
      };
    var it = {
      all: rt,
      findIn: function (e) {
        let t = null;
        for (const [n, r] of Object.entries(rt))
          if (e.includes(n)) {
            t = n;
            break;
          }
        return t;
      },
      convertNameToHex: function (e) {
        if (!e) return null;
        const t = e.toLowerCase();
        return rt[t];
      },
    };
    const ot = [
      "background",
      "background-color",
      "background-image",
      "border",
      "border-right",
      "border-left",
      "border-top",
      "border-bottom",
      "color",
      "box-shadow",
      "text-shadow",
      "fill",
    ];
    function at(e) {
      const t = [],
        n = [],
        r = e.match(
          /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/gi
        );
      if (r)
        for (const e of r) {
          const r = e.match(
            /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/
          );
          if (r && -1 === t.indexOf(r[0])) {
            const e = {
              match: r[0],
              r: parseInt(r[1]),
              g: parseInt(r[2]),
              b: parseInt(r[3]),
            };
            r[4] ? (e.a = parseFloat(r[4])) : (e.hex = lt(e.r, e.g, e.b)),
              n.push(e),
              t.push(e.match);
          }
        }
      return n;
    }
    function st(e) {
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
    }
    function lt(e, t, n) {
      return "#" + ((1 << 24) + (e << 16) + (t << 8) + n).toString(16).slice(1);
    }
    function ct(e) {
      const t = parseInt(e[0]),
        n = parseInt(e[1]),
        r = parseInt(e[2]);
      return { r: t, g: n, b: r, hex: lt(t, n, r) };
    }
    function ut(e) {
      let t = "";
      const n = [];
      for (const [r, i] of Object.entries(e)) {
        (i.includes("#") || i.includes("rgb")) && (t += " " + i);
        const e = it.findIn(i);
        e && n.push(e);
      }
      return { string: t, colors: n };
    }
    var dt = {
      properties: [
        "color",
        "font-family",
        "font-size",
        "font-style",
        "font-variant",
        "font-weight",
        "letter-spacing",
        "line-height",
        "text-align",
        "text-indent",
        "text-transform",
        "vertical-align",
        "white-space",
        "word-spacing",
        "background-attachment",
        "background-color",
        "background-image",
        "background-position",
        "background-repeat",
        "border-top",
        "border-right",
        "border-bottom",
        "border-left",
        "position",
        "top",
        "bottom",
        "right",
        "left",
        "float",
        "display",
        "clear",
        "z-index",
        "list-style",
        "border-collapse",
        "border-spacing",
        "caption-side",
        "empty-cells",
        "table-layout",
        "overflow",
        "cursor",
        "visibility",
        "transition",
        "animation",
        "outline-offset",
        "box-sizing",
        "resize",
        "text-shadow",
        "text-overflow",
        "word-wrap",
        "box-shadow",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-bottom-left-radius",
        "border-bottom-right-radius",
      ],
      filterCSS: function (e) {
        const t = {},
          n = {},
          r = { all: "", left: "", top: "", right: "", bottom: "" },
          i = {
            all: "",
            "bottom-left": "",
            "bottom-right": "",
            "top-left": "",
            "top-right": "",
          };
        let o = {};
        for (const a in e) {
          let s = e[a];
          if ("string" == typeof s)
            if (
              ((s = s.replace(/!important/gs, "").trim()),
              !a.startsWith("border") || a.endsWith("radius"))
            ) {
              if (a.startsWith("border") && a.endsWith("radius")) {
                const e = a.split("-");
                if (e.length > 2) {
                  i[`${e[1]}-${e[2]}`] = s;
                  continue;
                }
                i.all = s;
              } else {
                if ("outline" === a && s.includes("0px")) continue;
                if (a.startsWith("background")) {
                  if ("background" !== a) {
                    o[a] = s;
                    continue;
                  }
                  o.all = s;
                } else if ("animation" === a) {
                  const e = s.split(" "),
                    t = parseInt(s.substring(0, 1));
                  8 !== e.length ||
                    (!s.startsWith(".") && isNaN(t)) ||
                    (e.unshift(e[e.length - 1]), e.splice(e.length - 1, 1)),
                    (s = e.join(" "));
                } else a.startsWith("font") && (n[a] = s);
              }
              t[a] = s;
            } else {
              const e = a.split("-");
              if (s.includes("none")) continue;
              if ((s.includes("0px") && (s = "0px"), 2 === e.length)) {
                r[e[1]] = s;
              } else r.all = s;
            }
        }
        if (
          r.left &&
          r.left === r.right &&
          r.right === r.bottom &&
          r.bottom === r.top &&
          !r.left.includes("none")
        )
          t.border = r.all;
        else
          for (let [e, n] of Object.entries(r))
            n && "all" !== e && (t["border-" + e] = n);
        if (
          i["bottom-left"] &&
          i["bottom-left"] === i["bottom-right"] &&
          i["bottom-right"] === i["top-left"] &&
          i["top-left"] === i["top-right"] &&
          !i["bottom-left"].includes("none")
        )
          t["border-radius"] = i.all;
        else
          for (let [e, n] of Object.entries(i))
            n && "all" !== e && (t[`border-${e}-radius`] = n);
        if (!o.all)
          for (let [e, n] of Object.entries(o)) n && "all" !== e && (t[e] = n);
        if (n.font) {
          const e = n.font.split(" ");
          if (3 === e.length)
            n["font-weight"] && delete t["font-weight"],
              n["font-size"] && delete t["font-size"],
              n["font-family"] && delete t["font-family"];
          else if (2 === e.length)
            n["font-size"] && delete t["font-size"],
              n["font-family"] && delete t["font-family"];
          else
            for (const [e, r] of Object.entries(n)) "font" !== e && delete t[e];
        }
        return t;
      },
      cssToJson: function (e) {
        const t = {};
        if (e) {
          const n = (e = e.replaceAll("\n", "")).split(";");
          for (let e in n) {
            let r = n[e].trim().split(":");
            if (r.length >= 2) {
              const e = r.shift().trim().toLowerCase(),
                n = r
                  .join(":")
                  .split(",")
                  .map((e) => e.trim());
              t[e] = n.join(", ");
            }
          }
        }
        return t;
      },
      getFontsAndColors: function (e, t) {
        let n = [],
          r = "";
        const i = window.getComputedStyle(t);
        for (const t of e.styles) {
          const e = ut(t.rules);
          (n = [...n, ...e.colors]), (r += e.string);
        }
        for (const [t, i] of Object.entries(e.media_queries))
          for (const e of i) {
            const t = ut(e.rules);
            (n = [...n, ...t.colors]), (r += t.string);
          }
        for (const [t, i] of Object.entries(e.animations))
          for (const [e, t] of Object.entries(i)) {
            const e = ut(t);
            (n = [...n, ...e.colors]), (r += e.string);
          }
        const o = r.match(/\b[0-9A-F]{6}\b/gi);
        o &&
          o.map((e) => {
            n.push("#" + e);
          });
        const a = at(r);
        for (const e of a)
          e.a || 0 === e.a
            ? n.push(`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`)
            : n.push(e.hex);
        const s = [],
          l = i.getPropertyValue("font-family").split(",");
        for (let e = 0; e < l.length; e++) {
          const t = { name: l[e].trim().replace(/["']/gi, "") };
          nt.find(t.name) && (t.url = nt.getGoogleFontsLink(t.name)),
            (0 === e || t.url) && s.push(t);
        }
        for (let e = 0; e < n.length; e++) {
          const t = it.convertNameToHex(n[e]);
          t && (n[e] = t);
        }
        return { colors: [...new Set(n)], fonts: s };
      },
      getHtmlAttribs: function (e) {
        const t = [],
          n = e.attributes;
        for (let e of n)
          "style" !== e.name && t.push({ name: e.name, value: e.value });
        return t;
      },
      parseRules: function (e, t, n) {
        const r = {};
        if (t) {
          const i = window.getComputedStyle(t);
          Object.keys(e)
            .sort()
            .forEach((t) => {
              let o = e[t];
              if (
                (n && o.includes("var(") && (o = i.getPropertyValue(t)),
                -1 !== ot.indexOf(t))
              ) {
                const e = o.split("rgb");
                for (const t of e)
                  if (t.startsWith("(")) {
                    const e = t.split(")")[0].match(/\d+/g),
                      n = ct(e).hex;
                    (o = o.replace(`rgb(${e[0]},${e[1]},${e[2]})`, n)),
                      (o = o.replace(`rgb(${e[0]}, ${e[1]}, ${e[2]})`, n));
                  }
              }
              r[t] = o;
            });
        }
        return r;
      },
      syntaxHighlight: function (e, t) {
        if (-1 !== ot.indexOf(e)) {
          for (let [e, n] of Object.entries(it.all)) {
            const n = new RegExp(`\\b${e}\\b`, "gi");
            let r = t.match(n);
            if (r) {
              r = [...new Set(r)];
              for (const e of r)
                t = t.replaceAll(
                  e,
                  `<div contenteditable="false" class="color">\n\t\t\t\t\t\t\t<button id="color-btn" value="${e}" style="background-color: ${e}"></button>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t<span class="color-span">${e}</span>`
                );
            }
          }
          const e = /\b[0-9A-F]{3,6}\b/gi;
          let n = t.match(e);
          if (n) {
            n = [...new Set(n)];
            for (const e of n)
              t = t.replaceAll(
                "#" + e,
                `<div contenteditable="false" class="color">\n\t\t\t    \t\t<button id="color-btn" value="#${e}" style="background-color: #${e}"></button>\n\t\t    \t\t</div> \n\t\t    \t\t<span class="color-span">#${e}</span>`
              );
          }
          const r = at(t);
          for (const e of r)
            t = t.replaceAll(
              e.match,
              `<div contenteditable="false" class="color">\n\t\t    \t\t<button id="color-btn" value="${e.match}" style="background-color: ${e.match}"></button>\n\t    \t\t</div> \n\t    \t\t<span class="color-span">${e.match}</span>`
            );
        }
        if ("background" === e || "background-image" === e) {
          const e = /url\((.*?)\)/gi;
          let n = t.match(e);
          if (n) {
            n = [...new Set(n)];
            for (const e of n) {
              const n = e
                .replace("url(", "")
                .replace(")", "")
                .replaceAll('"', "")
                .replaceAll("'", "");
              t = t.replaceAll(
                e,
                `\n\t\t\t\t\t\t${e}\n\t\t\t\t\t\t<div contenteditable="false" class="url">\n\t\t\t\t\t\t\t<a href="${n}" target="__blank">${H}</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t`
              );
            }
          }
        }
        const n = t.match(
            /[+-]?\d+(\.\d+)?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vm|vh|vmin|vmax|%)/g
          ),
          r = [];
        if (n) {
          const e = n.sort((e, t) => t.length - e.length);
          for (const n of e)
            -1 === r.indexOf(n) &&
              (r.push(n),
              (t = t.replaceAll(n, `<div class="unit">${n}</div>`)));
        }
        return t;
      },
      jsonToCss: function (e) {
        let t = "";
        for (const [n, r] of Object.entries(e)) t += `${n}: ${r};\n`;
        return t;
      },
    };
    let ft = {};
    var ht = {
      set: function (e) {
        ft = e;
      },
      get: function () {
        return ft;
      },
    };
    const pt =
        "any-link|link|defined|empty|enabled|first-child|first-of-type|host|last-child|last-of-type|only-child|optional|required|root",
      mt =
        "hover|focus-visible|focus-within|focus|checked|visited|active|blank|default|disabled|fullscreen|in-range|invalidate|out-of-range|placeholder-shown|valid|intderterminate",
      gt =
        "dir|has|host-context|host|is|lang|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|where",
      vt =
        "after|backdrop|before|cue|cue-region|first-letter|first-line|grammar-error|marker|placeholder|selection|spelling-error",
      yt = { animations: {} };
    function bt() {
      let e = [...document.styleSheets];
      return (
        window.hvStyleIframe.contentDocument &&
          (e = [...e, ...window.hvStyleIframe.contentDocument.styleSheets]),
        e
      );
    }
    function wt(e) {
      const t = e.getAttribute("style");
      return t ? dt.cssToJson(t) : {};
    }
    function xt(e, t) {
      const n = [];
      if (e) {
        const r = e.split(t);
        let i = !1;
        for (let e = 0; e < r.length; e++) {
          const o = r[e].replaceAll("\n"),
            a = o.includes("("),
            s = o.includes(")");
          a && !s
            ? ((i = !0), n.push(o))
            : i
            ? ((n[n.length - 1] += `${t}${o}`), s && (i = !1))
            : n.push(o);
        }
      }
      return n;
    }
    function kt(e, t, n) {
      switch (e.type) {
        case "normal":
          n.normal = { ...n.normal, ...t };
          break;
        case "pseudoClass":
          {
            const r = e.matched;
            n.pseudo_class[r] || (n.pseudo_class[r] = {}),
              (n.pseudo_class[r] = { ...n.pseudo_class[r], ...t });
          }
          break;
        case "pseudoElement": {
          const r = e.matched;
          n.pseudo_element[r] || (n.pseudo_element[r] = {}),
            (n.pseudo_element[r] = { ...n.pseudo_element[r], ...t });
        }
      }
    }
    function St(e, t) {
      let n = !1,
        r = !1;
      try {
        r = e.matches(t);
      } catch (e) {}
      if (r) {
        const e = t.match(new RegExp(`:(${pt})$`, "gi")),
          r = t.match(new RegExp(`:(${mt})`, "gi")),
          i = t.match(new RegExp(`:(${gt})\\((.*)\\)$`, "g"));
        n =
          r && ht.get().inspector.view.pseudo
            ? { type: "pseudoClass", matched: r[0] }
            : i && ht.get().inspector.view.pseudo
            ? { type: "pseudoClass", matched: i[0] }
            : e && ht.get().inspector.view.pseudo
            ? { type: "pseudoClass", matched: e[0] }
            : { type: "normal" };
      } else if (ht.get().inspector.view.pseudo) {
        t.match(new RegExp(`:(${pt})$`, "gi")),
          t.match(new RegExp(`:(${gt})\\((.*)\\)`, "g"));
        const i = t.match(new RegExp(`:(${mt})$`, "gi")),
          o = t.match(new RegExp(`(:|::)(${vt})$`, "gi"));
        if (i) {
          const o = t.replace(new RegExp(`:(${mt})$`, "gi"), "");
          try {
            r = e.matches(o);
          } catch (e) {}
          r && (n = { type: "pseudoClass", matched: i[0] });
        } else if (o) {
          const i = t.replace(new RegExp(`(:|::)(${vt})$`, "gi"), "");
          try {
            r = e.matches(i);
          } catch (e) {}
          r && (n = { type: "pseudoElement", matched: o[0] });
        }
      }
      return n;
    }
    function Ct(e, t, n) {
      if (n[e]) {
        n[e].normal = { ...n[e].normal, ...t.normal };
        for (const [r, i] of Object.entries(t.pseudo_class))
          n[e].pseudo_class[r]
            ? (n[e].pseudo_class[r] = { ...n[e].pseudo_class[r], ...i })
            : (n[e].pseudo_class[r] = i);
        for (const [r, i] of Object.entries(t.pseudo_element))
          n[e].pseudo_element[r]
            ? (n[e].pseudo_element[r] = { ...n[e].pseudo_element[r], ...i })
            : (n[e].pseudo_element[r] = i);
      } else n[e] = t;
    }
    function Lt(e, t) {
      const n = [],
        r = e.rules || e.cssRules;
      for (const e of r) {
        const r = xt(e.selectorText, ",");
        for (const i of r) {
          const r = St(t, i);
          if (r) {
            const t = dt.cssToJson(e.style.cssText);
            n.push({
              selector: i,
              selector_text: e.selectorText,
              rules: t,
              match_result: r,
            });
          }
        }
      }
      return n;
    }
    function Tt(e) {
      const t = [];
      for (const [n, r] of Object.entries(e))
        if ("animation" === n) {
          const e = r.split(",");
          for (const n of e) {
            const e = n.trim().split(" ");
            t.push(e[0]);
          }
        } else if ("animation-name" === n) {
          const e = r.split(",");
          for (const n of e) t.push(n.trim());
        }
      return t;
    }
    function Mt(e, t, n) {
      const r = {};
      let i = [];
      const o = window.getComputedStyle(e).getPropertyValue("animation-name");
      o && (i = o.split(",").map((e) => e.trim()));
      for (const [e, n] of Object.entries(t.pseudo_class)) i = [...i, ...Tt(n)];
      for (const [e, t] of Object.entries(n)) {
        i = [...i, ...Tt(t.normal)];
        for (const [e, n] of Object.entries(t.pseudo_class))
          i = [...i, ...Tt(n)];
      }
      i = [...new Set(i)];
      for (const e of i) yt.animations[e] && (r[e] = yt.animations[e]);
      return r;
    }
    var Ot = {
      computed: function (e) {
        const t = { styles: [], media_queries: {}, animations: {} },
          n = {},
          r = { normal: {}, pseudo_class: {}, pseudo_element: {} };
        let i = [];
        const o = bt();
        for (const t of o) {
          let o = [];
          try {
            o = t.rules || t.cssRules;
          } catch (e) {
            continue;
          }
          for (const t of o)
            if (
              (t instanceof CSSMediaRule ||
                "CSSMediaRule" === t.constructor.name) &&
              ht.get().inspector.view.media
            ) {
              const r = { normal: {}, pseudo_class: {}, pseudo_element: {} },
                i = Lt(t, e);
              for (const e of i) kt(e.match_result, e.rules, r);
              if (
                Object.keys(r.normal).length ||
                Object.keys(r.pseudo_class).length ||
                Object.keys(r.pseudo_element).length
              ) {
                Ct(t.cssText.split("{")[0].trim(), r, n);
              }
            } else if (
              (t instanceof CSSKeyframesRule ||
                "CSSKeyframesRule" === t.constructor.name) &&
              ht.get().inspector.view.animations
            ) {
              const n = t.name,
                r = t.rules || t.cssRules,
                i = {};
              for (const t of r) {
                const n = dt.cssToJson(t.style.cssText);
                i[t.keyText] = dt.parseRules(n, e, !0);
              }
              yt.animations[n] = i;
            } else if (
              t instanceof CSSStyleRule ||
              "CSSStyleRule" === t.constructor.name
            ) {
              const n = xt(t.selectorText, ",");
              for (const o of n) {
                const n = St(e, o);
                if (n) {
                  const e = dt.cssToJson(t.style.cssText);
                  "normal" === n.type &&
                    ((i = [
                      ...Object.keys(r.normal).filter((t) => t in e),
                      ...i,
                    ]),
                    (i = [...new Set(i)])),
                    kt(n, e, r);
                }
              }
            }
        }
        const a = (function (e) {
          const t = [];
          window.hvElementIframe ||
            ((window.hvElementIframe = document.createElement("iframe")),
            document.body.appendChild(window.hvElementIframe),
            (window.hvElementIframe.style.display = "none"));
          const n = window.hvElementIframe.contentDocument,
            r = n.createElement(e.tagName);
          (r.innerHTML = e.innerHTML), n.body.appendChild(r);
          const i = window.getComputedStyle(e),
            o = window.getComputedStyle(r);
          for (let e of dt.properties) {
            const n = o.getPropertyValue(e),
              r = i.getPropertyValue(e);
            n !== r && (t[e] = r);
          }
          return r.remove(), t;
        })(e);
        for (const [e, t] of Object.entries(r.pseudo_class))
          for (const [e, n] of Object.entries(t)) a[e] && delete a[e];
        for (const e of i) a[e] && (r.normal[e] = a[e]);
        (r.normal = dt.filterCSS({ ...a, ...r.normal, ...wt(e) })),
          (t.animations = Mt(e, r, t.media_queries)),
          t.styles.push({
            selector: "",
            type: "normal",
            rules: dt.parseRules(r.normal, e, !0),
          });
        for (const [n, i] of Object.entries(r.pseudo_class))
          t.styles.push({
            selector: n,
            type: "pseudo",
            rules: dt.parseRules(i, e, !0),
          });
        for (const [n, i] of Object.entries(r.pseudo_element))
          t.styles.push({
            selector: n,
            type: "pseudo",
            rules: dt.parseRules(i, e, !0),
          });
        for (const [r, i] of Object.entries(n)) {
          (t.media_queries[r] = []),
            Object.keys(i.normal).length &&
              t.media_queries[r].push({
                selector: "",
                type: "normal",
                rules: dt.parseRules(i.normal, e, !0),
              });
          for (const [n, o] of Object.entries(i.pseudo_class))
            t.media_queries[r].push({
              selector: n,
              type: "pseudo",
              rules: dt.parseRules(o, e, !0),
            });
          for (const [n, o] of Object.entries(i.pseudo_element))
            t.media_queries[r].push({
              selector: n,
              type: "pseudo",
              rules: dt.parseRules(o, e, !0),
            });
        }
        return t;
      },
      selector: function (e) {
        const t = { styles: [], media_queries: {}, animations: {} },
          n = {},
          r = { normal: {}, pseudo_class: {}, pseudo_element: {} },
          i = bt();
        for (const o of i) {
          let i = [];
          try {
            i = o.rules || o.cssRules;
          } catch (e) {
            continue;
          }
          for (const o of i)
            if (
              (o instanceof CSSMediaRule ||
                "CSSMediaRule" === o.constructor.name) &&
              ht.get().inspector.view.media
            ) {
              const r = { normal: {}, pseudo_class: {}, pseudo_element: {} },
                i = Lt(o, e);
              if (i.length) {
                const a = o.cssText.split("{")[0].trim();
                t.media_queries[a] || (t.media_queries[a] = []);
                for (const n of i)
                  t.media_queries[a].push({
                    selector: n.selector_text,
                    type: "normal",
                    rules: dt.parseRules(n.rules, e, !1),
                  });
                for (const e of i) kt(e.match_result, e.rules, r);
                if (
                  Object.keys(r.normal).length ||
                  Object.keys(r.pseudo_class).length ||
                  Object.keys(r.pseudo_element).length
                ) {
                  Ct(o.cssText.split("{")[0].trim(), r, n);
                }
              }
            } else if (
              o instanceof CSSStyleRule ||
              "CSSStyleRule" === o.constructor.name
            ) {
              let n = !1;
              const i = xt(o.selectorText, ",");
              for (const t of i) if (((n = St(e, t)), n)) break;
              if (n) {
                const i = dt.cssToJson(o.style.cssText);
                kt(n, i, r),
                  t.styles.push({
                    selector: o.selectorText,
                    type: "normal",
                    rules: dt.parseRules(i, e, !1),
                  });
              }
            }
        }
        return (t.animations = Mt(e, r, n)), t;
      },
    };
    function Et(e) {
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
    function At(e) {
      let t = e;
      if (e.includes(window.location.host)) {
        const n = e.split(window.location.host);
        n[0].endsWith("//") ||
          n[0].endsWith("www.") ||
          (t = "https://cors-anywhere.herokuapp.com/" + e);
      } else t = "https://cors-anywhere.herokuapp.com/" + e;
      return t;
    }
    function Nt(e, t, n) {
      (this.data = t),
        (this.element = e),
        (this.callback = n),
        (e.value = t),
        e.addEventListener("change", this, !1);
    }
    function _t(e, t, n, r) {
      (e.innerHTML = ""), n && (n.hv_css = t);
      for (const i of t.styles) (i.is_media = !1), Pt(i, e, n, r);
      for (const [i, o] of Object.entries(t.animations)) {
        const t = qe.create('<div class="code-wrapper animation"></div>'),
          a = qe.create(`<h3>@keyframe ${i}</h3>`),
          s = qe.create('<div class="code-section"></div>');
        for (const [e, t] of Object.entries(o)) {
          Pt(
            {
              selector: e,
              type: "animation",
              animation_name: i,
              is_media: !1,
              rules: t,
            },
            s,
            n,
            r
          );
        }
        t.appendChild(a), t.appendChild(s), e.appendChild(t);
      }
      for (const [i, o] of Object.entries(t.media_queries)) {
        const t = qe.create('<div class="code-wrapper media-query"></div>'),
          a = qe.create(`<h3>${i}</h3>`),
          s = qe.create('<div class="code-section"></div>');
        for (const e of o) (e.is_media = !0), (e.condition = i), Pt(e, s, n, r);
        t.appendChild(a), t.appendChild(s), e.appendChild(t);
      }
      const i = e.querySelectorAll("#color-btn");
      for (const e of i) {
        const t = e.getAttribute("value");
        e.addEventListener("click", () => {
          Et(t), $e.show("Copied!");
        });
      }
    }
    function Pt(e, t, n, r) {
      const i = qe.create(`<div class="selectors">${e.selector}</div>`),
        o = qe.create('<ul class="code"></ul>');
      (o.css = e),
        r &&
          (o.setAttribute("contenteditable", "true"),
          o.setAttribute("spellcheck", "false"));
      for (const [t, n] of Object.entries(e.rules)) {
        const e = document.createElement("li");
        e.classList.add("rule");
        const r = dt.syntaxHighlight(t, n);
        (e.innerHTML = `\n\t\t\t<span class="property">${t}</span>: <span class="value">${r}</span>;\n\t\t`),
          o.appendChild(e);
      }
      let a = !1;
      (o.onkeyup = (e) => {
        const t = Rt(e, n, o);
        a || (a = t);
      }),
        (o.onpaste = (e) => {
          e.preventDefault();
          const t = (e.originalEvent || e).clipboardData.getData("text/plain");
          document.execCommand("insertHTML", !1, t);
          const r = Rt(e, n, o);
          a || (a = r);
        }),
        (o.onblur = () => {
          if (a) {
            !(function (e, t, n) {
              _t(e, t.hv_css, t, n);
            })(qe.findParentWithId("code", o, 5), n, r),
              (a = !1);
          }
        }),
        t.appendChild(i),
        t.appendChild(o);
    }
    function Rt(e, t, n) {
      let r = !1;
      const i = dt.cssToJson(e.target.textContent);
      if (
        !(function e(t, n) {
          const r = Object.keys,
            i = typeof t;
          return t && n && "object" === i && i === typeof n
            ? r(t).length === r(n).length && r(t).every((r) => e(t[r], n[r]))
            : t === n;
        })(e.target.css.rules, i)
      ) {
        qe.findParentWithId("scroll", n, 5).showReset(),
          (r = !0),
          (e.target.css.rules = i),
          t.hv_style ||
            ((t.hv_style = qe.create("<style></style>")),
            document.body.appendChild(t.hv_style)),
          (function (e, t) {
            let n = "";
            const r = Ie(t, { root: document.body });
            for (const i of t.hv_css.styles) {
              "animation" === e.css.type ||
                e.css.is_media ||
                i.selector !== e.css.selector ||
                (i.rules = e.css.rules);
              let t = r;
              "pseudo" === i.type && (t += i.selector),
                (n += t + " {\n"),
                (n += dt.jsonToCss(i.rules)),
                (n += "}\n");
            }
            for (const r of Object.keys(t.hv_css.animations)) {
              n += `@keyframes ${r} {\n`;
              const i = t.hv_css.animations[r];
              for (const t of Object.keys(i))
                "animation" !== e.css.type ||
                  e.css.is_media ||
                  t !== e.css.selector ||
                  (i[t] = e.css.rules),
                  (n += t + " {\n"),
                  (n += dt.jsonToCss(i[t])),
                  (n += "}\n");
              n += "}\n";
            }
            for (const i of Object.keys(t.hv_css.media_queries)) {
              const o = t.hv_css.media_queries[i];
              n += i + " {\n";
              for (const t of o) {
                e.css.is_media &&
                  t.selector === e.css.selector &&
                  (t.rules = e.css.rules);
                let i = r;
                "pseudo" === t.type && (i += t.selector),
                  (n += i + " {\n"),
                  (n += dt.jsonToCss(t.rules)),
                  (n += "}\n");
              }
              n += "}\n";
            }
            t.hv_style.innerHTML = n;
          })(e.target, t),
          (function (e) {
            const t = window.getComputedStyle(e),
              n = t
                .getPropertyValue("font-family")
                .split(",")[0]
                .replaceAll('"', "")
                .replaceAll("'", ""),
              r = t.getPropertyValue("font-weight");
            nt.find(n) &&
              (window.hvGoogleFont.fonts[n]
                ? -1 === window.hvGoogleFont.fonts[n].indexOf(r) &&
                  window.hvGoogleFont.fonts[n].push(r)
                : (window.hvGoogleFont.fonts[n] = [r]));
            const i = [];
            for (const [e, t] of Object.entries(window.hvGoogleFont.fonts)) {
              const n = `family=${e.split(" ").join("+")}:wght@${t.join(";")}`;
              i.push(n);
            }
            if (i.length) {
              const e = `https://fonts.googleapis.com/css2?${i.join(
                "&"
              )}&display=swap`;
              window.hvGoogleFont.link.href = e;
            }
          })(t);
      }
      return r;
    }
    (Nt.prototype.handleEvent = function (e) {
      switch (e.type) {
        case "change":
          this.change(this.element.value);
      }
    }),
      (Nt.prototype.change = function (e) {
        (this.data = e), this.callback();
      });
    var jt = { render: _t };
    const Ht = { Computed: "Computed", Selector: "Selector" },
      Dt = {
        current_mode: Ht.Computed,
        enabled: !1,
        inspectWindow: null,
        hidden: !1,
        current_target: {
          element: null,
          css: [],
          colors: [],
          fonts: [],
          attribs: [],
        },
        calculating: !1,
        docked_windows: [],
      };
    function zt() {
      (Dt.enabled = !1),
        (Dt.current_target = {
          element: null,
          css: [],
          colors: [],
          fonts: [],
          attribs: {},
        }),
        Dt.inspectWindow &&
          (Dt.inspectWindow.getRootNode().host.remove(),
          (Dt.inspectWindow = null));
    }
    function Bt(e, t, n) {
      const r = qe.create('<div id="code"></div>');
      if ((jt.render(r, e.computed, n, !0), n)) {
        const i = qe.create('<ul class="tabs"></ul>'),
          o = qe.create(`<li active="true">${z}</li>`),
          a = qe.create(`<li>${D}</li>`);
        (o.onclick = () => {
          (t.mode = "computed"),
            o.setAttribute("active", "true"),
            a.setAttribute("active", "false"),
            jt.render(r, e.computed, n, !0);
        }),
          (a.onclick = () => {
            (t.mode = "selector"),
              o.setAttribute("active", "false"),
              a.setAttribute("active", "true"),
              t.parent_window.target.selector ||
                ((e.selector = Ot.selector(n)),
                (t.parent_window.target.selector = e.selector)),
              jt.render(r, e.selector, n, !1);
          }),
          i.appendChild(o),
          i.appendChild(a),
          t.appendChild(i);
      }
      t.append(r);
    }
    function It(e, t, n) {
      n.setAttribute(e, t);
    }
    function qt(e, t, n, r, i) {
      if (
        ((t.length || e.length) &&
          r.appendChild(qe.create("<div class='divider'></div>")),
        e.length)
      ) {
        const t = document.createElement("div");
        (t.id = "colors"), t.classList.add("info"), (t.innerHTML = "" + x);
        const n = document.createElement("ul");
        for (let t of e) {
          const e = document.createElement("li");
          (e.style.background = t),
            e.addEventListener("click", () => {
              Et(t), $e.show("Copied!");
            }),
            n.appendChild(e);
        }
        t.appendChild(n), r.appendChild(t);
      }
      if (t.length) {
        const e = document.createElement("div");
        (e.id = "fonts"), e.classList.add("info"), (e.innerHTML = "" + k);
        const n = document.createElement("ul");
        for (let e of t) {
          const t = document.createElement("li");
          e.url
            ? (t.innerHTML = `<li><a href="${e.url}" target="__blank">${e.name}</a></li>`)
            : (t.innerHTML = `<li>${e.name}</li>`),
            n.appendChild(t);
        }
        e.appendChild(n), r.appendChild(e);
      }
      if (n.length && ht.get().inspector.view.html_attribs) {
        r.appendChild(qe.create("<div class='divider'></div>"));
        const e = document.createElement("ul");
        e.id = "attribs";
        for (let t of n) {
          const n = document.createElement("li");
          if (
            ((n.innerHTML = `\n\t\t\t\t<span class="name">${t.name}</span>\n\t\t\t`),
            i)
          ) {
            const e = document.createElement("input");
            e.setAttribute("type", "text"),
              e.setAttribute("value", t.value),
              e.setAttribute("spellcheck", "false"),
              e.addEventListener("input", (e) => {
                It(t.name, e.target.value, i);
              }),
              n.appendChild(e);
          } else n.innerHTML += `<span class="value">${t.value}</span>`;
          e.appendChild(n);
        }
        r.appendChild(e);
      }
      r.appendChild(qe.create("<div class='divider'></div>"));
    }
    function Wt(e, t) {
      if (!Dt.enabled || !Dt.inspectWindow || Dt.calculating) return;
      (Dt.calculating = !0), $t(!0), (Dt.current_target.element = e.element);
      const n = Dt.current_target.element.tagName.toUpperCase(),
        r = qe.getSelector(Dt.current_target.element);
      Dt.inspectWindow.querySelector(
        "#tagname"
      ).innerHTML = `${n}<selector>${r}</selector>`;
      const i = Dt.current_target.element.getBoundingClientRect();
      (Dt.inspectWindow.querySelector("#width").innerHTML =
        Math.ceil(i.width) + "px"),
        (Dt.inspectWindow.querySelector("#height").innerHTML =
          Math.ceil(i.height) + "px");
      const o = Dt.inspectWindow.querySelector("#scroll");
      o.innerHTML = "";
      const a = dt.getHtmlAttribs(Dt.current_target.element);
      if (((Dt.current_target.attribs = a), "IMG" === n || "VIDEO" === n)) {
        const e = qe.getSource(Dt.current_target.element);
        e &&
          (async () => {
            try {
              const t = await fetch(At(e)).then((e) => e.blob());
              if (!Dt.inspectWindow) return;
              const n = Dt.inspectWindow.querySelector("#media_size");
              n.style.display = "flex";
              let r = (t.size / 1024).toFixed(1);
              r > 1024
                ? ((r = (r / 1024).toFixed(1)),
                  (n.querySelector("span").innerHTML = r + "mb"))
                : (n.querySelector("span").innerHTML = r + "kb");
            } catch (e) {}
          })();
      } else
        Dt.inspectWindow.querySelector("#media_size").style.display = "none";
      setTimeout(() => {
        requestAnimationFrame(() => {
          if (Dt.current_target.element) {
            Dt.current_target.css = Ot.computed(Dt.current_target.element);
            const { colors: e, fonts: t } = dt.getFontsAndColors(
              Dt.current_target.css,
              Dt.current_target.element
            );
            (Dt.current_target.colors = e),
              (Dt.current_target.fonts = t),
              qt(e, t, a, o),
              Bt({ computed: Dt.current_target.css }, o, null);
          }
          (Dt.calculating = !1), t && t();
        });
      }, 0);
    }
    function Ft() {
      const e = Qe(!0),
        t = e.querySelector("#scroll");
      (t.parent_window = e),
        (t.editor = { visual: !1 }),
        (e.target = {
          element: Dt.current_target.element,
          colors: JSON.parse(JSON.stringify(Dt.current_target.colors)),
          fonts: JSON.parse(JSON.stringify(Dt.current_target.fonts)),
          attribs: JSON.parse(JSON.stringify(Dt.current_target.attribs)),
          computed: JSON.parse(JSON.stringify(Dt.current_target.css)),
        });
      const n = Dt.inspectWindow.getBoundingClientRect();
      (e.getRootNode().host.style.left = n.left + window.scrollX + "px"),
        (e.getRootNode().host.style.top = n.top + window.scrollY + "px");
      const r = Dt.current_target.element.tagName.toUpperCase(),
        i = qe.getSelector(Dt.current_target.element);
      e.querySelector("#tagname").innerHTML = `${r}<selector>${i}</selector>`;
      const o = Dt.current_target.element.getBoundingClientRect();
      (e.querySelector("#width").innerHTML = Math.ceil(o.width) + "px"),
        (e.querySelector("#height").innerHTML = Math.ceil(o.height) + "px");
      const a = e.querySelector("#header");
      a.addEventListener("mousedown", (t) => {
        a.style.cursor = "grabbing";
        const n = window.getComputedStyle(e),
          r = parseInt(n.getPropertyValue("left").split("px")[0]),
          i = parseInt(n.getPropertyValue("top").split("px")[0]),
          { mx: o, my: s } = d();
        e.moving = { allowed: !0, x: o - r, y: s - i };
      }),
        a.addEventListener("mouseup", (t) => {
          (e.moving = { allowed: !1 }), (a.style.cursor = "grab");
        });
      const s = e.querySelector("#codepen_value"),
        l = e.querySelector("#codepen_open");
      a.querySelector("#codepen").addEventListener("click", (t) => {
        const { html: n, css: r } = (function (e) {
            const t = { style: {}, media_queries: {}, animations: {} },
              n = (e) => {
                ((e) => {
                  const n = Ot.computed(e);
                  let r = e.tagName.toLowerCase();
                  r += qe.getSelector(e);
                  for (const i of n.styles) {
                    let n = r;
                    if (
                      ("pseudo" === i.type && (n += i.selector),
                      !t.style[n] || t.style[n] !== i.rules)
                    )
                      if (t.style[n] && t.style[n] !== i.rules) {
                        let n = Ie(e, { root: document.body });
                        "pseudo" === i.type && (n += i.selector),
                          (t.style[n] = i.rules);
                      } else t.style[n] = i.rules;
                  }
                  for (const [i, o] of Object.entries(n.media_queries)) {
                    t.media_queries[i] || (t.media_queries[i] = {});
                    for (const n of o) {
                      let o = r;
                      if (
                        ("pseudo" === n.type && (o += n.selector),
                        !t.media_queries[i][o] ||
                          t.media_queries[i][o] !== n.rules)
                      )
                        if (
                          t.media_queries[i][o] &&
                          t.media_queries[i][o] !== n.rules
                        ) {
                          let r = Ie(e, { root: document.body });
                          "pseudo" === n.type && (r += n.selector),
                            (t.media_queries[i][r] = n.rules);
                        } else t.media_queries[i][o] = n.rules;
                    }
                  }
                  for (const [e, r] of Object.entries(n.animations))
                    t.animations[e] = r;
                })(e);
                for (const t of e.children) n(t);
              };
            n(e);
            let r =
              "body\n{\n\tbackground: #eee; /* For visibility of elements. */\n}\n\n";
            for (const [e, n] of Object.entries(t.style)) {
              r += e + " { \n";
              for (const [e, t] of Object.entries(n)) r += `\t${e}: ${t};\n`;
              r += "}\n\n";
            }
            for (const [e, n] of Object.entries(t.animations)) {
              r += `@keyframes ${e} { \n`;
              for (const [e, t] of Object.entries(n)) {
                r += `\t${e} { \n`;
                for (const [e, n] of Object.entries(t))
                  r += `\t\t${e}: ${n};\n`;
                r += "\t}\n\n";
              }
              r += "}\n\n";
            }
            for (const [e, n] of Object.entries(t.media_queries)) {
              r += e + " { \n";
              for (const [e, t] of Object.entries(n)) {
                r += `\t${e} { \n`;
                for (const [e, n] of Object.entries(t))
                  r += `\t\t${e}: ${n};\n`;
                r += "\t}\n\n";
              }
              r += "}\n\n";
            }
            return { html: qe.getHtml(e), css: r };
          })(e.target.element),
          i = {
            title: "New Pen",
            html: n,
            css: r,
            js: "// Created with Hoverify https://tryhoverify.com ",
          };
        (s.value = JSON.stringify(i)), l.click();
      }),
        e.target.element.hv_style ||
          (a.querySelector("#reset").style.display = "none"),
        (t.showReset = () =>
          (a.querySelector("#reset").style.display = "block")),
        a.querySelector("#reset").addEventListener("click", (n) => {
          (a.querySelector("#reset").style.display = "none"),
            e.target.element.hv_style.remove(),
            (e.target.element.hv_style = null),
            (t.innerHTML = ""),
            qt(
              e.target.colors,
              e.target.fonts,
              e.target.attribs,
              t,
              e.target.element
            ),
            setTimeout(() => {
              Bt(
                { computed: Ot.computed(e.target.element) },
                t,
                e.target.element
              );
            }, 0);
        });
      const c = a.querySelector("#copy .dropdown");
      if (
        (a.querySelector("#copy").addEventListener("click", (e) => {
          "block" === c.style.display
            ? (c.style.display = "none")
            : (c.style.display = "block");
        }),
        c.querySelector("#copy_code").addEventListener("click", () => {
          !(function (e, t) {
            let n = "";
            ht.get().inspector.copy.inner_html
              ? (n = qe.getHtml(e) + "\n\n")
              : ht.get().inspector.copy.outer_html &&
                (n = qe.getOuterHtml(e) + "\n\n");
            let r = "",
              i = e.tagName.toLowerCase();
            i += qe.getSelector(e);
            for (const e of t.styles) {
              if ("pseudo" === e.type && !ht.get().inspector.copy.pseudo)
                continue;
              let t = i;
              "pseudo" === e.type && (t += e.selector), (r += t + " { \n");
              for (const [t, n] of Object.entries(e.rules))
                r += `\t${t}: ${n};\n`;
              r += "}\n";
            }
            if (ht.get().inspector.copy.animations)
              for (const [e, n] of Object.entries(t.animations)) {
                r += `@keyframes ${e} { \n`;
                for (const [e, t] of Object.entries(n)) {
                  r += `\t${e} { \n`;
                  for (const [e, n] of Object.entries(t))
                    r += `\t\t${e}: ${n};\n`;
                  r += "\t}\n";
                }
                r += "}\n";
              }
            if (ht.get().inspector.copy.media)
              for (const [e, n] of Object.entries(t.media_queries)) {
                r += e + " { \n";
                for (const e of n) {
                  if ("pseudo" === e.type && !ht.get().inspector.copy.pseudo)
                    continue;
                  let t = i;
                  "pseudo" === e.type && (t += e.selector),
                    (r += `\t${i} { \n`);
                  for (const [t, n] of Object.entries(e.rules))
                    r += `\t\t${t}: ${n};\n`;
                  r += "\t}\n";
                }
                r += "}\n";
              }
            Et(n + r), $e.show("Copied!");
          })(e.target.element, e.target.element.hv_css);
        }),
        c.querySelector("#copy_changes").addEventListener("click", () => {
          !(function (e, t) {
            const n = e.hv_css,
              r = { styles: {}, animations: {}, media_queries: {} };
            let i = "",
              o = e.tagName.toLowerCase();
            o += qe.getSelector(e);
            for (let e = 0; e < n.styles.length; e++) {
              const i = n.styles[e];
              if ("pseudo" === i.type && !ht.get().inspector.copy.pseudo)
                continue;
              let a = o;
              "pseudo" === i.type && (a += i.selector);
              for (const [n, o] of Object.entries(i.rules))
                t.styles[e].rules[n] !== o &&
                  (r.styles[a] || (r.styles[a] = {}), (r.styles[a][n] = o));
            }
            if (ht.get().inspector.copy.animations)
              for (const [e, i] of Object.entries(n.animations))
                for (const [n, o] of Object.entries(i))
                  for (const [i, a] of Object.entries(o))
                    t.animations[e][n][i] !== a &&
                      (r.animations[e] || (r.animations[e] = {}),
                      r.animations[e][n] || (r.animations[e][n] = {}),
                      (r.animations[e][n][i] = a));
            if (ht.get().inspector.copy.media)
              for (const [e, i] of Object.entries(n.media_queries))
                for (let n = 0; n < i.length; n++) {
                  const a = i[n];
                  if ("pseudo" === a.type && !ht.get().inspector.copy.pseudo)
                    continue;
                  let s = o;
                  "pseudo" === a.type && (s += a.selector);
                  for (const [i, o] of Object.entries(a.rules))
                    t.media_queries[e][n].rules[i] !== o &&
                      (r.media_queries[e] || (r.media_queries[e] = {}),
                      r.media_queries[e][s] || (r.media_queries[e][s] = {}),
                      (r.media_queries[e][s][i] = o));
                }
            for (const [e, t] of Object.entries(r.styles)) {
              i += e + " { \n";
              for (const [e, n] of Object.entries(t)) i += `\t${e}: ${n};\n`;
              i += "}\n";
            }
            for (const [e, t] of Object.entries(r.animations)) {
              i += `@keyframes ${e} { \n`;
              for (const [e, n] of Object.entries(t)) {
                i += `\t${e} { \n`;
                for (const [e, t] of Object.entries(n))
                  i += `\t\t${e}: ${t};\n`;
                i += "\t}\n";
              }
              i += "}\n";
            }
            for (const [e, t] of Object.entries(r.media_queries)) {
              i += e + " { \n";
              for (const [e, n] of Object.entries(t)) {
                i += `\t${e} { \n`;
                for (const [e, t] of Object.entries(n))
                  i += `\t\t${e}: ${t};\n`;
                i += "\t}\n";
              }
              i += "}\n";
            }
            Et(i), $e.show("Copied!");
          })(e.target.element, e.target.computed);
        }),
        c.querySelector("#copy_selector").addEventListener("click", () => {
          const t = e.target.element;
          Et(t.tagName.toLowerCase() + "" + qe.getSelector(t)),
            $e.show("Copied!");
        }),
        c
          .querySelector("#copy_unique_selector")
          .addEventListener("click", () => {
            const t = e.target.element;
            Et(qe.getUniqueSelector(t)), $e.show("Copied!");
          }),
        a.querySelector("#close").addEventListener("click", (t) => {
          Dt.docked_windows.splice(e.id, 1), e.getRootNode().host.remove();
        }),
        "IMG" === r || "VIDEO" === r)
      ) {
        const t = "FILE_" + new Date().getTime(),
          n = qe.getSource(e.target.element);
        if (n) {
          const e = a.querySelector("#download");
          e.style.display = "block";
          const r = e.querySelector("a");
          r.setAttribute("href", n),
            r.setAttribute("download", t),
            r.setAttribute("target", "_blank"),
            r.setAttribute("rel", "noopener noreferrer"),
            (async () => {
              try {
                const e = await fetch(At(n)).then((e) => e.blob()),
                  t = a.querySelector("#media_size");
                t.style.display = "flex";
                let r = (e.size / 1024).toFixed(1);
                r > 1024
                  ? ((r = (r / 1024).toFixed(1)),
                    (t.querySelector("span").innerHTML = r + "mb"))
                  : (t.querySelector("span").innerHTML = r + "kb");
              } catch (e) {}
            })();
        }
      }
      qt(
        e.target.colors,
        e.target.fonts,
        e.target.attribs,
        t,
        e.target.element
      ),
        Bt(
          { computed: JSON.parse(JSON.stringify(e.target.computed)) },
          t,
          e.target.element
        ),
        (e.id = Dt.docked_windows.length),
        Dt.docked_windows.push(e);
    }
    function $t(e) {
      Dt.enabled &&
        Dt.inspectWindow &&
        e === Dt.hidden &&
        (e
          ? ((Dt.inspectWindow.style.visibility = "visible"), (Dt.hidden = !1))
          : ((Dt.inspectWindow.style.visibility = "hidden"), (Dt.hidden = !0)));
    }
    var Ut = {
      initialize: function () {},
      enable: function () {
        (Dt.enabled = !0), (Dt.inspectWindow = Qe(!1)), $t(!1);
        for (const e of Dt.docked_windows) e.style.display = "block";
      },
      disable: zt,
      destroy: function () {
        zt();
        for (const e of Dt.docked_windows) e.getRootNode().host.remove();
        Dt.docked_windows = [];
      },
      isEnabled: function () {
        return Dt.enabled;
      },
      Modes: Ht,
      setMode: function (e) {
        Dt.current_mode !== e && (Dt.current_mode = e);
      },
      getMode: function () {
        return Dt.current_mode;
      },
      setTarget: Wt,
      onClick: function () {
        Ft();
      },
      loop: function () {
        const { mx: e, my: t } = d();
        if (Dt.inspectWindow && Dt.current_target.element) {
          const n = window.innerWidth - 15,
            r = window.innerHeight - 15;
          let i = e - window.scrollX + 15,
            o = t - window.scrollY + 15;
          const a = Dt.inspectWindow.getBoundingClientRect(),
            s = a.width,
            l = a.height;
          i + s > n && (i = e - (s + 15)),
            o + l > r && o - l > 0 && (o = t - window.scrollY - l - 15),
            (Dt.inspectWindow.style.left = i + "px"),
            (Dt.inspectWindow.style.top = o + "px");
        }
        for (const n of Dt.docked_windows)
          if (n.moving && n.moving.allowed) {
            const r = e - n.moving.x,
              i = t - n.moving.y;
            (n.style.left = r + "px"), (n.style.top = i + "px");
          }
      },
      setVisibility: $t,
      calculateSelectorStyle: function (e) {
        const t = [];
        if (e.shadowRoot)
          for (const n of e.shadowRoot.adoptedStyleSheets)
            for (const e of n.rules) {
              const n = e.selectorText,
                r = dt.cssToJson(e.style.cssText),
                i = dt.parseRules(r);
              t.push({ selector: n, editable: !1, type: "normal", rules: i });
            }
        return t;
      },
      dockWindow: Ft,
      setTargetAndCreateWindow: function (e) {
        (Dt.enabled = !0),
          (Dt.inspectWindow = Qe(!1)),
          Wt(e, () => {
            const t = e.element.getBoundingClientRect(),
              n = t.left + t.width / 2,
              r = t.top + t.height / 2;
            (Dt.inspectWindow.style.left = n + "px"),
              (Dt.inspectWindow.style.top = r + "px"),
              Ft(),
              (Dt.enabled = !1),
              Dt.inspectWindow.remove(),
              (Dt.inspectWindow = null);
          });
      },
    };
    const Gt = {
        enabled: !1,
        toolbar_btn: null,
        win: null,
        content: null,
        reset_btn: null,
        fonts: {},
      },
      Vt = [
        "SCRIPT",
        "NOSCRIPT",
        "IMG",
        "VIDEO",
        "HTML",
        "HEAD",
        "TITLE",
        "META",
        "LINK",
        "SOURCE",
        "IFRAME",
        "SVG",
        "CIRCLE",
        "PATH",
        "POLYLINE",
        "LINE",
        "HR",
        "BR",
        "STYLE",
        "POLYGON",
        "RECT",
      ];
    function Kt() {
      (Gt.enabled = !1),
        Gt.toolbar_btn.classList.remove("active"),
        (Gt.win.style.display = "none");
    }
    function Yt() {
      Gt.fonts = {};
    }
    function Jt() {
      const e = document.querySelectorAll("*");
      for (const t of e) {
        const e = window.getComputedStyle(t),
          n = t.tagName.toUpperCase();
        if (-1 === Vt.indexOf(n) && !n.startsWith("HV-")) {
          const t = e
            .getPropertyValue("font-family")
            .split(",")
            .map((e) => {
              e.trim();
              return e.replaceAll('"', "").replaceAll("'", "");
            });
          if (Gt.fonts[n])
            for (const e of t)
              -1 === Gt.fonts[n].indexOf(e) && Gt.fonts[n].push(e);
          else Gt.fonts[n] = t;
        }
      }
      !(function () {
        for (const [e, t] of Object.entries(Gt.fonts)) {
          const n = qe.create(
            `\n\t\t\t<li>\n\t\t\t\t<h4>${e}</h4>\n\t\t\t\t<p>${t.join(
              ", "
            )}</p>\n\t\t\t</li>\n\t\t`
          );
          Gt.content.appendChild(n);
        }
      })();
    }
    var Xt = {
      initialize: function (e, t) {
        (Gt.toolbar_btn = e),
          (Gt.win = t),
          (Gt.content = Gt.win.querySelector("#content")),
          (Gt.reset_btn = t.querySelector("#fonts_reset")),
          Gt.reset_btn.addEventListener("click", () => {
            Yt(), (Gt.content.innerHTML = ""), Jt();
          });
      },
      enable: function () {
        (Gt.enabled = !0),
          Gt.toolbar_btn.classList.add("active"),
          (Gt.win.style.display = "block"),
          0 === Object.keys(Gt.fonts).length && Jt();
      },
      disable: Kt,
      isEnabled: function () {
        return Gt.enabled;
      },
      destroy: function () {
        Yt(), Kt();
      },
    };
    const Zt = {
      enabled: !1,
      toolbarBtn: null,
      outline: null,
      target: null,
      element: null,
    };
    function Qt() {
      (Zt.enabled = !1),
        Zt.toolbarBtn.classList.remove("active"),
        Zt.element &&
          ((Zt.element.style.outline = Zt.outline),
          Zt.element.removeAttribute("contenteditable"),
          Zt.element.removeAttribute("spellcheck"),
          (Zt.element = null));
    }
    var en = {
      initialize: function (e) {
        Zt.toolbarBtn = e;
      },
      enable: function () {
        (Zt.enabled = !0), Zt.toolbarBtn.classList.add("active");
      },
      disable: Qt,
      isEnabled: function () {
        return Zt.enabled;
      },
      destroy: function () {
        Qt();
      },
      setTarget: function (e) {
        (Zt.target = e),
          Zt.target.element === Zt.element && Zt.target.mark.remove();
      },
      onClick: function () {
        Zt.element &&
          ((Zt.element.style.outline = Zt.outline),
          Zt.element.removeAttribute("contenteditable"),
          Zt.element.removeAttribute("spellcheck")),
          (Zt.element = Zt.target.element),
          Zt.target.mark.remove(),
          (Zt.outline = window
            .getComputedStyle(Zt.element)
            .getPropertyValue("outline")),
          (Zt.element.style.outline = "2px solid rgb(77, 144, 254)"),
          Zt.element.setAttribute("contenteditable", "true"),
          Zt.element.setAttribute("spellcheck", "true"),
          Zt.element.focus();
      },
      isElementFocused: function () {
        return null !== Zt.element;
      },
    };
    const tn = {
      enabled: !1,
      toolbar_btn: null,
      win: null,
      content: null,
      reset_btn: null,
      colors: [],
    };
    function nn() {
      (tn.enabled = !1),
        tn.toolbar_btn.classList.remove("active"),
        (tn.win.style.display = "none");
    }
    function rn() {
      tn.colors = [];
    }
    function on() {
      setTimeout(() => {
        const e = [
          ...window.hvStyleIframe.contentDocument.styleSheets,
          ...document.styleSheets,
        ];
        let t = "",
          n = [],
          r = [];
        for (const n of e) {
          let e = [];
          try {
            e = n.rules || n.cssRules;
          } catch (e) {
            continue;
          }
          for (const n of e)
            if (n instanceof CSSMediaRule) {
              const e = n.rules || n.cssRules;
              for (const n of e)
                if (n.style) {
                  const e = dt.cssToJson(n.style.cssText),
                    { string: i, colors: o } = ut(e);
                  (r = [...r, ...o]), (t += i);
                }
            } else if (n instanceof CSSKeyframesRule) {
              const e = n.rules || n.cssRules;
              for (const n of e) {
                const e = dt.cssToJson(n.style.cssText),
                  { string: i, colors: o } = ut(e);
                (r = [...r, ...o]), (t += i);
              }
            } else if (n instanceof CSSStyleRule) {
              const e = dt.cssToJson(n.style.cssText),
                { string: i, colors: o } = ut(e);
              (r = [...r, ...o]), (t += i);
            }
        }
        for (const e of r) {
          const t = it.convertNameToHex(e);
          if (t) {
            const e = st(t);
            n.push({ ...e, hex: "" + t });
          }
        }
        const i = t.match(/\b[0-9A-F]{6}\b/gi);
        i &&
          i.map((e) => {
            const t = { ...st(e), hex: "#" + e };
            n.push(t);
          });
        const o = at(t);
        for (const e of o) n.push(e);
        const a = {};
        for (const e of n) {
          const t = JSON.stringify(e);
          a[t] || ((a[t] = 1), tn.colors.push(e));
        }
        !(function () {
          for (const e of tn.colors) {
            let t = "#fff",
              n = "";
            const r = qe.create("<li></li>");
            n = e.hex ? e.hex : `rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`;
            Math.sqrt(
              e.r * e.r * 0.299 + e.g * e.g * 0.587 + e.b * e.b * 0.114
            ) >= 127.5 &&
              void 0 === e.a &&
              (t = "#000");
            const i = qe.create(
              `\n\t\t\t<div style="background-color: ${n}; color: ${t}">\n\t\t\t\t<h4 style="color: ${t}">${n}</h4>\n\t\t\t\t${S}\n\t\t\t</div>\n\t\t`
            );
            i.addEventListener("click", () => {
              Et(n), $e.show("Copied!");
            }),
              r.appendChild(i),
              tn.content.appendChild(r);
          }
        })();
      }, 0);
    }
    var an = {
      initialize: function (e, t) {
        (tn.toolbar_btn = e),
          (tn.win = t),
          (tn.content = tn.win.querySelector("#content")),
          (tn.reset_btn = t.querySelector("#palette_reset")),
          tn.reset_btn.addEventListener("click", () => {
            rn(), (tn.content.innerHTML = ""), on();
          });
      },
      enable: function () {
        (tn.enabled = !0),
          tn.toolbar_btn.classList.add("active"),
          (tn.win.style.display = "block"),
          0 === Object.keys(tn.colors).length && on();
      },
      disable: nn,
      isEnabled: function () {
        return tn.enabled;
      },
      destroy: function () {
        rn(), nn();
      },
    };
    var sn = (e) =>
        new Promise((t, n) => {
          chrome.storage.local.set(e, () => {
            chrome.runtime.lastError
              ? n(Error(chrome.runtime.lastError.message))
              : t();
          });
        }),
      ln = (e) =>
        new Promise((t, n) => {
          chrome.storage.local.get(e, (e) => {
            chrome.runtime.lastError
              ? n(Error(chrome.runtime.lastError.message))
              : t(e);
          });
        });
    var cn = async (e) => {
        try {
          await sn(e);
        } catch (e) {
          return console.log(e), e;
        }
      },
      un = async (e) => {
        try {
          return (await ln(e))[e];
        } catch (e) {
          return e;
        }
      };
    var dn = function (e) {
      if (window === window.parent) {
        const t = document.getElementsByTagName("iframe");
        for (const n of t) n.contentWindow.postMessage(e, "*");
      } else window.parent.postMessage(e, "*");
    };
    const fn = window.location.href,
      hn = "Hide Element",
      pn = "Remove Element",
      mn = {
        restated: !1,
        enabled: !1,
        toolbar_btn: null,
        win: null,
        modes: null,
        content: null,
        hide_btn: null,
        remove_btn: null,
        reset_btn: null,
        target: null,
        current_mode: hn,
        elements: [],
        minimized: !1,
      };
    function gn() {
      (mn.enabled = !1),
        mn.toolbar_btn.classList.remove("active"),
        (mn.win.style.display = "none");
    }
    function vn(e, t, n, r) {
      const i = document.createElement("li");
      return (
        (i.innerHTML = `\n\t\t<div class="tag-info">\n            <h4>${e}</h4>\n            <p>${t}</p>\n            <span>${
          (n === hn ? "Hidden" : "Removed") + (r ? " | IFrame" : "")
        }</span>\n        </div>\n        ${N}\n\t`),
        i
      );
    }
    function yn(e, t, n) {
      mn.reset_btn.style.display = "flex";
      let r = "",
        i = "",
        o = "";
      const a = { element: e, mode: t, index: mn.elements.length };
      if (n)
        (r = n.tag_name),
          (i = n.selector),
          (o = n.unique_selector),
          (a.iframe = n);
      else if (
        ((r = e.tagName.toLowerCase()),
        (i = qe.getSelector(e)),
        (o = qe.getUniqueSelector(e)),
        t === hn
          ? (e.style.visibility = "hidden")
          : ((a.display = window
              .getComputedStyle(e)
              .getPropertyValue("display")),
            (e.style.display = "none")),
        window !== window.parent)
      )
        return void dn({
          action: "hv.trash.addToElements",
          tag_name: r,
          selector: i,
          unique_selector: o,
          href: window.location.href,
          display: a.display,
        });
      const s = vn(r, i, t, n);
      s.querySelector("svg").addEventListener("click", () => bn(a.index, !0)),
        (a.li = s);
      const l = mn.elements.length
        ? mn.elements[mn.elements.length - 1].li
        : null;
      mn.content.insertBefore(a.li, l), mn.elements.push(a);
    }
    function bn(e, t) {
      for (let t = 0; t < mn.elements.length; t++) {
        const n = mn.elements[t];
        if (n.index === e) {
          let e = "";
          n.iframe
            ? ((e = n.iframe.unique_selector),
              dn({
                action: "hv.trash.showElement",
                unique_selector: e,
                mode: n.mode,
                display: n.iframe.display,
                href: n.iframe.href,
              }))
            : ((e = qe.getUniqueSelector(n.element)),
              n.mode === hn
                ? (n.element.style.visibility = "visible")
                : (n.element.style.display = n.display)),
            n.li.remove(),
            mn.elements.splice(t, 1);
        }
      }
      0 === mn.elements.length && (mn.reset_btn.style.display = "none");
    }
    function wn(e) {
      mn.current_mode !== e &&
        ((mn.current_mode = e),
        e === hn
          ? (mn.hide_btn.classList.add("active"),
            mn.remove_btn.classList.remove("active"))
          : (mn.hide_btn.classList.remove("active"),
            mn.remove_btn.classList.add("active")),
        window === window.parent &&
          dn({ action: "hv.trash.setMode", mode: e }));
    }
    var xn = {
      initialize: function (e, t) {
        (mn.toolbar_btn = e),
          (mn.win = t),
          (mn.content = mn.win.querySelector("#content")),
          (mn.modes = mn.win.querySelector("#modes")),
          (mn.hide_btn = mn.win.querySelector("#hide")),
          mn.hide_btn.addEventListener("click", () => {
            wn(hn);
          }),
          (mn.remove_btn = mn.win.querySelector("#remove")),
          mn.remove_btn.addEventListener("click", () => {
            wn(pn);
          });
        const n = mn.win.querySelector("#trash_minimize");
        n.addEventListener("click", () => {
          (mn.minimized = !mn.minimized),
            mn.minimized
              ? ((mn.content.style.display = "none"),
                (mn.modes.style.display = "none"),
                (n.innerHTML = _))
              : ((mn.content.style.display = "block"),
                (mn.modes.style.display = "flex"),
                (n.innerHTML = A));
        }),
          (mn.reset_btn = mn.win.querySelector("#trash_reset")),
          (mn.reset_btn.style.display = "none"),
          mn.reset_btn.addEventListener("click", () => {
            !(async function () {
              const e = mn.elements.map((e) => e.index);
              for (const t of e) bn(t, !1);
              let t = {};
              try {
                const e = await un("trash");
                e && (t = e);
              } catch (e) {}
              t[fn] = [];
              const n = {};
              (n.trash = t), await cn(n);
              await un("trash");
              (mn.elements = []), (mn.reset_btn.style.display = "none");
            })();
          }),
          mn.elements.length && (mn.reset_btn.style.display = "flex");
        for (let e = 0; e < mn.elements.length; e++) {
          const t = mn.elements[e];
          let n = "",
            r = "";
          t.iframe
            ? ((n = t.iframe.selector), (r = t.iframe.tag_name))
            : ((n = qe.getSelector(t.element)),
              (r = t.element.tagName.toLowerCase()));
          const i = vn(r, n, t.mode, t.iframe);
          if (
            (i
              .querySelector("svg")
              .addEventListener("click", () => bn(t.index, !0)),
            (t.li = i),
            0 === e)
          )
            mn.content.appendChild(t.li);
          else {
            const n = mn.elements[e - 1].li;
            mn.content.insertBefore(t.li, n);
          }
        }
      },
      enable: function () {
        (mn.enabled = !0),
          mn.toolbar_btn.classList.add("active"),
          (mn.win.style.display = "block");
      },
      disable: gn,
      isEnabled: function () {
        return mn.enabled;
      },
      destroy: function () {
        (mn.minimized = !1), gn();
      },
      setTarget: function (e) {
        (mn.target = e),
          mn.target.element === mn.element && mn.target.mark.remove();
      },
      onClick: function () {
        const e = mn.target.element;
        "body" !== e.tagName.toLowerCase() &&
          "html" !== e.tagName.toLowerCase() &&
          (mn.target.mark.remove(), yn(e, mn.current_mode, null));
      },
      addToElements: yn,
      showElement: function (e, t, n, r) {
        if (window !== window.parent && window.location.href === r) {
          const r = document.body.querySelector(e);
          r &&
            (t === hn
              ? (r.style.visibility = "visible")
              : (r.style.display = n));
        }
      },
      hideElement: function (e, t, n) {
        if (window !== window.parent && window.location.href === n) {
          const n = document.body.querySelector(e);
          if (n) {
            n.tagName.toLowerCase(), qe.getSelector(n);
            let e = "";
            t === hn
              ? (n.style.visibility = "hidden")
              : ((e = window.getComputedStyle(n).getPropertyValue("display")),
                (n.style.display = "none"));
          }
        }
      },
      getMode: function () {
        return mn.current_mode;
      },
      setMode: wn,
    };
    const kn = {
      enabled: !1,
      toolbar_btn: null,
      win: null,
      elements_ul: null,
      reset_btn: null,
      input: null,
      message: null,
      targets: [],
      scroll_timer: null,
    };
    function Sn() {
      (kn.enabled = !1),
        kn.toolbar_btn.classList.remove("active"),
        (kn.win.style.display = "none"),
        removeEventListener("scroll", Cn);
    }
    function Cn() {
      null !== kn.scroll_timer && clearTimeout(kn.scroll_timer),
        (kn.scroll_timer = setTimeout(() => {
          for (const e of kn.targets) Xe(e.target.element, e.target.mark);
        }, 100));
    }
    function Ln(e) {
      if ("" === e)
        return (
          (kn.reset_btn.style.display = "none"),
          void (kn.message.style.display = "none")
        );
      kn.message.style.display = "block";
      for (const e of kn.targets) e.target.mark.remove(), e.li.remove();
      kn.targets = [];
      try {
        const t = document.querySelectorAll(e);
        if (((kn.message.innerHTML = t.length + " elements found"), t.length)) {
          (kn.reset_btn.style.display = "flex"),
            (kn.message.style.color = "#1e88e5");
          for (const e of t) {
            const t = window.getComputedStyle(e),
              n = t.getPropertyValue("display");
            if ("hidden" !== t.getPropertyValue("visibility") && "none" !== n) {
              const t = new Ve();
              (t.element = e), (t.mark = Ze(e, !0, "#e91e63"));
              const n = qe.create(
                `\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<h4>${
                  e.tagName
                }</h4>\n\t\t\t\t\t\t\t\t<p>${qe.getUniqueSelector(
                  e
                )}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t`
              );
              n.addEventListener("mouseover", () => {
                Ke(t.mark, "red"), Ye(t.mark);
              }),
                n.addEventListener("mouseout", () => {
                  Ke(t.mark, "#e91e63"), Je(t.mark);
                });
              const r = qe.create("<button>Show styles</button>");
              r.addEventListener("click", () => {
                Ut.setTargetAndCreateWindow(t);
              }),
                n.appendChild(r),
                kn.elements_ul.appendChild(n),
                kn.targets.push({ li: n, target: t });
            }
          }
          !(function (e) {
            const t = e.getBoundingClientRect();
            window.scrollTo(0, t.top - 100);
          })(t[0]);
        } else
          (kn.reset_btn.style.display = "none"),
            (kn.message.style.color = "#e53935");
      } catch (e) {
        (kn.reset_btn.style.display = "none"),
          (kn.message.style.color = "#e53935");
      }
    }
    function Tn() {
      for (const e of kn.targets) e.target.mark.remove(), e.li.remove();
      (kn.targets = []),
        (kn.reset_btn.style.display = "none"),
        (kn.input.value = ""),
        (kn.message.style.display = "none");
    }
    var Mn = {
      initialize: function (e, t) {
        (kn.toolbar_btn = e),
          (kn.win = t),
          (kn.elements_ul = kn.win.querySelector("#elements")),
          (kn.input = t.querySelector("input")),
          (kn.message = t.querySelector("#message")),
          kn.input.addEventListener("input", (e) => {
            const t = e.target.value.trim();
            Ln(t),
              window === window.parent &&
                dn({ action: "hv.inspect.search.find", selector: t });
          }),
          (kn.reset_btn = t.querySelector("#search_reset")),
          (kn.reset_btn.style.display = "none"),
          kn.reset_btn.addEventListener("click", () => {
            Tn(),
              window === window.parent &&
                dn({ action: "hv.inspect.search.reset" });
          });
      },
      enable: function () {
        (kn.enabled = !0),
          kn.toolbar_btn.classList.add("active"),
          (kn.win.style.display = "block"),
          kn.input.focus(),
          addEventListener("scroll", Cn);
      },
      disable: Sn,
      isEnabled: function () {
        return kn.enabled;
      },
      destroy: function () {
        Sn(), Tn();
      },
      findElements: Ln,
      reset: Tn,
    };
    const On = {
      enabled: !1,
      toolbarBtn: null,
      hvGuidelines: null,
      shadow: null,
      vertical: null,
      horizontal: null,
    };
    var En = {
      initialize: function (e) {
        On.toolbarBtn = e;
      },
      enable: function () {
        (On.enabled = !0),
          On.toolbarBtn.classList.add("active"),
          (On.hvGuidelines = document.createElement("hv-guidelines")),
          (On.shadow = On.hvGuidelines.attachShadow({ mode: "closed" })),
          (On.hvGuidelines.style.pointerEvents = "none"),
          (On.hvGuidelines.style.position = "fixed"),
          (On.hvGuidelines.style.zIndex = "50000000"),
          (On.vertical = document.createElement("div")),
          (On.vertical.style.position = "fixed"),
          (On.vertical.style.zIndex = "50000000"),
          (On.vertical.style.top = "0px"),
          (On.vertical.style.borderRight = "1px dashed #f44336"),
          (On.vertical.style.borderLeft = "1px dashed #f44336"),
          (On.horizontal = document.createElement("div")),
          (On.horizontal.style.position = "fixed"),
          (On.horizontal.style.zIndex = "50000000"),
          (On.horizontal.style.left = "0px"),
          (On.horizontal.style.borderTop = "1px dashed #f44336"),
          (On.horizontal.style.borderBottom = "1px dashed #f44336"),
          On.shadow.appendChild(On.vertical),
          On.shadow.appendChild(On.horizontal),
          document.body.appendChild(On.hvGuidelines);
      },
      isEnabled: function () {
        return On.enabled;
      },
      disable: function () {
        (On.enabled = !1),
          On.toolbarBtn.classList.remove("active"),
          On.hvGuidelines.remove(),
          (On.hvGuidelines = null),
          (On.shadow = null),
          (On.vertical = null),
          (On.horizontal = null);
      },
      setTarget: function (e) {
        if (!On.enabled) return;
        const t = e.element.getBoundingClientRect();
        (On.vertical.style.left = t.left + "px"),
          (On.vertical.style.width = t.width - 2 + "px"),
          (On.vertical.style.height = window.innerHeight - 2 + "px"),
          (On.horizontal.style.top = t.top + "px"),
          (On.horizontal.style.width = window.innerWidth - 2 + "px"),
          (On.horizontal.style.height = t.height - 2 + "px");
      },
    };
    const An = { enabled: !1, toolbarBtn: null };
    var Nn = {
      initialize: function (e) {
        An.toolbarBtn = e;
      },
      enable: function () {
        (An.enabled = !0), An.toolbarBtn.classList.add("active");
        const e = document.querySelectorAll("*");
        for (const t of e) t.style.outline = "1px dashed rgba(255, 0, 0, 0.8)";
      },
      disable: function () {
        (An.enabled = !1), An.toolbarBtn.classList.remove("active");
        const e = document.querySelectorAll("*");
        for (const t of e) t.style.outline = "none";
      },
      isEnabled: function () {
        return An.enabled;
      },
    };
    n(42);
    const _n = n(1);
    let Pn = null,
      Rn = null,
      jn = null,
      Hn = null;
    const Dn = { enabled: !1, css: "" };
    function zn(e) {
      Hn ||
        ((Hn = qe.create("<style></style>")), document.body.appendChild(Hn));
      const t = e.getValue();
      (Hn.innerHTML = t),
        setTimeout(() => {
          jn.refresh(), Bn(t);
        });
    }
    async function Bn(e) {
      try {
        let t = await un("custom_css");
        t || (t = {}), (t[window.location.href] = e);
        const n = {};
        (n.custom_css = t), await cn(n);
      } catch (e) {
        console.log(e);
      }
    }
    function In() {
      Hn &&
        ((Dn.css = ""),
        Bn(""),
        jn.setValue("/* Type CSS here... */"),
        (Hn.innerHTML = ""));
    }
    function qn() {
      (Dn.enabled = !1),
        Pn.classList.remove("active"),
        (Rn.style.display = "none");
    }
    var Wn = {
      initialize: function (e, t) {
        (Pn = e), (Rn = t);
        const n = Rn.querySelector("#custom_css_code");
        (jn = _n.fromTextArea(n, {
          mode: "css",
          indentUnit: 4,
          lineWrapping: !0,
        })),
          jn.on("change", zn),
          Dn.css ? jn.setValue(Dn.css) : jn.setValue("/* Type CSS here... */"),
          jn.on("mousedown", () => {
            jn.refresh();
          }),
          Rn.querySelector("#custom_css_reset").addEventListener("click", In);
      },
      enable: function () {
        (Dn.enabled = !0),
          Pn.classList.add("active"),
          (Rn.style.display = "block");
      },
      disable: qn,
      isEnabled: function () {
        return Dn.enabled;
      },
      destroy: function () {
        qn();
      },
      restore: async function () {
        try {
          let e = await un("custom_css");
          if (e) {
            const t = e[window.location.href];
            t &&
              ((Dn.css = t),
              (Hn = qe.create(`<style>${Dn.css}</style>`)),
              document.body.appendChild(Hn));
          }
        } catch (e) {
          console.log(e);
        }
      },
    };
    n(43);
    const Fn = n(1);
    let $n = null,
      Un = null,
      Gn = null;
    const Vn = { enabled: !1, js: "" };
    function Kn(e) {
      const t = e.getValue();
      (Vn.js = t),
        setTimeout(() => {
          Gn.refresh(), Yn(t);
        });
    }
    async function Yn(e) {
      try {
        let t = await un("custom_js");
        t || (t = {}), (t[window.location.href] = e);
        const n = {};
        (n.custom_js = t), await cn(n);
      } catch (e) {
        console.log(e);
      }
    }
    function Jn() {
      r("inspect.injectCustomJavascript", { code: Vn.js });
    }
    function Xn() {
      Yn(""), Gn.setValue("/* Type Javascript here... */");
    }
    function Zn() {
      (Vn.enabled = !1),
        $n.classList.remove("active"),
        (Un.style.display = "none");
    }
    const Qn = {
      enabled: !1,
      toolbarBtn: null,
      hvCssBox: null,
      shadow: null,
      padding: {},
      margin: {},
    };
    function er(e, t, n, r, i, o) {
      const a = qe.create(
        '\n\t<svg style="position: fixed; z-index: 50000000;">\n\t\t<defs>\n\t\t\t<pattern width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">\n\t\t\t\t<rect width="2" height="4" transform="translate(0,0)" fill="white"></rect>\n\t\t\t</pattern>\n\t\t\t<mask>\n\t\t\t\t<rect x="0" y="0" width="100%" height="100%" />\n\t\t\t</mask>      \n\t\t</defs>\n\n\t\t<rect id="fill_section" class="hbar" x="0" y="0" width="100%" height="100%"></rect>\n\t</svg>\n'
      );
      return (
        (a.querySelector("pattern").id = "pattern-stripe-" + e),
        (a.querySelector("mask").id = "mask-stripe-" + e),
        a
          .querySelector("mask")
          .querySelector("rect")
          .setAttribute("fill", `url(#pattern-stripe-${e})`),
        (a.querySelector("rect.hbar").id = "fill_section_" + e),
        a.querySelector("#fill_section_" + e).classList.add(t),
        (a.style.top = n + "px"),
        (a.style.left = r + "px"),
        (a.style.width = i + "px"),
        (a.style.height = o + "px"),
        a
      );
    }
    const tr = {
        style: Ut,
        edit: en,
        trash: xn,
        search: Mn,
        fonts: Xt,
        palette: an,
        customCSS: Wn,
        customJS: {
          initialize: function (e, t) {
            ($n = e), (Un = t);
            const n = Un.querySelector("#custom_js_code");
            (Gn = Fn.fromTextArea(n, {
              mode: "javascript",
              indentUnit: 4,
              lineWrapping: !0,
            })),
              Gn.on("change", Kn),
              Vn.js
                ? Gn.setValue(Vn.js)
                : Gn.setValue("/* Type Javascript here... */"),
              Gn.on("mousedown", () => {
                Gn.refresh();
              }),
              Un.querySelector("#custom_js_reset").addEventListener(
                "click",
                Xn
              ),
              Un.querySelector("#custom_js_run").addEventListener("click", Jn);
          },
          enable: function () {
            (Vn.enabled = !0),
              $n.classList.add("active"),
              (Un.style.display = "block");
          },
          disable: Zn,
          isEnabled: function () {
            return Vn.enabled;
          },
          destroy: function () {
            Zn();
          },
          restore: async function () {
            try {
              let e = await un("custom_js");
              if (e) {
                const t = e[window.location.href];
                t && ((Vn.js = t), Jn());
              }
            } catch (e) {
              console.log(e);
            }
          },
        },
      },
      nr = {
        guidelines: En,
        grids: Nn,
        cssBox: {
          initialize: function (e) {
            Qn.toolbarBtn = e;
          },
          enable: function () {
            (Qn.enabled = !0),
              Qn.toolbarBtn.classList.add("active"),
              (Qn.hvCssBox = document.createElement("hv-css-box")),
              (Qn.hvCssBox.style.pointerEvents = "none"),
              (Qn.hvCssBox.style.position = "fixed"),
              (Qn.hvCssBox.style.zIndex = "50000000"),
              (Qn.shadow = Qn.hvCssBox.attachShadow({ mode: "closed" }));
            const e = qe.create(
              "\n\t\t<style>\n\t\t\trect#fill_section_margin_top {\n\t\t\t\tmask: url(#mask-stripe-margin_top);\n\t\t\t}\n\n\t\t\trect#fill_section_margin_bottom {\n\t\t\t\tmask: url(#mask-stripe-margin_bottom);\n\t\t\t}\n\n\t\t\trect#fill_section_margin_left {\n\t\t\t\tmask: url(#mask-stripe-margin_left);\n\t\t\t}\n\n\t\t\trect#fill_section_margin_right {\n\t\t\t\tmask: url(#mask-stripe-margin_right);\n\t\t\t}\n\n\t\t\trect#fill_section_padding_top {\n\t\t\t\tmask: url(#mask-stripe-padding_top);\n\t\t\t}\n\n\t\t\trect#fill_section_padding_bottom {\n\t\t\t\tmask: url(#mask-stripe-padding_bottom);\n\t\t\t}\n\n\t\t\trect#fill_section_padding_left {\n\t\t\t\tmask: url(#mask-stripe-padding_left);\n\t\t\t}\n\n\t\t\trect#fill_section_padding_right {\n\t\t\t\tmask: url(#mask-stripe-padding_right);\n\t\t\t}\n\n\t\t\t.margin {\n\t\t\t\tfill: blue;\n\t\t\t}\n\t\t\t\n\t\t\t.padding {\n\t\t\t\tfill: green;\n\t\t\t}\n\t\t</style>\n\t"
            );
            Qn.shadow.appendChild(e), document.body.appendChild(Qn.hvCssBox);
          },
          isEnabled: function () {
            return Qn.enabled;
          },
          disable: function () {
            (Qn.enabled = !1),
              Qn.toolbarBtn.classList.remove("active"),
              Qn.hvCssBox.remove(),
              (Qn.hvCssBox = null),
              (Qn.shadow = null),
              (Qn.padding = {}),
              (Qn.margin = {});
          },
          setTarget: function (e) {
            if (!Qn.enabled) return;
            !(function () {
              const e = Object.keys(Qn.margin);
              for (const t of e) Qn.margin[t].remove();
              const t = Object.keys(Qn.padding);
              for (const e of t) Qn.padding[e].remove();
              (Qn.padding = {}), (Qn.margin = {});
            })();
            const t = e.element.getBoundingClientRect(),
              n = window.getComputedStyle(e.element),
              r = parseInt(
                n.getPropertyValue("margin-right").replace("px", "")
              );
            r &&
              ((Qn.margin.right = er(
                "margin_right",
                "margin",
                t.top,
                t.left + t.width,
                r,
                t.height
              )),
              Qn.shadow.appendChild(Qn.margin.right));
            const i = parseInt(
              n.getPropertyValue("margin-top").replace("px", "")
            );
            i &&
              ((Qn.margin.top = er(
                "margin_top",
                "margin",
                t.top - i,
                t.left,
                t.width,
                i
              )),
              Qn.shadow.appendChild(Qn.margin.top));
            const o = parseInt(
              n.getPropertyValue("margin-left").replace("px", "")
            );
            o &&
              ((Qn.margin.left = er(
                "margin_left",
                "margin",
                t.top,
                t.left - o,
                o,
                t.height
              )),
              Qn.shadow.appendChild(Qn.margin.left));
            const a = parseInt(
              n.getPropertyValue("margin-bottom").replace("px", "")
            );
            a &&
              ((Qn.margin.bottom = er(
                "margin_bottom",
                "margin",
                t.top + t.height,
                t.left,
                t.width,
                a
              )),
              Qn.shadow.appendChild(Qn.margin.bottom));
            const s = parseInt(
              n.getPropertyValue("padding-top").replace("px", "")
            );
            s &&
              ((Qn.padding.top = er(
                "padding_top",
                "padding",
                t.top,
                t.left,
                t.width,
                s
              )),
              Qn.shadow.appendChild(Qn.padding.top));
            const l = parseInt(
              n.getPropertyValue("padding-bottom").replace("px", "")
            );
            l &&
              ((Qn.padding.bottom = er(
                "padding_bottom",
                "padding",
                t.top + t.height - l,
                t.left,
                t.width,
                l
              )),
              Qn.shadow.appendChild(Qn.padding.bottom));
            let c = t.top,
              u = t.height;
            s && ((c += s), (u -= s)), l && (u -= l);
            const d = parseInt(
              n.getPropertyValue("padding-left").replace("px", "")
            );
            d &&
              ((Qn.padding.left = er(
                "padding_left",
                "padding",
                c,
                t.left,
                d,
                u
              )),
              Qn.shadow.appendChild(Qn.padding.left));
            const f = parseInt(
              n.getPropertyValue("padding-right").replace("px", "")
            );
            f &&
              ((Qn.padding.right = er(
                "padding_right",
                "padding",
                c,
                t.left + t.width - f,
                f,
                u
              )),
              Qn.shadow.appendChild(Qn.padding.right));
          },
        },
      };
    var rr = {
      initialize: function () {
        tr.style.initialize(), tr.style.enable();
      },
      destroy: function () {
        for (const e in tr) tr[e].destroy();
        for (const e in nr) {
          const t = nr[e];
          t.isEnabled() && t.disable();
        }
      },
      primary: tr,
      secondary: nr,
      enable: function (e) {
        if (tr[e]) {
          const t = Object.keys(tr);
          for (const n of t) {
            const t = tr[n];
            n !== e || t.isEnabled() ? t.disable() : t.enable();
          }
        } else {
          const t = nr[e];
          t && t.enable();
        }
      },
      disable: function (e) {
        if (tr[e]) {
          const t = tr[e];
          t.isEnabled() && t.disable(), tr.style.enable();
        } else {
          const t = nr[e];
          t && t.disable();
        }
      },
      setTarget: function (e) {
        for (const t in tr) {
          const n = tr[t];
          n.isEnabled() && n.setTarget && n.setTarget(e);
        }
        for (const t in nr) {
          const n = nr[t];
          n.isEnabled() && n.setTarget && n.setTarget(e);
        }
      },
      onClick: function () {
        for (const e in tr) {
          const t = tr[e];
          t.isEnabled() && t.onClick && t.onClick();
        }
      },
    };
    let ir = null;
    const or = {
      enabled: !1,
      paused: !1,
      hidden: !1,
      target: new Ve(),
      selections: [],
      shortcuts: !0,
    };
    function ar(e) {
      let t = !1;
      for (const n of document.styleSheets)
        try {
          if (n.href === e) {
            t = !0;
            break;
          }
        } catch (e) {
          continue;
        }
      return t;
    }
    function sr(e, t, n) {
      return qe.create(
        `\n\t\t<div class="tooltip">\n\t\t\t<div class="tooltip-title">\n\t\t\t\t<h4>${e}</h4>\n\t\t\t\t<span>${t}</span>\n\t\t\t</div>\n\t\t\t<span class="tooltip-description">${n}</span>\n\t\t</span>\n\t`
      );
    }
    function lr() {
      (ir = (function () {
        const e = qe.create('<hv-toolbar dir="ltr"></hv-toolbar>'),
          t = e.attachShadow({ mode: "open" });
        (e.style.position = "fixed"), (e.style.zIndex = "500000000");
        const n = qe.create(
          `\n        <ul class="toolbar no-select">\n            <li id='play' class='tool hbr-top-left hbr-bottom-left'>     \n                ${m}\n            </li>\n            \n            <li id='guidelines' class="tool">     \n                ${g}\n            </li>\n            <li id='grids' class="tool">     \n                ${v}\n            </li>\n            <li id='css_box' class="tool">     \n                ${W}\n            </li>\n            <li id='fonts' class="tool">\n                ${B}\n            </li>\n            <li id='edit' class="tool">\n                ${O}\n            </li>\n            <li id='palette' class="tool">\n                ${I}\n            </li>\n            <li id='trash' class="tool">\n                ${E}\n            </li>\n            <li id='search' class="tool">\n                ${P}\n            </li>\n            <li id='custom_css' class="tool">\n                ${q}\n            </li>\n            <li id='custom_js' class="tool">\n                ${z}\n            </li>\n            <li id="space" class='space'></li>\n            <li id='close' class='tool hbr-top-right hbr-bottom-right' >     \n                ${y}\n            </li>\n\n            <li class="window-container">\n                <div id="trash_window" class="window">\n                    <ul class="header">\n                        <li class="title">Hide/Remove Elements</li>\n                        <li id="trash_reset">${C}</li>\n                        <li id="trash_minimize">${A}</li>\n                        <li id="trash_close">${y}</li>\n                    </ul>\n                    <ul id="modes">\n                        <li id="hide" class="active">Hide</li>\n                        <li id="remove">Remove</li>\n                    </ul>\n                    <ul id="content">\n                    </ul>\n                </div>\n            </li>\n\n            <li class="window-container">\n                <div id="search_window" class="window">\n                    <ul class="header">\n                        <li class="title">Search</li>\n                        <li id="search_reset">${C}</li>\n                        <li id="search_close">${y}</li>\n                    </ul>\n                    <div class="content">\n                        <input type="text" placeholder="Search by #id, .class, tag" spellcheck="false"/>\n\n                        <span id="message">No element found</span>\n                    </div>\n                    <ul id="elements"></ul>\n                </div>\n            </li>\n\n            <li class="window-container">\n                <div id="fonts_window" class="window">\n                    <ul class="header">\n                        <li class="title">Fonts</li>\n                        <li id="fonts_reset">${C}</li>\n                        <li id="fonts_close">${y}</li>\n                    </ul>\n                    <ul id="content">\n                    </ul>\n                </div>\n            </li>\n\n            <li class="window-container">\n                <div id="palette_window" class="window">\n                    <ul class="header">\n                        <li class="title">Color Palette</li>\n                        <li id="palette_reset">${C}</li>\n                        <li id="palette_close">${y}</li>\n                    </ul>\n                    <ul id="content">\n                    </ul>\n                </div>\n            </li>\n\n            <li class="window-container">\n                <div id="custom_css_window" class="window code_window">\n                    <ul class="header">\n                        <li class="title">Custom CSS</li>\n                        <li id="custom_css_reset">${C}</li>\n                        <li id="custom_css_close">${y}</li>\n                    </ul>\n                    <div id="content">\n                        <textarea class="code" id="custom_css_code"></textarea>\n                    </div>\n                </div>\n            </li>\n\n            <li class="window-container">\n                <div id="custom_js_window" class="window code_window">\n                    <ul class="header">\n                        <li class="title">Custom Javascript</li>\n                        <li id="custom_js_run">${p}</li>\n                        <li id="custom_js_reset">${C}</li>\n                        <li id="custom_js_close">${y}</li>\n                        </ul>\n                    <div id="content">\n                        <textarea class="code" id="custom_js_code"></textarea>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    `
        );
        return (
          t.appendChild(
            qe.create(
              `<link href="${chrome.extension.getURL(
                "css/global.css"
              )}" rel="stylesheet" type="text/css">`
            )
          ),
          t.appendChild(
            qe.create(
              `<link href="${chrome.extension.getURL(
                "css/inspect/toolbar.css"
              )}" rel="stylesheet" type="text/css"> `
            )
          ),
          t.appendChild(
            qe.create(
              `<link href="${chrome.extension.getURL(
                "vendors/codemirror/lib/codemirror.css"
              )}" rel="stylesheet" type="text/css"> `
            )
          ),
          t.appendChild(
            qe.create(
              `<link href="${chrome.extension.getURL(
                "css/codemirror-theme.css"
              )}" rel="stylesheet" type="text/css"> `
            )
          ),
          t.appendChild(n),
          window === window.parent && document.body.appendChild(e),
          n
        );
      })()),
        (ir.moving = { allowed: !1 });
      const e = ir.querySelector("#play");
      e.appendChild(sr("Playback", "I", "Play or pause inspector.")),
        e.addEventListener("click", () => cr(null, e));
      const t = ir.querySelector("#space");
      t.addEventListener("mousedown", (e) => {
        t.style.cursor = "grabbing";
        const n = window.getComputedStyle(ir),
          r = parseInt(n.getPropertyValue("left").split("px")[0]),
          i = parseInt(n.getPropertyValue("top").split("px")[0]),
          { mx: o, my: a } = d();
        ir.moving = {
          allowed: !0,
          x: o - window.scrollX - r,
          y: a - window.scrollY - i,
        };
      }),
        t.addEventListener("mouseup", (e) => {
          (ir.moving = { allowed: !1 }), (t.style.cursor = "grab");
        });
      const n = ir.querySelector("#guidelines");
      n.appendChild(sr("Guidelines", "G", "Check alignment of an element.")),
        rr.secondary.guidelines.initialize(n),
        n.addEventListener("click", () => {
          ur();
        });
      const r = ir.querySelector("#grids");
      r.appendChild(sr("Grids", "H", "Adds outline to every element.")),
        rr.secondary.grids.initialize(r),
        r.addEventListener("click", () => {
          dr();
        });
      const i = ir.querySelector("#css_box");
      i.appendChild(sr("CSS Box", "C", "Visualize padding and margin.")),
        rr.secondary.cssBox.initialize(i),
        i.addEventListener("click", () => {
          fr();
        });
      const o = ir.querySelector("#fonts");
      o.appendChild(sr("Fonts", "F", "Know what font each tag is using."));
      const a = ir.querySelector("#fonts_window");
      rr.primary.fonts.initialize(o, a),
        o.addEventListener("click", () => {
          pr();
        }),
        a.querySelector("#fonts_close").addEventListener("click", () => {
          rr.disable("fonts");
        });
      const s = ir.querySelector("#edit");
      s.appendChild(sr("Edit", "E", "Edit content of an element.")),
        rr.primary.edit.initialize(s),
        s.addEventListener("click", () => {
          hr();
        });
      const l = ir.querySelector("#palette"),
        c = ir.querySelector("#palette_window");
      l.appendChild(
        sr(
          "Color Palette",
          "P",
          "Inspect color pallete of whole site in a visual way."
        )
      ),
        rr.primary.palette.initialize(l, c),
        l.addEventListener("click", () => {
          mr();
        }),
        c.querySelector("#palette_close").addEventListener("click", () => {
          rr.disable("palette");
        });
      const u = ir.querySelector("#trash"),
        f = ir.querySelector("#trash_window");
      u.appendChild(sr("Trash", "T", "Hide or Remove an element.")),
        rr.primary.trash.initialize(u, f),
        u.addEventListener("click", () => {
          gr();
        }),
        f.querySelector("#trash_close").addEventListener("click", () => {
          rr.disable("trash");
        });
      const h = ir.querySelector("#search"),
        b = ir.querySelector("#search_window");
      h.appendChild(
        sr("Search", "S", "Find element through tag name, id or classes.")
      ),
        rr.primary.search.initialize(h, b),
        h.addEventListener("click", () => {
          vr();
        }),
        b.querySelector("#search_close").addEventListener("click", () => {
          rr.disable("search");
        });
      const w = ir.querySelector("#custom_css"),
        x = ir.querySelector("#custom_css_window");
      w.appendChild(sr("Custom CSS", ",", "Add custom CSS to whole page.")),
        rr.primary.customCSS.initialize(w, x),
        w.addEventListener("click", () => yr()),
        x.querySelector("#custom_css_close").addEventListener("click", () => {
          rr.disable("customCSS");
        });
      const k = ir.querySelector("#custom_js"),
        S = ir.querySelector("#custom_js_window");
      k.appendChild(sr("Custom JS", ";", "Add custom JS to whole page.")),
        rr.primary.customJS.initialize(k, S),
        k.addEventListener("click", () => br()),
        S.querySelector("#custom_js_close").addEventListener("click", () => {
          rr.disable("customJS");
        }),
        ir.querySelector("#close").addEventListener("click", () => {
          Tr();
        });
    }
    function cr(e, t) {
      if (e) {
        if (!or.enabled || !or.shortcuts) return;
        e.preventDefault();
      }
      t || (t = ir.querySelector("#play")),
        (or.paused = !or.paused),
        or.paused
          ? ((t.innerHTML = p),
            rr.primary.style.setVisibility(!1),
            or.target.mark && (or.target.mark.remove(), (or.target = new Ve())))
          : (t.innerHTML = m),
        dn({ action: "hv.inspect.togglePlayback", status: or.paused });
    }
    function ur() {
      rr.secondary.guidelines.isEnabled()
        ? rr.disable("guidelines")
        : rr.enable("guidelines"),
        dn({
          action: "hv.inspect.toggleGuidelines",
          status: rr.secondary.guidelines.isEnabled(),
        });
    }
    function dr() {
      rr.secondary.grids.isEnabled() ? rr.disable("grids") : rr.enable("grids"),
        dn({
          action: "hv.inspect.toggleGrid",
          status: rr.secondary.grids.isEnabled(),
        });
    }
    function fr() {
      rr.secondary.cssBox.isEnabled()
        ? rr.disable("cssBox")
        : rr.enable("cssBox"),
        dn({
          action: "hv.inspect.toggleCssBox",
          status: rr.secondary.guidelines.isEnabled(),
        });
    }
    function hr() {
      rr.primary.edit.isEnabled() ? rr.disable("edit") : rr.enable("edit"),
        dn({
          action: "hv.inspect.toggleEdit",
          status: rr.primary.edit.isEnabled(),
        });
    }
    function pr() {
      rr.primary.fonts.isEnabled() ? rr.disable("fonts") : rr.enable("fonts");
    }
    function mr() {
      rr.primary.palette.isEnabled()
        ? rr.disable("palette")
        : rr.enable("palette");
    }
    function gr() {
      rr.primary.trash.isEnabled() ? rr.disable("trash") : rr.enable("trash"),
        dn({
          action: "hv.inspect.toggleTrash",
          status: rr.primary.trash.isEnabled(),
        });
    }
    function vr() {
      rr.primary.search.isEnabled()
        ? rr.disable("search")
        : rr.enable("search"),
        dn({
          action: "hv.inspect.toggleSearch",
          status: rr.primary.search.isEnabled(),
        });
    }
    function yr() {
      rr.primary.customCSS.isEnabled()
        ? rr.disable("customCSS")
        : rr.enable("customCSS");
    }
    function br() {
      rr.primary.customJS.isEnabled()
        ? rr.disable("customJS")
        : rr.enable("customJS");
    }
    function wr(e, t) {
      if (or.enabled && !or.paused) {
        e.preventDefault(), e.stopImmediatePropagation();
        const n = or.target.element;
        if (!n) return;
        switch (t) {
          case "up":
            xr(n.parentElement);
            break;
          case "down":
            xr(n.firstElementChild);
            break;
          case "left":
            xr(n.previousElementSibling);
            break;
          case "right":
            xr(n.nextElementSibling);
        }
      }
    }
    function xr(e) {
      if (e) {
        or.target.mark && or.target.mark.remove();
        const t = new Ve();
        (t.mark = Ze(e, !1)),
          (t.element = e),
          (or.target = t),
          rr.setTarget(or.target);
      }
    }
    function kr() {
      if (!or.enabled) return;
      const { mx: e, my: t } = d();
      if (ir && ir.moving.allowed) {
        const n = e - window.scrollX - ir.moving.x,
          r = t - window.scrollY - ir.moving.y;
        (ir.style.left = n + "px"), (ir.style.top = r + "px");
      }
      rr.primary.style.loop(), requestAnimationFrame(kr);
    }
    function Sr(e) {
      !or.enabled ||
        or.paused ||
        or.hidden ||
        e.shiftKey ||
        (e.preventDefault(), e.stopImmediatePropagation(), rr.onClick());
    }
    function Cr() {
      (or.enabled = !0),
        document.body.addEventListener("click", Sr, !0),
        window.addEventListener("message", Mr),
        lr(),
        rr.initialize(),
        window.hvGoogleFont ||
          ((window.hvGoogleFont = {
            fonts: {},
            link: document.createElement("link"),
          }),
          (window.hvGoogleFont.link.rel = "stylesheet"),
          (window.hvGoogleFont.link.href = ""),
          document.querySelector("head").appendChild(window.hvGoogleFont.link)),
        requestAnimationFrame(kr);
    }
    function Lr() {
      or.enabled &&
        ((or.enabled = !1),
        (or.paused = !1),
        (or.hidden = !1),
        document.body.removeEventListener("click", Sr, !0),
        window.removeEventListener("message", Mr),
        rr.destroy(),
        ir.getRootNode().host.remove(),
        (ir = null),
        or.target.mark && or.target.mark.remove(),
        (or.target = new Ve()));
    }
    function Tr() {
      Lr(),
        dn({ action: "hv.inspect.exit" }),
        window === window.parent && r("inspect.disable", {});
    }
    function Mr(e) {
      switch (e.data.action) {
        case "hv.inspect.exit":
          or.enabled && Tr();
          break;
        case "hv.inspect.togglePlayback":
          e.data.status !== or.paused && cr(null, null);
          break;
        case "hv.inspect.toggleGuidelines":
          e.data.status !== rr.secondary.guidelines.isEnabled() && ur();
          break;
        case "hv.inspect.toggleGrid":
          e.data.status !== rr.secondary.grids.isEnabled() && dr();
          break;
        case "hv.inspect.toggleCssBox":
          e.data.status !== rr.secondary.cssBox.isEnabled() && fr();
          break;
        case "hv.inspect.toggleEdit":
          e.data.status !== rr.primary.edit.isEnabled() && hr();
          break;
        case "hv.inspect.toggleTrash":
          e.data.status !== rr.primary.trash.isEnabled() && gr();
          break;
        case "hv.inspect.toggleSearch":
          e.data.status !== rr.primary.search.isEnabled() && vr();
          break;
        case "hv.inspect.search.find":
          rr.primary.search.findElements(e.data.selector);
          break;
        case "hv.inspect.search.reset":
          rr.primary.search.reset();
          break;
        case "hv.trash.setMode":
          rr.primary.trash.setMode(e.data.mode);
          break;
        case "hv.trash.addToElements":
          rr.primary.trash.addToElements(null, rr.primary.trash.getMode(), {
            tag_name: e.data.tag_name,
            selector: e.data.selector,
            unique_selector: e.data.unique_selector,
            display: e.data.display,
            href: e.data.href,
          });
          break;
        case "hv.trash.hideElement":
          rr.primary.trash.hideElement(
            e.data.unique_selector,
            e.data.mode,
            e.data.href
          );
          break;
        case "hv.trash.showElement":
          rr.primary.trash.showElement(
            e.data.unique_selector,
            e.data.mode,
            e.data.display,
            e.data.href
          );
      }
    }
    var Or = {
      initialize: async function () {
        window.hvStyleIframe
          ? (window.hvStyleIframe.contentDocument.body.innerHTML = "")
          : ((window.hvStyleIframe = document.createElement("iframe")),
            document.body.appendChild(window.hvStyleIframe),
            (window.hvStyleIframe.style.display = "none"));
        const e = document.querySelectorAll("link");
        for (const t of e)
          if (
            (t.href.endsWith(".css") ||
              t.type.includes("css") ||
              "stylesheet" === t.rel) &&
            !ar(t.href) &&
            (!t.href.startsWith("chrome-extension") ||
              !t.href.startsWith("moz-extension"))
          )
            try {
              const e = await c(t.href),
                n = t.href.split("/");
              n.splice(n.length - 1, 1);
              const r = n.join("/"),
                i = window.hvStyleIframe.contentDocument.createElement("style");
              (i.innerHTML = `${e} .hvStyleSheetSource { content: "${r}/" }`),
                window.hvStyleIframe.contentDocument.body.appendChild(i);
            } catch (e) {
              e.message.toLowerCase().includes("network error") &&
                r("inspect.loadStyles", { url: t.href });
            }
        for (const e of window.hvStyleIframe.contentDocument.styleSheets) {
          const t = e.rules || e.cssRules;
          if (!t.length) continue;
          const n = t[t.length - 1].style.content.replaceAll('"', "");
          for (const e of t)
            if (e instanceof CSSImportRule) {
              const t = e.href;
              if (t.endsWith(".css") || t.includes(".css")) {
                let r = e.href;
                if (
                  (r.startsWith("http") ||
                    r.startsWith("www") ||
                    (r = Ge.a.resolve(n, e.href)),
                  ar(t))
                ) {
                  const e = await c(r),
                    t =
                      window.hvStyleIframe.contentDocument.createElement(
                        "style"
                      );
                  (t.innerHTML = e),
                    window.hvStyleIframe.contentDocument.body.appendChild(t);
                }
              }
            }
        }
        rr.primary.customCSS.restore(), rr.primary.customJS.restore();
      },
      update: function (e) {
        if (or.enabled && !or.paused)
          if (e.tagName.toLowerCase().startsWith("hv-"))
            (or.hidden = !0),
              rr.primary.style.setVisibility(!1),
              or.target.mark && or.target.mark.remove(),
              (or.target = new Ve());
          else if (e !== or.target.element) {
            (or.hidden = !1), or.target.mark && or.target.mark.remove();
            const t = new Ve();
            (t.mark = Ze(e, !1, "", !1)),
              (t.element = e),
              (or.target = t),
              rr.setTarget(or.target);
          }
      },
      enable: Cr,
      disable: Lr,
      refresh: function () {
        or.enabled && (Lr(), Cr());
      },
      onKeyDown: function (e) {
        if (or.enabled && ht.get().shortcuts) {
          const t = e.target.tagName.toLowerCase();
          "Escape" === e.key || "Esc" === e.key
            ? Tr()
            : t.startsWith("hv-") || rr.primary.edit.isElementFocused()
            ? e.stopImmediatePropagation()
            : " " === e.key || "Spacebar" === e.key
            ? (function (e) {
                or.enabled &&
                  !or.paused &&
                  rr.primary.style.isEnabled() &&
                  (e.preventDefault(),
                  e.stopImmediatePropagation(),
                  rr.primary.style.dockWindow());
              })(e)
            : "ArrowLeft" === e.key || 37 === e.code
            ? wr(e, "left")
            : "ArrowUp" === e.key || 38 === e.code
            ? wr(e, "up")
            : "ArrowRight" === e.key || 39 === e.code
            ? wr(e, "right")
            : "ArrowDown" === e.key || 40 === e.code
            ? wr(e, "down")
            : "input" === t ||
              "textarea" === t ||
              e.target.getAttribute("contenteditable") ||
              ("i" === e.key || "I" === e.key
                ? cr(e, null)
                : "g" === e.key || "G" === e.key
                ? ur()
                : "h" === e.key || "H" === e.key
                ? dr()
                : "c" === e.key || "C" === e.key
                ? fr()
                : "f" === e.key || "F" === e.key
                ? pr()
                : "p" === e.key || "P" === e.key
                ? mr()
                : "e" === e.key || "E" === e.key
                ? hr()
                : "t" === e.key || "T" === e.key
                ? gr()
                : "s" === e.key || "S" === e.key
                ? vr()
                : "," === e.key
                ? yr()
                : ";" === e.key && br());
        }
      },
      addStyles: function (e) {
        const t = window.hvStyleIframe.contentDocument.createElement("style");
        (t.innerHTML = "" + e),
          window.hvStyleIframe.contentDocument.body.appendChild(t);
      },
    };
    function Er(e) {
      const t = qe.create('<hv-dropper-window dir="ltr"></hv-dropper-window>'),
        n = t.attachShadow({ mode: "open" }),
        r = qe.create('<div class="dropper-window"></div>');
      let i = '<canvas width="200" height="180"></canvas>',
        o = "",
        a = "",
        s = `\n\t\t<div class="help">\n        \t${j}\n        \tPress ESC to exit.\n        </div>\n\t`;
      return (
        e &&
          ((r.style.width = "220px"),
          (t.style.position = "absolute"),
          (r.style.position = "absolute"),
          (r.style.zIndex = "50000000"),
          (i = `\n\t\t\t<div id='drag'>\n\t\t\t\t${y}\n\t\t\t</div>\n\t\t`),
          (o = `\n\t\t\t<li id="copy_rgb" class="copy">\n                ${S}\n            </li>\n\t\t`),
          (a = `\n\t\t\t<li id="copy_hex" class="copy">\n                ${S}\n            </li>\n\t\t`),
          (s = "")),
        (i += `\n\t\t<div class="container">\n\t         <ul>\n\t            <li id="r">\n\t                <span>R</span> 255\n\t            </li>\n\t            <li id="g">\n\t                <span>G</span> 255\n\t            </li>\n\t            <li id="b">\n\t                <span>B</span> 255\n\t            </li>\n\t            ${o}\n\t        </ul>\n\t        <div class="hex">\n\t            <div id="color"></div>\n\t            <ul>\n\t                <li id="hex">\n\t                    <span>#</span> FFFFFF\n\t                </li>\n\t                ${a}\n\t            </ul>\n\t        </div>\n\n\t        ${s}\n\t    </div>\n\t`),
        (r.innerHTML = i),
        n.appendChild(
          qe.create(
            `<link href="${chrome.extension.getURL(
              "css/global.css"
            )}" rel="stylesheet" type="text/css"> `
          )
        ),
        n.appendChild(
          qe.create(
            `<link href="${chrome.extension.getURL(
              "css/color_eyedropper/dropperWindow.css"
            )}" rel="stylesheet" type="text/css"> `
          )
        ),
        n.appendChild(r),
        document.body.appendChild(t),
        r
      );
    }
    Float32Array;
    let Ar = null,
      Nr = null,
      _r = null,
      Pr = null,
      Rr = null,
      jr = null,
      Hr = null,
      Dr = null,
      zr = null,
      Br = null,
      Ir = null;
    const qr = {
      enabled: !1,
      hide: !1,
      screenshot: null,
      currentColor: {},
      dockedWindows: [],
    };
    function Wr() {
      (Nr = (function () {
        const e = document.createElement("hv-image-canvas"),
          t = e.attachShadow({ mode: "open" }),
          n = document.createElement("canvas");
        return (
          (n.width = window.innerWidth),
          (n.height = window.innerHeight),
          (n.style.background = "#000"),
          (n.style.position = "fixed"),
          (n.style.zIndex = "10000"),
          (n.style.top = "0"),
          (n.style.left = "0"),
          t.appendChild(n),
          document.body.appendChild(e),
          n
        );
      })()),
        (_r = Nr.getContext("2d")),
        (Nr.style.visibility = "hidden"),
        Nr.addEventListener("click", () => {
          !(function () {
            const e = Er(!0);
            e.color = { ...qr.currentColor };
            const t = Ar.getBoundingClientRect();
            (e.getRootNode().host.style.left = t.left + window.scrollX + "px"),
              (e.getRootNode().host.style.top = t.top + window.scrollY + "px");
            const n = e.querySelector("#drag");
            n.addEventListener("mousedown", (t) => {
              n.style.cursor = "grabbing";
              const r = window.getComputedStyle(e),
                i = parseInt(r.getPropertyValue("left").split("px")[0]),
                o = parseInt(r.getPropertyValue("top").split("px")[0]),
                { mx: a, my: s } = d();
              e.moving = { allowed: !0, x: a - i, y: s - o };
            }),
              n.addEventListener("mouseup", (t) => {
                (e.moving = { allowed: !1 }), (n.style.cursor = "grab");
              }),
              n.querySelector("svg").addEventListener("click", () => {
                (qr.hide = !1),
                  e.getRootNode().host.remove(),
                  qr.dockedWindows.splice(e.id, 1);
              }),
              (e.id = qr.dockedWindows.length),
              (e.querySelector("#r").innerHTML = "<span>R</span> " + e.color.r),
              (e.querySelector("#g").innerHTML = "<span>G</span> " + e.color.g),
              (e.querySelector("#b").innerHTML = "<span>B</span> " + e.color.b),
              e.querySelector("#copy_rgb").addEventListener("click", () => {
                Et(`${e.color.r}, ${e.color.g}, ${e.color.b}`),
                  $e.show("Copied!");
              });
            const i = e.color.hex
              .substring(1, e.color.hex.length)
              .toUpperCase();
            (e.querySelector("#hex").innerHTML = "<span>#</span> " + i),
              e.querySelector("#copy_hex").addEventListener("click", () => {
                Et("" + e.color.hex), $e.show("Copied!");
              }),
              (e.querySelector("#color").style.background = e.color.hex),
              r("colorEyedropper.addToRecents", { color: qr.currentColor }),
              e.addEventListener("mouseover", () => (qr.hide = !0)),
              e.addEventListener("mouseout", () => (qr.hide = !1)),
              qr.dockedWindows.push(e),
              (qr.hide = !0),
              setTimeout(() => (qr.hide = !1), 200);
          })();
        });
    }
    function Fr() {
      if (!qr.enabled) return;
      const { mx: e, my: t } = d();
      qr.hide
        ? (Ar.style.visibility = "hidden")
        : (Ar.style.visibility = "visible");
      const n = window.innerWidth - 15,
        r = window.innerHeight - 15;
      let i = e - window.scrollX + 15,
        o = t - window.scrollY + 15;
      const a = Ar.getBoundingClientRect(),
        s = a.width,
        l = a.height;
      i + s > n && (i = e - (s + 15)),
        o + l > r && o - l > 0 && (o = t - window.scrollY - l - 15),
        (Ar.style.left = i + "px"),
        (Ar.style.top = o + "px");
      let c = 5;
      ht.get().color_eyedropper && (c = ht.get().color_eyedropper.zoom);
      const u = Nr.width * c,
        f = Nr.height * c,
        h = -(e - window.scrollX) * c + Pr.width / 2,
        p = -(t - window.scrollY) * c + Pr.height / 2;
      Rr.clearRect(0, 0, Pr.width, Pr.height),
        Rr.drawImage(qr.screenshot, h, p, u, f),
        (qr.currentColor = ct(
          Rr.getImageData(Pr.width / 2, Pr.height / 2, 1, 1).data
        )),
        (jr.innerHTML = "<span>R</span> " + qr.currentColor.r),
        (Hr.innerHTML = "<span>G</span> " + qr.currentColor.g),
        (Dr.innerHTML = "<span>B</span> " + qr.currentColor.b),
        (zr.innerHTML =
          "<span>#</span> " +
          qr.currentColor.hex
            .substring(1, qr.currentColor.hex.length)
            .toUpperCase()),
        (Br.style.background = qr.currentColor.hex),
        Rr.beginPath(),
        Rr.moveTo(Pr.width / 2, 0),
        Rr.lineTo(Pr.width / 2, Pr.height),
        (Rr.strokeStyle = "red"),
        Rr.stroke(),
        Rr.closePath(),
        Rr.beginPath(),
        Rr.moveTo(0, Pr.height / 2),
        Rr.lineTo(Pr.width, Pr.height / 2),
        (Rr.strokeStyle = "red"),
        Rr.stroke(),
        Rr.closePath();
      for (const n of qr.dockedWindows)
        if (n.moving && n.moving.allowed) {
          const r = e - n.moving.x,
            i = t - n.moving.y;
          (n.style.left = r + "px"), (n.style.top = i + "px");
        }
      requestAnimationFrame(Fr);
    }
    function $r() {
      (qr.enabled = !1),
        (Ar.style.visibility = "hidden"),
        (Nr.style.visibility = "hidden");
      for (const e of qr.dockedWindows) e.style.visibility = "hidden";
      Nr.style.cursor = "progress";
    }
    function Ur() {
      null !== Ir && clearTimeout(Ir),
        $r(),
        (Ir = setTimeout(() => {
          r("colorEyedropper.takeScreenshot", {}, null);
        }, 500));
    }
    function Gr() {
      (Nr.width = window.innerWidth),
        (Nr.height = window.innerHeight),
        $r(),
        setTimeout(() => {
          r("colorEyedropper.takeScreenshot", {}, null);
        }, 500);
    }
    function Vr() {
      if (qr.enabled) {
        (qr.enabled = !1),
          Ar.getRootNode().host.remove(),
          (Ar = null),
          Nr.getRootNode().host.remove(),
          (Nr = null),
          (_r = null);
        for (const e of qr.dockedWindows) e.getRootNode().host.remove();
        (qr.dockedWindows = []),
          window.removeEventListener("resize", Gr),
          window.removeEventListener("scroll", Ur);
      }
    }
    var Kr = {
      enable: function () {
        Wr(),
          (Ar = Er(!1)),
          (Ar.style.visibility = "hidden"),
          (Pr = Ar.querySelector("canvas")),
          (Rr = Pr.getContext("2d")),
          (jr = Ar.querySelector("#r")),
          (Hr = Ar.querySelector("#g")),
          (Dr = Ar.querySelector("#b")),
          (zr = Ar.querySelector("#hex")),
          (Br = Ar.querySelector("#color")),
          window.addEventListener("resize", Gr),
          window.addEventListener("scroll", Ur),
          r("colorEyedropper.takeScreenshot", {}, null);
      },
      disable: Vr,
      setScreenshot: function (e) {
        const t = new Image();
        (t.onload = () => {
          for (const e of qr.dockedWindows) e.style.visibility = "visible";
          (qr.screenshot = t),
            (qr.enabled = !0),
            (Nr.style.cursor = "crosshair"),
            (Nr.style.visibility = "visible"),
            (Ar.style.visibility = "visible"),
            _r.clearRect(0, 0, Nr.width, Nr.height),
            _r.drawImage(qr.screenshot, 0, 0, Nr.width, Nr.height),
            requestAnimationFrame(Fr);
        }),
          (t.src = e);
      },
      onKeyDown: function (e) {
        qr.enabled &&
          (("Escape" !== e.key && "Esc" !== e.key) ||
            (Vr(), r("colorEyedropper.disable", {})));
      },
    };
    n(15);
    function Yr() {
      const e = [...Jr()],
        t = document.querySelectorAll("img");
      for (const n of t) {
        const t = n.currentSrc || n.src;
        t && -1 === e.indexOf(t) && e.push(t);
      }
      return e;
    }
    function Jr() {
      const e = [],
        t = document.querySelectorAll("body, body *");
      for (const n of t) {
        const t = window
          .getComputedStyle(n)
          .getPropertyValue("background-image");
        if (t && t.includes("http")) {
          const n = t.split("url(");
          n.shift();
          for (const t of n) {
            const n = t.split(")")[0].replaceAll('"', "").replaceAll("'", "");
            e.push(n);
          }
        }
      }
      return [...new Set(e)];
    }
    function Xr() {
      const e = [],
        t = document.querySelectorAll("video");
      for (const n of t) {
        let t = "";
        if (n.src) t = n.src;
        else {
          const e = n.querySelector("source");
          e && (t = e.src);
        }
        t && -1 === e.indexOf(t) && e.push(t);
      }
      return e;
    }
    function Zr() {
      const e = [],
        t = document.querySelectorAll("svg"),
        n = [];
      for (const r of t) {
        const t = qe.getHtml(r);
        -1 === n.indexOf(r.innerHTML) && (n.push(r.innerHTML), e.push(t));
      }
      return e;
    }
    function Qr() {
      const e = [],
        t = document.querySelectorAll("lottie-player");
      for (const n of t) {
        const t = n.getAttribute("src");
        t && e.push(t);
      }
      return e;
    }
    function ei() {
      const e = [],
        t = [
          ...document.querySelectorAll("iframe"),
          ...document.querySelectorAll("object"),
          ...document.querySelectorAll("embed"),
          ...document.querySelectorAll("a"),
        ];
      for (const n of t) {
        let t = "";
        (t =
          "object" === n.tagName.toLowerCase()
            ? n.data
            : "a" === n.tagName.toLowerCase()
            ? n.href
            : n.src),
          t &&
            (t.endsWith(".pdf") ||
              t.includes(".pdf#") ||
              t.includes(".pdf?")) &&
            e.push(t);
      }
      return [...new Set(e)];
    }
    var ti = {
      get: function () {
        const e = {
          images: Yr(),
          svgs: Zr(),
          videos: Xr(),
          lotties: Qr(),
          pdfs: ei(),
        };
        r("assets.set", e);
      },
    };
    var ni = function (e) {
      (this.parent = qe.create("<hv-window></hv-window>")),
        (this.shadow = this.parent.attachShadow({ mode: "open" })),
        (this.win = qe.create(
          '<div class="window" style="visibility: hidden;"></div>'
        )),
        (this.onClose = () => {});
      const t = qe.create(
        `<div class="header" style="background: ${e.color};"></div>`
      );
      t.appendChild(qe.create(`<h1>${e.name}</h1>`));
      const n = qe.create(y);
      n.addEventListener("click", (e) => {
        e.stopImmediatePropagation(), this.onClose(), this.parent.remove();
      }),
        t.appendChild(n);
      const r = qe.create("<div class='body scroll'></div>");
      this.win.appendChild(t),
        this.win.appendChild(r),
        this.shadow.appendChild(
          qe.create(
            `<link href="${chrome.extension.getURL(
              "css/global.css"
            )}" rel="stylesheet" type="text/css"> `
          )
        ),
        this.shadow.appendChild(
          qe.create(
            `<link href="${chrome.extension.getURL(
              "css/components/window.css"
            )}" rel="stylesheet" type="text/css">`
          )
        );
      const i = qe.create(
        `<link href="${e.css}" rel="stylesheet" type="text/css">`
      );
      this.shadow.appendChild(i),
        i.addEventListener("load", () => {
          this.win.style.visibility = "visible";
        }),
        this.shadow.appendChild(this.win);
    };
    const ri = [
        "LABEL",
        "SCRIPT",
        "BUTTON",
        "STYLE",
        "NOSCRIPT",
        "A",
        "CODE",
        "PRE",
        "INPUT",
        "TEXTAREA",
      ],
      ii = {
        acceptNode: (e) => {
          if (!si(e)) return NodeFilter.FILTER_ACCEPT;
        },
      };
    let oi = null;
    const ai = { loop: !1, textNodes: {}, mistakes: {} },
      si = (e) => {
        let t = e,
          n = 0,
          r = !1;
        for (; !r && null !== t && n < 5; ) {
          try {
            r = !(
              "true" !== t.getAttribute("contenteditable") &&
              "true" !== t.getAttribute("data-text") &&
              !ri.includes(t.nodeName)
            );
          } catch (e) {}
          (t = t.parentNode), n++;
        }
        return r;
      };
    function li() {
      if (ai.loop && oi) {
        const { mx: e, my: t } = d();
        if (oi.moving && oi.moving.allowed) {
          const n = e - window.scrollX - oi.moving.x,
            r = t - window.scrollY - oi.moving.y;
          (oi.win.style.left = n + "px"), (oi.win.style.top = r + "px");
        }
        requestAnimationFrame(li);
      }
    }
    function ci(e, t) {
      var n = document.createElement("font");
      return (
        (n.style.background = "red"),
        (n.style.color = "white"),
        (n.textContent = t),
        e.parentNode.insertBefore(n, e.nextSibling),
        n
      );
    }
    function ui() {
      (ai.loop = !1), (oi = null);
      for (const [e, t] of Object.entries(ai.mistakes))
        for (let e = 0; e < t.nodes.length; e++) {
          const n = t.nodes[e],
            r = t.highlights[e];
          (n.textContent += r.textContent), r.remove();
        }
    }
    var di = {
      getTextNodes: function () {
        const e = {};
        let t,
          n = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            ii
          ),
          i = 0;
        for (; (t = n.nextNode()); ) {
          t.textContent.trim() && ((ai.textNodes["" + i] = t), i++);
        }
        for (const [t, n] of Object.entries(ai.textNodes))
          e[t] = n.textContent.trim();
        r("debug.setTextNodes", { nodes: e });
      },
      show: function (e) {
        ai.loop = !0;
        for (const [t, n] of Object.entries(e))
          ai.mistakes[t] = { words: n, li: [], highlights: [], nodes: [] };
        (oi = new ni({
          color: "#880e4f",
          name: "Spell Check",
          css: chrome.extension.getURL("css/debug/spellcheck.css"),
        })),
          (oi.onClose = ui);
        const t = oi.win.querySelector(".header");
        t.addEventListener("mousedown", (e) => {
          t.style.cursor = "grabbing";
          const n = window.getComputedStyle(oi.win),
            r = parseInt(n.getPropertyValue("left").split("px")[0]),
            i = parseInt(n.getPropertyValue("top").split("px")[0]),
            { mx: o, my: a } = d();
          oi.moving = {
            allowed: !0,
            x: o - window.scrollX - r,
            y: a - window.scrollY - i,
          };
        }),
          t.addEventListener("mouseup", (e) => {
            (oi.moving = { allowed: !1 }), (t.style.cursor = "grab");
          }),
          (function () {
            const e = oi.win.querySelector(".body"),
              t = qe.create("<ul></ul>");
            for (const [e, n] of Object.entries(ai.mistakes)) {
              let r = ai.textNodes[e];
              for (const i of n.words) {
                const n = r.data.indexOf(i),
                  o = r.splitText(n + i.length),
                  a = ci(r, i);
                r.data = r.data.replace(i, "");
                const s =
                    r.parentElement.tagName.toLowerCase() +
                    qe.getSelector(r.parentElement),
                  l = qe.create(
                    `\n                <li>\n                    <h4>${i}</h4>\n                    <p>${s}</p>\n                </li>\n            `
                  );
                l.addEventListener("click", () => {
                  a.scrollIntoView({
                    behavior: "auto",
                    block: "center",
                    inline: "center",
                  });
                }),
                  t.appendChild(l),
                  ai.mistakes[e].li.push(l),
                  ai.mistakes[e].highlights.push(a),
                  ai.mistakes[e].nodes.push(r),
                  (r = o);
              }
            }
            e.appendChild(t);
          })(),
          document.body.appendChild(oi.parent),
          requestAnimationFrame(li);
      },
    };
    const fi = [
      "article",
      "aside",
      "details",
      "figcaption",
      "figure",
      "footer",
      "header",
      "main",
      "mark",
      "nav",
      "section",
      "summary",
      "time",
    ];
    var hi = {
      getMetaTags: function () {
        const e = [],
          t = document.querySelectorAll("meta");
        for (const n of t) {
          const t = dt.getHtmlAttribs(n);
          e.push(t);
        }
        r("debug.setMetaTags", { tags: e });
      },
      getTextNodes: di.getTextNodes,
      showSpellMistakes: di.show,
      getLinks: function () {
        const e = [],
          t = document.querySelectorAll("a");
        for (const n of t)
          try {
            const t = new URL(n.href.trim());
            if (t && t.protocol.startsWith("http")) {
              if (
                t.hostname.includes("chrome.") ||
                t.pathname.includes("/wp-admin") ||
                t.pathname.includes("/wp-login") ||
                t.pathname.includes("/logout") ||
                t.search.includes("=logout")
              )
                continue;
              e.push(t.href);
            }
          } catch (e) {}
        r("debug.setLinks", { links: [...new Set(e)] });
      },
      getHSE: function () {
        const e = {};
        for (const t of fi) {
          const n = document.querySelector(t);
          e[t] = !!n;
        }
        r("debug.setHSE", { hse: e });
      },
    };
    let pi = null,
      mi = null,
      gi = null,
      vi = null,
      yi = null;
    const bi = { top: null, right: null, bottom: null, left: null },
      wi = { top: null, right: null, bottom: null, left: null },
      xi = {
        enabled: !1,
        selecting: !1,
        moving: !1,
        resizing: !1,
        rect: { x1: 0, y1: 0, x2: 0, y2: 0 },
      };
    function ki(e) {
      const t = qe.create('<div class="scaler"></div>');
      switch (e) {
        case "top":
          (t.style.top = "-5px"),
            (t.style.left = "50%"),
            (t.style.transform = "translate(-50%, 0)");
          break;
        case "right":
          t.classList.add("hor"),
            (t.style.top = "50%"),
            (t.style.right = "-5px"),
            (t.style.transform = "translate(0, -50%)");
          break;
        case "bottom":
          (t.style.bottom = "-5px"),
            (t.style.left = "50%"),
            (t.style.transform = "translate(-50%, 0)");
          break;
        case "left":
          t.classList.add("hor"),
            (t.style.top = "50%"),
            (t.style.left = "-5px"),
            (t.style.transform = "translate(0, -50%)");
      }
      return t;
    }
    function Si() {
      return qe.create('<div class="out-selection"></div>');
    }
    function Ci() {
      const { mx: e, my: t } = d();
      return { x: e - window.scrollX, y: t - window.scrollY };
    }
    function Li() {
      const e = xi.rect.x1 > xi.rect.x2 ? xi.rect.x1 : xi.rect.x2,
        t = xi.rect.y1 > xi.rect.y2 ? xi.rect.y1 : xi.rect.y2;
      return {
        largeX: e,
        largeY: t,
        smallX: e === xi.rect.x1 ? xi.rect.x2 : xi.rect.x1,
        smallY: t === xi.rect.y1 ? xi.rect.y2 : xi.rect.y1,
      };
    }
    function Ti(e, t, n, r, i) {
      (e.style.top = t + "px"),
        (e.style.left = n + "px"),
        (e.style.width = r + "px"),
        (e.style.height = i + "px");
    }
    function Mi() {
      const { largeX: e, largeY: t, smallX: n, smallY: r } = Li(),
        i = e - n,
        o = t - r;
      i > 5 || o > 5
        ? ((pi.style.display = "block"),
          Ti(pi, r, n, i, o),
          Ti(wi.top, 0, 0, window.innerWidth, r),
          Ti(wi.right, r, e, window.innerWidth - e, o),
          Ti(wi.bottom, t, 0, window.innerWidth, window.innerHeight - t),
          Ti(wi.left, r, 0, n, o))
        : ((pi.style.display = "none"),
          Ti(wi.top, 0, 0, window.innerWidth, window.innerHeight),
          Ti(wi.right, 0, 0, 0, 0),
          Ti(wi.bottom, 0, 0, 0, 0),
          Ti(wi.left, 0, 0, 0, 0)),
        (yi.style.visibility = "visible"),
        (yi.querySelector("#width").innerHTML = i),
        (yi.querySelector("#height").innerHTML = o);
    }
    function Oi() {
      const { x: e, y: t } = Ci();
      if (xi.selecting)
        (xi.rect.x2 = e), (xi.rect.y2 = t), Mi(), requestAnimationFrame(Oi);
      else if (xi.moving) {
        const n = e - pi.moving.x,
          r = t - pi.moving.y;
        (xi.rect.x1 = n),
          (xi.rect.y1 = r),
          (xi.rect.x2 = n + pi.moving.width),
          (xi.rect.y2 = r + pi.moving.height),
          Mi(),
          requestAnimationFrame(Oi);
      } else if (xi.resizing) {
        switch (pi.resizing) {
          case "top":
            xi.rect.y1 > xi.rect.y2 ? (xi.rect.y2 = t) : (xi.rect.y1 = t);
            break;
          case "right":
            xi.rect.x2 > xi.rect.x1 ? (xi.rect.x2 = e) : (xi.rect.x1 = e);
            break;
          case "bottom":
            xi.rect.y2 > xi.rect.y1 ? (xi.rect.y2 = t) : (xi.rect.y1 = t);
            break;
          case "left":
            xi.rect.x1 > xi.rect.x2 ? (xi.rect.x2 = e) : (xi.rect.x1 = e);
        }
        Mi(), requestAnimationFrame(Oi);
      }
    }
    function Ei() {
      xi.rect.x1 && Mi();
    }
    function Ai(e) {
      0 === e.buttons &&
        (xi.selecting || xi.moving || xi.resizing) &&
        ((xi.selecting = !1),
        (xi.moving = !1),
        (xi.resizing = !1),
        (vi.style.display = "none"));
    }
    function Ni() {
      (pi.style.display = "none"),
        (vi.style.display = "block"),
        (yi.style.visibility = "hidden"),
        (xi.selecting = !1),
        (xi.moving = !1),
        (xi.resizing = !1),
        (xi.rect = { x1: 0, y1: 0, x2: 0, y2: 0 }),
        Ti(pi, 0, 0, 0, 0),
        Ti(wi.top, 0, 0, window.innerWidth, window.innerHeight),
        Ti(wi.right, 0, 0, 0, 0),
        Ti(wi.bottom, 0, 0, 0, 0),
        Ti(wi.left, 0, 0, 0, 0);
    }
    function _i() {
      (xi.enabled = !1),
        (xi.selecting = !1),
        (xi.moving = !1),
        (xi.resizing = !1),
        window.removeEventListener("resize", Ei),
        window.removeEventListener("mouseup", Ai),
        (xi.rect = { x1: 0, y1: 0, x2: 0, y2: 0 }),
        mi.remove(),
        (mi = null),
        (gi = null),
        (vi = null),
        (yi = null),
        (bi.top = null),
        (bi.right = null),
        (bi.bottom = null),
        (bi.left = null),
        (wi.top = null),
        (wi.right = null),
        (wi.bottom = null),
        (wi.left = null);
    }
    var Pi = {
      startSelection: function () {
        (xi.enabled = !0),
          window.addEventListener("resize", Ei),
          window.addEventListener("mouseup", Ai),
          (mi = qe.create(
            '<hv-selection-overlay dir="ltr"></hv-selection-overlay>'
          )),
          (mi.style.position = "fixed"),
          (mi.style.zIndex = "50000000"),
          (gi = mi.attachShadow({ mode: "closed" })),
          gi.appendChild(
            qe.create(
              `<link href="${chrome.extension.getURL(
                "css/global.css"
              )}" rel="stylesheet" type="text/css">`
            )
          ),
          gi.appendChild(
            qe.create(
              `<link href="${chrome.runtime.getURL(
                "css/capture/selectedArea.css"
              )}" rel="stylesheet" type="text/css">`
            )
          ),
          (vi = qe.create('<div class="overlay"></div>')),
          vi.addEventListener("mousedown", (e) => {
            if (1 === e.buttons) {
              xi.selecting = !0;
              const { x: e, y: t } = Ci();
              (xi.rect.x1 = e), (xi.rect.y1 = t), requestAnimationFrame(Oi);
            }
          }),
          (pi = qe.create('<div class="selection"></div>')),
          pi.addEventListener("mousedown", (e) => {
            if (1 === e.buttons) {
              xi.moving = !0;
              const e = window.getComputedStyle(pi),
                t = parseInt(e.getPropertyValue("left").split("px")[0]),
                n = parseInt(e.getPropertyValue("top").split("px")[0]),
                r = parseInt(e.getPropertyValue("width").split("px")[0]),
                i = parseInt(e.getPropertyValue("height").split("px")[0]),
                { x: o, y: a } = Ci();
              (pi.moving = { x: o - t, y: a - n, width: r, height: i }),
                requestAnimationFrame(Oi);
            }
          }),
          (bi.top = ki("top")),
          bi.top.addEventListener("mousedown", (e) => {
            1 === e.buttons &&
              (e.stopPropagation(),
              (xi.resizing = !0),
              (pi.resizing = "top"),
              requestAnimationFrame(Oi));
          }),
          (bi.right = ki("right")),
          bi.right.addEventListener("mousedown", (e) => {
            1 === e.buttons &&
              (e.stopPropagation(),
              (xi.resizing = !0),
              (pi.resizing = "right"),
              requestAnimationFrame(Oi));
          }),
          (bi.bottom = ki("bottom")),
          bi.bottom.addEventListener("mousedown", (e) => {
            1 === e.buttons &&
              (e.stopPropagation(),
              (xi.resizing = !0),
              (pi.resizing = "bottom"),
              requestAnimationFrame(Oi));
          }),
          (bi.left = ki("left")),
          bi.left.addEventListener("mousedown", (e) => {
            1 === e.buttons &&
              (e.stopPropagation(),
              (xi.resizing = !0),
              (pi.resizing = "left"),
              requestAnimationFrame(Oi));
          }),
          (wi.top = Si()),
          (wi.top.style.width = "100%"),
          (wi.top.style.height = "100%"),
          (wi.right = Si()),
          (wi.bottom = Si()),
          (wi.left = Si());
        const e = qe.create(
          `\n        <div class="actions">\n            <button id="cancel">${y}</button>\n            <button id="reset">${C}</button>\n            <button id="capture">${F}</button>\n        </div>\n    `
        );
        e.querySelector("#cancel").addEventListener("click", _i),
          e.querySelector("#reset").addEventListener("click", Ni),
          e.querySelector("#capture").addEventListener("click", () => {
            const e = Li(),
              t = e.largeX - e.smallX,
              n = e.largeY - e.smallY;
            (t > 5 || n > 5) &&
              ((e.width = window.innerWidth),
              (e.height = window.innerHeight),
              r("screenshot.captureSelectedArea", { rect: e }),
              _i());
          }),
          (yi = qe.create(
            `\n        <div class="info">\n            <span id="width">0</span>\n            ${y}\n            <span id="height">0</span>\n        </div>\n    `
          )),
          gi.appendChild(vi),
          pi.appendChild(bi.top),
          pi.appendChild(bi.right),
          pi.appendChild(bi.bottom),
          pi.appendChild(bi.left),
          gi.appendChild(pi),
          gi.appendChild(wi.top),
          gi.appendChild(wi.right),
          gi.appendChild(wi.bottom),
          gi.appendChild(wi.left),
          gi.appendChild(e),
          gi.appendChild(yi),
          document.body.appendChild(mi);
      },
      exit: _i,
      isEnabled: function () {
        return xi.enabled;
      },
    };
    const Ri = {
      original_x: 0,
      original_y: 0,
      arrangements: [],
      num_arrangements: 0,
      clean_up_timeout: null,
      videos: [],
      fixed_background: [],
      stickies: [],
      fixed: [],
      style: null,
    };
    function ji(e = !1) {
      e ||
        (document.querySelector("head").appendChild(l),
        (Ri.style = document.createElement("style")),
        (Ri.style.innerHTML =
          "\n            html { \n                scroll-behavior: auto !important; \n            } \n            * { \n                -webkit-transition: none !important;\n                -moz-transition: none !important;\n                -o-transition: none !important;\n                transition: none !important;\n                animation-duration: 0s !important;\n            }\n        "),
        document.body.appendChild(Ri.style));
      const t = document.querySelectorAll("video");
      for (const e of t)
        e.currentTime > 0 &&
          !e.paused &&
          !e.ended &&
          e.readyState > 2 &&
          (Ri.videos.push(e), e.pause());
    }
    function Hi() {
      for (const e of Ri.videos) e.play();
      (Ri.video = []),
        Ri.style && (l.remove(), Ri.style.remove(), (Ri.style = null));
    }
    function Di() {
      Hi(), window.scrollTo(Ri.original_x, Ri.original_y);
      for (const e of Ri.stickies) e.element.setAttribute("style", e.style);
      Ri.stickies = [];
      for (const e of Ri.fixed) e.element.setAttribute("style", e.style);
      Ri.fixed = [];
      for (const e of Ri.fixed_background)
        e.element.setAttribute("style", e.style);
      Ri.fixed_background = [];
    }
    function zi(e) {
      let t = e.getAttribute("style");
      return t ? ((t = t.trim()), t.endsWith(";") || (t += ";")) : (t = ""), t;
    }
    function Bi(e) {
      for (const t of document.querySelectorAll("body *")) {
        const n = window.getComputedStyle(t);
        if (
          n.getPropertyValue("position").includes("fixed") &&
          !n.getPropertyValue("visibility").includes("hidden")
        ) {
          const n = t.getBoundingClientRect();
          if (e ? n.top < 200 : n.top > 200) {
            const n = zi(t);
            Ri.fixed.push({
              element: t,
              style: n,
              type: e ? "header" : "normal",
            }),
              t.setAttribute("style", n + " visibility: hidden !important;");
          }
        }
      }
    }
    function Ii() {
      if (!Ri.arrangements.length) return void Di();
      const e = Ri.arrangements.shift(),
        t = e[0],
        n = e[1];
      window.scrollTo(t, n);
      var i = {
        x: window.scrollX,
        y: window.scrollY,
        complete:
          (Ri.num_arrangements - Ri.arrangements.length) / Ri.num_arrangements,
        window_width: window.innerWidth,
        total_width: Ri.page_width,
        total_height: Ri.page_height,
        pixel_ratio: window.devicePixelRatio,
      };
      window.setTimeout(() => {
        if (Ri.num_arrangements > 1)
          switch (Ri.arrangements.length) {
            case Ri.num_arrangements - 1:
              Bi(!1);
              break;
            case 0:
              Bi(!0);
              for (const e of Ri.fixed)
                "normal" === e.type && e.element.setAttribute("style", e.style);
              break;
            default:
              Bi(!0);
          }
        !(function (e) {
          window.setTimeout(() => {
            (Ri.clean_up_timeout = window.setTimeout(Di, 2e3)),
              r("screenshot.captureFragment", { data: e });
          }, 400);
        })(i);
      }, 200);
    }
    var qi = {
      prepare: ji,
      reset: Hi,
      prepareFullPage: function () {
        ji();
        for (const e of document.querySelectorAll("body, body *")) {
          const t = window.getComputedStyle(e),
            n = t.getPropertyValue("position"),
            r = t.getPropertyValue("background-attachment"),
            i = e.getAttribute("style") || "";
          let o = i;
          n.includes("sticky") &&
            (Ri.stickies.push({ element: e, style: i }),
            (o =
              "position: relative !important; inset: auto !important; top: 0px; " +
              o)),
            "fixed" === r &&
              (Ri.fixed_background.push({ element: e, style: i }),
              (o =
                "background-attachment: scroll !important; background-position: center !important; " +
                o)),
            e.setAttribute("style", o),
            (e.scrollTop = 0);
        }
        (Ri.original_x = window.scrollX),
          (Ri.original_y = window.scrollY),
          (Ri.arrangements = []),
          (Ri.num_arrangements = 0),
          (Ri.page_height = Math.max(
            document.body.scrollHeight || 0,
            document.documentElement.scrollHeight || 0,
            document.body.offsetHeight || 0,
            document.documentElement.offsetHeight || 0,
            document.body.clientHeight || 0,
            document.documentElement.clientHeight || 0
          )),
          (Ri.page_width = Math.max(
            document.body.scrollWidth || 0,
            document.documentElement.scrollWidth || 0,
            document.body.offsetWidth || 0,
            document.documentElement.offsetWidth || 0,
            document.body.clientWidth || 0,
            document.documentElement.clientWidth || 0
          ));
        const e = window.innerHeight,
          t = e - (e > 200 ? 200 : 0);
        let n = 0;
        for (; n < Ri.page_height; ) {
          if (Ri.page_height - n < e) {
            Ri.arrangements.push([0, Ri.page_height - e]);
            break;
          }
          Ri.arrangements.push([0, n]), (n += t);
        }
        (Ri.num_arrangements = Ri.arrangements.length), Ii();
      },
      proceedCapture: function () {
        window.clearTimeout(Ri.clean_up_timeout), Ii();
      },
      onKeyDown: function (e) {
        !Pi.isEnabled() || ("Escape" !== e.key && "Esc" !== e.key) || Pi.exit();
      },
      startSelectedAreaCapture: Pi.startSelection,
    };
    const Wi = { href: document.location.href, initialized: !1 };
    (function () {
      let e = !0;
      const t = window.location.href;
      for (const n of i)
        if (t.startsWith(n)) {
          e = !1;
          break;
        }
      return e;
    })() &&
      (chrome.runtime.onMessage.addListener((e, t, n) => {
        if ("initialize" === e.action) {
          if (
            Wi.initialized ||
            (window !== window.parent &&
              e.settings &&
              !e.settings.inspector.inject_iframes)
          )
            return;
          (Wi.initialized = !0),
            ht.set(e.settings),
            Or.initialize(),
            $e.createCopyModal(),
            (function () {
              document
                .querySelector("html")
                .addEventListener("mousemove", (e) => {
                  var t, n;
                  (t = e.pageX),
                    (n = e.pageY),
                    (u.mx = t),
                    (u.my = n),
                    Or.update(e.target);
                }),
                document.addEventListener("keydown", (e) => {
                  Or.onKeyDown(e), Kr.onKeyDown(e), qi.onKeyDown(e);
                });
              const e = document.querySelector("body"),
                t = new MutationObserver((e) => {
                  e.forEach((e) => {
                    Wi.href !== document.location.href &&
                      ((Wi.href = document.location.href), Or.refresh());
                  });
                });
              t.observe(e, { childList: !0, subtree: !0 }),
                window === window.parent &&
                  window.addEventListener("unload", function (e) {
                    r("manager.disable", {});
                  }),
                chrome.runtime.onMessage.addListener((e, t, n) => {
                  switch (e.action) {
                    case "inspect.enable":
                      Or.enable();
                      break;
                    case "inspect.disable":
                      Or.disable();
                      break;
                    case "inspect.addStyles":
                      Or.addStyles(e.text);
                      break;
                    case "colorEyedropper.enable":
                      window === window.top && Kr.enable();
                      break;
                    case "colorEyedropper.disable":
                      window === window.top && Kr.disable();
                      break;
                    case "colorEyedropper.setScreenshot":
                      window === window.top && Kr.setScreenshot(e.dataURI);
                      break;
                    case "assets.get":
                      window === window.top && ti.get();
                      break;
                    case "debug.getMetaTags":
                      window === window.top && hi.getMetaTags();
                      break;
                    case "debug.getLinks":
                      window === window.top && hi.getLinks();
                      break;
                    case "debug.getHSE":
                      window === window.top && hi.getHSE();
                      break;
                    case "debug.getTextNodes":
                      window === window.top && hi.getTextNodes();
                      break;
                    case "debug.showSpellMistakes":
                      window === window.top && hi.showSpellMistakes(e.mistakes);
                      break;
                    case "screenshot.prepare":
                      window === window.top && qi.prepare(e.remove_scroll);
                      break;
                    case "screenshot.prepareFullPage":
                      window === window.top && qi.prepareFullPage();
                      break;
                    case "screenshot.proceedCapture":
                      window === window.top && qi.proceedCapture();
                      break;
                    case "screenshot.reset":
                      window === window.top && qi.reset();
                      break;
                    case "screenshot.startSelectedAreaCapture":
                      qi.startSelectedAreaCapture();
                      break;
                    case "settings.set":
                      ht.set(e.settings);
                  }
                }),
                document.querySelector("head").appendChild(
                  (function () {
                    const e = document.createElement("link");
                    return (
                      e.setAttribute("rel", "stylesheet"),
                      e.setAttribute("type", "text/css"),
                      e.setAttribute(
                        "href",
                        chrome.extension.getURL("css/fonts.css")
                      ),
                      e
                    );
                  })()
                );
            })();
        }
      }),
      r("manager.setEnabled", { is_frame: window !== window.parent }, null));
  },
]);

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
    n((n.s = 32));
})([
  function (e, t, n) {
    "use strict";
    var r = n(2),
      o = Object.prototype.toString;
    function i(e) {
      return "[object Array]" === o.call(e);
    }
    function s(e) {
      return void 0 === e;
    }
    function a(e) {
      return null !== e && "object" == typeof e;
    }
    function l(e) {
      if ("[object Object]" !== o.call(e)) return !1;
      var t = Object.getPrototypeOf(e);
      return null === t || t === Object.prototype;
    }
    function c(e) {
      return "[object Function]" === o.call(e);
    }
    function u(e, t) {
      if (null != e)
        if (("object" != typeof e && (e = [e]), i(e)))
          for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
        else
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.call(null, e[o], o, e);
    }
    e.exports = {
      isArray: i,
      isArrayBuffer: function (e) {
        return "[object ArrayBuffer]" === o.call(e);
      },
      isBuffer: function (e) {
        return (
          null !== e &&
          !s(e) &&
          null !== e.constructor &&
          !s(e.constructor) &&
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
      isObject: a,
      isPlainObject: l,
      isUndefined: s,
      isDate: function (e) {
        return "[object Date]" === o.call(e);
      },
      isFile: function (e) {
        return "[object File]" === o.call(e);
      },
      isBlob: function (e) {
        return "[object Blob]" === o.call(e);
      },
      isFunction: c,
      isStream: function (e) {
        return a(e) && c(e.pipe);
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
            : i(n)
            ? (t[r] = n.slice())
            : (t[r] = n);
        }
        for (var r = 0, o = arguments.length; r < o; r++) u(arguments[r], n);
        return t;
      },
      extend: function (e, t, n) {
        return (
          u(t, function (t, o) {
            e[o] = n && "function" == typeof t ? r(t, n) : t;
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
    "use strict";
    (function (t) {
      var r = n(0),
        o = n(19),
        i = n(4),
        s = { "Content-Type": "application/x-www-form-urlencoded" };
      function a(e, t) {
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
              (l = n(5)),
            l),
          transformRequest: [
            function (e, t) {
              return (
                o(t, "Accept"),
                o(t, "Content-Type"),
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
                  ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : r.isObject(e) ||
                    (t && "application/json" === t["Content-Type"])
                  ? (a(t, "application/json"),
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
                o = t && t.forcedJSONParsing,
                s = !n && "json" === this.responseType;
              if (s || (o && r.isString(e) && e.length))
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (s) {
                    if ("SyntaxError" === e.name)
                      throw i(e, this, "E_JSON_PARSE");
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
          c.headers[e] = r.merge(s);
        }),
        (e.exports = c);
    }.call(this, n(18)));
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
    function o(e) {
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
      var i;
      if (n) i = n(t);
      else if (r.isURLSearchParams(t)) i = t.toString();
      else {
        var s = [];
        r.forEach(t, function (e, t) {
          null != e &&
            (r.isArray(e) ? (t += "[]") : (e = [e]),
            r.forEach(e, function (e) {
              r.isDate(e)
                ? (e = e.toISOString())
                : r.isObject(e) && (e = JSON.stringify(e)),
                s.push(o(t) + "=" + o(e));
            }));
        }),
          (i = s.join("&"));
      }
      if (i) {
        var a = e.indexOf("#");
        -1 !== a && (e = e.slice(0, a)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
      }
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r, o) {
      return (
        (e.config = t),
        n && (e.code = n),
        (e.request = r),
        (e.response = o),
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
      o = n(20),
      i = n(21),
      s = n(3),
      a = n(22),
      l = n(25),
      c = n(26),
      u = n(6);
    e.exports = function (e) {
      return new Promise(function (t, n) {
        var d = e.data,
          h = e.headers,
          p = e.responseType;
        r.isFormData(d) && delete h["Content-Type"];
        var f = new XMLHttpRequest();
        if (e.auth) {
          var g = e.auth.username || "",
            v = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          h.Authorization = "Basic " + btoa(g + ":" + v);
        }
        var m = a(e.baseURL, e.url);
        function y() {
          if (f) {
            var r =
                "getAllResponseHeaders" in f
                  ? l(f.getAllResponseHeaders())
                  : null,
              i = {
                data:
                  p && "text" !== p && "json" !== p
                    ? f.response
                    : f.responseText,
                status: f.status,
                statusText: f.statusText,
                headers: r,
                config: e,
                request: f,
              };
            o(t, n, i), (f = null);
          }
        }
        if (
          (f.open(
            e.method.toUpperCase(),
            s(m, e.params, e.paramsSerializer),
            !0
          ),
          (f.timeout = e.timeout),
          "onloadend" in f
            ? (f.onloadend = y)
            : (f.onreadystatechange = function () {
                f &&
                  4 === f.readyState &&
                  (0 !== f.status ||
                    (f.responseURL && 0 === f.responseURL.indexOf("file:"))) &&
                  setTimeout(y);
              }),
          (f.onabort = function () {
            f && (n(u("Request aborted", e, "ECONNABORTED", f)), (f = null));
          }),
          (f.onerror = function () {
            n(u("Network Error", e, null, f)), (f = null);
          }),
          (f.ontimeout = function () {
            var t = "timeout of " + e.timeout + "ms exceeded";
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              n(
                u(
                  t,
                  e,
                  e.transitional && e.transitional.clarifyTimeoutError
                    ? "ETIMEDOUT"
                    : "ECONNABORTED",
                  f
                )
              ),
              (f = null);
          }),
          r.isStandardBrowserEnv())
        ) {
          var w =
            (e.withCredentials || c(m)) && e.xsrfCookieName
              ? i.read(e.xsrfCookieName)
              : void 0;
          w && (h[e.xsrfHeaderName] = w);
        }
        "setRequestHeader" in f &&
          r.forEach(h, function (e, t) {
            void 0 === d && "content-type" === t.toLowerCase()
              ? delete h[t]
              : f.setRequestHeader(t, e);
          }),
          r.isUndefined(e.withCredentials) ||
            (f.withCredentials = !!e.withCredentials),
          p && "json" !== p && (f.responseType = e.responseType),
          "function" == typeof e.onDownloadProgress &&
            f.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            f.upload &&
            f.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              f && (f.abort(), n(e), (f = null));
            }),
          d || (d = null),
          f.send(d);
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = function (e, t, n, o, i) {
      var s = new Error(e);
      return r(s, t, n, o, i);
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
        o = ["url", "method", "data"],
        i = ["headers", "auth", "proxy", "params"],
        s = [
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
        a = ["validateStatus"];
      function l(e, t) {
        return r.isPlainObject(e) && r.isPlainObject(t)
          ? r.merge(e, t)
          : r.isPlainObject(t)
          ? r.merge({}, t)
          : r.isArray(t)
          ? t.slice()
          : t;
      }
      function c(o) {
        r.isUndefined(t[o])
          ? r.isUndefined(e[o]) || (n[o] = l(void 0, e[o]))
          : (n[o] = l(e[o], t[o]));
      }
      r.forEach(o, function (e) {
        r.isUndefined(t[e]) || (n[e] = l(void 0, t[e]));
      }),
        r.forEach(i, c),
        r.forEach(s, function (o) {
          r.isUndefined(t[o])
            ? r.isUndefined(e[o]) || (n[o] = l(void 0, e[o]))
            : (n[o] = l(void 0, t[o]));
        }),
        r.forEach(a, function (r) {
          r in t ? (n[r] = l(e[r], t[r])) : r in e && (n[r] = l(void 0, e[r]));
        });
      var u = o.concat(i).concat(s).concat(a),
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
  function (e, t, n) {
    var r = n(12);
    function o(e, t, n) {
      Array.isArray(e) ? e.push(t) : (e[n] = t);
    }
    e.exports = function (e) {
      var t,
        n,
        i,
        s = [];
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
        (function n(a, l) {
          var c, u, d;
          for (
            u = i ? i[l] : l,
              Array.isArray(e[u]) ||
                (void 0 === e[u] ? (e[u] = []) : (e[u] = [e[u]])),
              c = 0;
            c < e[u].length;
            c++
          )
            (h = a),
              o((d = Array.isArray(h) ? [].concat(h) : r(h)), e[u][c], u),
              l >= t ? s.push(d) : n(d, l + 1);
          var h;
        })(n, 0),
        s
      );
    };
  },
  function (e, t, n) {
    e.exports = n(13);
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
    var r = n(0),
      o = n(2),
      i = n(14),
      s = n(8);
    function a(e) {
      var t = new i(e),
        n = o(i.prototype.request, t);
      return r.extend(n, i.prototype, t), r.extend(n, t), n;
    }
    var l = a(n(1));
    (l.Axios = i),
      (l.create = function (e) {
        return a(s(l.defaults, e));
      }),
      (l.Cancel = n(9)),
      (l.CancelToken = n(29)),
      (l.isCancel = n(7)),
      (l.all = function (e) {
        return Promise.all(e);
      }),
      (l.spread = n(30)),
      (l.isAxiosError = n(31)),
      (e.exports = l),
      (e.exports.default = l);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(3),
      i = n(15),
      s = n(16),
      a = n(8),
      l = n(27),
      c = l.validators;
    function u(e) {
      (this.defaults = e),
        (this.interceptors = { request: new i(), response: new i() });
    }
    (u.prototype.request = function (e) {
      "string" == typeof e
        ? ((e = arguments[1] || {}).url = arguments[0])
        : (e = e || {}),
        (e = a(this.defaults, e)).method
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
      var o,
        i = [];
      if (
        (this.interceptors.response.forEach(function (e) {
          i.push(e.fulfilled, e.rejected);
        }),
        !r)
      ) {
        var u = [s, void 0];
        for (
          Array.prototype.unshift.apply(u, n),
            u = u.concat(i),
            o = Promise.resolve(e);
          u.length;

        )
          o = o.then(u.shift(), u.shift());
        return o;
      }
      for (var d = e; n.length; ) {
        var h = n.shift(),
          p = n.shift();
        try {
          d = h(d);
        } catch (e) {
          p(e);
          break;
        }
      }
      try {
        o = s(d);
      } catch (e) {
        return Promise.reject(e);
      }
      for (; i.length; ) o = o.then(i.shift(), i.shift());
      return o;
    }),
      (u.prototype.getUri = function (e) {
        return (
          (e = a(this.defaults, e)),
          o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        );
      }),
      r.forEach(["delete", "get", "head", "options"], function (e) {
        u.prototype[e] = function (t, n) {
          return this.request(
            a(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
      r.forEach(["post", "put", "patch"], function (e) {
        u.prototype[e] = function (t, n, r) {
          return this.request(a(r || {}, { method: e, url: t, data: n }));
        };
      }),
      (e.exports = u);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    function o() {
      this.handlers = [];
    }
    (o.prototype.use = function (e, t, n) {
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
      (o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (o.prototype.forEach = function (e) {
        r.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(17),
      i = n(7),
      s = n(1);
    function a(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function (e) {
      return (
        a(e),
        (e.headers = e.headers || {}),
        (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
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
        (e.adapter || s.adapter)(e).then(
          function (t) {
            return (
              a(e),
              (t.data = o.call(e, t.data, t.headers, e.transformResponse)),
              t
            );
          },
          function (t) {
            return (
              i(t) ||
                (a(e),
                t &&
                  t.response &&
                  (t.response.data = o.call(
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
      o = n(1);
    e.exports = function (e, t, n) {
      var i = this || o;
      return (
        r.forEach(n, function (n) {
          e = n.call(i, e, t);
        }),
        e
      );
    };
  },
  function (e, t) {
    var n,
      r,
      o = (e.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function s() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === i || !n) && setTimeout)
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
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        n = i;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        r = s;
      }
    })();
    var l,
      c = [],
      u = !1,
      d = -1;
    function h() {
      u &&
        l &&
        ((u = !1), l.length ? (c = l.concat(c)) : (d = -1), c.length && p());
    }
    function p() {
      if (!u) {
        var e = a(h);
        u = !0;
        for (var t = c.length; t; ) {
          for (l = c, c = []; ++d < t; ) l && l[d].run();
          (d = -1), (t = c.length);
        }
        (l = null),
          (u = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === s || !r) && clearTimeout)
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
    function f(e, t) {
      (this.fun = e), (this.array = t);
    }
    function g() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new f(e, t)), 1 !== c.length || u || a(p);
    }),
      (f.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = g),
      (o.addListener = g),
      (o.once = g),
      (o.off = g),
      (o.removeListener = g),
      (o.removeAllListeners = g),
      (o.emit = g),
      (o.prependListener = g),
      (o.prependOnceListener = g),
      (o.listeners = function (e) {
        return [];
      }),
      (o.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
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
    var r = n(6);
    e.exports = function (e, t, n) {
      var o = n.config.validateStatus;
      n.status && o && !o(n.status)
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
          write: function (e, t, n, o, i, s) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(t)),
              r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
              r.isString(o) && a.push("path=" + o),
              r.isString(i) && a.push("domain=" + i),
              !0 === s && a.push("secure"),
              (document.cookie = a.join("; "));
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
    var r = n(23),
      o = n(24);
    e.exports = function (e, t) {
      return e && !r(t) ? o(e, t) : t;
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
      o = [
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
        i,
        s = {};
      return e
        ? (r.forEach(e.split("\n"), function (e) {
            if (
              ((i = e.indexOf(":")),
              (t = r.trim(e.substr(0, i)).toLowerCase()),
              (n = r.trim(e.substr(i + 1))),
              t)
            ) {
              if (s[t] && o.indexOf(t) >= 0) return;
              s[t] =
                "set-cookie" === t
                  ? (s[t] ? s[t] : []).concat([n])
                  : s[t]
                  ? s[t] + ", " + n
                  : n;
            }
          }),
          s)
        : s;
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
          function o(e) {
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
            (e = o(window.location.href)),
            function (t) {
              var n = r.isString(t) ? o(t) : t;
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
    var r = n(28),
      o = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(
      function (e, t) {
        o[e] = function (n) {
          return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
        };
      }
    );
    var i = {},
      s = r.version.split(".");
    function a(e, t) {
      for (var n = t ? t.split(".") : s, r = e.split("."), o = 0; o < 3; o++) {
        if (n[o] > r[o]) return !0;
        if (n[o] < r[o]) return !1;
      }
      return !1;
    }
    (o.transitional = function (e, t, n) {
      var o = t && a(t);
      function s(e, t) {
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
      return function (n, r, a) {
        if (!1 === e) throw new Error(s(r, " has been removed in " + t));
        return (
          o &&
            !i[r] &&
            ((i[r] = !0),
            console.warn(
              s(
                r,
                " has been deprecated since v" +
                  t +
                  " and will be removed in the near future"
              )
            )),
          !e || e(n, r, a)
        );
      };
    }),
      (e.exports = {
        isOlderVersion: a,
        assertOptions: function (e, t, n) {
          if ("object" != typeof e)
            throw new TypeError("options must be an object");
          for (var r = Object.keys(e), o = r.length; o-- > 0; ) {
            var i = r[o],
              s = t[i];
            if (s) {
              var a = e[i],
                l = void 0 === a || s(a, i, e);
              if (!0 !== l)
                throw new TypeError("option " + i + " must be " + l);
            } else if (!0 !== n) throw Error("Unknown option " + i);
          }
        },
        validators: o,
      });
  },
  function (e) {
    e.exports = JSON.parse(
      '{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}'
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(9);
    function o(e) {
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
    (o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (o.source = function () {
        var e;
        return {
          token: new o(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (e.exports = o);
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
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r,
      o,
      i =
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
          "object" === (void 0 === e ? "undefined" : i(e)) &&
          1 === e.nodeType &&
          "object" === i(e.style) &&
          "object" === i(e.ownerDocument)
        );
      };
    !(function (e) {
      (e.NONE = "none"), (e.DESCENDANT = "descendant"), (e.CHILD = "child");
    })(r || (r = {})),
      (function (e) {
        (e.id = "id"),
          (e.class = "class"),
          (e.tag = "tag"),
          (e.attribute = "attribute"),
          (e.nthchild = "nthchild"),
          (e.nthoftype = "nthoftype");
      })(o || (o = {}));
    function a(e = "unknown problem", ...t) {
      console.warn("CssSelectorGenerator: " + e, ...t);
    }
    const l = {
      selectors: [o.id, o.class, o.tag, o.attribute],
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
            return (t = o), (n = e), Object.values(t).includes(n);
            var t, n;
          })
        : [];
    }
    function u(e) {
      return e instanceof RegExp;
    }
    function d(e) {
      return ["string", "function"].includes(typeof e) || u(e);
    }
    function h(e) {
      return Array.isArray(e) ? e.filter(d) : [];
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
    function f(e, t) {
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
    function g(e) {
      return "number" == typeof e ? e : Number.POSITIVE_INFINITY;
    }
    function v(e = []) {
      const [t = [], ...n] = e;
      return 0 === n.length
        ? t
        : n.reduce((e, t) => e.filter((e) => t.includes(e)), t);
    }
    function m(e) {
      return [].concat(...e);
    }
    function y(e) {
      const t = e.map((e) => {
        if (u(e)) return (t) => e.test(t);
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
    function w(e, t, n) {
      const r = Array.from(f(n, e[0]).querySelectorAll(t));
      return r.length === e.length && e.every((e) => r.includes(e));
    }
    function x(e, t) {
      t =
        null != t
          ? t
          : (function (e) {
              return e.ownerDocument.querySelector(":root");
            })(e);
      const n = [];
      let r = e;
      for (; s(r) && r !== t; ) n.push(r), (r = r.parentElement);
      return n;
    }
    function k(e, t) {
      return v(e.map((e) => x(e, t)));
    }
    const b = {
        [r.NONE]: { type: r.NONE, value: "" },
        [r.DESCENDANT]: { type: r.DESCENDANT, value: " > " },
        [r.CHILD]: { type: r.CHILD, value: " " },
      },
      C = new RegExp(["^$", "\\s", "^\\d"].join("|")),
      S = new RegExp(["^$", "^\\d"].join("|")),
      j = [o.nthoftype, o.tag, o.id, o.class, o.attribute, o.nthchild];
    var E = n(10),
      T = n.n(E);
    const L = y(["class", "id", "ng-*"]);
    function M({ nodeName: e }) {
      return `[${e}]`;
    }
    function N({ nodeName: e, nodeValue: t }) {
      return `[${e}='${_(t)}']`;
    }
    function O({ nodeName: e }) {
      return !L(e);
    }
    function A(e) {
      const t = Array.from(e.attributes).filter(O);
      return [...t.map(M), ...t.map(N)];
    }
    function B(e) {
      return (e.getAttribute("class") || "")
        .trim()
        .split(/\s+/)
        .filter((e) => !S.test(e))
        .map((e) => "." + _(e));
    }
    function H(e) {
      const t = e.getAttribute("id") || "",
        n = "#" + _(t),
        r = e.getRootNode({ composed: !1 });
      return !C.test(t) && w([e], n, r) ? [n] : [];
    }
    function z(e) {
      const t = e.parentNode;
      if (t) {
        const n = Array.from(t.childNodes).filter(s).indexOf(e);
        if (n > -1) return [`:nth-child(${n + 1})`];
      }
      return [];
    }
    function P(e) {
      return [_(e.tagName.toLowerCase())];
    }
    function R(e) {
      const t = [...new Set(m(e.map(P)))];
      return 0 === t.length || t.length > 1 ? [] : [t[0]];
    }
    function I(e) {
      const t = R([e])[0],
        n = e.parentElement;
      if (n) {
        const r = Array.from(n.children)
          .filter((e) => e.tagName.toLowerCase() === t)
          .indexOf(e);
        if (r > -1) return [`${t}:nth-of-type(${r + 1})`];
      }
      return [];
    }
    function V(e = [], { maxResults: t = Number.POSITIVE_INFINITY } = {}) {
      const n = [];
      let r = 0,
        o = U(1);
      for (; o.length <= e.length && r < t; )
        (r += 1), n.push(o.map((t) => e[t])), (o = D(o, e.length - 1));
      return n;
    }
    function D(e = [], t = 0) {
      const n = e.length;
      if (0 === n) return [];
      const r = [...e];
      r[n - 1] += 1;
      for (let e = n - 1; e >= 0; e--)
        if (r[e] > t) {
          if (0 === e) return U(n + 1);
          r[e - 1]++, (r[e] = r[e - 1] + 1);
        }
      return r[n - 1] > t ? U(n + 1) : r;
    }
    function U(e = 1) {
      return Array.from(Array(e).keys());
    }
    const q = ":".charCodeAt(0).toString(16).toUpperCase(),
      $ = /[ !"#$%&'()\[\]{|}<>*+,./;=?@^`~\\]/;
    function _(e = "") {
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
                  ? `\\${q} `
                  : $.test(e)
                  ? "\\" + e
                  : escape(e).replace(/%/g, "\\")
              )
              .join("");
          })(e);
    }
    const F = {
        tag: R,
        id: function (e) {
          return 0 === e.length || e.length > 1 ? [] : H(e[0]);
        },
        class: function (e) {
          return v(e.map(B));
        },
        attribute: function (e) {
          return v(e.map(A));
        },
        nthchild: function (e) {
          return v(e.map(z));
        },
        nthoftype: function (e) {
          return v(e.map(I));
        },
      },
      W = { tag: P, id: H, class: B, attribute: A, nthchild: z, nthoftype: I };
    function J(e, t, n) {
      const r = m(
        (function (e, t) {
          return (function (e) {
            const {
                selectors: t,
                combineBetweenSelectors: n,
                includeTag: r,
                maxCandidates: o,
              } = e,
              i = n ? V(t, { maxResults: o }) : t.map((e) => [e]);
            return r ? i.map(G) : i;
          })(t)
            .map((t) =>
              (function (e, t) {
                const n = {};
                e.forEach((e) => {
                  const r = t[e];
                  r.length > 0 && (n[e] = r);
                });
                return T()(n).map(X);
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
              s = y(n),
              a = y(r);
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
                    return (null !== (n = F[t]) && void 0 !== n ? n : () => [])(
                      e
                    );
                  })(e, n),
                  s,
                  a
                ),
                a
              );
              return (
                (t[n] = o ? V(r, { maxResults: i }) : r.map((e) => [e])), t
              );
            }, {});
          })(e, n),
          n
        )
      );
      return [...new Set(r)];
    }
    function G(e) {
      return e.includes(o.tag) || e.includes(o.nthoftype)
        ? [...e]
        : [...e, o.tag];
    }
    function X(e = {}) {
      const t = [...j];
      return (
        e[o.tag] && e[o.nthoftype] && t.splice(t.indexOf(o.tag), 1),
        t
          .map((t) => {
            return (r = e)[(n = t)] ? r[n].join("") : "";
            var n, r;
          })
          .join("")
      );
    }
    function Y(e, t, n = "", r) {
      const o = (function (e, t) {
        return "" === t
          ? e
          : (function (e, t) {
              return [
                ...e.map((e) => t + " " + e),
                ...e.map((e) => t + " > " + e),
              ];
            })(e, t);
      })(J(e, r.root, r), n);
      for (const t of o) if (w(e, t, r.root)) return t;
      return null;
    }
    function K(e) {
      return { value: e, include: !1 };
    }
    function Z(e, t, n = r.NONE) {
      const o = {};
      return (
        t.forEach((t) => {
          Reflect.set(
            o,
            t,
            (function (e, t) {
              return W[t](e);
            })(e, t).map(K)
          );
        }),
        { element: e, operator: b[n], selectors: o }
      );
    }
    function Q({ selectors: e, operator: t }) {
      let n = [...j];
      e[o.tag] && e[o.nthoftype] && (n = n.filter((e) => e !== o.tag));
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
    function ee(e) {
      return [
        ":root",
        ...x(e)
          .reverse()
          .map((e) => {
            const t = Z(e, [o.nthchild], r.DESCENDANT);
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
      const r = (function (e) {
          const t = (Array.isArray(e) ? e : [e]).filter(s);
          return [...new Set(t)];
        })(t),
        o = (function (e, t = {}) {
          const n = Object.assign(Object.assign({}, l), t);
          return {
            selectors: c(n.selectors),
            whitelist: h(n.whitelist),
            blacklist: h(n.blacklist),
            root: f(n.root, e),
            combineWithinSelector: !!n.combineWithinSelector,
            combineBetweenSelectors: !!n.combineBetweenSelectors,
            includeTag: !!n.includeTag,
            maxCombinations: g(n.maxCombinations),
            maxCandidates: g(n.maxCandidates),
          };
        })(r[0], n);
      let i = "",
        a = o.root;
      function u() {
        return (function (e, t, n = "", r) {
          if (0 === e.length) return null;
          const o = [e.length > 1 ? e : [], ...k(e, t).map((e) => [e])];
          for (const e of o) {
            const t = Y(e, 0, n, r);
            if (t) return { foundElements: e, selector: t };
          }
          return null;
        })(r, a, i, o);
      }
      let d = u();
      for (; d; ) {
        const { foundElements: e, selector: t } = d;
        if (w(r, t, o.root)) return t;
        (a = e[0]), (i = t), (d = u());
      }
      return r.length > 1
        ? r.map((t) => e(t, o)).join(", ")
        : (function (e) {
            return e.map(ee).join(", ");
          })(r);
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
        return te(e, { root: document.body, blacklist: [/(^\[|\]$)/] });
      },
    };
    var re = function (e, t) {
      (this.tabs = e.querySelectorAll(".tab")),
        (this.currentTab = ""),
        (this.roots = {});
      for (const e of this.tabs) {
        const n = ne.create(
          `<div class='tab-container' id='${e.id}_body' style='display: none;'></div>`
        );
        (this.roots[e.id] = n),
          (n.initialize = (e) => {}),
          t.appendChild(n),
          e.addEventListener("click", () => {
            this.toggleTab(e.id);
          });
      }
      this.toggleTab = (e) => {
        for (const t of this.tabs) {
          const n = this.roots[t.id];
          e === t.id
            ? (t.initialized || (n.initialize(n), (t.initialized = !0)),
              (this.currentTab = t.id),
              t.classList.add("active"),
              (n.style.display = "block"))
            : (t.classList.remove("active"), (n.style.display = "none"));
        }
      };
    };
    var oe = (e, t, n) => {
      t || (t = {}),
        (t.action = e),
        n ? chrome.tabs.sendMessage(n, t) : chrome.runtime.sendMessage(t);
    };
    function ie(e) {
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
    function se(e, t, n) {
      (this.data = t),
        (this.element = e),
        (this.callback = n),
        (e.value = t),
        e.addEventListener("change", this, !1);
    }
    (se.prototype.handleEvent = function (e) {
      switch (e.type) {
        case "change":
          this.change(this.element.value);
      }
    }),
      (se.prototype.change = function (e) {
        (this.data = e), this.callback();
      });
    var ae = {
      play: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',
      pause:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>',
      eye: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
      chevronDown:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>',
      chevronRight:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
      chevronLeft:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>',
      hash: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>',
      grid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
      x: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
      arrowVertical:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">\n\t\t<path d="M40.9,51.2l-6.4,5.3V7.7l6.4,5.3c0.3,0.3,1.1,0.5,1.6,0.5c0.8,0,1.6-0.3,2.1-1.1c1.1-1.1,0.8-2.9-0.3-3.7l-8.8-7.5\n\t\tc-2.1-1.6-5.1-1.6-7.2,0l-8.8,7.5c-1.1,1.1-1.3,2.7-0.3,3.7s2.7,1.3,3.7,0.3l6.4-5.3v48.8L23.1,51c-1.1-1.1-2.9-0.8-3.7,0.3\n\t\tc-0.8,1.1-0.8,2.9,0.3,3.7l8.8,7.5c0.8,1.1,2.1,1.6,3.5,1.6c1.4,0,2.7-0.5,3.7-1.3l8.8-7.5c1.1-1.1,1.3-2.7,0.3-3.7\n\t\tC43.6,50.4,42,50.4,40.9,51.2z"/>\n\t</svg>',
      arrowHorizontal:
        '<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n\t\t<path d="M62.6,28.3l-7.5-8.8c-1.1-1.1-2.7-1.3-3.7-0.3s-1.3,2.7-0.3,3.7l5.3,6.4H7.3l5.3-6.4c1.1-1.1,0.8-2.9-0.3-3.7\n\t\tc-1.1-1.1-2.9-0.8-3.7,0.3l-7.5,8.8c-1.6,2.1-1.6,5.1,0,7.2l7.5,8.8c0.3,0.8,1.1,1.1,1.9,1.1c0.5,0,1.3-0.3,1.6-0.5\n\t\tc1.1-1.1,1.3-2.7,0.3-3.7l-5.3-6.4h49.1l-5.3,6.4c-1.1,1.1-0.8,2.9,0.3,3.7c0.5,0.5,1.1,0.5,1.6,0.5c0.8,0,1.6-0.3,2.1-1.1l7.5-8.8\n\t\tC64.5,33.7,64.5,30.5,62.6,28.3z"/>\n\t</svg>',
      colorPalette:
        '<svg viewBox="0 0 512 512"><path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>',
      font: '<svg viewBox="0 0 448 512"><path fill="currentColor" d="M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z"></path></svg>',
      copy: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9"  width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
      rotate:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>',
      clipboard:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>',
      download:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
      downloadCloud:
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg>',
      edit: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>',
      trash:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>',
      minus:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
      minusSquare:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line></svg>',
      maximize:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>',
      maximize_2:
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>',
      search:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
      save: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>',
      check:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
      codepen:
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>',
      info: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
      command:
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>',
      servers:
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>',
      externalLink:
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
      justify:
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>',
      eyeOff:
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>',
      add: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
      phone:
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"  stroke-linejoin="round" class="css-i6dzq1"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
      sliders:
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>',
      cpu: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6"  height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>',
      alignLeft:
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>',
      code: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
      bold: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path></svg>',
      drop: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>',
      bookmark:
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>',
      file: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
      layout:
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
      box: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
      browser:
        '<svg fill="currentColor" width="24" height="24" viewBox="0 0 64 64"><g><path d="M58,3.2H6C3.4,3.2,1.3,5.4,1.3,8v48c0,2.6,2.1,4.8,4.8,4.8h52c2.6,0,4.8-2.1,4.8-4.8V8C62.8,5.4,60.6,3.2,58,3.2z M6,6.7\n   h52c0.7,0,1.3,0.6,1.3,1.3v8.2H4.8V8C4.8,7.3,5.3,6.7,6,6.7z M58,57.3H6c-0.7,0-1.3-0.6-1.3-1.3V19.7h54.5V56\n   C59.3,56.7,58.7,57.3,58,57.3z"/><path d="M40.4,25.5H23.6c-2.6,0-4.8,2.1-4.8,4.8v7.9c0,2.6,2.1,4.8,4.8,4.8h16.7c2.6,0,4.8-2.1,4.8-4.8v-7.9\n   C45.1,27.6,43,25.5,40.4,25.5z M41.6,38.2c0,0.7-0.6,1.3-1.3,1.3H23.6c-0.7,0-1.3-0.6-1.3-1.3v-7.9c0-0.7,0.6-1.3,1.3-1.3h16.7\n   c0.7,0,1.3,0.6,1.3,1.3V38.2z"/><path d="M39.9,48.4H24.1c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8h15.9c1,0,1.8-0.8,1.8-1.8S40.9,48.4,39.9,48.4z"/></g></svg>',
      select:
        '<svg fill="currentColor" width="24" height="24" viewBox="0 0 64 64">\n<g><path d="M53.2,52.4C53.2,52.4,53.1,52.4,53.2,52.4l7.2-4.3l-19.6-7.4c-0.4-0.2-0.8,0.2-0.6,0.6L47.5,61l4.2-7.2c0,0,0,0,0,0.1\n   l4.1,4.1c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L53.2,52.4z"/><rect x="35.5" y="46.2" width="4" height="2"/><rect x="20.6" y="46.2" width="7.5" height="2"/><rect x="9.2" y="46.2" width="4" height="2"/><path d="M4.6,44.4h-2v2.8c0,0.6,0.4,1,1,1h2.8v-2H4.6V44.4z"/><rect x="2.6" y="34.9" width="2" height="4"/><rect x="2.6" y="20" width="2" height="7.5"/><rect x="2.6" y="8.5" width="2" height="4"/><path d="M2.6,3v2.8h2V4h1.8V2H3.6C3.1,2,2.6,2.4,2.6,3z"/><rect x="11.9" y="2" width="4" height="2"/><rect x="23.4" y="2" width="7.5" height="2"/><rect x="38.3" y="2" width="4" height="2"/><path d="M46.8,5.8h2V3c0-0.6-0.4-1-1-1H45v2h1.8V5.8z"/><rect x="46.8" y="11.3" width="2" height="4"/><rect x="46.8" y="22.7" width="2" height="7.5"/><rect x="46.8" y="37.6" width="2" height="4"/></g></svg>',
      page: '<svg fill="currentColor" width="24" height="24" viewBox="0 0 64 64"><g><path d="M51.6,2H12.4c-2.8,0-5,2.2-5,5v50c0,2.8,2.2,5,5,5h39.2c2.8,0,5-2.2,5-5V7C56.6,4.2,54.3,2,51.6,2z M54.6,57\n   c0,1.7-1.3,3-3,3H12.4c-1.7,0-3-1.3-3-3V7c0-1.7,1.3-3,3-3h39.2c1.7,0,3,1.3,3,3V57z"/><path d="M46,9.8H34.6c-1.1,0-2,0.9-2,2v13.8c0,1.1,0.9,2,2,2H46c1.1,0,2-0.9,2-2V11.8C48,10.7,47.1,9.8,46,9.8z M34.6,25.6V11.8H46\n   l0,13.8H34.6z"/><path d="M17.2,13.6h7.6c0.6,0,1-0.4,1-1s-0.4-1-1-1h-7.6c-0.6,0-1,0.4-1,1S16.6,13.6,17.2,13.6z"/><path d="M17.2,26.7h7.6c0.6,0,1-0.4,1-1s-0.4-1-1-1h-7.6c-0.6,0-1,0.4-1,1S16.6,26.7,17.2,26.7z"/><path d="M47,37.9H17.2c-0.6,0-1,0.4-1,1s0.4,1,1,1H47c0.6,0,1-0.4,1-1S47.5,37.9,47,37.9z"/><path d="M47,51.1H17.2c-0.6,0-1,0.4-1,1s0.4,1,1,1H47c0.6,0,1-0.4,1-1S47.5,51.1,47,51.1z"/></g></svg>',
      layout2:
        '<svg fill="currentColor" width="24" height="24" viewBox="0 0 64 64"><path d="M56.8,1.4H7.1C4,1.4,1.4,3.9,1.4,7.1v49.6c0,3.2,2.6,5.8,5.8,5.8h49.6c3.2,0,5.8-2.6,5.8-5.8V7.1C62.5,3.9,60,1.4,56.8,1.4z\nM7.1,4.9h49.6c1.2,0,2.3,1,2.3,2.3V17H4.9V7.1C4.9,5.9,5.9,4.9,7.1,4.9z M20.6,20.5H59v17.6H20.6V20.5z M4.9,56.7V20.5h12.2V59H7.1\nC5.9,59,4.9,58,4.9,56.7z M56.8,59H20.6V41.6H59v15.2C59,58,58,59,56.8,59z"/>\n</svg>',
      camera:
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>',
    };
    let le = null,
      ce = null;
    var ue = {
      createCopyModal: function () {
        const e = document.createElement("hv-copy-modal"),
          t = e.attachShadow({ mode: "open" });
        (le = document.createElement("div")),
          (le.innerHTML = ae.clipboard + " <span>Copied</span>");
        const n = document.createElement("style");
        (n.innerHTML =
          "\n        div {\n            position: fixed;\n            z-index: 5000000000;\n            right: 16px;\n            bottom: -100%;\n            padding: 1rem;\n            display: flex;\n            align-items: center;\n            font-size: 24px;\n            color: #43a047;\n            background: rgb(25, 25, 31);\n            border-radius: 0.2rem;\n            font-weight: 700;\n            transform: scale(0);\n            transition: bottom 0.5s ease-in-out, transform 0.5s ease-in-out;\n        }\n\n        div svg {\n            margin-right: 1rem;\n        }\n\n        div.active {\n            bottom: 16px;\n            transform: scale(1);\n        }\n    "),
          t.appendChild(
            ne.create(
              `<link href="${chrome.extension.getURL(
                "css/global.css"
              )}" rel="stylesheet" type="text/css">`
            )
          ),
          t.appendChild(n),
          t.appendChild(le),
          document.body.appendChild(e);
      },
      createToast: function () {
        const e = document.createElement("hv-copy-modal"),
          t = e.attachShadow({ mode: "open" });
        (le = document.createElement("div")),
          (le.innerHTML = ae.clipboard + " <span>copied</span>");
        const n = document.createElement("style");
        (n.innerHTML =
          "\n        div {\n            position: fixed;\n            z-index: 500000000;\n            top: 100%;\n            left: 100%;\n            padding: 0.5rem 1rem;\n            display: flex;\n            align-items: center;\n            font-size: 20px;\n            color: white;\n            background: rgb(25, 25, 31);\n            border-radius: 0.2rem;\n            font-weight: 700;\n            transform: scale(0) translate(-50%, -50%);\n            transform-origin: top left;\n            opacity: 0;\n            transition: transform 0.2s ease-in-out;\n            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);\n        }\n\n        div svg {\n            width: 20px;\n            height: 20px;\n            margin-right: 0.5rem;\n        }\n\n        div.active {\n            left: 50%;\n            top: 50%;\n            opacity: 1;\n            transform: scale(1) translate(-50%, -50%);\n        }\n    "),
          t.appendChild(
            ne.create(
              `<link href="${chrome.extension.getURL(
                "css/global.css"
              )}" rel="stylesheet" type="text/css">`
            )
          ),
          t.appendChild(n),
          t.appendChild(le),
          document.body.appendChild(e);
      },
      show: function (e, t, n) {
        ce && (le.classList.remove("active"), clearTimeout(ce), (ce = null)),
          t
            ? (le.innerHTML = `${t} <span>${e}</span>`)
            : (le.querySelector("span").innerHTML = e),
          n && (le.style.background = n),
          le.classList.add("active"),
          (ce = setTimeout(() => le.classList.remove("active"), 2e3));
      },
    };
    var de = function (e, t, n) {
      (this.status = n),
        (this.title = e),
        (this.message = t),
        (this.element = ne.create(
          `\n        <div class="checkbox">\n            <div class="checkmark"></div>\n            <div class="check-info">\n                <span class="check-title">${
            this.title
          }</span>\n                ${
            t ? "<span class='check-message'>" + this.message + "</span>" : ""
          }\n            </div>\n        </div>\n    `
        )),
        this.element.addEventListener("click", () => {
          this.toggle(!this.status);
        }),
        (this.toggle = (e) => {
          (this.status = e),
            this.status
              ? (this.element.setAttribute("active", "true"),
                (this.element.querySelector(".checkmark").innerHTML = ae.check))
              : (this.element.setAttribute("active", "false"),
                (this.element.querySelector(".checkmark").innerHTML = ""));
        }),
        this.status && this.toggle(!0);
    };
    var he = function (e, t, n) {
      (this.value = e),
        (this.isLoader = n),
        (this.loading = !1),
        (this.element = ne.create(
          `\n        <button class="btn">\n            <div class="btn-val">\n                ${
            t || ""
          }    \n                <span>${e}</span>\n            </div>\n            ${
            n
              ? "<div class='loader'><div></div><div></div><div></div><div></div></div>"
              : ""
          }\n        </button>\n    `
        )),
        (this.onClick = () => {}),
        this.element.addEventListener("click", (e) => {
          this.loading ||
            (this.isLoader && this.setLoading(!0), this.onClick());
        }),
        (this.setLoading = (e) => {
          (this.loading = e),
            e
              ? ((this.element.querySelector(".btn-val").style.display =
                  "none"),
                (this.element.querySelector(".loader").style.display = "block"))
              : ((this.element.querySelector(".btn-val").style.display =
                  "flex"),
                (this.element.querySelector(".loader").style.display = "none"));
        });
    };
    function pe(e, t) {
      let n,
        r,
        o,
        i,
        s,
        a = 0,
        l = 0;
      for (a = 0; a < t.length; a += 1)
        if (((n = new RegExp(t[a].value, "i")), (o = n.test(e)), o)) {
          if (
            ((r = new RegExp(t[a].version + "[- /:;]([\\d._]+)", "i")),
            (i = e.match(r)),
            (s = ""),
            i && i[1] && (i = i[1]),
            i)
          )
            for (i = i.split(/[._]+/), l = 0; l < i.length; l += 1)
              s += 0 === l ? i[l] + "." : i[l];
          else s = "0";
          return { name: t[a].name, version: parseFloat(s) };
        }
      return { name: "unknown", version: 0 };
    }
    const fe = [
      navigator.platform,
      navigator.userAgent,
      navigator.appVersion,
      navigator.vendor,
      window.opera,
    ].join(" ");
    pe(fe, [
      { name: "Windows Phone", value: "Windows Phone", version: "OS" },
      { name: "Windows", value: "Win", version: "NT" },
      { name: "iPhone", value: "iPhone", version: "OS" },
      { name: "iPad", value: "iPad", version: "OS" },
      { name: "Kindle", value: "Silk", version: "Silk" },
      { name: "Android", value: "Android", version: "Android" },
      { name: "PlayBook", value: "PlayBook", version: "OS" },
      { name: "BlackBerry", value: "BlackBerry", version: "/" },
      { name: "Macintosh", value: "Mac", version: "OS X" },
      { name: "Linux", value: "Linux", version: "rv" },
      { name: "Palm", value: "Palm", version: "PalmOS" },
    ]);
    var ge = pe(fe, [
        { name: "Chrome", value: "Chrome", version: "Chrome" },
        { name: "Firefox", value: "Firefox", version: "Firefox" },
        { name: "Safari", value: "Safari", version: "Version" },
        { name: "Internet Explorer", value: "MSIE", version: "MSIE" },
        { name: "Opera", value: "Opera", version: "Opera" },
        { name: "BlackBerry", value: "CLDC", version: "CLDC" },
        { name: "Mozilla", value: "Mozilla", version: "Mozilla" },
      ]),
      ve = n(11),
      me = n.n(ve);
    var ye = function (e) {
      let t, n;
      (this.tabId = 0),
        (e.roots.links.initialize = (e) => {
          e.appendChild(ne.create('<h3 class="tab-title">Link Status</h3>'));
          const r = ne.create('<div class="container"></div>');
          (t = ne.create("<span class='message'>No links found!</span>")),
            (t.style.display = "none"),
            (n = ne.create("<ul class='scroll'></ul>")),
            (n.style.display = "none"),
            r.appendChild(t),
            r.appendChild(n),
            e.appendChild(r),
            oe("debug.getLinks", {}, this.tabId);
        });
      const r = async (e, t, n) => {
        try {
          const r = await me.a.get(e);
          (n.style.display = "none"),
            (t.style.display = "block"),
            (t.innerHTML = r.status),
            200 === r.status
              ? (t.style.color = "#43a047")
              : (t.style.color = "#ffb300");
        } catch (e) {
          e.response &&
            ((n.style.display = "none"),
            (t.style.display = "block"),
            (t.style.color = "#e53935"),
            (t.innerHTML = e.response.status));
        }
      };
      this.setData = (e) => {
        if (e.length) {
          n.style.display = "block";
          for (const t of e) {
            const e = ne.create("<li></li>"),
              o = ne.create('<div class="status-container"></div>'),
              i = ne.create('<div class="loader"></div>'),
              s = ne.create("<span>200</span>");
            o.appendChild(i), o.appendChild(s);
            const a = ne.create(`<div class="url"><span>${t}</span></di>`);
            r(t, s, i), e.appendChild(o), e.appendChild(a), n.appendChild(e);
          }
        } else t.style.display = "block";
      };
    };
    var we = function (e) {
      (this.tabId = 0),
        (this.message = null),
        (this.table = null),
        (e.roots.hse.initialize = (e) => {
          e.appendChild(
            ne.create('<h3 class="tab-title">HTML Semantic Elements</h3>')
          );
          const t = ne.create('<div class="container"></div>');
          (this.message = ne.create(
            "<span class='message'>Unable to extract information!</span>"
          )),
            (this.message.style.display = "none"),
            (this.scroll = ne.create('<div class="scroll"></div>')),
            (this.table = ne.create('<div class="table"></div>')),
            (this.table.style.display = "none"),
            this.scroll.appendChild(this.table),
            t.appendChild(this.message),
            t.appendChild(this.scroll),
            e.appendChild(t),
            oe("debug.getHSE", {}, this.tabId);
        }),
        (this.setData = (e) => {
          if (Object.entries(e).length) {
            this.table.style.display = "block";
            for (const [t, n] of Object.entries(e)) {
              const e = ne.create('<div class="tr"></div>');
              e.appendChild(ne.create(`<div class="td">&lt;${t}&gt;</div>`));
              const r = ne.create(n ? ae.check : ae.x);
              n ? r.classList.add("present") : r.classList.add("missing");
              const o = ne.create('<div class="td"></div>');
              o.appendChild(r),
                o.appendChild(
                  ne.create(`<span>${n ? "Set" : "Not Set"}</span>`)
                ),
                e.appendChild(o),
                this.table.appendChild(e);
            }
          } else this.message.style.display = "block";
        });
    };
    const xe = { tabId: 0, tabUrl: "", metaTags: [], textNodes: {} },
      ke = new re(
        document.querySelector(".tabs"),
        document.querySelector(".tab-root")
      );
    let be;
    ue.createToast(),
      "Firefox" !== ge.name && "serviceWorker" in navigator
        ? setTimeout(() => {
            navigator.serviceWorker
              .register("sw.debug.js")
              .then((e) => {})
              .catch((e) => {
                console.log(e);
              });
          }, 0)
        : (document.getElementById("spellcheck").style.display = "none"),
      (ke.roots.clear_cache.initialize = (e) => {
        e.appendChild(ne.create('<h3 class="tab-title">Clear Cache</h3>'));
        const t = ne.create("<div class='tab-menu'></div>"),
          n = ne.create(
            '\n\t\t<select style="width: 120px;">\n\t\t\t<option>Last hour</option>\n\t\t\t<option>Last 24 hours</option>\n\t\t\t<option>Last 7 days</option>\n\t\t\t<option>Last 30 days</option>\n\t\t\t<option>All time</option>\n\t\t</select>\n\t'
          ),
          r = ne.create('<select style="width: 160px;"></select>');
        xe.tabUrl.startsWith("http") &&
          ("Firefox" === ge.name
            ? r.appendChild(
                ne.create(`<option>${new URL(xe.tabUrl).host}</option>`)
              )
            : r.appendChild(
                ne.create(`<option>${new URL(xe.tabUrl).origin}</option>`)
              )),
          r.appendChild(ne.create("<option>All sites</option>")),
          t.appendChild(ne.create("<span class='label'>Time range: </span>")),
          t.appendChild(n),
          t.appendChild(ne.create("<div class='space'></div>")),
          t.appendChild(ne.create("<span class='label'>Origin: </span>")),
          t.appendChild(r),
          e.appendChild(t);
        const o = ne.create('<div class="container"></div>'),
          i = new de("Cache", "Frees up images and files.", !0),
          s = new de("Cookies", "Clears cookies of sites.", !0),
          a = new de("Local storage", "Clear local storage of sites.", !0),
          l = new he("Clean up", ae.trash, !0);
        (l.onClick = () => {
          const e = r.value,
            t = n.value;
          let o = new Date().getTime();
          switch (t) {
            case "Last hour":
              o -= 36e5;
              break;
            case "Last 24 hours":
              o -= 864e5;
              break;
            case "Last 7 days":
              o -= 6048e5;
              break;
            case "Last 30 days":
              o -= 2592e6;
              break;
            case "All time":
              o = 0;
          }
          const c = {};
          o && (c.since = o),
            e.startsWith("All") ||
              ("Firefox" === ge.name ? (c.hostnames = [e]) : (c.origins = [e]));
          const u = {
            cache: i.status,
            cookies: s.status,
            localStorage: a.status,
          };
          "Firefox" !== ge.name && (u.cacheStorage = i.status),
            chrome.browsingData.remove(c, u, () => {
              l.setLoading(!1);
            });
        }),
          o.appendChild(i.element),
          o.appendChild(s.element),
          o.appendChild(a.element),
          o.appendChild(l.element),
          e.appendChild(o);
      }),
      (ke.roots.meta_tags.initialize = (e) => {
        e.appendChild(ne.create('<h3 class="tab-title">Meta Tags</h3>'));
        const t = ne.create("<div class='tab-menu'></div>"),
          n = new he("Copy all"),
          r = ne.create("<ul class='scroll'></ul>"),
          o = ne.create("<span class='message'>No meta tags found!</span>");
        (o.style.display = "none"),
          (n.onClick = () => {
            let e = "";
            if (be.data)
              for (const t of be.data) {
                const n = ne.create("<meta></meta>");
                for (const e of t) n.setAttribute(e.name, e.value);
                e += ne.getOuterHtml(n) + "\n";
              }
            ie(e), ue.show("Copied", ae.clipboard, "#43a047");
          }),
          t.appendChild(n.element),
          e.appendChild(t),
          e.appendChild(r),
          e.appendChild(o),
          (be = new se(e, xe.metaTags, function () {
            if (((r.innerHTML = ""), this.data.length))
              for (const e of this.data) {
                const t = ne.create("<li></li>"),
                  n = ne.create('<div class="actions"></div>'),
                  o = ne.create(ae.copy);
                o.addEventListener("click", () => {
                  const t = ne.create("<meta></meta>");
                  for (const n of e) t.setAttribute(n.name, n.value);
                  ie(ne.getOuterHtml(t)),
                    ue.show("Copied", ae.clipboard, "#43a047");
                }),
                  n.appendChild(o),
                  t.appendChild(n);
                for (const n of e) {
                  const e = ne.create(
                    `\n\t\t\t\t\t\t<div class='entry'>\n\t\t\t\t\t\t\t<span class='property'>${n.name}</span>\n\t\t\t\t\t\t\t<span>${n.value}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t`
                  );
                  t.appendChild(e);
                }
                r.appendChild(t);
              }
            else
              (r.style.display = "none"),
                (o.style.display = "block"),
                (n.element.style.display = "none");
          })),
          oe("debug.getMetaTags", {}, xe.tabId);
      });
    const Ce = new ye(ke),
      Se = new we(ke);
    let je,
      Ee = {};
    (ke.roots.spellcheck.initialize = (e) => {
      e.appendChild(ne.create('<h3 class="tab-title">Spellcheck</h3>'));
      const t = ne.create('<div class="container"></div>'),
        n = ne.create('<span class="message">Only supports English</span>'),
        r = ne.create("<h1>0%</h1>"),
        o = ne.create("<h4>0 mistakes found</h4>");
      o.style.display = "none";
      const i = new he("Check", ae.search, !0),
        s = new he("View", ae.eye, !1);
      (s.element.style.display = "none"),
        (i.onClick = () => oe("debug.getTextNodes", {}, xe.tabId)),
        (s.onClick = () => {
          oe("debug.showSpellMistakes", { mistakes: Ee }, xe.tabId),
            window.close();
        }),
        t.appendChild(n),
        t.appendChild(r),
        t.appendChild(o),
        t.appendChild(s.element),
        t.appendChild(i.element),
        e.appendChild(t);
      let a = 0,
        l = 0,
        c = 0;
      (navigator.serviceWorker.onmessage = (e) => {
        if (e.data && "misspelled" === e.data.action) {
          a++;
          const t = Math.ceil((a / l) * 100);
          (c += e.data.result.length),
            (r.innerHTML = t + "%"),
            (o.innerHTML = c + " mistakes found"),
            (Ee[e.data.node] = e.data.result),
            (e.data.isLast || 100 === t) &&
              (c
                ? ((o.style.color = "#d32f2f"),
                  (s.element.style.display = "flex"),
                  (i.element.style.display = "none"))
                : ((o.style.color = "#43a047"),
                  (o.innerHTML = "No mistakes found!"),
                  i.setLoading(!1)),
              (o.style.display = "block"));
        }
      }),
        (je = new se(e, xe.textNodes, function () {
          const e = Object.keys(this.data);
          l = e.length;
          for (let t = 0; t < e.length; t++) {
            const n = e[t],
              r = this.data[n],
              o = t === e.length - 1;
            navigator.serviceWorker.controller.postMessage({
              action: "checkString",
              string: r,
              node: n,
              isLast: o,
            });
          }
        }));
    }),
      chrome.runtime.onMessage.addListener((e, t, n) => {
        switch (e.action) {
          case "debug.setMetaTags":
            be.change(e.tags);
            break;
          case "debug.setLinks":
            Ce.setData(e.links);
            break;
          case "debug.setHSE":
            Se.setData(e.hse);
            break;
          case "debug.setTextNodes":
            je.change(e.nodes);
        }
      }),
      chrome.tabs.query({ active: !0, currentWindow: !0 }, (e) => {
        (xe.tabId = e[0].id),
          (xe.tabUrl = e[0].url),
          (Ce.tabId = xe.tabId),
          (Se.tabId = xe.tabId),
          ke.toggleTab("clear_cache");
      });
  },
]);

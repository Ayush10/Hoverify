!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 30));
})([
  function (e, t, r) {
    "use strict";
    var n = r(3),
      o = Object.prototype.toString;
    function a(e) {
      return "[object Array]" === o.call(e);
    }
    function s(e) {
      return void 0 === e;
    }
    function i(e) {
      return null !== e && "object" == typeof e;
    }
    function c(e) {
      if ("[object Object]" !== o.call(e)) return !1;
      var t = Object.getPrototypeOf(e);
      return null === t || t === Object.prototype;
    }
    function u(e) {
      return "[object Function]" === o.call(e);
    }
    function l(e, t) {
      if (null != e)
        if (("object" != typeof e && (e = [e]), a(e)))
          for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
        else
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.call(null, e[o], o, e);
    }
    e.exports = {
      isArray: a,
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
      isObject: i,
      isPlainObject: c,
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
      isFunction: u,
      isStream: function (e) {
        return i(e) && u(e.pipe);
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
      forEach: l,
      merge: function e() {
        var t = {};
        function r(r, n) {
          c(t[n]) && c(r)
            ? (t[n] = e(t[n], r))
            : c(r)
            ? (t[n] = e({}, r))
            : a(r)
            ? (t[n] = r.slice())
            : (t[n] = r);
        }
        for (var n = 0, o = arguments.length; n < o; n++) l(arguments[n], r);
        return t;
      },
      extend: function (e, t, r) {
        return (
          l(t, function (t, o) {
            e[o] = r && "function" == typeof t ? n(t, r) : t;
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
  function (e, t, r) {
    e.exports = r(11);
  },
  function (e, t, r) {
    "use strict";
    (function (t) {
      var n = r(0),
        o = r(17),
        a = r(5),
        s = { "Content-Type": "application/x-www-form-urlencoded" };
      function i(e, t) {
        !n.isUndefined(e) &&
          n.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var c,
        u = {
          transitional: {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          },
          adapter:
            (("undefined" != typeof XMLHttpRequest ||
              (void 0 !== t &&
                "[object process]" === Object.prototype.toString.call(t))) &&
              (c = r(6)),
            c),
          transformRequest: [
            function (e, t) {
              return (
                o(t, "Accept"),
                o(t, "Content-Type"),
                n.isFormData(e) ||
                n.isArrayBuffer(e) ||
                n.isBuffer(e) ||
                n.isStream(e) ||
                n.isFile(e) ||
                n.isBlob(e)
                  ? e
                  : n.isArrayBufferView(e)
                  ? e.buffer
                  : n.isURLSearchParams(e)
                  ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : n.isObject(e) ||
                    (t && "application/json" === t["Content-Type"])
                  ? (i(t, "application/json"),
                    (function (e, t, r) {
                      if (n.isString(e))
                        try {
                          return (t || JSON.parse)(e), n.trim(e);
                        } catch (e) {
                          if ("SyntaxError" !== e.name) throw e;
                        }
                      return (r || JSON.stringify)(e);
                    })(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              var t = this.transitional,
                r = t && t.silentJSONParsing,
                o = t && t.forcedJSONParsing,
                s = !r && "json" === this.responseType;
              if (s || (o && n.isString(e) && e.length))
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (s) {
                    if ("SyntaxError" === e.name)
                      throw a(e, this, "E_JSON_PARSE");
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
      (u.headers = { common: { Accept: "application/json, text/plain, */*" } }),
        n.forEach(["delete", "get", "head"], function (e) {
          u.headers[e] = {};
        }),
        n.forEach(["post", "put", "patch"], function (e) {
          u.headers[e] = n.merge(s);
        }),
        (e.exports = u);
    }.call(this, r(16)));
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
          r[n] = arguments[n];
        return e.apply(t, r);
      };
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    function o(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, r) {
      if (!t) return e;
      var a;
      if (r) a = r(t);
      else if (n.isURLSearchParams(t)) a = t.toString();
      else {
        var s = [];
        n.forEach(t, function (e, t) {
          null != e &&
            (n.isArray(e) ? (t += "[]") : (e = [e]),
            n.forEach(e, function (e) {
              n.isDate(e)
                ? (e = e.toISOString())
                : n.isObject(e) && (e = JSON.stringify(e)),
                s.push(o(t) + "=" + o(e));
            }));
        }),
          (a = s.join("&"));
      }
      if (a) {
        var i = e.indexOf("#");
        -1 !== i && (e = e.slice(0, i)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
      }
      return e;
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t, r, n, o) {
      return (
        (e.config = t),
        r && (e.code = r),
        (e.request = n),
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
  function (e, t, r) {
    "use strict";
    var n = r(0),
      o = r(18),
      a = r(19),
      s = r(4),
      i = r(20),
      c = r(23),
      u = r(24),
      l = r(7);
    e.exports = function (e) {
      return new Promise(function (t, r) {
        var p = e.data,
          d = e.headers,
          h = e.responseType;
        n.isFormData(p) && delete d["Content-Type"];
        var f = new XMLHttpRequest();
        if (e.auth) {
          var m = e.auth.username || "",
            g = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          d.Authorization = "Basic " + btoa(m + ":" + g);
        }
        var v = i(e.baseURL, e.url);
        function y() {
          if (f) {
            var n =
                "getAllResponseHeaders" in f
                  ? c(f.getAllResponseHeaders())
                  : null,
              a = {
                data:
                  h && "text" !== h && "json" !== h
                    ? f.response
                    : f.responseText,
                status: f.status,
                statusText: f.statusText,
                headers: n,
                config: e,
                request: f,
              };
            o(t, r, a), (f = null);
          }
        }
        if (
          (f.open(
            e.method.toUpperCase(),
            s(v, e.params, e.paramsSerializer),
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
            f && (r(l("Request aborted", e, "ECONNABORTED", f)), (f = null));
          }),
          (f.onerror = function () {
            r(l("Network Error", e, null, f)), (f = null);
          }),
          (f.ontimeout = function () {
            var t = "timeout of " + e.timeout + "ms exceeded";
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              r(
                l(
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
          n.isStandardBrowserEnv())
        ) {
          var w =
            (e.withCredentials || u(v)) && e.xsrfCookieName
              ? a.read(e.xsrfCookieName)
              : void 0;
          w && (d[e.xsrfHeaderName] = w);
        }
        "setRequestHeader" in f &&
          n.forEach(d, function (e, t) {
            void 0 === p && "content-type" === t.toLowerCase()
              ? delete d[t]
              : f.setRequestHeader(t, e);
          }),
          n.isUndefined(e.withCredentials) ||
            (f.withCredentials = !!e.withCredentials),
          h && "json" !== h && (f.responseType = e.responseType),
          "function" == typeof e.onDownloadProgress &&
            f.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            f.upload &&
            f.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              f && (f.abort(), r(e), (f = null));
            }),
          p || (p = null),
          f.send(p);
      });
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(5);
    e.exports = function (e, t, r, o, a) {
      var s = new Error(e);
      return n(s, t, r, o, a);
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = function (e, t) {
      t = t || {};
      var r = {},
        o = ["url", "method", "data"],
        a = ["headers", "auth", "proxy", "params"],
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
        i = ["validateStatus"];
      function c(e, t) {
        return n.isPlainObject(e) && n.isPlainObject(t)
          ? n.merge(e, t)
          : n.isPlainObject(t)
          ? n.merge({}, t)
          : n.isArray(t)
          ? t.slice()
          : t;
      }
      function u(o) {
        n.isUndefined(t[o])
          ? n.isUndefined(e[o]) || (r[o] = c(void 0, e[o]))
          : (r[o] = c(e[o], t[o]));
      }
      n.forEach(o, function (e) {
        n.isUndefined(t[e]) || (r[e] = c(void 0, t[e]));
      }),
        n.forEach(a, u),
        n.forEach(s, function (o) {
          n.isUndefined(t[o])
            ? n.isUndefined(e[o]) || (r[o] = c(void 0, e[o]))
            : (r[o] = c(void 0, t[o]));
        }),
        n.forEach(i, function (n) {
          n in t ? (r[n] = c(e[n], t[n])) : n in e && (r[n] = c(void 0, e[n]));
        });
      var l = o.concat(a).concat(s).concat(i),
        p = Object.keys(e)
          .concat(Object.keys(t))
          .filter(function (e) {
            return -1 === l.indexOf(e);
          });
      return n.forEach(p, u), r;
    };
  },
  function (e, t, r) {
    "use strict";
    function n(e) {
      this.message = e;
    }
    (n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (n.prototype.__CANCEL__ = !0),
      (e.exports = n);
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      o = r(3),
      a = r(12),
      s = r(9);
    function i(e) {
      var t = new a(e),
        r = o(a.prototype.request, t);
      return n.extend(r, a.prototype, t), n.extend(r, t), r;
    }
    var c = i(r(2));
    (c.Axios = a),
      (c.create = function (e) {
        return i(s(c.defaults, e));
      }),
      (c.Cancel = r(10)),
      (c.CancelToken = r(27)),
      (c.isCancel = r(8)),
      (c.all = function (e) {
        return Promise.all(e);
      }),
      (c.spread = r(28)),
      (c.isAxiosError = r(29)),
      (e.exports = c),
      (e.exports.default = c);
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      o = r(4),
      a = r(13),
      s = r(14),
      i = r(9),
      c = r(25),
      u = c.validators;
    function l(e) {
      (this.defaults = e),
        (this.interceptors = { request: new a(), response: new a() });
    }
    (l.prototype.request = function (e) {
      "string" == typeof e
        ? ((e = arguments[1] || {}).url = arguments[0])
        : (e = e || {}),
        (e = i(this.defaults, e)).method
          ? (e.method = e.method.toLowerCase())
          : this.defaults.method
          ? (e.method = this.defaults.method.toLowerCase())
          : (e.method = "get");
      var t = e.transitional;
      void 0 !== t &&
        c.assertOptions(
          t,
          {
            silentJSONParsing: u.transitional(u.boolean, "1.0.0"),
            forcedJSONParsing: u.transitional(u.boolean, "1.0.0"),
            clarifyTimeoutError: u.transitional(u.boolean, "1.0.0"),
          },
          !1
        );
      var r = [],
        n = !0;
      this.interceptors.request.forEach(function (t) {
        ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
          ((n = n && t.synchronous), r.unshift(t.fulfilled, t.rejected));
      });
      var o,
        a = [];
      if (
        (this.interceptors.response.forEach(function (e) {
          a.push(e.fulfilled, e.rejected);
        }),
        !n)
      ) {
        var l = [s, void 0];
        for (
          Array.prototype.unshift.apply(l, r),
            l = l.concat(a),
            o = Promise.resolve(e);
          l.length;

        )
          o = o.then(l.shift(), l.shift());
        return o;
      }
      for (var p = e; r.length; ) {
        var d = r.shift(),
          h = r.shift();
        try {
          p = d(p);
        } catch (e) {
          h(e);
          break;
        }
      }
      try {
        o = s(p);
      } catch (e) {
        return Promise.reject(e);
      }
      for (; a.length; ) o = o.then(a.shift(), a.shift());
      return o;
    }),
      (l.prototype.getUri = function (e) {
        return (
          (e = i(this.defaults, e)),
          o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        );
      }),
      n.forEach(["delete", "get", "head", "options"], function (e) {
        l.prototype[e] = function (t, r) {
          return this.request(
            i(r || {}, { method: e, url: t, data: (r || {}).data })
          );
        };
      }),
      n.forEach(["post", "put", "patch"], function (e) {
        l.prototype[e] = function (t, r, n) {
          return this.request(i(n || {}, { method: e, url: t, data: r }));
        };
      }),
      (e.exports = l);
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    function o() {
      this.handlers = [];
    }
    (o.prototype.use = function (e, t, r) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: !!r && r.synchronous,
          runWhen: r ? r.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }),
      (o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (o.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
      o = r(15),
      a = r(8),
      s = r(2);
    function i(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function (e) {
      return (
        i(e),
        (e.headers = e.headers || {}),
        (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
        (e.headers = n.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        n.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        ),
        (e.adapter || s.adapter)(e).then(
          function (t) {
            return (
              i(e),
              (t.data = o.call(e, t.data, t.headers, e.transformResponse)),
              t
            );
          },
          function (t) {
            return (
              a(t) ||
                (i(e),
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
  function (e, t, r) {
    "use strict";
    var n = r(0),
      o = r(2);
    e.exports = function (e, t, r) {
      var a = this || o;
      return (
        n.forEach(r, function (r) {
          e = r.call(a, e, t);
        }),
        e
      );
    };
  },
  function (e, t) {
    var r,
      n,
      o = (e.exports = {});
    function a() {
      throw new Error("setTimeout has not been defined");
    }
    function s() {
      throw new Error("clearTimeout has not been defined");
    }
    function i(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === a || !r) && setTimeout)
        return (r = setTimeout), setTimeout(e, 0);
      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : a;
      } catch (e) {
        r = a;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        n = s;
      }
    })();
    var c,
      u = [],
      l = !1,
      p = -1;
    function d() {
      l &&
        c &&
        ((l = !1), c.length ? (u = c.concat(u)) : (p = -1), u.length && h());
    }
    function h() {
      if (!l) {
        var e = i(d);
        l = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++p < t; ) c && c[p].run();
          (p = -1), (t = u.length);
        }
        (c = null),
          (l = !1),
          (function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === s || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(e);
            try {
              n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          })(e);
      }
    }
    function f(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      u.push(new f(e, t)), 1 !== u.length || l || i(h);
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
      (o.on = m),
      (o.addListener = m),
      (o.once = m),
      (o.off = m),
      (o.removeListener = m),
      (o.removeAllListeners = m),
      (o.emit = m),
      (o.prependListener = m),
      (o.prependOnceListener = m),
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
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = function (e, t) {
      n.forEach(e, function (r, n) {
        n !== t &&
          n.toUpperCase() === t.toUpperCase() &&
          ((e[t] = r), delete e[n]);
      });
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(7);
    e.exports = function (e, t, r) {
      var o = r.config.validateStatus;
      r.status && o && !o(r.status)
        ? t(
            n(
              "Request failed with status code " + r.status,
              r.config,
              null,
              r.request,
              r
            )
          )
        : e(r);
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = n.isStandardBrowserEnv()
      ? {
          write: function (e, t, r, o, a, s) {
            var i = [];
            i.push(e + "=" + encodeURIComponent(t)),
              n.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()),
              n.isString(o) && i.push("path=" + o),
              n.isString(a) && i.push("domain=" + a),
              !0 === s && i.push("secure"),
              (document.cookie = i.join("; "));
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
  function (e, t, r) {
    "use strict";
    var n = r(21),
      o = r(22);
    e.exports = function (e, t) {
      return e && !n(t) ? o(e, t) : t;
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0),
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
        r,
        a,
        s = {};
      return e
        ? (n.forEach(e.split("\n"), function (e) {
            if (
              ((a = e.indexOf(":")),
              (t = n.trim(e.substr(0, a)).toLowerCase()),
              (r = n.trim(e.substr(a + 1))),
              t)
            ) {
              if (s[t] && o.indexOf(t) >= 0) return;
              s[t] =
                "set-cookie" === t
                  ? (s[t] ? s[t] : []).concat([r])
                  : s[t]
                  ? s[t] + ", " + r
                  : r;
            }
          }),
          s)
        : s;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(0);
    e.exports = n.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");
          function o(e) {
            var n = e;
            return (
              t && (r.setAttribute("href", n), (n = r.href)),
              r.setAttribute("href", n),
              {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname:
                  "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname,
              }
            );
          }
          return (
            (e = o(window.location.href)),
            function (t) {
              var r = n.isString(t) ? o(t) : t;
              return r.protocol === e.protocol && r.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        };
  },
  function (e, t, r) {
    "use strict";
    var n = r(26),
      o = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(
      function (e, t) {
        o[e] = function (r) {
          return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
        };
      }
    );
    var a = {},
      s = n.version.split(".");
    function i(e, t) {
      for (var r = t ? t.split(".") : s, n = e.split("."), o = 0; o < 3; o++) {
        if (r[o] > n[o]) return !0;
        if (r[o] < n[o]) return !1;
      }
      return !1;
    }
    (o.transitional = function (e, t, r) {
      var o = t && i(t);
      function s(e, t) {
        return (
          "[Axios v" +
          n.version +
          "] Transitional option '" +
          e +
          "'" +
          t +
          (r ? ". " + r : "")
        );
      }
      return function (r, n, i) {
        if (!1 === e) throw new Error(s(n, " has been removed in " + t));
        return (
          o &&
            !a[n] &&
            ((a[n] = !0),
            console.warn(
              s(
                n,
                " has been deprecated since v" +
                  t +
                  " and will be removed in the near future"
              )
            )),
          !e || e(r, n, i)
        );
      };
    }),
      (e.exports = {
        isOlderVersion: i,
        assertOptions: function (e, t, r) {
          if ("object" != typeof e)
            throw new TypeError("options must be an object");
          for (var n = Object.keys(e), o = n.length; o-- > 0; ) {
            var a = n[o],
              s = t[a];
            if (s) {
              var i = e[a],
                c = void 0 === i || s(i, a, e);
              if (!0 !== c)
                throw new TypeError("option " + a + " must be " + c);
            } else if (!0 !== r) throw Error("Unknown option " + a);
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
  function (e, t, r) {
    "use strict";
    var n = r(10);
    function o(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var r = this;
      e(function (e) {
        r.reason || ((r.reason = new n(e)), t(r.reason));
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
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return "object" == typeof e && !0 === e.isAxiosError;
    };
  },
  function (e, t, r) {
    "use strict";
    r.r(t);
    var n = (e, t, r) => {
      t || (t = {}),
        (t.action = e),
        r ? chrome.tabs.sendMessage(r, t) : chrome.runtime.sendMessage(t);
    };
    var o = (e) =>
        new Promise((t, r) => {
          chrome.storage.local.set(e, () => {
            chrome.runtime.lastError
              ? r(Error(chrome.runtime.lastError.message))
              : t();
          });
        }),
      a = (e) =>
        new Promise((t, r) => {
          chrome.storage.local.get(e, (e) => {
            chrome.runtime.lastError
              ? r(Error(chrome.runtime.lastError.message))
              : t(e);
          });
        }),
      s = (e, t) =>
        new Promise((r, n) => {
          chrome.tabs.executeScript(e, t, (e) => {
            let t = chrome.runtime.lastError;
            void 0 !== t ? n(t) : r();
          });
        }),
      i = () =>
        new Promise((e, t) => {
          chrome.tabs.captureVisibleTab(null, { format: "png" }, (t) => {
            e(t);
          });
        }),
      c = r(1),
      u = r.n(c);
    function l(e, t) {
      let r,
        n,
        o,
        a,
        s,
        i = 0,
        c = 0;
      for (i = 0; i < t.length; i += 1)
        if (((r = new RegExp(t[i].value, "i")), (o = r.test(e)), o)) {
          if (
            ((n = new RegExp(t[i].version + "[- /:;]([\\d._]+)", "i")),
            (a = e.match(n)),
            (s = ""),
            a && a[1] && (a = a[1]),
            a)
          )
            for (a = a.split(/[._]+/), c = 0; c < a.length; c += 1)
              s += 0 === c ? a[c] + "." : a[c];
          else s = "0";
          return { name: t[i].name, version: parseFloat(s) };
        }
      return { name: "unknown", version: 0 };
    }
    const p = [
      navigator.platform,
      navigator.userAgent,
      navigator.appVersion,
      navigator.vendor,
      window.opera,
    ].join(" ");
    var d = {
      os: l(p, [
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
      ]),
      browser: l(p, [
        { name: "Chrome", value: "Chrome", version: "Chrome" },
        { name: "Firefox", value: "Firefox", version: "Firefox" },
        { name: "Safari", value: "Safari", version: "Version" },
        { name: "Internet Explorer", value: "MSIE", version: "MSIE" },
        { name: "Opera", value: "Opera", version: "Opera" },
        { name: "BlackBerry", value: "CLDC", version: "CLDC" },
        { name: "Mozilla", value: "Mozilla", version: "Mozilla" },
      ]),
    };
    const h = "https://rear.tryhoverify.com/api/app";
    var f = async (e) => {
      const t = { Authorization: "Bearer " + e };
      try {
        const { data: e } = await u.a.get(h + "/checkup", { headers: t });
        return ":)" === e.status
          ? e.data.token
          : (console.log(e.error.message), ":(");
      } catch (e) {
        throw e;
      }
    };
    var m = async (e) => {
        try {
          await o(e);
        } catch (e) {
          return console.log(e), e;
        }
      },
      g = async (e) => {
        try {
          return (await a(e))[e];
        } catch (e) {
          return e;
        }
      };
    function v(e, t, r) {
      (this.data = t),
        (this.element = e),
        (this.callback = r),
        (e.value = t),
        e.addEventListener("change", this, !1);
    }
    (v.prototype.handleEvent = function (e) {
      switch (e.type) {
        case "change":
          this.change(this.element.value);
      }
    }),
      (v.prototype.change = function (e) {
        (this.data = e), this.callback();
      });
    const y = { tabs: {}, url: "" },
      w = [
        {
          name: "Nexus 5",
          width: 360,
          height: 640,
          hide: !1,
          user_agent: "Android Phone",
          view_mode_support: !0,
        },
        {
          name: "Galaxy S5",
          width: 360,
          height: 640,
          hide: !1,
          user_agent: "Samsung Phone",
          view_mode_support: !0,
        },
        {
          name: "Pixel 2",
          width: 411,
          height: 731,
          hide: !1,
          user_agent: "Google Pixel",
          view_mode_support: !0,
        },
        {
          name: "Pixel 2 XL",
          width: 411,
          height: 823,
          hide: !1,
          user_agent: "Google Pixel",
          view_mode_support: !0,
        },
        {
          name: "iPhone 12 Pro Max",
          width: 428,
          height: 926,
          hide: !1,
          user_agent: "iPhone",
          view_mode_support: !0,
        },
        {
          name: "iPhone 12 mini",
          width: 375,
          height: 812,
          hide: !1,
          user_agent: "iPhone",
          view_mode_support: !0,
        },
        {
          name: "iPhone 12",
          width: 390,
          height: 844,
          hide: !1,
          user_agent: "iPhone",
          view_mode_support: !0,
        },
        {
          name: "iPhone 11 Pro",
          width: 375,
          height: 812,
          hide: !1,
          user_agent: "iPhone",
          view_mode_support: !0,
        },
        {
          name: "iPhone 11",
          width: 414,
          height: 896,
          hide: !1,
          user_agent: "iPhone",
          view_mode_support: !0,
        },
        {
          name: "iPhone X",
          width: 375,
          height: 812,
          hide: !1,
          user_agent: "iPhone",
          view_mode_support: !0,
        },
        {
          name: "iPhone SE",
          width: 375,
          height: 667,
          hide: !1,
          user_agent: "iPhone",
          view_mode_support: !0,
        },
        {
          name: "iPhone 8",
          width: 375,
          height: 667,
          hide: !1,
          user_agent: "iPhone",
          view_mode_support: !0,
        },
        {
          name: "iPhone 8 Plus",
          width: 414,
          height: 736,
          hide: !1,
          user_agent: "iPhone",
          view_mode_support: !0,
        },
        {
          name: "iPad Mini",
          width: 768,
          height: 1024,
          hide: !1,
          user_agent: "iPad Mini",
          view_mode_support: !0,
        },
      ],
      b = { urls: ["<all_urls>"] },
      x = ["content-security-policy", "x-frame-options"];
    function k(e) {
      return !!y.tabs[e];
    }
    async function S(e) {
      if (e)
        try {
          let t = await g("responsive");
          t || (t = {}), (t.devices = e), await m({ responsive: t });
        } catch (e) {}
    }
    var _ = {
      initialize: function () {
        const e = ["blocking", "responseHeaders"];
        "Firefox" !== d.browser.name && e.push("extraHeaders"),
          chrome.webRequest.onHeadersReceived.addListener(
            (e) => (
              Object.keys(y.tabs).length &&
                (e.responseHeaders = e.responseHeaders.filter(
                  (e) => !x.includes(e.name.toLowerCase())
                )),
              { responseHeaders: e.responseHeaders }
            ),
            b,
            e
          ),
          chrome.webRequest.onBeforeSendHeaders.addListener(
            (e) => {
              if (e && k(e.tabId) && e.frameId) {
                const t = y.tabs[e.tabId][e.frameId];
                if (t)
                  for (let r = 0; r < e.requestHeaders.length; r++)
                    if ("User-Agent" === e.requestHeaders[r].name) {
                      e.requestHeaders[r].value = t;
                      break;
                    }
              }
              return { requestHeaders: e.requestHeaders };
            },
            b,
            ["blocking", "requestHeaders"]
          ),
          chrome.webNavigation.onCompleted.addListener(async (e) => {
            if (k(e.tabId) && e.frameId)
              try {
                await s(e.tabId, {
                  file: "/js/responsive/sync.js",
                  frameId: e.frameId,
                  runAt: "document_start",
                });
              } catch (e) {}
          }),
          chrome.webNavigation.onBeforeNavigate.addListener(function (e) {
            if (k(e.tabId) && e.frameId && 0 === e.parentFrameId) {
              const t = (function (e) {
                let t = e.split("?")[1];
                if (t) {
                  if (((t = t.split("&")), "" == t)) return {};
                  for (var r = {}, n = 0; n < t.length; ++n) {
                    var o = t[n].split("=", 2);
                    1 == o.length
                      ? (r[o[0]] = "")
                      : (r[o[0]] = decodeURIComponent(
                          o[1].replace(/\+/g, " ")
                        ));
                  }
                  return r;
                }
              })(e.url);
              t &&
                t["__user-agent__"] &&
                (y.tabs[e.tabId][e.frameId] = t["__user-agent__"]);
            }
          });
      },
      defaultDevices: w,
      register: function (e) {
        y.tabs[e] = {};
      },
      remove: function (e) {
        y.tabs[e] && delete y.tabs[e];
      },
      saveDevices: S,
      getDevices: async function () {
        const e = await g("responsive");
        return !e || (e && !e.devices) ? w : e.devices;
      },
      resetDevices: function () {
        return S(w), w;
      },
      saveZoom: async function (e) {
        try {
          let t = await g("responsive");
          t || (t = {}), (t.zoom = e), await m({ responsive: t });
        } catch (e) {}
      },
      getZoom: async function () {
        const e = await g("responsive");
        return !e || (e && !e.zoom) ? 50 : e.zoom;
      },
      saveView: async function (e) {
        try {
          let t = await g("responsive");
          t || (t = {}), (t.view = e), await m({ responsive: t });
        } catch (e) {}
      },
      getView: async function () {
        const e = await g("responsive");
        return !e || (e && !e.view) ? "potrait" : e.view;
      },
      saveIsFrame: async function (e) {
        try {
          let t = await g("responsive");
          t || (t = {}), (t.is_frame = e), await m({ responsive: t });
        } catch (e) {}
      },
      getIsFrame: async function () {
        const e = await g("responsive");
        return !(e && (!e || void 0 !== e.is_frame)) || e.is_frame;
      },
      setURL: function (e) {
        e.startsWith("chrome:") ? (y.url = "") : (y.url = e);
      },
      getURL: function () {
        return y.url;
      },
    };
    const E = {};
    async function P() {
      try {
        return await g("activated");
      } catch (e) {
        return !1;
      }
    }
    async function j() {
      try {
        return await g("settings");
      } catch (e) {
        console.log(e);
      }
    }
    async function A(e, t) {
      let r = !1;
      if (!O(e) && (t.startsWith("http") || t.startsWith("file")))
        try {
          await s(e, { file: "/js/cs.js" }), (r = E[e]);
        } catch (e) {
          console.log(e);
        }
      return r;
    }
    function O(e) {
      return E[e];
    }
    function T(e, t, r) {
      const o = O(e);
      o &&
        (t
          ? (o.color_eyedropper && R(e, !1, !0),
            (E[e].inspect = !0),
            r && n("inspect.enable", {}, e))
          : ((E[e].inspect = !1), r && n("inspect.disable", {}, e)));
    }
    function R(e, t, r) {
      const o = O(e);
      o &&
        (t
          ? (o.inspect && T(e, !1, !0),
            (E[e].color_eyedropper = !0),
            r && n("colorEyedropper.enable", {}, e))
          : ((E[e].color_eyedropper = !1),
            r && n("colorEyedropper.disable", {}, e)));
    }
    !(async function () {
      const e = await g("responsive");
      try {
        if (e && e.devices) {
          for (const t of e.devices) t.view_mode_support = !0;
          await m({ responsive: e });
        }
      } catch (e) {}
    })();
    var C = {
      checkActivation: P,
      activate: async function (e, t) {
        try {
          await m({
            activated: !0,
            token: e,
            device_name: t,
            settings: {
              tools: {
                inspector: !0,
                color_eyedropper: !0,
                assets: !0,
                responsive: !0,
                debug: !0,
                built_with: !0,
                screenshot: !0,
              },
              inspector: {
                default_mode: "Computed",
                view: {
                  pseudo: !0,
                  html_attribs: !0,
                  media: !0,
                  animations: !0,
                },
                copy: {
                  pseudo: !0,
                  outer_html: !0,
                  inner_html: !0,
                  media: !0,
                  animations: !0,
                },
                trash_persist_changes: !1,
                hot_reload: !0,
                inject_iframes: !1,
              },
              color_eyedropper: { zoom: 5 },
              assets: { sort_by: "None" },
              shortcuts: !0,
            },
            responsive: {
              devices: [..._.defaultDevices],
              zoom: 50,
              view: "portrait",
              is_frame: !0,
            },
          }),
            console.log("Activated Successfully");
        } catch (e) {
          console.log("Activation Failed!");
        }
      },
      deactivate: async function () {
        try {
          await m({ activated: !1, token: "" }),
            console.log("Deactivated Successfully");
        } catch (e) {
          console.log("Deactivation Failed!");
        }
      },
      checkup: async function () {
        try {
          const e = await g("token");
          if (e) {
            const t = await f(e);
            ":(" !== t
              ? await m({ token: t })
              : await m({ activated: !1, token: "" });
          }
        } catch (e) {
          "403" === e.message && (await m({ activated: !1, token: "" }));
        }
      },
      getSettings: j,
      getExportSettings: async function () {
        try {
          const e = await g("settings"),
            t = await g("responsive"),
            r = chrome.runtime.getManifest().version;
          return btoa(
            JSON.stringify({ version: r, settings: e, responsive: t })
          );
        } catch (e) {
          console.log(e);
        }
      },
      setSettings: async function (e) {
        try {
          await m({ settings: e });
          for (const t in E) {
            const r = parseInt(t);
            E.hasOwnProperty(t) &&
              !isNaN(r) &&
              n("settings.set", { settings: e }, r),
              e.inspector.hot_reload &&
                E[r].hot_reload &&
                (E[r].hot_reload = !1);
          }
        } catch (e) {
          console.log(e);
        }
      },
      importSettings: async function (e) {
        try {
          const t = atob(e),
            r = JSON.parse(t),
            n = r.settings,
            o = r.responsive;
          if (!n || !o) throw new Error("Missing keys");
          await m({ settings: n, responsive: o });
        } catch (e) {
          throw e;
        }
      },
      enable: A,
      setEnabled: async function (e, t) {
        const r = await j();
        t
          ? t &&
            r.inspector.inject_iframes &&
            n("initialize", { settings: r }, e)
          : (n("initialize", { settings: r }, e),
            E[e] && E[e].hot_reload
              ? ((E[e].hot_reload = !1), T(e, !0, !0))
              : (E[e] = { inspect: !1, color_eyedropper: !1 }));
      },
      disable: async function (e) {
        R(e, !1, !0),
          (await j()).inspector.hot_reload && E[e].inspect
            ? (T(e, !1, !0), (E[e].hot_reload = !0))
            : (T(e, !1, !0), delete E[e]);
      },
      getStatus: async function (e, t) {
        let r = !1;
        try {
          if (await P()) (r = O(e)), r || ((r = await A(e, t)), r || (r = !1));
          else {
            const e = chrome.runtime.getURL("activate.html");
            chrome.tabs.create({ url: e }), (r = null);
          }
        } catch (e) {
          console.log(e);
        }
        return r;
      },
      toggleInspect: T,
      toggleColorEyedropper: R,
    };
    const L = document.createElement("link");
    L.setAttribute("rel", "stylesheet"),
      L.setAttribute("type", "text/css"),
      L.setAttribute("href", chrome.extension.getURL("css/global.css"));
    const N = document.createElement("link");
    N.setAttribute("rel", "stylesheet"),
      N.setAttribute("type", "text/css"),
      N.setAttribute("href", chrome.extension.getURL("css/hide_scrollbar.css"));
    var U = {
      loadStyles: async function (e, t) {
        try {
          const r = await (async function (e) {
            try {
              const { data: t } = await u.a.get(e);
              return t;
            } catch (e) {
              throw e;
            }
          })(t);
          n("inspect.addStyles", { text: r }, e);
        } catch (e) {}
      },
      injectCustomJavascript: async function (e, t) {
        await s(e, { code: t });
      },
    };
    const I = "colors.recents",
      B = "colors.saved";
    var F = {
      takeScreenshot: async function (e) {
        try {
          const t = await i();
          n("colorEyedropper.setScreenshot", { dataURI: t }, e);
        } catch (e) {}
      },
      addToRecents: async function (e) {
        try {
          let t = await g(I);
          t || (t = []);
          let r = -1;
          for (let n = 0; n < t.length; n++)
            if (t[n].hex === e.hex) {
              r = n;
              break;
            }
          -1 !== r && t.splice(r, 1),
            t.unshift(e),
            t.length > 18 && t.splice(18, t.length - 18);
          const n = {};
          (n[I] = t), await m(n);
        } catch (e) {
          console.log(e);
        }
      },
      getRecents: async function () {
        let e = [];
        try {
          e = await g(I);
        } catch (e) {
          console.log(e);
        }
        return e || [];
      },
      addToSaved: async function (e) {
        try {
          let t = await g(B);
          t || (t = []);
          let r = -1;
          for (let n = 0; n < t.length; n++)
            if (t[n].hex === e.hex) {
              r = n;
              break;
            }
          -1 !== r && t.splice(r, 1), t.unshift(e);
          const n = {};
          (n[B] = t), await m(n);
        } catch (e) {
          console.log(e);
        }
      },
      removeFromSaved: async function (e) {
        try {
          let t = await g(B);
          t || (t = []);
          let r = -1;
          for (let n = 0; n < t.length; n++)
            if (t[n].hex === e.hex) {
              r = n;
              break;
            }
          -1 !== r && t.splice(r, 1);
          const n = {};
          (n[B] = t), await m(n);
        } catch (e) {
          console.log(e);
        }
      },
      getSaved: async function () {
        let e = [];
        try {
          e = await g(B);
        } catch (e) {
          console.log(e);
        }
        return e || [];
      },
    };
    const M = { screenshots: [], canvas: null, ctx: null };
    var D = {
      captureFullPage: function (e) {
        n("screenshot.prepareFullPage", {}, e),
          (M.canvas = document.createElement("canvas")),
          (M.canvas.width = 0),
          (M.canvas.height = 0),
          (M.ctx = M.canvas.getContext("2d"));
      },
      captureVisibleArea: function (e) {
        n("screenshot.prepare", {}, e),
          setTimeout(async () => {
            try {
              const t = await i();
              await m({ screenshots: [t] }),
                chrome.tabs.create({
                  url: chrome.runtime.getURL("capture.html"),
                }),
                n("screenshot.reset", {}, e);
            } catch (e) {
              console.log(e);
            }
          }, 500);
      },
      captureAllTabs: function () {
        let e = [],
          t = [];
        async function r(o) {
          o >= e.length
            ? (await m({ screenshots: t }),
              chrome.tabs.create({
                url: chrome.runtime.getURL("capture.html"),
              }))
            : chrome.tabs.update(e[o].id, { active: !0 }, async (e) => {
                try {
                  await C.getStatus(e.id, e.url),
                    n("screenshot.prepare", {}, e.id),
                    (function (e, o) {
                      setTimeout(async () => {
                        try {
                          const a = await i();
                          t.push(a), n("screenshot.reset", {}, o), r(e + 1);
                        } catch (t) {
                          console.log(t), r(e + 1);
                        }
                      }, 500);
                    })(o, e.id);
                } catch (e) {
                  console.log(e);
                }
              });
        }
        chrome.tabs.query({}, (t) => {
          (e = t.filter(
            (e) => e.url.startsWith("http") || e.url.startsWith("file")
          )),
            e.length && r(0);
        });
      },
      captureFragment: async function (e, t) {
        const r = await i();
        if (r) {
          const o = new Image();
          (o.onload = async () => {
            if (
              ((t.image = { width: o.width, height: o.height }),
              t.window_width !== o.width)
            ) {
              var r = o.width / t.window_width;
              (t.x *= r),
                (t.y *= r),
                (t.total_width *= r),
                (t.total_height *= r);
            }
            if (
              (M.canvas.width ||
                ((M.canvas.width = t.image.width),
                (M.canvas.height = t.total_height)),
              M.ctx.drawImage(o, t.x, t.y),
              1 === t.complete)
            ) {
              const e = M.canvas.toDataURL("image/png");
              await m({ screenshots: [e] }),
                chrome.tabs.create({
                  url: chrome.runtime.getURL("capture.html"),
                });
            } else n("screenshot.proceedCapture", {}, e);
          }),
            (o.src = r);
        }
      },
      captureSelectedArea: function (e, t) {
        n("screenshot.prepare", { remove_scroll: !0 }, e),
          setTimeout(async () => {
            try {
              const r = await i();
              await m({ screenshots: [r] });
              const o = btoa(btoa(JSON.stringify(t))),
                a = `${chrome.runtime.getURL("capture.html")}?r=${o}`;
              chrome.tabs.create({ url: a }), n("screenshot.reset", {}, e);
            } catch (e) {
              console.log(e);
            }
          }, 500);
      },
    };
    async function q(e) {
      const t = await C.getSettings();
      (e && !t.shortcuts) ||
        chrome.tabs.query({ active: !0, currentWindow: !0 }, async (e) => {
          const t = e[0].id,
            r = e[0].url,
            n = await C.getStatus(t, r);
          n &&
            (n.inspect
              ? C.toggleInspect(t, !1, !0)
              : C.toggleInspect(t, !0, !0));
        });
    }
    async function z(e) {
      const t = await C.getSettings();
      (e && !t.shortcuts) ||
        chrome.tabs.query({ active: !0, currentWindow: !0 }, async (e) => {
          const t = e[0].id,
            r = e[0].url,
            n = await C.getStatus(t, r);
          n &&
            (n.color_eyedropper
              ? C.toggleColorEyedropper(t, !1, !0)
              : C.toggleColorEyedropper(t, !0, !0));
        });
    }
    async function H(e) {
      const t = await C.getSettings();
      (e && !t.shortcuts) ||
        chrome.tabs.query({ active: !0, currentWindow: !0 }, async (e) => {
          _.setURL(e[0].url),
            chrome.tabs.create({
              url: chrome.runtime.getURL("responsive.html"),
            });
        });
    }
    async function J(e, t) {
      const r = await C.getSettings();
      (e && !r.shortcuts) ||
        chrome.tabs.query({ active: !0, currentWindow: !0 }, async (e) => {
          const r = e[0].id,
            o = e[0].url;
          if (await C.getStatus(r, o))
            switch (t) {
              case "full-page":
                D.captureFullPage(r);
                break;
              case "selected-area":
                n("screenshot.startSelectedAreaCapture", {}, r);
                break;
              case "visible-part":
                D.captureVisibleArea(r);
                break;
              case "all-tabs":
                D.captureAllTabs();
            }
        });
    }
    _.initialize(),
      chrome.runtime.onMessage.addListener((e, t, r) => {
        t.tab
          ? (async function (e, t) {
              const r = e.tab.id;
              switch (t.action) {
                case "manager.setEnabled":
                  C.setEnabled(r, t.is_frame);
                  break;
                case "manager.disable":
                  C.disable(r);
                  break;
                case "inspect.disable":
                  C.toggleInspect(r, !1, !1);
                  break;
                case "inspect.loadStyles":
                  U.loadStyles(r, t.url);
                  break;
                case "inspect.injectCustomJavascript":
                  U.injectCustomJavascript(r, t.code);
                  break;
                case "colorEyedropper.disable":
                  C.toggleColorEyedropper(r, !1, !1);
                  break;
                case "colorEyedropper.takeScreenshot":
                  F.takeScreenshot(r);
                  break;
                case "colorEyedropper.addToRecents":
                  F.addToRecents(t.color);
                  break;
                case "manager.activate":
                  C.activate(t.token, t.device_name);
                  break;
                case "manager.deactivate":
                  C.deactivate();
                  break;
                case "manager.getSettings":
                  {
                    const e = await C.getSettings();
                    n("settings.set", { settings: e }, r);
                  }
                  break;
                case "manager.exportSettings":
                  {
                    const e = await C.getExportSettings();
                    n("settings.export", { data: e }, r);
                  }
                  break;
                case "manager.setSettings":
                  await C.setSettings(t.settings);
                  break;
                case "manager.importSettings":
                  try {
                    await C.importSettings(t.data);
                    const e = await C.getSettings();
                    n("settings.set", { settings: e }, r),
                      n(
                        "settings.showMessage",
                        { text: "Settings imported!" },
                        r
                      );
                  } catch (e) {
                    n("settings.showMessage", { text: e.message }, r);
                  }
                  break;
                case "responsive.register":
                  {
                    const e = await C.checkActivation();
                    if (e) {
                      _.register(r);
                      const t = await _.getDevices(),
                        o = await _.getZoom(),
                        a = await _.getView(),
                        s = await _.getIsFrame(),
                        i = _.getURL();
                      n(
                        "responsive.initialize",
                        {
                          activation: e,
                          devices: t,
                          zoom: o,
                          view: a,
                          is_frame: s,
                          url: i,
                        },
                        r
                      );
                    } else {
                      n("responsive.initialize", { activation: e }, r);
                      const t = chrome.runtime.getURL("activate.html");
                      chrome.tabs.create({ url: t });
                    }
                  }
                  break;
                case "responsive.remove":
                  _.remove(r);
                  break;
                case "responsive.saveZoom":
                  _.saveZoom(t.zoom);
                  break;
                case "responsive.saveDevices":
                  await _.saveDevices(t.devices);
                  break;
                case "responsive.resetDevices":
                  {
                    const e = _.resetDevices();
                    n("responsive.setDevices", { devices: e }, r);
                  }
                  break;
                case "responsive.saveView":
                  _.saveView(t.view);
                  break;
                case "responsive.saveIsFrame":
                  _.saveIsFrame(t.status);
                  break;
                case "screenshot.captureFragment":
                  D.captureFragment(r, t.data);
                  break;
                case "screenshot.captureSelectedArea":
                  D.captureSelectedArea(r, t.rect);
              }
            })(t, e)
          : (async function (e) {
              switch (e.action) {
                case "manager.getStatus":
                  try {
                    const t = await C.getStatus(e.tab_id, e.url),
                      r = await C.getSettings();
                    n("popup.setStatus", { status: t, settings: r });
                  } catch (e) {
                    console.log(e);
                  }
                  break;
                case "manager.toggleInspect":
                  C.toggleInspect(e.tab_id, e.status, !0);
                  break;
                case "manager.toggleColorEyedropper":
                  C.toggleColorEyedropper(e.tab_id, e.status, !0);
                  break;
                case "colorEyedropper.getRecents":
                  try {
                    const e = await F.getRecents();
                    n("colorEyedropper.setRecents", { recents: e });
                  } catch (e) {
                    console.log(e);
                  }
                  break;
                case "colorEyedropper.addToSaved":
                  F.addToSaved(e.color);
                  break;
                case "colorEyedropper.removeFromSaved":
                  F.removeFromSaved(e.color);
                  break;
                case "colorEyedropper.getSaved":
                  try {
                    const e = await F.getSaved();
                    n("colorEyedropper.setSaved", { saved: e });
                  } catch (e) {
                    console.log(e);
                  }
                  break;
                case "screenshot.captureFullPage":
                  D.captureFullPage(e.tab_id);
                  break;
                case "screenshot.startSelectedAreaCapture":
                  n("screenshot.startSelectedAreaCapture", {}, e.tab_id);
                  break;
                case "screenshot.captureVisibleArea":
                  D.captureVisibleArea(e.tab_id);
                  break;
                case "screenshot.captureAllTabs":
                  D.captureAllTabs();
                  break;
                case "responsive.open":
                  _.setURL(e.url),
                    chrome.tabs.create({
                      url: chrome.runtime.getURL("responsive.html"),
                    });
                  break;
                case "settings.open":
                  chrome.tabs.create({
                    url: chrome.runtime.getURL("settings.html"),
                  });
                  break;
                case "tab.open":
                  chrome.tabs.create({ url: e.url });
              }
            })(e);
      }),
      C.checkup(),
      chrome.contextMenus.create({
        title: "Hoverify",
        id: "hv",
        contexts: ["all"],
      }),
      chrome.contextMenus.create({
        title: "Inspector",
        parentId: "hv",
        onclick: () => q(!1),
        contexts: ["all"],
      }),
      chrome.contextMenus.create({
        title: "Color Eyedropper",
        parentId: "hv",
        onclick: () => z(!1),
        contexts: ["all"],
      }),
      chrome.contextMenus.create({
        title: "Open in Responsive",
        parentId: "hv",
        onclick: () => H(!1),
        contexts: ["all"],
      }),
      chrome.contextMenus.create({
        title: "Take Screenshot",
        parentId: "hv",
        onclick: () => J(!1, "full-page"),
        contexts: ["all"],
      }),
      chrome.commands.onCommand.addListener((e) => {
        switch (e) {
          case "toggle-inspector":
            q(!0);
            break;
          case "toggle-ce":
            z(!0);
            break;
          case "open-responsive":
            H(!0);
            break;
          case "capture-full-page":
            J(!0, "full-page");
            break;
          case "capture-visible-part":
            J(!0, "visible-part");
            break;
          case "capture-selected-area":
            J(!0, "selected-area");
            break;
          case "capture-all-tabs":
            J(!0, "all-tabs");
        }
      });
  },
]);

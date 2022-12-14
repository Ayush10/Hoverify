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
    var r = n(3),
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
        return a(e) && u(e.pipe);
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
        function n(n, r) {
          c(t[r]) && c(n)
            ? (t[r] = e(t[r], n))
            : c(n)
            ? (t[r] = e({}, n))
            : i(n)
            ? (t[r] = n.slice())
            : (t[r] = n);
        }
        for (var r = 0, o = arguments.length; r < o; r++) l(arguments[r], n);
        return t;
      },
      extend: function (e, t, n) {
        return (
          l(t, function (t, o) {
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
    e.exports = n(13);
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r = n(0),
        o = n(19),
        i = n(5),
        s = { "Content-Type": "application/x-www-form-urlencoded" };
      function a(e, t) {
        !r.isUndefined(e) &&
          r.isUndefined(e["Content-Type"]) &&
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
              (c = n(6)),
            c),
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
      (u.headers = { common: { Accept: "application/json, text/plain, */*" } }),
        r.forEach(["delete", "get", "head"], function (e) {
          u.headers[e] = {};
        }),
        r.forEach(["post", "put", "patch"], function (e) {
          u.headers[e] = r.merge(s);
        }),
        (e.exports = u);
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
      s = n(4),
      a = n(22),
      c = n(25),
      u = n(26),
      l = n(7);
    e.exports = function (e) {
      return new Promise(function (t, n) {
        var f = e.data,
          d = e.headers,
          p = e.responseType;
        r.isFormData(f) && delete d["Content-Type"];
        var m = new XMLHttpRequest();
        if (e.auth) {
          var h = e.auth.username || "",
            g = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          d.Authorization = "Basic " + btoa(h + ":" + g);
        }
        var v = a(e.baseURL, e.url);
        function y() {
          if (m) {
            var r =
                "getAllResponseHeaders" in m
                  ? c(m.getAllResponseHeaders())
                  : null,
              i = {
                data:
                  p && "text" !== p && "json" !== p
                    ? m.response
                    : m.responseText,
                status: m.status,
                statusText: m.statusText,
                headers: r,
                config: e,
                request: m,
              };
            o(t, n, i), (m = null);
          }
        }
        if (
          (m.open(
            e.method.toUpperCase(),
            s(v, e.params, e.paramsSerializer),
            !0
          ),
          (m.timeout = e.timeout),
          "onloadend" in m
            ? (m.onloadend = y)
            : (m.onreadystatechange = function () {
                m &&
                  4 === m.readyState &&
                  (0 !== m.status ||
                    (m.responseURL && 0 === m.responseURL.indexOf("file:"))) &&
                  setTimeout(y);
              }),
          (m.onabort = function () {
            m && (n(l("Request aborted", e, "ECONNABORTED", m)), (m = null));
          }),
          (m.onerror = function () {
            n(l("Network Error", e, null, m)), (m = null);
          }),
          (m.ontimeout = function () {
            var t = "timeout of " + e.timeout + "ms exceeded";
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              n(
                l(
                  t,
                  e,
                  e.transitional && e.transitional.clarifyTimeoutError
                    ? "ETIMEDOUT"
                    : "ECONNABORTED",
                  m
                )
              ),
              (m = null);
          }),
          r.isStandardBrowserEnv())
        ) {
          var b =
            (e.withCredentials || u(v)) && e.xsrfCookieName
              ? i.read(e.xsrfCookieName)
              : void 0;
          b && (d[e.xsrfHeaderName] = b);
        }
        "setRequestHeader" in m &&
          r.forEach(d, function (e, t) {
            void 0 === f && "content-type" === t.toLowerCase()
              ? delete d[t]
              : m.setRequestHeader(t, e);
          }),
          r.isUndefined(e.withCredentials) ||
            (m.withCredentials = !!e.withCredentials),
          p && "json" !== p && (m.responseType = e.responseType),
          "function" == typeof e.onDownloadProgress &&
            m.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            m.upload &&
            m.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              m && (m.abort(), n(e), (m = null));
            }),
          f || (f = null),
          m.send(f);
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(5);
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
      function c(e, t) {
        return r.isPlainObject(e) && r.isPlainObject(t)
          ? r.merge(e, t)
          : r.isPlainObject(t)
          ? r.merge({}, t)
          : r.isArray(t)
          ? t.slice()
          : t;
      }
      function u(o) {
        r.isUndefined(t[o])
          ? r.isUndefined(e[o]) || (n[o] = c(void 0, e[o]))
          : (n[o] = c(e[o], t[o]));
      }
      r.forEach(o, function (e) {
        r.isUndefined(t[e]) || (n[e] = c(void 0, t[e]));
      }),
        r.forEach(i, u),
        r.forEach(s, function (o) {
          r.isUndefined(t[o])
            ? r.isUndefined(e[o]) || (n[o] = c(void 0, e[o]))
            : (n[o] = c(void 0, t[o]));
        }),
        r.forEach(a, function (r) {
          r in t ? (n[r] = c(e[r], t[r])) : r in e && (n[r] = c(void 0, e[r]));
        });
      var l = o.concat(i).concat(s).concat(a),
        f = Object.keys(e)
          .concat(Object.keys(t))
          .filter(function (e) {
            return -1 === l.indexOf(e);
          });
      return r.forEach(f, u), n;
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
        (function n(a, c) {
          var u, l, f;
          for (
            l = i ? i[c] : c,
              Array.isArray(e[l]) ||
                (void 0 === e[l] ? (e[l] = []) : (e[l] = [e[l]])),
              u = 0;
            u < e[l].length;
            u++
          )
            (d = a),
              o((f = Array.isArray(d) ? [].concat(d) : r(d)), e[l][u], l),
              c >= t ? s.push(f) : n(f, c + 1);
          var d;
        })(n, 0),
        s
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
    var r = n(0),
      o = n(3),
      i = n(14),
      s = n(9);
    function a(e) {
      var t = new i(e),
        n = o(i.prototype.request, t);
      return r.extend(n, i.prototype, t), r.extend(n, t), n;
    }
    var c = a(n(2));
    (c.Axios = i),
      (c.create = function (e) {
        return a(s(c.defaults, e));
      }),
      (c.Cancel = n(10)),
      (c.CancelToken = n(29)),
      (c.isCancel = n(8)),
      (c.all = function (e) {
        return Promise.all(e);
      }),
      (c.spread = n(30)),
      (c.isAxiosError = n(31)),
      (e.exports = c),
      (e.exports.default = c);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(4),
      i = n(15),
      s = n(16),
      a = n(9),
      c = n(27),
      u = c.validators;
    function l(e) {
      (this.defaults = e),
        (this.interceptors = { request: new i(), response: new i() });
    }
    (l.prototype.request = function (e) {
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
        c.assertOptions(
          t,
          {
            silentJSONParsing: u.transitional(u.boolean, "1.0.0"),
            forcedJSONParsing: u.transitional(u.boolean, "1.0.0"),
            clarifyTimeoutError: u.transitional(u.boolean, "1.0.0"),
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
        var l = [s, void 0];
        for (
          Array.prototype.unshift.apply(l, n),
            l = l.concat(i),
            o = Promise.resolve(e);
          l.length;

        )
          o = o.then(l.shift(), l.shift());
        return o;
      }
      for (var f = e; n.length; ) {
        var d = n.shift(),
          p = n.shift();
        try {
          f = d(f);
        } catch (e) {
          p(e);
          break;
        }
      }
      try {
        o = s(f);
      } catch (e) {
        return Promise.reject(e);
      }
      for (; i.length; ) o = o.then(i.shift(), i.shift());
      return o;
    }),
      (l.prototype.getUri = function (e) {
        return (
          (e = a(this.defaults, e)),
          o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        );
      }),
      r.forEach(["delete", "get", "head", "options"], function (e) {
        l.prototype[e] = function (t, n) {
          return this.request(
            a(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
      r.forEach(["post", "put", "patch"], function (e) {
        l.prototype[e] = function (t, n, r) {
          return this.request(a(r || {}, { method: e, url: t, data: n }));
        };
      }),
      (e.exports = l);
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
      i = n(8),
      s = n(2);
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
      o = n(2);
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
    var c,
      u = [],
      l = !1,
      f = -1;
    function d() {
      l &&
        c &&
        ((l = !1), c.length ? (u = c.concat(u)) : (f = -1), u.length && p());
    }
    function p() {
      if (!l) {
        var e = a(d);
        l = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++f < t; ) c && c[f].run();
          (f = -1), (t = u.length);
        }
        (c = null),
          (l = !1),
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
    function m(e, t) {
      (this.fun = e), (this.array = t);
    }
    function h() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      u.push(new m(e, t)), 1 !== u.length || l || a(p);
    }),
      (m.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = h),
      (o.addListener = h),
      (o.once = h),
      (o.off = h),
      (o.removeListener = h),
      (o.removeAllListeners = h),
      (o.emit = h),
      (o.prependListener = h),
      (o.prependOnceListener = h),
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
    var r = n(7);
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
                c = void 0 === a || s(a, i, e);
              if (!0 !== c)
                throw new TypeError("option " + i + " must be " + c);
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
    var r = n(10);
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
    const c = {
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
    function u(e) {
      return Array.isArray(e)
        ? e.filter((e) => {
            return (t = o), (n = e), Object.values(t).includes(n);
            var t, n;
          })
        : [];
    }
    function l(e) {
      return e instanceof RegExp;
    }
    function f(e) {
      return ["string", "function"].includes(typeof e) || l(e);
    }
    function d(e) {
      return Array.isArray(e) ? e.filter(f) : [];
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
    function m(e, t) {
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
    function h(e) {
      return "number" == typeof e ? e : Number.POSITIVE_INFINITY;
    }
    function g(e = []) {
      const [t = [], ...n] = e;
      return 0 === n.length
        ? t
        : n.reduce((e, t) => e.filter((e) => t.includes(e)), t);
    }
    function v(e) {
      return [].concat(...e);
    }
    function y(e) {
      const t = e.map((e) => {
        if (l(e)) return (t) => e.test(t);
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
    function b(e, t, n) {
      const r = Array.from(m(n, e[0]).querySelectorAll(t));
      return r.length === e.length && e.every((e) => r.includes(e));
    }
    function w(e, t) {
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
    function E(e, t) {
      return g(e.map((e) => w(e, t)));
    }
    const x = {
        [r.NONE]: { type: r.NONE, value: "" },
        [r.DESCENDANT]: { type: r.DESCENDANT, value: " > " },
        [r.CHILD]: { type: r.CHILD, value: " " },
      },
      S = new RegExp(["^$", "\\s", "^\\d"].join("|")),
      A = new RegExp(["^$", "^\\d"].join("|")),
      _ = [o.nthoftype, o.tag, o.id, o.class, o.attribute, o.nthchild];
    var N = n(11),
      k = n.n(N);
    const j = y(["class", "id", "ng-*"]);
    function O({ nodeName: e }) {
      return `[${e}]`;
    }
    function T({ nodeName: e, nodeValue: t }) {
      return `[${e}='${$(t)}']`;
    }
    function C({ nodeName: e }) {
      return !j(e);
    }
    function B(e) {
      const t = Array.from(e.attributes).filter(C);
      return [...t.map(O), ...t.map(T)];
    }
    function I(e) {
      return (e.getAttribute("class") || "")
        .trim()
        .split(/\s+/)
        .filter((e) => !A.test(e))
        .map((e) => "." + $(e));
    }
    function P(e) {
      const t = e.getAttribute("id") || "",
        n = "#" + $(t),
        r = e.getRootNode({ composed: !1 });
      return !S.test(t) && b([e], n, r) ? [n] : [];
    }
    function L(e) {
      const t = e.parentNode;
      if (t) {
        const n = Array.from(t.childNodes).filter(s).indexOf(e);
        if (n > -1) return [`:nth-child(${n + 1})`];
      }
      return [];
    }
    function R(e) {
      return [$(e.tagName.toLowerCase())];
    }
    function D(e) {
      const t = [...new Set(v(e.map(R)))];
      return 0 === t.length || t.length > 1 ? [] : [t[0]];
    }
    function M(e) {
      const t = D([e])[0],
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
        o = F(1);
      for (; o.length <= e.length && r < t; )
        (r += 1), n.push(o.map((t) => e[t])), (o = q(o, e.length - 1));
      return n;
    }
    function q(e = [], t = 0) {
      const n = e.length;
      if (0 === n) return [];
      const r = [...e];
      r[n - 1] += 1;
      for (let e = n - 1; e >= 0; e--)
        if (r[e] > t) {
          if (0 === e) return F(n + 1);
          r[e - 1]++, (r[e] = r[e - 1] + 1);
        }
      return r[n - 1] > t ? F(n + 1) : r;
    }
    function F(e = 1) {
      return Array.from(Array(e).keys());
    }
    const H = ":".charCodeAt(0).toString(16).toUpperCase(),
      z = /[ !"#$%&'()\[\]{|}<>*+,./;=?@^`~\\]/;
    function $(e = "") {
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
                  ? `\\${H} `
                  : z.test(e)
                  ? "\\" + e
                  : escape(e).replace(/%/g, "\\")
              )
              .join("");
          })(e);
    }
    const V = {
        tag: D,
        id: function (e) {
          return 0 === e.length || e.length > 1 ? [] : P(e[0]);
        },
        class: function (e) {
          return g(e.map(I));
        },
        attribute: function (e) {
          return g(e.map(B));
        },
        nthchild: function (e) {
          return g(e.map(L));
        },
        nthoftype: function (e) {
          return g(e.map(M));
        },
      },
      J = { tag: R, id: P, class: I, attribute: B, nthchild: L, nthoftype: M };
    function W(e, t, n) {
      const r = v(
        (function (e, t) {
          return (function (e) {
            const {
                selectors: t,
                combineBetweenSelectors: n,
                includeTag: r,
                maxCandidates: o,
              } = e,
              i = n ? U(t, { maxResults: o }) : t.map((e) => [e]);
            return r ? i.map(G) : i;
          })(t)
            .map((t) =>
              (function (e, t) {
                const n = {};
                e.forEach((e) => {
                  const r = t[e];
                  r.length > 0 && (n[e] = r);
                });
                return k()(n).map(X);
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
                    return (null !== (n = V[t]) && void 0 !== n ? n : () => [])(
                      e
                    );
                  })(e, n),
                  s,
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
    function G(e) {
      return e.includes(o.tag) || e.includes(o.nthoftype)
        ? [...e]
        : [...e, o.tag];
    }
    function X(e = {}) {
      const t = [..._];
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
      })(W(e, r.root, r), n);
      for (const t of o) if (b(e, t, r.root)) return t;
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
              return J[t](e);
            })(e, t).map(K)
          );
        }),
        { element: e, operator: x[n], selectors: o }
      );
    }
    function Q({ selectors: e, operator: t }) {
      let n = [..._];
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
        ...w(e)
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
          const n = Object.assign(Object.assign({}, c), t);
          return {
            selectors: u(n.selectors),
            whitelist: d(n.whitelist),
            blacklist: d(n.blacklist),
            root: m(n.root, e),
            combineWithinSelector: !!n.combineWithinSelector,
            combineBetweenSelectors: !!n.combineBetweenSelectors,
            includeTag: !!n.includeTag,
            maxCombinations: h(n.maxCombinations),
            maxCandidates: h(n.maxCandidates),
          };
        })(r[0], n);
      let i = "",
        a = o.root;
      function l() {
        return (function (e, t, n = "", r) {
          if (0 === e.length) return null;
          const o = [e.length > 1 ? e : [], ...E(e, t).map((e) => [e])];
          for (const e of o) {
            const t = Y(e, 0, n, r);
            if (t) return { foundElements: e, selector: t };
          }
          return null;
        })(r, a, i, o);
      }
      let f = l();
      for (; f; ) {
        const { foundElements: e, selector: t } = f;
        if (b(r, t, o.root)) return t;
        (a = e[0]), (i = t), (f = l());
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
    var re = (e, t, n) => {
        t || (t = {}),
          (t.action = e),
          n ? chrome.tabs.sendMessage(n, t) : chrome.runtime.sendMessage(t);
      },
      oe = n(1),
      ie = n.n(oe);
    function se(e, t) {
      let n,
        r,
        o,
        i,
        s,
        a = 0,
        c = 0;
      for (a = 0; a < t.length; a += 1)
        if (((n = new RegExp(t[a].value, "i")), (o = n.test(e)), o)) {
          if (
            ((r = new RegExp(t[a].version + "[- /:;]([\\d._]+)", "i")),
            (i = e.match(r)),
            (s = ""),
            i && i[1] && (i = i[1]),
            i)
          )
            for (i = i.split(/[._]+/), c = 0; c < i.length; c += 1)
              s += 0 === c ? i[c] + "." : i[c];
          else s = "0";
          return { name: t[a].name, version: parseFloat(s) };
        }
      return { name: "unknown", version: 0 };
    }
    const ae = [
      navigator.platform,
      navigator.userAgent,
      navigator.appVersion,
      navigator.vendor,
      window.opera,
    ].join(" ");
    var ce = {
      os: se(ae, [
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
      browser: se(ae, [
        { name: "Chrome", value: "Chrome", version: "Chrome" },
        { name: "Firefox", value: "Firefox", version: "Firefox" },
        { name: "Safari", value: "Safari", version: "Version" },
        { name: "Internet Explorer", value: "MSIE", version: "MSIE" },
        { name: "Opera", value: "Opera", version: "Opera" },
        { name: "BlackBerry", value: "CLDC", version: "CLDC" },
        { name: "Mozilla", value: "Mozilla", version: "Mozilla" },
      ]),
    };
    const ue = "https://rear.tryhoverify.com/api/app";
    var le = async (e) => {
        const t = { Authorization: "Bearer " + e };
        try {
          const { data: e } = await ie.a.post(
            ue + "/deactivate",
            {},
            { headers: t }
          );
          if (":)" === e.status) return !0;
          throw new Error(e.error.message);
        } catch (e) {
          throw e;
        }
      },
      fe = async (e) => {
        const t = { Authorization: "Bearer " + e };
        try {
          const { data: e } = await ie.a.get(ue + "/device_name", {
            headers: t,
          });
          return ":)" === e.status
            ? e.data.device_name
            : (console.log(e.error.message), "");
        } catch (e) {
          throw e;
        }
      },
      de = async (e, t) => {
        const n = { Authorization: "Bearer " + t },
          r = { device_name: e };
        try {
          const { data: e } = await ie.a.post(ue + "/change_device_name", r, {
            headers: n,
          });
          if (":)" === e.status) return !0;
          throw new Error(e.error.message);
        } catch (e) {
          throw e;
        }
      };
    var pe = (e) =>
        new Promise((t, n) => {
          chrome.storage.local.set(e, () => {
            chrome.runtime.lastError
              ? n(Error(chrome.runtime.lastError.message))
              : t();
          });
        }),
      me = (e) =>
        new Promise((t, n) => {
          chrome.storage.local.get(e, (e) => {
            chrome.runtime.lastError
              ? n(Error(chrome.runtime.lastError.message))
              : t(e);
          });
        });
    var he = async (e) => {
        try {
          await pe(e);
        } catch (e) {
          return console.log(e), e;
        }
      },
      ge = async (e) => {
        try {
          return (await me(e))[e];
        } catch (e) {
          return e;
        }
      };
    var ve =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    const ye = document.querySelectorAll(".toggle"),
      be = document.querySelectorAll(".checkbox"),
      we = chrome.runtime.getManifest();
    function Ee(e, t) {
      t || void 0 === t
        ? (e.setAttribute("active", "true"),
          (e.querySelector(".checkmark").innerHTML = ve))
        : (e.setAttribute("active", "false"),
          (e.querySelector(".checkmark").innerHTML = ""));
    }
    document.getElementById("version").innerHTML = "Version " + we.version;
    for (const e of be)
      e.addEventListener("click", () => {
        const t = e.getAttribute("active");
        Ee(e, !("true" === t));
      });
    for (const e of ye)
      e.addEventListener("click", () => {
        "true" === e.getAttribute("active")
          ? e.setAttribute("active", "false")
          : e.setAttribute("active", "true");
      });
    function xe(e, t) {
      t
        ? ((e.loading = !0),
          (e.querySelector(".loader").style.display = "block"),
          (e.querySelector("span").style.display = "none"))
        : ((e.loading = !1),
          (e.querySelector(".loader").style.display = "none"),
          (e.querySelector("span").style.display = "block"));
    }
    document.getElementById("open_shortcuts").addEventListener("click", () => {
      "Firefox" === ce.browser.name
        ? chrome.tabs.create({
            url: "https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox",
          })
        : chrome.tabs.create({ url: "chrome://extensions/shortcuts" });
    });
    const Se = {
        inspector: document.getElementById("tools_inspector"),
        color_eyedropper: document.getElementById("tools_color_eyedropper"),
        assets: document.getElementById("tools_assets"),
        responsive: document.getElementById("tools_responsive"),
        debug: document.getElementById("tools_debug"),
        built_with: document.getElementById("tools_built_with"),
        screenshot: document.getElementById("tools_screenshot"),
      },
      Ae = {
        pseudo: document.getElementById("view_pseudo"),
        html_attribs: document.getElementById("view_html_attribs"),
        media: document.getElementById("view_media"),
        animations: document.getElementById("view_animations"),
      },
      _e = {
        pseudo: document.getElementById("copy_pseudo"),
        outer_html: document.getElementById("copy_outer_html"),
        inner_html: document.getElementById("copy_inner_html"),
        media: document.getElementById("copy_media"),
        animations: document.getElementById("copy_animations"),
      },
      Ne = document.getElementById("shortcuts"),
      ke = document.getElementById("mode"),
      je = document.getElementById("trash_persist_changes"),
      Oe = document.getElementById("hot_reload"),
      Te = document.getElementById("inject_iframes"),
      Ce = document.getElementById("zoom"),
      Be = document.getElementById("sort_by"),
      Ie = document.getElementById("device_name"),
      Pe = document.getElementById("apply"),
      Le = document.getElementById("deactivate"),
      Re = document.getElementById("export_settings"),
      De = document.getElementById("import_settings");
    function Me() {
      if ("" === Ce.value) Ce.value = "";
      else {
        const e = parseFloat(Ce.value);
        isNaN(e) || e < 5 ? (Ce.value = 5) : (Ce.value = e > 15 ? 15 : e);
      }
    }
    Ce.addEventListener("blur", () => {
      Me();
    }),
      Pe.addEventListener("click", async () => {
        Me(),
          ["None", "Name", "Size"].includes(Be.value) || (Be.value = "None"),
          xe(Pe, !0);
        const e = {
          tools: {
            inspector: "true" === Se.inspector.getAttribute("active"),
            color_eyedropper:
              "true" === Se.color_eyedropper.getAttribute("active"),
            assets: "true" === Se.assets.getAttribute("active"),
            responsive: "true" === Se.responsive.getAttribute("active"),
            debug: "true" === Se.debug.getAttribute("active"),
            built_with: "true" === Se.built_with.getAttribute("active"),
            screenshot: "true" === Se.screenshot.getAttribute("active"),
          },
          inspector: {
            default_mode: ke.value,
            view: {
              pseudo: "true" === Ae.pseudo.getAttribute("active"),
              html_attribs: "true" === Ae.html_attribs.getAttribute("active"),
              media: "true" === Ae.media.getAttribute("active"),
              animations: "true" === Ae.animations.getAttribute("active"),
            },
            copy: {
              pseudo: "true" === _e.pseudo.getAttribute("active"),
              outer_html: "true" === _e.outer_html.getAttribute("active"),
              inner_html: "true" === _e.inner_html.getAttribute("active"),
              media: "true" === _e.media.getAttribute("active"),
              animations: "true" === _e.animations.getAttribute("active"),
            },
            trash_persist_changes: "true" === je.getAttribute("active"),
            hot_reload: "true" === Oe.getAttribute("active"),
            inject_iframes: "true" === Te.getAttribute("active"),
          },
          color_eyedropper: { zoom: parseFloat(Ce.value) },
          assets: { sort_by: Be.value },
          shortcuts: "true" === Ne.getAttribute("active"),
        };
        re("manager.setSettings", { settings: e });
        try {
          if (
            !(await (async function () {
              if (!Ie.value) return !1;
              try {
                const e = await ge("token");
                return (
                  await de(Ie.value, e), await he({ device_name: Ie.value }), !0
                );
              } catch (e) {
                throw e;
              }
            })())
          )
            return alert("Device name cannot be empty!"), void xe(Pe, !1);
        } catch (e) {
          return alert(e.message), void xe(Pe, !1);
        }
        xe(Pe, !1), alert("Settings applied!");
      }),
      Le.addEventListener("click", async () => {
        xe(Le, !0);
        try {
          const e = await ge("token");
          (await le(e)) && re("manager.deactivate", {}),
            xe(Le, !1),
            window.close();
        } catch (e) {
          console.log(e), alert("Something went wrong!"), xe(Le, !1);
        }
      }),
      De.addEventListener("click", () => {
        const e = ne.create("<input type='file' accept='.hv'/>");
        e.addEventListener("change", (e) => {
          const t = e.target.files[0],
            n = new FileReader();
          (n.onload = (e) => {
            re("manager.importSettings", { data: e.target.result });
          }),
            n.readAsText(t);
        }),
          e.click();
      }),
      Re.addEventListener("click", () => {
        re("manager.exportSettings", {});
      }),
      chrome.runtime.onMessage.addListener((e) => {
        switch (e.action) {
          case "settings.set":
            !(function (e) {
              Ee(Se.inspector, e.tools.inspector),
                Ee(Se.color_eyedropper, e.tools.color_eyedropper),
                Ee(Se.assets, e.tools.assets),
                Ee(Se.responsive, e.tools.responsive),
                Ee(Se.debug, e.tools.debug),
                Ee(Se.built_with, e.tools.built_with),
                "Firefox" === ce.browser.name
                  ? (Se.screenshot.style.display = "none")
                  : Ee(Se.screenshot, e.tools.screenshot),
                Ne.setAttribute("active", e.shortcuts ? "true" : "false");
              const t = e.inspector;
              "Selector" === t.default_mode
                ? (ke.value = "Selector")
                : (ke.value = "Computed"),
                Ee(Ae.pseudo, t.view.pseudo),
                Ee(Ae.html_attribs, t.view.html_attribs),
                Ee(Ae.media, t.view.media),
                Ee(Ae.animations, t.view.animations),
                Ee(_e.pseudo, t.copy.pseudo),
                Ee(_e.outer_html, t.copy.outer_html),
                Ee(_e.inner_html, t.copy.inner_html),
                Ee(_e.media, t.copy.media),
                Ee(_e.animations, t.copy.animations),
                je.setAttribute(
                  "active",
                  t.trash_persist_changes ? "true" : "false"
                ),
                Oe.setAttribute("active", t.hot_reload ? "true" : "false"),
                inject_iframes.setAttribute(
                  "active",
                  t.inject_iframes ? "true" : "false"
                );
              const n = e.color_eyedropper;
              Ce.value = n ? n.zoom : 5;
              const r = e.assets;
              Be.value = r ? r.sort_by : "None";
            })(e.settings);
            break;
          case "settings.export":
            ne.create(
              `\n\t\t\t\t<a href='data:text/plain;charset=utf-8,${encodeURIComponent(
                e.data
              )}' download='hoverify.hv'></a>\n\t\t\t`
            ).click();
            break;
          case "settings.showMessage":
            alert(e.text);
        }
      }),
      (async function () {
        try {
          const e = await ge("device_name");
          e && (Ie.value = e);
          const t = await ge("token"),
            n = await fe(t);
          n && ((Ie.value = n), he({ device_name: n }));
        } catch (e) {
          console.log(e);
        }
      })(),
      re("manager.getSettings", {});
  },
]);

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
    r((r.s = 0));
})([
  function (e, t, r) {
    "use strict";
    r.r(t);
    var n = (e, t, r) => {
      t || (t = {}),
        (t.action = e),
        r ? chrome.tabs.sendMessage(r, t) : chrome.runtime.sendMessage(t);
    };
    let o = -1;
    document
      .getElementById("capture_full_page")
      .addEventListener("click", () => {
        -1 !== o &&
          (n("screenshot.captureFullPage", { tab_id: o }), window.close());
      }),
      document
        .getElementById("capture_selected_area")
        .addEventListener("click", () => {
          -1 !== o &&
            (n("screenshot.startSelectedAreaCapture", { tab_id: o }),
            window.close());
        }),
      document
        .getElementById("capture_visible_part")
        .addEventListener("click", () => {
          -1 !== o &&
            (n("screenshot.captureVisibleArea", { tab_id: o }), window.close());
        }),
      document
        .getElementById("capture_all_tabs")
        .addEventListener("click", () => {
          n("screenshot.captureAllTabs", {}), window.close();
        }),
      chrome.tabs.query({ active: !0, currentWindow: !0 }, (e) => {
        o = e[0].id;
      });
  },
]);

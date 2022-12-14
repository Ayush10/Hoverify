!(function (e) {
  var n = {};
  function t(s) {
    if (n[s]) return n[s].exports;
    var o = (n[s] = { i: s, l: !1, exports: {} });
    return e[s].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, s) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: s });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (t.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var o in e)
          t.d(
            s,
            o,
            function (n) {
              return e[n];
            }.bind(null, o)
          );
      return s;
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = ""),
    t((t.s = 0));
})([
  function (e, n, t) {
    "use strict";
    t.r(n);
    var s = (e, n, t) => {
      n || (n = {}),
        (n.action = e),
        t ? chrome.tabs.sendMessage(t, n) : chrome.runtime.sendMessage(n);
    };
    function o(e, n) {
      let t,
        s,
        o,
        a,
        r,
        i = 0,
        l = 0;
      for (i = 0; i < n.length; i += 1)
        if (((t = new RegExp(n[i].value, "i")), (o = t.test(e)), o)) {
          if (
            ((s = new RegExp(n[i].version + "[- /:;]([\\d._]+)", "i")),
            (a = e.match(s)),
            (r = ""),
            a && a[1] && (a = a[1]),
            a)
          )
            for (a = a.split(/[._]+/), l = 0; l < a.length; l += 1)
              r += 0 === l ? a[l] + "." : a[l];
          else r = "0";
          return { name: n[i].name, version: parseFloat(r) };
        }
      return { name: "unknown", version: 0 };
    }
    const a = [
      navigator.platform,
      navigator.userAgent,
      navigator.appVersion,
      navigator.vendor,
      window.opera,
    ].join(" ");
    o(a, [
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
    var r = o(a, [
      { name: "Chrome", value: "Chrome", version: "Chrome" },
      { name: "Firefox", value: "Firefox", version: "Firefox" },
      { name: "Safari", value: "Safari", version: "Version" },
      { name: "Internet Explorer", value: "MSIE", version: "MSIE" },
      { name: "Opera", value: "Opera", version: "Opera" },
      { name: "BlackBerry", value: "CLDC", version: "CLDC" },
      { name: "Mozilla", value: "Mozilla", version: "Mozilla" },
    ]);
    const i = document.getElementById("inspect"),
      l = document.getElementById("color_eyedropper"),
      u = document.getElementById("assets"),
      d = document.getElementById("responsive"),
      c = document.getElementById("built_with"),
      p = document.getElementById("screenshot"),
      v = document.getElementById("debug"),
      m = {
        tabId: null,
        url: null,
        inspect: !1,
        color_eyedropper: !1,
        current_page: "home",
        status: {},
      };
    function y(e, n) {
      n ? e.classList.add("active") : e.classList.remove("active");
    }
    document.getElementById("settings").addEventListener("click", () => {
      s("settings.open", {});
    }),
      document.getElementById("responsive").addEventListener("click", () => {
        s("responsive.open", { url: m.url });
      }),
      "Firefox" === r.name && (p.style.display = "none"),
      chrome.runtime.onMessage.addListener((e, n, t) => {
        switch (e.action) {
          case "popup.setStatus": {
            const n = e.status;
            null !== n
              ? (!(function (e) {
                  const n = e.tools;
                  n.inspector
                    ? (i.style.display = "flex")
                    : (i.style.display = "none"),
                    n.color_eyedropper
                      ? (l.style.display = "flex")
                      : (l.style.display = "none"),
                    n.assets
                      ? (u.style.display = "flex")
                      : (u.style.display = "none"),
                    n.responsive
                      ? (d.style.display = "flex")
                      : (d.style.display = "none"),
                    n.debug
                      ? (v.style.display = "flex")
                      : (v.style.display = "none"),
                    n.built_with
                      ? (c.style.display = "flex")
                      : (c.style.display = "none"),
                    n.screenshot
                      ? (p.style.display = "flex")
                      : (p.style.display = "none");
                })(e.settings),
                n
                  ? ((m.status = n),
                    y(i, m.status.inspect),
                    i.addEventListener("click", (e) => {
                      (m.status.inspect = !m.status.inspect),
                        s(
                          "manager.toggleInspect",
                          { tab_id: m.tab_id, status: m.status.inspect },
                          null
                        ),
                        y(i, m.status.inspect),
                        m.status.inspect && window.close();
                    }),
                    y(l, m.status.color_eyedropper))
                  : (i.classList.add("disable"),
                    u.classList.add("disable"),
                    (i.style.pointerEvents = "none"),
                    (u.style.pointerEvents = "none")))
              : window.close();
          }
        }
      }),
      chrome.tabs.query({ active: !0, currentWindow: !0 }, (e) => {
        (m.tab_id = e[0].id),
          (m.url = e[0].url),
          s("manager.getStatus", { tab_id: m.tab_id, url: m.url });
      });
  },
]);

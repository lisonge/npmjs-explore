// ==UserScript==
// @name         npmjs-explore
// @name:zh      npmjs文件查看
// @namespace    https://github.com/lisonge
// @version      1.0.1
// @author       lisonge
// @description  npmjs-explore/npmjs文件查看
// @license      ISC
// @icon         https://i.songe.li/favicon.svg
// @homepage     https://github.com/lisonge/npmjs-explore#readme
// @homepageURL  https://github.com/lisonge/npmjs-explore#readme
// @source       https://github.com/lisonge/npmjs-explore.git
// @supportURL   https://github.com/lisonge/npmjs-explore/issues
// @match        https://www.npmjs.com/package/*
// @require      https://cdn.jsdelivr.net/npm/preact@10.8.1/dist/preact.min.js
// ==/UserScript==

// use vite-plugin-monkey@0.2.13 at 2022-06-22T08:04:16.438Z

(function(require$$0) {
  var _a;
  "use strict";
  function _interopDefaultLegacy(e2) {
    return e2 && typeof e2 === "object" && "default" in e2 ? e2 : { "default": e2 };
  }
  var require$$0__default = /* @__PURE__ */ _interopDefaultLegacy(require$$0);
  var jsxs$1;
  var jsx$1;
  var r = require$$0__default["default"], _ = 0;
  function e(e2, o, n, t, l) {
    var u, f, i = {};
    for (f in o)
      f == "ref" ? u = o[f] : i[f] = o[f];
    var p = { type: e2, props: i, key: n, ref: u, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_, __source: l, __self: t };
    if (typeof e2 == "function" && (u = e2.defaultProps))
      for (f in u)
        i[f] === void 0 && (i[f] = u[f]);
    return r.options.vnode && r.options.vnode(p), p;
  }
  r.Fragment, jsx$1 = e, jsxs$1 = e;
  const jsx = jsx$1;
  const jsxs = jsxs$1;
  const list = location.pathname.split("/");
  const packageName = list[2];
  const version = (_a = list[4]) != null ? _a : "latest";
  const jsdelivrUrl = `https://cdn.jsdelivr.net/npm/${packageName}@${version}/`;
  const unpkgUrl = `https://unpkg.com/browse/${packageName}@${version}/`;
  const App = jsxs("div", {
    style: {
      marginLeft: "20px"
    },
    children: [jsx("a", {
      href: jsdelivrUrl,
      title: jsdelivrUrl,
      target: "_blank",
      style: {
        color: "#bb2e3e",
        textDecoration: "none"
      },
      children: "jsdelivr"
    }), jsx("span", {
      style: {
        display: "inline-block",
        width: "10px"
      }
    }), jsx("a", {
      href: unpkgUrl,
      title: unpkgUrl,
      target: "_blank",
      style: {
        color: "#bb2e3e",
        textDecoration: "none"
      },
      children: "unpkg"
    })]
  });
  (() => {
    var _a2;
    const box = (_a2 = document.querySelector(`span[title="${packageName}"]`)) == null ? void 0 : _a2.parentElement;
    if (!box)
      return;
    const container = document.createElement("div");
    box.appendChild(container);
    require$$0.render(App, container);
  })();
})(preact);
 

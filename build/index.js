var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/home/h/Documents/webdev/rtwg@latest/frontend/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-XNQ6DKWR.css";

// app/components/navbar.tsx
init_react();
var import_react2 = __toModule(require("react"));
var import_hi = __toModule(require("react-icons/hi"));

// app/components/navlist.tsx
init_react();
var import_remix2 = __toModule(require_remix());
function NavList() {
  let activeStyle = {
    textDecoration: "font-bold"
  };
  let activeClassName = "font-bold";
  return /* @__PURE__ */ React.createElement("div", {
    className: "space-x-12"
  }, /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "#home",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "Home"), /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "#about",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, "About"), /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "#how-i-work",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, "How I Work"), /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "#blog",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, "Blog"));
}

// app/components/braincog.tsx
init_react();
var import_react = __toModule(require("react"));
function Icon() {
  return /* @__PURE__ */ import_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6 fill-[#FFD553] mr-2 animate-spin-slow",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    d: "M229.875 113.14c-15.91 0-29.907 10.716-34.04 26.06l-3.079 11.434-12.402-.358c-.245-.009-.491-.02-.738-.02-23.27 0-42.201 18.932-42.201 42.201 0 4.192.616 8.34 1.832 12.327l3.651 11.976-11.13 5.733c-14.138 7.282-22.921 21.665-22.921 37.534 0 15.868 8.783 30.251 22.921 37.534l11.13 5.734-3.651 11.976a42.236 42.236 0 00-1.832 12.325c0 23.27 18.931 42.201 42.201 42.201 1.002 0 13.841-.985 13.841-.985l4.38 9.51c5.747 12.478 18.322 20.539 32.038 20.539 6.134 0 11.125-4.99 11.125-11.124V124.264c0-6.134-4.99-11.124-11.125-11.124zm-19.934 132.596c-9.065 0-16.44 7.376-16.44 16.441s7.375 16.44 16.44 16.44v30c-25.607 0-46.44-20.833-46.44-46.44s20.833-46.441 46.44-46.441zM380.231 222.492l-11.131-5.733 3.652-11.977a42.222 42.222 0 001.831-12.326c0-23.27-18.932-42.201-42.201-42.201-.247 0-.492.011-.737.02l-12.401.358-3.079-11.433c-4.133-15.344-18.131-26.061-34.041-26.061-6.134 0-11.124 4.99-11.124 11.124v263.473c0 6.134 4.99 11.124 11.124 11.124 13.716 0 26.292-8.062 32.037-20.538l4.38-9.511s12.84.985 13.842.985c23.27 0 42.201-18.932 42.201-42.201 0-4.194-.616-8.341-1.831-12.324l-3.652-11.977 11.131-5.734c14.138-7.283 22.921-21.665 22.921-37.534s-8.783-30.252-22.922-37.534zm-78.172 86.126v-30c9.065 0 16.44-7.375 16.44-16.44s-7.375-16.441-16.44-16.441v-30c25.607 0 46.44 20.834 46.44 46.441s-20.832 46.44-46.44 46.44z"
  }), /* @__PURE__ */ import_react.default.createElement("path", {
    d: "M512 301.084v-90.168l-44.271-19.204a218.148 218.148 0 00-15.554-37.739l25.723-38.032-81.388-81.552-38.907 26.199a218.11 218.11 0 00-36.975-14.797L301.163 0h-90.382l-19.758 47.154a218.35 218.35 0 00-34.464 14.421l-40.618-27.473-81.552 81.388 27.571 40.944a217.231 217.231 0 00-14.145 34.449L0 210.749v90.502l47.815 19.866a217.218 217.218 0 0013.944 34.051L34.103 396.06l81.387 81.552 40.681-27.394a218.321 218.321 0 0034.852 14.628L210.781 512h90.382l19.465-45.791a218.144 218.144 0 0036.571-14.594l38.858 26.282 81.554-81.388-25.647-38.087a218.24 218.24 0 0015.765-38.135zM403.951 318.03c.421 3.162.633 6.356.633 9.565 0 38.434-30.185 69.95-68.094 72.086-11.974 17.99-32.377 29.179-54.366 29.179-9.912 0-19.015-3.525-26.124-9.387-7.109 5.862-16.212 9.387-26.124 9.387-21.99 0-42.392-11.187-54.365-29.179-37.91-2.136-68.095-33.652-68.095-72.086 0-3.208.212-6.402.633-9.565-18.25-13.488-29.201-34.816-29.201-58.004s10.95-44.517 29.201-58.004a72.508 72.508 0 01-.633-9.566c0-36.806 27.682-67.268 63.32-71.658 10.566-22.629 33.514-37.658 59.14-37.658 9.912 0 19.016 3.525 26.124 9.387 7.109-5.862 16.212-9.387 26.124-9.387 25.626 0 48.574 15.03 59.141 37.658 35.639 4.391 63.319 34.853 63.319 71.658 0 3.209-.212 6.403-.633 9.566 18.251 13.487 29.201 34.815 29.201 58.004 0 23.188-10.95 44.516-29.201 58.004z"
  }));
}
var braincog_default = Icon;

// app/components/navbar.tsx
function NavBar() {
  const [showNav, setShowNav] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ import_react2.default.createElement("nav", {
    className: "md:flex justify-between max-w-7xl mx-auto items-center sticky top-0 border-b-2 border-[#ffd553]"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ import_react2.default.createElement("a", {
    href: "/",
    className: "flex items-center py-6 px-3"
  }, " ", /* @__PURE__ */ import_react2.default.createElement(braincog_default, null), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "text-xl font-black tracking-tighter text-[#FFD553]"
  }, "R\u22C5T\u22C5W\u22C5G")), showNav ? /* @__PURE__ */ import_react2.default.createElement(import_hi.HiOutlineMenuAlt3, {
    onClick: () => setShowNav(!showNav),
    className: "md:hidden block w-10 h-10 p-2 cursor-pointer text-red"
  }) : /* @__PURE__ */ import_react2.default.createElement(import_hi.HiOutlineMenuAlt2, {
    onClick: () => setShowNav(!showNav),
    className: "md:hidden block w-10 h-10 p-2 cursor-pointer text-[#FFD553]"
  })), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: (showNav ? "left-0" : "-left-full") + " fixed md:static md:hidden md:space-x-7 items-center md:bg-transparent bottom-0 top-16 w-11/12 md:w-auto space-y-5 md:space-y-0 p-12 transition-left ease-in-out duration-300"
  }), /* @__PURE__ */ import_react2.default.createElement(NavList, null), /* @__PURE__ */ import_react2.default.createElement("button", {
    className: "m-2 p-3 bg-base3 text-base03 font-bold border rounded"
  }, "HIRE ME"));
}

// route-module:/home/h/Documents/webdev/rtwg@latest/frontend/app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
var meta = () => {
  return { title: "R\u22C5T\u22C5W\u22C5G" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(NavBar, null), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route-module:/home/h/Documents/webdev/rtwg@latest/frontend/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default
});
init_react();
function about_default() {
  return /* @__PURE__ */ React.createElement("h1", null, "About \u2026");
}

// route-module:/home/h/Documents/webdev/rtwg@latest/frontend/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "h-40",
    id: "hero"
  }, "HERO"), /* @__PURE__ */ React.createElement("section", {
    className: "h-40",
    id: "clients"
  }, "CLIENTS"), /* @__PURE__ */ React.createElement("section", {
    className: "h-40",
    id: "testimonials"
  }, "TESTIMONIALS"), /* @__PURE__ */ React.createElement("section", {
    className: "h-40",
    id: "how-i-work"
  }, "HOW I WORK"), /* @__PURE__ */ React.createElement("section", {
    className: "h-40",
    id: "about"
  }, "ABOUT ME"), /* @__PURE__ */ React.createElement("section", {
    className: "h-40",
    id: "blog"
  }, "BLOG & NEWSLETTER"), /* @__PURE__ */ React.createElement("section", {
    className: "h-40",
    id: "hire-me"
  }, "HIRE ME!"));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2gvRG9jdW1lbnRzL3dlYmRldi9ydHdnQGxhdGVzdC9mcm9udGVuZC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9uYXZsaXN0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9icmFpbmNvZy50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2gvRG9jdW1lbnRzL3dlYmRldi9ydHdnQGxhdGVzdC9mcm9udGVuZC9hcHAvcm91dGVzL2Fib3V0LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvaC9Eb2N1bWVudHMvd2ViZGV2L3J0d2dAbGF0ZXN0L2Zyb250ZW5kL2FwcC9yb3V0ZXMvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS9oL0RvY3VtZW50cy93ZWJkZXYvcnR3Z0BsYXRlc3QvZnJvbnRlbmQvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvaC9Eb2N1bWVudHMvd2ViZGV2L3J0d2dAbGF0ZXN0L2Zyb250ZW5kL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9oL0RvY3VtZW50cy93ZWJkZXYvcnR3Z0BsYXRlc3QvZnJvbnRlbmQvYXBwL3JvdXRlcy9hYm91dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL2hvbWUvaC9Eb2N1bWVudHMvd2ViZGV2L3J0d2dAbGF0ZXN0L2Zyb250ZW5kL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9hYm91dFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2Fib3V0XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYWJvdXRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90YWlsd2luZC5jc3NcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJSXHUyMkM1VFx1MjJDNVdcdTIyQzVHXCIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgSGlPdXRsaW5lTWVudUFsdDIsIEhpT3V0bGluZU1lbnVBbHQzIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XG5pbXBvcnQgTmF2SXRlbSBmcm9tIFwiLi9uYXZpdGVtXCI7XG5pbXBvcnQgTmF2TGlzdCBmcm9tIFwiLi9uYXZsaXN0XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9icmFpbmNvZ1wiO1xuaW1wb3J0IE9yZGVyQnV0dG9uIGZyb20gXCIuL29yZGVyYnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcigpIHtcbiAgY29uc3QgW3Nob3dOYXYsIHNldFNob3dOYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJtZDpmbGV4IGp1c3RpZnktYmV0d2VlbiBtYXgtdy03eGwgbXgtYXV0byBpdGVtcy1jZW50ZXIgc3RpY2t5IHRvcC0wIGJvcmRlci1iLTIgYm9yZGVyLVsjZmZkNTUzXVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICB7LyogbG9nbyBnb2VzIGhlcmUgKi99XG4gICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHktNiBweC0zXCI+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIHsvKiBmbGV4LXNocmluay0wICovfVxuICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJsYWNrIHRyYWNraW5nLXRpZ2h0ZXIgdGV4dC1bI0ZGRDU1M11cIj5cbiAgICAgICAgICAgIFJcdTIyQzVUXHUyMkM1V1x1MjJDNUdcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgICAge3Nob3dOYXYgPyAoXG4gICAgICAgICAgPEhpT3V0bGluZU1lbnVBbHQzXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TmF2KCFzaG93TmF2KX1cbiAgICAgICAgICAgIC8vIG9uQmx1cj17aGlkZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBibG9jayB3LTEwIGgtMTAgcC0yIGN1cnNvci1wb2ludGVyIHRleHQtcmVkXCJcbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxIaU91dGxpbmVNZW51QWx0MlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd05hdighc2hvd05hdil9XG4gICAgICAgICAgICAvLyBvbkJsdXI9e2hpZGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZDpoaWRkZW4gYmxvY2sgdy0xMCBoLTEwIHAtMiBjdXJzb3ItcG9pbnRlciB0ZXh0LVsjRkZENTUzXVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIChzaG93TmF2ID8gXCJsZWZ0LTBcIiA6IFwiLWxlZnQtZnVsbFwiKSArXG4gICAgICAgICAgXCIgZml4ZWQgbWQ6c3RhdGljIG1kOmhpZGRlbiBtZDpzcGFjZS14LTcgaXRlbXMtY2VudGVyIG1kOmJnLXRyYW5zcGFyZW50IGJvdHRvbS0wIHRvcC0xNiB3LTExLzEyIG1kOnctYXV0byBzcGFjZS15LTUgbWQ6c3BhY2UteS0wIHAtMTIgdHJhbnNpdGlvbi1sZWZ0IGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMFwiXG4gICAgICAgIH1cbiAgICAgID48L2Rpdj5cbiAgICAgIHsvKiBuYXZiYXIgbGlzdCBnb2VzIGhlcmUgKi99XG4gICAgICA8TmF2TGlzdCAvPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtLTIgcC0zIGJnLWJhc2UzIHRleHQtYmFzZTAzIGZvbnQtYm9sZCBib3JkZXIgcm91bmRlZFwiPlxuICAgICAgICBISVJFIE1FXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L25hdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkxpc3QoKSB7XG4gIC8vIFRoaXMgc3R5bGluZyB3aWxsIGJlIGFwcGxpZWQgdG8gYSA8TmF2TGluaz4gd2hlbiB0aGVcbiAgLy8gcm91dGUgdGhhdCBpdCBsaW5rcyB0byBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gIGxldCBhY3RpdmVTdHlsZSA9IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJmb250LWJvbGRcIixcbiAgfTtcbiAgbGV0IGFjdGl2ZUNsYXNzTmFtZSA9IFwiZm9udC1ib2xkXCI7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTEyXCI+XG4gICAgICA8TmF2TGlua1xuICAgICAgICB0bz1cIiNob21lXCJcbiAgICAgICAgc3R5bGU9eyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IGFjdGl2ZVN0eWxlIDogdW5kZWZpbmVkKX1cbiAgICAgID5cbiAgICAgICAgSG9tZVxuICAgICAgPC9OYXZMaW5rPlxuICAgICAgPE5hdkxpbmtcbiAgICAgICAgdG89XCIjYWJvdXRcIlxuICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IHVuZGVmaW5lZCl9XG4gICAgICA+XG4gICAgICAgIEFib3V0XG4gICAgICA8L05hdkxpbms+XG4gICAgICA8TmF2TGlua1xuICAgICAgICB0bz1cIiNob3ctaS13b3JrXCJcbiAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PiAoaXNBY3RpdmUgPyBhY3RpdmVDbGFzc05hbWUgOiB1bmRlZmluZWQpfVxuICAgICAgPlxuICAgICAgICBIb3cgSSBXb3JrXG4gICAgICA8L05hdkxpbms+XG4gICAgICA8TmF2TGlua1xuICAgICAgICB0bz1cIiNibG9nXCJcbiAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PiAoaXNBY3RpdmUgPyBhY3RpdmVDbGFzc05hbWUgOiB1bmRlZmluZWQpfVxuICAgICAgPlxuICAgICAgICBCbG9nXG4gICAgICA8L05hdkxpbms+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBJY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBmaWxsLVsjRkZENTUzXSBtci0yIGFuaW1hdGUtc3Bpbi1zbG93XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0yMjkuODc1IDExMy4xNGMtMTUuOTEgMC0yOS45MDcgMTAuNzE2LTM0LjA0IDI2LjA2bC0zLjA3OSAxMS40MzQtMTIuNDAyLS4zNThjLS4yNDUtLjAwOS0uNDkxLS4wMi0uNzM4LS4wMi0yMy4yNyAwLTQyLjIwMSAxOC45MzItNDIuMjAxIDQyLjIwMSAwIDQuMTkyLjYxNiA4LjM0IDEuODMyIDEyLjMyN2wzLjY1MSAxMS45NzYtMTEuMTMgNS43MzNjLTE0LjEzOCA3LjI4Mi0yMi45MjEgMjEuNjY1LTIyLjkyMSAzNy41MzQgMCAxNS44NjggOC43ODMgMzAuMjUxIDIyLjkyMSAzNy41MzRsMTEuMTMgNS43MzQtMy42NTEgMTEuOTc2YTQyLjIzNiA0Mi4yMzYgMCAwMC0xLjgzMiAxMi4zMjVjMCAyMy4yNyAxOC45MzEgNDIuMjAxIDQyLjIwMSA0Mi4yMDEgMS4wMDIgMCAxMy44NDEtLjk4NSAxMy44NDEtLjk4NWw0LjM4IDkuNTFjNS43NDcgMTIuNDc4IDE4LjMyMiAyMC41MzkgMzIuMDM4IDIwLjUzOSA2LjEzNCAwIDExLjEyNS00Ljk5IDExLjEyNS0xMS4xMjRWMTI0LjI2NGMwLTYuMTM0LTQuOTktMTEuMTI0LTExLjEyNS0xMS4xMjR6bS0xOS45MzQgMTMyLjU5NmMtOS4wNjUgMC0xNi40NCA3LjM3Ni0xNi40NCAxNi40NDFzNy4zNzUgMTYuNDQgMTYuNDQgMTYuNDR2MzBjLTI1LjYwNyAwLTQ2LjQ0LTIwLjgzMy00Ni40NC00Ni40NHMyMC44MzMtNDYuNDQxIDQ2LjQ0LTQ2LjQ0MXpNMzgwLjIzMSAyMjIuNDkybC0xMS4xMzEtNS43MzMgMy42NTItMTEuOTc3YTQyLjIyMiA0Mi4yMjIgMCAwMDEuODMxLTEyLjMyNmMwLTIzLjI3LTE4LjkzMi00Mi4yMDEtNDIuMjAxLTQyLjIwMS0uMjQ3IDAtLjQ5Mi4wMTEtLjczNy4wMmwtMTIuNDAxLjM1OC0zLjA3OS0xMS40MzNjLTQuMTMzLTE1LjM0NC0xOC4xMzEtMjYuMDYxLTM0LjA0MS0yNi4wNjEtNi4xMzQgMC0xMS4xMjQgNC45OS0xMS4xMjQgMTEuMTI0djI2My40NzNjMCA2LjEzNCA0Ljk5IDExLjEyNCAxMS4xMjQgMTEuMTI0IDEzLjcxNiAwIDI2LjI5Mi04LjA2MiAzMi4wMzctMjAuNTM4bDQuMzgtOS41MTFzMTIuODQuOTg1IDEzLjg0Mi45ODVjMjMuMjcgMCA0Mi4yMDEtMTguOTMyIDQyLjIwMS00Mi4yMDEgMC00LjE5NC0uNjE2LTguMzQxLTEuODMxLTEyLjMyNGwtMy42NTItMTEuOTc3IDExLjEzMS01LjczNGMxNC4xMzgtNy4yODMgMjIuOTIxLTIxLjY2NSAyMi45MjEtMzcuNTM0cy04Ljc4My0zMC4yNTItMjIuOTIyLTM3LjUzNHptLTc4LjE3MiA4Ni4xMjZ2LTMwYzkuMDY1IDAgMTYuNDQtNy4zNzUgMTYuNDQtMTYuNDRzLTcuMzc1LTE2LjQ0MS0xNi40NC0xNi40NDF2LTMwYzI1LjYwNyAwIDQ2LjQ0IDIwLjgzNCA0Ni40NCA0Ni40NDFzLTIwLjgzMiA0Ni40NC00Ni40NCA0Ni40NHpcIj48L3BhdGg+XG4gICAgICA8cGF0aCBkPVwiTTUxMiAzMDEuMDg0di05MC4xNjhsLTQ0LjI3MS0xOS4yMDRhMjE4LjE0OCAyMTguMTQ4IDAgMDAtMTUuNTU0LTM3LjczOWwyNS43MjMtMzguMDMyLTgxLjM4OC04MS41NTItMzguOTA3IDI2LjE5OWEyMTguMTEgMjE4LjExIDAgMDAtMzYuOTc1LTE0Ljc5N0wzMDEuMTYzIDBoLTkwLjM4MmwtMTkuNzU4IDQ3LjE1NGEyMTguMzUgMjE4LjM1IDAgMDAtMzQuNDY0IDE0LjQyMWwtNDAuNjE4LTI3LjQ3My04MS41NTIgODEuMzg4IDI3LjU3MSA0MC45NDRhMjE3LjIzMSAyMTcuMjMxIDAgMDAtMTQuMTQ1IDM0LjQ0OUwwIDIxMC43NDl2OTAuNTAybDQ3LjgxNSAxOS44NjZhMjE3LjIxOCAyMTcuMjE4IDAgMDAxMy45NDQgMzQuMDUxTDM0LjEwMyAzOTYuMDZsODEuMzg3IDgxLjU1MiA0MC42ODEtMjcuMzk0YTIxOC4zMjEgMjE4LjMyMSAwIDAwMzQuODUyIDE0LjYyOEwyMTAuNzgxIDUxMmg5MC4zODJsMTkuNDY1LTQ1Ljc5MWEyMTguMTQ0IDIxOC4xNDQgMCAwMDM2LjU3MS0xNC41OTRsMzguODU4IDI2LjI4MiA4MS41NTQtODEuMzg4LTI1LjY0Ny0zOC4wODdhMjE4LjI0IDIxOC4yNCAwIDAwMTUuNzY1LTM4LjEzNXpNNDAzLjk1MSAzMTguMDNjLjQyMSAzLjE2Mi42MzMgNi4zNTYuNjMzIDkuNTY1IDAgMzguNDM0LTMwLjE4NSA2OS45NS02OC4wOTQgNzIuMDg2LTExLjk3NCAxNy45OS0zMi4zNzcgMjkuMTc5LTU0LjM2NiAyOS4xNzktOS45MTIgMC0xOS4wMTUtMy41MjUtMjYuMTI0LTkuMzg3LTcuMTA5IDUuODYyLTE2LjIxMiA5LjM4Ny0yNi4xMjQgOS4zODctMjEuOTkgMC00Mi4zOTItMTEuMTg3LTU0LjM2NS0yOS4xNzktMzcuOTEtMi4xMzYtNjguMDk1LTMzLjY1Mi02OC4wOTUtNzIuMDg2IDAtMy4yMDguMjEyLTYuNDAyLjYzMy05LjU2NS0xOC4yNS0xMy40ODgtMjkuMjAxLTM0LjgxNi0yOS4yMDEtNTguMDA0czEwLjk1LTQ0LjUxNyAyOS4yMDEtNTguMDA0YTcyLjUwOCA3Mi41MDggMCAwMS0uNjMzLTkuNTY2YzAtMzYuODA2IDI3LjY4Mi02Ny4yNjggNjMuMzItNzEuNjU4IDEwLjU2Ni0yMi42MjkgMzMuNTE0LTM3LjY1OCA1OS4xNC0zNy42NTggOS45MTIgMCAxOS4wMTYgMy41MjUgMjYuMTI0IDkuMzg3IDcuMTA5LTUuODYyIDE2LjIxMi05LjM4NyAyNi4xMjQtOS4zODcgMjUuNjI2IDAgNDguNTc0IDE1LjAzIDU5LjE0MSAzNy42NTggMzUuNjM5IDQuMzkxIDYzLjMxOSAzNC44NTMgNjMuMzE5IDcxLjY1OCAwIDMuMjA5LS4yMTIgNi40MDMtLjYzMyA5LjU2NiAxOC4yNTEgMTMuNDg3IDI5LjIwMSAzNC44MTUgMjkuMjAxIDU4LjAwNCAwIDIzLjE4OC0xMC45NSA0NC41MTYtMjkuMjAxIDU4LjAwNHpcIj48L3BhdGg+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gPGgxPkFib3V0ICZoZWxsaXA7PC9oMT47XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaC00MFwiIGlkPVwiaGVyb1wiPlxuICAgICAgICBIRVJPXG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoLTQwXCIgaWQ9XCJjbGllbnRzXCI+XG4gICAgICAgIENMSUVOVFNcbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImgtNDBcIiBpZD1cInRlc3RpbW9uaWFsc1wiPlxuICAgICAgICBURVNUSU1PTklBTFNcbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImgtNDBcIiBpZD1cImhvdy1pLXdvcmtcIj5cbiAgICAgICAgSE9XIEkgV09SS1xuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaC00MFwiIGlkPVwiYWJvdXRcIj5cbiAgICAgICAgQUJPVVQgTUVcbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImgtNDBcIiBpZD1cImJsb2dcIj5cbiAgICAgICAgQkxPRyAmYW1wOyBORVdTTEVUVEVSXG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoLTQwXCIgaWQ9XCJoaXJlLW1lXCI+XG4gICAgICAgIEhJUkUgTUUhXG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsb0JBQW9CO0FBQUEsTUFDakQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQzVJbEM7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ3BEMUM7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDaENqQztBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksU0FBUztBQUNiLFFBQUksU0FBUztBQUNiLFFBQUksV0FBVztBQUlmLFdBQU8sS0FBSyxRQUFRLFFBQVEsU0FBVSxHQUFHO0FBQ3hDLFVBQUksTUFBTSxhQUFhLENBQUMsUUFBUSxlQUFlO0FBQUksZUFBTyxlQUFlLFNBQVMsR0FBRztBQUFBLFVBQ3BGLFlBQVk7QUFBQSxVQUNaLEtBQUssV0FBWTtBQUFFLG1CQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFHbkMsV0FBTyxLQUFLLFFBQVEsUUFBUSxTQUFVLEdBQUc7QUFDeEMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxRQUFRLGVBQWU7QUFBSSxlQUFPLGVBQWUsU0FBUyxHQUFHO0FBQUEsVUFDcEYsWUFBWTtBQUFBLFVBQ1osS0FBSyxXQUFZO0FBQUUsbUJBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUduQyxXQUFPLEtBQUssVUFBVSxRQUFRLFNBQVUsR0FBRztBQUMxQyxVQUFJLE1BQU0sYUFBYSxDQUFDLFFBQVEsZUFBZTtBQUFJLGVBQU8sZUFBZSxTQUFTLEdBQUc7QUFBQSxVQUNwRixZQUFZO0FBQUEsVUFDWixLQUFLLFdBQVk7QUFBRSxtQkFBTyxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDbkNyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBK0I7QUFDL0IsbUJBQTRCO0FBR2IsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsUUFBTSxTQUFTLGtDQUNiLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUduRCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDbEJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBT087Ozs7OztBQ1BQO0FBQUEsb0JBQWdDO0FBRWhDLGdCQUFxRDs7O0FDRnJEO0FBQUEsb0JBQXdCO0FBRVQsbUJBQW1CO0FBR2hDLE1BQUksY0FBYztBQUFBLElBQ2hCLGdCQUFnQjtBQUFBO0FBRWxCLE1BQUksa0JBQWtCO0FBQ3RCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsdUJBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILE9BQU8sQ0FBQyxFQUFFLGVBQWdCLFdBQVcsY0FBYztBQUFBLEtBQ3BELFNBR0Qsb0NBQUMsdUJBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILFdBQVcsQ0FBQyxFQUFFLGVBQWdCLFdBQVcsa0JBQWtCO0FBQUEsS0FDNUQsVUFHRCxvQ0FBQyx1QkFBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsV0FBVyxDQUFDLEVBQUUsZUFBZ0IsV0FBVyxrQkFBa0I7QUFBQSxLQUM1RCxlQUdELG9DQUFDLHVCQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFXLENBQUMsRUFBRSxlQUFnQixXQUFXLGtCQUFrQjtBQUFBLEtBQzVEO0FBQUE7OztBQ2hDUDtBQUFBLG1CQUFrQjtBQUVsQixnQkFBZ0I7QUFDZCxTQUNFLG1EQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU07QUFBQSxJQUNOLFdBQVU7QUFBQSxJQUNWLFNBQVE7QUFBQSxLQUVSLG1EQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxNQUNSLG1EQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQTtBQUFBO0FBS2QsSUFBTyxtQkFBUTs7O0FGUEEsa0JBQWtCO0FBQy9CLFFBQU0sQ0FBQyxTQUFTLGNBQWMsNEJBQVM7QUFFdkMsU0FDRSxvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FFYixvREFBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDbkIsS0FFRCxvREFBQyxrQkFBRCxPQUNBLG9EQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFxRCw0QkFJdEUsVUFDQyxvREFBQyw2QkFBRDtBQUFBLElBQ0UsU0FBUyxNQUFNLFdBQVcsQ0FBQztBQUFBLElBRTNCLFdBQVU7QUFBQSxPQUdaLG9EQUFDLDZCQUFEO0FBQUEsSUFDRSxTQUFTLE1BQU0sV0FBVyxDQUFDO0FBQUEsSUFFM0IsV0FBVTtBQUFBLE9BSWhCLG9EQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQ0csV0FBVSxXQUFXLGdCQUN0QjtBQUFBLE1BSUosb0RBQUMsU0FBRCxPQUNBLG9EQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUF3RDtBQUFBOzs7QURqQ3pFLGlCQUFpQjtBQUN0QixTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBRzlCLElBQU0sT0FBcUIsTUFBTTtBQUN0QyxTQUFPLEVBQUUsT0FBTztBQUFBO0FBR0gsZUFBZTtBQUM1QixTQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxLQUNULG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxTQUFRO0FBQUEsTUFDZCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsSUFBVyxTQUFRO0FBQUEsTUFDOUIsb0NBQUMsb0JBQUQsT0FDQSxvQ0FBQyxxQkFBRCxRQUVGLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxRQUFELE9BQ0Esb0NBQUMsc0JBQUQsT0FDQSxvQ0FBQyxpQ0FBRCxPQUNBLG9DQUFDLHVCQUFELE9BQzJDLG9DQUFDLDBCQUFEO0FBQUE7OztBSWxDbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFlLHlCQUFZO0FBQ3pCLFNBQU8sb0NBQUMsTUFBRCxNQUFJO0FBQUE7OztBQ0RiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZSxpQkFBaUI7QUFDOUIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxXQUFEO0FBQUEsSUFBUyxXQUFVO0FBQUEsSUFBTyxJQUFHO0FBQUEsS0FBTyxTQUdwQyxvQ0FBQyxXQUFEO0FBQUEsSUFBUyxXQUFVO0FBQUEsSUFBTyxJQUFHO0FBQUEsS0FBVSxZQUd2QyxvQ0FBQyxXQUFEO0FBQUEsSUFBUyxXQUFVO0FBQUEsSUFBTyxJQUFHO0FBQUEsS0FBZSxpQkFHNUMsb0NBQUMsV0FBRDtBQUFBLElBQVMsV0FBVTtBQUFBLElBQU8sSUFBRztBQUFBLEtBQWEsZUFHMUMsb0NBQUMsV0FBRDtBQUFBLElBQVMsV0FBVTtBQUFBLElBQU8sSUFBRztBQUFBLEtBQVEsYUFHckMsb0NBQUMsV0FBRDtBQUFBLElBQVMsV0FBVTtBQUFBLElBQU8sSUFBRztBQUFBLEtBQU8sc0JBR3BDLG9DQUFDLFdBQUQ7QUFBQSxJQUFTLFdBQVU7QUFBQSxJQUFPLElBQUc7QUFBQSxLQUFVO0FBQUE7OztBUGhCN0Msb0JBQWtDO0FBQzNCLElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixnQkFBZ0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsZ0JBQWdCO0FBQUEsSUFDZCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K

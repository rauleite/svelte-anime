(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key2 of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key2) && (copyDefault || key2 !== "default"))
          __defProp(target, key2, { get: () => module[key2], enumerable: !(desc = __getOwnPropDesc(module, key2)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // .svelte-kit/output/server/chunks/index-340e44b6.js
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return /* @__PURE__ */ Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  function setContext(key2, context) {
    get_current_component().$$.context.set(key2, context);
  }
  function escape(html) {
    return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
  }
  function escape_attribute_value(value) {
    return typeof value === "string" ? escape(value) : value;
  }
  function validate_component(component, name) {
    if (!component || !component.$$render) {
      if (name === "svelte:component")
        name += " this={...}";
      throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
  }
  function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
      const parent_component = current_component;
      const $$ = {
        on_destroy,
        context: new Map(context || (parent_component ? parent_component.$$.context : [])),
        on_mount: [],
        before_update: [],
        after_update: [],
        callbacks: blank_object()
      };
      set_current_component({ $$ });
      const html = fn(result, props, bindings, slots);
      set_current_component(parent_component);
      return html;
    }
    return {
      render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
        on_destroy = [];
        const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
        const html = $$render(result, props, {}, $$slots, context);
        run_all(on_destroy);
        return {
          html,
          css: {
            code: Array.from(result.css).map((css4) => css4.code).join("\n"),
            map: null
          },
          head: result.title + result.head
        };
      },
      $$render
    };
  }
  function add_attribute(name, value, boolean) {
    if (value == null || boolean && !value)
      return "";
    const assignment = boolean && value === true ? "" : `="${escape_attribute_value(value.toString())}"`;
    return ` ${name}${assignment}`;
  }
  var current_component, escaped, missing_component, on_destroy;
  var init_index_340e44b6 = __esm({
    ".svelte-kit/output/server/chunks/index-340e44b6.js"() {
      Promise.resolve();
      escaped = {
        '"': "&quot;",
        "'": "&#39;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
      };
      missing_component = {
        $$render: () => ""
      };
    }
  });

  // .svelte-kit/output/server/chunks/hooks-1c45ba0b.js
  var hooks_1c45ba0b_exports = {};
  var init_hooks_1c45ba0b = __esm({
    ".svelte-kit/output/server/chunks/hooks-1c45ba0b.js"() {
    }
  });

  // .svelte-kit/output/server/entries/pages/__layout.svelte.js
  var layout_svelte_exports = {};
  __export(layout_svelte_exports, {
    default: () => _layout
  });
  var Logo, _layout;
  var init_layout_svelte = __esm({
    ".svelte-kit/output/server/entries/pages/__layout.svelte.js"() {
      init_index_340e44b6();
      Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let { height = void 0 } = $$props;
        let { width = !height ? 40 : void 0 } = $$props;
        if (!width === !height) {
          throw new Error("It should be only width or height, but not both");
        }
        if ($$props.height === void 0 && $$bindings.height && height !== void 0)
          $$bindings.height(height);
        if ($$props.width === void 0 && $$bindings.width && width !== void 0)
          $$bindings.width(width);
        return `
<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="${"0 0 121.604 104.902"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" xmlns="${"http://www.w3.org/2000/svg"}"><defs><linearGradient xlink:href="${"#a"}" id="${"e"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"translate(165.407 63.726)"}" x1="${"-60.048"}" y1="${"-15.075"}" x2="${"-155.725"}" y2="${"-21.185"}"></linearGradient><linearGradient id="${"a"}"><stop offset="${"0"}" stop-color="${"#07d200"}"></stop><stop offset="${"1"}" stop-color="${"#56ff00"}"></stop></linearGradient><linearGradient xlink:href="${"#b"}" id="${"f"}" x1="${"-270.738"}" y1="${"-5.991"}" x2="${"-251.577"}" y2="${"-45.72"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"translate(303.545 68.64)"}"></linearGradient><linearGradient id="${"b"}"><stop offset="${"0"}" stop-color="${"#eccaee"}"></stop><stop offset="${".521"}" stop-opacity="${".478"}"></stop><stop offset="${"1"}" stop-opacity="${"0"}"></stop></linearGradient><linearGradient xlink:href="${"#c"}" id="${"g"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"translate(165.407 63.726)"}" x1="${"-187.651"}" y1="${"-74.401"}" x2="${"-20.131"}" y2="${"-42.025"}"></linearGradient><linearGradient id="${"c"}"><stop offset="${"0"}" stop-color="${"#07d200"}"></stop><stop offset="${".744"}" stop-color="${"#56ff00"}"></stop><stop offset="${"1"}" stop-color="${"#07d200"}"></stop></linearGradient><linearGradient xlink:href="${"#d"}" id="${"h"}" x1="${"-327.925"}" y1="${"-160.134"}" x2="${"-126.779"}" y2="${"-174.131"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"translate(271.415 196.238)"}"></linearGradient><linearGradient id="${"d"}"><stop offset="${"0"}" stop-color="${"#07d200"}"></stop><stop offset="${".498"}" stop-color="${"#56ff00"}"></stop><stop offset="${"1"}" stop-color="${"#07d200"}"></stop></linearGradient></defs><path d="${"M79.036 41.655c4.153.373 5.794 5.407 3.764 8.665-2.652 3.487-7.48 1.855-11.192 2.314-10.099.077-20.212-.546-30.302-.087-4.19.536-8.923 3.032-9.86 7.463 1.224 4.3 4.648 7.847 6.818 11.79a455.97 455.97 0 0 0 4.296 6.469 504.076 504.076 0 0 0 16.784 23.314c3.943 3.851 9.864 2.858 14.876 3.25 8.791.161 17.585.02 26.373-.197L86.243 83.49c9.102-.81 18.556-4.078 24.367-11.496 2.518-3.237 5.328-6.767 5.098-11.108.39-6.857-5.248-12.185-11.181-14.537-8.02-3.41-16.862-4.373-25.491-4.694z"}" fill="${"#4fbeeb"}"></path><path d="${"M82.344 41.118c-.893-.072-3.194.542-3.01.579.895.176 1.79.493 2.423 1.084.884.824 1.503 1.841 1.77 3.023.135.598.245 2.126-.078 3.03 7.75.937 18.074.227 24.882 3.884 7.74 3.603 6.83 12.244 6.83 12.244s1.448-5.91.427-8.787c-.672-2.56-2.801-4.354-4.756-5.983-5.802-4.393-12.909-6.765-20.03-7.932-2.82-.366-5.598-1.127-8.458-1.142z"}" fill-opacity="${".343"}"></path><path d="${"M.087 20.462C2.72 29.97 9.424 38.715 19.04 41.879c13.34 4.388 27.57 1.938 41.22.808 14.755-1.55 30.272-2.016 44.267 3.662 6.22 2.406 11.986 8.223 11.143 15.37-.087 1.662-1.024 5.152.004 1.727 1.96-6.057-1.665-12.094-6.198-15.89-8.832-7.26-20.3-9.313-31.346-9.441-17.297-.833-34.135.352-51.997-3.396-8.306-2.271-13.22-5.04-18.804-12.096-1.45-.473-5.948-1.349-7.242-2.161z"}" fill="${"url(#e)"}"></path><path d="${"M115.256 64.763c2.866-6.318.33-12.153-4.564-16.65-7.61-7.131-18.328-9.12-28.254-9.962-9.054-.768-16.846-.415-26.874-.275-9.81.137-18.673-1.08-28.524-3.184-3.85-.855-8.22-2.624-11.826-4.909-3.005-1.905-5.99-4.852-7.91-7.168-1.233-.339-2.846-.74-2.846-.74 8.5 12.541 17.888 17.235 31.457 17.42 19.045 1.583 37.726-1.87 57.1 1.007 8.992 1.405 17.563 6.028 21.995 14.74 1.913 3.53 1.532 6.147.246 9.72z"}" opacity="${".771"}" fill="${"url(#f)"}"></path><path d="${"M77.847 41.628c-15.437.094-41.196 2.833-59.756-2.851C8.14 34.935 3.62 30.61.087 20.462c0 .158 1.748.915 3.433 1.538 1.19.44 2.684.629 3.71.648m0 0s2.436 3.7 4.29 5.052c12.018 9.11 28.62 9.912 41.413 9.735 3.225-.03 6.308-.012 8.509-.073 6.091-.17 12.206-.176 18.102.225 8.386.928 17.982 2.078 25.682 6.218 2.218 1.193 4.38 2.942 6.125 4.91 3.908 4.404 6.555 9.481 3.706 16.572 5.306-20.052-23.01-23.426-37.21-23.659"}" fill="${"none"}"></path><path d="${"M3.947.033c.28 5.567 4.745 9.299 9.292 11.7 13.983 8.084 30.842 7.534 46.438 7.114 13.685-.269 28.169-1.42 40.756 5.08 7.151 3.088 12.463 9.479 14.569 16.929 2.299 7.698 2.886 16.215.254 23.907 5.967-11.673 8.445-25.898 4.041-38.507-3.632-10.003-12.716-17.145-22.793-19.94C76.321-.123 55.795 3.43 34.66 6.088c-8.858 1.114-18.92-.411-27.584-3.6-1.225-.52-2.451-1.27-3.13-2.454z"}" fill="${"url(#g)"}"></path><path d="${"M3.935.014C2.42 9.458 3.58 20.716 11.327 27.27 23.18 37.787 33.15 38.456 46.585 38.36c14.513-.105 29.257-1.253 43.61 1.308 9.415 1.68 18.241 5.444 23.768 13.157 1.603 3.315 2.473 8.484 1.592 11.08 2.807-9.875 1.427-20.964-3.588-29.909-4.99-8.47-14.937-12.318-24.11-14.25-13.868-2.314-27.965-.389-41.936-.722-13.463-.065-27.82-2.449-38.401-11.4-2.052-2-3.312-4.771-3.585-7.61z"}" fill="${"url(#h)"}"></path></svg>`;
      });
      _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `${$$result.head += `<script lang="${"ts"}" data-svelte="svelte-1jqp6gh">var themes;
(function (themes) {
    themes["NIGHT"] = "night";
    themes["LIGHT"] = "light";
})(themes || (themes = {}));
/**
 * Sets theme attribute in html tag
 */
let setThemeAttribute = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
};
let isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const systemTheme = isSystemDark ? themes.NIGHT : themes.LIGHT;
const defaultTheme = localStorage.getItem('theme') ?? systemTheme;
if (defaultTheme === themes.NIGHT) {
    setThemeAttribute(themes.NIGHT);
}
else if (defaultTheme === themes.LIGHT) {
    setThemeAttribute(themes.LIGHT);
}
<\/script>`, ""}


<div class="${"sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"}"><div class="${"relative flex items-center"}"><a href="${"/"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</a></div></div>



${slots.default ? slots.default({}) : ``}`;
      });
    }
  });

  // .svelte-kit/output/server/nodes/0.js
  var __exports = {};
  __export(__exports, {
    css: () => css,
    entry: () => entry,
    js: () => js,
    module: () => layout_svelte_exports
  });
  var entry, js, css;
  var init__ = __esm({
    ".svelte-kit/output/server/nodes/0.js"() {
      init_layout_svelte();
      entry = "pages/__layout.svelte-c4d2e622.js";
      js = ["pages/__layout.svelte-c4d2e622.js", "chunks/index-e7b8a758.js"];
      css = ["assets/pages/__layout.svelte-105284e5.css"];
    }
  });

  // .svelte-kit/output/server/entries/fallbacks/error.svelte.js
  var error_svelte_exports = {};
  __export(error_svelte_exports, {
    default: () => Error2,
    load: () => load
  });
  function load({ error: error2, status }) {
    return { props: { error: error2, status } };
  }
  var Error2;
  var init_error_svelte = __esm({
    ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
      init_index_340e44b6();
      Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let { status } = $$props;
        let { error: error2 } = $$props;
        if ($$props.status === void 0 && $$bindings.status && status !== void 0)
          $$bindings.status(status);
        if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
          $$bindings.error(error2);
        return `<h1>${escape(status)}</h1>

<pre>${escape(error2.message)}</pre>



${error2.frame ? `<pre>${escape(error2.frame)}</pre>` : ``}
${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
      });
    }
  });

  // .svelte-kit/output/server/nodes/1.js
  var __exports2 = {};
  __export(__exports2, {
    css: () => css2,
    entry: () => entry2,
    js: () => js2,
    module: () => error_svelte_exports
  });
  var entry2, js2, css2;
  var init__2 = __esm({
    ".svelte-kit/output/server/nodes/1.js"() {
      init_error_svelte();
      entry2 = "error.svelte-a51b642d.js";
      js2 = ["error.svelte-a51b642d.js", "chunks/index-e7b8a758.js"];
      css2 = [];
    }
  });

  // .svelte-kit/output/server/entries/pages/index.svelte.js
  var index_svelte_exports = {};
  __export(index_svelte_exports, {
    default: () => Routes
  });
  var Avatar2Svg, Routes;
  var init_index_svelte = __esm({
    ".svelte-kit/output/server/entries/pages/index.svelte.js"() {
      init_index_340e44b6();
      Avatar2Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `<svg width="${"296.942"}" height="${"969.506"}" viewBox="${"0 0 78.566 256.515"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" xmlns="${"http://www.w3.org/2000/svg"}"><defs><linearGradient id="${"e"}"><stop offset="${"0"}" stop-color="${"#ffcea3"}"></stop><stop offset="${"1"}" stop-color="${"#ff8f38"}" stop-opacity="${"0"}"></stop></linearGradient><linearGradient id="${"d"}"><stop offset="${"0"}" stop-color="${"#fa6"}"></stop><stop offset="${"1"}" stop-color="${"#fa6"}" stop-opacity="${"0"}"></stop></linearGradient><linearGradient id="${"c"}"><stop offset="${"0"}" stop-color="${"#ffbe88"}"></stop><stop offset="${"1"}" stop-color="${"#ffa964"}"></stop></linearGradient><linearGradient id="${"b"}"><stop offset="${"0"}" stop-color="${"#ffcea3"}"></stop><stop offset="${"1"}" stop-color="${"#ffa964"}"></stop></linearGradient><linearGradient id="${"a"}"><stop offset="${"0"}" stop-color="${"#ffa45c"}"></stop><stop offset="${"1"}" stop-color="${"#ffbe88"}"></stop></linearGradient><linearGradient xlink:href="${"#a"}" id="${"g"}" x1="${"194.283"}" y1="${"-206.793"}" x2="${"245.293"}" y2="${"-206.793"}" gradientUnits="${"userSpaceOnUse"}"></linearGradient><linearGradient xlink:href="${"#b"}" id="${"i"}" x1="${"110.029"}" y1="${"-73.706"}" x2="${"118.933"}" y2="${"-71.669"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"translate(-1.058)"}"></linearGradient><linearGradient xlink:href="${"#c"}" id="${"h"}" x1="${"94.564"}" y1="${"-39.489"}" x2="${"105.056"}" y2="${"-28.785"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"translate(-.595 -.397)"}"></linearGradient><linearGradient xlink:href="${"#d"}" id="${"f"}" x1="${"84.716"}" y1="${"-17.896"}" x2="${"87.539"}" y2="${"-12.743"}" gradientUnits="${"userSpaceOnUse"}"></linearGradient><linearGradient xlink:href="${"#e"}" id="${"j"}" x1="${"82.856"}" y1="${"-59.448"}" x2="${"72.316"}" y2="${"-55.921"}" gradientUnits="${"userSpaceOnUse"}"></linearGradient></defs><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M110.055 61.911c.011 0 .709-3.774-.341-8.46-1.05-4.686-1.33-5.198-1.522-7.084-.192-1.887-.367-5.685.975-8.418-.181-.578-2.595-8.596-2.89-12.394-.288-1.038-3.162-5.991-3.162-5.991L96.478 34.49l1.555 17.4c-1.038.07-32.53-1.894-32.53-1.894-.586-9.44-1.993-18.82-4.005-26.592-3.141 6.057-4.585 9.316-4.478 11.338 1.214 1.03 2.057 2.913 3.228 6.518 1.171 3.604 4.788 8.736 4.788 8.736.473 2.84-3.821 5.773-3.821 5.773-.024.065-11.427-8.94-17.014-18.266.07-10.642 12.591-25.061 14.688-30.981 0 0 1.88-3.215 4.573-3.936 2.692-.722 13.729-6.26 13.729-6.26s-.02-6.903-.38-9.335C78.754-14.183 90.9-23.974 93.948-21.9l-.61 18.228 16.626 4.855s2.365 1.067 3.244 2.473c.878 1.406 3.904 14.795 4.44 18.874.534 4.08 1.233 16.172 1.233 16.172.069 0 1.273 10.598-1.238 23.956-.921.506-6.99.024-7.588-.746z"}" fill="${"#ffbe88"}" transform="${"translate(-44.201 100.874)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M67.454 26.31c-2.634.41-1.83 20.351-1.95 23.687-.699-8.68-1.415-17.672-4.006-26.592 2.134 1.964 5.613 2.406 5.956 2.905zm33.786-9.226L96.479 34.49l6.637-14.927c.399-.596-1.116-2.61-1.874-2.48z"}" fill="${"#ffad6b"}" transform="${"translate(-44.201 100.874)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"m101.24 17.084 1.088-3.437c1.795-.515 3.88 6.52 5.821 9.78.171 7.827 1.391 9.673 2.194 13.898-1.076 10.354.705 17.088 1.45 25.09l-1.738-.504s.945-3.781-.84-10.631c-1.786-6.85-1.36-11.003-.048-13.33-.473-1.812-3.037-10.772-2.89-12.395-1.3-2.693-5.036-8.471-5.036-8.471z"}" fill="${"#ffb375"}" transform="${"translate(-44.201 100.874)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M62.607 13.399c-5.23 6.375-4.472 12.093-10.176 17.07l4.59-.59c.07-1.855.736-3.55 1.478-5.236.842-1.91 1.81-3.786 2.67-5.466.19-.878 1.114 1.078 4.276 1.875-2.648-2.453-4.378-3.539-2.838-7.653z"}" transform="${"translate(-44.201 105.738)"}" fill="${"#ffb375"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M50.246 30.357c5.814.841 10.589 9.717 14.79 14.776-2.09-2.47-5.348-9.863-5.54-10.929 0 0-1.561-3.978-2.476-4.325-.14-.473-5.94-.32-6.774.478"}" transform="${"translate(-44.201 105.738)"}" fill="${"#ffb375"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M63.735 16.19c-3.793 7.017-1.39 11.41 14.079 9.618 4.728.247 12.818 4.194 17.443-7.356l3.065-1.518s-3.19 7.265-8.735 9.614c-5.546 2.35-11.798-.32-11.798-.32-1.906.344-9.784.565-12.344-.312-1.177-.403-3.235-1.626-3.648-3.504-.412-1.878.941-4.698 1.938-6.222z"}" fill="${"#ffb375"}" transform="${"translate(-44.201 100.874)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"m94.539 51.734 1.94-17.243 1.554 17.4zM99.892-1.76c3.018.65 5.632 5.793 7.47 6.025 5.45-2.784 12.39 28.152 11.85 43.06-.085-8.655-1-17.328-1.748-25.997-1.054-5.877-2.354-11.763-4.256-17.673-.763-1.221-2.08-1.75-3.244-2.473z"}" fill="${"#ffcb9e"}" transform="${"translate(-44.201 100.874)"}"></path><path d="${"M120.398 64.967c.419.685.847 3.687.847 5.021 0 1.687-1.397 6.736-1.743 8.238-.461.756-.906 1.665-2.944 1.308-.597.503-1.593 1.119-2.944.848-.624-.493-.793-.533-.793-.533l-.68.28s-1.815.13-2.517-.452c-.014-1.313.11-1.213.11-1.213s-.454.635-.978.888c-.46.221-1.767.535-2.386-.09-.36-.577-.524-.836-.524-.836-.077-.064-.204-1.3.004-3.127-1.221-.344-1.82-1.708-1.823-1.713-.35-.708-.464-6.95.816-9.314s2.662-2.607 3.785-2.473c1.124.134 3.87.202 6.365.474 2.494.27 2.65.384 2.65.384 1.367 1.112 2.336 1.624 2.755 2.31zM61.274 55.63c-.003.055-.48 2.306 1.007 3.847 1.487 1.54 2.361 2.228 3.592 2.046 1.231-.182.512-10.1.512-10.1l-1.349-1.426s-4.008 4.689-3.762 5.633z"}" style="${"font-variation-settings:normal;-inkscape-stroke:none"}" fill="${"#ffbe88"}" transform="${"translate(-44.201 100.874)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M105.85 75.3s.93-3.838.744-6.705c-.257-.745-.99-1.718-1.054-2.572-.23 1.524-.566 2.841-.481 3.669.085.827.8 1.364.746 2.123-.054.759-.617 1.381-1.778 1.77 0 0 .199.447.573.873.107.21 1.15.995 1.25.841z"}" fill="${"#ffad6b"}" transform="${"translate(-44.201 100.874)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M105.846 75.342s5.366-.317 4.736 1.003c-.63 1.32 2.119-.978 2.873-.178s.494 1.206.494 1.206 2.308-1.36 2.872-.51c.564.85 1.085.469 1.916 1.138-1.72-.304-1.851.37-2.321.03-.47-.34-3.157-.509-3.157-.509s-1.06-.364-.754-.8c-1.119.187-2.301.8-2.87-.031-.568-.832-.87-1.349-2.878-1.349z"}" fill="${"#ffcb9e"}" transform="${"translate(-44.201 100.874)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M65.504 49.997s.373 17.916 1.071 19.914c6.495 18.58 15.02 50.174 16.238 59.724 2.9.565 5.064-.447 5.064-.587-1.413-9.34 1.073-26.818-3.874-31.818-1.009-1.147-1.225-2.752-1.431-3.44l-1.684-22.598 1.409.014s19.301 40.054 18.883 56.942c4.992.352 6.814 0 6.814 0S106.308 106.222 100.49 96c-.157-.583-.73-41.432-2.458-44.11-2.192 0-32.53-1.894-32.53-1.894z"}" fill="${"#ffbe88"}" transform="${"translate(-44.201 100.874)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"m67.89 73.844 13.256.817-.278-3.198s.898-.01 1.474.426c.575.436 1.314 2.499 1.359 2.485l16.108-1.433s.932-15.521-1.753-21.05c-1.548-.177-32.552-1.894-32.552-1.894s-.058 7.515.238 13.33c.168 3.305.397 6.032.608 6.584.516 1.492 1.54 3.933 1.54 3.933z"}" fill="${"#001b47"}" transform="${"translate(-44.201 100.874)"}"></path><path style="${"font-variation-settings:normal"}" d="${"m78.532 70.934.12.79.427 2.808 2.126.13-.243-3.199"}" fill="${"#000b1f"}" transform="${"translate(-44.201 100.874)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M85.265 130.875c1.642-.369 1.947-3.981 2.273-5.157-.515-7.793.342-15.7-1.185-23.408-.394-2.155-1.4-4.132-2.839-5.764-1.304-2.369-1.008-5.133-1.313-7.728l-1.085-14.157-2.06-.129c-1.647 21.393 8.253 27 6.209 56.343z"}" fill="${"#ffad6b"}" transform="${"translate(-44.201 100.874)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M100.086 82.032c-.208-6.552-1.942-7.582-1.502-9.056.698-2.497 2.267-11.896-.551-21.084-1.171-.104-2.331-.164-3.485-.237 1.806 4.63 1.579 17.804 1.943 21.57.087 7.058 2.438 15.176 4 22.776"}" fill="${"#fff"}" fill-opacity="${".235"}" transform="${"translate(-44.201 100.874)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M77.168-10.68c1.386 3.362 10.338-1.687 16.485-7.25l.18-5.374-16.815 7.84z"}" fill="${"url(#f)"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal"}" d="${"M52.945-71.607c-.742.48-1.148 2.833.323 3.242.307 1.209.946 5.578 1.184 8.27.238 2.69-3.048 7.867-3.048 10.066 0 2.2 2.13 6.15 2.855 8.286.726 2.136 2.548 8.786 2.156 13.976-.933 1.835-1.284 2.729-1.284 2.729l-.167 1.21c.056 1.204.616 4.074 3.825 6.383 4.438 2.03 7.554 4.57 18.022 4.437 5.568-1.898 26.002-13.28 31.618-19.22.585-5.249 5.036-16.493 2.182-23.054l5.477-4.896c.685-8.188 6.546-10.758-.87-28.66-7.415-17.903-45.822-17.789-48.426-16.286-2.603 1.503-6.692 5.56-8.034 9.48-1.294 10.235-2.512 16.742-5.813 24.037z"}" fill="${"#ffbe88"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal"}" d="${"M218.99-50.097c-16.148-28.703.811-37.22 3.505-34.508 1.973-4.11-5.242-7.415-1.63-30.842-26.536-49.548-15.695-81.284 7.832-73.07 27.402-18.242 27.5-23.859 27.5-23.859s-10.137-28.4-10.92-33.683c-55.122-10.85-17.539-35.01-14.695-102.125l4.052-15.31c-5.387 6.185-10.146 13.346-12.558 20.389-4.89 38.686-9.492 63.277-21.97 90.851-2.804 1.81-4.34 10.708 1.22 12.25 1.163 4.57 3.578 21.085 4.479 31.256.9 10.171-11.522 29.736-11.522 38.047 0 8.31 8.047 23.244 10.791 31.316 2.744 8.072 9.632 33.21 8.149 52.822-3.526 6.937-4.854 10.315-4.854 10.315l-.63 4.574c.083 1.496.569 4.96 1.892 8.487 2.524 6.73 8.92 13.314 9.359 13.09z"}" transform="${"translate(-44.201 100.874) scale(.26458)"}" fill="${"url(#g)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M61.625-32.909s1.456 2.883 2.334 3.788c.879.905 3.057 2.205 9.571 2.098 6.514-.106 9.492-4.31 10.711-6.077-11.385 4.087-22.616.191-22.616.191z"}" fill="${"#ffa466"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M59.783-35.503s1.93 2.844 2.637 3.57c.706.726 2.54 1.846 4.53 2.236 1.99.39 9.92 2.504 17.291-3.403.86-1.136 3.584-5.407 3.584-5.407l-8.164 5.4s-2.688.07-6.107-.42c0 0-13.62-2.16-13.77-1.976z"}" fill="${"#ffad75"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M59.521-35.613c.312-.404 17.288 2.273 19.88 1.903.353 0 1.2-.35 1.432-.504 2.538-1.606 6.775-4.39 7.233-4.522-.082.404-4.88 4.034-6.754 5.277-.723.423-1.505.615-1.73.67-.305.073-8.904.115-20.06-2.824z"}" fill="${"#cc5100"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M86.74-39.908c-.066.114-.039.352.856 1.048.128.129.343.522.343.522.23.421.418 1.663.552 1.742.082.141.302-.092.384-.28.163-.378.334-.95-.041-1.775-.168-.356-.336-.719-.672-.933-.273-.174-1.253-.587-1.422-.324z"}" fill="${"#803300"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M70.916-13.27c3.002-1.213 7.377-3.493 6.017-8.146 9.32-4.463 11.818-7.778 15.582-14.893 5.468-5.922 16.195.5 18.252-9.668.28-.116-1.631 11.503-2.338 13.75-.414.466-2.44 2.23-4.282 3.636-.996.89-6.747 4.57-6.747 4.57.183-.336-14.842 10.202-20.59 11.013-3.747.53-5.23-.357-5.894-.262z"}" fill="${"url(#h)"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M114.16-88.838c.724 15.397-4.849 34.573-5.141 34.336 0 0 5.206-3.121 6.045-2.935.016-.877-.137 1.702.418-5.541.206-.78 2.278-6.206 2.393-10.887.016-1.718-.4-5.068-1.268-8.08-.982-3.41-2.433-6.428-2.447-6.893z"}" fill="${"url(#i)"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M116.352-60.555s4.297-.855 5.831 2.487c1.534 3.342-.218 5.995-2.203 9.434-1.986 3.439-4.504 6.466-4.504 6.466s-2.18 1.735-3.864 1.369c-1.684-.367-2.927-1.622-2.927-3.837s.034-4.414.42-6.852c.386-2.438 2.622-7.67 7.247-9.067z"}" fill="${"#ffbe88"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M111.362-45.58s-1.914-4.623 5.047-10.066c.936-.504 1.755-.487 2.485-.095.724.388 1.328 1.283 1.285 2.104-.108 2.073-1.395 3.953-2.51 5.706-.71 1.117-1.509 2.26-2.614 2.988-.684.45-1.543.948-2.337.751-.628-.155-1.012-.568-1.356-1.388z"}" fill="${"#ffad6b"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M56.73-58.597s.294 2.484 1.976 3.14c1.681.658 4.028 1.182 5.432.938 1.552-.744 1.571-.702 1.571-.702l.812-1.588c-1.887-1.03-4.175-1.932-9.791-1.788z"}" fill="${"#fa6"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"m67.79-59.89-2.184-3.508c2.275.323.85-.89 1.141-2.55 0 0 1.007.604 1.82 1.88.811 1.277-.247 4.121-.777 4.178"}" fill="${"#ffb070"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"m57.975-61.7-.999 3.338s1.77 1.348 4.229 1.551c2.463.203 5.244.109 5.244.109.365-.539.773-1.27 1.148-2.227 0 0-.065-2.906-1.27-3.41-1.207-.503-5.474-1.737-7.837-.626-.174.1-.515 1.266-.515 1.266z"}" fill="${"#fff"}" transform="${"translate(-44.201 105.738)"}"></path><g transform="${"translate(-63.76 100.65) scale(.93597)"}" stroke-width="${"1.068"}" fill-rule="${"evenodd"}"><path d="${"M92.237-61.476c-.357-.139-4.17-1.924-6.221-.74a4.714 4.714 0 0 0 .418 6.3c.463.472 2.255.604 3.398.518a5.208 5.208 0 0 0 2.272-.707c.928-.884 1.146-1.15 1.147-2.442a4.726 4.726 0 0 0-1.014-2.93z"}" fill="${"#3f3027"}"></path><path d="${"M85.02-58.46c.107.843.447 1.656.976 2.323.912.036 1.607-.988 1.28-1.822a1.366 1.366 0 0 0-2.257-.502z"}" fill="${"#fff"}"></path><circle cx="${"89.522"}" cy="${"-59.02"}" r="${"2.491"}"></circle><circle cx="${"88.54"}" cy="${"-58.412"}" r="${".715"}" fill="${"#fff"}"></circle></g><path style="${"font-variation-settings:normal"}" d="${"M61.605-64.621c-1.162.01-2.363.145-3.417.662-.619.48-.825 1.293-1.052 2.005-.296 1.046-.454 2.123-.649 3.19.229.148.577.516.594.054.385-1.251.728-2.516 1.148-3.755.073-.38.347-.624.725-.682 1.558-.463 3.22-.255 4.787.054.915.202 1.834.432 2.695.809.658.43.85 1.266 1.007 1.986.086.452.17.91.187 1.369.318-1.409.256-1.78-.102-3.481-.54-.97-1.532-1.324-2.515-1.661a11.364 11.364 0 0 0-3.408-.55z"}" stroke="${"#000"}" stroke-width="${".026"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M76.103-66.176c-5.369 4.872-4.801 10.666-3.326 11.39 1.476.723 2.756-.398 9.677-.353 0 0 2.093-7.611 4.816-7.596 2.724.016 8.871 5.734 8.871 5.734 1.19-2.06-.69-5.477-1.757-8.175-1.41-.698-3.086-.556-5.854-.421-2.768.135-4.378.436-6.607 1-3.797 8.331-3.257-1.238-5.82-1.58z"}" fill="${"url(#j)"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M96.486-56.317c-.244 2.44-4.338 3.045-5.938 3.109-1.6.063-2.061.077-5.833-.37-3.772-.448-5.84-3.248-5.84-3.248 3.767-.55 8.725-.642 17.611.509z"}" fill="${"#fa6"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal"}" d="${"M79.58-58.09s-.88.384-1.338.35c-.42-.032-.804.59-.153.783.65.194 1.47.412 1.87.017.15-.147.567-.337.646-.436.134-.166-.534-.85-.534-.85l-.491.136z"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal"}" d="${"M79.56-57.863s-.741.284-1.08.258c-.312-.023-.47.41-.23.558.667.413 2.372.012 2.358-.107l-.537-1.073-.512.364z"}" fill="${"#fff"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M79.96-56.94s.938-2.45 1.581-3.372c.59-.845 1.795-1.844 3.276-1.88 1.69-.041 5.074-.28 8.403.45 2.333.51 2.902 5.549 2.902 5.549s-2.737.955-7.003.955c-3.76 0-5.979-.469-9.16-1.702z"}" fill="${"#fff"}" transform="${"translate(-44.201 105.738)"}"></path><g fill-rule="${"evenodd"}" transform="${"translate(-44.201 105.738)"}"><path d="${"M93.19-62.218c-.356-.139-6.785-.227-7.174.002a4.714 4.714 0 0 0 .418 6.3c.463.472 2.252.515 3.398.518.95.002 2.102.008 2.82-.414.928-.884 1.552-2.185 1.553-3.477a4.726 4.726 0 0 0-1.014-2.93z"}" fill="${"#3f3027"}"></path><path d="${"M85.02-58.673c.107.844.447 1.657.976 2.324.912.036 1.607-.988 1.28-1.822a1.366 1.366 0 0 0-2.257-.502z"}" fill="${"#fff"}"></path><circle cx="${"89.522"}" cy="${"-59.515"}" r="${"2.491"}"></circle><circle cx="${"88.54"}" cy="${"-58.836"}" r="${".715"}" fill="${"#fff"}"></circle></g><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M86.827-63.413c-1.567.015-3.173.106-4.652.66-.673.263-1.136.864-1.33 1.546a179.356 179.356 0 0 1-1.265 3.118c.256.294.667.893.761.203.565-1.286 1.084-2.71 2.3-3.53.793-.614 1.804-.827 2.789-.795 2.672-.099 5.39-.106 8.003.529 1.188.478 1.72 1.78 2.113 2.906.267.821.453 1.669.569 2.525.493-.024.894-.116.627-.68-.258-1.403-.461-2.838-.988-4.17-.404-.748-1.037-1.43-1.893-1.63-1.72-.56-3.544-.55-5.33-.652a40.695 40.695 0 0 0-1.704-.03z"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M73.808-69.827c0 .435.8 2.79 1.886 3.442.598.36 1.385.598 2.892.405 1.506-.193 6.396-.737 8.246-.83 1.85-.092 7.338.28 11.393 2.258l.74.127s-.826-2.234-4.551-4.697c-2.466-1.63-7.735-1.453-9.34-1.447-1.605.005-5.074.078-5.074.078s-2.996.181-3.69.181c.082.205.087.285.087.285s-.888-.022-1.115-.115c.046.354.046.448.046.448s-.506-.132-.824-.377l.042.38z"}" fill="${"#803300"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M74.9-67.195s-.513-.77-.745-1.43c.453.386.509.864 1.454 1.175-.76-.632-.93-1.008-1.042-1.588.598.873 2.044.69 2.311 1.524-.152-.465-.363-.901-.251-1.466 1.632.714 2.357.993 4.336.924-2.034 1.285-6.064.86-6.064.86z"}" fill="${"#421b00"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M74.9-67.195c-.036.418 11.517-3.834 24.064 2.77-.179-.006-.473-.013-.786-.149-1.22-.53-4.13-1.634-7.831-2.065-2.435-.146-5.593-.08-8.7.306-1.94.36-3.757.706-5.32.24-.815-.299-1.076-.564-1.428-1.102z"}" fill="${"#421b00"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"m52.945-71.607.78-.22s4.296-.812 9.064.012c2.01.59 2.737 1.222 3.647 4.904-.813-.18-4.021-1.64-7.46-1.56-3.439.08-5.708.106-5.708.106-.035.026-.663-.208-.85-.768-.216-.645-.189-1.116.036-1.77.167-.483.486-.697.49-.704z"}" fill="${"#803300"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M52.91-71.608c-.012.049-.264.369-.044 1.852.112.754 3.507.3 6.86.421 3.242.118 6.445.796 6.597 2.4-.551-.203-4.39-1.481-6.1-1.517-1.712-.035-7.075.096-7.075.096a1.375 1.375 0 0 1-.525-.26c-.264-.188-.404-.611-.405-.617 0-.006-.08-.364-.086-.808.087-.75.172-1.143.662-1.57z"}" fill="${"#421b00"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M65.235-70.227s.393 1.372.204 1.74c.03-.477-1.524-1.674-2.515-1.898.066.862.59 1.429.06 1.353.048-.592-1.69-1.165-2.533-1.635.22.604-1 1.237-2.386 1.536 1.744.028 7.44 1.96 8.371 2.22.025.018-.646-2.527-1.2-3.316z"}" fill="${"#421b00"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M68.543-41.35c.314-.283.722-.504 1.157-.455.6.01 1.28.12 1.675.62.172.195.188.532.517.502.752.1 1.52.033 2.262-.118a1.95 1.95 0 0 0 1.088-.616c.23-.235-.129.097-.24.136-.452.232-.971.279-1.47.334-.536.037-1.09.073-1.613-.08-.128-.21-.24-.482-.46-.64-.489-.39-1.15-.431-1.75-.415-.47.06-.86.393-1.166.732zm-8.564-5.585c-.537.464-.837 1.163-.958 1.85-.077.434-.01 1.013.466 1.185.283.048.497.055.4.384-.013.381-.061.766.056 1.138.156.77.488 1.529 1.104 2.042.991.91 2.403 1.117 3.7 1.127 1.237-.015 2.436-.669 3.242-1.542-.936.879-2.238 1.385-3.526 1.245-1.209-.068-2.498-.388-3.342-1.314-.62-.62-.878-1.509-.979-2.357l.038-.927c-.462.035-.912-.334-.896-.812-.035-.726.269-1.445.695-2.02z"}" fill="${"#ff8629"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"m61.966-47.744-.823.12s-.74.165-1.125.639-.814 1.362-.727 2.142c.086.78.89.738.89.738l-.04.976s.156 1.362.792 2.102c.637.74 1.544 1.454 3.844 1.536 2.3.083 3.683-1.76 3.683-1.76s.639-.836 1.348-.836c.71 0 1.736.07 2.081 1.05.617.246 2.45.087 3.036-.203.546-.27 1.094-.972 1.267-1.512.174-.54-.19-1.612-.997-2.402-.807-.79-1.51-.81-2.225-.678 1.064.243 2.05 1.178 2.136 1.855.087.677.12 1.169-.48 1.968-.6.8-1.357.35-2.05.179-.693-.171-1.37-.779-2.224-.875-.855-.096-2.61.254-3.467.779-.857.525-3.938 1.652-4.861.646-.923-1.007-1.604-1.28-1.51-3.19 1.376-3.158 1.452-3.274 1.452-3.274z"}" fill="${"#ffad6b"}" transform="${"translate(-44.201 105.738)"}"></path><path style="${"font-variation-settings:normal;-inkscape-stroke:none"}" d="${"M70.63-59.014c-.767 3.9-3.912 14.35-3.912 14.35s.09.738-2.105 1.354c-2.195.617-3.185-1.323-3.329-1.827.568-4.245 5.847-13.34 6.7-14.823.576.002 2.263.153 2.645.946z"}" fill="${"#ffcea3"}" transform="${"translate(-44.201 105.738)"}"></path><g fill="${"#b2cfff"}"><g stroke-width="${".018"}"><path style="${"font-variation-settings:normal;mix-blend-mode:normal"}" d="${"M-140.203 30.807c.122.52-.027.878-.188 1.256-.162.378-.324.327-.73.418-.408.091-1.872.053-1.872.053s-1.213 1.446-2.535 1.446c-.372 0-1.063.19-1.063.19s-.48-.055-.931-.198a1.844 1.844 0 0 1-.312-.37c-.045-.07-.035-.18-.124-.28a.255.255 0 0 1-.067-.22c.11-.309.237-.214.476-.525a1.932 1.932 0 0 1 1.05-.523c.2-.193.786-.269 1.12-.378.542-.613 1.58-1.89 2.454-2.374.876-.483.309-1.608.309-1.608l2.001-.042s.35 2.895.412 3.155c.061.26 0 0 0 0z"}" fill="${"#001b48"}" paint-order="${"stroke fill markers"}" transform="${"matrix(4.38603 -.15788 .1582 4.39485 656.57 75.61)"}"></path><path style="${"font-variation-settings:normal;mix-blend-mode:normal"}" d="${"M-147.522 33.972a.47.47 0 0 1 .026-.264.889.889 0 0 1 .074-.143c-.056-.044-.098-.105-.143-.16a1.563 1.563 0 0 1-.251-.441c-.019-.034-.013-.101-.03-.118a.416.416 0 0 0-.178.256.254.254 0 0 0 .066.22c.044.045.078.15.104.237.027.073.069.115.115.179.058.09.128.162.217.234z"}" fill="${"#002766"}" transform="${"matrix(4.38603 -.15788 .1582 4.39485 656.57 75.61)"}"></path><path style="${"font-variation-settings:normal"}" d="${"m-142.457 28.677.02-.261 1.916.002.032.256zm-.006-.507-.067-.261 1.948.01.031.256z"}" fill="${"#8fbaff"}" transform="${"matrix(4.38603 -.15788 .1582 4.39485 656.57 75.61)"}"></path><path style="${"font-variation-settings:normal;mix-blend-mode:normal"}" d="${"M-147.422 33.565c-.037-.016-.42-.452-.424-.72-.003.008.194-.126.248-.21.087-.106.215-.21.334-.292.212-.125.326-.175.536-.237 0 0 .6.123.544.563-.056.44-1.057.626-1.238.896"}" fill="${"#002766"}" transform="${"matrix(4.38603 -.15788 .1582 4.39485 656.57 75.61)"}"></path><path style="${"font-variation-settings:normal"}" d="${"M-142.993 32.534c-.792.586-1.29 1.31-3.194 1.437-.128.008-.266.022-.404.023v.177c.09.005.351-.082.507-.12a4.82 4.82 0 0 1 .408-.064c.08-.006.353-.008.463-.034.08-.011.288-.057.47-.129a3.39 3.39 0 0 0 .546-.27 4.67 4.67 0 0 0 .52-.367c.16-.124.508-.438.684-.653"}" fill="${"#002766"}" transform="${"matrix(4.38603 -.15788 .1582 4.39485 656.57 75.61)"}"></path><path d="${"M-147.422 33.565s-.15.21-.1.407c.18.084.85.202.931.199.365-.111.81-.174.915-.184-.086-.04-.935-.163-1.326-.348-.102-.048-.378.135-.42-.074z"}" style="${"font-variation-settings:normal"}" fill="${"#002766"}" transform="${"matrix(4.38603 -.15788 .1582 4.39485 656.57 75.61)"}"></path></g><g style="${"mix-blend-mode:normal"}" stroke-width="${".023"}" paint-order="${"stroke fill markers"}"><path style="${"font-variation-settings:normal"}" d="${"M-131.116 28.762c.196.883-.144 2.071.158 3.14.18.598.184 1.257.49 1.812.59.746.326 1.167.284 1.421-.065.558-.115.628-.372.82-.257.193-.504.582-1.104.728-.915.33-1.875.393-2.747.43-.553-.303-.592-.954-.521-1.225.071-.271.21-.369.404-.523-.118-.325.148-.812.308-1.088-.027-1.275.768-2.593.498-3.982-.705-1.507-.228-1.942-.184-2.458.044-.517-.137-1.93-.137-1.93l2.561-.266c.064 1.16.317 2.548.362 3.121z"}" fill="${"#001b48"}" transform="${"matrix(3.44895 -.17857 .18099 3.40276 512.13 106.228)"}"></path><path style="${"font-variation-settings:normal"}" d="${"M-133.92 33.336c1.027-.14.728-1.526 1.588-1.385.823.136.667.412 1.395 1.499-1.312-.419-2.983-.114-2.983-.114z"}" fill="${"#002766"}" transform="${"matrix(3.44895 -.17857 .18099 3.40276 512.13 106.228)"}"></path><path style="${"font-variation-settings:normal"}" d="${"m-133.904 27.332-.024-.36 2.547-.266.044.36zm-.053-.69-.038-.36 2.544-.266.033.36z"}" fill="${"#8fbaff"}" transform="${"matrix(3.44895 -.17857 .18099 3.40276 512.13 106.228)"}"></path><path style="${"font-variation-settings:normal"}" d="${"M-131.532 36.249c-.661-.098-.82.08-1.882.002-.179-.002-.338-.567-1.514-.363.076-.19.066-.29.404-.523 0 0-.368.26-.404.523-.04.087-.033.333.002.505.085.303.137.517.52.72.5.024 2.057-.132 2.746-.43.538-.125.769-.406 1.206-.808a.451.451 0 0 0 .142-.165c.105-.22.15-.462.128-.575-.185.662-.686 1.213-1.348 1.114z"}" fill="${"#002766"}" transform="${"matrix(3.44895 -.17857 .18099 3.40276 512.13 106.228)"}"></path><path style="${"font-variation-settings:normal"}" d="${"M-133.482 36.645s-.124-.518.165-.764"}" fill="${"none"}" stroke="${"#002766"}" stroke-width="${".077"}" stroke-linecap="${"round"}" transform="${"matrix(3.44895 -.17857 .18099 3.40276 512.13 106.228)"}"></path></g></g></svg>`;
      });
      Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `<h1 class="${"text-lg dark:text-slate-400"}">Text Lg</h1>
<h1 class="${"text-slate-700 dark:text-slate-400"}">Dark Slate 400</h1>
<h1 class="${"text-slate-700 "}">Normal Slate 700</h1>
<h1 class="${"font-semibold dark:text-slate-400"}">Font Semibold</h1>
<h1 class="${"font-extrabold dark:text-slate-400"}">Font Semibold</h1>
<h1 class="${"dark:text-sky-400 leading-10"}">Leading 10</h1>
<h1 class="${"inline-block"}">Leading 10</h1>




${validate_component(Avatar2Svg, "SvgAvatar").$$render($$result, {}, {}, {})}`;
      });
    }
  });

  // .svelte-kit/output/server/nodes/2.js
  var __exports3 = {};
  __export(__exports3, {
    css: () => css3,
    entry: () => entry3,
    js: () => js3,
    module: () => index_svelte_exports
  });
  var entry3, js3, css3;
  var init__3 = __esm({
    ".svelte-kit/output/server/nodes/2.js"() {
      init_index_svelte();
      entry3 = "pages/index.svelte-1dfc4398.js";
      js3 = ["pages/index.svelte-1dfc4398.js", "chunks/index-e7b8a758.js"];
      css3 = [];
    }
  });

  // .svelte-kit/cloudflare-workers-tmp/node_modules/mime/Mime.js
  var require_Mime = __commonJS({
    ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/Mime.js"(exports, module) {
      "use strict";
      function Mime() {
        this._types = /* @__PURE__ */ Object.create(null);
        this._extensions = /* @__PURE__ */ Object.create(null);
        for (let i = 0; i < arguments.length; i++) {
          this.define(arguments[i]);
        }
        this.define = this.define.bind(this);
        this.getType = this.getType.bind(this);
        this.getExtension = this.getExtension.bind(this);
      }
      Mime.prototype.define = function(typeMap, force) {
        for (let type in typeMap) {
          let extensions = typeMap[type].map(function(t) {
            return t.toLowerCase();
          });
          type = type.toLowerCase();
          for (let i = 0; i < extensions.length; i++) {
            const ext = extensions[i];
            if (ext[0] === "*") {
              continue;
            }
            if (!force && ext in this._types) {
              throw new Error('Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".');
            }
            this._types[ext] = type;
          }
          if (force || !this._extensions[type]) {
            const ext = extensions[0];
            this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
          }
        }
      };
      Mime.prototype.getType = function(path) {
        path = String(path);
        let last = path.replace(/^.*[/\\]/, "").toLowerCase();
        let ext = last.replace(/^.*\./, "").toLowerCase();
        let hasPath = last.length < path.length;
        let hasDot = ext.length < last.length - 1;
        return (hasDot || !hasPath) && this._types[ext] || null;
      };
      Mime.prototype.getExtension = function(type) {
        type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
        return type && this._extensions[type.toLowerCase()] || null;
      };
      module.exports = Mime;
    }
  });

  // .svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/standard.js
  var require_standard = __commonJS({
    ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/standard.js"(exports, module) {
      module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
    }
  });

  // .svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/other.js
  var require_other = __commonJS({
    ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/other.js"(exports, module) {
      module.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
    }
  });

  // .svelte-kit/cloudflare-workers-tmp/node_modules/mime/index.js
  var require_mime = __commonJS({
    ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/index.js"(exports, module) {
      "use strict";
      var Mime = require_Mime();
      module.exports = new Mime(require_standard(), require_other());
    }
  });

  // .svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/types.js
  var require_types = __commonJS({
    ".svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.KVError = void 0;
      var KVError = class extends Error {
        constructor(message, status = 500) {
          super(message);
          Object.setPrototypeOf(this, new.target.prototype);
          this.name = KVError.name;
          this.status = status;
        }
      };
      exports.KVError = KVError;
      var MethodNotAllowedError = class extends KVError {
        constructor(message = `Not a valid request method`, status = 405) {
          super(message, status);
        }
      };
      exports.MethodNotAllowedError = MethodNotAllowedError;
      var NotFoundError = class extends KVError {
        constructor(message = `Not Found`, status = 404) {
          super(message, status);
        }
      };
      exports.NotFoundError = NotFoundError;
      var InternalError = class extends KVError {
        constructor(message = `Internal Error in KV Asset Handler`, status = 500) {
          super(message, status);
        }
      };
      exports.InternalError = InternalError;
    }
  });

  // .svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/index.js
  var require_dist = __commonJS({
    ".svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/index.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve2) {
            resolve2(value);
          });
        }
        return new (P || (P = Promise))(function(resolve2, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.serveSinglePageApp = exports.mapRequestToAsset = exports.getAssetFromKV = void 0;
      var mime = require_mime();
      var types_1 = require_types();
      Object.defineProperty(exports, "MethodNotAllowedError", { enumerable: true, get: function() {
        return types_1.MethodNotAllowedError;
      } });
      Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function() {
        return types_1.NotFoundError;
      } });
      Object.defineProperty(exports, "InternalError", { enumerable: true, get: function() {
        return types_1.InternalError;
      } });
      var defaultCacheControl = {
        browserTTL: null,
        edgeTTL: 2 * 60 * 60 * 24,
        bypassCache: false
      };
      var parseStringAsObject = (maybeString) => typeof maybeString === "string" ? JSON.parse(maybeString) : maybeString;
      var getAssetFromKVDefaultOptions = {
        ASSET_NAMESPACE: typeof __STATIC_CONTENT !== "undefined" ? __STATIC_CONTENT : void 0,
        ASSET_MANIFEST: typeof __STATIC_CONTENT_MANIFEST !== "undefined" ? parseStringAsObject(__STATIC_CONTENT_MANIFEST) : void 0,
        cacheControl: defaultCacheControl,
        defaultMimeType: "text/plain",
        defaultDocument: "index.html"
      };
      function assignOptions(options) {
        return Object.assign({}, getAssetFromKVDefaultOptions, options);
      }
      var mapRequestToAsset = (request, options) => {
        options = assignOptions(options);
        const parsedUrl = new URL(request.url);
        let pathname = parsedUrl.pathname;
        if (pathname.endsWith("/")) {
          pathname = pathname.concat(options.defaultDocument);
        } else if (!mime.getType(pathname)) {
          pathname = pathname.concat("/" + options.defaultDocument);
        }
        parsedUrl.pathname = pathname;
        return new Request(parsedUrl.toString(), request);
      };
      exports.mapRequestToAsset = mapRequestToAsset;
      function serveSinglePageApp(request, options) {
        options = assignOptions(options);
        request = mapRequestToAsset(request, options);
        const parsedUrl = new URL(request.url);
        if (parsedUrl.pathname.endsWith(".html")) {
          return new Request(`${parsedUrl.origin}/${options.defaultDocument}`, request);
        } else {
          return request;
        }
      }
      exports.serveSinglePageApp = serveSinglePageApp;
      var getAssetFromKV2 = (event, options) => __awaiter(void 0, void 0, void 0, function* () {
        options = assignOptions(options);
        const request = event.request;
        const ASSET_NAMESPACE = options.ASSET_NAMESPACE;
        const ASSET_MANIFEST = parseStringAsObject(options.ASSET_MANIFEST);
        if (typeof ASSET_NAMESPACE === "undefined") {
          throw new types_1.InternalError(`there is no KV namespace bound to the script`);
        }
        const rawPathKey = new URL(request.url).pathname.replace(/^\/+/, "");
        let pathIsEncoded = false;
        let requestKey;
        if (options.mapRequestToAsset) {
          requestKey = options.mapRequestToAsset(request);
        } else if (ASSET_MANIFEST[rawPathKey]) {
          requestKey = request;
        } else if (ASSET_MANIFEST[decodeURIComponent(rawPathKey)]) {
          pathIsEncoded = true;
          requestKey = request;
        } else {
          const mappedRequest = mapRequestToAsset(request);
          const mappedRawPathKey = new URL(mappedRequest.url).pathname.replace(/^\/+/, "");
          if (ASSET_MANIFEST[decodeURIComponent(mappedRawPathKey)]) {
            pathIsEncoded = true;
            requestKey = mappedRequest;
          } else {
            requestKey = mapRequestToAsset(request, options);
          }
        }
        const SUPPORTED_METHODS = ["GET", "HEAD"];
        if (!SUPPORTED_METHODS.includes(requestKey.method)) {
          throw new types_1.MethodNotAllowedError(`${requestKey.method} is not a valid request method`);
        }
        const parsedUrl = new URL(requestKey.url);
        const pathname = pathIsEncoded ? decodeURIComponent(parsedUrl.pathname) : parsedUrl.pathname;
        let pathKey = pathname.replace(/^\/+/, "");
        const cache = caches.default;
        let mimeType = mime.getType(pathKey) || options.defaultMimeType;
        if (mimeType.startsWith("text") || mimeType === "application/javascript") {
          mimeType += "; charset=utf-8";
        }
        let shouldEdgeCache = false;
        if (typeof ASSET_MANIFEST !== "undefined") {
          if (ASSET_MANIFEST[pathKey]) {
            pathKey = ASSET_MANIFEST[pathKey];
            shouldEdgeCache = true;
          }
        }
        let cacheKey = new Request(`${parsedUrl.origin}/${pathKey}`, request);
        const evalCacheOpts = (() => {
          switch (typeof options.cacheControl) {
            case "function":
              return options.cacheControl(request);
            case "object":
              return options.cacheControl;
            default:
              return defaultCacheControl;
          }
        })();
        const formatETag = (entityId = pathKey, validatorType = "strong") => {
          if (!entityId) {
            return "";
          }
          switch (validatorType) {
            case "weak":
              if (!entityId.startsWith("W/")) {
                return `W/${entityId}`;
              }
              return entityId;
            case "strong":
              if (entityId.startsWith(`W/"`)) {
                entityId = entityId.replace("W/", "");
              }
              if (!entityId.endsWith(`"`)) {
                entityId = `"${entityId}"`;
              }
              return entityId;
            default:
              return "";
          }
        };
        options.cacheControl = Object.assign({}, defaultCacheControl, evalCacheOpts);
        if (options.cacheControl.bypassCache || options.cacheControl.edgeTTL === null || request.method == "HEAD") {
          shouldEdgeCache = false;
        }
        const shouldSetBrowserCache = typeof options.cacheControl.browserTTL === "number";
        let response = null;
        if (shouldEdgeCache) {
          response = yield cache.match(cacheKey);
        }
        if (response) {
          if (response.status > 300 && response.status < 400) {
            if (response.body && "cancel" in Object.getPrototypeOf(response.body)) {
              response.body.cancel();
              console.log("Body exists and environment supports readable streams. Body cancelled");
            } else {
              console.log("Environment doesnt support readable streams");
            }
            response = new Response(null, response);
          } else {
            let opts = {
              headers: new Headers(response.headers),
              status: 0,
              statusText: ""
            };
            opts.headers.set("cf-cache-status", "HIT");
            if (response.status) {
              opts.status = response.status;
              opts.statusText = response.statusText;
            } else if (opts.headers.has("Content-Range")) {
              opts.status = 206;
              opts.statusText = "Partial Content";
            } else {
              opts.status = 200;
              opts.statusText = "OK";
            }
            response = new Response(response.body, opts);
          }
        } else {
          const body = yield ASSET_NAMESPACE.get(pathKey, "arrayBuffer");
          if (body === null) {
            throw new types_1.NotFoundError(`could not find ${pathKey} in your content namespace`);
          }
          response = new Response(body);
          if (shouldEdgeCache) {
            response.headers.set("Accept-Ranges", "bytes");
            response.headers.set("Content-Length", body.length);
            if (!response.headers.has("etag")) {
              response.headers.set("etag", formatETag(pathKey, "strong"));
            }
            response.headers.set("Cache-Control", `max-age=${options.cacheControl.edgeTTL}`);
            event.waitUntil(cache.put(cacheKey, response.clone()));
            response.headers.set("CF-Cache-Status", "MISS");
          }
        }
        response.headers.set("Content-Type", mimeType);
        if (response.status === 304) {
          let etag = formatETag(response.headers.get("etag"), "strong");
          let ifNoneMatch = cacheKey.headers.get("if-none-match");
          let proxyCacheStatus = response.headers.get("CF-Cache-Status");
          if (etag) {
            if (ifNoneMatch && ifNoneMatch === etag && proxyCacheStatus === "MISS") {
              response.headers.set("CF-Cache-Status", "EXPIRED");
            } else {
              response.headers.set("CF-Cache-Status", "REVALIDATED");
            }
            response.headers.set("etag", formatETag(etag, "weak"));
          }
        }
        if (shouldSetBrowserCache) {
          response.headers.set("Cache-Control", `max-age=${options.cacheControl.browserTTL}`);
        } else {
          response.headers.delete("Cache-Control");
        }
        return response;
      });
      exports.getAssetFromKV = getAssetFromKV2;
    }
  });

  // .svelte-kit/output/server/index.js
  init_index_340e44b6();
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };
  var _use_hashes;
  var _dev;
  var _script_needs_csp;
  var _style_needs_csp;
  var _directives;
  var _script_src;
  var _style_src;
  function afterUpdate() {
  }
  var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { stores } = $$props;
    let { page } = $$props;
    let { components } = $$props;
    let { props_0 = null } = $$props;
    let { props_1 = null } = $$props;
    let { props_2 = null } = $$props;
    setContext("__svelte__", stores);
    afterUpdate(stores.page.notify);
    if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
      $$bindings.stores(stores);
    if ($$props.page === void 0 && $$bindings.page && page !== void 0)
      $$bindings.page(page);
    if ($$props.components === void 0 && $$bindings.components && components !== void 0)
      $$bindings.components(components);
    if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
      $$bindings.props_0(props_0);
    if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
      $$bindings.props_1(props_1);
    if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
      $$bindings.props_2(props_2);
    {
      stores.page.set(page);
    }
    return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
      default: () => {
        return `${components[2] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
          default: () => {
            return `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}`;
          }
        })}` : `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {})}`}`;
      }
    })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {})}`}

${``}`;
  });
  function to_headers(object) {
    const headers = new Headers();
    if (object) {
      for (const key2 in object) {
        const value = object[key2];
        if (!value)
          continue;
        if (Array.isArray(value)) {
          value.forEach((value2) => {
            headers.append(key2, value2);
          });
        } else {
          headers.set(key2, value);
        }
      }
    }
    return headers;
  }
  function hash(value) {
    let hash2 = 5381;
    let i = value.length;
    if (typeof value === "string") {
      while (i)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else {
      while (i)
        hash2 = hash2 * 33 ^ value[--i];
    }
    return (hash2 >>> 0).toString(36);
  }
  function lowercase_keys(obj) {
    const clone = {};
    for (const key2 in obj) {
      clone[key2.toLowerCase()] = obj[key2];
    }
    return clone;
  }
  function decode_params(params) {
    for (const key2 in params) {
      params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
    }
    return params;
  }
  function is_pojo(body) {
    if (typeof body !== "object")
      return false;
    if (body) {
      if (body instanceof Uint8Array)
        return false;
      if (body._readableState && typeof body.pipe === "function")
        return false;
      if (typeof ReadableStream !== "undefined" && body instanceof ReadableStream)
        return false;
    }
    return true;
  }
  function normalize_request_method(event) {
    const method = event.request.method.toLowerCase();
    return method === "delete" ? "del" : method;
  }
  function error(body) {
    return new Response(body, {
      status: 500
    });
  }
  function is_string(s2) {
    return typeof s2 === "string" || s2 instanceof String;
  }
  var text_types = /* @__PURE__ */ new Set([
    "application/xml",
    "application/json",
    "application/x-www-form-urlencoded",
    "multipart/form-data"
  ]);
  function is_text(content_type) {
    if (!content_type)
      return true;
    const type = content_type.split(";")[0].toLowerCase();
    return type.startsWith("text/") || type.endsWith("+xml") || text_types.has(type);
  }
  async function render_endpoint(event, mod) {
    const method = normalize_request_method(event);
    let handler = mod[method];
    if (!handler && method === "head") {
      handler = mod.get;
    }
    if (!handler) {
      return event.request.headers.get("x-sveltekit-load") ? new Response(void 0, {
        status: 204
      }) : new Response("Method not allowed", {
        status: 405
      });
    }
    const response = await handler(event);
    const preface = `Invalid response from route ${event.url.pathname}`;
    if (typeof response !== "object") {
      return error(`${preface}: expected an object, got ${typeof response}`);
    }
    if (response.fallthrough) {
      throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");
    }
    const { status = 200, body = {} } = response;
    const headers = response.headers instanceof Headers ? new Headers(response.headers) : to_headers(response.headers);
    const type = headers.get("content-type");
    if (!is_text(type) && !(body instanceof Uint8Array || is_string(body))) {
      return error(`${preface}: body must be an instance of string or Uint8Array if content-type is not a supported textual content-type`);
    }
    let normalized_body;
    if (is_pojo(body) && (!type || type.startsWith("application/json"))) {
      headers.set("content-type", "application/json; charset=utf-8");
      normalized_body = JSON.stringify(body);
    } else {
      normalized_body = body;
    }
    if ((typeof normalized_body === "string" || normalized_body instanceof Uint8Array) && !headers.has("etag")) {
      const cache_control = headers.get("cache-control");
      if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
        headers.set("etag", `"${hash(normalized_body)}"`);
      }
    }
    return new Response(method !== "head" ? normalized_body : void 0, {
      status,
      headers
    });
  }
  var chars$1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
  var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
  var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
  var escaped2 = {
    "<": "\\u003C",
    ">": "\\u003E",
    "/": "\\u002F",
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  function devalue(value) {
    var counts = /* @__PURE__ */ new Map();
    function walk(thing) {
      if (typeof thing === "function") {
        throw new Error("Cannot stringify a function");
      }
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (!isPrimitive(thing)) {
        var type = getType(thing);
        switch (type) {
          case "Number":
          case "String":
          case "Boolean":
          case "Date":
          case "RegExp":
            return;
          case "Array":
            thing.forEach(walk);
            break;
          case "Set":
          case "Map":
            Array.from(thing).forEach(walk);
            break;
          default:
            var proto = Object.getPrototypeOf(thing);
            if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
              throw new Error("Cannot stringify arbitrary non-POJOs");
            }
            if (Object.getOwnPropertySymbols(thing).length > 0) {
              throw new Error("Cannot stringify POJOs with symbolic keys");
            }
            Object.keys(thing).forEach(function(key2) {
              return walk(thing[key2]);
            });
        }
      }
    }
    walk(value);
    var names = /* @__PURE__ */ new Map();
    Array.from(counts).filter(function(entry4) {
      return entry4[1] > 1;
    }).sort(function(a, b) {
      return b[1] - a[1];
    }).forEach(function(entry4, i) {
      names.set(entry4[0], getName(i));
    });
    function stringify(thing) {
      if (names.has(thing)) {
        return names.get(thing);
      }
      if (isPrimitive(thing)) {
        return stringifyPrimitive(thing);
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          return "Object(" + stringify(thing.valueOf()) + ")";
        case "RegExp":
          return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
        case "Date":
          return "new Date(" + thing.getTime() + ")";
        case "Array":
          var members = thing.map(function(v, i) {
            return i in thing ? stringify(v) : "";
          });
          var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
          return "[" + members.join(",") + tail + "]";
        case "Set":
        case "Map":
          return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
        default:
          var obj = "{" + Object.keys(thing).map(function(key2) {
            return safeKey(key2) + ":" + stringify(thing[key2]);
          }).join(",") + "}";
          var proto = Object.getPrototypeOf(thing);
          if (proto === null) {
            return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
          }
          return obj;
      }
    }
    var str = stringify(value);
    if (names.size) {
      var params_1 = [];
      var statements_1 = [];
      var values_1 = [];
      names.forEach(function(name, thing) {
        params_1.push(name);
        if (isPrimitive(thing)) {
          values_1.push(stringifyPrimitive(thing));
          return;
        }
        var type = getType(thing);
        switch (type) {
          case "Number":
          case "String":
          case "Boolean":
            values_1.push("Object(" + stringify(thing.valueOf()) + ")");
            break;
          case "RegExp":
            values_1.push(thing.toString());
            break;
          case "Date":
            values_1.push("new Date(" + thing.getTime() + ")");
            break;
          case "Array":
            values_1.push("Array(" + thing.length + ")");
            thing.forEach(function(v, i) {
              statements_1.push(name + "[" + i + "]=" + stringify(v));
            });
            break;
          case "Set":
            values_1.push("new Set");
            statements_1.push(name + "." + Array.from(thing).map(function(v) {
              return "add(" + stringify(v) + ")";
            }).join("."));
            break;
          case "Map":
            values_1.push("new Map");
            statements_1.push(name + "." + Array.from(thing).map(function(_a) {
              var k = _a[0], v = _a[1];
              return "set(" + stringify(k) + ", " + stringify(v) + ")";
            }).join("."));
            break;
          default:
            values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
            Object.keys(thing).forEach(function(key2) {
              statements_1.push("" + name + safeProp(key2) + "=" + stringify(thing[key2]));
            });
        }
      });
      statements_1.push("return " + str);
      return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
    } else {
      return str;
    }
  }
  function getName(num) {
    var name = "";
    do {
      name = chars$1[num % chars$1.length] + name;
      num = ~~(num / chars$1.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
  }
  function isPrimitive(thing) {
    return Object(thing) !== thing;
  }
  function stringifyPrimitive(thing) {
    if (typeof thing === "string")
      return stringifyString(thing);
    if (thing === void 0)
      return "void 0";
    if (thing === 0 && 1 / thing < 0)
      return "-0";
    var str = String(thing);
    if (typeof thing === "number")
      return str.replace(/^(-)?0\./, "$1.");
    return str;
  }
  function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
  }
  function escapeUnsafeChar(c) {
    return escaped2[c] || c;
  }
  function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
  }
  function safeKey(key2) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escapeUnsafeChars(JSON.stringify(key2));
  }
  function safeProp(key2) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? "." + key2 : "[" + escapeUnsafeChars(JSON.stringify(key2)) + "]";
  }
  function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
      var char = str.charAt(i);
      var code = char.charCodeAt(0);
      if (char === '"') {
        result += '\\"';
      } else if (char in escaped2) {
        result += escaped2[char];
      } else if (code >= 55296 && code <= 57343) {
        var next = str.charCodeAt(i + 1);
        if (code <= 56319 && (next >= 56320 && next <= 57343)) {
          result += char + str[++i];
        } else {
          result += "\\u" + code.toString(16).toUpperCase();
        }
      } else {
        result += char;
      }
    }
    result += '"';
    return result;
  }
  function noop() {
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
  }
  Promise.resolve();
  var subscriber_queue = [];
  function readable(value, start) {
    return {
      subscribe: writable(value, start).subscribe
    };
  }
  function writable(value, start = noop) {
    let stop;
    const subscribers = /* @__PURE__ */ new Set();
    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update(fn) {
      set(fn(value));
    }
    function subscribe(run2, invalidate = noop) {
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set) || noop;
      }
      run2(value);
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0) {
          stop();
          stop = null;
        }
      };
    }
    return { set, update, subscribe };
  }
  function coalesce_to_error(err) {
    return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
  }
  var render_json_payload_script_dict = {
    "<": "\\u003C",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  var render_json_payload_script_regex = new RegExp(`[${Object.keys(render_json_payload_script_dict).join("")}]`, "g");
  function render_json_payload_script(attrs, payload) {
    const safe_payload = JSON.stringify(payload).replace(render_json_payload_script_regex, (match) => render_json_payload_script_dict[match]);
    let safe_attrs = "";
    for (const [key2, value] of Object.entries(attrs)) {
      if (value === void 0)
        continue;
      safe_attrs += ` sveltekit:data-${key2}=${escape_html_attr(value)}`;
    }
    return `<script type="application/json"${safe_attrs}>${safe_payload}<\/script>`;
  }
  var escape_html_attr_dict = {
    "&": "&amp;",
    '"': "&quot;"
  };
  var escape_html_attr_regex = new RegExp(`[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`, "g");
  function escape_html_attr(str) {
    const escaped_str = str.replace(escape_html_attr_regex, (match) => {
      if (match.length === 2) {
        return match;
      }
      return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
    });
    return `"${escaped_str}"`;
  }
  var s = JSON.stringify;
  function create_prerendering_url_proxy(url) {
    return new Proxy(url, {
      get: (target, prop, receiver) => {
        if (prop === "search" || prop === "searchParams") {
          throw new Error(`Cannot access url.${prop} on a page with prerendering enabled`);
        }
        return Reflect.get(target, prop, receiver);
      }
    });
  }
  var encoder = new TextEncoder();
  function sha256(data) {
    if (!key[0])
      precompute();
    const out = init.slice(0);
    const array = encode(data);
    for (let i = 0; i < array.length; i += 16) {
      const w = array.subarray(i, i + 16);
      let tmp;
      let a;
      let b;
      let out0 = out[0];
      let out1 = out[1];
      let out2 = out[2];
      let out3 = out[3];
      let out4 = out[4];
      let out5 = out[5];
      let out6 = out[6];
      let out7 = out[7];
      for (let i2 = 0; i2 < 64; i2++) {
        if (i2 < 16) {
          tmp = w[i2];
        } else {
          a = w[i2 + 1 & 15];
          b = w[i2 + 14 & 15];
          tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
        }
        tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
        out7 = out6;
        out6 = out5;
        out5 = out4;
        out4 = out3 + tmp | 0;
        out3 = out2;
        out2 = out1;
        out1 = out0;
        out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
      }
      out[0] = out[0] + out0 | 0;
      out[1] = out[1] + out1 | 0;
      out[2] = out[2] + out2 | 0;
      out[3] = out[3] + out3 | 0;
      out[4] = out[4] + out4 | 0;
      out[5] = out[5] + out5 | 0;
      out[6] = out[6] + out6 | 0;
      out[7] = out[7] + out7 | 0;
    }
    const bytes = new Uint8Array(out.buffer);
    reverse_endianness(bytes);
    return base64(bytes);
  }
  var init = new Uint32Array(8);
  var key = new Uint32Array(64);
  function precompute() {
    function frac(x) {
      return (x - Math.floor(x)) * 4294967296;
    }
    let prime = 2;
    for (let i = 0; i < 64; prime++) {
      let is_prime = true;
      for (let factor = 2; factor * factor <= prime; factor++) {
        if (prime % factor === 0) {
          is_prime = false;
          break;
        }
      }
      if (is_prime) {
        if (i < 8) {
          init[i] = frac(prime ** (1 / 2));
        }
        key[i] = frac(prime ** (1 / 3));
        i++;
      }
    }
  }
  function reverse_endianness(bytes) {
    for (let i = 0; i < bytes.length; i += 4) {
      const a = bytes[i + 0];
      const b = bytes[i + 1];
      const c = bytes[i + 2];
      const d = bytes[i + 3];
      bytes[i + 0] = d;
      bytes[i + 1] = c;
      bytes[i + 2] = b;
      bytes[i + 3] = a;
    }
  }
  function encode(str) {
    const encoded = encoder.encode(str);
    const length = encoded.length * 8;
    const size = 512 * Math.ceil((length + 65) / 512);
    const bytes = new Uint8Array(size / 8);
    bytes.set(encoded);
    bytes[encoded.length] = 128;
    reverse_endianness(bytes);
    const words = new Uint32Array(bytes.buffer);
    words[words.length - 2] = Math.floor(length / 4294967296);
    words[words.length - 1] = length;
    return words;
  }
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  function base64(bytes) {
    const l = bytes.length;
    let result = "";
    let i;
    for (i = 2; i < l; i += 3) {
      result += chars[bytes[i - 2] >> 2];
      result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
      result += chars[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
      result += chars[bytes[i] & 63];
    }
    if (i === l + 1) {
      result += chars[bytes[i - 2] >> 2];
      result += chars[(bytes[i - 2] & 3) << 4];
      result += "==";
    }
    if (i === l) {
      result += chars[bytes[i - 2] >> 2];
      result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
      result += chars[(bytes[i - 1] & 15) << 2];
      result += "=";
    }
    return result;
  }
  var csp_ready;
  var generate_nonce;
  var generate_hash;
  if (typeof crypto !== "undefined") {
    const array = new Uint8Array(16);
    generate_nonce = () => {
      crypto.getRandomValues(array);
      return base64(array);
    };
    generate_hash = sha256;
  } else {
    const name = "crypto";
    csp_ready = import(name).then((crypto2) => {
      generate_nonce = () => {
        return crypto2.randomBytes(16).toString("base64");
      };
      generate_hash = (input) => {
        return crypto2.createHash("sha256").update(input, "utf-8").digest().toString("base64");
      };
    });
  }
  var quoted = /* @__PURE__ */ new Set([
    "self",
    "unsafe-eval",
    "unsafe-hashes",
    "unsafe-inline",
    "none",
    "strict-dynamic",
    "report-sample"
  ]);
  var crypto_pattern = /^(nonce|sha\d\d\d)-/;
  var Csp = class {
    constructor({ mode, directives }, { dev, prerender, needs_nonce }) {
      __privateAdd(this, _use_hashes, void 0);
      __privateAdd(this, _dev, void 0);
      __privateAdd(this, _script_needs_csp, void 0);
      __privateAdd(this, _style_needs_csp, void 0);
      __privateAdd(this, _directives, void 0);
      __privateAdd(this, _script_src, void 0);
      __privateAdd(this, _style_src, void 0);
      __privateSet(this, _use_hashes, mode === "hash" || mode === "auto" && prerender);
      __privateSet(this, _directives, dev ? { ...directives } : directives);
      __privateSet(this, _dev, dev);
      const d = __privateGet(this, _directives);
      if (dev) {
        const effective_style_src2 = d["style-src"] || d["default-src"];
        if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
          d["style-src"] = [...effective_style_src2, "unsafe-inline"];
        }
      }
      __privateSet(this, _script_src, []);
      __privateSet(this, _style_src, []);
      const effective_script_src = d["script-src"] || d["default-src"];
      const effective_style_src = d["style-src"] || d["default-src"];
      __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
      __privateSet(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
      this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
      this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
      if (this.script_needs_nonce || this.style_needs_nonce || needs_nonce) {
        this.nonce = generate_nonce();
      }
    }
    add_script(content) {
      if (__privateGet(this, _script_needs_csp)) {
        if (__privateGet(this, _use_hashes)) {
          __privateGet(this, _script_src).push(`sha256-${generate_hash(content)}`);
        } else if (__privateGet(this, _script_src).length === 0) {
          __privateGet(this, _script_src).push(`nonce-${this.nonce}`);
        }
      }
    }
    add_style(content) {
      if (__privateGet(this, _style_needs_csp)) {
        if (__privateGet(this, _use_hashes)) {
          __privateGet(this, _style_src).push(`sha256-${generate_hash(content)}`);
        } else if (__privateGet(this, _style_src).length === 0) {
          __privateGet(this, _style_src).push(`nonce-${this.nonce}`);
        }
      }
    }
    get_header(is_meta = false) {
      const header = [];
      const directives = { ...__privateGet(this, _directives) };
      if (__privateGet(this, _style_src).length > 0) {
        directives["style-src"] = [
          ...directives["style-src"] || directives["default-src"] || [],
          ...__privateGet(this, _style_src)
        ];
      }
      if (__privateGet(this, _script_src).length > 0) {
        directives["script-src"] = [
          ...directives["script-src"] || directives["default-src"] || [],
          ...__privateGet(this, _script_src)
        ];
      }
      for (const key2 in directives) {
        if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
          continue;
        }
        const value = directives[key2];
        if (!value)
          continue;
        const directive = [key2];
        if (Array.isArray(value)) {
          value.forEach((value2) => {
            if (quoted.has(value2) || crypto_pattern.test(value2)) {
              directive.push(`'${value2}'`);
            } else {
              directive.push(value2);
            }
          });
        }
        header.push(directive.join(" "));
      }
      return header.join("; ");
    }
    get_meta() {
      const content = escape_html_attr(this.get_header(true));
      return `<meta http-equiv="content-security-policy" content=${content}>`;
    }
  };
  _use_hashes = /* @__PURE__ */ new WeakMap();
  _dev = /* @__PURE__ */ new WeakMap();
  _script_needs_csp = /* @__PURE__ */ new WeakMap();
  _style_needs_csp = /* @__PURE__ */ new WeakMap();
  _directives = /* @__PURE__ */ new WeakMap();
  _script_src = /* @__PURE__ */ new WeakMap();
  _style_src = /* @__PURE__ */ new WeakMap();
  var updated = {
    ...readable(false),
    check: () => false
  };
  async function render_response({
    branch,
    options,
    state,
    $session,
    page_config,
    status,
    error: error2 = null,
    event,
    resolve_opts,
    stuff
  }) {
    if (state.prerender) {
      if (options.csp.mode === "nonce") {
        throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
      }
      if (options.template_contains_nonce) {
        throw new Error("Cannot use prerendering if page template contains %svelte.nonce%");
      }
    }
    const stylesheets = new Set(options.manifest._.entry.css);
    const modulepreloads = new Set(options.manifest._.entry.js);
    const styles = /* @__PURE__ */ new Map();
    const serialized_data = [];
    let shadow_props;
    let rendered;
    let is_private = false;
    let maxage;
    if (error2) {
      error2.stack = options.get_stack(error2);
    }
    if (resolve_opts.ssr) {
      branch.forEach(({ node, props: props2, loaded, fetched, uses_credentials }) => {
        if (node.css)
          node.css.forEach((url) => stylesheets.add(url));
        if (node.js)
          node.js.forEach((url) => modulepreloads.add(url));
        if (node.styles)
          Object.entries(node.styles).forEach(([k, v]) => styles.set(k, v));
        if (fetched && page_config.hydrate)
          serialized_data.push(...fetched);
        if (props2)
          shadow_props = props2;
        if (uses_credentials)
          is_private = true;
        maxage = loaded.maxage;
      });
      const session = writable($session);
      const props = {
        stores: {
          page: writable(null),
          navigating: writable(null),
          session: {
            ...session,
            subscribe: (fn) => {
              is_private = true;
              return session.subscribe(fn);
            }
          },
          updated
        },
        page: {
          error: error2,
          params: event.params,
          routeId: event.routeId,
          status,
          stuff,
          url: state.prerender ? create_prerendering_url_proxy(event.url) : event.url
        },
        components: branch.map(({ node }) => node.module.default)
      };
      const print_error = (property, replacement) => {
        Object.defineProperty(props.page, property, {
          get: () => {
            throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
          }
        });
      };
      print_error("origin", "origin");
      print_error("path", "pathname");
      print_error("query", "searchParams");
      for (let i = 0; i < branch.length; i += 1) {
        props[`props_${i}`] = await branch[i].loaded.props;
      }
      rendered = options.root.render(props);
    } else {
      rendered = { head: "", html: "", css: { code: "", map: null } };
    }
    let { head, html: body } = rendered;
    const inlined_style = Array.from(styles.values()).join("\n");
    await csp_ready;
    const csp = new Csp(options.csp, {
      dev: options.dev,
      prerender: !!state.prerender,
      needs_nonce: options.template_contains_nonce
    });
    const target = hash(body);
    const init_app = `
		import { start } from ${s(options.prefix + options.manifest._.entry.file)};
		start({
			target: document.querySelector('[data-hydrate="${target}"]').parentNode,
			paths: ${s(options.paths)},
			session: ${try_serialize($session, (error3) => {
      throw new Error(`Failed to serialize session data: ${error3.message}`);
    })},
			route: ${!!page_config.router},
			spa: ${!resolve_opts.ssr},
			trailing_slash: ${s(options.trailing_slash)},
			hydrate: ${resolve_opts.ssr && page_config.hydrate ? `{
				status: ${status},
				error: ${serialize_error(error2)},
				nodes: [
					${(branch || []).map(({ node }) => `import(${s(options.prefix + node.entry)})`).join(",\n						")}
				],
				params: ${devalue(event.params)},
				routeId: ${s(event.routeId)}
			}` : "null"}
		});
	`;
    const init_service_worker = `
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('${options.service_worker}');
		}
	`;
    if (options.amp) {
      const styles2 = `${inlined_style}
${rendered.css.code}`;
      head += `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>

		<style amp-custom>${styles2}</style>`;
      if (options.service_worker) {
        head += '<script async custom-element="amp-install-serviceworker" src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"><\/script>';
        body += `<amp-install-serviceworker src="${options.service_worker}" layout="nodisplay"></amp-install-serviceworker>`;
      }
    } else {
      if (inlined_style) {
        const attributes = [];
        if (options.dev)
          attributes.push(" data-svelte");
        if (csp.style_needs_nonce)
          attributes.push(` nonce="${csp.nonce}"`);
        csp.add_style(inlined_style);
        head += `
	<style${attributes.join("")}>${inlined_style}</style>`;
      }
      head += Array.from(stylesheets).map((dep) => {
        const attributes = [
          'rel="stylesheet"',
          `href="${options.prefix + dep}"`
        ];
        if (csp.style_needs_nonce) {
          attributes.push(`nonce="${csp.nonce}"`);
        }
        if (styles.has(dep)) {
          attributes.push("disabled", 'media="(max-width: 0)"');
        }
        return `
	<link ${attributes.join(" ")}>`;
      }).join("");
      if (page_config.router || page_config.hydrate) {
        head += Array.from(modulepreloads).map((dep) => `
	<link rel="modulepreload" href="${options.prefix + dep}">`).join("");
        const attributes = ['type="module"', `data-hydrate="${target}"`];
        csp.add_script(init_app);
        if (csp.script_needs_nonce) {
          attributes.push(`nonce="${csp.nonce}"`);
        }
        body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
        body += serialized_data.map(({ url, body: body2, response }) => render_json_payload_script({ type: "data", url, body: typeof body2 === "string" ? hash(body2) : void 0 }, response)).join("\n	");
        if (shadow_props) {
          body += render_json_payload_script({ type: "props" }, shadow_props);
        }
      }
      if (options.service_worker) {
        csp.add_script(init_service_worker);
        head += `
				<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
      }
    }
    if (state.prerender && !options.amp) {
      const http_equiv = [];
      const csp_headers = csp.get_meta();
      if (csp_headers) {
        http_equiv.push(csp_headers);
      }
      if (maxage) {
        http_equiv.push(`<meta http-equiv="cache-control" content="max-age=${maxage}">`);
      }
      if (http_equiv.length > 0) {
        head = http_equiv.join("\n") + head;
      }
    }
    const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
    const assets2 = options.paths.assets || (segments.length > 0 ? segments.map(() => "..").join("/") : ".");
    const html = await resolve_opts.transformPage({
      html: options.template({ head, body, assets: assets2, nonce: csp.nonce })
    });
    const headers = new Headers({
      "content-type": "text/html",
      etag: `"${hash(html)}"`
    });
    if (maxage) {
      headers.set("cache-control", `${is_private ? "private" : "public"}, max-age=${maxage}`);
    }
    if (!options.floc) {
      headers.set("permissions-policy", "interest-cohort=()");
    }
    if (!state.prerender) {
      const csp_header = csp.get_header();
      if (csp_header) {
        headers.set("content-security-policy", csp_header);
      }
    }
    return new Response(html, {
      status,
      headers
    });
  }
  function try_serialize(data, fail) {
    try {
      return devalue(data);
    } catch (err) {
      if (fail)
        fail(coalesce_to_error(err));
      return null;
    }
  }
  function serialize_error(error2) {
    if (!error2)
      return null;
    let serialized = try_serialize(error2);
    if (!serialized) {
      const { name, message, stack } = error2;
      serialized = try_serialize({ ...error2, name, message, stack });
    }
    if (!serialized) {
      serialized = "{}";
    }
    return serialized;
  }
  function normalize(loaded) {
    const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
    if (loaded.error || has_error_status) {
      const status = loaded.status;
      if (!loaded.error && has_error_status) {
        return {
          status: status || 500,
          error: new Error()
        };
      }
      const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
      if (!(error2 instanceof Error)) {
        return {
          status: 500,
          error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
        };
      }
      if (!status || status < 400 || status > 599) {
        console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
        return { status: 500, error: error2 };
      }
      return { status, error: error2 };
    }
    if (loaded.redirect) {
      if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
        return {
          status: 500,
          error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
        };
      }
      if (typeof loaded.redirect !== "string") {
        return {
          status: 500,
          error: new Error('"redirect" property returned from load() must be a string')
        };
      }
    }
    if (loaded.context) {
      throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');
    }
    return loaded;
  }
  var absolute = /^([a-z]+:)?\/?\//;
  var scheme = /^[a-z]+:/;
  function resolve(base2, path) {
    if (scheme.test(path))
      return path;
    const base_match = absolute.exec(base2);
    const path_match = absolute.exec(path);
    if (!base_match) {
      throw new Error(`bad base path: "${base2}"`);
    }
    const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
    const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
    baseparts.pop();
    for (let i = 0; i < pathparts.length; i += 1) {
      const part = pathparts[i];
      if (part === ".")
        continue;
      else if (part === "..")
        baseparts.pop();
      else
        baseparts.push(part);
    }
    const prefix2 = path_match && path_match[0] || base_match && base_match[0] || "";
    return `${prefix2}${baseparts.join("/")}`;
  }
  function is_root_relative(path) {
    return path[0] === "/" && path[1] !== "/";
  }
  function normalize_path(path, trailing_slash) {
    if (path === "/" || trailing_slash === "ignore")
      return path;
    if (trailing_slash === "never") {
      return path.endsWith("/") ? path.slice(0, -1) : path;
    } else if (trailing_slash === "always" && /\/[^./]+$/.test(path)) {
      return path + "/";
    }
    return path;
  }
  async function load_node({
    event,
    options,
    state,
    route,
    node,
    $session,
    stuff,
    is_error,
    is_leaf,
    status,
    error: error2
  }) {
    const { module } = node;
    let uses_credentials = false;
    const fetched = [];
    let set_cookie_headers = [];
    let loaded;
    const shadow = is_leaf ? await load_shadow_data(route, event, options, !!state.prerender) : {};
    if (shadow.cookies) {
      set_cookie_headers.push(...shadow.cookies);
    }
    if (shadow.error) {
      loaded = {
        status: shadow.status,
        error: shadow.error
      };
    } else if (shadow.redirect) {
      loaded = {
        status: shadow.status,
        redirect: shadow.redirect
      };
    } else if (module.load) {
      const load_input = {
        url: state.prerender ? create_prerendering_url_proxy(event.url) : event.url,
        params: event.params,
        props: shadow.body || {},
        routeId: event.routeId,
        get session() {
          uses_credentials = true;
          return $session;
        },
        fetch: async (resource, opts = {}) => {
          let requested;
          if (typeof resource === "string") {
            requested = resource;
          } else {
            requested = resource.url;
            opts = {
              method: resource.method,
              headers: resource.headers,
              body: resource.body,
              mode: resource.mode,
              credentials: resource.credentials,
              cache: resource.cache,
              redirect: resource.redirect,
              referrer: resource.referrer,
              integrity: resource.integrity,
              ...opts
            };
          }
          opts.headers = new Headers(opts.headers);
          for (const [key2, value] of event.request.headers) {
            if (key2 !== "authorization" && key2 !== "cookie" && key2 !== "host" && key2 !== "if-none-match" && !opts.headers.has(key2)) {
              opts.headers.set(key2, value);
            }
          }
          const resolved = resolve(event.url.pathname, requested.split("?")[0]);
          let response;
          let dependency;
          const prefix2 = options.paths.assets || options.paths.base;
          const filename = decodeURIComponent(resolved.startsWith(prefix2) ? resolved.slice(prefix2.length) : resolved).slice(1);
          const filename_html = `${filename}/index.html`;
          const is_asset = options.manifest.assets.has(filename);
          const is_asset_html = options.manifest.assets.has(filename_html);
          if (is_asset || is_asset_html) {
            const file = is_asset ? filename : filename_html;
            if (options.read) {
              const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
              response = new Response(options.read(file), {
                headers: type ? { "content-type": type } : {}
              });
            } else {
              response = await fetch(`${event.url.origin}/${file}`, opts);
            }
          } else if (is_root_relative(resolved)) {
            if (opts.credentials !== "omit") {
              uses_credentials = true;
              const cookie = event.request.headers.get("cookie");
              const authorization = event.request.headers.get("authorization");
              if (cookie) {
                opts.headers.set("cookie", cookie);
              }
              if (authorization && !opts.headers.has("authorization")) {
                opts.headers.set("authorization", authorization);
              }
            }
            if (opts.body && typeof opts.body !== "string") {
              throw new Error("Request body must be a string");
            }
            response = await respond(new Request(new URL(requested, event.url).href, { ...opts, credentials: void 0 }), options, {
              getClientAddress: state.getClientAddress,
              initiator: route,
              prerender: state.prerender
            });
            if (state.prerender) {
              dependency = { response, body: null };
              state.prerender.dependencies.set(resolved, dependency);
            }
          } else {
            if (resolved.startsWith("//")) {
              requested = event.url.protocol + requested;
            }
            if (`.${new URL(requested).hostname}`.endsWith(`.${event.url.hostname}`) && opts.credentials !== "omit") {
              uses_credentials = true;
              const cookie = event.request.headers.get("cookie");
              if (cookie)
                opts.headers.set("cookie", cookie);
            }
            const external_request = new Request(requested, opts);
            response = await options.hooks.externalFetch.call(null, external_request);
          }
          const proxy = new Proxy(response, {
            get(response2, key2, _receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key3, value] of response2.headers) {
                  if (key3 === "set-cookie") {
                    set_cookie_headers = set_cookie_headers.concat(value);
                  } else if (key3 !== "etag") {
                    headers[key3] = value;
                  }
                }
                if (!opts.body || typeof opts.body === "string") {
                  const status_number = Number(response2.status);
                  if (isNaN(status_number)) {
                    throw new Error(`response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`);
                  }
                  fetched.push({
                    url: requested,
                    body: opts.body,
                    response: {
                      status: status_number,
                      statusText: response2.statusText,
                      headers,
                      body
                    }
                  });
                }
                if (dependency) {
                  dependency.body = body;
                }
                return body;
              }
              if (key2 === "arrayBuffer") {
                return async () => {
                  const buffer = await response2.arrayBuffer();
                  if (dependency) {
                    dependency.body = new Uint8Array(buffer);
                  }
                  return buffer;
                };
              }
              if (key2 === "text") {
                return text;
              }
              if (key2 === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key2, response2);
            }
          });
          return proxy;
        },
        stuff: { ...stuff }
      };
      if (options.dev) {
        Object.defineProperty(load_input, "page", {
          get: () => {
            throw new Error("`page` in `load` functions has been replaced by `url` and `params`");
          }
        });
      }
      if (is_error) {
        load_input.status = status;
        load_input.error = error2;
      }
      loaded = await module.load.call(null, load_input);
      if (!loaded) {
        throw new Error(`load function must return a value${options.dev ? ` (${node.entry})` : ""}`);
      }
      if (loaded.fallthrough) {
        throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");
      }
    } else if (shadow.body) {
      loaded = {
        props: shadow.body
      };
    } else {
      loaded = {};
    }
    if (shadow.body && state.prerender) {
      const pathname = `${event.url.pathname.replace(/\/$/, "")}/__data.json`;
      const dependency = {
        response: new Response(void 0),
        body: JSON.stringify(shadow.body)
      };
      state.prerender.dependencies.set(pathname, dependency);
    }
    return {
      node,
      props: shadow.body,
      loaded: normalize(loaded),
      stuff: loaded.stuff || stuff,
      fetched,
      set_cookie_headers,
      uses_credentials
    };
  }
  async function load_shadow_data(route, event, options, prerender) {
    if (!route.shadow)
      return {};
    try {
      const mod = await route.shadow();
      if (prerender && (mod.post || mod.put || mod.del || mod.patch)) {
        throw new Error("Cannot prerender pages that have endpoints with mutative methods");
      }
      const method = normalize_request_method(event);
      const is_get = method === "head" || method === "get";
      const handler = method === "head" ? mod.head || mod.get : mod[method];
      if (!handler && !is_get) {
        return {
          status: 405,
          error: new Error(`${method} method not allowed`)
        };
      }
      const data = {
        status: 200,
        cookies: [],
        body: {}
      };
      if (!is_get) {
        const result = await handler(event);
        if (result.fallthrough) {
          throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");
        }
        const { status, headers, body } = validate_shadow_output(result);
        data.status = status;
        add_cookies(data.cookies, headers);
        if (status >= 300 && status < 400) {
          data.redirect = headers instanceof Headers ? headers.get("location") : headers.location;
          return data;
        }
        data.body = body;
      }
      const get = method === "head" && mod.head || mod.get;
      if (get) {
        const result = await get(event);
        if (result.fallthrough) {
          throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");
        }
        const { status, headers, body } = validate_shadow_output(result);
        add_cookies(data.cookies, headers);
        data.status = status;
        if (status >= 400) {
          data.error = new Error("Failed to load data");
          return data;
        }
        if (status >= 300) {
          data.redirect = headers instanceof Headers ? headers.get("location") : headers.location;
          return data;
        }
        data.body = { ...body, ...data.body };
      }
      return data;
    } catch (e) {
      const error2 = coalesce_to_error(e);
      options.handle_error(error2, event);
      return {
        status: 500,
        error: error2
      };
    }
  }
  function add_cookies(target, headers) {
    const cookies = headers["set-cookie"];
    if (cookies) {
      if (Array.isArray(cookies)) {
        target.push(...cookies);
      } else {
        target.push(cookies);
      }
    }
  }
  function validate_shadow_output(result) {
    const { status = 200, body = {} } = result;
    let headers = result.headers || {};
    if (headers instanceof Headers) {
      if (headers.has("set-cookie")) {
        throw new Error("Endpoint request handler cannot use Headers interface with Set-Cookie headers");
      }
    } else {
      headers = lowercase_keys(headers);
    }
    if (!is_pojo(body)) {
      throw new Error("Body returned from endpoint request handler must be a plain object");
    }
    return { status, headers, body };
  }
  async function respond_with_error({
    event,
    options,
    state,
    $session,
    status,
    error: error2,
    resolve_opts
  }) {
    try {
      const branch = [];
      let stuff = {};
      if (resolve_opts.ssr) {
        const default_layout = await options.manifest._.nodes[0]();
        const default_error = await options.manifest._.nodes[1]();
        const layout_loaded = await load_node({
          event,
          options,
          state,
          route: null,
          node: default_layout,
          $session,
          stuff: {},
          is_error: false,
          is_leaf: false
        });
        const error_loaded = await load_node({
          event,
          options,
          state,
          route: null,
          node: default_error,
          $session,
          stuff: layout_loaded ? layout_loaded.stuff : {},
          is_error: true,
          is_leaf: false,
          status,
          error: error2
        });
        branch.push(layout_loaded, error_loaded);
        stuff = error_loaded.stuff;
      }
      return await render_response({
        options,
        state,
        $session,
        page_config: {
          hydrate: options.hydrate,
          router: options.router
        },
        stuff,
        status,
        error: error2,
        branch,
        event,
        resolve_opts
      });
    } catch (err) {
      const error3 = coalesce_to_error(err);
      options.handle_error(error3, event);
      return new Response(error3.stack, {
        status: 500
      });
    }
  }
  async function respond$1(opts) {
    const { event, options, state, $session, route, resolve_opts } = opts;
    let nodes;
    if (!resolve_opts.ssr) {
      return await render_response({
        ...opts,
        branch: [],
        page_config: {
          hydrate: true,
          router: true
        },
        status: 200,
        error: null,
        event,
        stuff: {}
      });
    }
    try {
      nodes = await Promise.all(route.a.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()));
    } catch (err) {
      const error3 = coalesce_to_error(err);
      options.handle_error(error3, event);
      return await respond_with_error({
        event,
        options,
        state,
        $session,
        status: 500,
        error: error3,
        resolve_opts
      });
    }
    const leaf = nodes[nodes.length - 1].module;
    let page_config = get_page_config(leaf, options);
    if (state.prerender) {
      const should_prerender = leaf.prerender ?? state.prerender.default;
      if (!should_prerender) {
        return new Response(void 0, {
          status: 204
        });
      }
    }
    let branch = [];
    let status = 200;
    let error2 = null;
    let set_cookie_headers = [];
    let stuff = {};
    ssr:
      if (resolve_opts.ssr) {
        for (let i = 0; i < nodes.length; i += 1) {
          const node = nodes[i];
          let loaded;
          if (node) {
            try {
              loaded = await load_node({
                ...opts,
                node,
                stuff,
                is_error: false,
                is_leaf: i === nodes.length - 1
              });
              set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
              if (loaded.loaded.redirect) {
                return with_cookies(new Response(void 0, {
                  status: loaded.loaded.status,
                  headers: {
                    location: loaded.loaded.redirect
                  }
                }), set_cookie_headers);
              }
              if (loaded.loaded.error) {
                ({ status, error: error2 } = loaded.loaded);
              }
            } catch (err) {
              const e = coalesce_to_error(err);
              options.handle_error(e, event);
              status = 500;
              error2 = e;
            }
            if (loaded && !error2) {
              branch.push(loaded);
            }
            if (error2) {
              while (i--) {
                if (route.b[i]) {
                  const index = route.b[i];
                  const error_node = await options.manifest._.nodes[index]();
                  let node_loaded;
                  let j = i;
                  while (!(node_loaded = branch[j])) {
                    j -= 1;
                  }
                  try {
                    const error_loaded = await load_node({
                      ...opts,
                      node: error_node,
                      stuff: node_loaded.stuff,
                      is_error: true,
                      is_leaf: false,
                      status,
                      error: error2
                    });
                    if (error_loaded.loaded.error) {
                      continue;
                    }
                    page_config = get_page_config(error_node.module, options);
                    branch = branch.slice(0, j + 1).concat(error_loaded);
                    stuff = { ...node_loaded.stuff, ...error_loaded.stuff };
                    break ssr;
                  } catch (err) {
                    const e = coalesce_to_error(err);
                    options.handle_error(e, event);
                    continue;
                  }
                }
              }
              return with_cookies(await respond_with_error({
                event,
                options,
                state,
                $session,
                status,
                error: error2,
                resolve_opts
              }), set_cookie_headers);
            }
          }
          if (loaded && loaded.loaded.stuff) {
            stuff = {
              ...stuff,
              ...loaded.loaded.stuff
            };
          }
        }
      }
    try {
      return with_cookies(await render_response({
        ...opts,
        stuff,
        event,
        page_config,
        status,
        error: error2,
        branch: branch.filter(Boolean)
      }), set_cookie_headers);
    } catch (err) {
      const error3 = coalesce_to_error(err);
      options.handle_error(error3, event);
      return with_cookies(await respond_with_error({
        ...opts,
        status: 500,
        error: error3
      }), set_cookie_headers);
    }
  }
  function get_page_config(leaf, options) {
    if ("ssr" in leaf) {
      throw new Error("`export const ssr` has been removed \u2014 use the handle hook instead: https://kit.svelte.dev/docs/hooks#handle");
    }
    return {
      router: "router" in leaf ? !!leaf.router : options.router,
      hydrate: "hydrate" in leaf ? !!leaf.hydrate : options.hydrate
    };
  }
  function with_cookies(response, set_cookie_headers) {
    if (set_cookie_headers.length) {
      set_cookie_headers.forEach((value) => {
        response.headers.append("set-cookie", value);
      });
    }
    return response;
  }
  async function render_page(event, route, options, state, resolve_opts) {
    if (state.initiator === route) {
      return new Response(`Not found: ${event.url.pathname}`, {
        status: 404
      });
    }
    if (route.shadow) {
      const type = negotiate(event.request.headers.get("accept") || "text/html", [
        "text/html",
        "application/json"
      ]);
      if (type === "application/json") {
        return render_endpoint(event, await route.shadow());
      }
    }
    const $session = await options.hooks.getSession(event);
    return respond$1({
      event,
      options,
      state,
      $session,
      resolve_opts,
      route
    });
  }
  function negotiate(accept, types) {
    const parts = accept.split(",").map((str, i) => {
      const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
      if (match) {
        const [, type, subtype, q = "1"] = match;
        return { type, subtype, q: +q, i };
      }
      throw new Error(`Invalid Accept header: ${accept}`);
    }).sort((a, b) => {
      if (a.q !== b.q) {
        return b.q - a.q;
      }
      if (a.subtype === "*" !== (b.subtype === "*")) {
        return a.subtype === "*" ? 1 : -1;
      }
      if (a.type === "*" !== (b.type === "*")) {
        return a.type === "*" ? 1 : -1;
      }
      return a.i - b.i;
    });
    let accepted;
    let min_priority = Infinity;
    for (const mimetype of types) {
      const [type, subtype] = mimetype.split("/");
      const priority = parts.findIndex((part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*"));
      if (priority !== -1 && priority < min_priority) {
        accepted = mimetype;
        min_priority = priority;
      }
    }
    return accepted;
  }
  function exec(match, names, types, matchers) {
    const params = {};
    for (let i = 0; i < names.length; i += 1) {
      const name = names[i];
      const type = types[i];
      const value = match[i + 1] || "";
      if (type) {
        const matcher = matchers[type];
        if (!matcher)
          throw new Error(`Missing "${type}" param matcher`);
        if (!matcher(value))
          return;
      }
      params[name] = value;
    }
    return params;
  }
  var DATA_SUFFIX = "/__data.json";
  var default_transform = ({ html }) => html;
  async function respond(request, options, state) {
    let url = new URL(request.url);
    const normalized = normalize_path(url.pathname, options.trailing_slash);
    if (normalized !== url.pathname && !state.prerender?.fallback) {
      return new Response(void 0, {
        status: 301,
        headers: {
          location: (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
        }
      });
    }
    const { parameter, allowed } = options.method_override;
    const method_override = url.searchParams.get(parameter)?.toUpperCase();
    if (method_override) {
      if (request.method === "POST") {
        if (allowed.includes(method_override)) {
          request = new Proxy(request, {
            get: (target, property, _receiver) => {
              if (property === "method")
                return method_override;
              return Reflect.get(target, property, target);
            }
          });
        } else {
          const verb = allowed.length === 0 ? "enabled" : "allowed";
          const body = `${parameter}=${method_override} is not ${verb}. See https://kit.svelte.dev/docs/configuration#methodoverride`;
          return new Response(body, {
            status: 400
          });
        }
      } else {
        throw new Error(`${parameter}=${method_override} is only allowed with POST requests`);
      }
    }
    let decoded = decodeURI(url.pathname);
    let route = null;
    let params = {};
    if (options.paths.base && !state.prerender?.fallback) {
      if (!decoded.startsWith(options.paths.base)) {
        return new Response(void 0, { status: 404 });
      }
      decoded = decoded.slice(options.paths.base.length) || "/";
    }
    const is_data_request = decoded.endsWith(DATA_SUFFIX);
    if (is_data_request) {
      decoded = decoded.slice(0, -DATA_SUFFIX.length) || "/";
      const normalized2 = normalize_path(url.pathname.slice(0, -DATA_SUFFIX.length), options.trailing_slash);
      url = new URL(url.origin + normalized2 + url.search);
    }
    if (!state.prerender || !state.prerender.fallback) {
      const matchers = await options.manifest._.matchers();
      for (const candidate of options.manifest._.routes) {
        const match = candidate.pattern.exec(decoded);
        if (!match)
          continue;
        const matched = exec(match, candidate.names, candidate.types, matchers);
        if (matched) {
          route = candidate;
          params = decode_params(matched);
          break;
        }
      }
    }
    const event = {
      get clientAddress() {
        if (!state.getClientAddress) {
          throw new Error(`${"@sveltejs/adapter-cloudflare-workers"} does not specify getClientAddress. Please raise an issue`);
        }
        Object.defineProperty(event, "clientAddress", {
          value: state.getClientAddress()
        });
        return event.clientAddress;
      },
      locals: {},
      params,
      platform: state.platform,
      request,
      routeId: route && route.id,
      url
    };
    const removed = (property, replacement, suffix = "") => ({
      get: () => {
        throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
      }
    });
    const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
    const body_getter = {
      get: () => {
        throw new Error("To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details);
      }
    };
    Object.defineProperties(event, {
      method: removed("method", "request.method", details),
      headers: removed("headers", "request.headers", details),
      origin: removed("origin", "url.origin"),
      path: removed("path", "url.pathname"),
      query: removed("query", "url.searchParams"),
      body: body_getter,
      rawBody: body_getter
    });
    let resolve_opts = {
      ssr: true,
      transformPage: default_transform
    };
    try {
      const response = await options.hooks.handle({
        event,
        resolve: async (event2, opts) => {
          if (opts) {
            resolve_opts = {
              ssr: opts.ssr !== false,
              transformPage: opts.transformPage || default_transform
            };
          }
          if (state.prerender && state.prerender.fallback) {
            return await render_response({
              event: event2,
              options,
              state,
              $session: await options.hooks.getSession(event2),
              page_config: { router: true, hydrate: true },
              stuff: {},
              status: 200,
              error: null,
              branch: [],
              resolve_opts: {
                ...resolve_opts,
                ssr: false
              }
            });
          }
          if (route) {
            let response2;
            if (is_data_request && route.type === "page" && route.shadow) {
              response2 = await render_endpoint(event2, await route.shadow());
              if (request.headers.has("x-sveltekit-load")) {
                if (response2.status >= 300 && response2.status < 400) {
                  const location = response2.headers.get("location");
                  if (location) {
                    const headers = new Headers(response2.headers);
                    headers.set("x-sveltekit-location", location);
                    response2 = new Response(void 0, {
                      status: 204,
                      headers
                    });
                  }
                }
              }
            } else {
              response2 = route.type === "endpoint" ? await render_endpoint(event2, await route.load()) : await render_page(event2, route, options, state, resolve_opts);
            }
            if (response2) {
              if (response2.status === 200 && response2.headers.has("etag")) {
                let if_none_match_value = request.headers.get("if-none-match");
                if (if_none_match_value?.startsWith('W/"')) {
                  if_none_match_value = if_none_match_value.substring(2);
                }
                const etag = response2.headers.get("etag");
                if (if_none_match_value === etag) {
                  const headers = new Headers({ etag });
                  for (const key2 of [
                    "cache-control",
                    "content-location",
                    "date",
                    "expires",
                    "vary"
                  ]) {
                    const value = response2.headers.get(key2);
                    if (value)
                      headers.set(key2, value);
                  }
                  return new Response(void 0, {
                    status: 304,
                    headers
                  });
                }
              }
              return response2;
            }
          }
          if (!state.initiator) {
            const $session = await options.hooks.getSession(event2);
            return await respond_with_error({
              event: event2,
              options,
              state,
              $session,
              status: 404,
              error: new Error(`Not found: ${event2.url.pathname}`),
              resolve_opts
            });
          }
          if (state.prerender) {
            return new Response("not found", { status: 404 });
          }
          return await fetch(request);
        },
        get request() {
          throw new Error("request in handle has been replaced with event" + details);
        }
      });
      if (response && !(response instanceof Response)) {
        throw new Error("handle must return a Response object" + details);
      }
      return response;
    } catch (e) {
      const error2 = coalesce_to_error(e);
      options.handle_error(error2, event);
      try {
        const $session = await options.hooks.getSession(event);
        return await respond_with_error({
          event,
          options,
          state,
          $session,
          status: 500,
          error: error2,
          resolve_opts
        });
      } catch (e2) {
        const error3 = coalesce_to_error(e2);
        return new Response(options.dev ? error3.stack : error3.message, {
          status: 500
        });
      }
    }
  }
  var base = "";
  var assets = "";
  function set_paths(paths) {
    base = paths.base;
    assets = paths.assets || base;
  }
  var template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<meta name="description" content="" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n\n	<!-- <body class="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900"/> -->\n	<body class="antialiased text-slate-500 dark:text-slate-400 bg-primary "/>\n  <!-- this going to body tag above -->\n  ' + body + "\n</html>\n";
  var read = null;
  set_paths({ "base": "", "assets": "" });
  var Server = class {
    constructor(manifest2) {
      this.options = {
        amp: false,
        csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
        dev: false,
        floc: false,
        get_stack: (error2) => String(error2),
        handle_error: (error2, event) => {
          this.options.hooks.handleError({
            error: error2,
            event,
            get request() {
              throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
            }
          });
          error2.stack = this.options.get_stack(error2);
        },
        hooks: null,
        hydrate: true,
        manifest: manifest2,
        method_override: { "parameter": "_method", "allowed": [] },
        paths: { base, assets },
        prefix: assets + "/_app/",
        prerender: true,
        read,
        root: Root,
        service_worker: null,
        router: true,
        template,
        template_contains_nonce: false,
        trailing_slash: "never"
      };
    }
    async respond(request, options = {}) {
      if (!(request instanceof Request)) {
        throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
      }
      if (!this.options.hooks) {
        const module = await Promise.resolve().then(() => (init_hooks_1c45ba0b(), hooks_1c45ba0b_exports));
        this.options.hooks = {
          getSession: module.getSession || (() => ({})),
          handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
          handleError: module.handleError || (({ error: error2 }) => console.error(error2.stack)),
          externalFetch: module.externalFetch || fetch
        };
      }
      return respond(request, this.options, options);
    }
  };

  // .svelte-kit/cloudflare-workers-tmp/manifest.js
  var manifest = {
    appDir: "_app",
    assets: /* @__PURE__ */ new Set(["favicon.png"]),
    mimeTypes: { ".png": "image/png" },
    _: {
      entry: { "file": "start-581e5314.js", "js": ["start-581e5314.js", "chunks/index-e7b8a758.js"], "css": [] },
      nodes: [
        () => Promise.resolve().then(() => (init__(), __exports)),
        () => Promise.resolve().then(() => (init__2(), __exports2)),
        () => Promise.resolve().then(() => (init__3(), __exports3))
      ],
      routes: [
        {
          type: "page",
          id: "",
          pattern: /^\/$/,
          names: [],
          types: [],
          path: "/",
          shadow: null,
          a: [0, 2],
          b: [1]
        }
      ],
      matchers: async () => {
        return {};
      }
    }
  };
  var prerendered = /* @__PURE__ */ new Set([]);

  // .svelte-kit/cloudflare-workers-tmp/entry.js
  var import_kv_asset_handler = __toESM(require_dist());
  var server = new Server(manifest);
  var prefix = `/${manifest.appDir}/`;
  addEventListener("fetch", (event) => {
    event.respondWith(handle(event));
  });
  async function handle(event) {
    const { request } = event;
    const url = new URL(request.url);
    if (url.pathname.startsWith(prefix)) {
      const res = await (0, import_kv_asset_handler.getAssetFromKV)(event);
      return new Response(res.body, {
        headers: {
          "cache-control": "public, immutable, max-age=31536000",
          "content-type": res.headers.get("content-type")
        }
      });
    }
    const pathname = url.pathname.replace(/\/$/, "");
    let file = pathname.substring(1);
    try {
      file = decodeURIComponent(file);
    } catch (err) {
    }
    if (manifest.assets.has(file) || manifest.assets.has(file + "/index.html") || prerendered.has(pathname || "/")) {
      return await (0, import_kv_asset_handler.getAssetFromKV)(event);
    }
    try {
      return await server.respond(request, {
        getClientAddress() {
          return request.headers.get("cf-connecting-ip");
        }
      });
    } catch (e) {
      return new Response("Error rendering route:" + (e.message || e.toString()), { status: 500 });
    }
  }
})();

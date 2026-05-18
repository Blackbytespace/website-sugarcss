import { c as createComponent } from './astro-component_BKmo8seo.mjs';
import 'piccolore';
import { c as createRenderInstruction, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment, u as unescapeHTML, d as defineScriptVars, e as renderHead, f as renderSlot } from './prerender_0XYV0HPs.mjs';
import { useSSRContext, defineComponent, mergeProps, createVNode, resolveDynamicComponent, ref, onMounted, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderVNode, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import 'clsx';
import 'change-case';
import 'lodash.clone';
import 'lodash.clonedeep';
import 'json-cyclic';
import 'is-class';
import 'is-glob';
import 'is-valid-path';
import { inflate } from 'flattenjs';
import 'minimatch';
import 'hash-sum';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const BlackbyteLogoSvg = "<svg viewBox=\"0 0 559 90\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path\n        d=\"M518.245 47.6066C518.445 52.5399 519.978 56.5066 522.845 59.5066C525.711 62.5066 529.711 64.0066 534.845 64.0066C537.178 64.0066 539.211 63.7399 540.945 63.2066C542.678 62.6733 544.145 61.9399 545.345 61.0066C546.611 60.0733 547.611 59.0066 548.345 57.8066C549.145 56.5399 549.778 55.2066 550.245 53.8066L557.645 55.8066C556.245 60.4066 553.645 64.1733 549.845 67.1066C546.111 69.9733 541.045 71.4066 534.645 71.4066C531.111 71.4066 527.845 70.8066 524.845 69.6066C521.911 68.3399 519.378 66.5733 517.245 64.3066C515.111 62.0399 513.445 59.3399 512.245 56.2066C511.045 53.0733 510.445 49.6066 510.445 45.8066V43.4066C510.445 39.9399 511.045 36.7066 512.245 33.7066C513.511 30.7066 515.245 28.1399 517.445 26.0066C519.645 23.8066 522.211 22.1066 525.145 20.9066C528.145 19.6399 531.378 19.0066 534.845 19.0066C538.911 19.0066 542.411 19.7733 545.345 21.3066C548.345 22.7733 550.778 24.6066 552.645 26.8066C554.578 29.0066 555.978 31.4066 556.845 34.0066C557.778 36.6066 558.245 39.0066 558.245 41.2066V47.6066H518.245ZM534.845 26.4066C532.645 26.4066 530.578 26.7733 528.645 27.5066C526.778 28.1733 525.111 29.1399 523.645 30.4066C522.245 31.6733 521.078 33.1733 520.145 34.9066C519.278 36.5733 518.711 38.4066 518.445 40.4066H550.445C550.311 38.2733 549.778 36.3399 548.845 34.6066C547.978 32.8733 546.811 31.4066 545.345 30.2066C543.945 29.0066 542.311 28.0733 540.445 27.4066C538.645 26.7399 536.778 26.4066 534.845 26.4066Z\"\n        fill=\"black\" />\n    <path\n        d=\"M463.614 20.4066H479.214V0.0065918H487.014V20.4066H506.214V27.6066H487.014V59.8066C487.014 61.8066 487.914 62.8066 489.714 62.8066H503.814V70.0066H486.914C484.647 70.0066 482.781 69.2733 481.314 67.8066C479.914 66.3399 479.214 64.4733 479.214 62.2066V27.6066H463.614V20.4066Z\"\n        fill=\"black\" />\n    <path\n        d=\"M450.083 61.0065H448.883C447.283 64.2065 445.183 66.7398 442.583 68.6065C439.983 70.4732 436.683 71.4065 432.683 71.4065C429.95 71.4065 427.417 70.9398 425.083 70.0065C422.817 69.1398 420.85 67.8065 419.183 66.0065C417.583 64.2065 416.317 61.9732 415.383 59.3065C414.517 56.6398 414.083 53.5398 414.083 50.0065V20.4065H421.883V49.0065C421.883 54.2065 422.95 58.0065 425.083 60.4065C427.217 62.8065 430.483 64.0065 434.883 64.0065C439.617 64.0065 443.317 62.4065 445.983 59.2065C448.717 55.9398 450.083 51.6065 450.083 46.2065V20.4065H457.883V82.2065C457.883 84.4732 457.15 86.3398 455.683 87.8065C454.283 89.2732 452.45 90.0065 450.183 90.0065H421.883V82.8065H447.383C449.183 82.8065 450.083 81.8065 450.083 79.8065V61.0065Z\"\n        fill=\"black\" />\n    <path\n        d=\"M362.853 70.0066H355.053V0.0065918H362.853V28.2066H364.053C365.786 25.2066 368.186 22.9399 371.253 21.4066C374.32 19.8066 377.653 19.0066 381.253 19.0066C384.32 19.0066 387.22 19.5733 389.953 20.7066C392.686 21.8399 395.086 23.4733 397.153 25.6066C399.286 27.7399 400.953 30.3733 402.153 33.5066C403.42 36.6399 404.053 40.2066 404.053 44.2066V46.2066C404.053 50.2733 403.453 53.8733 402.253 57.0066C401.053 60.1399 399.386 62.7733 397.253 64.9066C395.186 67.0399 392.753 68.6733 389.953 69.8066C387.153 70.8733 384.186 71.4066 381.053 71.4066C379.453 71.4066 377.82 71.2066 376.153 70.8066C374.486 70.4733 372.886 69.9399 371.353 69.2066C369.886 68.4066 368.52 67.4733 367.253 66.4066C365.986 65.2733 364.92 63.9399 364.053 62.4066H362.853V70.0066ZM379.453 64.0066C381.853 64.0066 384.053 63.6066 386.053 62.8066C388.053 61.9399 389.786 60.7399 391.253 59.2066C392.786 57.6733 393.953 55.8066 394.753 53.6066C395.62 51.4066 396.053 48.9399 396.053 46.2066V44.2066C396.053 41.5399 395.62 39.1399 394.753 37.0066C393.953 34.8066 392.786 32.9399 391.253 31.4066C389.786 29.8066 388.02 28.5733 385.953 27.7066C383.953 26.8399 381.786 26.4066 379.453 26.4066C377.12 26.4066 374.953 26.8733 372.953 27.8066C370.953 28.6733 369.186 29.9066 367.653 31.5066C366.186 33.1066 365.02 35.0399 364.153 37.3066C363.286 39.5066 362.853 41.9399 362.853 44.6066V45.8066C362.853 48.5399 363.286 51.0399 364.153 53.3066C365.02 55.5066 366.186 57.4066 367.653 59.0066C369.186 60.6066 370.953 61.8399 372.953 62.7066C374.953 63.5733 377.12 64.0066 379.453 64.0066Z\"\n        fill=\"black\" />\n    <path\n        d=\"M315.423 41.0066H317.123L336.023 20.4066H345.623V21.0066L325.023 43.7066V45.5066L348.023 69.4066V70.0066H338.423L317.323 48.2066H315.423V70.0066H307.623V0.0065918H315.423V41.0066Z\"\n        fill=\"black\" />\n    <path\n        d=\"M298.792 52.4066C298.259 55.1399 297.326 57.6733 295.992 60.0066C294.726 62.3399 293.092 64.3733 291.092 66.1066C289.092 67.7733 286.759 69.0733 284.092 70.0066C281.425 70.9399 278.459 71.4066 275.192 71.4066C271.726 71.4066 268.426 70.8399 265.292 69.7066C262.226 68.5733 259.526 66.9399 257.192 64.8066C254.859 62.6066 252.992 59.9399 251.592 56.8066C250.259 53.6733 249.592 50.0733 249.592 46.0066V44.8066C249.592 40.8066 250.259 37.2066 251.592 34.0066C252.992 30.8066 254.859 28.1066 257.192 25.9066C259.526 23.7066 262.226 22.0066 265.292 20.8066C268.426 19.6066 271.726 19.0066 275.192 19.0066C278.326 19.0066 281.226 19.4733 283.892 20.4066C286.559 21.3399 288.892 22.6733 290.892 24.4066C292.959 26.0733 294.625 28.0733 295.892 30.4066C297.226 32.7399 298.126 35.2733 298.592 38.0066L290.792 39.8066C290.592 38.0733 290.092 36.4066 289.292 34.8066C288.559 33.1399 287.526 31.7066 286.192 30.5066C284.926 29.2399 283.359 28.2399 281.492 27.5066C279.626 26.7733 277.459 26.4066 274.992 26.4066C272.592 26.4066 270.326 26.8733 268.192 27.8066C266.126 28.6733 264.292 29.9399 262.692 31.6066C261.092 33.2066 259.825 35.1399 258.892 37.4066C258.025 39.6733 257.592 42.1399 257.592 44.8066V46.0066C257.592 48.8066 258.025 51.3399 258.892 53.6066C259.825 55.8066 261.092 57.6733 262.692 59.2066C264.292 60.7399 266.159 61.9399 268.292 62.8066C270.426 63.6066 272.726 64.0066 275.192 64.0066C277.659 64.0066 279.792 63.6399 281.592 62.9066C283.459 62.1066 285.026 61.1066 286.292 59.9066C287.626 58.6399 288.659 57.2066 289.392 55.6066C290.192 54.0066 290.726 52.3399 290.992 50.6066L298.792 52.4066Z\"\n        fill=\"black\" />\n    <path\n        d=\"M232.162 61.6066H230.962C229.362 64.9399 227.128 67.4066 224.262 69.0066C221.462 70.6066 218.495 71.4066 215.362 71.4066C212.095 71.4066 209.062 70.8733 206.262 69.8066C203.462 68.6733 200.995 67.0399 198.862 64.9066C196.795 62.7066 195.162 60.0399 193.962 56.9066C192.762 53.7733 192.162 50.1399 192.162 46.0066V44.4066C192.162 40.3399 192.762 36.7399 193.962 33.6066C195.162 30.4733 196.795 27.8399 198.862 25.7066C200.995 23.5066 203.462 21.8399 206.262 20.7066C209.062 19.5733 212.028 19.0066 215.162 19.0066C218.562 19.0066 221.628 19.7733 224.362 21.3066C227.162 22.7733 229.362 25.0733 230.962 28.2066H232.162V20.4066H239.962V59.8066C239.962 61.8066 240.862 62.8066 242.662 62.8066H245.162V70.0066H239.862C237.595 70.0066 235.728 69.2733 234.262 67.8066C232.862 66.3399 232.162 64.4733 232.162 62.2066V61.6066ZM216.162 64.0066C218.495 64.0066 220.628 63.5733 222.562 62.7066C224.562 61.8399 226.262 60.6066 227.662 59.0066C229.062 57.4066 230.162 55.5066 230.962 53.3066C231.762 51.0399 232.162 48.5399 232.162 45.8066V44.6066C232.162 41.9399 231.762 39.5066 230.962 37.3066C230.162 35.0399 229.028 33.1066 227.562 31.5066C226.162 29.9066 224.462 28.6733 222.462 27.8066C220.528 26.8733 218.428 26.4066 216.162 26.4066C213.828 26.4066 211.695 26.8399 209.762 27.7066C207.828 28.5733 206.128 29.8066 204.662 31.4066C203.262 32.9399 202.162 34.8399 201.362 37.1066C200.562 39.3066 200.162 41.7399 200.162 44.4066V46.0066C200.162 51.6733 201.628 56.1066 204.562 59.3066C207.562 62.4399 211.428 64.0066 216.162 64.0066Z\"\n        fill=\"black\" />\n    <path\n        d=\"M146.931 62.8066H164.931V7.20659H147.531V0.0065918H172.731V62.8066H190.731V70.0066H146.931V62.8066Z\"\n        fill=\"black\" />\n    <path\n        d=\"M89.7007 62.2066H95.7007V7.80659H89.7007V0.0065918H118.001C121.334 0.0065918 124.267 0.473256 126.801 1.40659C129.401 2.33992 131.567 3.60659 133.301 5.2066C135.101 6.8066 136.434 8.73993 137.301 11.0066C138.234 13.2066 138.701 15.6066 138.701 18.2066V19.4066C138.701 21.3399 138.401 23.1066 137.801 24.7066C137.201 26.3066 136.367 27.7399 135.301 29.0066C134.234 30.2733 132.967 31.3733 131.501 32.3066C130.101 33.1733 128.567 33.8399 126.901 34.3066V35.5066C130.234 36.4399 133.034 38.2399 135.301 40.9066C137.567 43.5066 138.701 46.7066 138.701 50.5066V51.7066C138.701 54.3066 138.234 56.7399 137.301 59.0066C136.434 61.2066 135.101 63.1399 133.301 64.8066C131.567 66.4066 129.401 67.6733 126.801 68.6066C124.267 69.5399 121.334 70.0066 118.001 70.0066H89.7007V62.2066ZM104.101 62.2066H117.401C121.334 62.2066 124.534 61.2399 127.001 59.3066C129.467 57.3066 130.701 54.5733 130.701 51.1066V50.5066C130.701 46.9066 129.534 44.0733 127.201 42.0066C124.867 39.8733 121.701 38.8066 117.701 38.8066H104.101V62.2066ZM104.101 31.0066H117.701C121.701 31.0066 124.867 29.9733 127.201 27.9066C129.534 25.8399 130.701 23.0066 130.701 19.4066V18.8066C130.701 15.4066 129.467 12.7399 127.001 10.8066C124.534 8.80659 121.334 7.80659 117.401 7.80659H104.101V31.0066Z\"\n        fill=\"black\" />\n    <rect x=\"46.6666\" y=\"46.6667\" width=\"23.3333\" height=\"23.3333\" fill=\"black\" />\n    <rect x=\"23.3334\" y=\"46.6667\" width=\"23.3333\" height=\"23.3333\" fill=\"black\" />\n    <rect y=\"46.6667\" width=\"23.3333\" height=\"23.3333\" fill=\"black\" />\n    <rect x=\"46.6666\" y=\"23.3333\" width=\"23.3333\" height=\"23.3333\" fill=\"black\" />\n    <rect x=\"23.3334\" y=\"23.3333\" width=\"23.3333\" height=\"23.3333\" fill=\"black\" />\n    <rect x=\"46.6666\" width=\"23.3333\" height=\"23.3333\" fill=\"black\" />\n    <rect x=\"23.3334\" width=\"23.3333\" height=\"23.3333\" fill=\"black\" />\n    <rect width=\"23.3333\" height=\"23.3333\" fill=\"black\" />\n</svg>";

const BlackbytePictoSvg = "<svg width=\"70\" height=\"70\" viewBox=\"0 0 70 70\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"46.6666\" y=\"46.6667\" width=\"23.3333\" height=\"23.3333\" fill=\"black\"/>\n<rect x=\"23.3334\" y=\"46.6667\" width=\"23.3333\" height=\"23.3333\" fill=\"black\"/>\n<rect y=\"46.6667\" width=\"23.3333\" height=\"23.3333\" fill=\"black\"/>\n<rect x=\"46.6666\" y=\"23.3333\" width=\"23.3333\" height=\"23.3333\" fill=\"black\"/>\n<rect x=\"23.3334\" y=\"23.3333\" width=\"23.3333\" height=\"23.3333\" fill=\"black\"/>\n<rect x=\"46.6666\" width=\"23.3333\" height=\"23.3333\" fill=\"black\"/>\n<rect x=\"23.3334\" width=\"23.3333\" height=\"23.3333\" fill=\"black\"/>\n<rect width=\"23.3333\" height=\"23.3333\" fill=\"black\"/>\n</svg>\n";

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "code",
  props: {
    language: { default: "typescript" },
    filename: {},
    code: { default: "console.log('hello world');" },
    header: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "code" }, _attrs))}>`);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent("s-code"), {
    filename: $props.filename,
    language: $props.language,
    header: $props.header ? true : void 0,
    code: $props.code
  }, null), _parent);
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../website-common/src/components/ui/code/code.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Code = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "codeTabs",
  props: {
    tabs: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const selectedTabIndex = ref(0);
    const $root = ref(null);
    const selectTab = (index) => {
      selectedTabIndex.value = index;
    };
    const __returned__ = { selectedTabIndex, $root, selectTab, Code };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "code-tabs",
    ref: "$root"
  }, _attrs))}><nav class="code-tabs_nav"><ol class="code-tabs_tabs"><!--[-->`);
  ssrRenderList($props.tabs, (tab, index) => {
    _push(`<li class="${ssrRenderClass(`code-tabs_tab ${$setup.selectedTabIndex === index ? "-active" : ""}`)}"><p class="code-tabs_tab-title typo-h4">${ssrInterpolate(tab.title)}</p>`);
    if (tab.description) {
      _push(`<p class="code-tabs_tab-description typo-caption">${ssrInterpolate(tab.description)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ol></nav><div class="code-tabs_content"><div class="code-tabs_code-wrapper"><!--[-->`);
  ssrRenderList($props.tabs, (tab, index) => {
    _push(`<div class="${ssrRenderClass(`code-tabs_code ${$setup.selectedTabIndex === index ? "-active" : ""}`)}" style="${ssrRenderStyle($setup.selectedTabIndex !== -1 && $setup.selectedTabIndex === index ? null : { display: "none" })}">`);
    _push(ssrRenderComponent($setup["Code"], {
      code: tab.code,
      header: "",
      language: tab.language
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../website-common/src/components/generic/codeTabs/codeTabs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CodeTabs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);

const $$CodeTabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CodeTabs;
  const props = Astro2.props;
  return renderTemplate`${renderComponent($$result, "CodeTabs", CodeTabs, { "client:load": true, ...props, "client:component-hydration": "load", "client:component-path": "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/generic/codeTabs/codeTabs.vue", "client:component-export": "default" })}`;
}, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/generic/codeTabs/codeTabs.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const { title, version, license } = Astro2.props.websiteConfig;
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <div class="container"> <div class="footer_brand"> <a href="/"${addAttribute(title, "title")}> <div class="footer_logo"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(BlackbyteLogoSvg)}` })} </div> <h1 class="footer_title font-family-brand">${title}</h1> </a> </div> <div class="footer_spacer"></div> <div class="footer_metas"> <p class="footer_version">v${version}</p> <a class="footer_license"${addAttribute(license.url, "href")} target="_blank"${addAttribute(`Blackbyte ${Astro2.props.websiteConfig.title} ${license.name} license`, "title")}> ${license.name} </a> <a class="header_github"${addAttribute(Astro2.props.websiteConfig.repository.url, "href")}${addAttribute(`Blackbyte ${Astro2.props.websiteConfig.title} on GitHub`, "title")} target="_blank" style="position: relative"> <div class="tooltip">Github repository</div> ${renderComponent($$result, "s-icon", "s-icon", { "name": "github", "provider": "pixelarticons", "type": "brands" })} </a> <a class="header_discord"${addAttribute(Astro2.props.websiteConfig.discord.url, "href")}${addAttribute(`Blackbyte ${Astro2.props.websiteConfig.title} on Discord`, "title")} target="_blank" style="position: relative"> <div class="tooltip">Join us on Discord</div> <i class="s-icon"> <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6 20H8V22H6V20Z" fill="currentColor"></path> <path d="M6 18H8V20H6V18Z" fill="currentColor"></path> <path d="M5 16H7V18H5V16Z" fill="currentColor"></path> <path d="M7 15H9V17H7V15Z" fill="currentColor"></path> <path d="M9 16H11V18H9V16Z" fill="currentColor"></path> <path d="M4 19H6V21H4V19Z" fill="currentColor"></path> <path d="M2 18H4V20H2V18Z" fill="currentColor"></path> <path d="M0 17H2V19H0V17Z" fill="currentColor"></path> <path d="M0 15H2V17H0V15Z" fill="currentColor"></path> <path d="M0 13H2V15H0V13Z" fill="currentColor"></path> <path d="M0 11H2V13H0V11Z" fill="currentColor"></path> <path d="M8 12H10V14H8V12Z" fill="currentColor"></path> <path d="M7 11H9V13H7V11Z" fill="currentColor"></path> <path d="M8 10H10V12H8V10Z" fill="currentColor"></path> <path d="M9 11H11V13H9V11Z" fill="currentColor"></path> <path d="M14 12H16V14H14V12Z" fill="currentColor"></path> <path d="M13 11H15V13H13V11Z" fill="currentColor"></path> <path d="M14 10H16V12H14V10Z" fill="currentColor"></path> <path d="M15 11H17V13H15V11Z" fill="currentColor"></path> <path d="M1 10H3V12H1V10Z" fill="currentColor"></path> <path d="M1 8H3V10H1V8Z" fill="currentColor"></path> <path d="M2 6H4V8H2V6Z" fill="currentColor"></path> <path d="M3 4H5V6H3V4Z" fill="currentColor"></path> <path d="M5 3H7V5H5V3Z" fill="currentColor"></path> <path d="M7 2H9V4H7V2Z" fill="currentColor"></path> <path d="M9 4H11V6H9V4Z" fill="currentColor"></path> <path d="M11 4H13V6H11V4Z" fill="currentColor"></path> <path d="M18 20H16V22H18V20Z" fill="currentColor"></path> <path d="M18 18H16V20H18V18Z" fill="currentColor"></path> <path d="M19 16H17V18H19V16Z" fill="currentColor"></path> <path d="M17 15H15V17H17V15Z" fill="currentColor"></path> <path d="M15 16H13V18H15V16Z" fill="currentColor"></path> <path d="M13 17H11V19H13V17Z" fill="currentColor"></path> <path d="M20 19H18V21H20V19Z" fill="currentColor"></path> <path d="M22 18H20V20H22V18Z" fill="currentColor"></path> <path d="M24 17H22V19H24V17Z" fill="currentColor"></path> <path d="M24 15H22V17H24V15Z" fill="currentColor"></path> <path d="M24 13H22V15H24V13Z" fill="currentColor"></path> <path d="M24 11H22V13H24V11Z" fill="currentColor"></path> <path d="M23 10H21V12H23V10Z" fill="currentColor"></path> <path d="M23 8H21V10H23V8Z" fill="currentColor"></path> <path d="M22 6H20V8H22V6Z" fill="currentColor"></path> <path d="M21 4H19V6H21V4Z" fill="currentColor"></path> <path d="M19 3H17V5H19V3Z" fill="currentColor"></path> <path d="M17 2H15V4H17V2Z" fill="currentColor"></path> <path d="M15 4H13V6H15V4Z" fill="currentColor"></path> </svg> </i> </a> </div> </div> </footer>`;
}, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/layout/footer/footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", " ", '<form class="search"> <script style="application/json">(function(){', "\n    window.menuGroups = groups;\n  })();<\/script> ", " </form>"])), renderScript($$result, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/layout/search/search.astro?astro&type=script&index=0&lang.ts"), maybeRenderHead(), defineScriptVars({ groups: Astro2.props.menu }), renderComponent($$result, "lo-search", "lo-search", { "inline": true }, { "default": () => renderTemplate` <input type="search" class="_input form-input" placeholder="Search ( CMD + P )"> ` }));
}, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/layout/search/search.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  let versionHtml = `v${Astro2.props.websiteConfig.version.split("-")[0]}`;
  const pseudoVersion = Astro2.props.websiteConfig.version.split("-")[1];
  if (pseudoVersion) {
    versionHtml += `-<span class="header_version-pseudo">${pseudoVersion}</span>`;
  }
  return renderTemplate`${maybeRenderHead()}<header class="header"> <div class="container"> <div class="header_brand"> <a href="/"${addAttribute(`Blackbyte ${Astro2.props.websiteConfig.title}`, "title")}> <div class="header_logo"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(BlackbyteLogoSvg)}` })} </div> <div class="header_picto"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(BlackbytePictoSvg)}` })} </div> <h1 class="header_title font-family-brand"> ${Astro2.props.websiteConfig.title} </h1> </a> </div> <div class="header_search"> ${renderComponent($$result, "Search", $$Search, { "menu": Astro2.props.websiteConfig.menu })} </div> <div class="header_metas"> <p class="header_version"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(versionHtml)}` })} </p> <a class="header_license"${addAttribute(Astro2.props.websiteConfig.license.url, "href")} target="_blank"${addAttribute(`Blackbyte ${Astro2.props.websiteConfig.title} ${Astro2.props.websiteConfig.license.name} license`, "title")}> ${Astro2.props.websiteConfig.license.name} </a> <a class="header_github"${addAttribute(Astro2.props.websiteConfig.repository.url, "href")}${addAttribute(`Blackbyte ${Astro2.props.websiteConfig.title} on GitHub`, "title")} target="_blank" style="position: relative"> <div class="tooltip -align-end">Github repository</div> ${renderComponent($$result, "s-icon", "s-icon", { "name": "github", "provider": "pixelarticons", "type": "brands" })} </a> <a class="header_discord"${addAttribute(Astro2.props.websiteConfig.discord.url, "href")}${addAttribute(`Blackbyte ${Astro2.props.websiteConfig.title} on Discord`, "title")} target="_blank" style="position: relative"> <div class="tooltip -align-end">Join us on Discord</div> <i class="s-icon"> <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6 20H8V22H6V20Z" fill="currentColor"></path> <path d="M6 18H8V20H6V18Z" fill="currentColor"></path> <path d="M5 16H7V18H5V16Z" fill="currentColor"></path> <path d="M7 15H9V17H7V15Z" fill="currentColor"></path> <path d="M9 16H11V18H9V16Z" fill="currentColor"></path> <path d="M4 19H6V21H4V19Z" fill="currentColor"></path> <path d="M2 18H4V20H2V18Z" fill="currentColor"></path> <path d="M0 17H2V19H0V17Z" fill="currentColor"></path> <path d="M0 15H2V17H0V15Z" fill="currentColor"></path> <path d="M0 13H2V15H0V13Z" fill="currentColor"></path> <path d="M0 11H2V13H0V11Z" fill="currentColor"></path> <path d="M8 12H10V14H8V12Z" fill="currentColor"></path> <path d="M7 11H9V13H7V11Z" fill="currentColor"></path> <path d="M8 10H10V12H8V10Z" fill="currentColor"></path> <path d="M9 11H11V13H9V11Z" fill="currentColor"></path> <path d="M14 12H16V14H14V12Z" fill="currentColor"></path> <path d="M13 11H15V13H13V11Z" fill="currentColor"></path> <path d="M14 10H16V12H14V10Z" fill="currentColor"></path> <path d="M15 11H17V13H15V11Z" fill="currentColor"></path> <path d="M1 10H3V12H1V10Z" fill="currentColor"></path> <path d="M1 8H3V10H1V8Z" fill="currentColor"></path> <path d="M2 6H4V8H2V6Z" fill="currentColor"></path> <path d="M3 4H5V6H3V4Z" fill="currentColor"></path> <path d="M5 3H7V5H5V3Z" fill="currentColor"></path> <path d="M7 2H9V4H7V2Z" fill="currentColor"></path> <path d="M9 4H11V6H9V4Z" fill="currentColor"></path> <path d="M11 4H13V6H11V4Z" fill="currentColor"></path> <path d="M18 20H16V22H18V20Z" fill="currentColor"></path> <path d="M18 18H16V20H18V18Z" fill="currentColor"></path> <path d="M19 16H17V18H19V16Z" fill="currentColor"></path> <path d="M17 15H15V17H17V15Z" fill="currentColor"></path> <path d="M15 16H13V18H15V16Z" fill="currentColor"></path> <path d="M13 17H11V19H13V17Z" fill="currentColor"></path> <path d="M20 19H18V21H20V19Z" fill="currentColor"></path> <path d="M22 18H20V20H22V18Z" fill="currentColor"></path> <path d="M24 17H22V19H24V17Z" fill="currentColor"></path> <path d="M24 15H22V17H24V15Z" fill="currentColor"></path> <path d="M24 13H22V15H24V13Z" fill="currentColor"></path> <path d="M24 11H22V13H24V11Z" fill="currentColor"></path> <path d="M23 10H21V12H23V10Z" fill="currentColor"></path> <path d="M23 8H21V10H23V8Z" fill="currentColor"></path> <path d="M22 6H20V8H22V6Z" fill="currentColor"></path> <path d="M21 4H19V6H21V4Z" fill="currentColor"></path> <path d="M19 3H17V5H19V3Z" fill="currentColor"></path> <path d="M17 2H15V4H17V2Z" fill="currentColor"></path> <path d="M15 4H13V6H15V4Z" fill="currentColor"></path> </svg> </i> </a> </div> </div> </header>`;
}, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/layout/header/header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Posthog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Posthog;
  return renderTemplate(_a || (_a = __template(['<meta name="posthog"', `><script>
  const $posthog = document.querySelector('meta[name="posthog"]');
  const posthogConfig = JSON.parse($posthog.dataset.posthog ?? '{}');

  if (!posthogConfig.projectApiKey) {
    console.warn('PostHog projectApiKey is not defined');
  } else {
    !(function (t, e) {
      var o, n, p, r;
      e.__SV ||
        ((window.posthog = e),
        (e._i = []),
        (e.init = function (i, s, a) {
          function g(t, e) {
            var o = e.split('.');
            2 == o.length && ((t = t[o[0]]), (e = o[1])),
              (t[e] = function () {
                t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
              });
          }
          ((p = t.createElement('script')).type = 'text/javascript'),
            (p.crossOrigin = 'anonymous'),
            (p.async = !0),
            (p.src = s.api_host + '/static/array.js'),
            (r = t.getElementsByTagName('script')[0]).parentNode.insertBefore(
              p,
              r,
            );
          var u = e;
          for (
            void 0 !== a ? (u = e[a] = []) : (a = 'posthog'),
              u.people = u.people || [],
              u.toString = function (t) {
                var e = 'posthog';
                return (
                  'posthog' !== a && (e += '.' + a), t || (e += ' (stub)'), e
                );
              },
              u.people.toString = function () {
                return u.toString(1) + '.people (stub)';
              },
              o =
                'capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId'.split(
                  ' ',
                ),
              n = 0;
            n < o.length;
            n++
          )
            g(u, o[n]);
          e._i.push([i, s, a]);
        }),
        (e.__SV = 1));
    })(document, window.posthog || []);
    posthog.init(posthogConfig.projectApiKey, {
      api_host: 'https://eu.i.posthog.com',
      person_profiles: 'always',
    });
  }
<\/script>`])), addAttribute(JSON.stringify(Astro2.props), "data-posthog"));
}, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/system/posthog/posthog.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta property="og:site_name"${addAttribute(`Blackbyte ${Astro2.props.pageTitle ? `- ${Astro2.props.pageTitle}` : ""}`, "content")}><meta name="description"${addAttribute(Astro2.props.websiteConfig.description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta property="og:description"${addAttribute(Astro2.props.websiteConfig.description, "content")}><meta property="og:locale" content="en_US"><meta property="og:title"${addAttribute(Astro2.props.websiteConfig.pageTitle, "content")}><meta property="og:type" content="article"><meta property="og:image"${addAttribute(Astro2.props.websiteConfig.og.imageUrl, "content")}><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="sitemap" href="/sitemap-index.xml"><link rel="manifest" href="/favicon/site.webmanifest"><title>
      Blackbyte ${`${Astro2.props.pageTitle ? `- ${Astro2.props.pageTitle}` : ""}`}
    </title>${renderComponent($$result, "Posthog", $$Posthog, { "projectApiKey": Astro2.props.websiteConfig.posthog.projectApiKey })}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/layout/layout/layout.astro", void 0);

const $$Main$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Main$1;
  return renderTemplate`${renderScript($$result, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/layout/main/main.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "Layout", $$Layout, { "pageTitle": Astro2.props.pageTitle, "websiteConfig": Astro2.props.websiteConfig }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main"> ${Astro2.props.header !== false ? renderTemplate`${renderComponent($$result2, "Header", $$Header, { "websiteConfig": Astro2.props.websiteConfig })}` : ""} <div class="main_body"> <div class="container"> ${renderSlot($$result2, $$slots["default"])} </div> </div> </main> ${Astro2.props.footer !== false ? renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "websiteConfig": Astro2.props.websiteConfig })}` : ""}` })}`;
}, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/layout/main/main.astro", void 0);

(undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * @name            unflatten
 * @namespace       shared.object
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          stable
 *
 * This function simply take an object like this one:
 *
 * ```js
 * {
 *    'something.cool': 'hello'
 * }
 * ```
 *
 * and convert it to something like this:
 *
 * ```js
 * {
 *    something: {
 *      cool: 'hello'
 *    }
 * }
 * ```
 *
 * @param       {Object}        object        The object to convert
 * @return      {Object}                      The converted object
 *
 * @todo      tests
 *
 * @snippet         unflatten($1)
 *
 * @example       js
 * import { unflatten } from '@blackbyte/sugar/object';
 * unflatten({ 'something.cool': 'hello' }); // => { something: { cool: 'hello' } }
 *
 * @see       https://www.npmjs.com/package/flat
 * @since       1.0.0
 * @author  Olivier Bossel <olivier.bossel@gmail.com> (https://blackbyte.space)
 */
function unflatten(object) {
    return inflate(object);
}

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "menuItem",
  props: {
    title: {},
    item: { default: {} }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const currentItemId = ref(null);
    onMounted(() => {
      currentItemId.value = `@${document.location.pathname.split("@").pop()?.trim()}` || null;
    });
    const __returned__ = { props, currentItemId, get toSlug() {
      return toSlug;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MenuItem = resolveComponent("MenuItem", true);
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu-item" }, _attrs))}>`);
  if ($props.item.name) {
    _push(`<div class="menu-item_label"><a class="${ssrRenderClass(`menu-item_link ${$setup.currentItemId == $props.item.id ? "-active" : ""}`)}"${ssrRenderAttr("href", `/doc/${$setup.toSlug($props.item.id)}`)}${ssrRenderAttr("title", $props.item.name)}><span class="menu-item_label-name">${ssrInterpolate($props.item.name)}</span><span class="menu-item_platforms"><!--[-->`);
    ssrRenderList($props.item.platform, (platform) => {
      _push(`<span class="${ssrRenderClass(`menu-item_platform platform -${platform.name}`)}">${ssrInterpolate(platform.name)}</span>`);
    });
    _push(`<!--]--></span></a></div>`);
  } else {
    _push(`<div class="menu-item_group" tabindex="0"><div class="menu-item_group-label">${ssrInterpolate($props.title)}</div><!--[-->`);
    ssrRenderList($props.item, (child, key) => {
      _push(ssrRenderComponent(_component_MenuItem, {
        key,
        item: child,
        title: key
      }, null, _parent));
    });
    _push(`<!--]--></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../website-common/src/components/layout/menu/menuItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "menu",
  props: {
    docmapJson: { default: {} }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const finalDocmapJson = {};
    for (let [namespace, doc] of Object.entries(props.docmapJson.generated.map)) {
      const finalNamespace = namespace.split(".").slice(2).join(".");
      finalDocmapJson[finalNamespace] = doc;
    }
    const deepDocmapJson = unflatten(finalDocmapJson);
    const __returned__ = { props, finalDocmapJson, deepDocmapJson, MenuItem };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu" }, _attrs))}><!--[-->`);
  ssrRenderList($setup.deepDocmapJson, (item, key) => {
    _push(ssrRenderComponent($setup["MenuItem"], {
      key,
      item,
      title: key
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../website-common/src/components/layout/menu/menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Menu;
  const { docmapJson } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Menu", Menu, { "docmapJson": docmapJson, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/layout/menu/menu.vue", "client:component-export": "default" })}`;
}, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/layout/menu/menu.astro", void 0);

const $$CodeSamples = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CodeSamples;
  return renderTemplate`${maybeRenderHead()}<section class="code-samples"> ${renderComponent($$result, "CodeTabs", $$CodeTabs, { "tabs": Astro2.props.samples })} </section>`;
}, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/sections/codeSamples/codeSamples.astro", void 0);

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Welcome;
  return renderTemplate`${maybeRenderHead()}<section class="welcome"> <div class="welcome_earth"></div> <div class="welcome_animation"> <div class="welcome_animation-picto"> <div class="blackbyte-picto -white"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div> <div class="blackbyte-picto -black"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div> </div> <div class="welcome_animation-picto-white"> <div class="blackbyte-picto"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div> </div> </div> <div class="welcome_header"> <p class="welcome_description"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(Astro2.props.websiteConfig.welcome.description)}` })} </p> <div class="welcome_install"> ${Astro2.props.websiteConfig.install} ${renderComponent($$result, "s-icon", "s-icon", { "name": "clipboard", "provider": "pixelarticons" })} ${renderComponent($$result, "s-icon", "s-icon", { "name": "check", "provider": "pixelarticons" })} </div> <div class="welcome_actions"> <a${addAttribute(`${Astro2.props.websiteConfig.discord.url}`, "href")}${addAttribute(`Blackbyte ${Astro2.props.websiteConfig.title} on Discord`, "title")} target="_blank" style="position: relative"> <div class="tooltip -justify-start">Join us on Discord</div> <i class="s-icon"> <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6 20H8V22H6V20Z" fill="currentColor"></path> <path d="M6 18H8V20H6V18Z" fill="currentColor"></path> <path d="M5 16H7V18H5V16Z" fill="currentColor"></path> <path d="M7 15H9V17H7V15Z" fill="currentColor"></path> <path d="M9 16H11V18H9V16Z" fill="currentColor"></path> <path d="M4 19H6V21H4V19Z" fill="currentColor"></path> <path d="M2 18H4V20H2V18Z" fill="currentColor"></path> <path d="M0 17H2V19H0V17Z" fill="currentColor"></path> <path d="M0 15H2V17H0V15Z" fill="currentColor"></path> <path d="M0 13H2V15H0V13Z" fill="currentColor"></path> <path d="M0 11H2V13H0V11Z" fill="currentColor"></path> <path d="M8 12H10V14H8V12Z" fill="currentColor"></path> <path d="M7 11H9V13H7V11Z" fill="currentColor"></path> <path d="M8 10H10V12H8V10Z" fill="currentColor"></path> <path d="M9 11H11V13H9V11Z" fill="currentColor"></path> <path d="M14 12H16V14H14V12Z" fill="currentColor"></path> <path d="M13 11H15V13H13V11Z" fill="currentColor"></path> <path d="M14 10H16V12H14V10Z" fill="currentColor"></path> <path d="M15 11H17V13H15V11Z" fill="currentColor"></path> <path d="M1 10H3V12H1V10Z" fill="currentColor"></path> <path d="M1 8H3V10H1V8Z" fill="currentColor"></path> <path d="M2 6H4V8H2V6Z" fill="currentColor"></path> <path d="M3 4H5V6H3V4Z" fill="currentColor"></path> <path d="M5 3H7V5H5V3Z" fill="currentColor"></path> <path d="M7 2H9V4H7V2Z" fill="currentColor"></path> <path d="M9 4H11V6H9V4Z" fill="currentColor"></path> <path d="M11 4H13V6H11V4Z" fill="currentColor"></path> <path d="M18 20H16V22H18V20Z" fill="currentColor"></path> <path d="M18 18H16V20H18V18Z" fill="currentColor"></path> <path d="M19 16H17V18H19V16Z" fill="currentColor"></path> <path d="M17 15H15V17H17V15Z" fill="currentColor"></path> <path d="M15 16H13V18H15V16Z" fill="currentColor"></path> <path d="M13 17H11V19H13V17Z" fill="currentColor"></path> <path d="M20 19H18V21H20V19Z" fill="currentColor"></path> <path d="M22 18H20V20H22V18Z" fill="currentColor"></path> <path d="M24 17H22V19H24V17Z" fill="currentColor"></path> <path d="M24 15H22V17H24V15Z" fill="currentColor"></path> <path d="M24 13H22V15H24V13Z" fill="currentColor"></path> <path d="M24 11H22V13H24V11Z" fill="currentColor"></path> <path d="M23 10H21V12H23V10Z" fill="currentColor"></path> <path d="M23 8H21V10H23V8Z" fill="currentColor"></path> <path d="M22 6H20V8H22V6Z" fill="currentColor"></path> <path d="M21 4H19V6H21V4Z" fill="currentColor"></path> <path d="M19 3H17V5H19V3Z" fill="currentColor"></path> <path d="M17 2H15V4H17V2Z" fill="currentColor"></path> <path d="M15 4H13V6H15V4Z" fill="currentColor"></path> </svg> </i> </a> <a id="welcome-get-started" class="welcome_get-started button"${addAttribute(Astro2.props.websiteConfig.getStarted.url, "href")} title="Get started">
Get started
</a> <a${addAttribute(Astro2.props.websiteConfig.repository.url, "href")} style="position: relative" title="Blackbyte on GitHub" target="_blank"> <div class="tooltip -justify-end">Join us on Discord</div> ${renderComponent($$result, "s-icon", "s-icon", { "name": "github", "provider": "pixelarticons" })} </a> </div> <p class="welcome_made"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(Astro2.props.websiteConfig.welcome.withLove)}` })} </p> </div> </section> ${renderScript($$result, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/sections/welcome/welcome.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/sections/welcome/welcome.astro", void 0);

const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${renderComponent($$result, "Code", Code, { "client:load": true, ...Astro2.props, "client:component-hydration": "load", "client:component-path": "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/ui/code/code.vue", "client:component-export": "default" })}`;
}, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-common/src/components/ui/code/code.astro", void 0);

function toSlug(str) {
  return str.replace(/\//gm, ".").replace(/\.mdx$/, "").replace(/^@/, "");
}

const version = "1.0.0-beta.20";
const packageJson = {
  version};

const websiteConfig = {
  posthog: {
    projectApiKey: "phc_t5yvxkWJDtICl40OBt4QfJmYgsT8CHfC44uNSOmyar3"
  },
  title: "SugarCSS",
  description: "Add a sugar in your css with features like advanced color handling, media queries management, and a lot more...",
  install: "npm i @blackbyte/sugarcss",
  getStarted: {
    url: "/#get-started"
  },
  welcome: {
    title: "SugarCSS",
    description: 'The CSS toolkit that you missed...<br />...like <span class="color-accent">a sugar in your coffee!</span>',
    withLove: `Made with <span class="color-accent">♥</span> by Blackbyte<br />on top of <a class="color-accent" href="https://lightningcss.dev" title="Lightningcss" target="_blank">Lightningcss</a>`
  },
  version: packageJson.version,
  license: {
    name: "MIT",
    url: "https://github.com/Blackbytespace/sugarcss/blob/main/LICENSE.md"
  },
  repository: {
    name: "Blackbyte SugarCSS",
    url: "https://github.com/Blackbytespace/sugarcss"
  },
  og: {
    imageUrl: "https://raw.githubusercontent.com/Blackbytespace/sugarcss/refs/heads/main/assets/blackbyte-sugarcss-og.png"
  },
  discord: {
    url: "https://discord.gg/ZJvmd6cM"
  },
  menu: [
    {
      type: "group",
      label: "Documentation",
      items: [
        {
          id: "get-started",
          label: "Get started",
          description: "Quick start using @blackbyte/sugarcss",
          value: "get-started",
          slug: "/#get-started",
          preventSet: true
        },
        {
          id: "issues",
          label: "Declare an issue",
          description: "Report a bug or request a feature",
          value: "issue",
          url: "https://github.com/Blackbytespace/sugarcss/issues",
          preventSet: true
        },
        {
          id: "repository",
          label: "GitHub repository",
          description: "Browse the source code on GitHub",
          value: "repository",
          url: "https://github.com/Blackbytespace/sugarcss",
          preventSet: true
        },
        {
          id: "license",
          label: "License",
          description: "View the license information",
          value: "license",
          url: "https://github.com/Blackbytespace/sugarcss/blob/main/LICENSE.md",
          preventSet: true
        }
      ]
    }
  ]
};

const $$Main = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate`${renderScript($$result, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-sugarcss/src/layouts/main.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "MainLayout", $$Main$1, { "pageTitle": Astro2.props.pageTitle, "websiteConfig": websiteConfig }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-sugarcss/src/layouts/main.astro", void 0);

export { $$Main as $, $$Menu as a, $$Code as b, $$Welcome as c, $$CodeSamples as d, renderScript as r, toSlug as t, websiteConfig as w };

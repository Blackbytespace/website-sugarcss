import { c as createComponent } from './astro-component_BKmo8seo.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './prerender_0XYV0HPs.mjs';
import { r as renderScript, b as $$Code, $ as $$Main, c as $$Welcome, w as websiteConfig, d as $$CodeSamples } from './main_DNjciTv1.mjs';

const $$GetStarted = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-sugarcss/src/components/sections/getStarted/getStarted.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<section class="get-started" id="get-started"> <header class="get-started_header typo-format typo-rhythm"> <h2 class="typo-h2">Get Started</h2> <p class="typo-lead">
Start using <code>@blackbyte/sugarcss</code> in your project with this quick
      guide.
</p> </header> <div class="get-started_steps" style="--step-idx: 0"> <div class="get-started_step"> <div class="get-started_step-metas typo-format"> <h3 class="typo-h3"> <span class="get-started_step-number">1.</span> Install the package
</h3> <p class="typo-p">
You can install <code>@blackbyte/sugarcss</code> using npm, yarn or pnpm.
</p> </div> <div class="get-started_step-value"> ${renderComponent($$result, "Code", $$Code, { "language": "bash", "header": true, "code": "npm install @blackbyte/sugarcss" })} </div> </div> <div class="get-started_step" style="--step-idx: 1"> <div class="get-started_step-metas typo-format"> <h3 class="typo-h3"> <span class="get-started_step-number">2.</span> Configure Vite
</h3> <p class="typo-p">
Make use of sugarcss throught <a href="https://vitejs.dev" title="Vite" target="_blank">Vite</a> is as simple as configuring it like in this example.
</p> <p class="typo-p">
For more configuration options, make sure to check the official <a href="https://lightningcss.dev/docs.html" title="Lightningcss documentation" target="_blank">Lightningcss documentation</a> </p> </div> <div class="get-started_step-value"> ${renderComponent($$result, "Code", $$Code, { "language": "ts", "filename": "vite.config.ts", "header": true, "code": `import { sugarize } from '@blackbyte/sugarcss';

export default {
  css: {
    transformer: 'lightningcss',
    lightningcss: sugarize(),
  }
}` })} </div> </div> <div class="get-started_step" style="--step-idx: 1"> <div class="get-started_step-metas typo-format"> <h3 class="typo-h3"> <span class="get-started_step-number">3.</span> Discover the API
</h3> <p class="typo-p">
Press <strong>CMD + P</strong> to open the command palette and start typing
          to search for available functions.
</p> </div> <div class="get-started_step-value"> <div class="get-started_hotkey"> <span class="get-started_hotkey-cmd">CMD</span> <span class="get-started_hotkey-plus">+</span> <span class="get-started_hotkey-p">P</span> </div> </div> </div> </div> </section>`;
}, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-sugarcss/src/components/sections/getStarted/getStarted.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const samples = {
    samples: [
      {
        title: "Color management",
        description: "Define your colors and shades in your config and use them throughout your CSS.",
        language: "css",
        code: `/**
 * Declare your colors as simple css variables
 * and use them across your code with the s-color() function.
 * Shades are some variant of your colors that you can define
 * and use them as well as the second parameter of the s-color() function.
 */
:root {
  --s-color-main: #101010;
  --s-color-accent: #f4ad20;
  --s-color-complementary: #00fffb;

  --s-shade-foreground: --lightness 90;      
}
  
.btn {
  background: s-color(main);
  color: s-color(main, foreground);
  
  &:hover {
    background: s-color(accent);
    color: s-color(accent, foreground);
  }
}`
      },
      {
        title: "Color manipulation",
        description: "Apply some color modifiers through shades of inline",
        language: "css",
        code: `/**
 * Manipulate with ease your colors by applying some modifiers through
 * shades or inline as the second parameter of the s-color() function.
 * 
 * --lighten <percentage>
 * --darken <percentage>
 * --saturate <percentage>
 * --desaturate <percentage>
 * --alpha <percentage>
 * --spin <degrees>
 */
:root {
  --s-color-main: #101010;
  --s-color-accent: #f4ad20;

  --s-shade-foreground: --lightness 90;      
}
.btn {
  color: s-color(main, foreground);
  
  &:hover {
    color: s-color(accent, --darken 10 --saturate 20);
  }
}`
      },
      {
        title: "The `current` color",
        description: 'Use the "current" color in your code as if it was the "currentColor" CSS variable.',
        language: "css",
        code: `/**
 * The "current" color is a special color that represents the current color of the element.
 * You can apply it to any property you want and then,
 * map the color you want to the "current" color like in this example.
 */
:root {
  --s-color-main: #101010;
  --s-color-accent: #f4ad20;
  --s-color-complementary: #00fffb;
  --s-color-current: s-color(main);
}
  
.btn {
  background: s-color(current);

  &:hover {
    background: s-color(current, --lighten 10);
  }

  &.-accent {
    @s-map-color(accent);
  }
  &.-complementary {
    @s-map-color(complementary);
  }
}`
      },
      {
        title: "Typography management",
        description: "Define your typography styles in your config and use them throughout your CSS.",
        language: "css",
        code: `/**
 * Declare your typography styles as simple css variables
 */
:root {
  /* font families */
  --s-font-family-sans: 'Roboto', sans-serif;
  --s-font-family-serif: 'Merriweather', serif;

  /* fonts */
  --s-font-default: s-font-family(sans);
  --s-font-lead: s-font-family(serif);

  /* font sizes */
  --s-size-h1: 32px;
  --s-size-lead: 20px;
  --s-size-p: 16px;

  /* typography */
  --s-typo-h1: s-font(title) s-size(h1) 1.4 0.1em uppercase underline;
  --s-typo-lead: s-font(lead) s-size(lead) 1.6 0.05em;
  --s-typo-p: s-font(default) s-size(p) 1.4;
}

/**
 * Apply your typography styles to your elements with the @s-typo rule
 */
.my-title {
  @s-typo(h1);
}
.my-paragraph {
  @s-typo(p);
}
`
      },
      {
        title: "Spaces management",
        description: "Define your spaces in your config and use them throughout your CSS.",
        language: "css",
        code: `/**
 * Declare your spacing styles as simple css variables
 */
:root {
  --s-space-small: 10px;
  --s-space-medium: 20px;
  --s-space-large: 40px;
}

/**
 * Apply your spacing styles to your elements with the \`s-space\` function
 */
.my-element {
  padding: s-space(small); // 10px
  padding: s-space(medium); // 20px
  padding: s-space(large); // 40px
}
`
      },
      {
        title: "Media queries like a boss",
        description: "Write your media queries in a more efficient way with the @s-media rule.",
        language: "css",
        code: `/**
* Declare your breakpoints in your config through css variables
* and use them throughout your CSS with the @s-media rule.
* Special prefixes are available to write quick and efficient media queries.
*/
:root {
  --s-setting-mobile-first: true;
  --s-media-xs: 0px 474px;
  --s-media-sm: 475px 639px;
  --s-media-md: 640px 767px;
  --s-media-lg: 768px 1023px;
  --s-media-xl: 1024px;
}
.my-element {
  background: red;

  @media sm {
    background: blue;
  }
  @media md {
    background: green;
  }
  /**
   * Special prefixes are available:
   * e- : equal
   * lt- : less than
   * gt- : greater than
   * lte- : less than or equal to
   * gte- : greater than or equal to
   */
  @media lt-lg {
    background: yellow;
  }
}`
      },
      {
        title: "Grid? You said grid?...",
        description: "Declare with ease complexe grid layouts and apply them as easily on your elements.",
        language: "css",
        code: `/**
 * Declare your grid layouts in your config through css variables
 * --s-grid-<name>: '<template>' <gap>;
 */
:root {
  --s-grid-mygrid: '1 1 2 _ 3 3 3' 20px;
}
/**
 * Apply your grid layouts to your elements with the @s-grid rule
 */
.my-element {
  /* registered grid */
  @s-grid (mygrid);
  /* custom grid */
  @s-grid ('1 1 2', 20px);
}
/**
 * Generated grid
 */
|------------|------------|------------|
| Area #1                 | Area #2    |
|------------|------------|------------|
| Area #3                              |
|------------|------------|------------|
/**
 * The HTML structure
 */
<div class="s-grid-mygrid">
  <div>Area #1</div>
  <div>Area #2</div>
  <div>Area #3</div>
</div>`
      },
      {
        title: "Useful mixins",
        description: "A set of useful mixins to simplify your CSS code.",
        language: "css",
        code: `/**
 * Apply the \`destyle\` reset css
 */
@s-destyle;

/**
 * Apply the custom sugar css reset. It basically is \`destyle\` with these additions:
 * - Reset \`mark\` background color
 * - Font smoothing to "antialiased" for --webkit browsers
 * - Apply \`user-select: none\` to all elements except \`input\`, \`textarea\`, and \`[contenteditable]\`
 * - Remove the default outline
 */
@s-reset;

/**
 * Create a burger icon with ease
 */
.my-menu {
  @include s-burger-menu;
    
  &:hover {
    @include s-burger-menu-active;
  }
}`
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "pageTitle": "Sugarcss" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, { "websiteConfig": websiteConfig })} ${renderComponent($$result2, "CodeSamples", $$CodeSamples, { "samples": samples.samples })} ${renderComponent($$result2, "GetStarted", $$GetStarted, {})} ` })}`;
}, "/Users/olivier/data/web/blackbyte/monorepo/packages/website-sugarcss/src/pages/index.astro", void 0);

const $$file = "/Users/olivier/data/web/blackbyte/monorepo/packages/website-sugarcss/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

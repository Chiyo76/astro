/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, g as renderHead, h as renderSlot, i as renderComponent, m as maybeRenderHead } from '../astro_d8f7fa35.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Master = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Master;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title>${renderHead()}</head> <body> <h1>我是樣板</h1> ${renderSlot($$result, $$slots["default"])} <!-- 要放 <slot /> 就可以套用樣板自定義內容 --> </body></html>`;
}, "C:/Users/USER/Desktop/MSI2023/astro/src/layouts/Master.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Master", $$Master, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
我是內容
</p> ` })}`;
}, "C:/Users/USER/Desktop/MSI2023/astro/src/pages/about.astro", void 0);

const $$file = "C:/Users/USER/Desktop/MSI2023/astro/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Master as $, about as a };

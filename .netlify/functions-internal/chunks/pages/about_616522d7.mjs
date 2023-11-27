/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderHead, h as renderComponent, i as renderSlot } from '../astro_1640c632.mjs';
import 'clsx';

const $$Astro$3 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav> <a href="/portfolio/folio-1">作品集一</a> <a href="/about">作品集二</a> <a href="/blog/post-1">作品集三</a> <a href="/ch1yoCoffee/ch1yoCoffee">作品集四</a> </nav>`;
}, "C:/Users/USER/Desktop/MSI2023/astro/src/components/Nav.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header> <h1>HEADER</h1> </header>`;
}, "C:/Users/USER/Desktop/MSI2023/astro/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Master = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Master;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title>${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} <!-- 要放 <slot /> 就可以套用樣板自定義內容 --> </body></html>`;
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

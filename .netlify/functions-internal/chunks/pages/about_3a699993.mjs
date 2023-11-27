/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderSlot, i as renderComponent, j as renderHead } from '../astro_34d7807a.mjs';
import 'clsx';
/* empty css                            */
const $$Astro$4 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Nav;
  const { logo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="flex mx-auto justify-between p-2 text-2xl font-bold bg-slate-500"> <a href="#">${logo}</a> <div class="flex space-x-2"> <a href="/portfolio/folio-1">作品集一</a> <a href="/about">作品集二</a> <a href="/blog/post-1">作品集三</a> <a href="/ch1yoCoffee/ch1yoCoffee">作品集四</a> </div> <a href="#">登入/註冊</a> </nav>`;
}, "C:/Users/USER/Desktop/MSI2023/astro/src/components/Nav.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header id="header"> <figure class="relative"> <img src="/images/Ch1yoCoffee/1.jpg" alt="" class="aspect-[21/9] opacity-80"> <figcaption class="text-red-900 text-8xl font-black text-center absolute inset-0 w-fit h-fit m-auto">我是Header</figcaption> </figure> </header>`;
}, "C:/Users/USER/Desktop/MSI2023/astro/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate", handleForms } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${handleForms ? renderTemplate`<meta name="astro-view-transitions-forms" content="true">` : ""}`;
}, "C:/Users/USER/Desktop/MSI2023/astro/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Master = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Master;
  const { pageTitle } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>76 Site  ', "</title>", '<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>', "</head> <body> ", " ", " ", ' <div class="h-[900px]"></div> <!-- \u8981\u653E <slot /> \u5C31\u53EF\u4EE5\u5957\u7528\u6A23\u677F\u81EA\u5B9A\u7FA9\u5167\u5BB9 -->  </body> </html>'])), pageTitle && "- " + pageTitle, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Nav", $$Nav, { "logo": "\u9023\u6210\u96FB\u8166" }), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]));
}, "C:/Users/USER/Desktop/MSI2023/astro/src/layouts/Master.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Master", $$Master, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-red-200"> <h2 class="text-8xl text-center">我是ABOUT</h2> </div> ` })}`;
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

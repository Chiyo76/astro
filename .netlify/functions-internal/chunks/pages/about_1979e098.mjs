import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent, h as renderHead } from '../astro_b52b6dd4.mjs';
import 'clsx';
/* empty css                           */
const $$Astro$1 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav> <a href="/portfolio/folio-1">作品集一</a> <a href="/about">作品集二</a> <a href="/blog/post-1">作品集三</a> <a href="/ch1yoCoffee/ch1yoCoffee">作品集四</a> </nav>`;
}, "C:/Users/USER/Desktop/MSI2023/astro/src/components/Nav.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-kh7btl4r> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script><!-- \u5728astro\u88E1\u52A0is:inline\u624D\u80FD\u5957cdn(\u526F\u6A94\u540D\u70BAhtml\u5247\u4E0D\u7528)  --><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>', "</head><body data-astro-cid-kh7btl4r> <header data-astro-cid-kh7btl4r> ", ' </header> <div class="box" data-astro-cid-kh7btl4r></div> <section data-astro-cid-kh7btl4r></section>  </body> </html>'])), renderHead(), renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-kh7btl4r": true }));
}, "C:/Users/USER/Desktop/MSI2023/astro/src/pages/about.astro", void 0);

const $$file = "C:/Users/USER/Desktop/MSI2023/astro/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Nav as $, about as a };

import { e as createAstro, f as createComponent, r as renderTemplate, g as renderHead } from '../astro_4262e2f8.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title>${renderHead()}</head> <body> <nav> <a href="/portfolio/folio-1">作品集一</a> <a href="/about">作品集二</a> <a href="/blog/post-1">作品集三</a> <a href="/ch1yoCoffee/index">作品集四</a> </nav> </body></html>`;
}, "C:/Users/USER/Desktop/MSI2023/astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/USER/Desktop/MSI2023/astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

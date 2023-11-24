import { e as createAstro, f as createComponent, r as renderTemplate, h as renderHead, g as renderComponent } from '../astro_b52b6dd4.mjs';
import 'clsx';
import { $ as $$Nav } from './about_1979e098.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title>${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} <nav> <a href="/portfolio/folio-1">作品集一</a> <a href="/about">作品集二</a> <a href="/blog/post-1">作品集三</a> <a href="/ch1yoCoffee/ch1yoCoffee">作品集四</a> </nav> </body></html>`;
}, "C:/Users/USER/Desktop/MSI2023/astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/USER/Desktop/MSI2023/astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, k as addAttribute } from '../astro_d8f7fa35.mjs';
import 'clsx';
import { $ as $$Master } from './about_68f5c097.mjs';

const $$Astro$1 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav> <a href="/portfolio/folio-1">作品集一</a> <a href="/about">作品集二</a> <a href="/blog/post-1">作品集三</a> <a href="/ch1yoCoffee/ch1yoCoffee">作品集四</a> </nav>`;
}, "C:/Users/USER/Desktop/MSI2023/astro/src/components/Nav.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./blog/post-1.md": () => import('./post-1_186ab3b5.mjs')}), () => "./blog/*.md");
  return renderTemplate`${renderComponent($$result, "Master", $$Master, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold text-rose-600">Astro</h1> ${renderComponent($$result2, "Nav", $$Nav, {})} <nav> <a href="/portfolio/folio-1">作品集一</a> <a href="/blog/post-1">post 1</a> <a href="/blog/post-2">post 2</a> <a href="/blog/post-3">post 3</a> </nav> ${posts.map((post) => renderTemplate`<div><a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a></div>`)}` })}`;
}, "C:/Users/USER/Desktop/MSI2023/astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/USER/Desktop/MSI2023/astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, k as addAttribute } from '../astro_1640c632.mjs';
import { $ as $$Master } from './about_616522d7.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./blog/post-1.md": () => import('./post-1_07ed20ea.mjs')}), () => "./blog/*.md");
  return renderTemplate`${renderComponent($$result, "Master", $$Master, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold text-rose-600">Astro</h1> ${posts.map((post) => renderTemplate`<div><a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a></div>`)}` })}`;
}, "C:/Users/USER/Desktop/MSI2023/astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/USER/Desktop/MSI2023/astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

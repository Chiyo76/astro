import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_c3dfbd8d.mjs';

const _page0  = () => import('./chunks/generic_ae3e7f82.mjs');
const _page1  = () => import('./chunks/index_78e8c79b.mjs');
const _page2  = () => import('./chunks/folio-1_d7fd141a.mjs');
const _page3  = () => import('./chunks/about_21b38197.mjs');
const _page4  = () => import('./chunks/post-1_d1e8935b.mjs');
const _page5  = () => import('./chunks/post-2_c3e8c7c0.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/portfolio/folio-1.html", _page2],["src/pages/about.astro", _page3],["src/pages/blog/post-1.md", _page4],["src/pages/blog/post-2.html", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };

import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_316362d0.mjs';

const _page0  = () => import('./chunks/generic_95a3cebe.mjs');
const _page1  = () => import('./chunks/index_0086bebd.mjs');
const _page2  = () => import('./chunks/ch1yoCoffee_2cc3cca1.mjs');
const _page3  = () => import('./chunks/folio-1_1df66c14.mjs');
const _page4  = () => import('./chunks/about_f751896c.mjs');
const _page5  = () => import('./chunks/post-1_21f3c52f.mjs');
const _page6  = () => import('./chunks/post-2_33f94238.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/ch1yoCoffee/ch1yoCoffee.html", _page2],["src/pages/portfolio/folio-1.html", _page3],["src/pages/about.astro", _page4],["src/pages/blog/post-1.md", _page5],["src/pages/blog/post-2.html", _page6]]);
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

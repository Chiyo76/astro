import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import './chunks/astro_34d7807a.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.88759148.js"}],"styles":[{"type":"external","src":"/_astro/about.5396e46a.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.5396e46a.css"}],"routeData":{"route":"/ch1yocoffee/ch1yocoffee","type":"page","pattern":"^\\/ch1yoCoffee\\/ch1yoCoffee\\/?$","segments":[[{"content":"ch1yoCoffee","dynamic":false,"spread":false}],[{"content":"ch1yoCoffee","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ch1yoCoffee/ch1yoCoffee.html","pathname":"/ch1yoCoffee/ch1yoCoffee","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.5396e46a.css"}],"routeData":{"route":"/portfolio/folio-1","type":"page","pattern":"^\\/portfolio\\/folio-1\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"folio-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/folio-1.html","pathname":"/portfolio/folio-1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.88759148.js"}],"styles":[{"type":"external","src":"/_astro/about.5396e46a.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.88759148.js"}],"styles":[{"type":"external","src":"/_astro/about.5396e46a.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/blog/post-1","type":"page","pattern":"^\\/blog\\/post-1\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-1.md","pathname":"/blog/post-1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.88759148.js"}],"styles":[{"type":"external","src":"/_astro/about.5396e46a.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/blog/post-2","type":"page","pattern":"^\\/blog\\/post-2\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-2.md","pathname":"/blog/post-2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/USER/Desktop/MSI2023/astro/src/pages/blog/post-1.md",{"propagation":"in-tree","containsHead":true}],["C:/Users/USER/Desktop/MSI2023/astro/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/USER/Desktop/MSI2023/astro/src/pages/blog/post-2.md",{"propagation":"in-tree","containsHead":true}],["C:/Users/USER/Desktop/MSI2023/astro/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/USER/Desktop/MSI2023/astro/src/layouts/MDlayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/post-1@_@md",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/post-2@_@md",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/ch1yoCoffee/ch1yoCoffee.html":"chunks/pages/ch1yoCoffee_33c7d265.mjs","/src/pages/portfolio/folio-1.html":"chunks/pages/folio-1_37e88863.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_a1734ae6.mjs","/src/pages/index.astro":"chunks/pages/index_dfb47187.mjs","/src/pages/blog/post-2.md":"chunks/pages/post-2_a85dbd41.mjs","\u0000@astrojs-manifest":"manifest_2933728e.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_096a540c.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_80ad46fd.mjs","\u0000@astro-page:src/pages/ch1yoCoffee/ch1yoCoffee@_@html":"chunks/ch1yoCoffee_564802f5.mjs","\u0000@astro-page:src/pages/portfolio/folio-1@_@html":"chunks/folio-1_734da2b7.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_9f901f61.mjs","\u0000@astro-page:src/pages/blog/post-1@_@md":"chunks/post-1_c58a3058.mjs","\u0000@astro-page:src/pages/blog/post-2@_@md":"chunks/post-2_0408b917.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.88759148.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.5396e46a.css","/favicon.svg","/_astro/hoisted.88759148.js","/images/Ch1yoCoffee/1.jpg","/images/Ch1yoCoffee/11.jpg","/images/Ch1yoCoffee/2.jpg","/images/Ch1yoCoffee/3.jpg","/images/Ch1yoCoffee/4.jpg","/images/Ch1yoCoffee/about.jpg","/images/Ch1yoCoffee/p1.jpg","/images/Ch1yoCoffee/p10.jpg","/images/Ch1yoCoffee/p2.jpg","/images/Ch1yoCoffee/p3.jpg","/images/Ch1yoCoffee/p4.jpg","/images/Ch1yoCoffee/p5.jpg","/images/Ch1yoCoffee/p6.jpg","/images/Ch1yoCoffee/p7.jpg","/images/Ch1yoCoffee/p8.jpg","/images/Ch1yoCoffee/p9.jpg","/images/Ch1yoCoffee/pexels-brigitte-tohm-143640.jpg","/images/Ch1yoCoffee/pexels-cesur-çete-18836997.jpg","/images/Ch1yoCoffee/pexels-flo-dahm-1065030.jpg","/images/Ch1yoCoffee/pexels-photo-2379864.jpeg","/images/Ch1yoCoffee/pexels-polina-tankilevitch-4109745.jpg"]});

export { manifest };

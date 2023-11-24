import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import './chunks/astro_4262e2f8.mjs';
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

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ch1yocoffee","type":"page","pattern":"^\\/ch1yoCoffee\\/?$","segments":[[{"content":"ch1yoCoffee","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ch1yoCoffee/index.html","pathname":"/ch1yoCoffee","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio/folio-1","type":"page","pattern":"^\\/portfolio\\/folio-1\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"folio-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/folio-1.html","pathname":"/portfolio/folio-1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"gsap.registerPlugin(\"ScrollTrigger\");gsap.to(\".box\",{scrollTrigger:{trigger:\".box\",markers:!0,start:\"top 66%\",end:\"bottom 33%\",toggleActions:\"play pause reverse reset\",scrub:2,pin:!0},x:500,rotate:360,duration:2});\n"}],"styles":[{"type":"inline","content":"[data-astro-cid-kh7btl4r]{margin:0;padding:0;box-sizing:border-box}header[data-astro-cid-kh7btl4r]{height:100vh;background-color:#ffb7b7}.box[data-astro-cid-kh7btl4r]{width:100px;height:100px;background-color:#098}section[data-astro-cid-kh7btl4r]{height:100vh;background-color:#b7ecff}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-1","type":"page","pattern":"^\\/blog\\/post-1\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-1.md","pathname":"/blog/post-1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-2","type":"page","pattern":"^\\/blog\\/post-2\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-2.html","pathname":"/blog/post-2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/USER/Desktop/MSI2023/astro/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/USER/Desktop/MSI2023/astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/about.astro":"chunks/pages/about_b860f112.mjs","/src/pages/portfolio/folio-1.html":"chunks/pages/folio-1_ef26bbd1.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_e8ba8285.mjs","/src/pages/index.astro":"chunks/pages/index_4c2390cc.mjs","/src/pages/ch1yoCoffee/index.html":"chunks/pages/index_4da7ff03.mjs","/src/pages/blog/post-1.md":"chunks/pages/post-1_20a4d1c0.mjs","/src/pages/blog/post-2.html":"chunks/pages/post-2_613d3bae.mjs","\u0000@astrojs-manifest":"manifest_99715e50.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_ae3e7f82.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_723c0112.mjs","\u0000@astro-page:src/pages/ch1yoCoffee/index@_@html":"chunks/index_68bae264.mjs","\u0000@astro-page:src/pages/portfolio/folio-1@_@html":"chunks/folio-1_d7fd141a.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_21b38197.mjs","\u0000@astro-page:src/pages/blog/post-1@_@md":"chunks/post-1_d1e8935b.mjs","\u0000@astro-page:src/pages/blog/post-2@_@html":"chunks/post-2_c3e8c7c0.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.2375a787.js","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg"]});

export { manifest };

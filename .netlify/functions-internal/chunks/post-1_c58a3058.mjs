export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/post-1_74597f3c.mjs').then(n => n.p);

export { page };

import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Bu9D6suq.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin/comments.astro.mjs');
const _page3 = () => import('./pages/api/approve_comment.astro.mjs');
const _page4 = () => import('./pages/api/delete_comment.astro.mjs');
const _page5 = () => import('./pages/api/fetch_comments.astro.mjs');
const _page6 = () => import('./pages/api/login.astro.mjs');
const _page7 = () => import('./pages/api/logout.astro.mjs');
const _page8 = () => import('./pages/api/post_comment.astro.mjs');
const _page9 = () => import('./pages/authentication/login.astro.mjs');
const _page10 = () => import('./pages/blog.astro.mjs');
const _page11 = () => import('./pages/posts/post-1.astro.mjs');
const _page12 = () => import('./pages/posts/post-2.astro.mjs');
const _page13 = () => import('./pages/projects/diary.astro.mjs');
const _page14 = () => import('./pages/projects/gameok.astro.mjs');
const _page15 = () => import('./pages/projects/k-numbers.astro.mjs');
const _page16 = () => import('./pages/projects/kanfit.astro.mjs');
const _page17 = () => import('./pages/projects/routinebuilder.astro.mjs');
const _page18 = () => import('./pages/projects/tk-music.astro.mjs');
const _page19 = () => import('./pages/projects.astro.mjs');
const _page20 = () => import('./pages/rss.xml.astro.mjs');
const _page21 = () => import('./pages/tags/_tag_.astro.mjs');
const _page22 = () => import('./pages/tags.astro.mjs');
const _page23 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin/comments.astro", _page2],
    ["src/pages/api/approve_comment.ts", _page3],
    ["src/pages/api/delete_comment.ts", _page4],
    ["src/pages/api/fetch_comments.ts", _page5],
    ["src/pages/api/login.ts", _page6],
    ["src/pages/api/logout.ts", _page7],
    ["src/pages/api/post_comment.ts", _page8],
    ["src/pages/authentication/login.astro", _page9],
    ["src/pages/blog.astro", _page10],
    ["src/pages/posts/post-1.md", _page11],
    ["src/pages/posts/post-2.md", _page12],
    ["src/pages/projects/diary.md", _page13],
    ["src/pages/projects/gameok.md", _page14],
    ["src/pages/projects/k-numbers.md", _page15],
    ["src/pages/projects/kanfit.md", _page16],
    ["src/pages/projects/routinebuilder.md", _page17],
    ["src/pages/projects/tk-music.md", _page18],
    ["src/pages/projects.astro", _page19],
    ["src/pages/rss.xml.js", _page20],
    ["src/pages/tags/[tag].astro", _page21],
    ["src/pages/tags/index.astro", _page22],
    ["src/pages/index.astro", _page23]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "8af19105-9487-4ae8-b753-38e62f09e65d"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

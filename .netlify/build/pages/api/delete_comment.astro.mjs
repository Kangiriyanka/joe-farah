import { d as db, C as Comment } from '../../chunks/_astro_db_DsGyQllq.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

const prerender = false;
async function POST({
  request
}) {
  const {
    id
  } = await request.json();
  await db.delete(Comment).where(eq(Comment.id, id));
  return new Response(JSON.stringify({
    success: true
  }));
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

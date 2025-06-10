import { d as db, C as Comment } from '../../chunks/_astro_db_DsGyQllq.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
async function POST({
  request
}) {
  const data = await request.formData();
  const postSlug = data.get("postSlug");
  console.log(data);
  await db.insert(Comment).values({
    postSlug: data.get("postSlug")?.toString() || "",
    author: data.get("author")?.toString() || "",
    body: data.get("body")?.toString() || "",
    website: data.get("website")?.toString() || "",
    approved: false,
    published: /* @__PURE__ */ new Date()
  });
  return new Response(null, {
    status: 303,
    headers: {
      Location: `/posts/${postSlug}`
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

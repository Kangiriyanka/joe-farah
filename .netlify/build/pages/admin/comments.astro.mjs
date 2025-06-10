import { g as createComponent, n as renderComponent, r as renderTemplate, i as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_BkpcaE5J.mjs';
import 'kleur/colors';
import { d as db, C as Comment } from '../../chunks/_astro_db_DsGyQllq.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Bkrim-c1.mjs';
/* empty css                                       */
import { desc, eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$Comments = createComponent(async ($$result, $$props, $$slots) => {
  const comments = await db.select().from(Comment).orderBy(desc(Comment.published)).where(eq(Comment.approved, false));
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Comments Panel", "data-astro-cid-3j3cdvlv": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<h2 data-astro-cid-3j3cdvlv> Pending Comments</h2> <div class="comment-container" data-astro-cid-3j3cdvlv> ', ' </div> <script>\n    async function approveComment(id) {\n      const res = await fetch("/api/approve_comment", {\n        method: "POST",\n        headers: { "Content-Type": "application/json" },\n        body: JSON.stringify({ id }),\n      });\n      const result = await res.json();\n      if (result.success) location.reload();\n    }\n\n    document.addEventListener("click", (event) => {\n      if (event.target.matches(".approve-button")) {\n        const id = event.target.getAttribute("data-id");\n        approveComment(id);\n      }\n    });\n\n    async function deleteComment(id) {\n      console.log("clicked")\n      const res = await fetch("/api/delete_comment", {\n        method: "POST",\n        headers: { "Content-Type": "application/json" },\n        body: JSON.stringify({ id }),\n      });\n      const result = await res.json();\n      if (result.success) location.reload();\n    }\n\n    document.addEventListener("click", (event) => {\n      if (event.target.matches(".reject-button")) {\n        const id = event.target.getAttribute("data-id");\n        deleteComment(id);\n      }\n    });\n  <\/script>  '])), maybeRenderHead(), comments.map((comment) => renderTemplate`<div class="comment" data-astro-cid-3j3cdvlv> <p data-astro-cid-3j3cdvlv>${comment.id}</p> <p data-astro-cid-3j3cdvlv>${comment.postSlug}</p> <p data-astro-cid-3j3cdvlv>${comment.author}</p> <p data-astro-cid-3j3cdvlv>${comment.website}</p> <p data-astro-cid-3j3cdvlv>${comment.body}</p> <p data-astro-cid-3j3cdvlv>${comment.published.toLocaleDateString("en-US", dateOptions)}</p> <div class="approval-container" data-astro-cid-3j3cdvlv> <button type="button" class="approve-button"${addAttribute(comment.id, "data-id")} data-astro-cid-3j3cdvlv>Approve</button> <button type="button" class="reject-button"${addAttribute(comment.id, "data-id")} data-astro-cid-3j3cdvlv>Reject</button> </div> </div>`)) })}`;
}, "/Users/kanleafsnail/Desktop/Jojonim Extends/joe-farah/joe-farah/src/pages/admin/comments.astro", void 0);

const $$file = "/Users/kanleafsnail/Desktop/Jojonim Extends/joe-farah/joe-farah/src/pages/admin/comments.astro";
const $$url = "/admin/comments";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Comments,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

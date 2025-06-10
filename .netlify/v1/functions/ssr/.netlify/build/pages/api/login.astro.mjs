export { renderers } from '../../renderers.mjs';

const ADMIN_PASSWORD = "WzzT4aZhk9ZE3d";
const prerender = false;
const POST = async ({
  request,
  cookies
}) => {
  const formData = await request.formData();
  const password = formData.get("password");
  if (password === ADMIN_PASSWORD) {
    cookies.set("admin", "true", {
      path: "/",
      httpOnly: true,
      secure: true,
      // True if the site is running in production, false o.w.
      maxAge: 60 * 60 * 2
      // 2 hours
    });
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/admin/comments"
      }
    });
  }
  return new Response("Unauthorized", {
    status: 401
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

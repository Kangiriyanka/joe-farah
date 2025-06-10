export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({
  cookies
}) => {
  cookies.delete("admin", {
    path: "/"
  });
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/authentication/login"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { f as createAstro, g as createComponent, n as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BkpcaE5J.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Bkrim-c1.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://joefarah.netlify.app/");
const prerender = false;
const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const pageTitle = "Admin Login";
  const context = Astro2.cookies.get("admin")?.value;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-j5ewezp4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex gap-2" data-astro-cid-j5ewezp4> <form method="POST" action="../api/login" class="" data-astro-cid-j5ewezp4> <input type="password" name="password" placeholder="Enter admin password" required data-astro-cid-j5ewezp4> <button class="w-20 " type="submit" data-astro-cid-j5ewezp4>Login</button> </form> <form id="logout-button" method="GET" action="../api/logout" data-astro-cid-j5ewezp4> <button type="submit" data-astro-cid-j5ewezp4>Logout</button> </form> </div> <p class="text-right text-sm p underline" data-astro-cid-j5ewezp4> Logged in - ${context ? "true" : "false"} </p> ` })} `;
}, "/Users/kanleafsnail/Desktop/Jojonim Extends/joe-farah/joe-farah/src/pages/authentication/login.astro", void 0);

const $$file = "/Users/kanleafsnail/Desktop/Jojonim Extends/joe-farah/joe-farah/src/pages/authentication/login.astro";
const $$url = "/authentication/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { f as createAstro, g as createComponent, m as maybeRenderHead, i as addAttribute, r as renderTemplate, n as renderComponent, w as renderHead, x as renderSlot, l as renderScript } from './astro/server_BkpcaE5J.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro("https://joefarah.netlify.app/");
const $$NavigationLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavigationLink;
  const { text, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class=" nav-link inline-flex flex-col items-center text-center h-6   " data-astro-cid-3lzmdajx> <a${addAttribute(url, "href")} data-astro-cid-3lzmdajx>${text} <svg viewBox="30 2 50 10" preserveAspectRatio="none" data-astro-cid-3lzmdajx> <path d="M40 5 Q50 3 50 5 T70 5" class="draw-line hidden md:block" stroke="var(--soil-color)" stroke-width="2.5" fill="none" stroke-linecap="round" data-astro-cid-3lzmdajx></path> </svg> </a> </div> `;
}, "/Users/kanleafsnail/Desktop/Jojonim Extends/joe-farah/joe-farah/src/components/NavigationLink.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div class="inline-flex flex-col items-center  " data-astro-cid-oemx5le4> <button id="themeToggle" class="relative" data-astro-cid-oemx5le4> <!-- Light mode icon --> <svg class="sun" width="1.5rem" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-oemx5le4> <path fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z" data-astro-cid-oemx5le4></path> </svg> <!-- Dark mode icon --> <svg class="moon" width="1.5rem" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-oemx5le4> <path fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z" data-astro-cid-oemx5le4></path> </svg> </button> </div>  <script>
    const theme = (() => {
      const localStorageTheme = localStorage?.getItem("theme") ?? '';
      if (['dark', 'light'].includes(localStorageTheme)) {
        return localStorageTheme;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
        return 'light';
    })();
  
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  
    window.localStorage.setItem('theme', theme);
  
    const handleToggleClick = () => {
      const element = document.documentElement;
      element.classList.toggle("dark");
  
      const isDark = element.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  
    document.getElementById("themeToggle")?.addEventListener("click", handleToggleClick);
  <\/script>`])), maybeRenderHead());
}, "/Users/kanleafsnail/Desktop/Jojonim Extends/joe-farah/joe-farah/src/components/ThemeIcon.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="nav-links "> ${renderComponent($$result, "NavigationLink", $$NavigationLink, { "url": "/blog/", "text": "blog" })} ${renderComponent($$result, "NavigationLink", $$NavigationLink, { "url": "/projects", "text": "projects" })} ${renderComponent($$result, "NavigationLink", $$NavigationLink, { "url": "/about", "text": "about" })} ${renderComponent($$result, "ThemeIcon", $$ThemeIcon, {})} </div>`;
}, "/Users/kanleafsnail/Desktop/Jojonim Extends/joe-farah/joe-farah/src/components/Navigation.astro", void 0);

const $$Hamburger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`;
}, "/Users/kanleafsnail/Desktop/Jojonim Extends/joe-farah/joe-farah/src/components/Hamburger.astro", void 0);

const $$SoilIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/" data-astro-cid-ineoj7gi> <img alt="Soil Logo" src="/images/leafsoil.svg" class="w-25 light-logo" data-astro-cid-ineoj7gi> <img alt="Soil Logo (Dark)" src="/images/dark-leafsoil.svg" class="w-25 hidden dark-logo" data-astro-cid-ineoj7gi> </a> `;
}, "/Users/kanleafsnail/Desktop/Jojonim Extends/joe-farah/joe-farah/src/components/icons/SoilIcon.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <nav class="relative flex justify-between items-center"> ${renderComponent($$result, "SoilIcon", $$SoilIcon, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} ${renderComponent($$result, "Hamburger", $$Hamburger, {})} </nav> </header>`;
}, "/Users/kanleafsnail/Desktop/Jojonim Extends/joe-farah/joe-farah/src/components/Header.astro", void 0);

const $$GithubIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="w-10 h-10 svg-icon social-link" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 58.609 55.812"><path d="M77.82437 177.97721s0 0 0 0c.0025.55978.0049 1.11955.01064 1.78842.0057.66886.0147 1.44678-.02747 2.11606-.04219.66927-.13551 1.22987-.42663 1.57428-.29112.34441-.78.47261-1.63073.2796-.85072-.19301-2.06322-.70722-3.44178-1.47683-1.37855-.76962-2.92306-1.79459-4.559-3.27683-1.63594-1.48223-3.3632-3.42164-4.87928-6.09629-1.5161-2.67465-2.82093-6.08437-3.4964-8.96553-.67548-2.88117-.72157-5.23362-.27319-7.94093.4484-2.70732 1.39122-5.76933 2.62536-8.33891 1.23414-2.56958 2.75951-4.64658 4.35361-6.33853 1.5941-1.69194 3.25683-2.99874 5.59023-4.20829 2.3334-1.20956 5.33732-2.3218 8.67183-2.78859 3.3345-.46678 6.99938-.28809 9.98032.30314 2.98095.59123 5.27778 1.59494 7.41142 2.94324 2.13364 1.3483 4.10394 3.04109 5.912 5.33259 1.80803 2.2915 3.45371 5.18156 4.4953 8.26607 1.04157 3.08451 1.47902 6.36328 1.14142 9.90878-.33759 3.5455-1.45019 7.35752-2.59059 10.06539-1.1404 2.70786-2.30853 4.31144-3.68006 5.78657-1.37153 1.47514-2.94637 2.82174-4.74564 3.99146-1.79929 1.16971-3.8229 2.16247-5.12719 2.45036-1.30429.28789-1.88918-.12908-2.17663-.96075-.28744-.83166-.27742-2.07794-.27035-3.27086.0071-1.19293.01119-2.33244-.1073-3.48049-.11848-1.14806-.35955-2.3046-.65201-3.10947-.29246-.80487-.63628-1.25802.40785-1.87225 1.04413-.61422 3.47613-1.38948 5.43727-3.28575 1.96114-1.89626 3.45131-4.91339 4.01862-7.46632.5673-2.55292.21173-4.64149-.22284-6.05106-.43458-1.40957-.94811-2.14006-1.00363-4.59804-.05552-2.45799.34697-6.64322-.88002-7.34755-1.22698-.70433-4.08335 2.07237-6.5887 3.37023-2.50536 1.29786-4.65951 1.11685-6.81388 1.11685s-4.30874.18101-5.9776-.0612c-1.66887-.2422-2.85214-.90759-4.0703-1.7618-1.21817-.85421-2.47114-1.89716-3.22694-1.7644-.7558.13276-1.01434 1.44121-1.02315 2.99976-.0088 1.55854.23214 3.36705-.05106 5.05798-.28319 1.69093-1.09048 3.26419-1.34033 5.50061-.24985 2.23642.05775 5.13584 1.0393 7.42183.98157 2.28599 2.63701 3.95841 4.40638 5.02782 1.76938 1.06941 3.65256 1.53575 4.42195 2.00458.76939.46883.42496.94012.15385 1.52221-.27112.58209-.4689 1.27494-1.07516 1.73644-.60627.4615-1.62097.69162-2.5821.62833-.96112-.0633-1.8686-.41997-2.7837-1.10452s-1.84543-1.70532-2.80454-2.4483c-.9591-.74298-1.94693-1.20814-2.63648-1.36077-.68955-.15262-1.08079.007-1.10935.27321-.02856.26591.30554.63779.83148 1.2049.52594.5671 1.24367 1.32938 1.93329 2.26483.68962.93544 1.3511 2.04399 2.21992 2.84684.86882.80284 1.94494 1.29995 3.1815 1.51431 1.23657.21435 2.6335.14596 3.33198.11176l.6985-.0342z" style="fill:none;stroke:#000;stroke-width:2.846;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:20;stroke-dasharray:none;paint-order:markers fill stroke" transform="translate(-55.15628 -130.87665)"></path><path d="M78.47767 161.26334c.48205 1.61903.9641 3.23806 1.61193 3.20744.64782-.0306 1.46135-1.71076 2.29558-1.72851.83423-.0177 1.68908 1.62694 2.33182 1.60248.64274-.0245 1.07335-1.71808 1.50397-3.41172M80.50721 153.35531c.17159 1.20253-.68455 2.3139-1.91349 2.48394-1.22894.17004-2.36655-.66547-2.5426-1.86738-.17605-1.20191-.92847-5.56563 1.90425-2.49072.98512 1.06934 2.36901.65705 2.54952 1.85833z" style="fill:none;stroke:#000;stroke-width:1.47898951;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:20;stroke-dasharray:none;paint-order:markers fill stroke" transform="translate(-55.15628 -130.87665)"></path><path d="M85.34902 153.5368c-.1716 1.20253.68455 2.3139 1.91349 2.48394 1.22894.17004 2.36655-.66547 2.5426-1.86738.17605-1.20191.92847-5.56563-1.90425-2.49072-.98512 1.06934-2.36901.65705-2.54952 1.85833z" style="fill:none;stroke:#000;stroke-width:1.23125896;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:20;paint-order:markers fill stroke;stroke-dasharray:none" transform="translate(-55.15628 -130.87665)"></path><path d="m76.84304 154.78945 1.89642.008-.95556 1.6381z" style="fill:#24292f;fill-opacity:1;stroke:#000;stroke-width:1.23003;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:20;stroke-dasharray:none;paint-order:markers fill stroke" transform="translate(-50.83793 -127.4036)"></path><g style="stroke-width:.9;stroke-dasharray:none"><path d="M92.5204 156.00898c2.01867.19457 4.32695.52281 5.87137 1.39839 1.5444.87558 2.61452 2.43211 3.68466 3.98867M92.88298 155.92375c1.0215-.3405 2.043-.68099 3.31987-.91205 1.27689-.23105 2.8091-.35265 4.1711-.14592 1.362.20674 2.55373.7418 3.74547 1.27687M92.50811 155.90078c.64905-.71028 1.2981-1.42056 2.1033-1.99308.8052-.57252 1.76651-1.00725 2.8292-1.33991 1.06269-.33266 2.22668-.56324 3.0722-.62834.84551-.0651 1.37249.0353 1.85766.11475.48517.0795.92851.13802 1.37185.19657" style="fill:none;fill-opacity:.196078;stroke:#000;stroke-width:.9;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:20;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" transform="rotate(8.132 967.7158 -269.46041)"></path></g><g style="stroke-width:1.08216112;stroke-dasharray:none"><path d="M92.5204 156.00898c2.01867.19457 4.32695.52281 5.87137 1.39839 1.5444.87558 2.61452 2.43211 3.68466 3.98867M92.88298 155.92375c1.0215-.3405 2.043-.68099 3.31987-.91205 1.27689-.23105 2.8091-.35265 4.1711-.14592 1.362.20674 2.55373.7418 3.74547 1.27687M92.50811 155.90078c.64905-.71028 1.2981-1.42056 2.1033-1.99308.8052-.57252 1.76651-1.00725 2.8292-1.33991 1.06269-.33266 2.22668-.56324 3.0722-.62834.84551-.0651 1.37249.0353 1.85766.11475.48517.0795.92851.13802 1.37185.19657" style="fill:none;fill-opacity:.196078;stroke:#000;stroke-width:1.08216112;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:20;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" transform="scale(-1 1) rotate(13.27578 583.79969 -377.44583)"></path></g><path d="M78.25516 151.84324c-.15011.51037-.30022 1.02074-.29272 1.34348.0075.32273.17263.45783.39029.33774.21766-.12009.48785-.49536.75805-.87063M86.65998 152.92325c.25833.30687.51665.61374.73526.76595.21861.15221.3975.14976.4595-.0489.06202-.19863.0071-.59341-.04774-.98819" style="fill:gray;fill-opacity:.196078;stroke:#000;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:20;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" transform="translate(-55.15628 -130.87665)"></path></svg>`;
}, "/Users/kanleafsnail/Desktop/Jojonim Extends/joe-farah/joe-farah/src/components/icons/GithubIcon.astro", void 0);

const $$YoutubeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="w-10 h-10 svg-icon social-link" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30" height="30" viewBox="0 0 79.874 62.216"> <g style="stroke-width:2;stroke-dasharray:none"> <g style="fill:#000;stroke-width:2;stroke-dasharray:none"> <path d="M62.70624 129.08968h59.37477a10.42693 10.42693 45 0 1 10.42693 10.42693v27.60503a10.42693 10.42693 135 0 1-10.42693 10.42693H62.70624a10.42693 10.42693 45 0 1-10.42693-10.42693v-27.60503a10.42693 10.42693 135 0 1 10.42693-10.42693z" style="opacity:1;fill:none;fill-opacity:1;stroke:#000;stroke-width:3.75738;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:20;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" transform="matrix(.8677 0 0 1 -40.71134 -123.37684)"></path> <path d="m77.61467 148.39281 19.229 11.01629-19.15489 11.14466Z" style="opacity:1;fill:none;fill-opacity:1;stroke:#000;stroke-width:2.86212;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:20;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" transform="matrix(1.25005 0 0 1 -68.34895 -130.30052)"></path> </g> </g> </svg>`;
}, "/Users/kanleafsnail/Desktop/Jojonim Extends/joe-farah/joe-farah/src/components/icons/YoutubeIcon.astro", void 0);

const $$SnailIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/" data-astro-cid-ov2kq5kv> <img alt="Snail Logo" src="/images/snail.svg" class="w-25 light-logo" data-astro-cid-ov2kq5kv> <img alt="Snail Logo (Dark)" src="/images/dark-snail.svg" class="w-25 hidden dark-logo" data-astro-cid-ov2kq5kv> </a> `;
}, "/Users/kanleafsnail/Desktop/Jojonim Extends/joe-farah/joe-farah/src/components/icons/SnailIcon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const date = /* @__PURE__ */ new Date();
  const dateOptions = {
    year: "numeric"
  };
  const formattedDate = date.toLocaleDateString("en-US", dateOptions);
  return renderTemplate`${maybeRenderHead()}<footer class="flex justify-between gap-2 my-8 items-center "> <div class="flex items-center"> ${renderComponent($$result, "SnailIcon", $$SnailIcon, {})} <span><span class="text-lg"> &copy; </span> Joseph Farah ${formattedDate}</span> </div> <div class="flex p-1 gap-1"> <a href="https://www.github.com/kangiriyanka"> ${renderComponent($$result, "GithubIcon", $$GithubIcon, {})} </a> <a href="https://www.youtube.com/@JoeTheLeaf"> ${renderComponent($$result, "YoutubeIcon", $$YoutubeIcon, {})} </a> </div> </footer>`;
}, "/Users/kanleafsnail/Desktop/Jojonim Extends/joe-farah/joe-farah/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://joefarah.netlify.app/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle} </title>${renderHead()}</head> <body> <main> ${renderComponent($$result, "Header", $$Header, {})} <h1>${pageTitle} </h1> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/Users/kanleafsnail/Desktop/Jojonim Extends/joe-farah/joe-farah/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/kanleafsnail/Desktop/Jojonim Extends/joe-farah/joe-farah/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };

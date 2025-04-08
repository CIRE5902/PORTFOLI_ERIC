import { e as createComponent, i as renderHead, r as renderTemplate } from '../chunks/astro/server_BentPheY.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><title>Mi página de inicio</title>${renderHead()}</head> <body> <h1>Bienvenido a mi sitio web</h1> </body></html>`;
}, "/workspaces/PORTFOLI_ERIC/src/pages/index.astro", void 0);

const $$file = "/workspaces/PORTFOLI_ERIC/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

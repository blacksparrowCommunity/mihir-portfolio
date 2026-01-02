
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mihir-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mihir-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/mihir-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/mihir-portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/mihir-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/mihir-portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/mihir-portfolio",
    "route": "/mihir-portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 26442, hash: 'cde4d3ce4a5aa6d5aecbd03fb61ef1056e9f917648f2f2463305e68a4b6b27f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18834, hash: '149cd677ef0f61ed1d0b897d659bed5f67eb1560802682a327756697b41b77bb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 32386, hash: 'cba9eb770bda1d6625835446489f9bb2b12527c95b51562045161bfa94d8352a', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 34092, hash: 'd1582415264706be1873650de48dc36b57c8e9c347c6c45d64e3dcaa10f92afc', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31490, hash: 'c3dcb518bb6790e22f7be94e4051df9e44e1be91987885bfed6808c1e6f77745', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 31564, hash: '1732e640ab54d4346d79c3b49f7a80b3f7773e0bd67532e646d2422c61afda4f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 31005, hash: 'bcbfa7e3a3b741bc832b9f592981dea5fa2317a46ec8a97f4d6d1a90a136e152', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-2ZZLM7WK.css': {size: 9243, hash: 'FmshlQZYNrg', text: () => import('./assets-chunks/styles-2ZZLM7WK_css.mjs').then(m => m.default)}
  },
};


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
    'index.csr.html': {size: 26374, hash: 'b6de9079c106a2db2ab2eb78c03e5c3b40270b82cb9f02c8d15bcd4287af69fe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18783, hash: '662f5d861fce0cd3f6b443bee39c6dc8b0d220214729864f8c57e90e1a0f091e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 41898, hash: '8a9dad2d824a3902c6483e1b404a16ed45aff6c350e18106bfdf0d0c0795e8a3', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 40192, hash: 'd204f6d4edd187ca5f445e6f1d843228a28b16ba7e6d5924c24e0cdf0b2e4bce', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 39337, hash: '11e2a8de2a5405787cd00d66afe4b462c89919c5c348d018a0db8f36fd3a9a7e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 39263, hash: 'd197604f64a44d5db6276b994ca9d71ebfa80ab530c4c2b25837f724a88d8628', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 38811, hash: '5534598a60494bbce9fd80e767e4c0bbdcd4d0b1211464d6e241e1f1d92fa9c6', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-QJLN2PNI.css': {size: 8408, hash: 'wJMYKVUGELY', text: () => import('./assets-chunks/styles-QJLN2PNI_css.mjs').then(m => m.default)}
  },
};

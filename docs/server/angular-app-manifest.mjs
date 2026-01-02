
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
    'index.csr.html': {size: 26374, hash: 'b016ef280d1a5508184f172a3b103b034cb17fe50e79b8d0f309a5f9e327fede', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18783, hash: '1543dc35af9e83e7f476dd8bab7396db9358d3aa101b275f4cb9989b24909c4a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 30937, hash: '1a691b71bd8990ee0a2282909f9100fbedff999825e7ca63d59b771250f333c1', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 34024, hash: '6118060ae354303dba16df00494dc4274d70a03b19605a7eb60520f2a2cef6d3', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 31496, hash: 'f9d060f4ef081bd6ef537d93a8f2a0e306ecea99f9f7b9b7c60a3af9118a4c85', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31422, hash: 'b92e6f4e2658a10b70fb60b91d5574804c8a915f3fdd5042cc470156c7876ac4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 32318, hash: '8428db250077c1fc3fee2907a6e3b42f0addc1dbd72f688c8645db7eee93be81', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'styles-2ZZLM7WK.css': {size: 9243, hash: 'FmshlQZYNrg', text: () => import('./assets-chunks/styles-2ZZLM7WK_css.mjs').then(m => m.default)}
  },
};

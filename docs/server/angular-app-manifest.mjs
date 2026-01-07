
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
    'index.csr.html': {size: 26442, hash: '29f204a19b7ee206b5d7dadeb7b9e177b5092584da254e0e50ea79c5b529a46a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18834, hash: '0d21ceb39ae18c47cffa13c580f9b50e711198c179f359a93961ade7f96f2277', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 39331, hash: '527e25361a31293a18da2d85b7e18b0965f8948c694ee2705fd2a63a3ae6004b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 39405, hash: 'f580ddbbc5a90b0a07b789936d41e69073bb94fa89c86c8812aabb6f40569f4b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 38852, hash: 'aaa6e35125e820cbb5737d0f4c203d3751155cf0ebac6ea7b20115ac40f908b7', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 40260, hash: '724242bda931efe1df2f8e96bb3ec23f3d285421141f5a98cd5d6cb1a7be5728', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 41966, hash: '32c613219a8ae3a0bb322eed6b7e33449fcff7a8db8e4ff0582128016c8ccb47', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-QJLN2PNI.css': {size: 8408, hash: 'wJMYKVUGELY', text: () => import('./assets-chunks/styles-QJLN2PNI_css.mjs').then(m => m.default)}
  },
};

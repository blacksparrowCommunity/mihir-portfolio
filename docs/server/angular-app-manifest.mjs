
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
    'index.csr.html': {size: 26442, hash: '7edeaddafcd12945feea7e44ea0ab8578554342b89b96c844f9d87c1eddc07f7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18834, hash: 'c456d4dea1ea01331bda3388bfc62179f0f4cdf6c78f2139ad8564eeb54fd289', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 40225, hash: '9381dbebee2510a9dfcfe7930b1b65ef58cc7fa6a7736a157ea53b01fe872628', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'index.html': {size: 39329, hash: '961f31cfa4cf99f15eff7448f01398d5d176b5c4f5bd291ae05190c5aa27a220', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 39403, hash: '01f2dfe4978e75aafea3943b8170659037f2a059fbbf138961a1e381654d22c2', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 41931, hash: 'b1000c8fe422bc71dac7103591cd003fe3ae5d3d9fa4c65c1d123de51ad630cb', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 38844, hash: 'fb82db476165e7f0effd430299e6faff3ceeef4caba0ae718f4fb61b07bbe3b4', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-QJLN2PNI.css': {size: 8408, hash: 'wJMYKVUGELY', text: () => import('./assets-chunks/styles-QJLN2PNI_css.mjs').then(m => m.default)}
  },
};

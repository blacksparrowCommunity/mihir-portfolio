
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
    'index.csr.html': {size: 26374, hash: '8d0cece485948c8e2e28b22ee8e9774fb6c0509247b4f91626efbd5aa3de640e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18783, hash: 'f10898695e8a9f81ce378b44c6723e8c22c3f6a8d9e3b9ed5d64ad101173b531', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 38784, hash: 'b0e60a59d8b44955c16ed7b36236628123ad66ae467a53757fbc54f95e60f5ba', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 39337, hash: 'd003fe3abc03ddc4396d4fa1f797223d6dadfde4c0056b1d611b7e8f37c4a648', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 39263, hash: '60b1ab126befb4fc7cf922706a6f68865ebb98cd8ac2ff2b4d68b7d06ebdf283', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 40192, hash: 'd57e00b690622d9261325f0f27efd0a30ed20102d88ec418153563bccad3174e', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 42945, hash: '8f704772e75a0057873150ebd7557993d846211df0b65f233bb789714991fa6d', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-QJLN2PNI.css': {size: 8408, hash: 'wJMYKVUGELY', text: () => import('./assets-chunks/styles-QJLN2PNI_css.mjs').then(m => m.default)}
  },
};

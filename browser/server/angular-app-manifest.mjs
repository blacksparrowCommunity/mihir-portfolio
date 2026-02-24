
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
    'index.csr.html': {size: 26442, hash: '78c4698ce34bb34dedf96df86bc144a44333985479fc8dc371370cafe31915e6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18834, hash: 'b089dace162915570b258c29dc75f16fae85e1bccce572030894bfca2dac6b0c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 39331, hash: '3e4c78c232a22e98b2e86212d3b3a480a069d09ebc14432ff16525b7d16feec4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 43013, hash: 'de20e3b3be5cf5a0a04830071ea2ca71928bf27f492528c4a190a38907996afd', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 38852, hash: '97b271d913ff1f107e28a260284e4b64199d61d3606735324da52754d8e2de48', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 39405, hash: 'd0bc1a4e4450dad119b1a5f6f917aa8c5b9eb72eaf407d2ed86bdca2ce0a9dbd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 40260, hash: 'aecf421e46af13693e02c26eeae4ce4dae26de362397f35fdfa3c08843497a30', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'styles-QJLN2PNI.css': {size: 8408, hash: 'wJMYKVUGELY', text: () => import('./assets-chunks/styles-QJLN2PNI_css.mjs').then(m => m.default)}
  },
};

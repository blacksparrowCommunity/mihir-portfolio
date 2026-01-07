
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
    'index.csr.html': {size: 26442, hash: 'd9bf2ae2db79fce39476185ab895e3d309e8295e7bdeac031b8e2ed1092fb2c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18834, hash: '0de8683e47957d092d266ad6a8f914fb5140881e583bad9974487cf0b72e981f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 39331, hash: '9a8f8a65183ac0ad2a3e7d696d3c46ad2fbd7baeb05f85761f0cc430f4dffaf9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 39405, hash: '518832478103cd98d4a6d12e271928a27915713dfc1e4825303f4c1c4746c91b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 41966, hash: 'b8caad4f73b44e9f0198094a671d6367c3b899694db6c148cd8b3e0e2cda7925', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 38879, hash: '6eb23325ec730c8959c63d804e1368a63ce3c302f91e256e9b6e283bc36c57f4', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 40260, hash: '1d33c16aab78f5d24fbbaba99b344cec4845eda9df7f10efa223391a54f94470', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'styles-QJLN2PNI.css': {size: 8408, hash: 'wJMYKVUGELY', text: () => import('./assets-chunks/styles-QJLN2PNI_css.mjs').then(m => m.default)}
  },
};

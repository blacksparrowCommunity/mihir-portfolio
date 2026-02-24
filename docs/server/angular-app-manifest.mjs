
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
    'index.csr.html': {size: 26374, hash: '4adb6f3ba02a57d83cb508bd9e21a003ce14ec968d869e94a34ea7cde8d168b8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18783, hash: '67717e676a9a2c158d949f245a1101e19af837f8d6017dbd71e797dcddcd0032', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 38784, hash: '4843ff90a6f89af977b62232437b8c392b5d37a569c5ebc30f17d33d4834e396', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 39263, hash: '9e8f3f7c50b37ca8486a71de9040820f8d2455fb5c66c7ffe5526fab1a1aa273', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 39337, hash: 'a603cdca902c8e2e8014715b536ba8158f49dafc98ff3e7de7a8777dd1169512', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 40192, hash: '9bfa9d1ef898295e008b9dcaf65ad1648ba4e9b8588a80690178190ce6a113de', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 42947, hash: '76486260b939c9ffdc9b9808249a46584f8e39193d112d0aa1291faface0dc17', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-QJLN2PNI.css': {size: 8408, hash: 'wJMYKVUGELY', text: () => import('./assets-chunks/styles-QJLN2PNI_css.mjs').then(m => m.default)}
  },
};

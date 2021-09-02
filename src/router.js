import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

const titleRoot = 'ACARB - Associação dos Catadores de Recicláveis de Barbalha'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: `Home | ${titleRoot}`
    }
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import(/* webpackChunkName: "sobre" */ './views/Sobre.vue'),
    meta: {
      title: `Sobre | ${titleRoot}`
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  routes,
})

router.beforeEach((to, from, next) => {
  const pageTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  const pageMetas = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousPageMetas = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(pageTitle) {
    document.title = pageTitle.meta.title;
  } else if(previousPageMetas) {
    document.title = previousPageMetas.meta.title;
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if(!pageMetas) return next();
  
  pageMetas.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  }).forEach(tag => document.head.appendChild(tag));

  next();
});

export default router

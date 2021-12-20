import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _429a8ae0 = () => interopDefault(import('..\\pages\\about-us\\index.vue' /* webpackChunkName: "pages/about-us/index" */))
const _1580bef4 = () => interopDefault(import('..\\pages\\search\\index.vue' /* webpackChunkName: "pages/search/index" */))
const _69bebde4 = () => interopDefault(import('..\\pages\\movie\\_id\\index.vue' /* webpackChunkName: "pages/movie/_id/index" */))
const _f8d28822 = () => interopDefault(import('..\\pages\\movies\\_id\\index.vue' /* webpackChunkName: "pages/movies/_id/index" */))
const _34c03eae = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _429a8ae0,
    name: "about-us"
  }, {
    path: "/search",
    component: _1580bef4,
    name: "search"
  }, {
    path: "/movie/:id",
    component: _69bebde4,
    name: "movie-id"
  }, {
    path: "/movies/:id",
    component: _f8d28822,
    name: "movies-id"
  }, {
    path: "/",
    component: _34c03eae,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

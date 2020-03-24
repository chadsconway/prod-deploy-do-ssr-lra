import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ce23a4be = () => interopDefault(import('..\\pages\\approvals.vue' /* webpackChunkName: "pages_approvals" */))
const _b37c70a4 = () => interopDefault(import('..\\pages\\donate.vue' /* webpackChunkName: "pages_donate" */))
const _577a17a3 = () => interopDefault(import('..\\pages\\founders.vue' /* webpackChunkName: "pages_founders" */))
const _688dd7e5 = () => interopDefault(import('..\\pages\\history.vue' /* webpackChunkName: "pages_history" */))
const _09a58e21 = () => interopDefault(import('..\\pages\\how.vue' /* webpackChunkName: "pages_how" */))
const _33603aae = () => interopDefault(import('..\\pages\\join.vue' /* webpackChunkName: "pages_join" */))
const _72283010 = () => interopDefault(import('..\\pages\\overview.vue' /* webpackChunkName: "pages_overview" */))
const _a5bd597a = () => interopDefault(import('..\\pages\\what.vue' /* webpackChunkName: "pages_what" */))
const _58c3b13a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/approvals",
    component: _ce23a4be,
    name: "approvals"
  }, {
    path: "/donate",
    component: _b37c70a4,
    name: "donate"
  }, {
    path: "/founders",
    component: _577a17a3,
    name: "founders"
  }, {
    path: "/history",
    component: _688dd7e5,
    name: "history"
  }, {
    path: "/how",
    component: _09a58e21,
    name: "how"
  }, {
    path: "/join",
    component: _33603aae,
    name: "join"
  }, {
    path: "/overview",
    component: _72283010,
    name: "overview"
  }, {
    path: "/what",
    component: _a5bd597a,
    name: "what"
  }, {
    path: "/",
    component: _58c3b13a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

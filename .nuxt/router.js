import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4ba1ab78 = () => interopDefault(import('../pages/approvals.vue' /* webpackChunkName: "pages/approvals" */))
const _67aff137 = () => interopDefault(import('../pages/donate.vue' /* webpackChunkName: "pages/donate" */))
const _760402ec = () => interopDefault(import('../pages/founders.vue' /* webpackChunkName: "pages/founders" */))
const _56364108 = () => interopDefault(import('../pages/history.vue' /* webpackChunkName: "pages/history" */))
const _30e5f938 = () => interopDefault(import('../pages/how.vue' /* webpackChunkName: "pages/how" */))
const _b1c64b1c = () => interopDefault(import('../pages/join.vue' /* webpackChunkName: "pages/join" */))
const _3514597e = () => interopDefault(import('../pages/overview.vue' /* webpackChunkName: "pages/overview" */))
const _6dee4b0c = () => interopDefault(import('../pages/what.vue' /* webpackChunkName: "pages/what" */))
const _2c7028ba = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4ba1ab78,
    name: "approvals"
  }, {
    path: "/donate",
    component: _67aff137,
    name: "donate"
  }, {
    path: "/founders",
    component: _760402ec,
    name: "founders"
  }, {
    path: "/history",
    component: _56364108,
    name: "history"
  }, {
    path: "/how",
    component: _30e5f938,
    name: "how"
  }, {
    path: "/join",
    component: _b1c64b1c,
    name: "join"
  }, {
    path: "/overview",
    component: _3514597e,
    name: "overview"
  }, {
    path: "/what",
    component: _6dee4b0c,
    name: "what"
  }, {
    path: "/",
    component: _2c7028ba,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

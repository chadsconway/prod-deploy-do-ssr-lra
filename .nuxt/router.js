import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1365992c = () => interopDefault(import('..\\pages\\approvals.vue' /* webpackChunkName: "pages_approvals" */))
const _4d4e82f6 = () => interopDefault(import('..\\pages\\donate.vue' /* webpackChunkName: "pages_donate" */))
const _20aeb4ba = () => interopDefault(import('..\\pages\\founders.vue' /* webpackChunkName: "pages_founders" */))
const _cf548824 = () => interopDefault(import('..\\pages\\history.vue' /* webpackChunkName: "pages_history" */))
const _050adeaa = () => interopDefault(import('..\\pages\\how.vue' /* webpackChunkName: "pages_how" */))
const _5794a340 = () => interopDefault(import('..\\pages\\join.vue' /* webpackChunkName: "pages_join" */))
const _dfbef5e2 = () => interopDefault(import('..\\pages\\overview.vue' /* webpackChunkName: "pages_overview" */))
const _1e6613da = () => interopDefault(import('..\\pages\\what.vue' /* webpackChunkName: "pages_what" */))
const _685b86c8 = () => interopDefault(import('..\\pages\\info\\_id\\index.vue' /* webpackChunkName: "pages_info__id_index" */))
const _46c86677 = () => interopDefault(import('..\\pages\\info\\_id\\detail.vue' /* webpackChunkName: "pages_info__id_detail" */))
const _ea1d0ca8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _446bfeee = () => interopDefault(import('..\\pages\\_id\\index.vue' /* webpackChunkName: "pages__id_index" */))
const _336f7699 = () => interopDefault(import('..\\pages\\_pdf\\index.vue' /* webpackChunkName: "pages__pdf_index" */))
const _75a610b4 = () => interopDefault(import('..\\pages\\_pdf\\viewpdf.vue' /* webpackChunkName: "pages__pdf_viewpdf" */))

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
    component: _1365992c,
    name: "approvals"
  }, {
    path: "/donate",
    component: _4d4e82f6,
    name: "donate"
  }, {
    path: "/founders",
    component: _20aeb4ba,
    name: "founders"
  }, {
    path: "/history",
    component: _cf548824,
    name: "history"
  }, {
    path: "/how",
    component: _050adeaa,
    name: "how"
  }, {
    path: "/join",
    component: _5794a340,
    name: "join"
  }, {
    path: "/overview",
    component: _dfbef5e2,
    name: "overview"
  }, {
    path: "/what",
    component: _1e6613da,
    name: "what"
  }, {
    path: "/info/:id?",
    component: _685b86c8,
    name: "info-id"
  }, {
    path: "/info/:id?/detail",
    component: _46c86677,
    name: "info-id-detail"
  }, {
    path: "/",
    component: _ea1d0ca8,
    name: "index"
  }, {
    path: "/:id",
    component: _446bfeee,
    name: "id"
  }, {
    path: "/:pdf",
    component: _336f7699,
    name: "pdf"
  }, {
    path: "/:pdf/viewpdf",
    component: _75a610b4,
    name: "pdf-viewpdf"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

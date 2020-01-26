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
const _d2724eac = () => interopDefault(import('..\\pages\\old.id\\index.vue' /* webpackChunkName: "pages_old.id_index" */))
const _dfbef5e2 = () => interopDefault(import('..\\pages\\overview.vue' /* webpackChunkName: "pages_overview" */))
const _75dd20ba = () => interopDefault(import('..\\pages\\route.vue' /* webpackChunkName: "pages_route" */))
const _5ef5977f = () => interopDefault(import('..\\pages\\route\\index.vue' /* webpackChunkName: "pages_route_index" */))
const _0ac318d9 = () => interopDefault(import('..\\pages\\test_flaticon.vue' /* webpackChunkName: "pages_test_flaticon" */))
const _28cb94ab = () => interopDefault(import('..\\pages\\test_form.vue' /* webpackChunkName: "pages_test_form" */))
const _ba42a752 = () => interopDefault(import('..\\pages\\test-box-shadow.vue' /* webpackChunkName: "pages_test-box-shadow" */))
const _9dad6d44 = () => interopDefault(import('..\\pages\\test-gradients.vue' /* webpackChunkName: "pages_test-gradients" */))
const _7fb8e467 = () => interopDefault(import('..\\pages\\test-shapes.vue' /* webpackChunkName: "pages_test-shapes" */))
const _d4fdd716 = () => interopDefault(import('..\\pages\\video-frame.vue' /* webpackChunkName: "pages_video-frame" */))
const _1e6613da = () => interopDefault(import('..\\pages\\what.vue' /* webpackChunkName: "pages_what" */))
const _685b86c8 = () => interopDefault(import('..\\pages\\info\\_id\\index.vue' /* webpackChunkName: "pages_info__id_index" */))
const _16b204dc = () => interopDefault(import('..\\pages\\old.id\\_id.vue' /* webpackChunkName: "pages_old.id__id" */))
const _46c86677 = () => interopDefault(import('..\\pages\\info\\_id\\detail.vue' /* webpackChunkName: "pages_info__id_detail" */))
const _f4f4dcc4 = () => interopDefault(import('..\\pages\\info\\_id\\old.detail.vue' /* webpackChunkName: "pages_info__id_old.detail" */))
const _6abf9095 = () => interopDefault(import('..\\pages\\info\\_id\\old.index.vue' /* webpackChunkName: "pages_info__id_old.index" */))
const _ea1d0ca8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _5b9abed0 = () => interopDefault(import('..\\pages\\_HOME.vue' /* webpackChunkName: "pages__HOME" */))
const _446bfeee = () => interopDefault(import('..\\pages\\_id\\index.vue' /* webpackChunkName: "pages__id_index" */))
const _336f7699 = () => interopDefault(import('..\\pages\\_pdf\\index.vue' /* webpackChunkName: "pages__pdf_index" */))
const _1ca2728c = () => interopDefault(import('..\\pages\\_id\\old.detail.vue' /* webpackChunkName: "pages__id_old.detail" */))
const _bda84c32 = () => interopDefault(import('..\\pages\\_id\\old.index.vue' /* webpackChunkName: "pages__id_old.index" */))
const _75a610b4 = () => interopDefault(import('..\\pages\\_pdf\\viewpdf.vue' /* webpackChunkName: "pages__pdf_viewpdf" */))

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
    path: "/old.id",
    component: _d2724eac,
    name: "old.id"
  }, {
    path: "/overview",
    component: _dfbef5e2,
    name: "overview"
  }, {
    path: "/route",
    component: _75dd20ba,
    children: [{
      path: "",
      component: _5ef5977f,
      name: "route"
    }]
  }, {
    path: "/test_flaticon",
    component: _0ac318d9,
    name: "test_flaticon"
  }, {
    path: "/test_form",
    component: _28cb94ab,
    name: "test_form"
  }, {
    path: "/test-box-shadow",
    component: _ba42a752,
    name: "test-box-shadow"
  }, {
    path: "/test-gradients",
    component: _9dad6d44,
    name: "test-gradients"
  }, {
    path: "/test-shapes",
    component: _7fb8e467,
    name: "test-shapes"
  }, {
    path: "/video-frame",
    component: _d4fdd716,
    name: "video-frame"
  }, {
    path: "/what",
    component: _1e6613da,
    name: "what"
  }, {
    path: "/info/:id?",
    component: _685b86c8,
    name: "info-id"
  }, {
    path: "/old.id/:id",
    component: _16b204dc,
    name: "old.id-id"
  }, {
    path: "/info/:id?/detail",
    component: _46c86677,
    name: "info-id-detail"
  }, {
    path: "/info/:id?/old.detail",
    component: _f4f4dcc4,
    name: "info-id-old.detail"
  }, {
    path: "/info/:id?/old.index",
    component: _6abf9095,
    name: "info-id-old.index"
  }, {
    path: "/",
    component: _ea1d0ca8,
    name: "index"
  }, {
    path: "/:HOME",
    component: _5b9abed0,
    name: "HOME"
  }, {
    path: "/:id",
    component: _446bfeee,
    name: "id"
  }, {
    path: "/:pdf",
    component: _336f7699,
    name: "pdf"
  }, {
    path: "/:id/old.detail",
    component: _1ca2728c,
    name: "id-old.detail"
  }, {
    path: "/:id/old.index",
    component: _bda84c32,
    name: "id-old.index"
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

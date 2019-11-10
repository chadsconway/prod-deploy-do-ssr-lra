import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _94866e78 = () => interopDefault(import('..\\pages\\info.vue' /* webpackChunkName: "pages_info" */))
const _d2724eac = () => interopDefault(import('..\\pages\\old.id\\index.vue' /* webpackChunkName: "pages_old.id_index" */))
const _75dd20ba = () => interopDefault(import('..\\pages\\route.vue' /* webpackChunkName: "pages_route" */))
const _5ef5977f = () => interopDefault(import('..\\pages\\route\\index.vue' /* webpackChunkName: "pages_route_index" */))
const _34d70b74 = () => interopDefault(import('..\\pages\\test_2_vuex.vue' /* webpackChunkName: "pages_test_2_vuex" */))
const _1e7ad017 = () => interopDefault(import('..\\pages\\test_api_async_await.vue' /* webpackChunkName: "pages_test_api_async_await" */))
const _36e4bec1 = () => interopDefault(import('..\\pages\\test_api_axios_module.vue' /* webpackChunkName: "pages_test_api_axios_module" */))
const _2402095f = () => interopDefault(import('..\\pages\\test_api_promise.vue' /* webpackChunkName: "pages_test_api_promise" */))
const _87fd954e = () => interopDefault(import('..\\pages\\test_api_vuex_fetch.vue' /* webpackChunkName: "pages_test_api_vuex_fetch" */))
const _34163b79 = () => interopDefault(import('..\\pages\\test_appbar.vue' /* webpackChunkName: "pages_test_appbar" */))
const _0c11fcf7 = () => interopDefault(import('..\\pages\\test_card.vue' /* webpackChunkName: "pages_test_card" */))
const _0ac318d9 = () => interopDefault(import('..\\pages\\test_flaticon.vue' /* webpackChunkName: "pages_test_flaticon" */))
const _28cb94ab = () => interopDefault(import('..\\pages\\test_form.vue' /* webpackChunkName: "pages_test_form" */))
const _dc7b7438 = () => interopDefault(import('..\\pages\\test_palette.vue' /* webpackChunkName: "pages_test_palette" */))
const _1892f156 = () => interopDefault(import('..\\pages\\test_sidenav.vue' /* webpackChunkName: "pages_test_sidenav" */))
const _62a06ece = () => interopDefault(import('..\\pages\\test_vuex.vue' /* webpackChunkName: "pages_test_vuex" */))
const _ba42a752 = () => interopDefault(import('..\\pages\\test-box-shadow.vue' /* webpackChunkName: "pages_test-box-shadow" */))
const _9dad6d44 = () => interopDefault(import('..\\pages\\test-gradients.vue' /* webpackChunkName: "pages_test-gradients" */))
const _7fb8e467 = () => interopDefault(import('..\\pages\\test-shapes.vue' /* webpackChunkName: "pages_test-shapes" */))
const _d4fdd716 = () => interopDefault(import('..\\pages\\video-frame.vue' /* webpackChunkName: "pages_video-frame" */))
const _16b204dc = () => interopDefault(import('..\\pages\\old.id\\_id.vue' /* webpackChunkName: "pages_old.id__id" */))
const _ea1d0ca8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _446bfeee = () => interopDefault(import('..\\pages\\_id\\index.vue' /* webpackChunkName: "pages__id_index" */))
const _1ca2728c = () => interopDefault(import('..\\pages\\_id\\old.detail.vue' /* webpackChunkName: "pages__id_old.detail" */))
const _bda84c32 = () => interopDefault(import('..\\pages\\_id\\old.index.vue' /* webpackChunkName: "pages__id_old.index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/info",
    component: _94866e78,
    name: "info"
  }, {
    path: "/old.id",
    component: _d2724eac,
    name: "old.id"
  }, {
    path: "/route",
    component: _75dd20ba,
    children: [{
      path: "",
      component: _5ef5977f,
      name: "route"
    }]
  }, {
    path: "/test_2_vuex",
    component: _34d70b74,
    name: "test_2_vuex"
  }, {
    path: "/test_api_async_await",
    component: _1e7ad017,
    name: "test_api_async_await"
  }, {
    path: "/test_api_axios_module",
    component: _36e4bec1,
    name: "test_api_axios_module"
  }, {
    path: "/test_api_promise",
    component: _2402095f,
    name: "test_api_promise"
  }, {
    path: "/test_api_vuex_fetch",
    component: _87fd954e,
    name: "test_api_vuex_fetch"
  }, {
    path: "/test_appbar",
    component: _34163b79,
    name: "test_appbar"
  }, {
    path: "/test_card",
    component: _0c11fcf7,
    name: "test_card"
  }, {
    path: "/test_flaticon",
    component: _0ac318d9,
    name: "test_flaticon"
  }, {
    path: "/test_form",
    component: _28cb94ab,
    name: "test_form"
  }, {
    path: "/test_palette",
    component: _dc7b7438,
    name: "test_palette"
  }, {
    path: "/test_sidenav",
    component: _1892f156,
    name: "test_sidenav"
  }, {
    path: "/test_vuex",
    component: _62a06ece,
    name: "test_vuex"
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
    path: "/old.id/:id",
    component: _16b204dc,
    name: "old.id-id"
  }, {
    path: "/",
    component: _ea1d0ca8,
    name: "index"
  }, {
    path: "/:id",
    component: _446bfeee,
    name: "id"
  }, {
    path: "/:id/old.detail",
    component: _1ca2728c,
    name: "id-old.detail"
  }, {
    path: "/:id/old.index",
    component: _bda84c32,
    name: "id-old.index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _34d70b74 = () => interopDefault(import('..\\pages\\test_2_vuex.vue' /* webpackChunkName: "pages_test_2_vuex" */))
const _6d891283 = () => interopDefault(import('..\\pages\\test_api.vue' /* webpackChunkName: "pages_test_api" */))
const _0c11fcf7 = () => interopDefault(import('..\\pages\\test_card.vue' /* webpackChunkName: "pages_test_card" */))
const _0ac318d9 = () => interopDefault(import('..\\pages\\test_flaticon.vue' /* webpackChunkName: "pages_test_flaticon" */))
const _28cb94ab = () => interopDefault(import('..\\pages\\test_form.vue' /* webpackChunkName: "pages_test_form" */))
const _1892f156 = () => interopDefault(import('..\\pages\\test_sidenav.vue' /* webpackChunkName: "pages_test_sidenav" */))
const _62a06ece = () => interopDefault(import('..\\pages\\test_vuex.vue' /* webpackChunkName: "pages_test_vuex" */))
const _d4fdd716 = () => interopDefault(import('..\\pages\\video-frame.vue' /* webpackChunkName: "pages_video-frame" */))
const _ea1d0ca8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/test_2_vuex",
    component: _34d70b74,
    name: "test_2_vuex"
  }, {
    path: "/test_api",
    component: _6d891283,
    name: "test_api"
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
    path: "/test_sidenav",
    component: _1892f156,
    name: "test_sidenav"
  }, {
    path: "/test_vuex",
    component: _62a06ece,
    name: "test_vuex"
  }, {
    path: "/video-frame",
    component: _d4fdd716,
    name: "video-frame"
  }, {
    path: "/",
    component: _ea1d0ca8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

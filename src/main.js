// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from "Vuex"
import {store} from './store/store'
import VueRouter from 'vue-router'
import routes from './router/router'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes
})
/* eslint-disable no-new */
new Vue({
  router,
  store,
  created: () => console.log(store.state.msg)
}).$mount('#app')

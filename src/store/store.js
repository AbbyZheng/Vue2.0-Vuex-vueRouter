import Vue from 'vue'
import Vuex from 'Vuex'
import {mutations} from "./mutations"

Vue.use(Vuex)

const state = {
	msg: 'Welcome to Your Vue2.0+Vuex+vueRouter App'
}

export const store = new Vuex.Store({
  state,
  mutations
})
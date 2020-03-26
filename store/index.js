import Vue from 'vue'
import Vuex from 'vuex'
// 引入首页模块vuex
import home from './home/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// 接收缓存中的用户信息
		userObj:{}
	},
	mutations: {},
	actions: {},
	getters: {},
	modules: {
		home
	}
})

import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 非生产环境开启严格模式
  actions,
  modules: { ...modules }
})

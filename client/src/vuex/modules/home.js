import * as types from '../mutation-types'

const state = {
  menus: []
}

const mutations = {
  [types.FETCH_HOME_INFO] (state, homeInfo) {
    state.menus = homeInfo
  }
}

const getters = {
}

export default {
  state,
  getters,
  mutations
}

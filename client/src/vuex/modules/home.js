import * as types from '../mutation-types'

const state = {
  menus: []
}

const mutations = {
  [types.UPDATE_HOMEINFO] (state, homeInfo) {
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

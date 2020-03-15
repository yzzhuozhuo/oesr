import * as types from '../mutation-types'

const state = {
  discussList: []
}

const mutations = {
  [types.FETCH_DISCUSS_INFO] (state, discussList) {
    state.discussList = discussList
  }
}

const getters = {
}

export default {
  state,
  getters,
  mutations
}

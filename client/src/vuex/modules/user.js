import * as types from '../mutation-types'

const state = {
  username: ''
}

const mutations = {
  [types.UPDATE_USERINFO] (state, userInfo) {
    state.username = userInfo.username
  }
}

// 验证是否登录
const getters = {
  hasLogin: (state, getters, rootState) => {
    return !!state.username
  }
}

export default {
  state,
  getters,
  mutations
}

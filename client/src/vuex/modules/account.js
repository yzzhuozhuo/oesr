import * as types from '../mutation-types'

const state = {
  tel: '',
  accountType: '',
  userId: '',
  token: ''
}

const mutations = {
  [types.FIND_ACCOUNT] (state, data) {
    state.tel = data.tel
    state.accountType = data.accountType
    state.userId = data.userId
    state.token = data.token
  },
  [types.GET_USER_INFO] (state, data) {
    console.info(data)
    state.tel = data.tel
    state.accountType = data.accountType
    state.userId = data.userId
    state.token = data.token
  },
  [types.LOGOUT] (state, data) {
    state.tel = ''
    state.accountType = ''
    state.userId = ''
    state.token = ''
  }
}

const getters = {
  hasLogin: (state, getters, rootState) => {
    return !!state.token
  },
  accountType: state => state.accountType
}

export default {
  state,
  getters,
  mutations
}

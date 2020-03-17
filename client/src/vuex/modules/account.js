import * as types from '../mutation-types'

const state = {
  tel: '',
  accountType: 'student',
  userId: '',
  token: ''
}

const mutations = {
  [types.FIND_ACCOUNT] (state, data) {
    state.tel = data.tel
    state.accountType = data.accountType
    state.userId = data.userId
    state.token = data.token
  }
}

const getters = {
}

export default {
  state,
  getters,
  mutations
}

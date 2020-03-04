import * as types from '../mutation-types'

const state = {

}

const mutations = {
  [types.NOTIFY_ERROR] (state, errMsg) {
    state.errMsg = errMsg
  }
}

export default {
  state,
  mutations
}

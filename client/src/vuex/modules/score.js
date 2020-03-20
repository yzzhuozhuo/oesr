import * as types from '../mutation-types'

const state = {
  scoreList: [],
  scoreDetailList: {}
}

const mutations = {
  [types.FETCH_SCORE_LIST] (state, data) {
    state.scoreList = data
  },
  [types.FETCH_DETAIL_SCORE_LIST] (state, data) {
    state.scoreDetailList = data
  }
}

export default {
  state,
  mutations
}

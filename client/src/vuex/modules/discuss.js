import * as types from '../mutation-types'

const state = {
  discussList: [],
  currentPage: 1,
  pageNum: 6,
  total: 11
}

const mutations = {
  [types.FETCH_DISCUSS_INFO] (state, data) {
    console.info(data)
    state.discussList = data.data
    state.currentPage = data.currentPage
    state.pageNum = data.pageNum
    state.total = data.total
  }
}

const getters = {
}

export default {
  state,
  getters,
  mutations
}

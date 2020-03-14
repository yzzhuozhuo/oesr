import * as types from '../mutation-types'

const state = {
  positionList: [],
  page: 1, // 当前在第几页
  pageNumber: 10, // 每页展示的条数
  totalPage: 0, // 数据总条数
  positionDetailList: {}
}

const mutations = {
  [types.FETCH_POSITION_LIST] (state, data) {
    state.positionList = data.data
    state.page = data.currentPage
    state.pageNumber = data.pageNum
    state.totalPage = data.total
  },
  [types.FETCH_POSITION_DETAIL_LIST] (state, data) {
    state.positionDetailList = data
  }
}

export default {
  state,
  mutations
}

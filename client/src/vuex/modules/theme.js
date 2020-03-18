import * as types from '../mutation-types'

const state = {
  themeList: [],
  page: 1, // 当前在第几页
  pageNumber: 10, // 每页展示的条数
  totalPage: 0, // 数据总条数
  themeDetailList: {} // 当前试题的详情
}

const mutations = {
  [types.FETCH_THEME_LIST] (state, data) {
    state.themeList = data.data
    state.page = data.currentPage
    state.pageNumber = data.pageNum
    state.totalPage = data.total
  },
  [types.FETCH_THEME_DETAIL_LIST] (state, data) {
    state.themeDetailList = data
  }
}

export default {
  state,
  mutations
}

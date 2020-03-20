import * as types from '../mutation-types'

const state = {
  resumeList: [],
  page: 1, // 当前在第几页
  pageNumber: 10, // 每页展示的条数
  totalPage: 0 // 数据总条数
}

const mutations = {
  [types.FETCH_RESUME_LIST] (state, data) {
    state.resumeList = data.data
    state.page = data.currentPage
    state.pageNumber = data.pageNum
    state.totalPage = data.total
  }
}

export default {
  state,
  mutations
}

import * as types from '../mutation-types'

const state = {
  studentList: {}
}

const mutations = {
  [types.FETCH_STUDENT_LIST] (state, data) {
    state.studentList = data[0]
  },
  [types.UPDATE_STUDENT] (state, data) {
    state.studentList = data
  }
}

// 验证是否登录
const getters = {
  // hasLogin: (state, getters, rootState) => {
  //   return !!state.studentList.studentId
  // }
}

export default {
  state,
  getters,
  mutations
}

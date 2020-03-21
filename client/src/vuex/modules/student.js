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
  },
  [types.FOLLOW_CAMPUS_ITEM] (state, data) {
    state.studentList.followCampus.push(data.campusDateId)
    state.studentList.followCampus = [...new Set(state.studentList.followCampus)]
    console.info(state.studentList.followCampus)
  },
  [types.UN_FOLLOW_CAMPUS_ITEM] (state, data) {
    const index = state.studentList.followCampus.indexOf(data.campusDateId)
    state.studentList.followCampus.splice(index, 1)
    state.studentList.followCampus = [...new Set(state.studentList.followCampus)]
  }
}

// 验证是否登录
const getters = {
  // hasLogin: (state, getters, rootState) => {
  //   return !!state.studentList.studentId
  // }
  followCampus: state => state.studentList.followCampus
}

export default {
  state,
  getters,
  mutations
}

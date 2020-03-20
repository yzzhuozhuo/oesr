import * as types from '../mutation-types'

const state = {
  campusDateList: []
}

const mutations = {
  [types.FETCH_CAMPUS_DATE_LIST] (state, data) {
    state.campusDateList = data
  },
  [types.ADD_CAMPUS_DATE_LIST] (state, data) {
    console.info(data)
    state.campusDateList.push(data)
  }
}

export default {
  state,
  mutations
}

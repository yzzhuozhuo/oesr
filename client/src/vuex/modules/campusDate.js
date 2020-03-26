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
    // state.campusDateList.push(data)
    state.campusDateList = data
  },
  [types.FILTER_FOLLOW_CAMPUS_ITEM] (state, data) {
    console.info(data)
    if (data.isFollow) {
      state.campusDateList = state.campusDateList.filter(item => {
        return data.followCampus.includes(item._id)
      })
    }
  }
}

export default {
  state,
  mutations
}

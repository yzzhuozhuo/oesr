import * as types from '../mutation-types'

const state = {
  calendarList: []
}

const mutations = {
  [types.FETCH_CALENDAR_LIST] (state, data) {
    state.calendarList = data
  }
}

export default {
  state,
  mutations
}

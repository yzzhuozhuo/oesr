import * as types from '../mutation-types'

const state = {
  campusList: [],
  interestedCompany: []
}

const mutations = {
  [types.FETCH_CAMPUS_LIST] (state, data) {
    state.campusList = data.data
    state.interestedCompany = data.interestedCompany
  }
}

export default {
  state,
  mutations
}

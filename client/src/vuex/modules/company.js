import * as types from '../mutation-types'

const state = {
  companyList: {}
}

const mutations = {
  [types.FETCH_COMPANY_LIST] (state, data) {
    state.companyList = data[0]
  }
}

// // 验证是否登录
// const getters = {
//   hasLogin: (state, getters, rootState) => {
//     return !!state.companyList.companyId
//   }
// }

export default {
  state,
  mutations
}

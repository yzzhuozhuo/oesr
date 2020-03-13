import * as types from '../mutation-types'

const state = {
  menu_name: '',
  icon: '',
  sub_menu: [
    {
      sub_name: '',
      sub_list: [
        {
          list_name: '',
          list_card: [
            {
              name: '',
              img: '',
              url: '',
              intro: ''
            }
          ]
        }
      ]
    }
  ]
}

const mutations = {
  [types.UPDATE_HOMEINFO] (state, homeInfo) {
    state.menu_name = homeInfo.menu_name
    state.icon = homeInfo.icon
    state.sub_menu = homeInfo.sub_menu
  }
}

const getters = {
  // hasLogin: (state, getters, rootState) => {
  //   return !!state.username
  // }
}

export default {
  state,
  getters,
  mutations
}

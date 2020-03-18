import * as types from './mutation-types'
import * as api from '../api'

function generateErrorHandler (commit, catchAndThrowError) {
  return function (err) {
    if (catchAndThrowError) {
      throw err
    }
  }
}

export const fetchUserInfo = function ({ state, commit, rootState }) {
  return api.fetchUserInfo().then(userInfo => {
    commit(types.UPDATE_USERINFO, userInfo)
  }).catch(generateErrorHandler(commit))
}

export const fetchHomeInfo = function ({ state, commit, rootState }) {
  return api.fetchHomeInfo().then(homeInfo => {
    commit(types.FETCH_HOME_INFO, homeInfo)
  })
}

export const fetchCalendarList = function ({ commit }) {
  return api.fetchCalendarList().then(data => {
    // console.log(123321, data)
    commit(types.FETCH_CALENDAR_LIST, data)
  }).catch(generateErrorHandler(commit))
}

export const updateCalendarList = function ({ commit }, data) {
  return api.updateCalendarList(data).then(data => {
    return data
  }).catch(generateErrorHandler(commit))
}

export const fetchPreachList = function ({ commit }, data) {
  return api.fetchPreachList(data).then(data => {
    // console.log(454, data)
    commit(types.FETCH_PREACH_LIST, data)
  }).catch(generateErrorHandler(commit))
}

export const updatePreachList = function ({ commit }, data) {
  return api.updatePreachList(data).then(data => {
    return data
  }).catch(generateErrorHandler(commit))
}

export const fetchDiscussInfo = function ({ state, commit, rootState }, data) {
  return api.fetchDiscussInfo(data).then(discussInfo => {
    commit(types.FETCH_DISCUSS_INFO, discussInfo)
  })
}

export const fetchPositionList = function ({ commit }, data) {
  return api.fetchPositionList(data).then(data => {
    commit(types.FETCH_POSITION_LIST, data)
  }).catch(generateErrorHandler(commit))
}

export const updatePositionList = function ({ commit }, data) {
  return api.updatePositionList(data).then(data => {
    return data
  }).catch(generateErrorHandler(commit))
}

export const fetchPositionDetailList = function ({ commit }, data) {
  return api.fetchPositionDetailList(data).then(data => {
    commit(types.FETCH_POSITION_DETAIL_LIST, data)
  }).catch(generateErrorHandler(commit))
}

export const addAccount = function ({ commit }, data) {
  return api.addAccount(data).then(data => {
    console.info(data)
    return data
  }).catch(generateErrorHandler(commit))
}
export const fetchStudentList = function ({ commit }, data) {
  return api.fetchStudentList(data).then(data => {
    commit(types.FETCH_STUDENT_LIST, data)
  }).catch(generateErrorHandler(commit))
}

export const updateStudentList = function ({ commit }, data) {
  return api.updateStudentList(data).then(data => {
    return data
  }).catch(generateErrorHandler(commit))
}

export const findTel = function ({ commit }, data) {
  return api.findTel(data).then(data => {
    return data
  }).catch(generateErrorHandler(commit))
}

export const addStudentList = function ({ commit }, data) {
  return api.addStudentList(data).then(data => {
    return data
  }).catch(generateErrorHandler(commit))
}

export const findAccount = function ({ commit }, data) {
  return api.findAccount(data).then(data => {
    commit(types.FIND_ACCOUNT, data)
    return data
  }).catch(generateErrorHandler(commit))
}
export const fetchCompanyList = function ({ commit }, data) {
  return api.fetchCompanyList(data).then(data => {
    commit(types.FETCH_COMPANY_LIST, data)
  }).catch(generateErrorHandler(commit))
}

export const updateCompanyList = function ({ commit }, data) {
  return api.updateCompanyList(data).then(data => {
    return data
  }).catch(generateErrorHandler(commit))
}

export const getUserInfo = function ({ commit }, data) {
  // const account = localStorage.getItem('account')
  // if (account) return commit(types.GET_USER_INFO, JSON.parse(account))
  return api.getUserInfo(data).then(data => {
    commit(types.GET_USER_INFO, data)
    return data
  }).catch(generateErrorHandler(commit))
}

export const logout = function ({ commit }) {
  return api.logout().then(data => {
    console.info(data)
    localStorage.clear()
    commit(types.LOGOUT)
  })
}

export const addCompanyList = function ({ commit }, data) {
  return api.addCompanyList(data).then(data => {
    return data
  }).catch(generateErrorHandler(commit))
}

export const fetchThemeList = function ({ commit }, data) {
  return api.fetchThemeList(data).then(data => {
    commit(types.FETCH_THEME_LIST, data)
  }).catch(generateErrorHandler(commit))
}

export const addThemeList = function ({ commit }, data) {
  return api.addThemeList(data).then(data => {
    return data
  }).catch(generateErrorHandler(commit))
}

export const fetchThemeDetailList = function ({ commit }, data) {
  return api.fetchThemeDetailList(data).then(data => {
    commit(types.FETCH_THEME_DETAIL_LIST, data)
  }).catch(generateErrorHandler(commit))
}

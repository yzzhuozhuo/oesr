import axios from 'axios'
import * as utils from '../utils'

export function fetchUserInfo () {
  let url = '/oesr/user'
  return axios.get(url).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function fetchCalendarList (data) {
  return axios.get(`/oesr/calendarList?${params(data)}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function updateCalendarList (body) {
  let url = '/oesr/addCalendarList'
  return axios.post(url, body).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function removeCalendarList (data) {
  let url = `/oesr/removeCalendarList?${params(data)}`
  return axios.delete(url).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function fetchPreachList (data) {
  return axios.get(`/oesr/preachList?${params(data)}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function updatePreachList (body) {
  return fetch('/oesr/addPreachList', {
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function fetchPositionList (data) {
  return axios.get(`/oesr/PositionList?${params(data)}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function updatePositionList (body) {
  return fetch('/oesr/addPositionList', {
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function fetchPositionDetailList (data) {
  return axios.get(`/oesr/positionDetailList?${params(data)}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

function params (obj) {
  var param = []
  for (var key in obj) {
    if (obj[key] != null) {
      param.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    }
  }
  return param.join('&')
}

export function fetchHomeInfo () {
  let url = '/oesr/home'
  return axios.get(url).then(utils.checkHttpStatus).then(utils.checkResponse).catch()
}

export function fetchDiscussInfo (data) {
  let url = '/oesr/discuss'
  return axios.get(`${url}?${params(data)}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch()
}

export function addDiscuss (body) {
  let url = '/oesr/addDiscuss'
  return axios.post(url, body).then(utils.checkHttpStatus).then(utils.checkResponse).catch()
}

export function removeDiscussInfo (data) {
  let url = `/oesr/removeDiscussInfo?${params(data)}`
  return axios.delete(url).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function findDiscussById (data) {
  let url = '/oesr/findDiscussById'
  return axios.get(`${url}?id=${data}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch()
}

export function addAccount (body) {
  let url = '/oesr/addAccount'
  return axios.post(url, body).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}
export function fetchStudentList (data) {
  return axios.get(`/oesr/studentList?${params(data)}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function addStudentList (body) {
  return fetch('/oesr/addStudentList', {
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function findTel (data) {
  let url = '/oesr/findTel'
  return axios.get(`${url}?${params(data)}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch()
}

export function updateStudentList (body) {
  const url = '/oesr/updateStudentList'
  return axios.put(url, body).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export async function uploadImg ({ file, domain, qiniuaddr }) {
  const url = '/oesr/uploadImg'
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  }
  const filetype = file.type
  // 重命名要上传的文件
  const keyname = 'zed' + Date.now() + Math.floor(Math.random() * 100) + '.' + filetype
  const res = await axios.get(url)
  console.log(res)
  const formdata = new FormData()
  formdata.append('file', file)
  formdata.append('token', res.data.data)
  formdata.append('key', keyname)
  // 获取到凭证之后再将文件上传到七牛云空间
  return axios.post(domain, formdata, config)
}

export function fetchCompanyList (data) {
  return axios.get(`/oesr/companyList?${params(data)}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch()
}

export function findAccount (body) {
  let url = '/oesr/findAccount'
  return axios.post(url, body).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function updatePsd (body) {
  let url = '/oesr/updatePsd'
  return axios.post(url, body).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function addCampusDate (body) {
  let url = '/oesr/addCampusDate'
  return axios.post(url, body).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function getCampusDate (data) {
  let url = `/oesr/getCampusDate?${params(data)}`
  return axios.get(url, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function getCampusDateById (data) {
  let url = '/oesr/getCampusDateById'
  return axios.get(`${url}?id=${data}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch()
}

export function getUserInfo () {
  let url = '/oesr/getUserInfo'
  return axios.get(url, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function logout () {
  let url = '/oesr/logout'
  return axios.get(url).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function sendCode (data) {
  let url = `/oesr/sendCode?${params(data)}`
  return axios.get(url, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function verifyCode (body) {
  let url = '/oesr/verifyCode'
  return axios.post(url, body).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function verifyCodeToNomal (body) {
  let url = '/oesr/verifyCodeToNomal'
  return axios.post(url, body).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function addCompanyList (body) {
  const url = '/oesr/addCompanyList'
  return axios.post(url, body).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function updateCompanyList (body) {
  const url = '/oesr/updateCompanyList'
  return axios.put(url, body).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function fetchThemeList (data) {
  return axios.get(`/oesr/themeList?${params(data)}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function addThemeList (body) {
  return fetch('/oesr/addThemeList', {
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function fetchThemeDetailList (data) {
  return axios.get(`/oesr/themeDetailList?${params(data)}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function fetchScoreList (data) {
  return axios.get(`/oesr/scoreList?${params(data)}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function addScoreList (body) {
  return axios.post('/oesr/addScoreList', {
    method: 'POST',
    credentials: 'same-origin',
    body: body,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function fetchCampusList (data) {
  return axios.get(`/oesr/campusList?${params(data)}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function fetchResumeList (data) {
  return axios.get(`/oesr/resumeList?${params(data)}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function addResumeList (body) {
  return axios.post('/oesr/addResumeList', {
    method: 'POST',
    credentials: 'same-origin',
    body: body,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

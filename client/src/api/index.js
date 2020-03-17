import axios from 'axios'
import * as utils from '../utils'

export function fetchUserInfo () {
  let url = '/oesr/user'
  return axios.get(url).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function fetchCalendarList () {
  let url = '/oesr/calendarList'
  return axios.get(url).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function updateCalendarList (body) {
  return fetch('/oesr/addCalendarList', {
    method: 'PUT',
    credentials: 'same-origin',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
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

export function addAccount (body) {
  let url = '/oesr/addAccount'
  return fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
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
  return fetch('/oesr/updateStudentList', {
    method: 'PUT',
    credentials: 'same-origin',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
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

export function addCompanyList (body) {
  return fetch('/oesr/addCompanyList', {
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

export function updateCompanyList (body) {
  return fetch('/oesr/updateCompanyList', {
    method: 'PUT',
    credentials: 'same-origin',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(utils.checkHttpStatus).then(utils.checkResponse).catch({})
}

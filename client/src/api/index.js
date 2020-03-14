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

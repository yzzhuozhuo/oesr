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

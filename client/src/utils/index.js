// import { Notification } from 'element-ui'
// 工具函数

export function checkHttpStatus (res) {
  return new Promise((resolve, reject) => {
    if (res.status === 204) {
      resolve()
    } else if (res.status >= 200 && res.status < 300) {
      resolve(res.data)
    } else {
      reject(new Error(res.statusText))
    }
  })
}

export function checkResponse (data) {
  return new Promise((resolve, reject) => {
    if (data.code === '200') {
      resolve(data.data)
    } else if (data.code === '401') {
      window.location.href = data.msg
    } else {
      reject(new Error(data.msg))
    }
  })
}

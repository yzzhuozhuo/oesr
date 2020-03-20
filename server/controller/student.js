const studentService = require('../service/student')
const qiniu = require('qiniu')

exports.uploadImg = function (req, res) {
  const accessKey = '1BAxkaDEdVBt0aMcBfixthRQ2jEp3x2fPavoEJB8'
  const secretKey = 'q05nnsqqhWcTdMMPQRCVbFvqwcnIOflBS1bPl_Ze'
  const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
  const options = {
    scope: 'zed',
    expires: 7200
  }
  const putPolicy = new qiniu.rs.PutPolicy(options)
  const uploadToken = putPolicy.uploadToken(mac)
  // 处理请求
  if (uploadToken) res.send({
    code: '200',
    data: uploadToken
  })
}

exports.getStudent = function (req, res) {
  // 获取当前用户的信息，需要用登录账号对应的_id去查，即studentId，唯一信息
  let studentId = req.query.studentId
  studentService.getStudentList(studentId).then(data => {
    res.send({
      code: '200',
      data: data
    })
  }).catch(err => {
    res.send({
      code: '500',
      data: err.msg
    })
  })
}

exports.addStudent = function (req, res) {
  let data = req.body
  studentService.addStudentList(data).then(data => {
    res.send({
      code: '200',
      data: data
    })
  }).catch(err => {
    res.send({
      code: '500',
      data: err.msg
    })
  })
}

exports.updateStudent = function (req, res) {
  let data = req.body
  studentService.updateStudentList(data).then(data => {
    res.send({
      code: '200',
      data: data
    })
  }).catch(err => {
    res.send({
      code: '500',
      data: err.msg
    })
  })
}

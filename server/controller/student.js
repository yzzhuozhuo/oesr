const studentService = require('../service/student')

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

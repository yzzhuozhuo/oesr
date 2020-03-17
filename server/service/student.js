let StudentModel = require('../models/student')

exports.getStudentList = function (studentId) {
  return StudentModel.find({studentId})
}

exports.addStudentList = function (data) {
  return StudentModel.insertMany(data)
}

exports.updateStudentList = function (data) {
  let _id = data._id
  return StudentModel.findByIdAndUpdate({_id: _id}, data)
}
/* 
  学生信息表
*/

const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
  studentId: {
    type: String,
    require: true
  },
  studentImgUrl: {
    type: String,
    require: true
  },
  studentName: {
    type: String,
    require: true
  },
  sex: {
    type: String,
    require: true
  },
  introduction: {
    type: String,
    require: true
  },
  address: {
    type: String
  },
  graduateTime: {
    type: String
  },
  education: {
    type: String
  },
  school: {
    type: String
  },
  attentionSchedule: {
    type: Array
  },
  interestedCompany: {
    type: Array
  },
  interestedClassify: {
    type: String, // 'software|hardware',
    require: true
  },
  interestedPost: {
    type: Array
  }
}, { collection: 'student' })

module.exports = mongoose.model('student', studentSchema)
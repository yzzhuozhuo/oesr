/* 
  学生信息表
*/

const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
  studentId: {
    type: String,
    required: true
  },
  studentImgUrl: {
    type: String,
    required: true
  },
  studentName: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  introduction: {
    type: String,
    required: true
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
    required: true
  },
  interestedPost: {
    type: Array
  }
}, { collection: 'student' })

module.exports = mongoose.model('student', studentSchema)
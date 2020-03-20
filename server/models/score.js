//
// 统计学生考试的成绩信息
//

//
// 题库 theme
//
const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema({
  themeId: { // 答的那一套题
    type: String,
    required: true
  },
  themeTitle: {
    type: String,
    required: true
  },
  createdAt: { // 创建这条得分记录的时间
    type: Number,
    required: true,
    default: Date.now()
  },
  studentId: {
    type: String,
    required: true
  },
  studentName: {
    type: String,
    required: true
  },
  studentImageUrl: {
    type: String,
    required: true
  },
  totalScore: {
    type: Number,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  }
}, { collection: 'score' })

module.exports = mongoose.model('score', scoreSchema)

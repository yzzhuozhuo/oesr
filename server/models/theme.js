//
// 题库 theme
//
const mongoose = require('mongoose')
let Mixed = mongoose.Schema.Types.Mixed

const themeSchema = mongoose.Schema({
  // TODO
  companyId: {
    type: String
  },
  companyName: {
    type: String,
    required: true
  },
  // companyImageUrl: { 不需要了，是独立的，前端写死
  //   type: String,
  //   required: true
  // },
  themeImageUrl: { // 题上显示的图片，就用公司信息的图片
    type: String,
    required: true
  },
  themeTitle: {
    type: String,
    required: true
  },
  tagType: {
    type: String //题库tab的类型 software|hardware
  },
  years: { //年份 2020|2019|2018
    type: String,
    required: true
  },
  hot: {
    type: Number
  },
  rate: {
    type: Number, //0-5难度指数
    required: true
  },
  post: {
    type: String //职位、前端|Java
  },
  createdAt: { //试题发布时间
    type: Number,
    required: true,
    default: Date.now()
  },
  questionLists: {
    type: Mixed
  }
}, { collection: 'theme' })

module.exports = mongoose.model('theme', themeSchema)

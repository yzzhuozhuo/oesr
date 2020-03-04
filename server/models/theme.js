//
// 题库 theme
//
const mongooes = require('mongoose')

const themeSchema = mongooes.Schema({
  // TODO
  companyName: {
    type: String,
    required: true
  },
  companyImageUrl: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  hot: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  questionLists: {
    type: Array,
    required: true
  }
}, { collection: 'theme' })

module.exports = mongooes.model('theme', themeSchema)

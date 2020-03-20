//
// 求职首页的校园招聘表
//

const mongoose = require('mongoose')

const campusSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  campusTitle: {
    type: String,
    required: true
  },
  campusHref: {
    type: String,
    required: true
  },
  campusImageUrl: {
    type: String,
    required: true
  },
  companyImageUrl: {
    type: String,
    required: true
  }
}, { collection: 'campus' })

module.exports = mongoose.model('campus', campusSchema)

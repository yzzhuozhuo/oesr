//
// 宣讲会
//

const mongoose = require('mongoose')

const preachSchema = mongoose.Schema({
  companyId: {
    type: String
  },
  preachCompany: {
    type: String,
    required: true
  },
  preachCity: {
    type: String,
    required: true
  },
  preachSchool: {
    type: String,
    required: true
  },
  preachTime: {
    type: Number,
    required: true
  }
}, { collection: 'preach' })

module.exports = mongoose.model('preach', preachSchema)
//
// 宣讲会
//

const mongoose = require('mongoose')

const preachSchema = mongoose.Schema({
  preachCompany: {
    type: String,
    require: true
  },
  preachCity: {
    type: String,
    require: true
  },
  preachSchool: {
    type: String,
    require: true
  },
  preachTime: {
    type: Number,
    require: true
  }
}, { collection: 'preach' })

module.exports = mongoose.model('preach', preachSchema)
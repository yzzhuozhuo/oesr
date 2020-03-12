//
// 宣讲会
//

const mongoose = require('mongoose')

const preachSchema = mongoose.Schema({
  preachTitle: {
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
    type: Number
  }
}, { collection: 'preach' })

module.exports = mongoose.model('preach', preachSchema)
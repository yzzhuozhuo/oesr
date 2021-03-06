/**
 * 校招日程
 */

const mongoose = require('mongoose')

const campusDateSchema = mongoose.Schema({
  companyId: String,
  companyType: Number,
  companyName: String,
  companyImgUrl: String,
  campusUrl: String,
  coverImg: String,
  timeTable: Object,
  createdAt: {
    type: Number,
    required: true,
    default: Date.now()
  }
}, { collection: 'campusDate' })

module.exports = mongoose.model('campusDate', campusDateSchema)

//
// 职位表 position
//

const mongoose = require('mongoose')

const positionSchema = mongoose.Schema({
  companyId: {
    type: String,
    // required: true
  },
  companyName: {
    type: String,
    // required: true // 等公司表做好，记得加上TODO
  },
  companyImgUrl: {
    type: String,
    // required: true
  },
  companyProfile: {
    type: String
  },
  positionTitle: {
    type: String,
    required: true
  },
  positionType: {
    type: String,
    required: true
  },
  positionCity: {
    type: String,
    required: true
  },
  createdAt: {
    type: Number,
    required: true,
    default: Date.now()
  },
  processingRatio: {
    type: Number,
    required: true,
    default: 1 // 1，0.9...
  },
  processingTime: {
    type: Number,
    required: true
  },
  processingSpeed: {
    type: String,
    required: true
  },
  compensation: {
    type: String,
    required: true
  },
  practicerequired: {
    type: String
  },
  becomeOfficial: {
    type: String
  },
  jobResponsibilities: {
    type: Array,
    requiredd: true
  },
  jobrequiredments: {
    type: Array,
    requiredd: true
  }
}, { collection: 'position' })

module.exports = mongoose.model('position', positionSchema)
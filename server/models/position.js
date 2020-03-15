//
// 职位表 position
//

const mongoose = require('mongoose')

const positionSchema = mongoose.Schema({
  companyId: {
    type: String,
    // require: true
  },
  companyName: {
    type: String,
    // require: true // 等公司表做好，记得加上TODO
  },
  companyImgUrl: {
    type: String,
    // require: true
  },
  companyProfile: {
    type: String
  },
  positionTitle: {
    type: String,
    require: true
  },
  positionType: {
    type: String,
    require: true
  },
  positionCity: {
    type: String,
    require: true
  },
  createdAt: {
    type: Number,
    required: true,
    default: Date.now()
  },
  processingRatio: {
    type: Number,
    require: true,
    default: 1 // 1，0.9...
  },
  processingTime: {
    type: Number,
    require: true
  },
  processingSpeed: {
    type: String,
    require: true
  },
  compensation: {
    type: String,
    require: true
  },
  practiceRequire: {
    type: String
  },
  becomeOfficial: {
    type: String
  },
  jobResponsibilities: {
    type: Array,
    required: true
  },
  jobRequirements: {
    type: Array,
    required: true
  }
}, { collection: 'position' })

module.exports = mongoose.model('position', positionSchema)
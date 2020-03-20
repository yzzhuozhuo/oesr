//
// 申请职位时的简历表
//

const mongoose = require('mongoose')

const resumeSchema = mongoose.Schema({
  companyId: {
    type: String,
    required: true
  },
  positionId: {
    type: String,
    required: true
  },
  positionTitle: {
    type: String,
    required: true
  },
  studentId: {
    type: String,
    required: true
  },
  studentName: {
    type: String,
    required: true
  },
  resumeTitle: {
    type: String,
    required: true
  },
  resumeUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Number,
    required: true,
    default: Date.now()
  }
}, { collection: 'resume' })

module.exports = mongoose.model('resume', resumeSchema)
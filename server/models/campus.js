/**
 * 校招日程 schema
 */
const mongooes = require('mongoose')

const campusSchema = mongooes.Schema({
  companyId: Number,
  campusImg: String,
  campusTime: Array
}, { collection: 'campus' })

module.exports = mongooes.model('campus', campusSchema)

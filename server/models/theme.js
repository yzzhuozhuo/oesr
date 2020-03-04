//
// 题库 theme
//
const mongooes = require('mongoose')

const themeSchema = mongooes.Schema({
  // TODO
}, { collection: 'theme' })

module.exports = mongooes.model('theme', themeSchema)

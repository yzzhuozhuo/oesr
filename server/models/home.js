/**
 * 首页 schema
 */
const mongooes = require('mongoose')

const homeSchema = mongooes.Schema({
  menuName: String,
  icon: String,
  subMenu: [
    {
      subName: String,
      subList: [
        {
          listName: String,
          listCard: [
            {
              id: Number,
              name: String,
              img: String,
              url: String,
              intro: String
            }
          ]
        }
      ]
    }
  ]
}, { collection: 'home' })

module.exports = mongooes.model('home', homeSchema)

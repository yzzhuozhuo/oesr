const HomeModel = require('../models/home')
const home = require('../../client/debugJson/home.json')

exports.getHomeInfo = function () {
  return HomeModel.find().then(data => {
    // 插入数据
    if (!data.length) {
      HomeModel.insertMany(home)
      return home
    }
    return data
  })
}

const HomeModel = require('../models/home')

exports.getHomeInfo = function () {
  return HomeModel.find().then(data => {
    return data
  })
}
const UserModel = require('../models/user')

// exports.getUserInfo = function (userInfo) {
//   return Promise.resolve(userInfo)
// }

exports.getUserInfo = function (userInfo) {
  return UserModel.find().then(data => {
    return data[0]
  })
  // return UserModel.insertMany(userInfo)
}
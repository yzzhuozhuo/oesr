const homeService = require('../service/home')

// exports.user = function (req, res) {
//   let userInfo = req.session.userInfo
//   console.log(222, userInfo)
//   userService.getUserInfo(userInfo).then(data => {
//     res.resolve(data)
//   }).catch(err => {
//     res.reject('500', err.message)
//   })
// }

exports.home = function (req, res) {
  homeService.getHomeInfo().then(data => {
    res.send({
      code: '200',
      data
    })
  }).catch(err => {
    console.log(222, err)
  })
}
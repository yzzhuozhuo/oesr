const userService = require('../service/user')

// exports.user = function (req, res) {
//   let userInfo = req.session.userInfo
//   console.log(222, userInfo)
//   userService.getUserInfo(userInfo).then(data => {
//     res.resolve(data)
//   }).catch(err => {
//     res.reject('500', err.message)
//   })
// }

exports.user = function (req, res) {
  // 手动给数据库user表中添加数据，后期登录信息需要从req.session中获取
  // let userInfo = {
  //   username: 'yz'
  // }
  userService.getUserInfo().then(data => {
    res.send({
      code: '200',
      data: data
    })
  }).catch(err => {
    console.log(222, err)
  })
}
const homeService = require('../service/home')

exports.getHome = function (req, res) {
  homeService.getHomeInfo().then(data => {
    res.send({
      code: '200',
      data
    })
  }).catch(err => {
    console.log(222, err)
  })
}
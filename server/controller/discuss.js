const discussService = require('../service/discuss')

exports.getDiscuss = function (req, res) {
  discussService.getDiscussInfo(req.query).then(data => {
    res.send({
      code: '200',
      data
    })
  }).catch(err => {
    console.log(222, err)
  })
}

const discussService = require('../service/discuss')

exports.getDiscuss = function (req, res) {
  const { label, publish } = req.query
  discussService.getDiscussInfo(label, publish).then(data => {
    res.send({
      code: '200',
      data
    })
  }).catch(err => {
    console.log(222, err)
  })
}

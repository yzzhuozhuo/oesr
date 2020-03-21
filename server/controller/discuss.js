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

exports.addDiscuss = async function (req, res) {
  const data = await discussService.addDiscuss(req.body)
  console.info(data)
  res.send({
    code: '200',
    data: 'ok'
  })
}

exports.findDiscussById = async function (req, res) {
  const { id } = req.query
  const data = await discussService.findDiscussById(id)
  console.info(id)
  res.send({
    code: '200',
    data
  })
}

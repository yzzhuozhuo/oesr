const PositionService = require('../service/position')

exports.getPosition = function (req, res) {
  let {
    selectType = '',
    selectCity = '',
    selectTab = '',
    currentPage = 1,
    pageNum = 10
  } = req.query
  pageNum = +pageNum
  PositionService.getPositionList(selectType, selectCity, selectTab, currentPage, pageNum).then(data => {
    res.send({
      code: '200',
      data: {
        currentPage: data.currentPage,
        pageNum: data.pageNum,
        total: data.total,
        data: data.data
      }
    })
  }).catch(err => {
    res.send({
      code: '500',
      data: err.msg
    })
  })
}

exports.addPosition = function (req, res) {
  let data = req.body
  PositionService.addPositionList(data).then(data => {
    res.send({
      code: '200',
      data: data
    })
  }).catch(err => {
    res.send({
      code: '500',
      data: err.msg
    })
  })
}

exports.getPositionDetail = function (req, res) {
  let { positionDetailId = '' } = req.query
  PositionService.getPositionDetailList(positionDetailId).then(data => {
    res.send({
      code: '200',
      data: data
    })
  }).catch(err => {
    res.send({
      code: '500',
      data: err.msg
    })
  })
}
const preachService = require('../service/preach')

exports.getPreach = function (req, res) {
  let {
    searchValue = '',
    selectCity = '',
    selectSchool = '',
    preachStartTime = '',
    preachEndTime = '',
    currentPage = 1,
    pageNum = 10
  } = req.query
  pageNum = +pageNum
  currentPage = +currentPage
  preachStartTime = +preachStartTime
  preachEndTime = +preachEndTime
  preachService.getPreachList(searchValue, selectCity, selectSchool, currentPage, pageNum, preachStartTime, preachEndTime).then(data => {
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

exports.addPreach = function (req, res) {
  let data = req.body
  preachService.addPreachList(data).then(data => {
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
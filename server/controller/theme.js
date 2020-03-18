const themeService = require('../service/theme')

exports.getTheme = function (req, res) {
  let {
    companyId = '',
    companyName = '',
    post = '',
    years = '',
    searchValue = '',
    tagType = '', // software|hardware
    sortType = '',
    currentPage = 1,
    pageNum = 10
  } = req.query
  pageNum = +pageNum
  currentPage = +currentPage
  themeService.getThemeList(companyId, searchValue, companyName, post, years, currentPage, pageNum, tagType, sortType).then(data => {
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

exports.addTheme = function (req, res) {
  let data = req.body
  themeService.addThemeList(data).then(data => {
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

exports.getThemeDetail = function (req, res) {
  let { themeDetailId = '' } = req.query
  themeService.getThemeDetailList(themeDetailId).then(data => {
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
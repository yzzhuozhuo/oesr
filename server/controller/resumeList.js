const resumeService = require('../service/resumeList')

exports.getResume = function (req, res) {
  // 获取投递的简历列表
  let {
    companyId = '', // 查一个公司收到的所有简历
    positionId = '', // 查看某个职位收到的简历
    studentId = '', // 查某一个学生所投递的简历列表
    searchValue = '',
    currentPage = 1,
    pageNum = 10
  } = req.query
  currentPage = +currentPage
  pageNum = +pageNum
  resumeService.getResumeList(companyId, positionId, studentId, searchValue, currentPage, pageNum).then(data => {
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
      data: err
    })
  })
}

exports.addResume = function (req, res) {
  let data = req.body.body
  resumeService.addResumeList(data).then(data => {
    res.send({
      code: '200',
      data: data
    })
  }).catch(err => {
    res.send({
      code: '500',
      data: err
    })
  })
}

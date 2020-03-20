const scoreService = require('../service/score')

exports.getScore = function (req, res) {
  // 获取当前试题的得分信息
  let {
    scoreId = '', // 具体某一套题答完后需要的数据
    themeId = '', // 查某一套题的学生答题得分情况
    studentId = '' // 查某一个学生的答题情况
  } = req.query
  scoreService.getScoreList(scoreId, themeId, studentId).then(data => {
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

exports.addScore = function (req, res) {
  let data = req.body.body
  scoreService.addScoreList(data).then(data => {
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

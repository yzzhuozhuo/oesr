const companyService = require('../service/company')

exports.getCompany = function (req, res) {
  // 获取当前公司的信息，需要用登录账号对应的_id去查，即companyId，唯一信息
  let companyId = req.query.companyId
  companyService.getCompanyList(companyId).then(data => {
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

exports.addCompany = function (req, res) {
  let data = req.body
  companyService.addCompanyList(data).then(data => {
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

exports.updateCompany = function (req, res) {
  let data = req.body
  companyService.updateCompanyList(data).then(data => {
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

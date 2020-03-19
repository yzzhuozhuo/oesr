const campusService = require('../service/campus')

exports.getCampus = function (req, res) {
  let { interestedCompany = '' } = req.query
  // console.log(22, req.query)
  campusService.getCampusList(interestedCompany).then(data => {
    res.send({
      code: '200',
      data: {
        data: data.data,
        interestedCompany: data.interestedCompany
      }
    })
  }).catch(err => {
    res.send({
      code: '500',
      data: err
    })
  })
}


const calendarService = require('../service/calendar')

exports.getCalendar = function (req, res) {
  let { studentId = '', companyId = ''} = req.query
  console.log(11, req.query)
  calendarService.getCalendarList(studentId, companyId).then(data => {
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

exports.addCalendar = function (req, res) {
  console.log('dddddd')
  let data = req.body
  calendarService.addCalendarList(data).then(data => {
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
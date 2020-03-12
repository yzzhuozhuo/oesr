const calendarService = require('../service/calendar')

exports.getCalendar = function (req, res) {
  calendarService.getCalendarList().then(data => {
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
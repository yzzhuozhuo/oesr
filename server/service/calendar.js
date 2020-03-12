const CalendarModel = require('../models/calendar')

exports.getCalendarList = function () {
  return CalendarModel.find()
}

exports.addCalendarList = function (data) {
  return CalendarModel.insertMany(data)
}

const CalendarModel = require('../models/calendar')

exports.getCalendarList = function (studentId, companyId) {
  let findConditions = {}
  if (studentId) findConditions.studentId = studentId
  if (companyId) findConditions.companyId = companyId
  console.log(33, findConditions)
  return CalendarModel.find(findConditions)
}

exports.addCalendarList = function (data) {
  return CalendarModel.insertMany(data)
}

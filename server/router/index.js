const path = require('path')
const express = require('express')
const router = express.Router()
const userController = require('../controller/user')
const calendarController = require('../controller/calendar')

router
  .get('/oesr/user', userController.user)
  .get('/oesr/calendarList', calendarController.getCalendar)
  .put('/oesr/addCalendarList', calendarController.addCalendar)
  .use('/', express.static(path.resolve(__dirname, '../../client/dist')))

module.exports = router
const path = require('path')
const express = require('express')
const router = express.Router()
const userController = require('../controller/user')
const homeController = require('../controller/home')
const calendarController = require('../controller/calendar')
const preachController = require('../controller/preach')
const discussController = require('../controller/discuss')

router
  .get('/oesr/user', userController.user)
  .get('/oesr/home', homeController.getHome)
  .get('/oesr/calendarList', calendarController.getCalendar)
  .put('/oesr/addCalendarList', calendarController.addCalendar)
  .get('/oesr/preachList', preachController.getPreach)
  .post('/oesr/addPreachList', preachController.addPreach)
  .get('/oesr/discuss', discussController.getDiscuss)
  .use('/', express.static(path.resolve(__dirname, '../../client/dist')))

module.exports = router
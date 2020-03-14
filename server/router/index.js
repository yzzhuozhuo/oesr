const path = require('path')
const express = require('express')
const router = express.Router()
const userController = require('../controller/user')
const calendarController = require('../controller/calendar')
const preachController = require('../controller/preach')
const positionController = require('../controller/position')

router
  .get('/oesr/user', userController.user)
  
  .get('/oesr/calendarList', calendarController.getCalendar)
  .put('/oesr/addCalendarList', calendarController.addCalendar)
  
  .get('/oesr/preachList', preachController.getPreach)
  .post('/oesr/addPreachList', preachController.addPreach)
  
  .get('/oesr/positionList', positionController.getPosition)
  .post('/oesr/addPositionList', positionController.addPosition)
  .get('/oesr/positionDetailList', positionController.getPositionDetail)

  .use('/', express.static(path.resolve(__dirname, '../../client/dist')))

module.exports = router
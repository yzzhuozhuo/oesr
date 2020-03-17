const path = require('path')
const express = require('express')
const router = express.Router()
const userController = require('../controller/user')
const homeController = require('../controller/home')
const calendarController = require('../controller/calendar')
const preachController = require('../controller/preach')
const discussController = require('../controller/discuss')
const positionController = require('../controller/position')
const studentController = require('../controller/student')
const companyController = require('../controller/company')
const themeController = require('../controller/theme')

router
  .get('/oesr/user', userController.user)
  .get('/oesr/home', homeController.getHome)
  .get('/oesr/calendarList', calendarController.getCalendar)
  .put('/oesr/addCalendarList', calendarController.addCalendar)
  .get('/oesr/preachList', preachController.getPreach)
  .post('/oesr/addPreachList', preachController.addPreach)
  .get('/oesr/discuss', discussController.getDiscuss)
  .get('/oesr/positionList', positionController.getPosition)
  .post('/oesr/addPositionList', positionController.addPosition)
  .get('/oesr/positionDetailList', positionController.getPositionDetail)

  .get('/oesr/studentList', studentController.getStudent)
  .post('/oesr/addStudentList', studentController.addStudent)
  .put('/oesr/updateStudentList', studentController.updateStudent)

  .get('/oesr/companyList', companyController.getCompany)
  .post('/oesr/addCompanyList', companyController.addCompany)
  .put('/oesr/updateCompanyList', companyController.updateCompany)

  .get('/oesr/themeList', themeController.getTheme)
  .post('/oesr/addThemeList', themeController.addTheme)
  .get('/oesr/themeDetailList', themeController.getThemeDetail)
  .use('/', express.static(path.resolve(__dirname, '../../client/dist')))

module.exports = router
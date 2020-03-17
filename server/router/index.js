const path = require('path')
const express = require('express')
const router = express.Router()
const userController = require('../controller/user')
const homeController = require('../controller/home')
const calendarController = require('../controller/calendar')
const preachController = require('../controller/preach')
const discussController = require('../controller/discuss')
const positionController = require('../controller/position')
const accountController = require('../controller/account')
const studentController = require('../controller/student')
const companyController = require('../controller/company')

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
  .post('/oesr/addAccount', accountController.addAccount)
  .post('/oesr/findAccount', accountController.findAccount)
  .get('/oesr/findTel', accountController.findTel)
  .get('/oesr/getUserInfo', accountController.getUserInfo)

  .get('/oesr/studentList', studentController.getStudent)
  .post('/oesr/addStudentList', studentController.addStudent)
  .put('/oesr/updateStudentList', studentController.updateStudent)

  .get('/oesr/companyList', companyController.getCompany)
  .post('/oesr/addCompanyList', companyController.addCompany)
  .put('/oesr/updateCompanyList', companyController.updateCompany)
  .use('/', express.static(path.resolve(__dirname, '../../client/dist')))

module.exports = router
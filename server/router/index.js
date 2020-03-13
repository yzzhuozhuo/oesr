const path = require('path')
const express = require('express')
const router = express.Router()
const userController = require('../controller/user')
const homeController = require('../controller/home')

router
  .get('/oesr/user', userController.user)
  .get('/oesr/home', homeController.home)
  .use('/', express.static(path.resolve(__dirname, '../../client/dist')))

module.exports = router
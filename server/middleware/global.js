const path = require('path')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router
    .use(bodyParser.json({limit: '5mb'})) // 设置请求体最大大小为5M
    // serve静态文件
    .use('/static', express.static(path.resolve(__dirname, '../../client/dist/static')))
    .use('/public', express.static(path.resolve(__dirname, '../public')))

module.exports = router
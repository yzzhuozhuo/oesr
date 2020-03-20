const path = require('path')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const credentials = require('../credentials')

router
    .use(bodyParser.json({ limit: '5mb' })) // 设置请求体最大大小为5M
    // serve静态文件
    .use('/static', express.static(path.resolve(__dirname, '../../client/dist/static')))
    .use('/public', express.static(path.resolve(__dirname, '../public')))
    .use(cookieParser(credentials.secret))
    .use(session({
        secret: credentials.secret,
        resave: true,
        saveUninitialized: true
        // cookie: { maxAge: 60 * 1000 * 60 } //过期时间
    }));

module.exports = router
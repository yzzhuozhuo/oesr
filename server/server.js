const app = require('express')()
const server = require('http').createServer(app)
const router = require('./router')
const globalMiddleware = require('./middleware/global')
const mongodb = 'mongodb://127.0.0.1:27017/oesr'
const port = 3000
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// 连接数据库
mongoose.connect(mongodb, {
  useMongoClient: true
}, function (err) {
  if (err) {
    console.error(err)
  } else {
    console.log('mongodb connected ^_^')
  }
})

app
  .use('/checkStatus', function(req, res) {
    res.status(200).send('ok')
  })
  .use(globalMiddleware)
  .use(router)
server.listen(port)

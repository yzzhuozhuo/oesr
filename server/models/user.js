//
// 用户信息
//
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true
  }
}, { collection: 'user'})

module.exports = mongoose.model('user',userSchema);
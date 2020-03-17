//
// 用户账号表
//

const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
  tel: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    set (val) { // 密码加密
      return require('bcryptjs').hashSync(val, 10)
    }
  },
  accountType: {
    type: String, //student|company
    require: true
  }
}, { collection: 'account' })

module.exports = mongoose.model('account', accountSchema)
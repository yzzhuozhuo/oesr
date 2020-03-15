//
// 用户账号表
//

const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
  account: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  // password: {
  //   type: String,
  //   select: false,
  //   set(val) {
  //     return require('bcrypt').hashSync(val, 10)
  //   }
  // },
  accountType: {
    type: String, //student|company
    require: true
  }
}, { collection: 'account'} )

module.exports = mongoose.model('account', accountSchema)
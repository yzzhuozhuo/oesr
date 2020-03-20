const AccountModel = require('../models/account')

exports.addAccount = function (account) {
  return AccountModel.create(account)
}

exports.findAccount = function (tel) {
  return AccountModel.findOne({ tel })
}

exports.updatePsd = function (tel, data) {
  return AccountModel.findOneAndUpdate({ tel }, data, {
    setDefaultsOnInsert: true
  })
}

const AccountModel = require('../models/account')
// const home = require('../../client/debug/home.json')

exports.addAccount = function (account) {
  return AccountModel.create(account)
}

exports.findAccount = function (tel) {
  return AccountModel.findOne({ tel })
}

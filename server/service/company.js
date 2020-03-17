let companyModel = require('../models/company')

exports.getCompanyList = function (companyId) {
  return companyModel.find({companyId})
}

exports.addCompanyList = function (data) {
  return companyModel.insertMany(data)
}

exports.updateCompanyList = function (data) {
  let _id = data._id
  return companyModel.findByIdAndUpdate({_id: _id}, data)
}
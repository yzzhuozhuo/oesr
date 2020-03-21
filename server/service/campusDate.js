const CampusDateModel = require('../models/campusDate')

exports.addCampusDate = function (campusDate) {
  return CampusDateModel.create(campusDate)
}

exports.getCampusDate = function () {
  return CampusDateModel.find()
}

exports.getCampusDateById = function (_id) {
  return CampusDateModel.findById(_id)
}

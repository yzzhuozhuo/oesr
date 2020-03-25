const CampusDateModel = require('../models/campusDate')
const campusData = require('../../client/debug/campusData.json')

exports.addCampusDate = function (campusDate) {
  return CampusDateModel.create(campusDate)
}

exports.getCampusDate = function () {
  return CampusDateModel.find().then(data => {
    if (!data.length) {
      CampusDateModel.insertMany(campusData)
      return campusData
    }
    return data
  })
}

exports.getCampusDateById = function (_id) {
  return CampusDateModel.findById(_id)
}

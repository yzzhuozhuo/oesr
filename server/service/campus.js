const CampusModel = require('../models/campus')
const campus = require('../../client/debug/campus.json')

exports.getCampusList = function (interestedCompany) {
  let findConditions = {}
  if (interestedCompany) interestedCompany = interestedCompany.split(',')
  if (interestedCompany) findConditions.companyName = { $in: interestedCompany }
  return Promise.all([
    CampusModel.find(findConditions),
    CampusModel.find()
  ]).then(([interestedData, allData]) => {
    if (!allData.length && !interestedCompany) {
      CampusModel.insertMany(campus)
      return {
        data: campus,
        interestedCompany: campus
      }
    }
    return {
      interestedCompany: interestedData,
      data: allData
    }
  })
}
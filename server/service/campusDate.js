const CampusDateModel = require('../models/campusDate')
const campusData = require('../../client/debugJson/campusData.json')

exports.addCampusDate = function (campusDate) {
  let newDate = campusDate
  let companyId = campusDate.companyId
  let findConditions = {
    companyId
  }
  return CampusDateModel.find(findConditions).then((data) => {
    if (!data.length) {
      return CampusDateModel.insertMany(newDate)
    } else {
      return CampusDateModel.findOneAndUpdate(
        findConditions, 
        newDate, 
        {
          upsert: true,
          new: true
      })
    }
  })
}

exports.getCampusDate = function (companyId, searchVal) {
  let findConditions = {}
  if (companyId) findConditions.companyId = companyId
  if (searchVal) findConditions.companyName = searchVal
  return CampusDateModel.find(findConditions).sort({ createdAt: -1 })
  // 第一次没数据，可以调用下面的
  // return CampusDateModel.find().then(data => {
  //   if (!data.length) {
  //     CampusDateModel.insertMany(campusData)
  //     return campusData
  //   }
  //   return data
  // })
}

exports.getCampusDateById = function (_id) {
  return CampusDateModel.findById(_id)
}

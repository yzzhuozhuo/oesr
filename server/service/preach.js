const PreachModel = require('../models/preach')

exports.getPreachList = function (companyId, accountType, searchValue, selectCity, selectSchool, currentPage, pageNum, preachStartTime, preachEndTime) {
  let skipCounts = (currentPage - 1) * pageNum
  let findConditions = {}
  let sortCondition = {}
  if (companyId) findConditions.companyId = companyId
  if (searchValue) findConditions['$or'] = [ { preachCompany: searchValue }, { preachCity: searchValue }, { preachSchool: searchValue } ]
  if (selectCity) findConditions.preachCity = selectCity
  if (selectSchool) findConditions.preachSchool = selectSchool
  if (preachStartTime || preachEndTime) findConditions.preachTime = { '$gt': preachStartTime, '$lt': preachEndTime }
  if (accountType !== 'company') {
    sortCondition.preachTime = 1
  } else {
    sortCondition.preachTime = -1
  }
  return Promise.all([
    PreachModel.find(findConditions).sort(sortCondition).skip(skipCounts).limit(pageNum),
    PreachModel.find(findConditions).sort(sortCondition).count(true)
  ]).then(([data, total]) => {
    return {
      data: data,
      currentPage: +currentPage,
      pageNum: pageNum,
      total
    }
  })
}

exports.addPreachList = function (data) {
  return PreachModel.insertMany(data)
}

exports.removePreachList = function (preachId) {
  return PreachModel.remove({ _id: preachId })
}
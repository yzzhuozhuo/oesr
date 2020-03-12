const PreachModel = require('../models/preach')

exports.getPreachList = function (searchValue, selectCity, selectSchool, currentPage, pageNum, preachStartTime, preachEndTime) {
  let skipCounts = (currentPage - 1) * pageNum
  let findConditions = {}
  if (searchValue) findConditions['$or'] = [ { preachCompany: searchValue }, { preachCity: searchValue }, { preachSchool: searchValue } ]
  if (selectCity) findConditions.preachCity = selectCity
  if (selectSchool) findConditions.preachSchool = selectSchool
  if (preachStartTime || preachEndTime) findConditions.preachTime = { '$gt': preachStartTime, '$lt': preachEndTime }
  return Promise.all([
    PreachModel.find(findConditions).sort({ preachTime: 1 }).skip(skipCounts).limit(pageNum),
    PreachModel.find(findConditions).sort({ preachTime: 1 }).count(true)
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
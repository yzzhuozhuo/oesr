const PositionModel = require('../models/position')

exports.getPositionList = function (searchVal, companyId, accountType, selectType, selectCity, selectTab, searchPosition, currentPage, pageNum) {
  let skipCounts = (currentPage - 1) * pageNum
  let findConditions = {}
  if (companyId) findConditions.companyId = companyId
  if (searchVal) findConditions.companyName = searchVal
  if (searchPosition) findConditions.positionTitle = searchPosition
  if (selectType) findConditions.positionType = selectType
  if (selectCity) findConditions.positionCity = selectCity
  // 根据 最新发布 最快处理 处理率最高 进行排序 默认不排序
  let sortCondition = {}
  if (accountType === 'company') sortCondition.createdAt = -1 
  if (selectTab === 'new') sortCondition.createdAt = -1
  if (selectTab === 'fast') sortCondition.processingTime = 1
  if (selectTab === 'ratio') sortCondition.processingRatio = -1
  return Promise.all([
    PositionModel.find(findConditions).sort(sortCondition).skip(skipCounts).limit(pageNum),
    PositionModel.find(findConditions).sort(sortCondition).count(true)
  ]).then(([data, total]) => {
    return {
      data: data,
      currentPage: +currentPage,
      pageNum: pageNum,
      total
    }
  })
}

exports.addPositionList = function (data) {
  return PositionModel.insertMany(data)
}

exports.getPositionDetailList = function (positionDetailId) {
  return PositionModel.findById(positionDetailId)
}
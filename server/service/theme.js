const ThemeModel = require('../models/theme')

exports.getThemeList = function (companyId, searchValue, companyName, post, years, currentPage, pageNum, tagType, sortType) {
  let skipCounts = (currentPage - 1) * pageNum
  let findConditions = {}
  if (searchValue) findConditions.themeTitle = searchValue
  if (companyId) findConditions.companyId = companyId
  if (companyName) findConditions.companyName = companyName
  if (post) findConditions.post = post
  if (years) findConditions.years = years
  if (tagType) findConditions.tagType = tagType
  // 根据 最新发布 最难 进行排序 默认不排序
  let sortCondition = {}
  if (sortType === 'newest') sortCondition.createdAt = -1
  if (sortType === 'hardest') sortCondition.rate = -1
  return Promise.all([
    ThemeModel.find(findConditions).sort(sortCondition).skip(skipCounts).limit(pageNum),
    ThemeModel.find(findConditions).sort(sortCondition).count(true)
  ]).then(([data, total]) => {
    return {
      data: data,
      currentPage: +currentPage,
      pageNum: pageNum,
      total
    }
  })
}

exports.addThemeList = function (data) {
  return ThemeModel.insertMany(data)
}

exports.getThemeDetailList = function (themeDetailId) {
  return ThemeModel.findById(themeDetailId)
}
const ThemeModel = require('../models/theme')
// const theme = require('../../client/debug/theme.json')

exports.getThemeList = function (accountType, companyId, searchValue, companyName, post, years, currentPage, pageNum, tagType, sortType) {
  let skipCounts = (currentPage - 1) * pageNum
  let findConditions = {}
  let sortCondition = {}
  // 查询时候过滤掉首页的八套题
  // findConditions.companyId = { $ne: 'noId' }
  if (accountType !== 'company' && searchValue) findConditions.themeTitle = searchValue
  if (companyId) findConditions.companyId = companyId
  if (companyName) findConditions.companyName = companyName
  if (post) findConditions.post = post
  if (years) findConditions.years = years
  if (tagType) findConditions.tagType = tagType
  if (accountType === 'company') {
    sortCondition = {createdAt: -1}
    if (searchValue) findConditions['$or'] = [{ themeTitle: searchValue }, { post: searchValue }]
  }
  // 根据 最新发布 最难 进行排序 默认不排序
  if (sortType === 'newest') sortCondition.createdAt = -1
  if (sortType === 'hardest') sortCondition.rate = -1
  return Promise.all([
    ThemeModel.find(findConditions).sort(sortCondition).skip(skipCounts).limit(pageNum),
    ThemeModel.find(findConditions).sort(sortCondition).count(true)
  ]).then(([data, total]) => {
    // if (!data.length) {
    //   console.log('11111')
    //   ThemeModel.insertMany(theme)
    //   return theme
    // }
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
const DiscussModel = require('../models/discuss')
const discuss = require('../../client/debugJson/discuss.json')

exports.getDiscussInfo = function (query) {
  let { label, publish, currentPage = 1, pageNum = 10, title = '', userId = '' } = query
  label = +label
  publish = +publish
  currentPage = +currentPage
  pageNum = +pageNum
  let labelItem = {}
  let skipCounts = (currentPage - 1) * pageNum
  if (label) labelItem['classify.label'] = label
  // let labelItem = label ? { 'classify.label': label } : null
  let publishItem = {}
  if (publish === 0) publishItem.createdAt = -1
  if (publish === 1) publishItem.hot = -1
  if (publish === 2 && userId) {
    labelItem['user.id'] = userId
    publishItem.createdAt = -1
  }
  if (title) {
    const reg = new RegExp(title, 'i')
    labelItem = { ...labelItem, $or: [{ title: reg }, { content: reg }] }
  }
  console.log(666, labelItem)
  return Promise.all([
    DiscussModel.find(labelItem).sort(publishItem).skip(skipCounts).limit(pageNum),
    DiscussModel.find(labelItem).sort(publishItem).count(true)
  ]).then(([data, total]) => {
    // 插入数据
    // if (!data.length && !label && !publish) {
    //   DiscussModel.insertMany(discuss)
    //   return discuss
    // }
    return {
      data,
      currentPage: +currentPage,
      pageNum,
      total
    }
  })
}

exports.addDiscuss = function (data) {
  return DiscussModel.insertMany(data)
}

exports.findDiscussById = function (_id) {
  return DiscussModel.findById(_id)
}

exports.removeDiscussList = function (discussId) {
  return DiscussModel.remove({ _id: discussId })
}
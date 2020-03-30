const DiscussModel = require('../models/discuss')
// const discuss = require('../../client/debug/discuss.json')

exports.getDiscussInfo = function (query) {
  let { label, publish, currentPage = 1, pageNum = 10, title = '' } = query
  label = +label
  publish = +publish
  currentPage = +currentPage
  pageNum = +pageNum
  let skipCounts = (currentPage - 1) * pageNum
  let labelItem = label ? { 'classify.label': label } : null
  let publishItem = publish === 1 ? { 'hot': -1 } : { 'createAt': -1 }
  if (title) {
    const reg = new RegExp(title, 'i')
    labelItem = { ...labelItem, $or: [{ title: reg }, { content: reg }] }
  }
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

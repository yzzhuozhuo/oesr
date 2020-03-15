const DiscussModel = require('../models/discuss')
const discuss = require('../../client/debug/discuss.json')

exports.getDiscussInfo = function (label, publish) {
  label = label * 1
  publish = publish * 1
  let labelItem = label ? { 'classify.label': label } : null
  let publishItem = publish === 1 ? { 'hot': -1 } : { 'createAt': -1 }
  return DiscussModel
    .find(labelItem)
    .sort(publishItem)
    .then(data => {
      // 插入数据
      if (!data.length && !label && !publish) {
        DiscussModel.insertMany(discuss)
        return discuss
      }
      return data
    })
}

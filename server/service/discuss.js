const DiscussModel = require('../models/discuss')
const discuss = require('../../client/debug/discuss.json')

exports.getDiscussInfo = function (label, publish) {
  console.info(label, publish)
  return DiscussModel
    .find({ 'classify.label': label })
    .sort()
    .then(data => {
      // 插入数据
      if (!data.length) {
        DiscussModel.insertMany(discuss)
        return discuss
      }
      return data
    })
}

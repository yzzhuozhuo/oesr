/**
 * 讨论区 schema
 * type 枚举
 * [
 *   0: 全部
 *   1: 站内公告
 *   2: 笔经面经
 *   3: 我要提问
 *   4: 技术交流
 *   5: 产品运营
 *   6: 内推消息
 *   7: 职业发展
 *   8: 招聘信息
 *   9: 资源分享
 *   10: 猿生活
 *   11: 工作以后
 * ]
 */
const mongooes = require('mongoose')

const discussSchema = mongooes.Schema({
  title: String,
  content: String,
  hot: Number,
  mark: Array, // 标记
  classify: {
    label: Number,
    name: String
  },
  user: {
    id: String,
    name: String,
    avatar: String
  },
  createdAt: {
    type: Number,
    required: true,
    default: Date.now()
  }
}, { collection: 'discuss' })

module.exports = mongooes.model('discuss', discussSchema)

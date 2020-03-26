/* 
  公司信息表
*/
// {
//   companyId: '', 公司唯一的id，注册后那条数据的_id 确保唯一
//   companyName: '',
//   companyImgUrl: '',
//   companyProfile: '', // 公司简介
//   companyWelfare: '', // 薪酬福利
//   companyAddress: '', // 公司所在地
//   companyBusiness: '', // 主页业务体系
//   recuritPosts: '' // 需招职位
// }

const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
  companyId: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  companyImgUrl: {
    type: String,
    required: true
  },
  companyProfile: {
    type: String,
    required: true
  },
  companyWelfare: {
    type: String,
    required: true
  },
  companyAddress: {
    type: String,
    required: true
  },
  companyBusiness: {
    type: String,
    required: true
  },
  recuritPosts: {
    type: String,
    required: true
  },
  companyCampusUrl: {
    type: String
  }
}, { collection: 'company' })

module.exports = mongoose.model('company', companySchema)
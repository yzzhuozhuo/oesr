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
    require: true
  },
  companyName: {
    type: String,
    require: true
  },
  companyImgUrl: {
    type: String,
    require: true
  },
  companyProfile: {
    type: String,
    require: true
  },
  companyWelfare: {
    type: String,
    require: true
  },
  companyAddress: {
    type: String,
    require: true
  },
  companyBusiness: {
    type: String,
    require: true
  },
  recuritPosts: {
    type: String,
    require: true
  }
}, { collection: 'company' })

module.exports = mongoose.model('company', companySchema)
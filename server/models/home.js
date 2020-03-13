/**
 * 首页 schema
 */
const mongooes = require('mongoose')

const homeSchema = mongooes.Schema({
  _id: Number,
  question_name: String, // 题库
  select: [
    {
      select_id: Number,
      select_name: String,
      answer_list: Array,
      answer: String
    }
  ],
  fill: [
    {
      select_id: Number,
      select_name: String,
      answer: String
    }
  ],
  judge: [
    {
      select_id: Number,
      judge_name: String,
      answer: String
    }
  ]


  // menu_name: String,
  // icon: String,
  // sub_menu: [
  //   {
  //     sub_name: String,
  //     sub_list: [
  //       {
  //         list_name: String,
  //         list_card: [
  //           {
  //             name: String,
  //             img: String,
  //             url: String,
  //             intro: String
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ]
}, { collection: 'home' })

module.exports = mongooes.model('home', homeSchema)

const tiku = {
  _id: 0,
  question_name: '前端开发', // 题库
  select: [
    {
      select_id: 0,
      select_name: '第一题：xxx',
      answer_list: ['a', 'b', 'c', 'd'],
      answer: 'A'
    },
    {
      select_id: 1,
      select_name: '第二题：xxx',
      answer_list: ['a', 'b', 'c', 'd'],
      answer: 'A'
    }
  ],
  fill: [
    {
      fill_id: 0,
      fill_name: '填空题第一题：xxx',
      answer: 'xxx'
    }
  ],
  judge: [
    {
      judge_id: 0,
      judge_name: '判断题第一题：xxx',
      answer: 'xxx'
    }
  ]
}
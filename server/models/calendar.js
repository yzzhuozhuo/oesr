//
// 笔试日历
// { months: ['03'], days: ['10', '11', '12'], things: '14:00 美团笔试' }
//

const mongoose = require('mongoose')

const calendarSchema = mongoose.Schema({
  months: {
    type: Array,
    require: true
  },
  days: {
    type: Array,
    require: true
  },
  things: {
    type: String,
    require: true
  }
}, { collection: 'calendar' })

module.exports = mongoose.model('calendar', calendarSchema)
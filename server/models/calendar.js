//
// 笔试日历
// { months: ['03'], days: ['10', '11', '12'], things: '14:00 美团笔试' }
//

const mongoose = require('mongoose')

const calendarSchema = mongoose.Schema({
  months: {
    type: Array,
    required: true
  },
  days: {
    type: Array,
    required: true
  },
  things: {
    type: String,
    required: true
  }
}, { collection: 'calendar' })

module.exports = mongoose.model('calendar', calendarSchema)
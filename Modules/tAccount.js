const mongoose = require('mongoose');

const tAccountSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  debit: {
    type: [Number],
    required: true
  },
  credit: {
    type: [Number],
    required: true
  },
  date: {
    type: [Date],
    required: true
  },
  category: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('ledger', tAccountSchema);
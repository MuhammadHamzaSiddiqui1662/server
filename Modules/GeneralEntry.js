const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
})

const entrySchema = mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  accounts: {
    type: [accountSchema],
    required: true
  }
})

module.exports = mongoose.model('general-journal', entrySchema);
const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  _id: Number,
  title: { type: String, required: true },
  isDone: { type: Boolean, default: false },
  regDt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Task', taskSchema);

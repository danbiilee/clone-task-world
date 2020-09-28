const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  id: Number,
  title: String,
  isDone: Boolean,
  tag: String,
  point: Number,
  chkList: [],
  commentList: [],
  fileList: [],
  mberList: [],
  stDt: String,
  endDt: String,
  finDt: String,
  useAt: Boolean,
  regMber: {},
  regDt: { type: Date, default: Date.now },
  regMber: {},
  regDt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('task', taskSchema);

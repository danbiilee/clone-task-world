const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  isDone: { type: Boolean, default: false },
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
  updMber: {},
  updDt: Date,
});

module.exports = mongoose.model('Task', taskSchema);

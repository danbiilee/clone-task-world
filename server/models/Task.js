const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  id: Number,
  title: String,
  isDone: {
    type: Boolean,
    default: false,
  },
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
  updDt: { type: Date, default: Date.now },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = { Task };

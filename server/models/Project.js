const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  _id: Number,
  title: { type: String, required: true, trim: true },
  members: [{ type: Number, ref: 'Member', required: true }],
  tasklists: [{ type: Number, ref: 'Tasklist' }],
  regDt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Project', projectSchema);

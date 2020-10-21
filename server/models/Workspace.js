const mongoose = require('mongoose');

const wsSchema = mongoose.Schema({
  _id: Number,
  title: { type: String, required: true, trim: true },
  members: [{ type: Number, ref: 'Member', required: true }],
  privateAt: { type: String, default: 'N' },
  regDt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Workspace', wsSchema);

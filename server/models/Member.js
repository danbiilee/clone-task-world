const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
  _id: Number,
  mberId: { type: String, required: true, unique: true, trim: true },
  mberName: { type: String, required: true },
  imgUrl: {
    type: String,
    set: (url = 'default.png') => {
      return process.env.PUBLIC_URL + '/resources/img/profile/' + url;
    },
  },
  regDt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Member', memberSchema);

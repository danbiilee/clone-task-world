const mongoose = require('mongoose');

const counterSchema = mongoose.Schema({
  _id: String,
  seq: {
    type: Number,
    default: 0,
    set: param => param,
  },
});

const Counter = mongoose.model('Counter', counterSchema);
const getNextSequence = async name => {
  const result = await Counter.findOneAndUpdate(
    { _id: name },
    { $inc: { seq: 1 } },
    { new: true },
    (error, counter) => {
      if (error) return res.json({ success: false, error });
      return counter;
    },
  );
  return result.seq;
};

module.exports = getNextSequence;

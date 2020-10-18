const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const memberSchema = mongoose.Schema({
  _id: Number,
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    select: false,
  },
  name: { type: String, required: true, trim: true },
  imgUrl: {
    type: String,
    set: img => {
      return '/resources/img/profile/' + img;
    },
  },
  regDt: { type: Date, default: Date.now() },
});

// 비밀번호 확인
memberSchema.methods.comparePassword = function (pwd, callback) {
  if (bcrypt.compareSync(pwd, this.password)) {
    callback(null, true);
  } else {
    callback(new Error('##### Password does not Match!!!'));
  }
};

memberSchema.pre('save', function (next) {
  const member = this;
  // 비밀번호 암호화
  if (member.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(member.password, salt, (err, hash) => {
        if (err) return next(err);
        member.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

module.exports = mongoose.model('Member', memberSchema);

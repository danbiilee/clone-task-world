const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const getNextSequence = require('../models/Counter');

// Create
router.post('/signup', async (req, res) => {
  const member = new Member(req.body);
  const seq = await getNextSequence('memberId');
  member.set({ _id: seq });
  member.set({ imgUrl: 'default.png' });

  // email 중복검사
  Member.findOne({ email: member.email }, (err, result) => {
    if (err) return res.json(err);
    if (result) {
      return res.json({ duplicate: true });
    } else {
      member.save((err, memberInfo) => {
        if (err) throw new Error('###### Member Register is Fail!!!');
        return res.status(200).json({ success: true });
      });
    }
  });
});

// Login
router.post('/login', (req, res) => {
  Member.findOne({ email: req.body.email })
    .select('+password')
    .exec((err, member) => {
      if (err) throw new Error('###### Member Could not be Founded!!!');

      let result = {
        emailCheck: false,
        pwdCheck: false,
      };
      if (member) {
        result.emailCheck = true;
        // 비밀번호 검사
        member.comparePassword(req.body.password, (err, bool) => {
          if (err) return res.json(result);

          result.pwdCheck = bool;
          req.session.LOGIN_USER = member; // 세션 저장
          console.log(`Store Session = ${req.session.LOGIN_USER}`);
          return res.json(result);
        });
      } else {
        return res.json(result);
      }
    });
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.json(err);
    console.log('###### SESSION DESTROY!!!!');
  });
});

// Get Session LOGIN_USER
router.get('/', (req, res) => {
  console.log('##### Start to GET SESSION !!!!');
  if (req.session.LOGIN_USER) return res.json(req.session.LOGIN_USER);
  else return res.json(null);
});

module.exports = router;

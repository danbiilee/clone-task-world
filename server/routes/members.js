const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const Wkspace = require('../models/Workspace');
const getNextSequence = require('../models/Counter');

// Create
router.post('/signup', async (req, res) => {
  // Check Duplication
  let member;
  try {
    member = await Member.findOne({ email: req.body.email });
    if (member) return res.json({ duplicate: true });
  } catch (e) {
    console.log(`##### ERROR: Check Email Duplication `, e);
  }

  // Get Sequences
  let memberId;
  let workspaceId;
  try {
    memberId = await getNextSequence('memberId');
    workspaceId = await getNextSequence('workspaceId');
  } catch (e) {
    console.log(`##### ERROR: Get Sequences `, e);
  }

  // Create Member
  let newMember = new Member(req.body);
  newMember.set({ imgUrl: 'default.png' });
  newMember.set({ _id: memberId });

  let resultMember;
  try {
    resultMember = await newMember.save();
  } catch (e) {
    console.log(`##### ERROR: Create Member `, e);
  }

  // Create MyWorkspace
  let resultWs;
  const ws = new Wkspace({
    _id: workspaceId,
    title: newMember.email.split('@')[0],
    members: [newMember._id],
    privateAt: 'Y',
  });
  try {
    resultWs = await ws.save();
  } catch (e) {
    console.log(`##### ERROR: Create MyWorkspace`, e);
  }

  if (resultMember && resultWs) return res.json({ success: true });
});

// Login
router.post('/login', async (req, res) => {
  let member;
  let result = {
    emailCheck: false,
    pwdCheck: false,
  };

  try {
    member = await Member.findOne({ email: req.body.email })
      .select('+password')
      .exec();
  } catch (e) {
    console.log(`##### ERROR: Find Member `, e);
  }

  if (member) {
    result.emailCheck = true;
    // 비밀번호 검사
    member.comparePassword(req.body.password, (err, bool) => {
      if (err) return res.json(result);

      result.pwdCheck = bool;
      req.session.LOGIN_USER = member; // 세션 저장
      return res.json(result);
    });
  } else {
    return res.json(result);
  }
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.json(err);
    console.log('###### SESSION DESTROY!!!!');
  });
});

module.exports = router;

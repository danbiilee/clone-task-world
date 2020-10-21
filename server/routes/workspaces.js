const express = require('express');
const router = express.Router();
const Wkspace = require('../models/Workspace');

// GET Workspace list
router.get('/', async (req, res) => {
  const loginUser = req.session.LOGIN_USER;
  let wkspaces;
  try {
    wkspaces = await Wkspace.find({
      members: { $in: [loginUser._id] },
    })
      .populate('members')
      .sort('regDt');
    if (wkspaces) return res.json({ wkspaces });
  } catch (e) {
    console.log(`##### ERROR: GET Workspace list `, e);
  }
});

module.exports = router;

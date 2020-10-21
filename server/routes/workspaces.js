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
    if (wkspaces) return res.json(wkspaces);
  } catch (e) {
    console.log(`##### ERROR: GET Workspace list `, e);
  }
});

// GET Workspace One with Projects
router.get('/:id', async (req, res) => {
  let wkspace;
  try {
    wkspace = await Wkspace.findOne({ _id: req.params.id }).populate('members');
    console.log(`GET Workspace One ${wkspace}`);
    //if (wkspace) return res.json({ wkspace });
    if (wkspace) return res.json(wkspace);
  } catch (e) {
    console.log('##### ERROR: GET Workspace One', e);
  }
});

module.exports = router;

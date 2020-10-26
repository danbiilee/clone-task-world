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
    if (wkspace) return res.json(wkspace);
  } catch (e) {
    console.log('##### ERROR: GET Workspace One', e);
  }
});

// Create
router.post('/', async (req, res) => {
  let result;

  // Get Sequences
  let workspaceId;
  try {
    workspaceId = await getNextSequence('workspaceId');
    //console.log('workspaceId', workspaceId);
  } catch (e) {
    console.log(`##### ERROR: Get Sequences `, e);
  }

  const ws = new Wkspace(req.body);
  ws.set({ _id: workspaceId });

  try {
    result = await ws.save();
    if (result) res.json({ success: true });
  } catch (e) {
    console.log(`##### ERROR: Create MyWorkspace`, e);
  }
});

module.exports = router;

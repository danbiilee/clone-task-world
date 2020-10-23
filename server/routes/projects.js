const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET Projects
router.get('/', async (req, res) => {
  const loginUser = req.session.LOGIN_USER;
  let projects;
  try {
    projects = await Project.find({
      members: { $in: [loginUser._id] },
    }).populate('members');
    console.log(`##### projects ${projects}`);
    if (projects) return res.json(projects);
  } catch (e) {
    console.log(`##### ERROR: GET Projects`, e);
  }
});

module.exports = router;

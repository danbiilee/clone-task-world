const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET Projects by WkspaceId
router.get('/list/:id', async (req, res) => {
  let projects;
  try {
    projects = await Project.find({
      workspaces: { $in: [req.params.id] },
    }).populate('members');
    if (projects) return res.json(projects);
  } catch (e) {
    console.log(`##### ERROR: GET Projects`, e);
  }
});

module.exports = router;

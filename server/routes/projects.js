const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET Projects
router.get('/', async (req, res) => {
  let projects;
  try {
    if (projects) return res.json(projects);
  } catch (e) {
    console.log(`##### ERROR: GET Projects`, e);
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.use((req, res, next) => {
  // 미들웨어
  console.log('Time: ', Date.now());
  next();
});

// Show All
router.get('/', async (req, res) => {
  Task.find({}).exec((err, tasks) => {
    if (err) return res.json(err);
    res.json(tasks);
  });
});

// Show One
router.get('/:id', (req, res) => {
  Task.findOne({ id: req.params.id }, (err, task) => {
    if (err) return res.json(err);
    res.json(task);
  });
});

// Create
router.post('/', (req, res) => {
  const task = new Task(req.body);
  task.save((error, taskInfo) => {
    if (error) return res.json({ success: false, error });
    return res.status(200).json({ success: true });
  });
});

module.exports = router;

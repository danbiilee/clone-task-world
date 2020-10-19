const express = require('express');
const router = express.Router();

// Get LOGIN_USER
router.get('/user', (req, res) => {
  if (req.session.LOGIN_USER) return res.json(req.session.LOGIN_USER);
  else return res.json(null);
});

module.exports = router;

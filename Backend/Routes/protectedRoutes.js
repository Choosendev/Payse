const express = require('express');
const router = express.Router();
const { protect } = require('../Middleware/authMiddleware');

router.get('/protected-route', protect, (req, res) => {
  // This route is protected and only accessible by authenticated users
  res.json({ message: 'You have access to this protected route!', user: req.user });
});

module.exports = router;

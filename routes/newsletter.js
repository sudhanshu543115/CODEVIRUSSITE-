const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Newsletter = require('../models/Newsletter');

// @route   POST api/newsletter
// @desc    Subscribe to newsletter
// @access  Public
router.post('/', [
  body('email', 'Please include a valid email').isEmail()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email } = req.body;

  try {
    // Check if already subscribed
    let subscriber = await Newsletter.findOne({ email });
    if (subscriber) {
      return res.status(400).json({ msg: 'Email already subscribed' });
    }

    subscriber = new Newsletter({
      email
    });

    await subscriber.save();
    res.json({ msg: 'Successfully subscribed to newsletter' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;


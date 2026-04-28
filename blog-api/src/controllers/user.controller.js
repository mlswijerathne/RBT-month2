const { body } = require('express-validator');
const User = require('../models/user.model');

const updateValidation = [
  body('name').optional().trim().notEmpty().withMessage('Name cannot be empty'),
  body('bio').optional().isString(),
];

async function getMe(req, res, next) {
  try {
    const user = await User.findById(req.user.userId);
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
}

async function updateMe(req, res, next) {
  try {
    const { name, bio } = req.body;
    const user = await User.update(req.user.userId, { name, bio });
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
}

module.exports = { getMe, updateMe, updateValidation };
